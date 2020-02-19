import { makeStyles } from '@material-ui/core';

const footerMaxWidth = 1280;

export default makeStyles(
  ({
    spacing,
    palette: {
      secondary: { main: secondary },
    },
  }) => ({
    root: {
      paddingTop: spacing(9),
      backgroundColor: secondary,
      position: 'relative',
    },
    faqDescription: {
      maxWidth: 375,
    },
    screenFooter: {
      maxWidth: footerMaxWidth,
      width: '100vw',
      height: 70,
      margin: 'auto',
      position: 'absolute',
      top: '100%',
      backgroundColor: secondary,
      left: 0,
      [`@media (min-width: ${footerMaxWidth}px)`]: {
        left: `calc((100vw - ${footerMaxWidth}px) / 2)`,
      },
    },
  })
);
