import { makeStyles } from '@material-ui/core';

export default (open: boolean) =>
  makeStyles(({ spacing, palette: { secondary: { main: secondary } } }) => ({
    summary: {
      minHeight: 60,
      backgroundColor: open ? secondary : '#F4F4F4',
      boxShadow: open
        ? '0px 4px 4px rgba(50, 50, 71, 0.06), 0px 2px 2px rgba(50, 50, 71, 0.06)'
        : '',
    },
    description: {
      paddingTop: spacing(2),
      paddingBottom: 0,
    },
    fw500: {
      fontWeight: 500,
    },
  }))();
