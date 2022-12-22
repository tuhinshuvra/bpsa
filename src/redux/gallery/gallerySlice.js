import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  galleryCategory: [],
  galleryCategoryError: "",
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setGalleryCategory: (state, action) => {
      state.galleryCategory = action.payload;
    },
    setGalleryCategoryError: (state, action) => {
      state.galleryCategoryError = action.payload;
    },
    // filterGalleryItem:(state,action)=>{
    //   let newData = state.galleryCategory.filter(item=>item?.)

    // }
  },
});

// Action creators are generated for each case reducer function
export const { setGalleryCategory, setGalleryCategoryError } =
  gallerySlice.actions;

export default gallerySlice.reducer;
