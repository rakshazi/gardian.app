import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSlideStyles } from '../styles';
import AppStoreBtn from '../../../../../components/app-store-btn';
import GooglePlayBtn from '../../../../../components/google-play-btn';

const Main = () => {
  const { t } = useTranslation();
  const { text, slide } = useSlideStyles();
  return (
    <Grid container spacing={3} direction='column' className={slide}>
      <Grid item>
        <Button variant='outlined' color='secondary'>
          {t('step1')}
        </Button>
      </Grid>
      <Grid item>
        <Typography variant='h2' color='secondary' className={text}>
          Ut enim ad minima veniam, quis nostrum
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' color='textSecondary' className={text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <AppStoreBtn />
          </Grid>
          <Grid item>
            <GooglePlayBtn />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
