import React from "react";
import Navbar from "../components/Navbar";
import TransaksiMenus from "../components/TransaksiMenus";
import Login from "../components/Login";
import Carousel from "../components/Carousel";
import transaksi from "../json/transaksi.json";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <TransaksiMenus />
      <Login />
      <Carousel />
      <Footer />
    </>
  );
}
