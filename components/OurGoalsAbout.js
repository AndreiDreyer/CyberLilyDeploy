import React from "react";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100% !important",
    backgroundColor: "#F9F9FA",
    paddingTop: "5rem !important",
  },
  innerCard: {
    marginLeft: "8rem",
    maxWidth: "100% !important",
    paddingBottom: "6.875rem",
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
      marginLeft: "0rem",
    },
  },
  topText: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    width: "39.69rem",
    marginTop: "0rem",
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      width: "36.56rem",
    },
    [theme.breakpoints.down(420)]: {
      width: "90%",
    },
  },
  topTitle: {
    alignItems: "center",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "1.5rem",
    paddingBottom: "1.25rem",
    textAlign: "left",
    marginTop: "0rem",
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
    },
  },
  line1: {
    backgroundImage: "linear-gradient(120deg, #F68320 0%, #F68320 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
  },
  cards: {
    display: "inline-block",
    width: "100%",
  },
  card1: {
    display: "flex",
    marginBottom: "4rem",
    [theme.breakpoints.down(1025)]: {
      display: "inline-block",
      marginBottom: "3rem",
    },
  },
  card2: {
    display: "flex",
    [theme.breakpoints.down(1025)]: {
      display: "inline-block",
    },
  },
  card1Text: {
    display: "flex",
    marginLeft: "2.875rem",
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  cardImage: {
    width: "20rem",
  },
  cardTitle2: {
    position: "absolute",
    fontWeight: 700,
    lineHeight: "3rem",
    fontSize: "2.25rem",
    [theme.breakpoints.down(1025)]: {
      marginLeft: "20%",
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: "25%",
    },
    [theme.breakpoints.down(420)]: {
      paddingBottom: "10rem !important",
      marginTop: "0rem",
      fontWeight: 500,
      marginLeft: "5%",
      marginBottom: "0rem !important",
    },
    [theme.breakpoints.down(380)]: {
      paddingBottom: "10rem !important",
      marginTop: "0rem",
      fontWeight: 500,
      marginLeft: "1%",
      marginBottom: "0rem !important",
    },
  },
  cardTitle1: {
    position: "absolute",
    fontWeight: 700,
    lineHeight: "3rem",
    fontSize: "2.25rem",
    [theme.breakpoints.down(1025)]: {
      marginLeft: "24%",
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: "29%",
    },
    [theme.breakpoints.down(420)]: {
      marginTop: "0rem",
      fontWeight: 500,
      marginLeft: "15%",
    },
    [theme.breakpoints.down(380)]: {
      paddingBottom: "10rem !important",
      marginTop: "0rem",
      fontWeight: 500,
      marginLeft: "10%",
    },
  },
  cardText: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    maxWidth: "49.5rem",
    position: "relative",
    marginTop: "6rem !important",
    [theme.breakpoints.down(1025)]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "4%",
    },
    [theme.breakpoints.down(420)]: {
      marginTop: "4rem !important",
    },
  },
  cardText2: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    maxWidth: "49.5rem",
    position: "relative",
    marginTop: "6rem !important",
    [theme.breakpoints.down(1025)]: {
      width: "97%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "4%",
    },
    [theme.breakpoints.down(420)]: {
      marginTop: "4rem !important",
    },
  },
  tellMeMoreButton: {
    color: "#EF530B !important",
    borderColor: "#EF530B !important",
    textTransform: "capitalize !important",
    fontWeight: 500,
    lineHeight: "1rem",
    fontSize: "0.875rem",
    marginBottom: "1rem",
    height: "2.5rem",
    [theme.breakpoints.up(1025)]: {
      marginTop: "14rem",
      marginLeft: "-49.5rem",
    },
  },
}));

export default function OurGoalsAbout() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.innerCard}>
        <h2 className={classes.topTitle}>
          Our <span className={classes.line1}>goals</span>
        </h2>
        <p className={classes.topText}>
          Our goal as a company is to not only produce software based solutions for our partners, but to help grow, streamline and improve each
          partner’s business through software.
        </p>
        <div className={classes.cards}>
          <div className={classes.card1}>
            <img className={classes.cardImage} src={"./WebApp.svg"} />
            <div className={classes.card1Text}>
              <h3 className={classes.cardTitle1}>Web Development</h3>
              <p className={classes.cardText}>
                Should we develop a website for you, we do so with the intent of creating a product that is not only functional but beautiful too for
                the purpose of organically growing your business. We take pride in the fact that we never make use of a wordpress template, or any
                template for that matter, each website we develop is designed from the ground up to fit your business’s specific needs and vision.{" "}
              </p>
            </div>
            <div>
              <Link href="/service-website">
                <Button className={classes.tellMeMoreButton} variant="outlined">
                  Tell me more
                </Button>
              </Link>
            </div>
          </div>
          <div className={classes.card2}>
            <img src={"./CustomSoft.svg"} className={classes.cardImage} />
            <div className={classes.card1Text}>
              <h3 className={classes.cardTitle2}>Software Development</h3>
              <p className={classes.cardText2}>
                Should we develop custom software for you, we do so with the intent of using the software as an opportunity to improve the ease of
                running your business as much as we possibly can. We do this through the development of easy to use yet powerful software, tested
                thoroughly at each stage of development.
              </p>
            </div>
            <div>
              <Link href="/service-custom">
                <Button className={classes.tellMeMoreButton} variant="outlined">
                  Tell me more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
