import React, { useState }  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Close from "@material-ui/icons/Close";

import Webcam from "react-webcam";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



Transition.displayName = "Transition";

export default function WebCamModal () {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [webcam, setWebcam] = useState('');
  const [screenShot, setScreenshot] = useState('');
  const [showPicture, setShowPicture] = useState(false);

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
    localStorage.setItem("registerImage", actualString);
  };

    return (
        <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
              <GridItem >
                <Button
                  color="info"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <CameraAltIcon className={classes.icon} />
                  Take a Picture
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Take a Picture</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                   { !showPicture && 
                    <div id = 'webcam' className = 'center-align'>
                      <Webcam
                        audio={false}
                        imageSmoothing={true}
                        ref={setRef}
                        screenshotFormat="image/jpeg"
                        screenshotQuality={0.8}
                        videoConstraints={videoConstraints}
                      />
                    </div>}
                    {showPicture && 
                    <div className = 'center-align'>
                        <img src={screenShot} alt={"xyz"}/>
                    </div>
                    }
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button id = "capture-image" color="info" 
                        onClick={capture} disabled={showPicture}>
                        <CameraAltIcon className={classes.icon} />
                          Capture Image
                    </Button>
                    <Button id = "retake-image"
                        onClick = {() => setShowPicture(false)}
                        color="info">
                        Retake Image
                    </Button>
                    {showPicture && <Button id = "submit-image" color="info" onClick = {onSubmit}>Submit Image</Button>}

                    <Button
                      onClick={() => setClassicModal(false)}
                      color="rose"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
            </GridContainer>
          </GridItem>
    );
}