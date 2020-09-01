import React, { useState }  from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import NavPills from "components/NavPills/NavPills.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import WebcamModal from "./Sections/WebcamModal";
import DatePicker from "./Sections/DatePicker";

import Dashboard from "@material-ui/icons/Dashboard";
import LockOpenIcon from '@material-ui/icons/LockOpen';

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Login from "./Sections/Login";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [tabState, setTabState] = useState(0);
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Team Stormtroopers"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg-4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Digital Identification</h1>
              <h4>
                This utility provides user the capability to login using Face ID and use Digital Identiy
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridItem xs={12} sm={12} md={12}>
              <NavPills
                active={tabState}
                color="info"
                alignCenter="true"
                tabs={[
                  {
                    tabButton: "Register",
                    tabIcon: Dashboard,
                    tabContent: (
                      <div className={classes.section}>
                  <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
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
                            <Button color="info" block className={classes.submitButton} onClick={() => setTabState(1)}>Save and Continue</Button>
                          </GridItem>
                        </GridContainer>
                        
                      </form>
                    </GridItem>
                  </GridContainer>
    </div>
                    )
                  },
                  {
                    tabButton: "Login",
                    tabIcon: LockOpenIcon,
                    tabContent: (
                      <Login />
                    )
                  }
                ]}
              />
            </GridItem>
        </div>
      </div>
      <Footer />
    </div>
  );
}
