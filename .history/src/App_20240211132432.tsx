import "./App.css";
import FileCom from "./components/FileCom";

function App() {
  return (
    <>
      <div>
        <FileCom fileName='index.ts'/>
        <FileCom fileName='index.html'/>
      </div>
    </>
  );
}

export default App;
