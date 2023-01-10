import apiUrl from "..";

export const useGet = async (url, params) => {
  const res = await apiUrl.get(url, params);
  return res.data;
};

export const useGetAuth = async (url, params) => {
  const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
  };
  const res = await apiUrl.get(url, params, config);
  return res.data;
};
