import React from "react";
interface ISearchBoxProps {
  searchChange: (React.FormEventHandler<HTMLInputElement>);
}

const SearchBox  = ({ searchChange }: ISearchBoxProps)  => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Pokemon"
        onChange={searchChange}
      ></input>
    </div>
  );
};
export default SearchBox;
