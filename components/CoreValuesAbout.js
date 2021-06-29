import Link from "next/link";

import CoreValuesCard from "../components/CoreValuesCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: "7.5rem",
    marginBottom: "10%",
    marginTop: "3%",
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "0rem",
      textAlign: "center !important",
      alignContent: "center !important",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down(769)]: {
      paddingLeft: "0rem",
    },
  },
  valueItem: {
    width: "33%",
    paddingBottom: "1rem",
    verticalAlign: "baseline",
    [theme.breakpoints.down(1025)]: {
      width: "100%",
      textAlign: "center",
      alignContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "10.63rem",
      paddingRight: "10.63rem",
    },
    [theme.breakpoints.down(420)]: {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
  },
  topText: {
    width: "100%",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "1.5rem",
    marginBottom: "4rem !important",
    marginTop: "5rem !important",
    textAlign: "left",
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
}));

const values = [
  {
    valueName: "Integrity",
    avatar: "a1",
    valueIcon1: "./shield-verified.png",
    valueIcon2: "./shield-verified@2x.png",
    valueIcon3: "./shield-verified@3x.png",
    shortDesc:
      "We believe in transparency and are honest about our capabilities as we value our reputation. We will not take on a job unless we are absolutely certain we can satisfy our client’s needs and exceed their expectations.",
  },
  {
    valueName: "Motivation",
    avatar: "a2",
    valueIcon1: "./graph_increase.png",
    valueIcon2: "./graph_increase@2x.png",
    valueIcon3: "./graph_increase@3x.png",
    shortDesc:
      "Our motivation comes from our clients. We are as excited to bring your vision to life as we would be if it were our own. With our main goal in mind, we bring your vision to life for the sole purpose of improving your business. We take pride in our enjoyment of each and every project we take on.",
  },
  {
    valueName: "Creative Openness",
    avatar: "a3",
    valueIcon1: "./lightbulb-big.png",
    valueIcon2: "./lightbulb-big@2x.png",
    valueIcon3: "./lightbulb-big@3x.png",
    shortDesc:
      "We believe that a free flow of ideas in the world increases the probability of execution. Collaboration both within our organization and between our team and your business is essential to us and the project’s success.",
  },
];

export default function HomeServiceCards(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(1025));

  return (
    <div className={classes.root}>
      <h2 className={classes.topText}>
        Our <span className={classes.line1}>core values</span>
      </h2>
      {values.map((value) => {
        if (mobileBreakpoint) {
          return (
            <div className={classes.valueItem} key={value.valueName}>
              <CoreValuesCard
                valueName={value.valueName}
                avatar={value.avatar}
                valueIcon={value.valueIcon}
                shortDesc={value.shortDesc}
                valueIcon1={value.valueIcon1}
                valueIcon2={value.valueIcon2}
                valueIcon3={value.valueIcon3}
              />
            </div>
          );
        } else {
          return (
            <div className={classes.valueItem} key={value.valueName}>
              <CoreValuesCard
                valueName={value.valueName}
                avatar={value.avatar}
                valueIcon1={value.valueIcon1}
                valueIcon2={value.valueIcon2}
                valueIcon3={value.valueIcon3}
                shortDesc={value.shortDesc}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
