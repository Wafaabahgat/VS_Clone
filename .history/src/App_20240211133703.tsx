import "./App.css";
import FileCom from "./components/FileCom";

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
