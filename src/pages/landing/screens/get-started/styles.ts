import { makeStyles } from '@material-ui/core';
import bg from '../../../../assets/img/getStartedBG.png';

export default makeStyles(() => ({
  root: {
    background: `center / cover  url(${bg})`,
  },
  container: {
    minHeight: 670,
  },
  nameInput: {
    width: 270,
  },
  phoneInput: {
    width: 580,
  },
}));
