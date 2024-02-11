interface IProps {
  FileName: string;
}
const FileCom = ({ FileName }: IProps) => {
  return <div>
  <span><FileIcon/></span>
  <span></span>
</div>;
};

export default FileCom;
