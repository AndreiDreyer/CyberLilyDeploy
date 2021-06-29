import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  serviceCards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    columnGap: "0.75rem",
    paddingRight: "7.5rem",
    paddingLeft: "7.5rem",
    maxWidth: "100vw",
    justifyContent: "center",
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "3.75rem",
      paddingRight: "3.75rem",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },

  cardRoot: {
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
    borderRadius: "12px",
    width: "100%",
    gridColumn: "span 2",
    [theme.breakpoints.down(1025)]: {
      "&:nth-child(3):nth-child(odd)": {
        gridColumn: "2 / span 2",
      },
    },
  },

  cardFrontImage: {
    margin: "2rem 2rem 3.25rem 2rem",
    borderRadius: "8px",
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  cardFrontHeader: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    color: "#141433",
    textAlign: "center",
    marginBottom: "1.75rem",
  },
}));
