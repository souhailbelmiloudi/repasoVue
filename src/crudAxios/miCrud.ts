import axios from "axios"
const BASE_URL="http://localhost:4000"

export const getAllDatos = async (table :string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${table}`)
        return response.data
    } catch (error) {
        console.log("error:",error)
    }
    
}