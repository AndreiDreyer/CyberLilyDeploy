import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    marginTop: "6.25rem",
    marginBottom: "5%",
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "2.5rem",
    marginTop: "0rem",
    marginBottom: "0rem",
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
  card: {
    display: "flex",
    width: "100%",
    marginTop: "4%",
    paddingLeft: "8%",
    [theme.breakpoints.down(1025)]: {
      textAlign: "center",
      display: "block",
      paddingLeft: "0%",
      paddingRight: "0%",
    },
  },
  title_text: {
    [theme.breakpoints.down(1025)]: {
      width: "100%",
      textAlign: "center",
    },
  },
  cardTitle: {
    minWidth: "36%",
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "3rem",
    marginBottom: "0rem",
    [theme.breakpoints.down(1025)]: {
      width: "100%",
      textAlign: "center",
    },
  },
  cardText: {
    width: "80%",
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    [theme.breakpoints.down(1025)]: {
      width: "100%",
      textAlign: "center",
      marginBottom: "5%",
    },
  },
  cardImage: {
    minWidth: "40%",
    marginRight: "10%",
    [theme.breakpoints.down(1025)]: {
      width: "105%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
}));

export default function HomeTechExp(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(1025));

  if (!mobileBreakpoint) {
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>
          Our <span className={classes.line1}>technological expertise</span>
        </h2>
        <div className={classes.card}>
          <div className={classes.title_text}>
            <h2 className={classes.cardTitle}> Front End </h2>
            <p className={classes.cardText}>
              We develop the front end of our applications and websites using OOCSS principles. This is done with the intent of writing modular,
              reusable code. We create eye-catching, elegant and user friendly experiences using careful design and programming practices. Each
              component is designed independently, like a building block in a large structure, making swapping and modifying individual components a
              quick and easy process.
            </p>
          </div>
          <img className={classes.cardImage} src={"./FrontEnd.svg"} />
        </div>
        <div className={classes.card}>
          <img className={classes.cardImage} src={"./BackEnd.svg"} />
          <div className={classes.title_text}>
            <h2 className={classes.cardTitle}> Back End </h2>
            <p className={classes.cardText}>
              The backend is the main mechanism of every application. Where the front end is the hood of the car, the backend is the car’s engine.
              This is where make sure everything runs with the highest efficiency possible and that modifications will be as simple as removing and
              adding a new part. We use the same modular programming principles applied to our front-end development. In order to bring applications
              to life, we make use of many technologies. These include but are not limited to, Java, Python, MySQL, PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>
          Our <span className={classes.line1}>technological expertise</span>
        </h2>
        <div className={classes.card}>
          <div className={classes.title_text}>
            <h2 className={classes.cardTitle}> Front End </h2>
            <p className={classes.cardText}>
              We develop the front end of our applications and websites using OOCSS principles. This is done with the intent of writing modular,
              reusable code. We create eye-catching, elegant and user friendly experiences using careful design and programming practices. Each
              component is designed independently, like a building block in a large structure, making swapping and modifying individual components a
              quick and easy process.
            </p>
          </div>
          <img className={classes.cardImage} src={"./Home_fe@3x.png"} />
        </div>
        <div className={classes.card}>
          <div className={classes.title_text}>
            <h2 className={classes.cardTitle}> Back End </h2>
            <p className={classes.cardText}>
              The backend is the main mechanism of every application. Where the front end is the hood of the car, the backend is the car’s engine.
              This is where make sure everything runs with the highest efficiency possible and that modifications will be as simple as removing and
              adding a new part. We use the same modular programming principles applied to our front-end development. In order to bring applications
              to life, we make use of many technologies. These include but are not limited to, Java, Python, MySQL, PostgreSQL.
            </p>
          </div>
          <img className={classes.cardImage} src={"./Home_be@3x 2.png"} />
        </div>
      </div>
    );
  }
}
