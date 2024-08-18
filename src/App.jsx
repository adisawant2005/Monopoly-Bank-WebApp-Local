import { useState } from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full w-full relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
