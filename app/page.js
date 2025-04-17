"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Navbar onChatClick={() => setShowChat(true)} />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      {showChat && <AIChat onClose={() => setShowChat(false)} />}
    </>
  );
}
