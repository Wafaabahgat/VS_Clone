interface IProps {
  folderName: string;
}
const FolderCom = ({ folderName }: IProps) => {
  <div className="flex items-center">
    <span className="mr-2">
      <Fol />
    </span>
    <span>{folderName}</span>
  </div>;
};

export default FolderCom;
