import {getAllUsers,getAllArticles,NumberUsers,getHistorique} from '../../../redux/actions/index'

import axios from "axios"

//get all users from Api
export function getUsersFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/users").then(rep=>{
        dispatch(getAllUsers(rep.data))
        })

}
//get all articles from Api
export function getArticlesFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/articles").then(rep=>{
        dispatch(getAllArticles(rep.data))
        })  
}
//add article in api

export function Addarticles(reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire,iduser,date,heure,lastname){
    return ()=>
     axios.post("http://localhost:3004/articles",{reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire})
     .then(rep=>{
        
        window.location.reload()
        axios.post("http://localhost:3004/historique",{iduser,lastname,action:"ajout",reference,image,date,heure})
        console.log(rep.data)
        }).catch(err=>console.log(err)) 
        

}

//Edite Article
export function EditeArticle(id,reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire,iduser,lastname,date,heure){
    return ()=>
     axios.put(`http://localhost:3004/articles/${id}`,{reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire}).then(rep=>{
        
        window.location.reload()
        axios.post("http://localhost:3004/historique",{iduser,lastname,action:"modifier",reference,image,date,heure})
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

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
//delete Articles

export function DeleteArticles(id,iduser,reference,image,date,heure){
    return ()=>
     axios.delete(`http://localhost:3004/articles/${id}`).then(rep=>{
        console.log(rep.data)
        window.location.reload()
        axios.post("http://localhost:3004/historique",{iduser,reference,image,date,heure,action:"delete"})
        }).catch(err=>console.log(err)) 

}

export function EditUsers(id,data,data1,data2,data3,data4){
    return ()=>
     axios.put(`http://localhost:3004/users/${id}`,{name:data,role:data1,lastname:data2,gmail:data3,password:data4}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getNumberUsers(){
    return (dispatch)=>
    axios.get("http://localhost:3004/numberAddUsers").then(rep=>{
        dispatch(NumberUsers(rep.data))
        })

}
export function IncrementNumberAddUsers(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/numberAddUsers/${id}`,{number:data1}).then(rep=>{
         
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getHistoriquefromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/historique").then(rep=>{
        dispatch(getHistorique(rep.data))
        })
    }