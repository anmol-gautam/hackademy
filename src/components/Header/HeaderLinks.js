/*eslint-disable*/
import React from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import {loginPage} from "../../actions/serviceActions";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const onContinue = () => {
    dispatch(loginPage());
  }
  return (
    <List className={classes.list}>
      
     
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Already have an accoun? Please Login."
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="info"
            target="/login-page"
            className={classes.margin}
            onClick={onContinue}
          >Login</Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
