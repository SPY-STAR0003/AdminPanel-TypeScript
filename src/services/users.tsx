export const GetUsers = async () => {
    let data = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript")
    let jsonData = await data.json();
    return jsonData.data
} 

// export const DeleteUser = async (id : number) => {
//     let data = await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript/${id}` , {
//         method : "Delete",
//     })
//     // let jsonData = await data.json();
//     // console.log(jsonData.data)
//     // return jsonData.data
// }

export const GetUsersWithSWR = async (url : string, page : number) => {

    const request = await fetch(`${url}?page=${page}&limit=8`)

    if ( !request.ok ) {
        const error : any = new Error('An error occurred while fetching the data.')

        error.info = await request.json()
        error.status = request.status

        throw error
    }
    
    return request.json()
}