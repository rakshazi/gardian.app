import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import InfoDropdown from '../../../../components/info-dropdown';
import info from './info';

const FAQ = () => {
  const { t } = useTranslation();
  const { root, faqDescription, screenFooter } = useStyles();
  return (
    <div className={root}>
      <Container maxWidth='lg'>
        <Grid container alignItems='center' spacing={5} direction='column'>
          <Grid item>
            <Typography variant='h2' color='primary'>
              {t('faq')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body2'
              color='primary'
              className={faqDescription}
              align='center'
            >
              {t('faqDescription')}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {info.map((item, ind) => (
                <Grid item xs={6} key={ind}>
                  <InfoDropdown info={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={screenFooter} />
    </div>
  );
};

export default FAQ;
