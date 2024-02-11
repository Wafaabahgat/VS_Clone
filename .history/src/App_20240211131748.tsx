import "./App.css";
import FileCom from "./components/SVG/FileCom";

function App() {
  return (
    <>
      <div>
        <FileCom fileName='index.ts'/>
        <FileCom fileName='index.'/>
      </div>
    </>
  );
}

export default App;
