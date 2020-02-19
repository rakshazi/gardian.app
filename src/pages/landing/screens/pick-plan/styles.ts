import { makeStyles } from '@material-ui/core';
import pickBG from '../../../../assets/img/pickPlanBG.png';

export default makeStyles(({ spacing }) => ({
  root: {
    minHeight: '95vh',
    width: '100%',
    background: `center / cover  url(${pickBG}) no-repeat`,
    paddingBottom: spacing(9),
    paddingTop: spacing(9),
  },
}));
