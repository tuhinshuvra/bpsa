export const dateFiltering = async (data) => {
  const filterData = await data.filter(
    (item) =>
      item?.End_Date === null ||
      Date.parse(item?.End_Date) >= Date.parse(new Date())
  );

  return filterData;
};
