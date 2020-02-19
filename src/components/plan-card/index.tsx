import React, { FC } from 'react';
import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import plans from './plans';
import check from '../../assets/icons/check.svg';
import arrow from '../../assets/icons/arrowDown.svg';

export type Props = {
  type: 'basic' | 'medium' | 'pro';
  mostPopular?: boolean;
};

const PlanCard: FC<Props> = ({ type, mostPopular }) => {
  const {
    root,
    fw500,
    bold,
    description,
    moreBtn,
    moreText,
    w100,
    arrowStyle,
    mostPopularHeader,
    descriptionWrapper,
    price,
  } = useStyles(mostPopular);
  const primaryTextColor = mostPopular ? 'primary' : 'secondary';
  const secondaryTextColor = mostPopular ? 'textPrimary' : 'textSecondary';
  const { t } = useTranslation();
  const plan = plans[type];
  return (
    <>
      {mostPopular && (
        <div className={mostPopularHeader}>
          <Typography variant='body1' color='secondary'>
            {t('mostPopular')}
          </Typography>
        </div>
      )}
      <Grid
        container
        direction='column'
        spacing={3}
        className={root}
        alignItems='center'
      >
        <Grid item>
          <Typography variant='button' color={primaryTextColor}>
            {t(type)}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container className={price}>
            <Typography variant='h2' color={primaryTextColor}>
              {plan.perMont}
            </Typography>
            <Box ml={0.5} mt={0.5}>
              <Typography
                variant='body1'
                color={secondaryTextColor}
                className={fw500}
              >
                {t('leiPerMonth')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant='caption'
            color={secondaryTextColor}
            className={bold}
          >
            {`${plan.perYear} ${t('billedYearly').toUpperCase()}`}
          </Typography>
        </Grid>
        <Grid item className={w100}>
          <Link href='#get-started'>
            <Button
              variant='contained'
              size='large'
              color={mostPopular ? 'secondary' : 'primary'}
              fullWidth
            >
              {`${t('start')} ${t(type)}`}
            </Button>
          </Link>
        </Grid>
        <Grid item className={descriptionWrapper}>
          <Grid container direction='column' spacing={2}>
            {plan.description.map(item => (
              <Grid item key={item}>
                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item>
                    <img src={check} alt='check' />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      className={description}
                      color={secondaryTextColor}
                    >
                      {t(item)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={moreBtn}>
          <Button color={primaryTextColor}>
            <Typography className={moreText} variant='body1'>
              {t('more')}
            </Typography>
            <img src={arrow} alt='arrow' className={arrowStyle} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PlanCard;
