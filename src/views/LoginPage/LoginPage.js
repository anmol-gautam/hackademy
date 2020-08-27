import React, { useState }  from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

// @material-ui/icons
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import Webcam from "react-webcam";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/landing-bg-4.jpg";

import {login} from "../../actions/serviceActions";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
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
    localStorage.setItem("loginImage", actualString);
    dispatch(login());
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Team Stormtroopers"
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <p>Please capture your Face ID to login</p>
                  </CardHeader>
                  <CardBody>
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  {!showPicture &&<Button block color="info" size="lg" 
                           onClick={capture} disabled={showPicture}>
                             <CameraAltIcon className={classes.icon} />
                      Capture Image
                    </Button>}
                    {showPicture && <Button id = "submit-image" color="info" size="lg" block
                        onClick = {onSubmit}>Login with Face ID</Button>}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
