import React from "react";
import Link from "next/link";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingTop: "5rem",
    paddingLeft: "7.5rem",
    display: "flex",
    marginBottom: "5%",
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "0rem",
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
  topText: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    width: "49.56rem",
    marginTop: "0rem",
    [theme.breakpoints.up(1025)]: {
      width: "90%",
    },
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      width: "36.56rem",
    },
    [theme.breakpoints.down(435)]: {
      width: "90%",
    },
  },
  image: {
    position: "relative",
    marginLeft: "2.875rem",
    marginRight: "1.875rem",
    borderRadius: "0.5rem",
    [theme.breakpoints.down(1630)]: {
      width: "15.63rem",
      marginLeft: "3rem",
      marginRight: "1rem",
    },
    [theme.breakpoints.down(1025)]: {
      width: "17.63rem",
      marginLeft: "0.6rem",
      marginRight: "1rem",
    },
    [theme.breakpoints.down(435)]: {
      marginBottom: "5rem",
      width: "20.63rem",
    },
  },
  imageLabel1: {
    marginLeft: "2.875rem",
    marginTop: "0.5rem",
    fontWeight: 700,

    [theme.breakpoints.down(1025)]: {
      marginLeft: "-31rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "-14rem",
      marginTop: "-37rem",
    },
  },
  imageLabel2: {
    marginLeft: "25.3rem",
    marginTop: "-3rem",
    fontWeight: 700,
    [theme.breakpoints.down(1630)]: {
      marginLeft: "22.7rem",
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "9rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "-13rem",
      marginTop: "29.5rem",
    },
  },
  imageLabel_12: {
    marginLeft: "2.875rem",
    fontWeight: 400,
    [theme.breakpoints.down(1025)]: {
      marginLeft: "-32.3rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "-15rem",
    },
  },
  imageLabel_22: {
    marginLeft: "25.3rem",
    fontWeight: 400,
    [theme.breakpoints.down(1630)]: {
      marginLeft: "22.7rem",
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "6.5rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "-15.5rem",
    },
  },
  innerCard: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(1025)]: {
      display: "inline-block",
      textAlign: "center",
    },
  },
  bothImages: {
    [theme.breakpoints.down(1025)]: {
      width: "38.56rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: " 2.563rem",
    },
    [theme.breakpoints.down(435)]: {
      width: "100%",
    },
  },
  text: {
    [theme.breakpoints.up(1300)]: {
      width: "50%",
    },
    [theme.breakpoints.down(1025)]: {},
  },
  avatar1: {
    marginLeft: "17.5rem",
    marginTop: "-2.5rem",
    backgroundColor: "#E8E8EB",
    padding: "0.6rem",
    [theme.breakpoints.down(1630)]: {
      marginLeft: "16rem",
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "15.5rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "20rem",
    },
    [theme.breakpoints.down(380)]: {
      marginLeft: "19rem",
    },
  },
  avatar2: {
    marginLeft: "40rem",
    marginTop: "-2.5rem",
    backgroundColor: "#E8E8EB",
    padding: "0.6rem",
    [theme.breakpoints.down(1630)]: {
      marginLeft: "35.5rem",
      marginRight: "2rem",
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "35rem",
    },
    [theme.breakpoints.down(435)]: {
      marginLeft: "20rem",
    },
    [theme.breakpoints.down(380)]: {
      marginLeft: "19rem",
      marginTop: "-2.6rem",
    },
  },
}));

export default function WhoWeAreAbout() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.innerCard}>
        <div className={classes.text}>
          <h2 className={classes.topTitle}>
            Who <span className={classes.line1}>we are</span>
          </h2>
          <p className={classes.topText}>
            Cyber Lily Software was founded by two individuals passionate about improving the world through software. Our company was brought to life
            by the need for modern, reliable and robust software solutions in Zimbabwe.
          </p>
          <p className={classes.topText}>
            With internet connectivity improving in the country and the world, we decided to bring our technical skills home and produce world class
            solutions to local problems. We pride ourselves on finding the most simple solutions to complex problems, methodically producing refined
            and optimal solutions for each problem presented to us.
          </p>
          <p className={classes.topText}>
            While initially our intention was solely to provide software solutions in Zimbabwe, we are happy to take on clients from anywhere in the
            world.
          </p>
        </div>
        <div className={classes.bothImages}>
          <img className={classes.image} src={"./andrei-3 1.svg"} />
          <img className={classes.image} src={"./macky 1.svg"} />
          <Typography className={classes.imageLabel1}>Andrei Dreyer</Typography>
          <Typography className={classes.imageLabel_12}>Co-founder</Typography>
          <a target="_blank" href="https://www.linkedin.com/in/andrei-dreyer-85017479/">
            <Avatar className={classes.avatar1} src="./coolicon@3x.png" />
          </a>
          <Typography className={classes.imageLabel2}>David MacIntosh</Typography>
          <Typography className={classes.imageLabel_22}>Co-founder</Typography>
          <a target="_blank" href="https://www.linkedin.com/in/david-macintosh-53872b191/">
            <Avatar className={classes.avatar2} src="./coolicon@3x.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
