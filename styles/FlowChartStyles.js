import { makeStyles } from "@material-ui/core/styles";

export const flowChartClasses = makeStyles((theme) => ({
  flowChartContainer: {
    [theme.breakpoints.down(769)]: {
      overflowX: "hidden",
    },
  },
  background: {
    width: "100%",
    backgroundColor: "#e8e8eb",
    [theme.breakpoints.down(768)]: {},
  },
  flowChart: {
    margin: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "calc(100% - 128px)",
    maxWidth: 1380,
    minHeight: 400,
    position: "relative",
    backgroundColor: "#e8e8eb",
    [theme.breakpoints.down(769)]: {
      overflowX: "auto",
      "-ms-overflow-style": "none",
      scrollbarWidth: "none",
      minHeight: 300,
      marginRight: 0,
      marginLeft: "2rem",
      width: "100%",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  flowChartBackground: {
    position: "absolute",
    width: "150vw",
    height: "384px",
    backgroundColor: "#F9F9FA",
    left: "-50vw",
    zIndex: -1,
  },
  flowChartDiagram: {
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  flowChartDiagramSvg: {
    minWidth: 900,
    overflow: "visible",
    paddingRight: 45,
    backgroundColor: "#e8e8eb",
  },
  flowChartDottedLine: {
    strokeDasharray: 4,
    strokeDashoffset: 8,
    animationName: "$dashAnimation",
    animationDuration: ".2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    fill: "none",
    WebkitFontSmoothing: "antialiased",
  },
  flowChartSolidLine: {
    strokeDashoffset: -750,
    strokeDasharray: 750,
    transition: "stroke-dashoffset .1s linear, stroke .2s linear",
  },
  "@keyframes dashAnimation": {
    to: {
      strokeDashoffset: 0,
    },
  },
  flowChartNodeGroup: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  chatNode: {
    "&:hover": {
      "& > circle": {
        fill: "#E8E8eb",
      },
      "& > $chatTooltip": {
        display: "block",
      },
    },
  },
  designNode: {
    "&:hover": {
      "& > circle": {
        fill: "#FFF7E8",
        stroke: "#FDB314",
      },
      "& > svg > path": {
        stroke: "#FDB314",
      },
      "& > $designTooltip": {
        display: "block",
      },
    },
  },
  approvalNode: {
    "&:hover": {
      "& > circle": {
        fill: "#E6F3E9",
        stroke: "#008222",
      },
      "& > svg > path": {
        stroke: "#008222",
      },
      "& > $approvalTooltip": {
        display: "block",
      },
    },
  },
  partnerNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fef3e9",
        stroke: "#f68320",
      },
      "& > svg > path.svgSmile": {
        stroke: "#f68320",
      },
      "& > svg > path.svgSmileEyes": {
        fill: "#f68320",
      },
      "& > $partnerTooltip": {
        display: "block",
      },
    },
  },
  requestNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fae8e9",
        stroke: "#cf1a21",
      },
      "& > svg > path": {
        stroke: "#cf1a21",
      },
      "& > $requestTooltip": {
        display: "block",
      },
    },
  },
  developNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fae8e9",
        stroke: "#cf1a21",
      },
      "& > svg > path": {
        stroke: "#cf1a21",
      },
      "& > $developTooltip": {
        display: "block",
      },
    },
  },
  testNode: {
    "&:hover": {
      "& > circle": {
        fill: "#f1ebf2",
        stroke: "#723680",
      },
      "& > svg > path": {
        stroke: "#723680",
      },
      "& > $testTooltip": {
        display: "block",
      },
    },
  },
  deployNode: {
    "&:hover": {
      "& > circle": {
        fill: "#e6f3e9",
        stroke: "#008222",
      },
      "& > svg > path": {
        stroke: "#008222",
      },
      "& > $deployTooltip": {
        display: "block",
      },
    },
  },
  chatTooltip: {
    display: "none",
  },
  designTooltip: {
    display: "none",
  },
  approvalTooltip: {
    display: "none",
  },
  partnerTooltip: {
    display: "none",
  },
  requestTooltip: {
    display: "none",
  },
  developTooltip: {
    display: "none",
  },
  testTooltip: {
    display: "none",
  },
  deployTooltip: {
    display: "none",
  },
  flowChartIcon: {
    margin: "auto",
    width: 32,
    height: 32,
  },
  toolTipText: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    lineHeight: "1.75rem",
    color: "#43435C",
    fill: "#43435C",
  },
  line1: {
    backgroundImage: "linear-gradient(120deg, #F68320 0%, #F68320 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
  },
  title: {
    textAlign: "center",
    paddingTop: "6.25rem",
    width: "100vw",
  },
  titleText: {
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  swipeContainer: {
    visibility: "hidden",
    [theme.breakpoints.down(769)]: {
      width: "100vw",
      visibility: "visible",
      textAlign: "right",
      paddingBottom: "3.5rem",
      paddingRight: "1.5rem",
      fontWeight: 500,
    },
  },
}));
