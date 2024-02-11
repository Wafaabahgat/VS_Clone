import "./App.css";
import FileCom from "./components/FileCom";
import FolderCom from "./components/FolderCom";

function App() {
  return (
    <>
      <div>
        <FileCom fileName="index.ts" />
        <FolderCom folderName="node_modules" />
      </div>
    </>
  );
}

export default App;
