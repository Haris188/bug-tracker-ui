import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const paletteDefault = {
  background: {
    dark: '#F4F6F8',
    default: colors.common.white,
    paper: colors.common.white
  },
  primary: {
    main: colors.indigo[500]
  },
  secondary: {
    main: colors.indigo[500]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600]
  }
};

const paletteCustom = {
  background: {
    dark: '#F4F6F8',
    default: colors.common.white,
    paper: colors.common.white
  },
  primary: {
    main: colors.indigo[500]
  },
  secondary: {
    main: colors.indigo[500]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600]
  }
};

const theme = createMuiTheme({
  palette: paletteCustom,
  shadows,
  typography
});

export default theme;
