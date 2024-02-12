import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string;
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
    setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
  },
});
export const { setOpenedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
