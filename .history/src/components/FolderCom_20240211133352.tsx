interface IProps {folderName}
const FolderCom = ({folderName}: IProps) => {
    <div className="flex items-center">
    <span className="mr-2">
      <FileIcon />
    </span>
    <span>{folderName}</span>
  </div>
};

export default FolderCom;
