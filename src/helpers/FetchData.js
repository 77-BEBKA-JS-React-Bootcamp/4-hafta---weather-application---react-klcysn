import axios from "axios"

export const FetchData = async (path) =>{
    const {data} = await axios.get(path)
    return data
}