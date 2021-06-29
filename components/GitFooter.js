import React from "react";
import clsx from "clsx";

import { useStyles } from "../styles/GITFooter";
import Button from "@material-ui/core/Button";

export default function GetInTouchFooter() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <img className={classes.logo} src="./logomark.svg" />
      <p className={classes.textBlock}>Reach out and let's grow your</p>
      <p className={classes.textBlock2}>product together.</p>
      <Button href="/contact" variant="contained" disableElevation className={classes.contactButton}>
        Get In Touch
      </Button>
    </div>
  );
}
