import React, { useCallback, useEffect, useState } from 'react';
import useStyles from './styles';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import playIcon from '../../../../assets/icons/playFilm.svg';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Main from './slides/main';
import SwiperPagination from './swiperPagination';

const HowItWorks = () => {
  const { t } = useTranslation();
  const { root, mr, swiperStyle } = useStyles();

  const [swiper, updateSwiper]: [
    SwiperInstance,
    (Swiper: SwiperInstance) => void
  ] = useState(null);

  const [swipePage, setSwipePage] = useState(0);

  const updateSwipePage = useCallback(() => setSwipePage(swiper?.activeIndex), [
    swiper,
  ]);

  useEffect(() => {
    swiper?.on('slideChange', updateSwipePage);
    return () => swiper?.off('slideChange', updateSwipePage);
  }, [swiper, updateSwipePage]);

  const goTo = (ind: number) => {
    swiper?.slideTo(ind);
    updateSwipePage();
  };
  const params = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    getSwiper: updateSwiper,
  };
  return (
    <div className={root}>
      <Container maxWidth='lg'>
        <Grid container direction='column' spacing={2} alignItems='center'>
          <Grid item>
            <Box mt={8}>
              <Typography variant='h2' color='secondary'>
                {t('howItWorks')}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='body2' color='textPrimary'>
              {t('choosePlan')}
            </Typography>
          </Grid>
          <Grid item>
            <Button color='secondary'>
              <img src={playIcon} alt='play' className={mr} />
              {t('watchFilm')}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Box mt={10} className={swiperStyle}>
        <Swiper {...params}>
          {[0, 1, 2, 3, 4, 5].map(key => (
            <div key={key}>
              <Main />
            </div>
          ))}
        </Swiper>
        <Grid container justify='center'>
          <SwiperPagination goTo={goTo} amount={6} page={swipePage} />
        </Grid>
      </Box>
    </div>
  );
};

export default HowItWorks;
