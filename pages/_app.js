import { useState, useEffect } from "react";
import "@/styles/globals.css";
import Nav from "@/Components/Nav";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(true);
  const [mobile, setMobile] = useState(false);

  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    windowWidth < 1000 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <div style={active ? { opacity: 0 } : { opacity: 1 }}>
        <Component {...pageProps} mobile={mobile} />
      </div>
    </>
  );
}
