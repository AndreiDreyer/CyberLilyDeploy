import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    root: {
        minWidth: "100% !important",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#F9F9FA",
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.down(1550)]: {
          paddingLeft: '0%',
          paddingRight: '0%',
        },
        [theme.breakpoints.down(1025)]: {
          paddingLeft: '1%',
          paddingRight: '1%',
        },
        [theme.breakpoints.down(435)]: {
          textAlign: "center !important",
          alignContent: "center !important",
          marginLeft: "auto",
          marginRight: "auto",
        },
      },
      processItem: {
        width: "25%",
        paddingBottom: "1rem",
        [theme.breakpoints.down(1025)]: {
          width: "50%",
        },
        [theme.breakpoints.down(435)]: {
          width: "100%",
          textAlign: "center",
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }
      },
      topText: {
          width: "100%",
          alignItems: "center",
          fontWeight: 700,
          fontSize: "2.5rem",
          lineHeight: "1.5rem",
          marginBottom: "4rem !important",
          marginTop: "5rem !important",
          textAlign: "center",
          [theme.breakpoints.down(1025)]: {
            textAlign: "center",
            marginBottom: '0rem !important',
          },
          [theme.breakpoints.down(435)]: {
            fontWeight: 500,
            fontSize: "1.75rem",
            lineHeight: "2rem",
          },
      },
      line1: {
        backgroundImage: "linear-gradient(120deg, #F68320 0%, #F68320 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
      },
}); 

export { useStyles };