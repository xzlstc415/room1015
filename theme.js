import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F0870D',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: '16px',
      },
    },
  },
});

export default theme;
