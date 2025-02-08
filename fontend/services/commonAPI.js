import axios from "axios";

const commonAPI =async (httpmethod, url, reqBody)=>{
    const reqConfig = {
        method:httpmethod,
        url,
        data: reqBody,
        header: {'Content-Type':'application/json'}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default commonAPI;