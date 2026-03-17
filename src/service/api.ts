export const apiFetch = async <T>(query: string): Promise<T> => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
  )
    .then((res) => res.json())
    .then((data) => data);
};
export const fetchCrypto = async <T>(page: number): Promise<T> => {
  return await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`,
  )
    .then((res) => res.json())
    .then((data) => data);
};
