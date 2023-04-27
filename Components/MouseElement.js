import React, { useState, useEffect } from "react";
import styles from "../styles/Button.module.css";

const MouseElement = (props) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const mouseElement = {
    position: "fixed",
    top: y,
    left: x,
    visibility: props.lable ? "visible" : "hidden",
    background: props.background ? props.background : "var(--tertiary)",
  };

  return (
    props.lable && (
      <div className={styles.hoverButton} style={mouseElement}>
        {props.lable}
      </div>
    )
  );
};

export default MouseElement;
