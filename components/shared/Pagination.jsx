/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";

import { useState } from "react";

import { useRouter } from "next/router";

const PaginationButton = ({ children }) => <div>{children}</div>;

const Pagination = ({ count = 80 }) => {
  const router = useRouter();

  const [selectedPage, setSelectedPage] = useState(
    router.query.page ? router.query.page : 2
  );

  // const totalPages = Math.ceil(count / 9);

  const totalPages = 10;

  console.log(totalPages);

  const pages = [];

  if (selectedPage - 1 >= 1) {
    pages.push(selectedPage - 1);
  }

  pages.push(selectedPage);

  if (selectedPage + 1 >= 3) {
    pages.push(selectedPage + 1);
  }

  // for (let i = 1; i <= totalPages; i++) {
  //   pages.push(i);
  // }
  // console.log(pages);

  return (
    <div className="flex flex-row space-x-5">
      <div>&lt;</div>

      {selectedPage - 1 >= 1 ? (
        <PaginationButton>{selectedPage - 1}</PaginationButton>
      ) : null}
      <PaginationButton>{selectedPage}</PaginationButton>
      <PaginationButton>{selectedPage + 1}</PaginationButton>

      {totalPages >= 7 || selectedPage > 9 ? <div>...</div> : null}
      <div>&gt;</div>
    </div>
  );
};

export default Pagination;
