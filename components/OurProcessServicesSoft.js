import Link from "next/link";

import OurProcessServiceCard from "./OurProcessServiceCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useStyles } from "../styles/OurProcess";

const processs = [
  {
    processName: "Determining your needs",
    avatar: "a1",
    processIcon: "./our_process_service_card_icons/speech_typing.svg",
    shortDesc:
      "Our first step is to discuss with you  exactly what you need, both for your business and your customers. We also discuss which web services would be best to host your application on. Once all of the information has been gathered, we begin designing your application. ",
  },
  {
    processName: "Design & develop",
    avatar: "a2",
    processIcon: "./our_process_service_card_icons/code.svg",
    shortDesc:
      "We aim to create curated user experiences with optimized app performance. After the designs have been approved, the development begins. During this part of the process, payments are made as predefined checkpoints are achieved. 	",
  },
  {
    processName: "Testing",
    avatar: "a3",
    processIcon: "./our_process_service_card_icons/window_content.svg",
    shortDesc:
      "Each component created during the development of the application is tested thoroughly to ensure the application is as optimal as possible as well as to ensure the applications security and reliability.",
  },
  {
    processName: "Launch!",
    avatar: "a4",
    processIcon: "./our_process_service_card_icons/rocket.svg",
    shortDesc:
      "Once each checkpoint has been reached in the development and testing phases, we will then deploy the application to a web services server. At this stage you may begin to use your application. Any comments, questions or optimization ideas are welcome post-deployment. ",
  },
];

export default function OurProcessServicesSoft(props) {
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
              />
            </div>
          );
        } else {
          return (
            <div className={classes.processItem} key={process.processName}>
              <OurProcessServiceCard
                processName={process.processName}
                avatar={process.avatar}
                processIcon={process.processIcon}
                shortDesc={process.shortDesc}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
