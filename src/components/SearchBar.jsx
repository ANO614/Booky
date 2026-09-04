function SearchBar({ searchTerm, setSearchTerm }) {
    return ( <div className="mb-4">

            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search for a book..."
                value={searchTerm}
                onChange={(event) =>
                    setSearchTerm(event.target.value)
                }
            />

        </div>
    );
}

export default SearchBar;
