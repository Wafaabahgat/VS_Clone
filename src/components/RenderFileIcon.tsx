import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  name: string;
}

const RenderFileIcon = ({ name }: IProps) => {
  const extension = name.split(".").pop();

  if (extension === "tsx") return <IconImg src="/public/icons/react_ts.svg" />;
  if (extension === "html") return <IconImg src="/public/icons/html.svg" />;
  if (extension === "jsx") return <IconImg src="/public/icons/react.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
