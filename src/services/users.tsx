import { Toast } from "../modules/swal";
import { FormValues } from "../types/form";

export const GetUsers = async () => {
    let data = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript")
    let jsonData = await data.json();
    return jsonData.data
} 

export const DeleteUser = async (id ?: number) => {
    let data = await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript/${id}` , {
        method : "Delete",
    })

    let jsonData = await data.json();

    return jsonData?.message === "Successfully removed" ? true : false

}

export const GetUsersWithSWR = async (url : string, page : number) => {

    const request = await fetch(`${url}?page=${page}&limit=8`)

    if ( !request.ok ) {
        const error : any = new Error('An error occurred while fetching the data.')

        error.info = await request.json()
        error.status = request.status

        throw error
    }
    
    let data = await request.json()

    return data
}

export const SetUser = async (data : FormValues) => {
    const request = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript", {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).catch(() => Toast("error" , "Unfortunately somithing goes wrong refresh the page and try again"))
    
    
    return true
}