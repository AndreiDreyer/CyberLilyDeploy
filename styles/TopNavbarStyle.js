import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    width: "100%",
    zIndex: '999',
    backgroundColor: "#151534",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    transition: "all 0.33s",
    [theme.breakpoints.up(769)]: {
      position: "sticky",
      top: 0,
    },
    [theme.breakpoints.down(769)]: {
      paddingLeft: "3.75rem",
      paddingRight: "3.75rem",
    },
    [theme.breakpoints.down(426)]: {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
  },
  logoDiv: {
    cursor: "pointer",
  },
  activeLink: {
    width: "50%",
    height: "4px",
    marginTop: -15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#ef530b",
  },
  servicesActiveLink: {
    width: "60%",
    height: "4px",
    marginTop: -15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#ef530b",
  },
  activeLinkText: {
    [theme.breakpoints.up(769)]: {
      "& > span": {
        fontWeight: "500 !important",
      },
    },
    [theme.breakpoints.down(768)]: {
      "& > span": {
        fontWeight: "bold !important",
      },
    },
  },
  isScrolled: {
    [theme.breakpoints.up(769)]: {
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(67, 67, 92, 0.16)",

      "& > div > div > div:nth-child(2) > div": {
        color: "#151534 !important",
      },

      "& > div:nth-child(2) > div > div > button > span": {
        color: "#151534 !important",
      },

      "& > div:nth-child(2) > div > div > button:hover": {
        backgroundColor: "transparent",
      },

      "& > div:nth-child(2) > div > div > div": {
        backgroundColor: "#f68320",
      },
    },
  },
  logoImgContainer: {
    [theme.breakpoints.down(769)]: {
      width: "37px",
      height: "32px",
    },
  },
  logoContainer: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(426)]: {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
  logoText: {
    paddingLeft: "0.75rem",
    paddingTop: "0.1rem",
    [theme.breakpoints.down(426)]: {
      paddingLeft: "0.1875rem",
      paddingTop: "0.125rem",
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
  logoMainHeading: {
    fontFamily: '"Roboto", sans-serif',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "23px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    [theme.breakpoints.down(426)]: {
      fontSize: "0.75rem",
      lineHeight: "15px",
    },
  },
  logoSubHeading: {
    fontFamily: '"Roboto", sans-serif',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.75rem",
    lineHeight: "0.875rem",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    [theme.breakpoints.down(426)]: {
      fontSize: "0.4375rem",
      lineHeight: "9px",
    },
  },
  navItemContainer: {
    display: "flex",
    paddingTop: "1.125rem",
    paddingBottom: "0.875rem",
    [theme.breakpoints.down(426)]: {
      paddingTop: "1.75rem",
      paddingBottom: "1.75rem",
    },
    "& [class*='makeStyles-navContactButton']": {
      [theme.breakpoints.down(600)]: {
        display: "none",
      },
    },
    "& [class*='makeStyles-iconButton']": {
      [theme.breakpoints.down(769)]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
  navItem: {
    paddingTop: "0.25rem",
    "& .MuiButton-text": {
      padding: "0.5rem 1rem",
    },
  },
  submenuList: {
    visibility: "hidden",
    transitionDelay: "0.1s",
    position: "absolute",
    zIndex: 9999,
    listStyleType: "none",
    paddingLeft: 0,
    marginLeft: "0.5rem",
    marginTop: "0.5rem",
    width: 336,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    "&:hover": {
      "&:nth-child(1)": {
        borderBottom: "1px solid #e8e8eb",
      },
    },
  },
  submenuItem: {
    cursor: "pointer",
    display: "block",
    borderBottom: "1px solid #e8e8eb",
    "&:nth-child(3)": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#e8e8eb",
      fontWeight: 500,
      "& $subNavButton": {
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "#e8e8eb",
          transition: "none",
        },
      },
      "&:nth-child(1)": {
        borderRadius: "8px 8px 0px 0px",
      },
      "&:nth-child(3)": {
        borderRadius: "0px 0px 8px 8px",
      },
    },
    "& .MuiButton-text": {
      padding: 12,
    },
  },
  subNavButton: {
    padding: 12,
    margin: "0.7rem",
    color: "#141433 !important",
    textTransform: "capitalize",
    fontWeight: 400,
    lineHeight: "1.5rem",
    "&:hover": {
      backgroundColor: "#e8e8eb",
    },
  },
  submenuContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
  },
  servicesNavItem: {
    "&:hover": {
      "& $submenuList": {
        visibility: "visible",
      },
    },
    "& .MuiButton-root": {
      fontWeight: 400,
      textTransform: "capitalize",
      transition: "none !important",
    },
  },
  navButton: {
    textAlign: "center",
    "& > span": {
      color: "#ffffff",
      marginLeft: "0.75rem",
      marginRight: "0.75rem",
      textTransform: "capitalize",
      fontWeight: "normal",
      lineHeight: "1.5rem",
      fontStyle: "normal",
    },
  },
  navContactButton: {
    textAlign: "center",
    padding: "0.75rem 1.5rem !important",
    backgroundColor: "#ef530b !important",
    boxShadow: "0px 4px 8px rgba(252, 218, 188, 0.16)",
    marginLeft: "0.75rem !important",
    "& > span": {
      textTransform: "capitalize",
      color: "#ffffff",
      [theme.breakpoints.down(769)]: {
        fontSize: "0.875rem",
        fontWeight: 500,
      },
    },
    [theme.breakpoints.down(769)]: {
      padding: "0.5rem 1.25rem",
    },
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  navButtonContainer: {
    height: "100%",
    alignItems: "center",
  },
  topNav: {
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  mobileTopNav: {
    [theme.breakpoints.up(769)]: {
      display: "none",
    },
  },
  menuIconBtn: {
    color: "#ffffff",
    borderRadius: "1px",
    width: "24px",
    height: "24px",
  },
  iconButton: {
    paddingLeft: "1.938rem",
    [theme.breakpoints.down(769)]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  contactLink: {
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  drawer: {
    width: 375,
  },
  drawerBannerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "1.5rem",
    paddingBottom: "calc(2.875rem - 6px)",
  },
  drawerLogoContainer: {
    display: "flex",
  },
  drawerLogoMain: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "15px",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.75rem",
  },
  drawerLogoSub: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "",
    lineHeight: "9px",
    fontSize: "0.4375rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  drawerLogo: {
    width: 37,
    height: 32,
  },
  drawerLogoText: {
    paddingLeft: "0.1875rem",
    paddingTop: "0.15rem",
    marginTop: "auto",
    marginBottom: "auto",
  },
  closeDrawerIcon: {
    color: "#141433",
  },
  drawerNavContainer: {
    display: "grid",
    paddingLeft: "calc(1.875rem - 8px)",
  },
  drawerNavItem: {
    justifySelf: "start",

    "& .MuiButton-root": {
      paddingBottom: "1.5rem",
    },

    "& .MuiButton-text": {
      fontSize: "1.25rem",
      fontWeight: "400",
    },
  },
  drawerContactNav: {
    "& .MuiButton-text": {
      padding: "0.75rem 1.5rem",
    },
    "& .MuiButton-root": {
      textTransform: "capitalize",
      fontWeight: 500,
      lineHeight: "1.25rem",
      textAlign: "center",
      backgroundColor: "#EF530b",
      color: "#ffffff",
      borderRadius: 4,
    },
  },
  drawerNavButton: {
    justifyContent: "start !important",
  },
  serviceNavButton: {
    paddingBottom: "1.25rem",
    fontSize: "1.25rem",
  },
  subMenuContainer: {
    marginTop: "-0.25rem",
  },
  subMenuContainerOpen: {
    marginTop: 0,
    height: "100%",
    height: 160,
    maxHeight: 160,
    visibility: "visible",
    transitionDelay: "0s",
  },
  subMenuList: {
    marginTop: 0,
    marginBottom: 0,
    listStyleType: "none",
    paddingLeft: 8,
    visibility: "hidden",
    opacity: 0,
    height: 0,
    transition: "all 0.25s ease 0s, visibiltiy 0s linear 0.25s",
  },
  subMenuListOpen: {
    marginTop: 0,
    marginBottom: 0,
    listStyleType: "none",
    paddingLeft: 8,
    visibility: "visible",
    opacity: 1,
    height: 160,
    transition: "all 0.25s ease 0s, visibiltiy 0s linear 0.25s",
  },
  serviceNavItem: {
    // marginBottom: "1.25rem",
    "& .MuiButton-text": {
      paddingLeft: 0,
      paddingBottom: "0.75rem",
    },
    "& .MuiButton-root": {
      textTransform: "capitalize",
      lineHeight: "1.75rem",
      fontSize: "1rem",
      fontWeight: "normal",
      fontStyle: "normal",
      color: "#141433",
      fontWeight: "400 !important",
    },
  },
  serviceNavItemBtn: {
    "& .MuiButton-text": {
      paddingLeft: 0,
    },
    "& .MuiButton-root": {
      textTransform: "capitalize",
      lineHeight: "1.75rem",
      fontWeight: "normal",
      fontStyle: "normal",
      color: "#141433",
      fontWeight: "400 !important",
    },
  },
  drawerLogoImgContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  drawerFooter: {
    paddingLeft: "0.5rem",
    display: "flex",
    position: "fixed",
    bottom: 0,
    marginBottom: "3.125rem",
  },
  drawerFooterIconContainer: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#e8e8eb",
    marginRight: "0.75rem",
  },
  drawerFooterIcon: {
    borderRadius: "50%",
    width: 20,
    height: 20,
  },
  drawerFacebookIcon: {
    margin: "7px 11.37px 7px 11px",
  },
  drawerDribbleIcon: {
    margin: "6px",
  },
  drawerLinkedInIcon: {
    margin: "6px 6px 8px 8px",
  },
}));
