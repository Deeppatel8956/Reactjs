import axios from "axios";
export async function AxiosRequest(url,method,headers,params){
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000

    })
}

const GetApi=()=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest (' http://localhost:3000/details','GET',headers,{})
}

//Post
const PostApi=(data)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest (' http://localhost:3000/details','POST',headers,data)
}

const DeleteApi=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest (' http://localhost:3000/details/'+id,'DELETE',headers)
}
const UpdateApiDetails=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'GET',headers,{})
    // return axios.post('http://localhost:3000/details',data)
}

//Update
const UpdateApi=(data,id)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest (' http://localhost:3000/details/'+id,'PUT',headers,data)
}
export {GetApi,PostApi,DeleteApi,UpdateApi,UpdateApiDetails};