import React, { useState }  from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import Webcam from "react-webcam";

import {login} from "../../../actions/serviceActions";
import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



Transition.displayName = "Transition";

export default function WebCamModal (props) {
  const classes = useStyles();
  const [webcam, setWebcam] = useState('');
  const [screenShot, setScreenshot] = useState('');
  const [showPicture, setShowPicture] = useState(false);
  const dispatch = useDispatch();

  const videoConstraints = {
    facingMode: "user"
  };
  
  const setRef = webcam => {
        setWebcam(webcam);
  };
  
  const capture = () => {
    console.log(webcam);
    const imageSrc = webcam.getScreenshot();
    setShowPicture(true);
    setScreenshot(imageSrc);
  };

  const onSubmit = () => {
    callService(screenShot);
  };

  const callService = (imageSrc) => {
    const actualString = imageSrc.substring(23);
    console.log(actualString)
    if(props.serviceType === 'login'){
     localStorage.setItem("loginImage", actualString);
     dispatch(login());
    }
    if(props.serviceType === 'register'){
      localStorage.setItem("registerImage", actualString);
     }
  };

    return (     
              <GridItem xs={12} sm={12} md={12}>
                { !showPicture && 
                    <Webcam
                    audio={false}
                    imageSmoothing={true}
                    ref={setRef}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={0.8}
                    width="100%"
                    height="100%"
                    mirrored={true}
                    videoConstraints={videoConstraints}
                  />}
                    {showPicture && 
                    <div className = 'center-align'>
                        <img src={screenShot} alt={"xyz"}/>
                    </div>
                    }
                    <GridItem xs={12} sm={12} md={12}>
                    {!showPicture && 
                    <Button id = "capture-image" color="info" block
                        onClick={capture} disabled={showPicture}>
                        <CameraAltIcon className={classes.icon} />
                          Capture Image
                    </Button>}
                    {showPicture && 
                    <Button id = "retake-image" block
                        onClick = {() => setShowPicture(false)}
                        color="info">
                        Retake Image
                    </Button>}
                    {showPicture && props.serviceType === 'login' &&
                    <Button id = "submit-image" color="info" block onClick = {onSubmit}>Login</Button>}
                    {showPicture && props.serviceType === 'register' &&
                    <Button id = "submit-image" color="info" block onClick = {onSubmit}>Submit Image</Button>}
                  </GridItem>
              </GridItem>
    );
}

WebCamModal.defaultProps = {
  serviceType: 'login'
};

WebCamModal.propTypes = {
  serviceType: PropTypes.string,
};