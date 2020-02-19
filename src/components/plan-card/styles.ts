import { makeStyles } from '@material-ui/core';
import hexToRgb from '../../utils/hexToRgb';
import { Props } from './index';

export default (mostPopular: Props['mostPopular']) =>
  makeStyles(
    ({
      palette: {
        primary: { main: primary },
        secondary: { main: secondary },
      },
      spacing,
    }) => ({
      root: {
        minHeight: 490,
        background: `rgba(${hexToRgb(
          mostPopular ? secondary : primary
        )}, 0.95)`,
        padding: spacing(2, 4),
        boxShadow: mostPopular
          ? '0px 24px 24px rgba(50, 50, 71, 0.08), 0px -36px 12px rgba(50, 50, 71, 0.08)'
          : '0px 4px 4px rgba(50, 50, 71, 0.06), 0px 2px 2px rgba(50, 50, 71, 0.06)',
      },
      price: {
        transform: 'translate(20%)',
      },
      fw500: {
        fontWeight: 500,
      },
      bold: {
        fontWeight: 'bold',
      },
      description: {
        maxWidth: 242,
      },
      descriptionWrapper: {
        height: 150,
      },
      moreBtn: {
        width: `calc(100% - 26px * 2)`,
      },
      moreText: {
        textTransform: 'none',
        marginRight: spacing(1),
      },
      w100: {
        width: '100%',
      },
      arrowStyle: {
        filter: mostPopular
          ? 'brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(3848%) hue-rotate(253deg) brightness(93%) contrast(96%)'
          : '',
      },
      mostPopularHeader: {
        height: 44,
        backgroundColor: `rgba(${hexToRgb(primary)}, 0.95)`,
        boxShadow:
          '0px 4px 4px rgba(50, 50, 71, 0.06), 0px 2px 2px rgba(50, 50, 71, 0.06)',
        marginLeft: -12,
        marginRight: -12,
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
  )();
