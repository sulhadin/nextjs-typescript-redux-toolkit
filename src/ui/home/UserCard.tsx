import React, { memo } from 'react';
import { Typography } from '@mui/material';

import { useDispatch, useSelector } from '../../store/store';
import { getUserState, setEmail, setName } from '../../store/slices/userSlice';

/**
 * A simple User card that pulls user info from redux-toolkit and displays it.
 * @constructor
 */
function UserCard() {
  const dispatch = useDispatch();
  const { name, email } = useSelector(getUserState);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setName('Öney'));
      dispatch(setEmail('sulhadin@hotmail.com'));
    }, 2000);
  });

  console.log('user info', name, email);
  return (
    <Typography variant="h1" component="h2">
      Hi <>{name}</>
    </Typography>
  );
}

export default memo(UserCard);
