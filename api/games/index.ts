import { GAME_CATEGORIES_URL, GET_GAMES } from "../../constants/paths";
import axiosInstance from "../axios";
import {
  GetGameCategoryResponse,
  GetGamesByCategoryParams,
  GetGamesByCategoryResponse,
} from "./types";

export const getGameCategories = async () => {
  const { data } = await axiosInstance.get<GetGameCategoryResponse>(
    GAME_CATEGORIES_URL
  );
  return data;
};

export const getGames = async (params: GetGamesByCategoryParams) => {
  const { data } = await axiosInstance.get<GetGamesByCategoryResponse>(
    GET_GAMES,
    { params }
  );
  return data;
};
