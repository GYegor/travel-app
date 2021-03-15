import { teal } from "@material-ui/core/colors";
import { createMuiTheme, createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
      light: teal[300],
      dark: teal[700]
    },
    secondary: {
      main: '#ffee58',
      light: '#ffff8b',
      dark: '#c9bc1f' 
    }
  },
  spacing: 10, 
})

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    spacer: {
      flex: 1,
    },
    title: {
      marginRight: theme.spacing(2),

      '&:first-letter': {
        color: theme.palette.secondary.light,
        fontWeight: 600,
        'font-size': theme.spacing(3.1),
      }
    }, 
    titleSpan: {
      verticalAlign: '9%',
    },   
}));
