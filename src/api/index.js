import { getApi, postApi, postFormData, putApi } from "./request";

//home page
export const GetHomeSlider = (data) => getApi("api/slider");
export const GetHomeNotice = (data) => getApi("api/notice");
export const GetHighlight = (data) => getApi("api/highlight");
export const GetSuccessStory = (data) => getApi("api/success");
export const GetMessages = (data) => getApi("api/massege");
export const GetGalleryData = (data) => getApi("api/gallery");
export const GetEventData = (data) => getApi("api/event");
