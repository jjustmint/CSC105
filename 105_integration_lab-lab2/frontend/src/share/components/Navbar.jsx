import React, { useEffect, useState} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import Axios from '../AxiosInstance';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useQuery } from 'react-query';




const Navbar = ({ handleOpen = () => {} }) => {
  const{ user, setUser } = useContext(GlobalContext);
  const [startFetch, setstartFetch] = useState(false);

  const fetchUser = async() => {
    const userToken = Cookies.get('UserToken');
    return await Axios.get('/me', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  useQuery('user', fetchUser, {
    onSuccess: (data) => {
      setUser({
        username: data.data.data.username,
        email: data.data.data.email,
      });
    },
    enabled: startFetch,
  });

  useEffect(() => {
    // TODO: Implement get user
    // 1. check if cookie is set
    const userToken = Cookies.get('UserToken');

    if (userToken == null || userToken == 'undefined') return;
    // 2. send a request to server
    Axios.get('/me', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) => {
      // 3. if success, set user information
      setUser({
        username: res.data.data.username,
        email: res.data.data.email,
      });
    });

    setstartFetch(!(userToken == null|| userToken == 'undefined'));
  }, [user]);

  

  const logout = () => {
    setUser();
    Cookies.remove('UserToken');
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: 'sticky',
        zIndex: 10,
        marginBottom: '8px',
        padding: '16px',
      }}
    >
      {user ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography>{user.username}</Typography>
          <CustomButton text="Log out" handle={logout} />
        </Box>
      ) : (
        <CustomButton text="Log in" handle={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;