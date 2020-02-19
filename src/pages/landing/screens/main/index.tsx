import React from 'react';
import { Button, Container, Grid, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import check from '../../../../assets/icons/check.svg';
import Header from '../../../../components/header';
import clsx from 'clsx';
import Player from './player';

const Main = () => {
  const { t } = useTranslation();
  const { root, checks, textBorder, h100, checkText, z100 } = useStyles();
  return (
    <div className={root}>
      <Header />
      <Container maxWidth='lg' className={h100}>
        <Grid container justify='center' direction='column' className={h100}>
          <Grid item className={z100}>
            <Typography variant='h1' color='secondary' className={textBorder}>
              {t('panic button')}
            </Typography>
            <Typography variant='h1' color='primary' className={textBorder}>
              {t('alwaysFeelSafe')}
            </Typography>
          </Grid>
          <Grid item className={clsx([checks, z100])}>
            {['mslist-1', 'mslist-2', 'mslist-3', 'mslist-4'].map(item => (
              <Grid container alignItems='baseline' spacing={2} key={item}>
                <Grid item>
                  <img src={check} alt='check' />
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    color='textSecondary'
                    className={checkText}
                  >
                    {t(item)}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item className={z100}>
            <Link href='#get-started'>
              <Button variant='contained' color='primary' size='large'>
                {t('getStarted')}
              </Button>
            </Link>
          </Grid>
          <Player />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
