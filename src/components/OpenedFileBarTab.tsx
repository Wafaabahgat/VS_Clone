import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  return (
    <div className="flex items-center p-2">
      <RenderFileIcon name={file.name} />
      <span className=" cursor-pointer flex justify-center  duration-300 items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <div className="cursor-pointer">
        <CloseIcon />
      </div>
    </div>
  );
};

export default OpenedFileBarTab;
