import { useState } from "react";

function useBookSearch(books) {

const [searchTerm, setSearchTerm] = useState("");

const filteredBooks = books.filter((book) =>
    book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
);

return {
    searchTerm,
    setSearchTerm,
    filteredBooks
};

}

export default useBookSearch;
