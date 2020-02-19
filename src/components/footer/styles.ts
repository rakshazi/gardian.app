import { makeStyles } from '@material-ui/core';

export default makeStyles(
  ({
    palette: {
      secondary: { main: secondary },
    },
  }) => ({
    root: { backgroundColor: secondary },
    container: { height: 290 },
    logo: {
      width: 240,
    },
    bold: {
      fontWeight: 'bold',
    },
    description: {
      maxWidth: 310,
    },
  })
);
