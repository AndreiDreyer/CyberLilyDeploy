import Link from "next/link";

import OurProcessServiceCard from "./OurProcessServiceCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useStyles } from "../styles/OurProcess";

const processs = [
  {
    processName: "Determining your needs",
    avatar: "a1",
    processIcon1: "./speech_typing.png",
    processIcon2: "./speech_typing@2x.png",
    processIcon3: "./speech_typing@3x.png",
    shortDesc:
      "Our first step is to give you a questionnaire to determine your exact needs for each page. We work closely with you to ensure the design is exact to your specifications. ",
  },
  {
    processName: "Design & develop",
    avatar: "a2",
    processIcon1: "./code.png",
    processIcon2: "./code@2x.png",
    processIcon3: "./code@3x.png",
    shortDesc:
      "Each design has a maximum of 4 revisions after the initial designs have been sent. Once the final designs are approved, we start the development process of your website. We will keep regularly check-in with you to ensure that we are on track.",
  },
  {
    processName: "Testing",
    avatar: "a3",
    processIcon1: "./window_content.png",
    processIcon2: "./window_content@2x.png",
    processIcon3: "./window_content@3x.png",
    shortDesc: "After development has been completed we test everything to ensure that the website matches the specification of the designs.",
  },
  {
    processName: "Launch!",
    avatar: "a4",
    processIcon1: "./rocket.png",
    processIcon2: "./rocket@2x.png",
    processIcon3: "./rocket@3x.png",
    shortDesc:
      "Once everything has been finalized and tested we will move on to deploy the website. If you have your own hosting sorted, we will send through all the required files for you to deploy your website.",
  },
];

export default function OurProcessServicesWebDev(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(1025));

  return (
    <div className={classes.root}>
      <h2 className={classes.topText}>
        Our <span className={classes.line1}>process</span>
      </h2>
      {processs.map((process) => {
        if (mobileBreakpoint) {
          return (
            <div className={classes.processItem} key={process.processName}>
              <OurProcessServiceCard
                processName={process.processName}
                avatar={process.avatar}
                processIcon={process.processIcon}
                shortDesc={process.shortDesc}
                processIcon1={process.processIcon1}
                processIcon2={process.processIcon2}
                processIcon3={process.processIcon3}
              />
            </div>
          );
        } else {
          return (
            <div className={classes.processItem} key={process.processName}>
              <OurProcessServiceCard
                processName={process.processName}
                avatar={process.avatar}
                processIcon1={process.processIcon1}
                processIcon2={process.processIcon2}
                processIcon3={process.processIcon3}
                shortDesc={process.shortDesc}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
