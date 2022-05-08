import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import cookie from 'js-cookie';

import { INITIAL_USER_STATE, COOKIE_PROPS } from './userContext.constants';
import clientFetch from '../../utils/clientFetch';

const userContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState(INITIAL_USER_STATE);

  useEffect(() => {
    setUserData({ ...userData, isFetching: true });

    // bug?

    try {
      if (cookie.get('user')) {
        setUserData({ ...userData, user: JSON.parse(cookie.get('user')), isFetching: false });
      } else {
        clientFetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/user`)
          .then((res) => {
            const user = res.data;

            cookie.set('user', JSON.stringify(user), COOKIE_PROPS);
            setUserData({ ...user, user, isFetching: false });
          })
          .catch((error) => setUserData({ ...userData, error, isFetching: false }));
      }
    } catch (error) {
      setUserData({ ...userData, error, isFetching: false });
    }
  }, []);

  return <userContext.Provider value={userData}>{children}</userContext.Provider>;
}

const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
export { useUser };
