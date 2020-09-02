import React,{useState}  from "react";
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

import Dashboard from "@material-ui/icons/Dashboard";
import LockOpenIcon from '@material-ui/icons/LockOpen';

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Login from "./Sections/Login";
import Register from "./Sections/Register";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {

  const { ...rest } = props;
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

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
                active={activeTab}
                color="info"
                alignCenter
                tabs={[
                  {
                    tabButton: "Register",
                    tabIcon: Dashboard,
                    tabContent: (
                      <Register activeTab="0"/>
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
