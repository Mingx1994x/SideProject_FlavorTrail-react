import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/index.jsx';
import store from './redux/store';
import '@/assets/scss/all.scss';
import { Toaster } from 'react-hot-toast';

// import App from './App.jsx'
const router = createHashRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
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
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
