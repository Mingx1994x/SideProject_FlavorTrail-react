import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import AccountSettingModalPassword from '@/pages/account/setting/AccountSettingModalPassword';
import FullScreenLoading from '@/components/FullScreenLoading';
import ChangePhotoModal from '@/components/account/ChangePhotoModal';
import FormInput from '@/components/formElements/FormInput';
import FormTextArea from '@/components/formElements/FormTextArea';
import FormSelect from '@/components/formElements/FormSelect';

import {
  authQueriesKey,
  cityQueryOption,
  userQueryOption,
} from '@/query/handleQueryOption';
import { updateUserProfile } from '@/query/api/user';
import { accountModalContext } from '@/contexts/modalContext';
import { logoUrl } from '@/data/imagesPath';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_ID = '1';

function AccountSettingForm() {
  const { openModal } = useContext(accountModalContext);
  const [cities, setCities] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const methods = useForm({
    defaultValues: {},
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields },
    watch,
    reset,
    setValue,
  } = methods;

  const selectedCity = watch('liveCity');
  const avatarUrl = watch('avatarUrl') || logoUrl;

  const handleSelectChange = (e) => {
    const cityName = e.target.value;
    const city = cities.find((item) => item.name === cityName);
    setValue('liveDistrict', city?.districts?.[0]?.name || '');
  };

  const { data: userProfile } = useQuery(userQueryOption());

  const { data: cityData, isPending } = useQuery(cityQueryOption());

  const districts =
    cityData?.find((city) => city.name === selectedCity)?.districts || [];
  const queryClient = useQueryClient();
  const { mutate: updateProfile } = useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: (res) => {
      queryClient.invalidateQueries(authQueriesKey.user);
      toast.success(res.message);
    },
  });

  useEffect(() => {
    if (cityData) {
      setCities(cityData);
    }
    if (userProfile) {
      reset({
        name: userProfile.data.name || '',
        nickname: userProfile.data.nickname || '',
        email: userProfile.data.email || '',
        phone: userProfile.data.phone ? `0${userProfile.data.phone}` : '',
        introduce: userProfile.data.introduce || '',
        avatarUrl: userProfile.data.avatarUrl || '',
        liveCity: userProfile.data.liveCity || '',
        liveDistrict: userProfile.data.liveDistrict || '',
      });

      setIsDataLoaded(true);
    }
  }, [userProfile, cityData, reset]);

  const deletePhoto = async () => {
    try {
      await toast.promise(
        axios.patch(`${BASE_URL}/users/${USER_ID}`, {
          avatarUrl: null,
        }),
        {
          loading: '處理中...',
          success: '照片刪除成功',
          error: '刪除失敗，請稍候再試',
        },
      );
      window.location.reload();
    } catch (error) {
      toast.error(`刪除照片失敗: ${error.message || '發生未知錯誤'}`);
    }
  };

  const getDirtyValues = (dirtyFields, allValues) => {
    return Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = allValues[key];
      return acc;
    }, {});
  };
  const onSubmit = (data) => {
    const newProfileData = getDirtyValues(dirtyFields, data);
    updateProfile(newProfileData);
  };

  if (!userProfile && !isPending) {
    return <FullScreenLoading />;
  }

  return (
    <>
      {/* 大頭照 */}
      <FormProvider {...methods}>
        <div className="col-lg-3 mb-2">
          <div className="bg-white rounded-3 text-center d-flex flex-column py-7">
            <div className="overflow-hidden rounded-circle avatar-img m-auto mb-7">
              <img
                src={avatarUrl}
                alt="avatar"
                className="object-fit-cover"
                id="avatarUrl"
              />
            </div>
            <div className="d-flex flex-sm-column flex-sm-column-reverse justify-content-center">
              <div className="me-2 me-sm-0">
                <button
                  type="button"
                  className="btn btn-white fw-bold h6"
                  onClick={deletePhoto}
                >
                  刪除照片
                </button>
              </div>
              <div className="mb-sm-2">
                <button
                  type="button"
                  className="btn btn-dark fw-bold h6"
                  data-bs-toggle="modal"
                  data-bs-target="#changePhotoModal"
                >
                  上傳新照片
                </button>
              </div>
            </div>
          </div>
        </div>
        <ChangePhotoModal />

        {/* 表單 */}
        <div className="col-lg-9">
          <div className="row">
            <div className="col">
              <div>
                <form
                  className="bg-white rounded-top-3 p-7"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row row-cols-sm-2">
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="name"
                      >
                        姓名
                      </label>
                      <FormInput
                        id="name"
                        label="姓名"
                        name="name"
                        rules={{
                          required: {
                            value: true,
                            message: '標題為必填',
                          },
                        }}
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="nickName"
                      >
                        暱稱
                      </label>
                      <FormInput
                        id="nickname"
                        name="nickname"
                        label="暱稱"
                        rules={{
                          required: {
                            value: true,
                            message: '暱稱為必填',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="row row-cols-sm-2">
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="email"
                      >
                        電子郵件
                      </label>
                      <FormInput
                        id="email"
                        type="email"
                        name="email"
                        label="信箱"
                        rules={{
                          required: {
                            value: true,
                            message: '信箱為必填',
                          },
                        }}
                        disabled
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="phone"
                      >
                        聯絡電話
                      </label>
                      <FormInput
                        id="phone"
                        name="phone"
                        label="聯絡電話"
                        rules={{
                          required: {
                            value: true,
                            message: '電話為必填',
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: '電話格式不正確',
                          },
                          minLength: {
                            value: 6,
                            message: '不少於 6 碼',
                          },
                          maxLength: {
                            value: 12,
                            message: '不大於 12 碼',
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-7">
                    <label
                      className="form-label h6 fw-bold text-gray-700 pb-2"
                      htmlFor="liveCity"
                    >
                      所在位置
                    </label>
                    <div className="d-flex gap-2">
                      {isDataLoaded ? (
                        <>
                          <div className="col-6 col-md-auto">
                            <FormSelect
                              id="city"
                              name="liveCity"
                              label="縣市"
                              options={cities}
                              optionLabelKey="name"
                              optionValueKey="name"
                              handleChange={handleSelectChange}
                            />
                          </div>
                          <div className="col-6 col-md-auto">
                            <FormSelect
                              id="district"
                              name="liveDistrict"
                              label="區域"
                              options={districts}
                              optionLabelKey="name"
                              optionValueKey="name"
                            />
                          </div>
                        </>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="form-label h6 fw-bold text-gray-700 pb-2"
                      htmlFor="introduce"
                    >
                      個人介紹
                    </label>
                    <FormTextArea
                      id="introduce"
                      name="introduce"
                      label="個人介紹"
                      rows={8}
                    />
                  </div>
                  <div className="border-top rounded-bottom-3 bg-white pt-7">
                    <div className="d-flex justify-content-end">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn btn-white fw-bold h6"
                          onClick={() => openModal('updatePassword')}
                        >
                          變更密碼
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-dark fw-bold h6"
                          id="updateSetting"
                          disabled={!isDirty}
                        >
                          更新個人設定
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
      <AccountSettingModalPassword />
    </>
  );
}

export default AccountSettingForm;
