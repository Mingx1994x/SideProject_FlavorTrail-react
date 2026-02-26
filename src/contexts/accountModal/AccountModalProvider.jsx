import { useState } from 'react';
import PropTypes from 'prop-types';

import { accountModalContext } from '@/contexts/modalContext';

const AccountModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <accountModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </accountModalContext.Provider>
  );
};

AccountModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountModalProvider;
