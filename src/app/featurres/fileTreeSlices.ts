import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IinitialState {
  activeTabId: string | null;
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IinitialState = {
  activeTabId: null,
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
      state.clickedFile = action.payload;
    },
    setActiveTabIdAction: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
  },
});
export const {
  setOpenedFileAction,
  setClickedFileAction,
  setActiveTabIdAction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
