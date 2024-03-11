import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e88db9c0e8984c4b93b150347b219d59"
    }
});