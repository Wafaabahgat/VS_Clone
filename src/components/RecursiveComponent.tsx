import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
import { IFile } from "../interfaces/index";
import { useState } from "react";
import FolderIcon from "./SVG/Folder";
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({
  fileTree: { name, children, isFolder },
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={handleOpen} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}

            <FolderIcon />
            <span>{name}</span>
          </div>
        ) : (
          <span className="mr-4 flex items-center">
            <FileIcon />
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