export async function fetachapi(person){
    const delay=person==="Bob"?200:100
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("this is a " +  person + " great")
        }, delay);
    })
}