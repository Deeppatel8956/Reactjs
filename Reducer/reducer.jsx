
const initialdata={
    details:[],
    isResponce:false,
}
const reducer=(state=initialdata,action)=>{
    switch(action.type){
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
            case 'POST_DETAILS':
                return{
                    isResponce:action.payload
                }
        default :
           return state    
    }
}
export default reducer;