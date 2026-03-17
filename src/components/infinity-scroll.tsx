import { useEffect, useState } from "react";
import { fetchCrypto } from "../service/api";
import { useInView } from "react-intersection-observer";

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

export const InfinityScroll = () => {
  const [data, setData] = useState<Crypto[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const newData = await fetchCrypto<Crypto[]>(page);
        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const handlePage = () => {
        setPage((prevPage) => prevPage + 1);
      };
      handlePage();
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Infinity Scroll</h1>
      <p>Crypto list</p>
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((crypto) => (
          <div
            key={crypto.id}
            className="w-full border p-4 rounded-lg flex items-center gap-4"
          >
            <img src={crypto.image} alt={crypto.name} className="w-10 h-10" />
            <div className="text-left">
              <h2 className="text-lg font-bold">{crypto.name}</h2>
              <p className="text-sm text-gray-500">
                {crypto.symbol.toUpperCase()}
              </p>
              <p className="text-sm text-gray-500">
                {crypto.current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={ref}>{isLoading && "Loading..."}</div>
    </div>
  );
};
