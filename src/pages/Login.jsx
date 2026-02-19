import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import AlertModal from '@/components/AlertModal';
import { login } from '@/query/api/auth';
import { queryKeys } from '@/data/queryKeys';
import { keepToken } from '@/utils/handleToken';

const Login = () => {
  const navigate = useNavigate();
  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  //eye
  const [passwordHidden, setPasswordHidden] = useState(true);
  const submitData = (data) => {
    const { email, password } = data;
    loginMutation({
      email,
      password,
    });
  };

  const queryClient = useQueryClient();
  const { mutate: loginMutation } = useMutation({
    mutationKey: [queryKeys.auth],
    mutationFn: (data) => login(data),
    onSuccess: (res) => {
      reset();
      keepToken(res.data.token);
      queryClient.invalidateQueries([queryKeys.auth]);
      AlertModal.successMessage({
        text: `尊敬的${res.data.user.nickname}！歡迎回來！`,
      });
      navigate('/account/setting');
    },
    onError: (error) => {
      toast.error(`無法載入用戶資料: ${error.message || '發生未知錯誤'}`);
    },
  });

  const { isLogin } = useSelector((state) => state.authSlice);

  if (isLogin) return <Navigate to="/account/setting" replace />;

  return (
    <>
      <h2 className="fs-1 fw-bolder mb-14">歡迎回來！</h2>
      <form className="row g-3" onSubmit={handleSubmit(submitData)}>
        <div className="col-12">
          <div className="mb-12">
            <label htmlFor="validationUsername" className="form-label mb-4">
              用戶名<span className="text-danger ms-1">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`form-control p-5 border border-gray-400 bg-white rounded-3 ${
                errors?.email ? 'is-invalid' : ''
              }`}
              id="validationUsername"
              placeholder="請輸入電子信箱"
              {...register('email', {
                required: '請輸入正確的電子信箱',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '電子信箱欄位格式錯誤',
                },
              })}
            />
            {errors?.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="col-12">
            <div className="mb-4 position-relative">
              <label htmlFor="validationPassword" className="form-label mb-4">
                密碼<span className="text-danger ms-1">*</span>
              </label>
              <input
                type={passwordHidden ? 'password' : 'text'}
                name="password"
                className={`form-control p-5 border border-gray-400 bg-white rounded-3 ${
                  errors?.password ? 'is-invalid' : ''
                }`}
                id="validationPassword"
                placeholder="請輸入密碼"
                {...register('password', {
                  required: '請輸入正確的密碼',
                })}
              />
              {!errors?.password && (
                <button
                  type="button"
                  id="checkEye"
                  className="btn btn-sm p-0 border-0"
                  onClick={() => {
                    setPasswordHidden((pre) => !pre);
                  }}
                >
                  <i
                    className={`bi ${
                      passwordHidden ? 'bi-eye' : 'bi-eye-slash'
                    }`}
                  ></i>
                </button>
              )}
              {errors?.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between align-items-center mb-12">
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="check"
                  id="invalidCheck"
                  {...register('check')}
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  記住帳號
                </label>
              </div>
              <a href="#">忘記密碼？</a>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-dark w-100 mb-12 rounded-3 d-flex align-items-center justify-content-center"
              >
                立即登入
              </button>
            </div>
            <div className="col-12">
              沒有 Flavor Trail 帳號嗎？
              <Link
                to="/"
                className="link-primary ms-2 text-decoration-underline"
              >
                立即註冊
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
