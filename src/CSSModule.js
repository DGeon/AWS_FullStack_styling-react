import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const CSSModule = () => {
  //active
  //disabled, selected, checked
  const cx = classNames.bind(styles);
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    //   안녕하세요 저는 <span className="something">CSS Module!</span>
    // </div>
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
