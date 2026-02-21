import Front from '@/layouts/Front';
import Account from '@/layouts/Account';
import Auth from '@/layouts/Auth';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Event from '@/pages/Event';
import AllPost from '@/pages/AllPosts';
// import Post from '@/pages/Post';
import PostDetail from '@/pages/PostDetail';
import AboutUs from '@/pages/AboutUs';
import GuideLine from '@/pages/GuideLine';
import PageNotFound from '@/pages/PageNotFound';
import AccountSetting from '@/pages/AccountSetting';
import AccountNotifications from '@/pages/AccountNotifications';
import AccountPosts from '@/pages/AccountPosts';
import AccountFollowing from '@/pages/AccountFollowing';
import AccountHistory from '@/pages/AccountHistory';

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
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default routes;
