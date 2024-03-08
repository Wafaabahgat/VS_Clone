import { IFile } from "../interfaces";

export const doesFileObjExists = (arr: IFile[], id: string) => {
  return arr.some((e) => e.id === id);
};
