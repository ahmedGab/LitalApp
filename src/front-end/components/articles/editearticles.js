import React,{useState,useRef} from 'react'

import { useDispatch} from "react-redux";

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {EditeArticle} from "../apis/json-server"


const ModalExampleCloseIcon = (props) => {


const [reference,setRefrence]= useState(props.article.reference)
const [nom,setNom]= useState(props.article.nom)
const [type,setType]= useState(props.article.type)
const [mesure,setMesure]= useState(props.article.mesure)
const [collection,setCollection]= useState(props.article.collection)
const [quantity,setQuantity]= useState(props.article.quantity)
const [phase,setPhase]= useState(props.article.phase)
const [image,setImage]= useState(props.article.image)
const [commentaire,setCommentaire]= useState(props.article.commentaire)
  const dispatch = useDispatch();
 
  function a(){
    return props.article.nom=nom
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
      <Button color='red' onClick={a} >
        <Icon name='remove' /> Réinitialiser
      </Button>
      <Button color='blue' onClick={()=>dispatch(EditeArticle(props.article.id,"article",reference,nom,type,mesure,collection,quantity,phase,image,commentaire))}>
        <Icon name='checkmark' /> Modifier
      </Button>
    </Modal.Actions>
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon
