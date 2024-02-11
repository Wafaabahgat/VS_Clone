import "./App.css";
import FileCom from "./components/FileCom";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div>
        {fileTree.children &&
          fileTree.children.map((file, index) => (
            <FileCom fileName={file.name} key={index} />
          ))}
      </div>
    </>
  );
}

export default App;
