import React from 'react';
import FolderIcon from './SVG/Folder';

interface IProps {
  folderName: string;
}

const FolderCom: React.FC<IProps> = ({ folderName }) => (
  <div className="flex items-center">
    ,
    <span className="mr-2">
      <FolderIcon />
    </span>
    <span>{folderName}</span>
  </div>
);

export default FolderCom;
