import { bannerStyles } from "../styles/TextBannerStyles";

export default function TextBanner(props) {
  // props.headerText -> text for header banner

  const bannerClasses = bannerStyles();

  return (
    <div className={bannerClasses.container}>
      <div className={bannerClasses.headerTextContainer}>
        <h2 className={bannerClasses.headerText}>{props.headerText}</h2>
      </div>
    </div>
  );
}
