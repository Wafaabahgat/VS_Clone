import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setActiveTabIdAction,
  setClickedFileAction,
} from "../app/featurres/fileTreeSlices";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { activeTabId } = useSelector((state: RootState) => state.tree);

  const onClick = () => {
    const { id, name, content } = file;
    dispatch(setClickedFileAction({ fileName: name, fileContent: content }));
    dispatch(setActiveTabIdAction(id));
  };
  return (
    <div
      className={`flex items-center p-2 border-t-2  ${
        file.id === activeTabId ? "border-[#cf6ccf]" : " border-transparent"
      }`}
      onClick={onClick}
      // style={{
      //   borderTop:
      //     file.id === activeTabId
      //       ? "2px solid #cf6ccf"
      //       : "2px solid transparent",
      // }}
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
