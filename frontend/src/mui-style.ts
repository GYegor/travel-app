import { createMuiTheme, createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#558b2f',
      light: '#85bb5c',
      dark: '#255d00'
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
    search: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      flexGrow: 1,
      color: theme.palette.secondary.light,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    input: {
      color: 'white'
    },

    spacer: {
      flex: 1,
    },
    title: {
      marginRight: theme.spacing(2),
      '&:first-letter': {
        color: theme.palette.secondary.light,
        'font-size': theme.spacing(3)
      }
    },    
}));
