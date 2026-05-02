import { useState } from "react";
import usePagination from "../Component/UsePagination";

const PaginationDemo = () => {
  const myData = new Array(100)
    .fill(null)
    .map((_, i) => `Item ${i + 1}`);

    //using state for items per page
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({
    totalItems: myData.length,
    itemsPerPage: itemsPerPage,
    initialPage: 1,
  });

  const currentData = myData.slice(startIndex, endIndex);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Pagination Demo</h2>

      {/* TOP BAR  */}
      <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }}>
        
        {/* Items per page */}
        <div>
          Items per page:{" "}
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        {/* Total items */}
        <div>
          <i>Total Items: {myData.length}</i>
        </div>
      </div>

      {/* LIST */}
      <ul style={{ listStyle: "none" }}>
        {currentData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* BUTTONS */}
      <div>
        <button onClick={prevPage} disabled={!canPrevPage}>
          Prev
        </button>

        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationDemo;