import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useStyles } from "../styles/TopNavbarStyle";
import clsx from "clsx";

const routerMap = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
};

export default function MobileNav(props) {
  const styles = useStyles();
  const navigationItems = props?.navItems;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleServiceDropdown = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const container = typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <div className={styles.navItemContainer}>
      <Link href="/contact">
        <Button className={styles.navContactButton}>Get in touch</Button>
      </Link>
      <IconButton onClick={handleDrawer} className={styles.iconButton} disableRipple>
        <MenuIcon className={styles.menuIconBtn} />
      </IconButton>
      <Drawer container={container} variant="temporary" anchor="right" open={open} onClose={handleDrawer}>
        <div className={styles.drawer}>
          <div className={styles.drawerBannerContainer}>
            <div className={styles.drawerLogoContainer}>
              <div className={styles.drawerLogoImgContainer}>
                <img src="/logo/logomark.png" className={styles.drawerLogo} />
              </div>
              <div className={styles.drawerLogoText}>
                <div className={styles.drawerLogoMain}>Cyber Lily</div>
                <div className={styles.drawerLogoSub}>Software</div>
              </div>
            </div>
            <div>
              <IconButton className={styles.iconButton} onClick={handleDrawer} disableRipple>
                <CloseIcon className={styles.closeDrawerIcon} />
              </IconButton>
            </div>
          </div>
          <div className={styles.drawerNavContainer}>
            {navigationItems.map((navItem) => {
              if (navItem.navText === "Services") {
                return (
                  <div className={styles.drawerNavItem} key={navItem.navText}>
                    <Button
                      className={clsx(styles.serviceNavButton, routerMap[router.route] === navItem.navText ? styles.activeLinkText : "")}
                      onClick={handleServiceDropdown}
                    >
                      {navItem.navText} <ArrowDropDownIcon />
                    </Button>
                    <div className={styles.subMenuContainer}>
                      <ul className={submenuOpen ? styles.subMenuListOpen : styles.subMenuList}>
                        {navItem.subNav.map((subNavItem) => (
                          <Link href={subNavItem.url} key={subNavItem.url}>
                            <li key={subNavItem.navText} className={styles.serviceNavItem}>
                              <Button className={styles.serviceNavItemBtn}>{subNavItem.navText}</Button>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={styles.drawerNavItem} key={navItem.navText}>
                    <Link href={navItem.navUrl}>
                      <Button className={clsx(styles.drawerNavButton, routerMap[router.route] === navItem.navText ? styles.activeLinkText : "")}>
                        {navItem.navText}
                      </Button>
                    </Link>
                  </div>
                );
              }
            })}
            <div className={styles.drawerContactNav}>
              <Link href="/contact">
                <Button className={styles.drawerContactButton}>Get in touch</Button>
              </Link>
            </div>
            <div className={styles.drawerFooter}>
              <div className={styles.drawerFooterIconContainer}>
                <Link href="https://facebook.com" passHref={true}>
                  <div className={clsx(styles.drawerFacebookIcon, styles.drawerFooterIcon)}>
                    <img src="/icons/facebook.png" />
                  </div>
                </Link>
              </div>
              <div className={styles.drawerFooterIconContainer}>
                <Link href="https://dribble.com" passHref={true}>
                  <div className={clsx(styles.drawerDribbleIcon, styles.drawerFooterIcon)}>
                    <img src="/icons/dribble.png" />
                  </div>
                </Link>
              </div>
              <div className={styles.drawerFooterIconContainer}>
                <Link href="https://linkedin.com" passHref={true}>
                  <div className={clsx(styles.drawerLinkedInIcon, styles.drawerFooterIcon)}>
                    <img src="/icons/linkedin.png" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
