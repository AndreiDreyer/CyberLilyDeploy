import React, { useState } from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";

import clsx from "clsx";

import { makeStyles, useTheme, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            textAlign: "center",
            perspective: "40rem",
            maxHeight: '10rem',
            maxWidth: "80%",
            [theme.breakpoints.down(1025)]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.down(769)]: {
                marginTop: "2.5rem",
            },
            [theme.breakpoints.down(420)]: {
                maxHeight: '20rem',
            },
        },
        innerCard: {
            display: "flex",
            textAlign: "center",
        },
        avatar: {
            backgroundColor: "#E6F3E9",
            position: "absolute",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-13.5rem",
                marginLeft: "13rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-6.5rem",
                marginLeft: "6rem",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
                marginRight: "-4rem",
                marginLeft: "3.5rem",
            }
        },
        avatar2: {
            backgroundColor: "#F1EBF2",
            position: "absolute",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-13rem",
                marginLeft: "12rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-5.5rem",
                marginLeft: "5rem",
            },
            [theme.breakpoints.down(420)]: {
                marginRight: "-3.0rem",
                marginLeft: "2rem",
            },
        },
        avatar3: {
            backgroundColor: "#FEF3E9",
            position: "absolute",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-9rem",
                marginLeft: "8.5rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-2rem",
                marginLeft: "1rem",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
                marginRight: "0.5rem",
                marginLeft: "-1rem",
            }
        },
        descText: {
            textAlign: "left",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.5rem",
            paddingTop: "0rem",
            marginBottom: "0rem",
            marginTop: "1.25rem",
            [theme.breakpoints.down(1025)]: {
                marginTop: "-2.5rem",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
            },
            
        },
        text: {
            marginTop: '1rem',
        },
        title: {
            textAlign: "left",
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: "1.5rem",
            paddingTop: "1rem",
            marginBottom: "0rem !important",
            [theme.breakpoints.down(1025)]: {
                textAlign: "center",
            },
            
        },
    }));

    export default function CoreValuesCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    function getAvatar(avatar) {
        if (avatar === "a1") {
          return <Avatar className={classes.avatar}>
                    <picture>
                        <source media="(min-width: 374px)" srcSet={props.valueIcon1} />
                        <source media="(min-width: 1025px)" srcSet={props.valueIcon2} />
                        <source media="(min-width: 2560px)" srcSet={props.valueIcon3} />
                        <img src={props.valueIcon1} />
                    </picture>
                </Avatar>;
        }
        if (avatar === "a2") {
            return <Avatar className={classes.avatar2}>
                      <picture>
                          <source media="(min-width: 374px)" srcSet={props.valueIcon1} />
                          <source media="(min-width: 1025px)" srcSet={props.valueIcon2} />
                          <source media="(min-width: 2560px)" srcSet={props.valueIcon3} />
                          <img src={props.valueIcon1} />
                      </picture>
                  </Avatar>;
          }
          return <Avatar className={classes.avatar3}>
                    <picture>
                        <source media="(min-width: 374px)" srcSet={props.valueIcon1} />
                        <source media="(min-width: 1025px)" srcSet={props.valueIcon2} />
                        <source media="(min-width: 2560px)" srcSet={props.valueIcon3} />
                        <img src={props.valueIcon1} />
                    </picture>
                </Avatar>;
      }

    const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(4000));
    return (
        <div className={classes.root}>
            {getAvatar(props.avatar)}
            <div className={classes.descText}>
                <p className={classes.title}>{props.valueName}</p>
                <p className={classes.text}>{props.shortDesc}</p>
            </div>
        </div>
    );
  }