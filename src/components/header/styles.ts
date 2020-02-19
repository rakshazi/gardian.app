import { makeStyles } from '@material-ui/core';

export default makeStyles(({ spacing }) => ({
  root: { backgroundColor: 'transparent' },
  flexGrow: {
    flexGrow: 1,
  },
  loginBtn: {
    marginLeft: spacing(5),
    marginRight: spacing(6),
  },
  toolbar: {
    marginLeft: spacing(5),
    marginRight: spacing(5),
    height: 70,
  },
}));
