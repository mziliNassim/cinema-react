import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaginationBar = ({ pageCount }) => {
  const navigate = useNavigate();
  let { page } = useParams();
  page = parseInt(page) || 1;

  const handlePageClick = (selectedPage) => {
    navigate(`/movies/${selectedPage}/`);
  };

  return (
    <nav
      aria-label="Page navigation example"
      className="flex items-center justify-center w-full col-span-5 my-5"
    >
      <ul className="inline-flex mx-auto -space-x-px text-sm">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => handlePageClick(page > 1 ? page - 1 : 1)}
            disabled={page === 1}
            className={`flex bg-transparent items-center justify-center px-3 h-8 leading-tight   border border-gray-600 rounded-s-lg hover:bg-gray-900 hover:text-gray-200
              ${page === 1 ? "text-gray-300" : "text-gray-500"}`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
          <li key={p}>
            <button
              onClick={() => handlePageClick(p)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-700 ${
                p === page
                  ? "text-white bg-gray-500"
                  : "text-gray-500 bg-transparent hover:bg-gray-900 hover:text-gray-700"
              }`}
            >
              {p}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() =>
              handlePageClick(page < pageCount ? page + 1 : pageCount)
            }
            className={`flex bg-transparent items-center justify-center px-3 h-8 leading-tight   border border-gray-600 rounded-e-lg hover:bg-gray-900 hover:text-gray-200
              ${page === pageCount ? "text-gray-300" : "text-gray-500"}`}
            disabled={page === pageCount}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;
