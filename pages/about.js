import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import WhoWeAreAbout from "../components/WhoWeAreAbout";
import OurGoalsAbout from "../components/OurGoalsAbout";
import CoreValuesAbout from "../components/CoreValuesAbout";
import GitFooter from "../components/GitFooter";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Head>
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <title>Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <TextBanner headerText={"Making use of Computer Science to transform your business"} />
      <WhoWeAreAbout />
      <OurGoalsAbout />
      <CoreValuesAbout />
      <GitFooter />
      <Footer />
    </div>
  );
}
