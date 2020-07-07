import React,{useState,useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { Header,Button } from 'semantic-ui-react'
import EditeArticles from "./editearticles"
import {DeleteArticles,getUsersFromApi} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'
import "../users/users.css"
import "./aticles.css"


function ListArticles(props){
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  




  let name=users.filter(el=>el.id===props.idUser).map(el=>el.name).join("")
  console.log(users.filter(el=>el.id===props.idUser).map(el=>el.name))
    return(
<tr>

      <td > 
      {props.el.reference}
  </td> 
        <td>
         
           {props.el.nom}
           
  
  </td> 
    
  <td > 
  {props.el.collection}
  

  </td> 
   <td > 
   
{props.el.type}
  </td> 
        <td className="items-user">
  {props.el.mesure}
</td> 
        <td className="items-user">
  {props.el.quantity}
</td> 

<td className="items-user">
  {props.el.couleur}
</td> 
<td className="items-user">
  {props.el.phase}
</td> 
<td className="items-user">
  {props.el.marque}
</td> 
<td className="items-user">
 <img src={props.el.image} alt="logo" />
</td> 
<td className="items-user">
  {props.el.commentaire}
</td> 
<td className="items-user">
<Button circular icon color="red" onClick={()=>dispatch(DeleteArticles(props.el.id,name,props.el.reference,props.el.marque,props.el.image,new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),new Date().getHours()+":"+(new Date().getMinutes()<10?'0':''+new Date().getMinutes())))} ><i type="button" 
 className="trash  alternate outline icon"></i>  </Button> 
</td> 
<td className="items-user">
  <EditeArticles name={name} article={props.el}/>
</td> 
    </tr>
  

    )
}
export default ListArticles;