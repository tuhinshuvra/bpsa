import { getApi, postApi, postFormData, putApi } from "./request";

//home page
export const GetHomeSlider = () => getApi("api/slider");
export const GetHomeNotice = () => getApi("api/notice");
export const GetHighlight = () => getApi("api/highlight");
export const GetSuccessStory = () => getApi("api/success");
export const GetMessages = () => getApi("api/massege");
export const GetGalleryData = () => getApi("api/gallery");
export const GetHomeGalleryData = () => getApi("api/get_home_page_gallery");
export const GetEventData = () => getApi("api/event");
export const GetGalleryCategory = () => getApi("api/gcategory");
export const GetLocalLink = () => getApi("api/local");
export const GetInternationalLink = () => getApi("api/international");

//contact
export const PostContactData = (data) => postApi("api/contacts", data);

//former
export const FormerLeaderData = () => getApi("api/former");

//committee
export const GetCommitteeData = () => getApi("api/committee");
