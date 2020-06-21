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
  const [fields,setFields]= useState({})
  const [errors,setErrors]= useState({})


  const dispatch = useDispatch();
  
  function handleValidation(){
    let formIsValid = true;
let err={}
    //Name
    if(!fields["name"]  ){
       formIsValid = false;
       err["name"] = "Ce champs ne peut être pas vide ";
    }

    if(typeof fields["name"] !== "undefined" ){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          err["name"] = "Désolé, seules les lettres (az) Sont autorisés.";
       }        
    }
setErrors(err)
//lastName
if(!fields["lastname"]  ){
  formIsValid = false;
  err["lastname"] = "ce champs ne peut être pas vide ";
}

if(typeof fields["lastname"] !== "undefined" ){
  if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
     formIsValid = false;
     err["lastname"] = "Désolé, seules les lettres (az) Sont autorisés.";
  }        
}
setErrors(err)
    //Email
    if(!fields["email"]  ){
      formIsValid = false;
      err["email"] = "ce champs ne peut être pas vide ";
    }
    if(typeof fields["email"] !== "undefined" ){
      if(!fields["email"].match(/^[\w|.]+\@[a-z ]{3,}\.[a-z]{2,3}$/)){
        formIsValid = false;
        err["email"] ="Désolé,le nom d'utilisateur doit comporter entre 6 et 30 caractères et seules les lettres (az), les chiffres (0-9) et les points (.) Sont autorisés."
 
      }
        

             
    }
 //password
 if(!fields["password"]  ){
  formIsValid = false;
  err["email"] = "ce champs ne peut être pas vide ";
}
if(typeof fields["password"] !== "undefined" ){
  if(!fields["password"].match(/^\w{6,40}$/)){
    formIsValid = false;
    err["password"] ="Désolé,le nom d'utilisateur doit comporter entre 6 et 40 "

  }
    

         
}


    return formIsValid
    
}
  
function contactSubmit(e){
  e.preventDefault();

  if(handleValidation()){
    dispatch(AddUsers("user",name,lastName,email,password))
     alert(name+ "a été ajouté ");
  }else{
     alert("Form has errors.")
  }



}
 const handleChange=(field, e)=>{  
  let f=fields       
  f[field] = e.target.value; 
  setName(f["name"])     
  setLastName(f["lastname"])   
  setEmail(f["email"]) 
  setPassword(f["password"])      
    
  
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
    <Form onSubmit={contactSubmit}>
      
    <Form.Group unstackable widths={2}>
      <div className="bloc-error">
      <Form.Input className="input-add" label='Nom'  placeholder='Nom' type="name"  onChange={e =>{handleChange("name",e)}} value={fields["name"]}  />
        <p  style={{color: "#d93025"}}> {errors["name"]} </p>
        </div>
        <div className="bloc-error">
      <Form.Input className="input-add" label='Prénom' placeholder='Prénom' onChange={e =>{handleChange("lastname",e)}} value={fields["lastname"]} />
      <p style={{color: "#d93025"}}> {errors["lastname"]} </p>
        </div>
    </Form.Group>
   

    <Form.Group widths={2}>
    <div className="bloc-error">
      <Form.Input className="input-add" label='E-mail' placeholder='Email' type="email" onChange={e =>{handleChange("email",e)}} value={fields["email"]} />
      <p  style={{color: "#d93025"}}> {errors["email"]} </p>
        </div>
        <div className="bloc-error">
      <Form.Input className="input-add" label='Mot de passe' placeholder='Mot de passe' onChange={e =>{handleChange("password",e)}} value={fields["password"]} />
      <p  style={{color: "#d93025"}}> {errors["password"]} </p>
</div>
    </Form.Group>
    <button type="submit">s</button>
    </Form>

    </Modal.Content>
    
    <Modal.Actions>
      <Button  color='red'>
        <Icon name='remove'  /> Sortir 
      </Button>
      <Button color='blue' >
        <Icon name='checkmark' /> Ajouter
      </Button>
    </Modal.Actions>
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon
