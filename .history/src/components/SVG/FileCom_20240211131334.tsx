interface IProps {
  FileName: string;
}
const FileCom = ({ FileName }: IProps) => {
  return <div>{FileName}</div>;
};

export default FileCom;
