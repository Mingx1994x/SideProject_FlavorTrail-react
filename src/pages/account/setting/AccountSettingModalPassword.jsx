import { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { Modal } from 'bootstrap';

import { updateUserPassword } from '@/query/api/user';
import { iconCloseUrl } from '@/data/imagesPath';
import { queryKeys } from '@/data/queryKeys';
import { accountModalContext } from '@/contexts/modalContext';
import { removeToken } from '@/utils/handleToken';

function AccountSettingModalPassword() {
  const { modal, closeModal } = useContext(accountModalContext);

  const updatePasswordModal = useRef(null);
  const updatePasswordModalRef = useRef(null);
  useEffect(() => {
    if (!updatePasswordModalRef.current) return;

    updatePasswordModal.current = new Modal(updatePasswordModalRef.current);

    return () => updatePasswordModal.current?.dispose();
  }, []);

  useEffect(() => {
    if (modal === 'updatePassword') {
      updatePasswordModal.current?.show();
    } else {
      updatePasswordModal.current?.hide();
    }
  }, [modal]);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updatePassword } = useMutation({
    mutationFn: updateUserPassword,
    onSuccess: (res) => {
      closeModal();
      toast.success(res.message);
      removeToken();
      queryClient.invalidateQueries([queryKeys.auth]);
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const methods = useForm({
    defaultValues: {},
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = methods;

  const onSubmit = (data) => {
    updatePassword(data);
  };

  const fieldError = (name) => get(errors, name);

  return (
    <div
      className="modal fade"
      id="passwordModalToggle"
      tabIndex="-1"
      aria-labelledby="passwordModalToggleLabel"
      aria-hidden="true"
      ref={updatePasswordModalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="accountModal modal-content bg-white">
          <div className="modal-header border-0 p-lg-7 py-7 px-4">
            <h2
              className="modal-title fs-1 lh-xs fw-bolder"
              id="passwordModalToggleLabel"
            >
              變更密碼
            </h2>
            <img
              src={iconCloseUrl}
              alt="close"
              className="ms-auto p-2 pointer"
              aria-label="Close"
              onClick={closeModal}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body py-7 px-4 px-lg-7">
              <div className="mb-7">
                <label
                  htmlFor="originPassword"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  當前密碼
                </label>
                <input
                  type="password"
                  className={`form-control bg-white border-gray-400 px-5 py-2 lh-base ${fieldError('originPassword') && 'is-invalid'}`}
                  id="originPassword"
                  placeholder="請輸入原本的密碼"
                  name="originPassword"
                  {...register('originPassword', {
                    required: '當前密碼欄位必填',
                  })}
                />
                {fieldError('originPassword') && (
                  <div className="invalid-feedback">
                    {fieldError('originPassword')?.message}
                  </div>
                )}
              </div>
              <div className="mb-7">
                <label
                  htmlFor="password"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  新密碼
                </label>
                <input
                  type="password"
                  className={`form-control bg-white border-gray-400 px-5 py-2 lh-base ${fieldError('password') && 'is-invalid'}`}
                  id="password"
                  placeholder="請輸入新密碼"
                  name="password"
                  {...register('password', {
                    required: '新密碼為必填欄位',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/,
                      message: '密碼欄位格式錯誤，6～12位大小寫字母與數字',
                    },
                  })}
                />
                {fieldError('password') && (
                  <div className="invalid-feedback">
                    {fieldError('password').message}
                  </div>
                )}
              </div>
              <div className="mb-7">
                <label
                  htmlFor="confirmPassword"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  確認新密碼
                </label>
                <input
                  type="password"
                  className={`form-control bg-white border-gray-400 px-5 py-2 lh-base ${fieldError('confirmPassword') && 'is-invalid'}`}
                  id="confirmPassword"
                  placeholder="請再次輸入新密碼"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: '請再次輸入密碼',
                    deps: ['password'],
                    validate: (value) =>
                      value === getValues('password') ||
                      '確認密碼與新密碼不相符',
                  })}
                />
                {fieldError('confirmPassword') && (
                  <div className="invalid-feedback">
                    {fieldError('confirmPassword').message}
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer py-7 px-lg-7">
              <button
                type="button"
                className="btn btn-white"
                onClick={closeModal}
              >
                取消
              </button>
              <button type="submit" className="btn btn-dark fw-bold h6">
                變更
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountSettingModalPassword;
