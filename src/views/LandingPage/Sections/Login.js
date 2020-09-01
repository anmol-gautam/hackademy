import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Slide from "@material-ui/core/Slide";
import WebcamModal from "./WebcamModal";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});




Transition.displayName = "Transition";

export default function WorkSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.title}>
            Please capture your face id for login.
          </h4>
          <form>
            <GridContainer>
              <WebcamModal />
            </GridContainer>
            
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
