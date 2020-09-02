import React, { useState }  from "react";
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

import {register} from "../../../actions/serviceActions";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});




Transition.displayName = "Transition";

export default function Register(props) {
  const classes = useStyles();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const onContinue = () => {
    console.log('Hello');
    props.activeTab = '1';
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
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
                  id="name"
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
              <WebcamModal />
              <GridItem xs={12} sm={12} md={12}>
                <Button color="info" block className={classes.submitButton} onClick={onContinue}>Save and Continue</Button>
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
