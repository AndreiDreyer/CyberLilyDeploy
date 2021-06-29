import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import Footer from "../components/footer";
import GitFooter from "../components/GitFooter";
import TopServiceCard from "../components/TopServiceCard";
import OurProcessServicesWebApp from "../components/OurProcessServicesWebApp";
import TechStack from "../components/TechStack";


const techIcons = [
    { imgSrc: "react_logo.svg", className: "reactIcon" },
    { imgSrc: "html_logo.svg", className: "htmlIcon", boxName: "htmlBox" },
    { imgSrc: "css_logo.svg", className: "cssIcon", boxName: "cssBox" },
    { imgSrc: "mui_logo.svg", className: "muiIcon" },
    { imgSrc: "tailwind_logo.svg", className: "tailwindIcon" },
    { imgSrc: "java_logo.svg", className: "javaIcon" },
    { imgSrc: "python_logo.svg", className: "pythonIcon" },
    { imgSrc: "nodejs_logo.svg", className: "nodejsIcon" },
    { imgSrc: "mysql_logo.svg", className: "mysqlIcon" },
    { imgSrc: "postgresql_logo.svg", className: "postgresqlIcon" }
]

export default function ServiceWebApp() {
  return (
    <div>
        <Head>
        <title>Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <TextBanner headerText={'Building applications the right way for your business'}/>
        <TopServiceCard
        serviceTitle={'Web application'}
        serviceImage={'./webApp.svg'}
        shortDesc={""}
        />
        <OurProcessServicesWebApp />
        <TechStack techStackItems={techIcons} />
        <GitFooter />
        <Footer />
    </div>
  );
}