import "./App.css";
import FileCom from "./components/SVG/FileCom";

function App() {
  return (
    <>
      <div>
        <FileCom fileName='index.ts'/>
        <FileCom FileName='index.ts'/>
      </div>
    </>
  );
}

export default App;
