import { useState } from "react";
import UniqueTag from "./UniqueTag";

const UniqueTags = ({ onFilter, displayTags }) => {
  const [active, setActive] = useState();
  const allTags = [];
  const mergeTags = () => displayTags.map(({ tags }) => allTags.push(...tags));
  const filterTags = arr =>
    arr.filter((item, index) => arr.indexOf(item) === index);

  mergeTags();
  const uniqueTags = filterTags(allTags);

  return (
    <>
      {uniqueTags.map((uniqueTag, index) => (
        <UniqueTag
          key={index}
          uniqueTag={uniqueTag}
          current={uniqueTag === active}
          onClick={e => {
            setActive(uniqueTag);
            onFilter(e);
          }}
        />
      ))}
    </>
  );
};

export default UniqueTags;
