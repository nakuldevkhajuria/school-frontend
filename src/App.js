import React from "react";
import Header from "./components/Header";
import EventGallery from "./components/EventsGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <EventGallery />
      <Footer />
    </div>
  );
}

export default App;
