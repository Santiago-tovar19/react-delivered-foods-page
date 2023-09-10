import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HeadLineCards } from "./components/HeadLineCards";
import { Food } from "./components/Food";
import { Category } from "./components/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </>
  );
}

export default App;
