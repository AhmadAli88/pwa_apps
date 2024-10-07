import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getPokemonList = async (req, res, next) =>{
    const {data} = await axios.get(apiUrl)
    console.log(data)
    return data
}