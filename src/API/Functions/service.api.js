import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const serviceApi=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.service)
        return response.data.data
        
    } catch (error) {
        console.log(error);
        
    }
}