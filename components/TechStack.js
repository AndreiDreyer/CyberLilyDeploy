import TechnologyBox from "./TechnologyBox";
import clsx from "clsx";

import { useStyles } from "../styles/TechStackStyle";

export default function TechStack(props) {
  const techClasses = useStyles();
  // props -> list of img srcs
  return (
    <div>
      <h2 className={techClasses.heading}>Technologies <span className={techClasses.line1}>we use</span></h2>
      <div className={techClasses.iconContainer}>
        {props.techStackItems.map((techStackItem) => (
          <div key={techStackItem.imgSrc} className={clsx(techClasses.iconBox, techClasses[techStackItem.boxName])}>
            <TechnologyBox imgSrc={techStackItem.imgSrc} imgClass={techStackItem.className} />
          </div>
        ))}
      </div>
    </div>
  );
}