import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";

const OpenedFileBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.name} file={file} />
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFileBar;
