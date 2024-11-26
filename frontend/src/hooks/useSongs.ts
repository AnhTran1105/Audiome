import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios";

const fetchSongs = async () => {
  const response = await axiosInstance.get("/songs");
  return response.data;
};

export const useSongs = () => {
  return useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
    staleTime: 5 * 60 * 1000,
  });
};
