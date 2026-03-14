export const apiFetch = async (query: string) => {
  return await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
    .then((res) => res.json())
    .then((data) => data);
};
