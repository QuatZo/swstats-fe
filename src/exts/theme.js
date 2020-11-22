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
    },
    "carousel-container": {
      width: "100%",
    },
    MuiTableCell: {
      head: {
        color: '#FFAD49',
      }
    },
    MUIDataTableToolbar: {
      titleRoot: {
        color: '#FFAD49',
      }
    },
    MuiCardHeader: {
      title: {
        color: '#FFAD49',
      }
    },
  }
  
});

export default theme;