import { createMuiTheme } from '@material-ui/core/styles';

const orange = '#FFAD49';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: orange,
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
        color: orange,
      }
    },
    MUIDataTableToolbar: {
      titleRoot: {
        color: orange,
      }
    },
    MuiCardHeader: {
      title: {
        color: orange,
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          background: "unset !important",
          borderBottom: "1px solid " + orange + " !important",
        }
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: "1px solid " + orange + " !important",
        },
        '&:after': {
          borderBottom: "1px solid " + orange + " !important",
        },
      }
    },
    MuiSlider: {
      valueLabel: {
        color: '#212121',
      }
    },
    MuiGridListTile: {
      imgFullWidth: {
        top: "unset",
        transform: "unset",
      },
    }
  }
});

export default theme;