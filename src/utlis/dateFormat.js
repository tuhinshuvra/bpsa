import moment from "moment";

export const dateFormatOne = (date) => {
  return moment(date).format("LL");
};
