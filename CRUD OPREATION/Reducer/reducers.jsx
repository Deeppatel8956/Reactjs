const initaldata={
    details:[],
    isResponce:false,
    isDeleteResponce:false,
    isUpdate:false
}
 const reducers=(state=initaldata,action)=>{
    switch(action.type){
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
        case 'POST_DETAILS':
                return{
                    isResponce:action.payload
                }
        case 'DELETE_DETAILS':
            return{
                isDeleteResponce:action.payload
            }
        case 'UPDATE_DETAILS':
            return{
                isUpdate:action.payload
            }    
            default:
                return state
    }
 }
 export default reducers;