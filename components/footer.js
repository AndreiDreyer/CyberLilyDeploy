import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import { useStyles } from "../styles/Footer";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

const companyNavItems = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Work Process",
    url: "/",
  },
  {
    text: "Technology Toolkit",
    url: "/service-website",
  },
];

const serviceNavItems = [
  {
    text: "Website Design & Development",
    url: "/service-website",
  },
  {
    text: "Web Application Design & Development",
    url: "/service-web-app",
  },
  {
    text: "Custom Software Design & Development",
    url: "/service-custom",
  },
];

const getInTouchNavItems = [
  {
    text: "info@cyberlilysoftware.com",
  },
  {
    text: "ZIM: +263 774 947 635",
  },
  {
    text: "S.A:  +27 72 325 7125",
  },
];

export default function TopNavbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <div className={classes.columnContainer}>
          <Grid container orientation="column">
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div className={classes.footerColumns}>
                <div className={classes.footerColumnTwo}>
                  <h2 className={classes.headers}>
                    <span className={classes.line1}>COMPANY</span>
                  </h2>
                  <div className={classes.footerLinks}>
                    {companyNavItems.map((companyNavItem) => (
                      <p className={classes.p} key={companyNavItem.text}>
                        <Link href={companyNavItem.url} underline="hover">
                          {companyNavItem.text}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div className={classes.footerColumns}>
                <div className={classes.footerColumnTwo}>
                  <h2 className={classes.headers2}>
                    <span className={classes.line2}>SERVICES</span>
                  </h2>
                  <div className={classes.footerLinks}>
                    {serviceNavItems.map((companyNavItem) => (
                      <p className={classes.p} key={companyNavItem.text}>
                        <Link href={companyNavItem.url}>{companyNavItem.text}</Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <div className={classes.footerColumns}>
                <div className={classes.footerColumnTwo}>
                  <h2 className={classes.headers3}>
                    <span className={classes.line3}>GET IN TOUCH</span>
                  </h2>
                  <div className={classes.footerLinks}>
                    {getInTouchNavItems.map((companyNavItem) => (
                      <p className={classes.pCompany} key={companyNavItem.text}>
                        {companyNavItem.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.bottomStrip}>
        <Grid container direction="row">
          <Grid item className={classes.bottomGridGrid} xs={12} sm={6} lg={6}>
            <p weight={400}>&#169; 2021 Cyber Lily Software | Sitemap | Privacy Policy</p>
          </Grid>
          <Grid item className={classes.bottomGridComp} xs={12} sm={6}>
            <Grid container direction="row">
              <div className={classes.drawerFooterIconContainer} xs={4} sm={4}>
                <div className={clsx(classes.icon, classes.facebookIcon)}>
                  <Link component="img" href={"/facebook"} key={"Facebook"} passHref={true}>
                    <img href={"/facebook"} src={"./fbicon.png"} />
                  </Link>
                </div>
              </div>
              <div className={classes.drawerFooterIconContainer} xs={4} sm={4}>
                <Link href={"/dribble"} key={"dribble"}>
                  <div className={clsx(classes.icon, classes.dribbleIcon)}>
                    <img src={"./dribicon.png"} />
                  </div>
                </Link>
              </div>
              <div className={classes.drawerFooterIconContainer} xs={4} sm={4}>
                <Link href={"/linkedIn"} key={"LinkedIn"}>
                  <div className={clsx(classes.icon, classes.linkedInIcon)}>
                    <img src={"./linkedInIcon.png"} />
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
