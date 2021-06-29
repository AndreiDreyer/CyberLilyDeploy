import Button from "@material-ui/core/Button";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import { shadows } from "@material-ui/system";

import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center !important",
    marginLeft: "auto",
    marginRight: "auto",
    perspective: "40rem",
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
    borderRadius: "12px",
    transformStyle: "preserve-3d",
    transition: "0.8s transform",
    "&:hover": {
      cursor: "pointer",
      transform: "rotateY(180deg)",
      zIndex: 1000,
    },
    [theme.breakpoints.down(1025)]: {
      maxHeight: "22.5rem",
      maxWidth: "19.5rem",
      "&:focus": {
        transformStyle: "preserve-3d",
        transform: "rotateY(180deg)",
      },
    },
  },
  innerCard: {
    display: "flex",
    textAlign: "center",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "32px",
    paddingTop: "32px",
    paddingRight: "32px",
  },
  bottomText: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: 500,
    textAlign: "center",
    maxWidth: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem",
  },
  topText: {
    marginLeft: "2rem",
    marginTop: "2.125rem",
  },
  avatar: {
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#E8E8EB",
  },
  front: {
    minWidth: "100%",
    backfaceVisibility: "hidden",
  },
  back: {
    minWidth: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg) translate(100%, 0)",
  },
  descText: {
    marginBottom: "1rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    textAlign: "left",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    minHeight: "9rem",
    maxHeight: "9rem",
  },
  serviceButton: {
    color: "#FFFFFF !important",
    backgroundColor: "#EF530B !important",
    radius: "0.25rem",
    width: "45%",
    height: "3rem",
    textTransform: "capitalize !important",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2.25rem !important",
    textAlign: "center",
    position: "static",
    [theme.breakpoints.down(769)]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down(1025)]: {
      marginTop: "3.5rem !important",
    },
    [theme.breakpoints.up(1026)]: {
      width: "45%",
      marginTop: "6.5rem !important",
    },
  },
}));

export default function ServiceCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(4000));

  return (
    <div className={classes.root}>
      <div className={classes.innerCard}>
        <div className={classes.front}>
          <div className={classes.image}>
            <img src={props.serviceImage} />
          </div>
          <div className={classes.bottomText}>
            <p>{props.serviceName}</p>
          </div>
        </div>
        <div className={classes.back}>
          <div className={classes.topText}>
            <Avatar className={classes.avatar}>
              <picture>
                <source media="(min-width: 374px)" srcSet={props.serviceIcon1} />
                <source media="(min-width: 1025px)" srcSet={props.serviceIcon2} />
                <source media="(min-width: 2560px)" srcSet={props.serviceIcon3} />
                <img src={props.serviceIcon1} />
              </picture>
            </Avatar>
          </div>
          <div className={classes.descText}>
            <p>{props.shortDesc}</p>
          </div>
          <Button variant="contained" href={props.serviceUrl} disableElevation className={classes.serviceButton}>
            Tell me more
          </Button>
        </div>
      </div>
    </div>
  );
}
