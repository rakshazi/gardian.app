import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import appStore from '../../assets/img/appStore.svg';

const useStyles = makeStyles({
  storeLink: {
    display: 'inline-block',
    background: `url(${appStore})`,
    width: 216,
    height: 64,
  },
});

const AppStoreBtn = () => {
  const { storeLink } = useStyles();
  return (
    <Link
      href='https://apps.apple.com/us/app/facebook/id284882215?mt=8'
      className={storeLink}
    >
      {/*remove console error*/}
      {''}
    </Link>
  );
};

export default AppStoreBtn;
