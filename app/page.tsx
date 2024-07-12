import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Main } from "next/document";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Features />
    
    </>
  );
}
