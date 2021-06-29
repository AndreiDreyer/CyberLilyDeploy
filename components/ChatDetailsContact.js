import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    header1: {
        fontWeight: 700,
        lineHeight: '3rem',
        fontSize: '2.25rem',
        [theme.breakpoints.down(1025)]: {
            textAlign: 'center',
            marginTop: '2.5rem',
        },
        [theme.breakpoints.down(420)]: {
            fontWeight: 500,
            fontSize: '1.75rem',
            lineHeight: '2.25rem',
        },
    },
    header2: {
        fontWeight: 400,
        lineHeight: '1.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down(1025)]: {
            textAlign: 'center',
        },
        [theme.breakpoints.down(420)]: {
            maxWidth: '18.94rem',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    text: {
        marginLeft: '4rem',
        marginTop: '-2rem',
        marginBottom: ' 1.75rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down(1025)]: {
            marginTop: '0.5rem',
            marginRight: '5%',
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(769)]: {
            marginTop: '0.5rem',
            marginRight: '1%',
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(420)]: {
            marginTop: '-2rem',
            marginRight: '1%',
            marginLeft: '4rem',
        },
    },
    text2: {
        marginLeft: '4rem',
        marginTop: '-2rem',
        marginBottom: ' 1.75rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down(1025)]: {
            marginTop: '0.5rem',
            marginRight: '5%',
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(769)]: {
            marginTop: '0.5rem',
            marginRight: '1%',
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(420)]: {
            marginTop: '-2rem',
            marginRight: '1%',
            marginLeft: '4rem',
        },
    },
    detailsDiv: {
        marginLeft: '1.563rem',
        marginTop: '2.25rem',
        [theme.breakpoints.down(1025)]: {
            display: 'flex',
        },
        [theme.breakpoints.down(420)]: {
            display: 'inline-block',
            textAlign: 'center',
            marginLeft: '3.5rem',
        },
        [theme.breakpoints.down(380)]: {
            marginLeft: '2rem',
        }
    },
    avatar: {
        backgroundColor: "#E8E8EB",
        padding: '0.5rem',
        [theme.breakpoints.down(1025)]: {
            marginLeft: '3.5rem',
        },
        [theme.breakpoints.down(769)]: {
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(420)]: {
            marginLeft: '1rem',
        },
    },
    phoneAvatar: {
        backgroundColor: "#E8E8EB",
        padding: '0.5rem',
        [theme.breakpoints.down(1025)]: {
            marginLeft: '3.5rem',
        },
        [theme.breakpoints.down(769)]: {
            marginLeft: '1rem',
        },
        [theme.breakpoints.down(420)]: {
            marginLeft: '3.5rem',
        },
    },
}));

export default function WhoWeAreAbout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.header1}>It all starts with a chat</Typography>
            <Typography className={classes.header2}>Fill out the form and our team will get back to you shortly.</Typography>
            <div className={classes.detailsDiv}>
                <Avatar className={classes.avatar} src="./mail@3x.png" />
                <Typography className={classes.text}>hello@cyberlilysoftware.com</Typography>
                <Avatar className={classes.phoneAvatar} src="./phone@3x.png" />
                <Typography className={classes.text2}>+27 723257125</Typography>
                <Avatar className={classes.phoneAvatar} src="./phone@3x.png" />
                <Typography className={classes.text2}>+263 774 947 635</Typography>
            </div>
        </div>
    );
}