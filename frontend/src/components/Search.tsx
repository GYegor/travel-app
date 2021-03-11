import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../mui-style';

const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.search} noValidate autoComplete="off">
      <TextField 
      id="standard-basic" 
      // variant="outlined" 
      label="Куда направимся?" 
      placeholder="Страна или столица" 
      color="secondary" 
      margin="normal"
      InputProps={{
        className: classes.input
      }}
      />
    </form>
)
}

export default Search;