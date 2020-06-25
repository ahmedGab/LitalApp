import React,{useState} from 'react'

import { useDispatch,useSelector} from "react-redux";
import "../users/users.css"

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {EditeArticle} from "../apis/json-server"


const ModalExampleCloseIcon = (props) => {


const [reference,setRefrence]= useState(props.article.reference)
const [nom,setNom]= useState(props.article.nom)
const [type,setType]= useState(props.article.type)
const [mesure,setMesure]= useState(props.article.mesure)
const [collection,setCollection]= useState(props.article.collection)
const [quantity,setQuantity]= useState(props.article.quantity)
const [couleur, setCouleur]= useState("")

const [phase,setPhase]= useState(props.article.phase)
const [image,setImage]= useState(props.article.image)
const [commentaire,setCommentaire]= useState(props.article.commentaire)
  const [fields]= useState({})
  const [errors,setErrors]= useState({})
  fields["ref"]=reference
  fields["nom"]=nom
  fields["collection"]=collection
  fields["type"]=type
  fields["mesure"]=mesure
  fields["quantity"]=quantity
  fields["couleur"]=couleur
  fields["phase"]=phase
  fields["image"]=image
  fields["comment"]=commentaire
  const dispatch = useDispatch();
  
console.log(props.name)


  function handleValidation(){
    let formIsValid = true;
let err={}
//reference
if(!fields["ref"]  ){
  formIsValid = false;
  err["ref"] = "Ce champs ne doit pas être  vide ";
}

    //Name
    if(!fields["nom"]  ){
       formIsValid = false;
       err["nom"] = "Ce champs ne doit pas être vide ";
    }

    if( fields["nom"] !== undefined ){
       if(!fields["nom"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          err["nom"] = "Désolé, seules les lettres (az) Sont autorisés.";
       }        
    }
setErrors(err)
//collection
if(!fields["collection"]  ){
  formIsValid = false;
  err["collection"] = "ce champs ne doit pas être  vide ";
}   

setErrors(err)
    //type
    if(!fields["type"]  ){
      formIsValid = false;
      err["type"] = "ce champs ne doit pas être  vide ";
    }
   
 //mesure
 if(!fields["mesure"]  ){
  formIsValid = false;
  err["mesure"] = "ce champs ne doit pas être  vide ";
}
//quantity
if(!fields["quantity"]  ){
  formIsValid = false;
  err["quantity"] = "ce champs ne doit pas être pas vide ";
}
//couleur
if(!fields["couleur"]  ){
  formIsValid = false;
  err["couleur"] = "ce champs ne doit pas être pas vide ";
}
//image
if(!fields["image"]  ){
  formIsValid = false;
  err["image"] = "ce champs ne doit pas être pas vide ";
}

//commentaire
if(!fields["comment"]  ){
  formIsValid = false;
  err["comment"] = "ce champs ne doit pas être pas vide ";
}


    return formIsValid
    
  }


function articlesSubmit(e){
  e.preventDefault();

  if(handleValidation()){
    dispatch(EditeArticle(props.article.id,reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire,props.name))
  
  }



}
 const handleChange=(field, e)=>{  
  let f=fields       
  f[field] = e.target.value; 
setRefrence(f["ref"])     
  setNom(f["nom"])   
  setCollection(f["collection"]) 
  setMesure(f["mesure"])  
  setQuantity(f["quantity"])
  setType(f["type"])
   setImage(f["image"])
  setPhase(f["phase"])
  setCouleur(f["couleur"]) 
  setCommentaire(f["comment"])   
    
  
}


  return(
    <div>
  <Modal trigger={  
    <Button size='tiny' color='blue' ><i class="sync  alternate icon"></i>  Modifier</Button>
  } closeIcon>

    <Header icon='download icon' content='' />
    <Modal.Content>
    <Form onSubmit={articlesSubmit}>
      
    <Form.Group unstackable widths={2}>
    <div className="bloc-error">
      <Form.Input className="input-add" label="Référence d'article" placeholder='Reference' type="text" 
      onChange={e =>{handleChange("ref",e)}} value={fields["ref"]} defaultValue={reference} />
      <p  style={{color: "#d93025"}}> {errors["ref"]} </p> 
      </div>
      <div className="bloc-error"> 
      <Form.Input className="input-add" label="Nom d'article" placeholder='Nom' 
      onChange={e =>{handleChange("nom",e)}} defaultValue={nom} />
            <p  style={{color: "#d93025"}}> {errors["nom"]} </p> 

      </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label='collection' placeholder='Ajouter collection'  
    onChange={e =>{handleChange("collection",e)}} value={fields["collection"]} defaultValue={collection} />
            <p  style={{color: "#d93025"}}> {errors["collection"]} </p> 

      </div>
       <div className="bloc-error">
      <Form.Input className="input-add" label="Type d'article" placeholder='Ajouter le type' type="text" 
      onChange={e =>{handleChange("type",e)}} value={fields["type"]} defaultValue={type} />
            <p  style={{color: "#d93025"}}> {errors["type"]} </p> 

      </div>
    </Form.Group>
  <Form.Group widths={2}>
  <div className="bloc-error">
    <Form.Input className="input-add" label="Mesure d'article" placeholder='ajouter Mesure'
        onChange={e =>{handleChange("mesure",e)}} value={fields["mesure"]} defaultValue={mesure} />
             <p  style={{color: "#d93025"}}> {errors["mesure"]} </p> 

       </div>
        <div className="bloc-error">
            <Form.Input className="input-add" label='Quantité' placeholder='ajouter quantité'
        onChange={e =>{handleChange("quantity",e)}} value={fields["quantity"]}  defaultValue={quantity}/>
             <p  style={{color: "#d93025"}}> {errors["quantity"]} </p> 

       </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Couleur" placeholder="Couleur" type="text" 
       onChange={e =>{handleChange("couleur",e)}} value={fields["couleur"]} defaultValue={couleur}/>
            <p  style={{color: "#d93025"}}> {errors["couleur"]} </p> 

      </div>
      <div className="bloc-error">
      <Form.Input className="input-add" label="phase d'article" placeholder="phase d'article" type="text" 
     onChange={e =>{handleChange("phase",e)}} value={fields["phase"]} defaultValue={phase}/>
            <p  style={{color: "#d93025"}}> {errors["phase"]} </p> 

    </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Image" placeholder= "ajouter image d'article"
        onChange={e =>{handleChange("image",e)}} value={fields["image"]} defaultValue={image} />
             <p  style={{color: "#d93025"}}> {errors["image"]} </p> 

       </div>
       <div className="bloc-error">
    <textarea  className="input-add" label='Commentaire'placeholder="Ajouter un commentaire"   onChange={e =>{handleChange("comment",e)}} value={fields["comment"]} defaultValue={commentaire} ></textarea>
    <p  style={{color: "#d93025"}}> {errors["comment"]} </p> 

    </div>
    </Form.Group>
    <div className="btn-modal">
      <Button color='blue' type="submit" >
          <Icon name='checkmark' /> 
        </Button>
        </div>
    </Form>

    </Modal.Content>
    
   
  </Modal>
  </div>
  
  )
    }
export default ModalExampleCloseIcon
