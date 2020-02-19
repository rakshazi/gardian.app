import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import googlePlay from '../../assets/img/googlePlay.svg';

const useStyles = makeStyles({
  storeLink: {
    display: 'inline-block',
    background: `url(${googlePlay})`,
    width: 216,
    height: 64,
  },
});

const GooglePlayBtn = () => {
  const { storeLink } = useStyles();

  return (
    <Link
      href='https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en'
      className={storeLink}
    >
      {/*remove console error*/}
      {''}
    </Link>
  );
};

export default GooglePlayBtn;
