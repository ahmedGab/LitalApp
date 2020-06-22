import React,{useState} from 'react'
import { useDispatch} from "react-redux";

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {Addarticles} from "../apis/json-server"

const ModalExampleCloseIcon = () => {
  const [reference,setRefrence]= useState("")
  const [nom,setNom]= useState("")
  const [type,setType]= useState("")
  const [mesure,setMesure]= useState("")
  const [collection,setCollection]= useState("")
  const [quantity,setQuantity]= useState("")
  const [phase,setPhase]= useState("")
  const [image,setImage]= useState("")
  const [commentaire,setCommentaire]= useState("")
  const dispatch = useDispatch();

 // reference,nom,type,mesure,collection,quantity,phase,image,commentaire
/*
  function vericationName(){
    if (/^[a-z]{0,15}$/i.test (name))
    return true 
    else 
    return false
  }
*/
 

  return(
  <div className="ui placeholder segment box-search">
  <div class="ui icon header search">
    <i class="dont icon"></i>
    Aucun utilisateur n'a encore été ajouté  </div>
  <Modal trigger={  
 <Button color='vk'>
  <i class="download icon"></i> <span> Ajouter un Article</span>
</Button>
  } closeIcon>

    <Header icon='download icon' content='' />
    <Modal.Content>
    <Form>
      
    <Form.Group unstackable widths={2}>
      <Form.Input label="Référence d'article" placeholder='Reference' type="text" 
       onChange={e => setRefrence(e.target.value)}  />
      <Form.Input label="Nom d'article" placeholder='Nom' 
      onChange={e => setNom(e.target.value)} />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="Type d'article" placeholder='Ajouter le type' type="text" 
      onChange={e => setType(e.target.value)} />
      <Form.Input label="Mesure d'article" placeholder='ajouter Mesure'
       onChange={e => setMesure(e.target.value)} />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='collection' placeholder='Ajouter collection' type="email" 
      onChange={e => setCollection(e.target.value)} />
      <Form.Input label='Quantité' placeholder='ajouter quantité'
       onChange={e => setQuantity(e.target.value)} />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="phase d'article" placeholder="phase d'article" type="text" 
      onChange={e => setPhase(e.target.value)} />
      <Form.Input label="Image" placeholder= "ajouter image d'article"
       onChange={e => setImage(e.target.value)} />
    </Form.Group>
    <Form.Group widths={2}>
    <textarea  label='Commentaire'placeholder="Ajouter un commentaire"  onChange={e => setCommentaire(e.target.value)}></textarea>
      {/* <Form.Input label='Commentaire' placeholder='ajouter un commentaire' type="commentaire" 
      onChange={e => setCommentaire(e.target.value)} /> */}
    </Form.Group>
    </Form>

    </Modal.Content>
    
    <Modal.Actions>
      <Button  color='red'>
        <Icon name='remove'  /> Sortir 
      </Button>
      <Button color='blue'
       onClick={()=>{dispatch(Addarticles("article",reference,nom,type,mesure,collection,quantity,phase,image,commentaire))}}>
        <Icon name='checkmark' /> Ajouter
      </Button>
    </Modal.Actions>
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon
