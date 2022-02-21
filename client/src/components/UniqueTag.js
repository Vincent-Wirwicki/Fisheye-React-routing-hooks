import { useState } from "react";

const UniqueTag = ({ uniqueTag, current, onClick }) => {
  return (
    <button
      className={
        current
          ? "px-2 text-sm text-center h-10 w-20 font-semibold underline ease-in duration-75  "
          : "px-2 text-sm text-center h-10 w-20 no-underline hover:underline ease-in duration-75"
      }
      onClick={e => {
        onClick(e);
      }}
    >
      #{uniqueTag}
    </button>
  );
};

export default UniqueTag;
