import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallery/gallerySlice";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});
