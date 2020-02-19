import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import logo from '../../assets/img/logoBlack.svg';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import links from './links';

const Footer = () => {
  const { t } = useTranslation();
  const { logo: logoStyle, container, bold, description, root } = useStyles();
  return (
    <div className={root}>
      <Container maxWidth='lg' disableGutters>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          className={container}
        >
          <Grid item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <img src={logo} alt='logo' className={logoStyle} />
              </Grid>
              <Grid item>
                <Typography variant='body2' color='textSecondary'>
                  {`© ${new Date().getFullYear()}. ${t('rightsReserved')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography variant='h3' color='primary'>
                  {`“${t('alwaysFeelSafe')}.“`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' color='textPrimary'>
                  {t('theGardian')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  className={description}
                >
                  {t('footerDescription')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography
                  variant='caption'
                  className={bold}
                  color='textSecondary'
                >
                  {t('followUs').toUpperCase()}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  {links.map(({ icon, link, name }) => (
                    <Grid item key={name}>
                      <a href={link}>
                        <img src={icon} alt={name} />
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
