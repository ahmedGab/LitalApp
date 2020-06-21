import {getAllUsers} from "../../../redux/actions"
import axios from "axios"
export function getUsersFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/users").then(rep=>{
        dispatch(getAllUsers(rep.data))
        })

}
export function AddUsers(data1,data2,data3,data4,data5){
    return ()=>
     axios.post("http://localhost:3004/users",{role:data1,name:data2,lastname:data3,gmail:data4,password:data5}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function DeleteUsers(id){
    return ()=>
     axios.delete(`http://localhost:3004/users/${id}`).then(rep=>{
        console.log(rep.data)
        window.location.reload()
        }).catch(err=>console.log(err)) 

}

export function EditUsers(id,data,data1,data2,data3,data4){
    return ()=>
     axios.put(`http://localhost:3004/users/${id}`,{name:data,role:data1,lastname:data2,gmail:data3,password:data4}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}