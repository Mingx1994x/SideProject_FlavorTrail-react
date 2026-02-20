import { createHashRouter, RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import routes from '@/routes';
import { useAuthInit } from './hooks/useAuthInit';
const router = createHashRouter(routes);
const App = () => {
  useAuthInit();
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'white',
            },
            iconTheme: {
              primary: '#00503F',
              secondary: 'white',
            },
          },
          error: {
            style: {
              background: 'white',
            },
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
          },
        }}
      />
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
