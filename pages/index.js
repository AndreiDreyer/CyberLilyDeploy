import Head from "next/head";

import Navigation from "../components/Navigation";
import LandingBanner from "../components/LandingBanner";
import HomeServiceCards from "../components/HomeServiceCards";
import FlowChart from "../components/FlowChart";
import HomeTechExp from "../components/HomeTechExp";
import GetInTouchFooter from "../components/GitFooter";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <LandingBanner />
      <HomeServiceCards />
      <FlowChart />
      <HomeTechExp />
      <GetInTouchFooter />
      <Footer />
    </div>
  );
}
