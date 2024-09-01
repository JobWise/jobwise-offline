import logo from "./logo-full-white.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: "50px" }}
        />
        <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
          <p style={{ fontSize: 24 }}>
            Jobwise is currently experiencing issues and we are working quickly
            to restore the application.
            <br />
            <br />
            We apologize for any inconvenience. Please try again later.
          </p>

          <a
            style={{ color: "white", fontSize: 18 }}
            href="mailto:support@jobwise.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact support
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
