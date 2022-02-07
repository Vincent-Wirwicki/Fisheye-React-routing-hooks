const UniqueTag = ({ uniqueTag, onFilter }) => (
  <p className=" pr-5 cursor-pointer" onClick={onFilter}>
    #{uniqueTag}
  </p>
);

export default UniqueTag;
