import { useState, useEffect } from "react";
import "@/styles/globals.css";
import Nav from "@/Components/Nav";
import Cookies from "@/Components/Cookies";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [cookies, setCookies] = useState(true);

  const { windowWidth } = useWindowDimensions();

  const hideCookies = () => {
    setCookies(false);
    // Save 'cookies' state in local storage when hiding cookies
    localStorage.setItem("cookiesAccepted", JSON.stringify(false));
  };

  useEffect(() => {
    // Check if the 'cookiesAccepted' key exists in local storage
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setCookies(JSON.parse(cookiesAccepted));
    }

    windowWidth < 1000 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <>
      {cookies && <Cookies hideCookies={hideCookies} />}
      <Nav active={active} setActive={setActive} />
      <div style={active ? { opacity: 0 } : { opacity: 1 }}>
        <ParallaxProvider>
          <Component {...pageProps} mobile={mobile} />
        </ParallaxProvider>
      </div>
    </>
  );
}
