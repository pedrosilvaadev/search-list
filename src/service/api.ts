export const apiFetch = async <T>(query: string): Promise<T> => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
  )
    .then((res) => res.json())
    .then((data) => data);
};
