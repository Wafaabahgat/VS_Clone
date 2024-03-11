import RightArrowIcon from "./SVG/Right";
import { IFile } from "../interfaces/index";
import { useState } from "react";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setOpenedFileAction } from "../app/featurres/fileTreeSlices";
import { doesFileObjExists } from "../utils/function";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, children, isFolder } = fileTree;

  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjExists(openedFiles, id);
    if (exists) {
      return;
    }
    dispatch(setOpenedFileAction([...openedFiles, fileTree]));
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={handleOpen} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            {/* <FolderIcon /> */}
            <RenderFileIcon name={name} isFolder={isFolder} isOpen={isOpen} />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <span className="mr-4 flex items-center" onClick={onFileClicked}>
            <RenderFileIcon name={name} />
            <span className="ml-2">{name}</span>
          </span>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, index) => (
          <RecursiveComponent fileTree={file} key={index} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
