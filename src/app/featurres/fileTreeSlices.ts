import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string| undefined;
}

interface IinitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IinitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFileAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileContent = action.payload.fileContent;
      state.clickedFile.fileName = action.payload.fileName;
    },
  },
});
export const { setOpenedFileAction, setClickedFileAction } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
