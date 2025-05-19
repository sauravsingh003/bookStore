import React, { useState, useEffect } from "react";

const books = [
  { title: "Whispers of the Past" },
  { title: "The Rhythm Within" },
  { title: "Legends of the Game" },
  { title: "Scenes from a Silent Life" },
  { title: "A Bite of Happiness" },
  { title: "Echoes of Imagination" },
  { title: "Tales That Touch the Heart" },
  { title: "One Piece" },
  { title: "Laugh Out Loud!" },
  { title: "Quest for the Hidden City" },
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
      setSuggestions([]);
    }
  };

  const handleSelect = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="px-4 py-2 w-full border rounded-md outline-none dark:bg-slate-900 dark:text-white"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnter}
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white dark:bg-slate-800 border rounded-md mt-1 shadow z-10">
          {suggestions.map((book, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer"
              onClick={() => handleSelect(book.title)}
            >
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
