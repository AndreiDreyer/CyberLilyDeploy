import { useStyles } from "../styles/LandingBannerStyles";

import Button from "@material-ui/core/Button";

export default function LandingBanner() {
  const styles = useStyles();

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h1>Simple Solutions to Complex Problems</h1>
          <p>We design and develop amazing web products that grow your business.</p>
        </div>
        <div className={styles.bannerImageContainer}>
          <div className={styles.bannerImage}>
            <img src="/home_page_banner.svg" className={styles.bannerImg} />
          </div>
        </div>
        <div className={styles.bannerContactButton}>
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
}
