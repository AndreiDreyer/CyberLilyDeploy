import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    mainContainer: {
        width: "100% !important",
        backgroundColor: "#F9F9FA",
        textAlign: "center",
        height: "25rem",
        color: "#141433",
        fontSize: "2.25rem",
    },
    logo: {
        paddingTop: "5.5rem",
        marginLeft: "auto",
        marginRight: "auto",
    },
    contactButton: {
        color: "#FFFFFF !important",
        backgroundColor: "#EF530B !important",
        radius: "0.25rem",
        width: "9.563rem",
        height: "3rem",
        textTransform: "capitalize !important", 
        marginLeft: "auto",
        marginRight: "auto",
    },
    textBlock: {
        width: "100%",
        marginTop: "0",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "0rem",
        [theme.breakpoints.up(770)]: {
            fontWeight: "700",
            paddingLeft: "2%",
            paddingRight: "2%",
        },
        [theme.breakpoints.down(769)]: {
            paddingLeft: "4%",
            paddingRight: "4%",
        },
        [theme.breakpoints.down(435)]: {
            fontWeight: "500",
            fontSize: "1.5rem",
        },
    },
    textBlock2: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "0rem",
        [theme.breakpoints.up(770)]: {
            fontWeight: "700",
            paddingLeft: "2%",
            paddingRight: "2%",
        },
        [theme.breakpoints.up(760)]: {
            marginTop: "-2rem",
            paddingLeft: "4%",
            paddingRight: "4%",
        },
        [theme.breakpoints.down(435)]: {
            marginTop: "-1rem",
            fontWeight: "500",
            fontSize: "1.5rem",
        },
        
    },
}); 

export { useStyles };