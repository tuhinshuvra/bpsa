const PageNumbers = ({ selectedPage, totalPages, onPageClick }) => {
  const pagesToShow = 7; // Show 7 pages: selected page + 3 previous + 3 next
  const startPage = Math.max(1, selectedPage - 5);
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" d-flex">
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={pageNumber === selectedPage ? 'selected' : ''}
          onClick={() => onPageClick(pageNumber)}
        >
          <div className=" d-flex">
            <p className=" fw-bold mx-1">  {pageNumber}</p>
          </div>
        </span>
      ))}
    </div>
  );
}
export default PageNumbers;