import { forwardRef, useContext, useEffect, useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import useFormSelectOptions from '@/hooks/useFormSelectOptions';
import useCreatePost from '@/query/useCreatePost';
import useUpdatePost from '@/query/useUpdatePost';
import { daysFormat } from '@/utils/formatTIme';
import { overfoodOptions, meatOrVeggieOptions } from '@/data/radioOptions';
import { iconCloseUrl } from '@/data/imagesPath';

import { shareFoodModalContext } from '@/contexts/modalContext';
import FormInput from './formElements/FormInput';
import FormTextArea from './formElements/FormTextArea';
import FormSelect from './formElements/FormSelect';
import FormRadioGroup from './formElements/FormRadioGroup';
import TimePicker from './formElements/TimePicker';

const defaultValues = {
  redeemCode: '',
  title: '',
  content: '',
  food: {
    name: '',
    type: '',
    saveMethod: '',
    totalQuantity: 0,
    restQuantity: 0,
    expiryDate: '',
    isPastBestBefore: '',
    dietType: '',
  },
  pickup: {
    city: '',
    district: '',
    time: '',
    address: '',
  },
  imagesUrl: [],
  viewCount: 1,
  commentCount: 0,
  likeCount: 0,
  // 還沒有整合使用者系統，預設新增貼文為法國地頭蛇
  userId: 1,
};
const ShareFoodModal = forwardRef(({ mode, formFields }, ref) => {
  const { cityData, foodType, saveMethod } = useFormSelectOptions();

  const methods = useForm({
    defaultValues: {},
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
    watch,
  } = methods;

  useEffect(() => {
    if (mode === 'edit' && formFields) {
      reset(formFields);
    } else {
      reset(defaultValues);
    }
  }, [mode, formFields, reset]);

  const selectedCity = watch('pickup.city');
  const districts =
    cityData?.find((city) => city.name === selectedCity)?.districts || [];

  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (cityData) {
      setCities(cityData);
    }
  }, [cityData, reset]);

  const createNewPostData = (formData) => {
    const { food, imagesUrl, ...rest } = formData;
    const { totalQuantity, expiryDate, ...submitData } = food;
    const formattedExpiryDate = daysFormat(expiryDate, 'YYYY-MM-DD');
    const createdPostDate = daysFormat();
    const uid = nanoid(6);
    const imagesUrlArray = imagesUrl ? [imagesUrl] : [];

    return {
      ...rest,
      redeemCode: uid,
      imagesUrl: imagesUrlArray,
      createdPostDate,
      food: {
        ...submitData,
        expiryDate: formattedExpiryDate,
        totalQuantity: Number(totalQuantity),
        restQuantity: Number(totalQuantity),
      },
      pickup: {
        ...formData.pickup,
      },
    };
  };

  const updatePostData = (formData) => {
    const { food, imagesUrl, pickup, ...rest } = formData;
    const { expiryDate, ...submitData } = food;
    const formattedExpiryDate = daysFormat(expiryDate, 'YYYY-MM-DD');
    const imagesUrlArray = imagesUrl ? [imagesUrl] : [];

    return {
      id: formData.id,
      data: {
        ...rest,
        imagesUrl: imagesUrlArray,
        food: {
          ...submitData,
          expiryDate: formattedExpiryDate,
        },
        pickup: {
          ...pickup,
        },
      },
    };
  };

  const { mutate: createPostMutation } = useCreatePost();
  const { mutate: updatePostMutation } = useUpdatePost();

  const createPost = (formData) => {
    const data = createNewPostData(formData);
    createPostMutation(data, {
      onSuccess: () => toast.success(`分享食物貼文發送成功`),
      onError: (error) =>
        toast.error(`發送貼文失敗:: ${error.message || '未知錯誤'}`),
    });
  };

  const updatePost = (formData) => {
    const { id, data } = updatePostData(formData);
    updatePostMutation(
      { id, data },
      {
        onSuccess: () => toast.success(`編輯貼文成功`),
        onError: (error) =>
          toast.error(`編輯貼文失敗:: ${error.message || '未知錯誤'}`),
      },
    );
  };

  const onSubmit = (data) => {
    const mutationFn = mode === 'share' ? createPost : updatePost;
    mutationFn(data);
  };

  const { closeFoodModal } = useContext(shareFoodModalContext);
  const closeModal = () => {
    reset();
    closeFoodModal();
  };

  return (
    <FormProvider {...methods}>
      <div
        className="modal fade"
        id="shareFoodModal"
        tabIndex="-1"
        aria-labelledby="shareFoodModal"
        aria-hidden="true"
        ref={ref}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content bg-white">
            <div className="modal-header border-0 p-lg-7 py-7 px-4">
              <h1
                className="modal-title fw-bolder lh-xs"
                id="shareFoodModalLabel"
              >
                {mode === 'share' ? '分享美味' : '編輯美味'}
              </h1>
              <img
                src={iconCloseUrl}
                alt="Close"
                className="ms-auto pointer"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="modal-body p-lg-7">
              <p className="text-black mb-5">
                請回答以下所有問題，讓領取者清楚了解您分享的食物。
              </p>
              <form onSubmit={handleSubmit(onSubmit)} id="shareFood" noValidate>
                <div className="row">
                  <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
                    <label
                      htmlFor="PostTitle"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 py-4"
                    >
                      貼文標題
                      <span className="text-danger"> * </span>
                    </label>
                    <FormInput
                      id="PostTitle"
                      name="title"
                      label="貼文標題"
                      rules={{
                        required: {
                          value: true,
                          message: '標題為必填',
                        },
                      }}
                    />
                  </div>
                  <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
                    <label
                      htmlFor="FoodName"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 py-4"
                    >
                      食物名稱
                      <span className="text-danger"> * </span>
                    </label>
                    <FormInput
                      id="FoodName"
                      name="food.name"
                      label="食物名稱"
                      rules={{
                        required: {
                          value: true,
                          message: '食物名稱為必填',
                        },
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-7">
                      <div className="share-food-modal d-lg-flex">
                        <div className="me-lg-7 mb-2">
                          <label
                            htmlFor="FoodType"
                            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4 pe-1"
                          >
                            食物類型
                            <span className="text-danger"> * </span>
                          </label>
                        </div>
                        <FormSelect
                          id="FoodType"
                          name="food.type"
                          label="食物類型"
                          options={foodType}
                          optionLabelKey="type"
                          optionValueKey="value"
                          rules={{
                            required: {
                              value: true,
                              message: '請選擇食物類型',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-7">
                      <div className="share-food-modal d-lg-flex">
                        <div className="me-lg-7 mb-2">
                          <label
                            htmlFor="SaveMethod"
                            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
                          >
                            保存方式
                            <span className="text-danger"> * </span>
                          </label>
                        </div>
                        <FormSelect
                          id="SaveMethod"
                          name="food.saveMethod"
                          label="保存方式"
                          options={saveMethod}
                          optionLabelKey="type"
                          optionValueKey="value"
                          rules={{
                            required: {
                              value: true,
                              message: '請選擇食物保存的方式',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <div className="share-food-modal d-lg-flex">
                        <div className="me-lg-7 mb-2">
                          <label
                            htmlFor="FoodQty"
                            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-8 py-4"
                          >
                            食物份數
                            <span className="text-danger"> * </span>
                          </label>
                        </div>
                        <FormInput
                          id="FoodQty"
                          name="food.totalQuantity"
                          type="number"
                          label="食物份數"
                          rules={{
                            required: {
                              value: true,
                              message: '請最少輸入一份',
                            },
                            min: {
                              value: 0,
                              message: '數字不能小於 0',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <div className="share-food-modal d-lg-flex">
                        <div className="me-lg-7 mb-2">
                          <label
                            htmlFor="exp"
                            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap pe-7 py-2"
                          >
                            有效期限
                            <span className="text-danger"> * </span>
                          </label>
                        </div>
                        <Controller
                          name="food.expiryDate"
                          control={methods.control}
                          rules={{
                            required: '請選擇有效期限',
                          }}
                          render={({ field }) => (
                            <DatePicker
                              id="exp"
                              selected={field.value}
                              onChange={field.onChange}
                              dateFormat="yyyy/MM/dd"
                              className="form-select border-gray-400 py-2 px-5 rounded-3 bg-white"
                              placeholderText="請選擇有效期限"
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FormRadioGroup
                      id="expiredFood"
                      name="food.isPastBestBefore"
                      label="是否已過期"
                      options={overfoodOptions}
                      rules={{
                        required: '請至少選擇一項',
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormRadioGroup
                      id="MeatOrVeggie"
                      name="food.dietType"
                      label="葷食/素食"
                      options={meatOrVeggieOptions}
                      rules={{
                        required: '請至少選擇一項',
                      }}
                    />
                  </div>

                  <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                    <label
                      htmlFor="inputAddress"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                    >
                      領取地點
                      <span className="text-danger"> * </span>
                    </label>
                    <div className="w-100 d-flex align-items-start gap-2">
                      <div className="w-lg-50 w-100 d-flex gap-2">
                        <FormSelect
                          id="city"
                          name="pickup.city"
                          label="縣市"
                          options={cities}
                          rules={{
                            required: {
                              value: true,
                              message: `請選擇縣市類型`,
                            },
                          }}
                        />
                        <FormSelect
                          id="district"
                          name="pickup.district"
                          label="區域"
                          options={districts}
                          rules={{
                            required: {
                              value: true,
                              message: `請選擇區域類型`,
                            },
                          }}
                        />
                      </div>
                      <FormInput
                        id="inputAddress"
                        label="地址"
                        name="pickup.address"
                        rules={{
                          required: {
                            value: true,
                            message: '請填入地址',
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                    <label
                      htmlFor="TimePicker"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                    >
                      領取時間
                      <span className="text-danger"> * </span>
                    </label>
                    <TimePicker />
                  </div>

                  <div className="share-food-modal mb-7  d-flex flex-column flex-lg-row gap-2 align-items-lg-center">
                    <label
                      htmlFor="UpdatePhoto"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7"
                    >
                      上傳圖片
                      <span className="text-danger"> * </span>
                    </label>
                    <FormInput
                      id="UpdatePhoto"
                      label="圖片網址，ex:https://images.unsplash.com/photo-15689013"
                      name="imagesUrl"
                      rules={{
                        required: {
                          value: true,
                          message: '請輸入圖片網址',
                        },
                      }}
                    />
                  </div>
                  <div className="share-food-modal mb-7 d-flex flex-column flex-lg-row gap-2">
                    <label
                      htmlFor="ReplyMessage"
                      className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap me-lg-7 mt-lg-3"
                    >
                      介紹與描述
                      <span className="text-danger"> * </span>
                    </label>
                    <FormTextArea
                      id="ReplyMessage"
                      name="content"
                      label="介紹與描述"
                      rows={5}
                      rules={{
                        required: {
                          value: true,
                          message: '請輸入食物介紹',
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="modal-footer px-0">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    disabled={!isValid || !isDirty}
                  >
                    {mode === 'share' ? '送出' : '更改貼文'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
});

ShareFoodModal.propTypes = {
  mode: PropTypes.oneOf(['edit', 'share']),
  formFields: PropTypes.shape({
    redeemCode: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    imagesUrl: PropTypes.arrayOf(PropTypes.string),
    viewCount: PropTypes.number,
    commentCount: PropTypes.number,
    likeCount: PropTypes.number,
    userId: PropTypes.number,
    pickup: PropTypes.shape({
      city: PropTypes.string,
      district: PropTypes.string,
      time: PropTypes.string,
      address: PropTypes.string,
    }),
    food: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      saveMethod: PropTypes.string,
      totalQuantity: PropTypes.number,
      restQuantity: PropTypes.number,
      expiryDate: PropTypes.string,
      isPastBestBefore: PropTypes.string,
      dietType: PropTypes.string,
    }),
  }),
};

// ESLint 需要檢查 react/display-name
ShareFoodModal.displayName = 'ShareFoodModal';

export default ShareFoodModal;
