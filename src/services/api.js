import axios from "axios";

export const api = axios.create({
    baseURL: "https://www.deckofcardsapi.com/api/deck",
    timeout: 8000,    
})