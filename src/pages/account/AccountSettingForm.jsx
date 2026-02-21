import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import FullScreenLoading from '@/components/FullScreenLoading';
import ChangePhotoModal from '@/components/account/ChangePhotoModal';
import AccountSettingModalPassword from '@/pages/account/AccountSettingModalPassword';
import InputText from '@/components/formElements/InputText';
import SelectCity from '@/components/formElements/SelectCity';

import {
  cityQueryOption,
  userQueryOption,
} from '../../query/handleQueryOption';
import { logoUrl } from '@/data/imagesPath';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_ID = '1';

function AccountSettingForm() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const methods = useForm({
    defaultValues: {},
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = methods;

  // const watchAllFields = watch();
  const avatarUrl = watch('avatarUrl') || logoUrl;

  const { data: userProfile } = useQuery(userQueryOption());

  const { data: cityData, isPending } = useQuery(cityQueryOption());

  useEffect(() => {
    if (cityData) {
      setCities(cityData);
    }
    if (userProfile) {
      setSelectedCity(userProfile.data.liveCity || '');
      reset({
        name: userProfile.data.name || '',
        nickName: userProfile.data.nickname || '',
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

  useEffect(() => {
    if (selectedCity) {
      const selectedCityData = cities.find(
        (city) => city.name === selectedCity,
      );
      setDistricts(selectedCityData ? selectedCityData.districts : []);
    } else {
      setDistricts([]);
    }
  }, [selectedCity, cities]);

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

  const onSubmit = (data) => {
    console.log(data);
    // toast.success('個人資料已修改');
    // setIsFormChanged(false);
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
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="姓名"
                        id="name"
                        type="text"
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
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="暱稱"
                        id="nickName"
                        name="nickName"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: '標題為必填',
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
                      <input
                        id="email"
                        type="text"
                        name="email"
                        className="form-control py-2 px-5 border-gray-200 rounded-3 lh-account text-gray-700"
                        disabled
                        {...register('email')}
                      />
                    </div>
                    <div className="mb-7">
                      <label
                        className="form-label h6 fw-bold text-gray-700 pb-2"
                        htmlFor="phone"
                      >
                        聯絡電話
                      </label>
                      <InputText
                        register={register}
                        errors={errors}
                        labelText="聯絡電話"
                        id="phone"
                        name="phone"
                        type="text"
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
                            <SelectCity
                              register={register}
                              errors={errors}
                              labelText="縣市"
                              id="city"
                              name="liveCity"
                              options={cities}
                              optionLabelKey="name"
                              optionValueKey="name"
                              rules={{
                                required: {
                                  value: true,
                                  message: `請選擇縣市`,
                                },
                              }}
                              onChange={(e) => setSelectedCity(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-md-auto">
                            <SelectCity
                              register={register}
                              errors={errors}
                              labelText="區域"
                              id="district"
                              name="liveDistrict"
                              options={districts}
                              optionLabelKey="name"
                              optionValueKey="name"
                              rules={{
                                required: {
                                  value: true,
                                  message: `請選擇區域`,
                                },
                              }}
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
                    <textarea
                      className="form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account"
                      id="introduce"
                      name="introduce"
                      rows="8"
                      {...register('introduce')}
                    ></textarea>
                  </div>
                  <div className="border-top rounded-bottom-3 bg-white pt-7">
                    <div className="d-flex justify-content-end">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn btn-white fw-bold h6"
                          data-bs-toggle="modal"
                          data-bs-target="#passwordModalToggle"
                        >
                          變更密碼
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-dark fw-bold h6"
                          id="updateSetting"
                          // disabled={!isValid || !isFormChanged}
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
