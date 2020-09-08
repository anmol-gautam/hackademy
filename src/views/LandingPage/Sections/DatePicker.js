import React  from "react";
import { makeStyles } from '@material-ui/core/styles';

import GridItem from "components/Grid/GridItem.js";
import TextField from '@material-ui/core/TextField';


export default function DatePicker() {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

    return(
    <GridItem xs={12} sm={12} md={12}>
        <TextField
        fullWidth
        id="date"
        label="Date of Birth"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </GridItem>
    );
}