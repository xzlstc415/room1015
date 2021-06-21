/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";

const Pagination = ({ count = 0 }) => {
  const router = useRouter();

  const [selectedPage, setSelectedPage] = useState(router?.query?.page || 1);

  useEffect(() => {
    setSelectedPage(parseInt(router?.query?.page || 1));
  }, [router.query.page]);

  const PaginationButton = ({ page }) => (
    <div
      onClick={() => handlePageChange(page)}
      className={
        page === selectedPage ? "font-bold cursor-pointer" : "cursor-pointer"
      }
    >
      {page}
    </div>
  );

  const handlePageChange = (newPage) => {
    const newQuery = router.query;

    router.replace({
      pathname: "/projects",
      query: { ...newQuery, page: newPage },
    });
    setSelectedPage(newPage);
  };

  const totalPages = Math.ceil(count / 9) || 1;

  return (
    <div className="flex flex-row space-x-5">
      <div
        onClick={() =>
          selectedPage - 1 > 0 ? handlePageChange(selectedPage - 1) : null
        }
        className="cursor-pointer"
      >
        &lt;
      </div>
      {selectedPage >= 2 ? <PaginationButton page={1} /> : null}
      {selectedPage >= 3 ? <PaginationButton page={2} /> : null}
      {selectedPage >= 4 ? <PaginationButton page={3} /> : null}
      {selectedPage >= 6 ? <div>...</div> : null}

      {selectedPage >= 6 ? <PaginationButton page={selectedPage - 2} /> : null}
      {selectedPage >= 5 ? <PaginationButton page={selectedPage - 1} /> : null}
      <PaginationButton page={selectedPage} />
      {selectedPage + 1 <= totalPages ? (
        <PaginationButton page={selectedPage + 1} />
      ) : null}
      {selectedPage + 2 <= totalPages ? (
        <PaginationButton page={selectedPage + 2} />
      ) : null}

      {totalPages > 4 && selectedPage + 4 < totalPages ? <div>...</div> : null}
      {totalPages > 4 && selectedPage + 4 < totalPages ? (
        <PaginationButton page={totalPages - 2} />
      ) : null}
      {totalPages > 4 && selectedPage + 3 < totalPages ? (
        <PaginationButton page={totalPages - 1} />
      ) : null}
      {totalPages > 4 && selectedPage + 2 < totalPages ? (
        <PaginationButton page={totalPages} />
      ) : null}
      <div
        className="cursor-pointer"
        onClick={() =>
          selectedPage + 1 <= totalPages
            ? handlePageChange(selectedPage + 1)
            : null
        }
      >
        &gt;
      </div>
    </div>
  );
};

export default Pagination;
