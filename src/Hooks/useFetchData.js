import { useState, useEffect } from "react";
import { CreateGame } from "../services/Services";

const useFetchData = () => {
  const [newGames, setNewGames] = useState("");

  useEffect(() => {
    createGame();
  }, []);

  const createGame = async () => {
    try {
      let data = await CreateGame();
      setNewGames(data?.data);
      // console.log("data", newGames);
    } catch (error) {
      console.log("fetching error", error);
    }
  };

  return { newGames };
};
export default useFetchData;


