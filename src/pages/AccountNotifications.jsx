import axios from 'axios';
import ApplyModal from '../components/account-notify/ApplyModal';
import ReceiveModal from '../components/account-notify/ReceiveModal';
import ApplyReplyModal from '../components/account-notify/ApplyReplyModal';
import AccountFilter from '../components/account/AccountFilter';
import AccountFilterStatus from '../components/account/AccountFilterStatus';
import { useEffect, useState } from 'react';
import FullScreenLoading from '../components/FullScreenLoading';
import { toast } from 'react-hot-toast';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function AccountNotifications() {
  const [appData, setAppData] = useState([]);
  const [filter, setFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState(undefined);
  const [selectedApp, setSelectedApp] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);

  useEffect(() => {
    const getAppData = async () => {
      try {
        const app = await axios.get(
          `${BASE_URL}/applications?_expand=user&_expand=post`,
        );
        setAppData(app.data);
      } catch (error) {
        toast.error(`無法取得通知資料: ${error.message || '發生未知錯誤'}`);
      }
    };
    getAppData();
  }, []);

  const makeIsRead = async (id) => {
    try {
      await axios.patch(`${BASE_URL}/applications/${id}`, {
        isRead: true,
      });
      setAppData((prev) =>
        prev.map((app) => (app.id === id ? { ...app, isRead: true } : app)),
      );
      console.log(appData);
    } catch (error) {
      toast.error(`標記為已讀失敗: ${error.message || '發生未知錯誤'}`);
    }
  };

  const getBackgroundColorClass = (isRead) =>
    isRead ? 'bg-white' : 'bg-primary-100';

  const handleNotifyClick = (app) => {
    setModalType(null);
    setSelectedApp(app);
    if (app.type === '申請通知') {
      setModalType('apply');
    } else if (app.type === '領取通知') {
      setModalType('receive');
    }
    makeIsRead(app.id);
  };

  const handleModalClose = () => {
    setModalType(null);
  };

  if (!appData) {
    return <div>目前沒有通知。</div>;
  }

  if (appData.length === 0) {
    return (
      <>
        <AccountFilter
          setFilter={setFilter}
          filter={filter}
          appData={appData}
          title="全部通知"
          placeholder="搜尋通知"
          filterOptions={['all', 'apply', 'receive', 'comment']}
        />
        <div className="ms-10">
          <FullScreenLoading />
        </div>
      </>
    );
  }

  const filteredAppData = appData
    .filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'apply') return item.type === '申請通知';
      if (filter === 'receive') return item.type === '領取通知';
      if (filter === 'comment') return item.type === '評價通知';
      return false;
    })
    .filter((item) => (statusFilter ? item.status === statusFilter : true));

  const filteredAppCount = filteredAppData.length;

  return (
    <>
      <AccountFilter
        setFilter={setFilter}
        filter={filter}
        appData={appData}
        title="全部通知"
        placeholder="搜尋通知"
        filterOptions={['all', 'apply', 'receive', 'comment']}
      />
      <AccountFilterStatus
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
        filteredAppCount={filteredAppCount}
      />
      <section className="container notifyList">
        <ul className="row">
          {filteredAppData.length > 0 ? (
            filteredAppData.map((app) => (
              <li className="px-0" key={app.id}>
                <a
                  className={`notify-cover row align-items-center position-relative stretched-link p-7 border-bottom border-gray-400 mx-4 ${getBackgroundColorClass(
                    app.isRead,
                  )}`}
                  onClick={() => handleNotifyClick(app)}
                >
                  <div className="notify-back w-100 h-100 position-absolute">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                        fill="#fff"
                      />
                    </svg>
                    <div className="fs-4 fw-medium text-white mt-7 mt-lg-0 ms-lg-7">
                      查看更多
                    </div>
                  </div>
                  <div className="col-6 col-lg-1 order-lg-1 mb-5 mb-lg-0 px-0">
                    <p className="bg-primary fs-6 text-white px-2 py-1 d-inline rounded-3 align-middle text-nowrap">
                      {app.type}
                    </p>
                  </div>
                  <div className="col-6 col-lg-2 order-lg-3 text-end mb-6 mb-lg-0 px-0">
                    <time className="text-gray-700">
                      {formatDate(app.created_time)}
                    </time>
                  </div>
                  <div className="col-lg-9 order-lg-2 ps-lg-6 px-0">
                    <h6 className="text-primary fw-bold mb-2">
                      [{app.status}]
                    </h6>
                    <h4 className="fw-bold text-gray-900 mb-2">
                      {app.type === '申請通知'
                        ? app.user.nickName
                        : app.post.title}
                    </h4>
                    <p className="fs-6 text-gray-700 mb-0">
                      {app.type === '申請通知' ? app.message : app.replyMessage}
                    </p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <div className="text-center py-5">目前無通知</div>
          )}
        </ul>
      </section>

      {modalType === 'apply' && (
        <ApplyModal
          app={selectedApp}
          onClose={handleModalClose}
          onAgree={() => setIsReplyModalOpen(true)}
        />
      )}
      {modalType === 'receive' && (
        <ReceiveModal app={selectedApp} onClose={handleModalClose} />
      )}
      {isReplyModalOpen && (
        <ApplyReplyModal onClose={() => setIsReplyModalOpen(false)} />
      )}
    </>
  );
}

export default AccountNotifications;
