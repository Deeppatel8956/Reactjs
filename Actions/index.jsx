export const  AddTodo=(data)=>{
    return{
            type:"ADDTODO",
    payload:{
        id:Date.now(),
        data:data,
    }
}

}