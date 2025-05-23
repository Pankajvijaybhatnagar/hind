import React from "react";

const Pagination = ({ currentPage = 2, totalPages = 5, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const getPaginationRange = () => {
    const range = new Set();
    const centerStart = Math.floor(totalPages / 2) - 2;
    const centerEnd = Math.floor(totalPages / 2) + 2;

    // Always include first and last page
    range.add(1);
    range.add(totalPages);

    // Include 2 pages before and after current
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 1 && i < totalPages) range.add(i);
    }

    // Include center pages (e.g., 98 to 102 if totalPages = 200)
    for (let i = centerStart; i <= centerEnd; i++) {
      if (i > 1 && i < totalPages) range.add(i);
    }

    const sortedPages = Array.from(range).sort((a, b) => a - b);

    // Insert ellipses
    const finalPages = [];
    for (let i = 0; i < sortedPages.length; i++) {
      finalPages.push(sortedPages[i]);

      if (i < sortedPages.length - 1 && sortedPages[i + 1] !== sortedPages[i] + 1) {
        finalPages.push("...");
      }
    }

    return finalPages;
  };

  const renderPages = () => {
    const pages = getPaginationRange();

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <li key={`ellipsis-${index}`} className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }

      return (
        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
          <button className="page-link" onClick={() => handlePageChange(page)}>
            {page}
          </button>
        </li>
      );
    });
  };

  return (
    <nav aria-label="Page navigation" className="text-center mt-4">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Previous"
          >
            &laquo;
          </button>
        </li>

        {renderPages()}

        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Next"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
