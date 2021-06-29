import clsx from "clsx";
import Head from "next/head";

import { useStyles } from "../styles/TechStackStyle";

export default function TechnologyBox(props) {
  const boxClasses = useStyles();
  // props -> icon

  return (
    <div className={boxClasses.iconImg}>
      <img src={`/techicons/${props.imgSrc}`} className={clsx(boxClasses.iconImg, boxClasses[props.imgClass])} />
    </div>
  );
}