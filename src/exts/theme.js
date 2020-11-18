import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#FFAD49',
    },
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 40
      }
    },
    MuiDropzoneArea: {
      root: {
        minHeight: "unset",
      }
    }
  }
  
});

export default theme;