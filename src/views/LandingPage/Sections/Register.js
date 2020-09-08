import React, { useState, useRef }  from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PropTypes from "prop-types";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

import Slide from "@material-ui/core/Slide";
import WebcamModal from "./WebcamModal";
import DatePicker from "./DatePicker";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const scrollToRef = (ref) => window.scrollTo(0, 500, ref.current.offsetTop);


Transition.displayName = "Transition";

export default function Register(props) {
  const classes = useStyles();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  
  
  const focusDiv = useRef(null);
  const dispatch = useDispatch();

  const onContinue = () => {
    console.log('Hello');
    props.setActiveTab(1);
    setShowSuccess(true);
    scrollToRef(focusDiv);
    
  }
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
        <div ref={focusDiv}>
        { showSuccess && <SnackbarContent
            message={
              <span>
                <b>Registration Complete!</b> Please Login to continue.
              </span>
            }
            close
            color="success"
            icon={Check}
          />}
          </div>
        { showError && <SnackbarContent
            message={
              <span>
                An Error occured while registration. Please try again later.
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />}
          <h4 className={classes.title}>
            Please provide your personal information and face id for registration.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="First Name"
                  id="fname"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Last Name"
                  id="lname"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <DatePicker />
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textField
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <WebcamModal serviceType={'register'} />:
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Button color="info" block className={classes.submitButton} onClick={onContinue}>Register</Button>
              </GridItem>
            </GridContainer>
            </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Register.defaultProps = {
  activeTab: 0
};

Register.propTypes = {
  activeTab: PropTypes.number
};
