import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: typeof colors;
  }
  interface ThemeOptions {
    colors: typeof colors;
  }
}

type Color = keyof typeof colors;

const colors = {
  primary: '#2F3030', // Dark Gray
  secondary: '#FFFFFF',
  gray: '#6A6A6A',
  light_gray: '#AEAEAE',
  containedButtonDarkBg: '#111212',
};

const disableHoverColor = {
  '&:hover': {
    backgroundColor: 'inherit',
  },
};

const btnBorder = (color: Color) => ({
  border: `2px solid ${colors[color]}`,
  '&:hover': {
    border: `2px solid ${colors[color]}`,
  },
});

const btnContainedOverrides = (color: Color, borderColor: Color) => ({
  backgroundColor: colors[color],
  border: `2px solid ${colors[borderColor]}`,
  boxShadow: `0 0 0 2pt ${colors[color]}, 0 0 0 4pt ${colors.light_gray}`,
  '&:hover': {
    boxShadow: 'none',
  },
});

export default createMuiTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1140, xl: 1920 },
  },
  colors,
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primary,
      dark: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondary,
      dark: colors.secondary,
    },
    text: {
      primary: colors.gray,
      secondary: colors.light_gray,
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        background: colors.secondary,
        borderRadius: 4,
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottom: 0,
        },
        '&:before': {
          borderBottom: 0,
        },
      },
    },
    MuiInputBase: {
      input: {
        color: colors.primary,
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          color: colors.light_gray,
        },
        ...disableHoverColor,
      },
      textSecondary: {
        ...disableHoverColor,
      },
      textPrimary: {
        ...disableHoverColor,
      },
      outlined: {
        borderRadius: 60,
        ...btnBorder('primary'),
      },
      outlinedPrimary: btnBorder('primary'),
      outlinedSecondary: btnBorder('secondary'),
      contained: {
        borderRadius: 36,
      },
      containedPrimary: btnContainedOverrides(
        'containedButtonDarkBg',
        'secondary'
      ),
      containedSecondary: btnContainedOverrides('secondary', 'primary'),
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
