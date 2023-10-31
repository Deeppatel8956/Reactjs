import { GetApi,PostApi ,DeleteApi,UpdateApi,UpdateApiDetails} from "../Api/AxiosRequest";
import { useState,useEffect } from "react";
export const GetApiAction=()=>{
    return function(dispatch){
        return GetApi().then((res)=>{
            console.log(res)
            dispatch({
                type:"GET_DETAILS",
                payload:res.data
            })
        })
    }
}

//Post
export const PostApiAction=(request)=>{
    return function(dispatch){
        return PostApi(request).then((res)=>{
            console.log(res)
            dispatch({
                type:"POST_DETAILS",
                payload:""
            })
        })
    }
}


//Delete
export const DeleteApiAction=(id)=>{
    return function(dispatch){
        return DeleteApi(id).then((res)=>{
            console.log(res)
            dispatch({
                type:"DELETE_DETAILS",
                payload:res.data
            })
        })
    }
}

export default(props)=>{
    const [detailbyid,setDetailbyid]=useState({});
    const Getetailsid=(requestid)=>{
        return UpdateApiDetails(requestid).then((res)=>{
            console.log(" id data",res);
            setDetailbyid(res)
        })
    }
    useEffect(()=>{
        Getetailsid(props);
    },[])
    return [detailbyid];
}

//Update
export const UpdateApiAction=(request,id)=>{
    return function(dispatch){
        dispatch({
            type:'UPDATE_DETAILS',
            payload:false
        });
        return UpdateApi(request,id).then((res)=>{
            console.log(res)
            dispatch({
                type:'UPDATE_DETAILS',
                payload:true
            })
        })
    }
}