import { useEffect } from "react";

import Link from "next/link";

import Logo from "./Logo";
import TopNavbar from "./TopNavbar";
import MobileNav from "./MobileNav";

import { useStyles } from "../styles/TopNavbarStyle";

const navigationItems = [
  {
    navText: "Home",
    navUrl: "/",
  },
  {
    navText: "Services",
    navUrl: "/services",
    subNav: [
      {
        navText: "Website Design & Development",
        url: "/service-website",
      },
      {
        navText: "Web Application Design & Development",
        url: "/service-web-app",
      },
      {
        navText: "Custom Software Development",
        url: "/service-custom",
      },
    ],
  },
  {
    navText: "About",
    navUrl: "/about",
  },
];

export default function Navigation() {
  const styles = useStyles();

  const handleScroll = () => {
    console.log("Scroll event", window.scrollY);

    if (window.scrollY > 20) {
      let navbarContainer = document.querySelector("header");

      navbarContainer.classList.add(styles.isScrolled);
    } else {
      let navbarContainer = document.querySelector("header");

      navbarContainer.classList.remove(styles.isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={styles.navbarContainer}>
      <div className={styles.logoDiv}>
        <Logo />
      </div>
      <div className={styles.topNav} id="topNavbar">
        <TopNavbar navItems={navigationItems} />
      </div>
      <div className={styles.mobileTopNav} id="mobileTopNavbar">
        <MobileNav navItems={navigationItems} />
      </div>
    </header>
  );
}
