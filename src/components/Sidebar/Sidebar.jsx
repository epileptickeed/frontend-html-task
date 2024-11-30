import { useRef, useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import user from "../../assets/userprofilepic.jpg";
import styles from "./sidebar.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { textMotion, slashMotion } from "./animate";
import { useLocation, useNavigate } from "react-router-dom";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", { opened: isOpened });
  const menu = useRef(null);

  const goToRoute = (path) => {
    navigate(path);
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <motion.div className={containerClassnames} data-theme={color}>
      <motion.div
        className="sidebar-inner"
        ref={menu}
        style={{ width: isOpened ? "200px" : "50px" }}
      >
        <div className={styles.icon_div}>
          <img src={logo} alt="TensorFlow logo" />
          <AnimatePresence mode="wait">
            {isOpened && (
              <motion.span
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 10 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  delay: 0.1,
                }}
              >
                TensorFlow
              </motion.span>
            )}
          </AnimatePresence>
          <div
            className={isOpened ? styles.openBtn : styles.shrinkBtn}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </div>
        </div>
        <div className={styles.nav}>
          <div
            className={styles.nav_header}
            style={{ alignItems: isOpened ? "" : "center" }}
          >
            {routes.map((route) => (
              <motion.div
                className={
                  location.pathname === route.path
                    ? styles.nav_items_active
                    : styles.nav_items
                }
                key={route.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon icon={route.icon} />
                {isOpened && (
                  <motion.span
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 10 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ type: "spring" }}
                    variants={textMotion}
                  >
                    {route.title}
                  </motion.span>
                )}
                {!isOpened && (
                  <motion.span
                    className={styles.hidden_nav_items}
                    variants={slashMotion}
                  >
                    {route.title}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
          <div
            className={styles.nav_header}
            style={{ alignItems: isOpened ? "" : "center" }}
          >
            {bottomRoutes.map((route) => (
              <motion.div
                className={
                  location.pathname === route.path
                    ? styles.nav_items_active
                    : styles.nav_items
                }
                key={route.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon icon={route.icon} />
                {isOpened && (
                  <motion.span
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 10 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ type: "spring" }}
                    variants={textMotion}
                  >
                    {route.title}
                  </motion.span>
                )}
                {!isOpened && (
                  <motion.span
                    className={styles.hidden_nav_items}
                    variants={slashMotion}
                  >
                    {route.title}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.profile}>
          <img src={user} alt="profilePicture" width={50} height={50} />
          {isOpened && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 10 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", duration: 0.3 }}
              style={{ alignItems: isOpened ? "" : "center" }}
            >
              <p>User Account</p>
              <h4>Mark T.</h4>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
