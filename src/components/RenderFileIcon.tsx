import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  name: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const extensionIcon: Record<string, string> = {
  // file
  tsx: "/public/icons/react_ts",
  html: "public/icons/html",
  jsx: "public/icons/react.svg",

  // Folder
  node_modules: "public/icons/folder-node",
  public: "public/icons/folder-public",
  src: "public/icons/folder-src",
  components: "public/icons/folder-components",
};

const RenderFileIcon = ({ name, isFolder, isOpen }: IProps) => {
  const extension = name.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIcon, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIcon[extension]}-open.svg`
        : `${extensionIcon[extension]}.svg`
      : `${extensionIcon[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }
  if (isFolder && isOpen)
    return <IconImg src="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg src="/public/icons/folder-default.svg" />;
  return <FileIcon />;


  // if (extension === "tsx") return <IconImg src="/public/icons/react_ts.svg" />;
  // if (extension === "html") return <IconImg src="/public/icons/html.svg" />;
  // if (extension === "jsx") return <IconImg src="/public/icons/react.svg" />;
  // if (extension === "node_modules" && isFolder)
  // return isOpen ? (
  // <IconImg src="/public/icons/folder-node-open.svg" />
  // ) : (
  // <IconImg src="/public/icons/folder-node.svg" />
  // );

  // if (extension === "public" && isFolder)
  // return isOpen ? (
  // <IconImg src="/public/icons/folder-public-open.svg" />
  // ) : (
  // <IconImg src="/public/icons/folder-public.svg" />
  // );

  // if (extension === "components" && isFolder)
  // return isOpen ? (
  // <IconImg src="/public/icons/folder-components-open.svg" />
  // ) : (
  // <IconImg src="/public/icons/folder-components.svg" />
  // );

  // if (extension === "src" && isFolder)
  // return isOpen ? (
  // <IconImg src="/public/icons/folder-src-open.svg" />
  // ) : (
  // <IconImg src="/public/icons/folder-src.svg" />
  // );

  // if (isFolder && isOpen)
  // return <IconImg src="/public/icons/folder-default-open.svg" />;
  // if (isFolder && !isOpen)
  // return <IconImg src="/public/icons/folder-default.svg" />;
};

export default RenderFileIcon;
