import React,{useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Header } from 'semantic-ui-react'
import EditeArticles from "./editearticles"
import {DeleteArticles} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'


function ListArticles(props){
  const dispatch = useDispatch();

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
<button onClick={()=>dispatch(DeleteArticles(props.el.id))} class="ui  negative button"><i type="button" 
 className="trash  alternate outline icon"></i>  Supprimer</button> 
</Table.Cell> 
<Table.Cell className="items-user">
  <EditeArticles article={props.el}/>
</Table.Cell> 
      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default ListArticles;