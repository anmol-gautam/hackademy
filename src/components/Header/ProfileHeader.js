/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";

import IconButton from "@material-ui/core/IconButton";


import InboxIcon from '@material-ui/icons/Inbox';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function ProfileHeader(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      
     
      <ListItem className={classes.listItem}>
        <Tooltip
          id="inbox"
          title="Inbox"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            className={classes.iconButton}
            key="inbox"
            aria-label="Inbox"
            color="inherit"
          ><InboxIcon className={classes.icon}/></IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="logout"
          title="Logout"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="info"
            target="/login-page"
            className={classes.margin}
          >Logout</Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
