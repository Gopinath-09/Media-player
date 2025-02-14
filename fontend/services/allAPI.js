import { serverURL } from "./baseURL"
import commonAPI from "./commonAPI"

export const UploadVideoAPI = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody);
}

export const getAllVideos = async()=>{
    return await commonAPI('GET', `${serverURL}/videos`,"");
}