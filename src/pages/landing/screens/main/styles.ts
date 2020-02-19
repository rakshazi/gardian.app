import { makeStyles } from '@material-ui/core';
import { CSSProperties } from 'react';

export default makeStyles(
  ({ colors: { light_gray, containedButtonDarkBg }, spacing }) => ({
    root: {
      backgroundColor: containedButtonDarkBg,
      height: '95vh',
      position: 'relative',
    },
    checks: {
      marginTop: spacing(3),
      marginBottom: spacing(5),
    },
    textBorder: {
      textShadow: `-1px 0 0.5px ${light_gray}, 0 1px 0.5px ${light_gray}, 1px 0 0.5px ${light_gray}, 0 -1px 0.5px ${light_gray}`,
    },
    h100: {
      height: 'calc(100% - 70px)',
    },
    checkText: { fontSize: '1.125rem' },
    z100: { zIndex: 100 },
  })
);

export const player = {
  position: 'absolute',
  left: 0,
  top: 0,
  opacity: 0.5,
  marginTop: -70,
};

const center: {
  position: CSSProperties['position'];
  left: CSSProperties['left'];
  top: CSSProperties['top'];
  transform: CSSProperties['transform'];
} = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export const modalPlayer = {
  ...center,
  maxWidth: 1140,
  outline: 0,
};

export const usePlayerStyles = makeStyles({
  playBtn: {
    ...center,
    cursor: 'pointer',
    zIndex: 100,
  },
});
