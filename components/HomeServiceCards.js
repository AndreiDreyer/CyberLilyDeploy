import Link from "next/link";

import ServiceCard from "../components/ServiceCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "6.25rem",
    paddingBottom: "6.25rem",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0% !important",
      marginRight: "0% !important",
      maxWidth: "100%",
    },
    [theme.breakpoints.up(1026)]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
  Title: {
    width: "100%",
    textAlign: "center",
  },
  smallTitle: {
    marginTop: "-2rem",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: "#43435C",
  },
  topTitle: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "2.5rem",
    maxWidth: "30rem",
    paddingBottom: "1.25rem",
    marginTop: "0rem",
    marginLeft: "auto",
    marginRight: "auto",
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
  serviceItem: {
    flex: "50%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "33%",
    paddingBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down(420)]: {
      minWidth: "100% !important",
    },
    [theme.breakpoints.down(769)]: {
      flex: "50% !important",
      minWidth: "50%",
    },
    [theme.breakpoints.down(1025)]: {
      align: "center",
    },
    [theme.breakpoints.up(1026)]: {
      maxWidth: "33%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
}));

const services = [
  {
    serviceName: "Website Design & Development",
    imgUrl: "./Website.svg",
    serviceUrl: "/service-website",
    serviceIcon1: "./globe_service_card.png",
    serviceIcon2: "./globe_service_card@2x.png",
    serviceIcon3: "./globe_service_card@3x.png",
    shortDesc:
      "We design and develop custom websites from scratch, tailored specifically to your business’s needs. We pride ourselves on never using any templates for the design of our websites. We organize hosting for your websites through Amazon Web Services.",
  },
  {
    serviceName: "Web Application Design & Development",
    imgUrl: "./WebApp.svg",
    serviceUrl: "/service-web-app",
    serviceIcon1: "./iphone_portrait_service_card.png",
    serviceIcon2: "./iphone_portrait_service_card@2x.png",
    serviceIcon3: "././iphone_portrait_service_card@3x.png",
    shortDesc:
      "We design and develop scalable, enterprise grade web applications that suit your user’s and business’s needs. We organize hosting for your web applications through Amazon Web Services. Whatever solution works best for your needs, we will find.",
  },
  {
    serviceName: "Custom Software Development",
    imgUrl: "./CustomSoft.svg",
    serviceUrl: "/service-custom",
    serviceIcon1: "./code_service_card.png",
    serviceIcon2: "./code_service_card@2x.png",
    serviceIcon3: "./code_service_card@3x.png",
    shortDesc:
      "Our team of developers and designers can build custom software, tailored to your business’s needs. Our solutions are built specific to your user’s and business’s needs.",
  },
];

export default function HomeServiceCards(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(1025));

  if (mobileBreakpoint) {
    return (
      <div className={classes.root}>
        <div className={classes.Title}>
          <h2 className={classes.topTitle}>
            Services that bring <span className={classes.line1}>your vision</span> to life{" "}
          </h2>
          <h4 className={classes.smallTitle}>Tap card for more information</h4>
        </div>
        {services.map((service) => {
          if (mobileBreakpoint) {
            return (
              <div className={classes.serviceItem} key={service.serviceName}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceImage={service.imgUrl}
                  serviceIcon={service.serviceIcon}
                  shortDesc={service.shortDesc}
                  serviceUrl={service.serviceUrl}
                  serviceIcon1={service.serviceIcon1}
                  serviceIcon2={service.serviceIcon2}
                  serviceIcon3={service.serviceIcon3}
                />
              </div>
            );
          } else {
            return (
              <div className={classes.serviceItem} key={service.serviceName}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceImage={service.imgUrl}
                  serviceIcon1={service.serviceIcon1}
                  serviceIcon2={service.serviceIcon2}
                  serviceIcon3={service.serviceIcon3}
                  shortDesc={service.shortDesc}
                />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.Title}>
          <h2 className={classes.topTitle}>
            We give life to your <span className={classes.line1}>vision</span>
          </h2>
        </div>
        {services.map((service) => {
          if (mobileBreakpoint) {
            return (
              <div className={classes.serviceItem} key={service.serviceName}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceImage={service.imgUrl}
                  serviceIcon={service.serviceIcon}
                  shortDesc={service.shortDesc}
                  serviceUrl={service.serviceUrl}
                  serviceIcon1={service.serviceIcon1}
                  serviceIcon2={service.serviceIcon2}
                  serviceIcon3={service.serviceIcon3}
                />
              </div>
            );
          } else {
            return (
              <div className={classes.serviceItem} key={service.serviceName}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceImage={service.imgUrl}
                  serviceIcon1={service.serviceIcon1}
                  serviceIcon2={service.serviceIcon2}
                  serviceIcon3={service.serviceIcon3}
                  shortDesc={service.shortDesc}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
