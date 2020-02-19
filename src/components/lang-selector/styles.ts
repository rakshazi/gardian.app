import { makeStyles } from '@material-ui/core';

export default makeStyles(
  ({
    palette: {
      secondary,
      text: { secondary: light_gray },
    },
  }) => ({
    active: {
      color: secondary.main,
    },
    rest: {
      color: light_gray,
    },
  })
);
