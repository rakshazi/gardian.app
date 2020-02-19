import React from 'react';
import { AppBar, Toolbar, Button, Link } from '@material-ui/core';
import logo from '../../assets/img/logo.svg';
import useStyles from './styles';
import LangSelector from '../lang-selector';
import LoginBtn from '../login-btn';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { flexGrow, loginBtn, toolbar, root } = useStyles();
  const { t } = useTranslation();
  return (
    <AppBar elevation={0} position='static' className={root}>
      <Toolbar className={toolbar}>
        <img src={logo} alt='logo' />
        <div className={flexGrow} />
        <LangSelector />
        <LoginBtn className={loginBtn} />
        <Link href='#get-started'>
          <Button variant='outlined' color='secondary'>
            {t('getStarted')}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
