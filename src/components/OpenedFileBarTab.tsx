import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/featurres/fileTreeSlices";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    const { name, content } = file;
    dispatch(setClickedFileAction({ fileName: name, fileContent: content }));
  };
  return (
    <div
      className="flex items-center p-2 border-[#ffffff1f] border-b-[1px] border-r-[1px]"
      onClick={onClick}
    >
      <RenderFileIcon name={file.name} />
      <span className="cursor-pointer flex justify-center duration-300 items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <div className="cursor-pointer">
        <CloseIcon />
      </div>
    </div>
  );
};

export default OpenedFileBarTab;
