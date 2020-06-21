import React,{useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Header } from 'semantic-ui-react'
import {DeleteUsers} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'
import Editusers from "./editusers"
import "./users.css"
function ListUsers(props){
  const dispatch = useDispatch();

    return(
<>

    <Table.Body>
      <Table.Row>
      <Table.Cell className="items-user"> 
  {props.el.id}
  </Table.Cell> 
        <Table.Cell>
          <Header as='h4' image>
            <Image  rounded size='Medium' src='https://blog.valoxy.org/wp-content/uploads/2013/07/gestion-des-stocks.png' />
            <Header.Content>
            {props.el.name}
                          <Header.Subheader>{props.el.role}</Header.Subheader>
            </Header.Content>
          </Header>
  
  </Table.Cell> 
    
  <Table.Cell className="items-user"> 
  {props.el.gmail}

  </Table.Cell> 
   <Table.Cell className="items-user"> 
   {props.el.password}

  </Table.Cell> 
        <Table.Cell className="items-user" onClick={()=>dispatch(DeleteUsers(props.el.id))}><button class="ui  negative button"><i className="trash  alternate outline icon"></i>  Supprimer</button> 
  
</Table.Cell> 
        <Table.Cell className="items-user">
       <Editusers user={props.el} />
</Table.Cell> 

      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default ListUsers