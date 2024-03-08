import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.name} file={file} />
        ))}
      </div>
    </div>
  );
};

export default OpenedFileBar;
