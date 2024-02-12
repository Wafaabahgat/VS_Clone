import { configureStore } from "@reduxjs/toolkit";
import fileTreeSlices from "./featurres/fileTreeSlices";
// ...

export const store = configureStore({
  reducer: {
    tree: fileTreeSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
