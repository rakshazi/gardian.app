import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import PhoneInput from '../../../../components/phone-input';

const GetStarted = () => {
  const { t } = useTranslation();
  const { root, container, nameInput, phoneInput } = useStyles();
  return (
    <div className={root} id='get-started'>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='column'
          justify='center'
          className={container}
        >
          <Grid item>
            <Typography variant='h2' color='secondary' paragraph>
              {t('getStarted')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' color='secondary' paragraph>
              {t('choosePlan')}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {['firstName', 'lastName'].map(label => (
                <Grid item key={label}>
                  <TextField
                    variant='filled'
                    label={t(label)}
                    className={nameInput}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Box mt={2} mb={3}>
              <PhoneInput className={phoneInput} />
            </Box>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='secondary'>
              {t('getStarted')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetStarted;
