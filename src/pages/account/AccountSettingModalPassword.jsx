function AccountSettingModalPassword() {
  return (
    <>
      <div
        className="modal fade"
        id="passwordModalToggle"
        tabIndex="-1"
        aria-labelledby="passwordModalToggleLabel"
        aria-hidden="true"
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
                src="./assets/images/icon/x.svg"
                alt="close"
                className="ms-auto p-2 pointer"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body py-7 px-4 px-lg-7">
              <div className="mb-7">
                <label
                  htmlFor="currentPassword"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  當前密碼
                </label>
                <input
                  type="password"
                  className="form-control bg-white border-gray-400 px-5 py-2 lh-base"
                  id="currentPassword"
                  placeholder="請輸入原本的密碼"
                />
              </div>
              <div className="mb-7">
                <label
                  htmlFor="newPassword"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  新密碼
                </label>
                <input
                  type="password"
                  className="form-control bg-white border-gray-400 px-5 py-2 lh-base"
                  id="newPassword"
                  placeholder="請輸入新密碼"
                />
              </div>
              <div className="mb-7">
                <label
                  htmlFor="confirmNewPassword"
                  className="form-label text-gray-700 lh-xs fw-bold"
                >
                  確認新密碼
                </label>
                <input
                  type="password"
                  className="form-control bg-white border-gray-400 px-5 py-2 lh-base"
                  id="confirmNewPassword"
                  placeholder="請再次輸入新密碼"
                />
              </div>
            </div>
            <div className="modal-footer py-7 px-lg-7">
              <button
                type="button"
                className="btn btn-white"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button type="button" className="btn btn-dark fw-bold h6">
                變更
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AccountSettingModalPassword;
