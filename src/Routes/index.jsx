import Front from '../layouts/Front';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Event from '../pages/Event';
import AllPost from '../pages/AllPosts';
import AboutUs from '../pages/AboutUs';
import GuideLine from '../pages/GuideLine';
// import Post from '../pages/Post';
import PageNotFound from '../pages/PageNotFound';
import Account from '../layouts/Account';
import AccountSetting from '../pages/account/AccountSetting';
import AccountNotifications from '../pages/account/AccountNotifications';
import AccountPosts from '../pages/account/AccountPosts';
import AccountFollowing from '../pages/account/AccountFollowing';
import AccountHistory from '../pages/account/AccountHistory';
import PostDetail from '../pages/PostDetail';

const routes = [
  {
    path: '/',
    element: <Front />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'event',
        element: <Event />,
      },
      {
        path: 'all-posts',
        element: <AllPost />,
      },
      {
        path: 'post/:id',
        element: <PostDetail />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'guide-line',
        element: <GuideLine />,
      },
      {
        path: 'account',
        element: <Account />,
        children: [
          {
            path: 'setting',
            element: <AccountSetting />,
          },
          {
            path: 'notifications',
            element: <AccountNotifications />,
          },
          {
            path: 'my-posts',
            element: <AccountPosts />,
          },
          {
            path: 'following',
            element: <AccountFollowing />,
          },
          {
            path: 'history',
            element: <AccountHistory />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default routes;
