import FileIcon from "./File";

interface IProps {
  fileName: string;
}
const FileCom = ({ FileName }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{FileName}</span>
    </div>
  );
};

export default FileCom;
