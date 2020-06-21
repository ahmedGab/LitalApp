import React,{useState,useRef} from 'react'

import { useDispatch} from "react-redux";

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {EditUsers} from "../apis/json-server"
import "./users.css"

const ModalExampleCloseIcon = (props) => {
  const [name,setName]= useState(props.user.name)
  const [lastName,setLastName]= useState(props.user.lastname)
  const [email,setEmail]= useState(props.user.gmail)
  const [password,setPassword]= useState(props.user.password)
  const dispatch = useDispatch();
 
function a(){
 return props.user.name=name
}

  return(
  <div>
  <Modal trigger={  
    <button class="ui items-user blue button"  ><i class="sync  alternate icon"></i>  Modifier</button>
  } closeIcon>

    <Header icon='edit icon' content='' />
    <Modal.Content>
    <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Nom' placeholder='Nom'   defaultValue={props.user.name} type="name"    onChange={e => setName(e.target.value)} />
      <Form.Input label='Prénom' placeholder='Prénom' defaultValue={lastName} onChange={e => setLastName(e.target.value)}  />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='E-mail' placeholder='Email' defaultValue={email} type="email" onChange={e => setEmail(e.target.value)}  />
      <Form.Input label='Mot de passe' placeholder='Mot de passe' defaultValue={password} onChange={e => setPassword(e.target.value)}  />
    </Form.Group>
    </Form>

    </Modal.Content>
    
    <Modal.Actions>
      <Button color='red' onClick={a} >
        <Icon name='remove' /> Réinitialiser
      </Button>
      <Button color='blue' onClick={()=>dispatch(EditUsers(props.user.id,name,"user",lastName,email,password))}>
        <Icon name='checkmark' /> Modifier
      </Button>
    </Modal.Actions>
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon
