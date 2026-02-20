import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import AccountNav from '@/components/account/AccountNav';
import FullScreenLoading from '@/components/FullScreenLoading';

function Account() {
  const { isLogin, isAuthChecked } = useSelector((state) => state.authSlice);

  if (!isAuthChecked) return <FullScreenLoading />;
  if (!isLogin) return <Navigate to="/login" replace />;

  return (
    <>
      <div className="container">
        <AccountNav />
        <Outlet />
      </div>
    </>
  );
}
export default Account;
