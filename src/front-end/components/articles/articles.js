import React,{useState,useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { Header,Button } from 'semantic-ui-react'
import EditeArticles from "./editearticles"
import {DeleteArticles,getUsersFromApi} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'


function ListArticles(props){
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  




  let name=users.filter(el=>el.id===props.idUser).map(el=>el.name).join("")
  console.log(users.filter(el=>el.id===props.idUser).map(el=>el.name))
    return(
<>

    <Table.Body>
      <Table.Row>
      <Table.Cell className="items-user"> 
      {props.el.reference}
  </Table.Cell> 
        <Table.Cell>
          <Header as='h4' image>
           {props.el.nom}
            <Header.Content>
            
                          <Header.Subheader></Header.Subheader>
            </Header.Content>
          </Header>
  
  </Table.Cell> 
    
  <Table.Cell className="items-user"> 
  {props.el.collection}
  

  </Table.Cell> 
   <Table.Cell className="items-user"> 
   
{props.el.type}
  </Table.Cell> 
        <Table.Cell className="items-user">
  {props.el.mesure}
</Table.Cell> 
        <Table.Cell className="items-user">
  {props.el.quantity}
</Table.Cell> 

<Table.Cell className="items-user">
  {props.el.couleur}
</Table.Cell> 
<Table.Cell className="items-user">
  {props.el.phase}
</Table.Cell> 
<Table.Cell className="items-user">
  {props.el.image}
</Table.Cell> 
<Table.Cell className="items-user">
  {props.el.commentaire}
</Table.Cell> 
<Table.Cell className="items-user">
<Button size='tiny' color="red" onClick={()=>dispatch(DeleteArticles(props.el.id,name,props.el.reference,props.el.image,new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),new Date().getHours()+":"+new Date().getMinutes()))} ><i type="button" 
 className="trash  alternate outline icon"></i>  Supprimer</Button> 
</Table.Cell> 
<Table.Cell className="items-user">
  <EditeArticles name={name} article={props.el}/>
</Table.Cell> 
      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default ListArticles;