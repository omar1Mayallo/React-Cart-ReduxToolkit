import apiUrl from "..";

export const usePost = async (url, params) => {
  const config = {
    headers: {"Content-Type": "application/json"},
  };
  const res = await apiUrl.post(url, params, config);
  return res.data;
};
