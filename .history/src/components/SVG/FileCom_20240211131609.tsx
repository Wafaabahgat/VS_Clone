import FileIcon from "./File";

interface IProps {
  FileName: string;
}
const FileCom = ({ FileName }: IProps) => {
  return (
    <div>
      <span>
        <FileIcon />
      </span>
      <span>{FileName}</span>
    </div>
  );
};

export default FileCom;
