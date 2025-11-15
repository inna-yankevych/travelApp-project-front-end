import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from "./components/Login";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";
import CountrySelector from "./components/CountrySelector";
import VisaRequirements from "./components/VisaRequirements";

function App() {
  const [count, setCount] = useState(0)

  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2 style={{ marginTop: "50px" }}>Travel App Features</h2>

      {/* Login */}
      <section style={{ marginTop: "20px" }}>
        <Login />
      </section>

      {/* Register */}
      <section style={{ marginTop: "20px" }}>
        <Register />
      </section>

      {/* Country Selector */}
      <section style={{ marginTop: "20px" }}>
        <CountrySelector onSelect={setSelectedCountry} />
      </section>

      {/* Visa Requirements */}
      <section style={{ marginTop: "20px" }}>
        <VisaRequirements country={selectedCountry} />
      </section>

      {/* Wishlist */}
      <section style={{ marginTop: "20px" }}>
        <Wishlist />
      </section>
    </>
  );
}

export default App;
