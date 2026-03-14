import { useState, useEffect } from "react";
import { useDebounce } from "../hook/useDebounce";
import { apiFetch } from "../service/api";

interface User {
  id: number;
  name: string;
  username: string;
}
export const SearchList = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiFetch<User[]>(debouncedSearch);
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex bg-white p-2 items-center rounded-2xl w-60 h-10 px-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="outline-none border-none text-black"
          placeholder="Search"
        />
      </div>

      <ul className="bg-white w-60 mt-2 text-black">
        {results.map((result) => (
          <li key={result.id} className="p-2 hover:bg-gray-100">
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
