import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div>
        <RecursiveComponent fileTree={fileTree} />
      </div>
    </>
  );
}

export default App;
