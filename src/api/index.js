import { getApi, postApi, postAuthFormData } from "./request";

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
export const PostContactData = (data) => postApi("api/contact", data);

//former
export const FormerLeaderData = () => getApi("api/former");

//committee
export const GetCommitteeData = () => getApi("api/committee");

//newspage

export const GetNewsUpdateData = () => getApi("api/news-update");
export const GetNewsData = () => getApi("api/news");
export const GetMourningNewsData = () => getApi("api/news-morning");
export const GetActivityUpdateData = () => getApi("api/news-activity-Update");
export const GetCongratulationsAchievement = () =>
  getApi("api/news-congratulation-on-achievenemnt");
export const GetNewsDetails = (newsId) => getApi(`api/get_news/${newsId}`);

//Documents
export const GetDocumentsData = () => getApi("api/document");

export const GetVideosData = () => getApi("api/video");

export const GetLeadershipData = () => getApi("api/leadership ");

export const GetMessageDetails = (id) => getApi(`api/get_massege/${id}`);

//Authentication
export const PostSignupData = (data) => postAuthFormData("api/signup", data);
export const PostLoginData = (data) => postAuthFormData("api/login", data);
