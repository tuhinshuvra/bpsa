import { GetGalleryCategory } from "../../api";
import { setGalleryCategory, setGalleryCategoryError } from "./gallerySlice";

export const getGalleryCategory = () => async (dispatch) => {
  const result = await GetGalleryCategory();
  if (result?.status === "success") {
    dispatch(setGalleryCategory(result?.data?.Gallerycategory));
  } else {
    dispatch(setGalleryCategoryError("Something went wrong"));
  }
};
