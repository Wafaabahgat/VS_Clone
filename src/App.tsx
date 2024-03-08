import "./App.css";
import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFileBar />
      </div>
    </>
  );
}

export default App;
