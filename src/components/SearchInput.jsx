import React from "react";
import Input from "./Input";
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Input
        isLabel={false}
        placeholder="Search ..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <BiSearchAlt className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
