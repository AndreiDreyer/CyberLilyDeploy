import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import ChatDetailsContact from "../components/ChatDetailsContact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer";

import { makeStyles, useTheme, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formDetails: {
      [theme.breakpoints.down(1025)]: {
        textAlign: 'center',
      },
    },
    form: {
      marginTop: '-30%',
      marginLeft: '60%',
      marginBottom: '5%',
      [theme.breakpoints.down(1440)]: {
        marginTop: '-40%',
      marginLeft: '60%',
      },
      [theme.breakpoints.down(1025)]: {
        marginTop: '5%',
        marginLeft: '23%',
      },
      [theme.breakpoints.down(769)]: {
        marginTop: '5%',
        marginLeft: '15%',
        marginRight: 'auto',
      },
      [theme.breakpoints.down(435)]: {
        marginTop: '5%',
        marginBottom: '15%',
        marginLeft: '0%',
        marginRight: '0%',
      },
    },
    details: {
      marginTop: '5%',
      marginLeft: '5%',
      [theme.breakpoints.down(1025)]: {
        marginLeft: '0%',
      },
    },
}));

export default function Contact() {
    const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Contact Us - Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <TextBanner headerText={'Ready to kick off a project? Looking for some advice?'}/>
      <div>
        <div className={classes.details}>
        <ChatDetailsContact />
        </div>
        <div className={classes.form}>
        <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
