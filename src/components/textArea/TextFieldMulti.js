import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

export default function TextFieldMulti({label}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
       <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
    </form>
  );
}
