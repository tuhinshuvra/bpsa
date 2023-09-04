import moment from "moment";

export const dateFormatOne = (date) => {
  return moment(date).format("LL");
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
