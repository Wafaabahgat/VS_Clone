interface IProps {}
const FolderCom = ({}: IProps) => {
    <div className="flex items-center">
    <span className="mr-2">
      <FileIcon />
    </span>
    <span>{fileName}</span>
  </div>
};

export default FolderCom;
