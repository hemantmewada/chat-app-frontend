import React, { useState } from "react";
import Input from "./Input";
import { BiSearchAlt } from "react-icons/bi";
import useGetConversations from "../hooks/useGetConversations";
import useConversation from "../zustand/useConversation";
import { toast } from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return false;
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user were found.");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Input
        isLabel={false}
        placeholder="Search ..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <BiSearchAlt className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
