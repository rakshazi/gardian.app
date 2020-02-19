import React from 'react';
import useStyles from './styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PlanCard from '../../../../components/plan-card';

const PickPlan = () => {
  const { root } = useStyles();
  const { t } = useTranslation();
  return (
    <Grid container direction='column' className={root} alignItems='center'>
      <Grid item>
        <Box mb={4}>
          <Grid container direction='column' alignItems='center' spacing={2}>
            <Grid item>
              <Typography variant='h2' color='primary'>
                {t('pick_plan')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' color='textPrimary'>
                {t('choosePlan')}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Grid container alignItems='flex-end'>
          <Grid item>
            <PlanCard type='basic' />
          </Grid>
          <Grid item>
            <Box ml={5} mr={5}>
              <PlanCard type='medium' mostPopular />
            </Box>
          </Grid>
          <Grid item>
            <PlanCard type='pro' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PickPlan;
