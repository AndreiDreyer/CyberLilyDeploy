import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import Footer from "../components/footer";
import GitFooter from "../components/GitFooter";
import TopServiceCard from "../components/TopServiceCard";
import OurProcessServicesSoft from "../components/OurProcessServicesSoft";
import TechStack from "../components/TechStack";


const techIcons = [
    { imgSrc: "java_logo.svg", className: "javaIcon" },
    { imgSrc: "python_logo.svg", className: "pythonIcon" },
    { imgSrc: "mysql_logo.svg", className: "mysqlIcon" },
    { imgSrc: "postgresql_logo.svg", className: "postgresqlIcon" }
]

export default function ServiceCustom() {
  return (
    <div>
      <Head>
        <title>Services Custom Software Design and Development - Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <TextBanner headerText={'Custom software development services that grows your business'}/>
      <TopServiceCard 
      serviceTitle={'Custom software'}
      serviceImage={'./customSoft.svg'}
      shortDesc={"This service is similar to that of the web application service however is more tailored to being a local application, that is, an application that runs locally on your pc and does not need to be accessed through a web browser. This service also covers the development of mobile applications, that is, applications that run on a smartphone. These applications may have internet capabilities however they run independently and do not need to make use of a browser in order to execute their intended purpose. "}
      />
      <OurProcessServicesSoft />
      <TechStack techStackItems={techIcons} />
      <GitFooter />
      <Footer />
    </div>
  );
}
