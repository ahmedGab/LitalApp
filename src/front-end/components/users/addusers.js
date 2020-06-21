import React,{useState} from 'react'
import { useDispatch} from "react-redux";

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {AddUsers} from "../apis/json-server"
import "./users.css"
const ModalExampleCloseIcon = () => {
  const [name,setName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const dispatch = useDispatch();

  function vericationName(){
    if (/^[a-z]{0,15}$/i.test (name))
    return true 
    else 
    return false
  }

 

  return(
  <div className="ui placeholder segment box-search">
  <div class="ui icon header search">
    <i class="dont icon"></i>
    Aucun utilisateur n'a encore été ajouté  </div>
  <Modal trigger={  
 <Button color='vk'>
  <i class="download icon"></i> <span> Ajouter un gestionnaire de stock</span>
</Button>
  } closeIcon>

    <Header icon='download icon' content='' />
    <Modal.Content>
    <Form>
      
    <Form.Group unstackable widths={2}>
      <Form.Input label='Nom' placeholder='Nom' type="name"  onChange={e => setName(e.target.value)}  />
      <Form.Input label='Prénom' placeholder='Prénom' onChange={e => setLastName(e.target.value)} />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='E-mail' placeholder='Email' type="email" onChange={e => setEmail(e.target.value)} />
      <Form.Input label='Mot de passe' placeholder='Mot de passe' onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    </Form>

    </Modal.Content>
    
    <Modal.Actions>
      <Button  color='red'>
        <Icon name='remove'  /> Sortir 
      </Button>
      <Button color='blue' onClick={()=>{dispatch(AddUsers("user",name,lastName,email,password));vericationName()}}>
        <Icon name='checkmark' /> Ajouter
      </Button>
    </Modal.Actions>
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon
