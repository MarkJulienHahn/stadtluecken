import { useState } from "react";
import "@/styles/globals.css";
import Nav from "@/Components/Nav";

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <Nav active={active} setActive={setActive} />
      <div style={active ? { opacity: 0 } : { opacity: 1 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
