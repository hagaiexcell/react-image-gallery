import { useState } from "react";

type AutocompleteProps = {
  items: string[];
  onSelect: (item: string) => void;
};

const Autocomplete = ({ items, onSelect }: AutocompleteProps) => {
  const [query, setQuery] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full rounded border p-2 focus:outline-none"
        placeholder="Search Image"
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ul className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded border bg-white">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => {
                onSelect(item);
                setQuery(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
