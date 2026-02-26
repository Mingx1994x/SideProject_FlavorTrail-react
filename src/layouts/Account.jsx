import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import AccountNav from '@/components/account/AccountNav';
import FullScreenLoading from '@/components/FullScreenLoading';
import AccountModalProvider from '@/contexts/accountModal/AccountModalProvider';

function Account() {
  const { isLogin, isAuthChecked } = useSelector((state) => state.authSlice);

  if (!isAuthChecked) return <FullScreenLoading />;
  if (!isLogin) return <Navigate to="/login" replace />;

  return (
    <AccountModalProvider>
      <div className="container">
        <AccountNav />
        <Outlet />
      </div>
    </AccountModalProvider>
  );
}
export default Account;
