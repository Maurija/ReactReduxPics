import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID tIJ87SK_buaL4x0CXPbqkHPPMWDLFQ76jMP57ejVBds'
    }
});