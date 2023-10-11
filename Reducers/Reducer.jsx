const inital={
    list:[]
}
const Mydata=(state=inital,action)=>{
    switch (action.type) {
        case "ADDTODO":
            const id =action.payload.id;
            const data=action.payload.data;
            return{
                ...state,
                list :[
                    ...state.list,
                    {
                        id:id,
                        data:data,
                    }
                ]
            }
    
        default:
            return state;
    }
}
export default Mydata;