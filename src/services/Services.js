 import axios from "axios";
import config from "../config/config";

export const CreateGame = async (body) => {
  try {
    let { data } = await axios.get(`${config.apiUrl}games/trending/`, body);
    // console.log("data", data);
    return data;
  } catch (error) {}
};



// export const createGames = async () =>{
// try {
//   let { data } = await axios.get(`${config.apiUrl}games/trading`, body)
//   console.log( ); 
// } catch (error) {
//   1
// }
// }