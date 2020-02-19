import { makeStyles } from '@material-ui/core';
import howBG from '../../../../assets/img/howBG.png';
import slideBG from '../../../../assets/img/howSlideBG.png';

export default makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${howBG})`,
  },

  mr: {
    marginRight: 12,
  },
  swiperStyle: {
    background: `center / contain url(${slideBG}) no-repeat`,
    mixBlendMode: 'exclusion',
  },
});

export const useSlideStyles = makeStyles(({ breakpoints }) => ({
  slide: {
    marginLeft: 'auto',
    [breakpoints.up('lg')]: {
      marginLeft: `calc((100vw - ${breakpoints.values.lg}px) / 2)`,
    },
  },
  text: {
    maxWidth: 400,
  },
}));

export const usePaginationStyles = makeStyles(
  ({ spacing, palette: { secondary } }) => ({
    root: {
      marginTop: spacing(10),
      marginBottom: spacing(10),
    },
    divider: {
      display: 'inline-block',
      width: spacing(7),
      border: `1px solid ${secondary.main}`,
      marginLeft: spacing(2),
      marginRight: -spacing(2),
      marginBottom: 4,
    },
  })
);
