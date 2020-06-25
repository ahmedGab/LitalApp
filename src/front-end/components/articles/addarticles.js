import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from "react-redux";

import "../users/users.css"

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {Addarticles,getUsersFromApi} from "../apis/json-server"

const ModalExampleCloseIcon = ({idUser}) => {
  const [reference,setRefrence]= useState("")
  const [nom,setNom]= useState("")
  const [type,setType]= useState("")
  const [mesure,setMesure]= useState("")
  const [collection,setCollection]= useState("")
  const [quantity,setQuantity]= useState("")
  const [couleur, setCouleur]= useState("")
  const [phase,setPhase]= useState("")
  const [image,setImage]= useState("")
  const [commentaire,setCommentaire]= useState("")
  const users = useSelector(state => state.users);
 

  const [fields]= useState({})
  const [errors,setErrors]= useState({})


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromApi())
}, [])

console.log(users)


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
  let name=users.filter(el=>el.id===idUser).map(el=>el.name)
  let lastname=users.filter(el=>el.id===idUser).map(el=>el.lastname)

function articlesSubmit(e){
  e.preventDefault();

  if(handleValidation()){
    dispatch(Addarticles(reference,nom,collection,type,mesure,quantity,couleur,phase,image,commentaire,name.join("")+lastname.join(""),new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),new Date().getHours()+":"+new Date().getMinutes(),))   

     alert(nom+ " a été ajouté dans votre liste des produits ");
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

console.log(idUser)
  return(
  <div className="ui placeholder segment box-search">
  <div className="ui icon header search">
    <i className="dont icon"></i>
    Aucun utilisateur n'a encore été ajouté  </div>
  <Modal trigger={  
 <Button color='vk'>
  <i className="download icon"></i> <span> Ajouter un Article</span>
</Button>
  } closeIcon>

    <Header icon='download icon' content='' />
    <Modal.Content>
    <Form onSubmit={articlesSubmit}>
      
    <Form.Group unstackable widths={2}>
    <div className="bloc-error">
      <Form.Input className="input-add" label="Référence d'article" placeholder='Reference' type="text" 
      onChange={e =>{handleChange("ref",e)}} value={fields["ref"]}  />
      <p  style={{color: "#d93025"}}> {errors["ref"]} </p> 
      </div>
      <div className="bloc-error"> 
      <Form.Input className="input-add" label="Nom d'article" placeholder='Nom' 
      onChange={e =>{handleChange("nom",e)}} />
            <p  style={{color: "#d93025"}}> {errors["nom"]} </p> 

      </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label='collection' placeholder='Ajouter collection'  
    onChange={e =>{handleChange("collection",e)}} value={fields["collection"]} />
            <p  style={{color: "#d93025"}}> {errors["collection"]} </p> 

      </div>
       <div className="bloc-error">
      <Form.Input className="input-add" label="Type d'article" placeholder='Ajouter le type' type="text" 
      onChange={e =>{handleChange("type",e)}} value={fields["type"]} />
            <p  style={{color: "#d93025"}}> {errors["type"]} </p> 

      </div>
    </Form.Group>
  <Form.Group widths={2}>
  <div className="bloc-error">
    <Form.Input className="input-add" label="Mesure d'article" placeholder='ajouter Mesure'
        onChange={e =>{handleChange("mesure",e)}} value={fields["mesure"]} />
             <p  style={{color: "#d93025"}}> {errors["mesure"]} </p> 

       </div>
        <div className="bloc-error">
            <Form.Input className="input-add" label='Quantité' placeholder='ajouter quantité'
        onChange={e =>{handleChange("quantity",e)}} value={fields["quantity"]} />
             <p  style={{color: "#d93025"}}> {errors["quantity"]} </p> 

       </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Couleur" placeholder="Couleur" type="text" 
       onChange={e =>{handleChange("couleur",e)}} value={fields["couleur"]} />
            <p  style={{color: "#d93025"}}> {errors["couleur"]} </p> 

      </div>
      <div className="bloc-error">
      <Form.Input className="input-add" label="phase d'article" placeholder="phase d'article" type="text" 
     onChange={e =>{handleChange("phase",e)}} value={fields["phase"]} />
            <p  style={{color: "#d93025"}}> {errors["phase"]} </p> 

    </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Image" placeholder= "ajouter image d'article"
        onChange={e =>{handleChange("image",e)}} value={fields["image"]} />
             <p  style={{color: "#d93025"}}> {errors["image"]} </p> 

       </div>
       <div className="bloc-error">
    <textarea  className="input-add" label='Commentaire'placeholder="Ajouter un commentaire"   onChange={e =>{handleChange("comment",e)}} value={fields["comment"]}></textarea>
    <p  style={{color: "#d93025"}}> {errors["comment"]} </p> 

    </div>
      {/* <Form.Input label='Commentaire' placeholder='ajouter un commentaire' type="commentaire" 
      onChange={e => setCommentaire(e.target.value)} /> */}
    </Form.Group>
    <div className="btn-modal">
      <Button color='blue' type="submit" >
          <Icon name='checkmark' /> Ajouter
        </Button>
        </div>
    </Form>

    </Modal.Content>
    
   
  </Modal>
  </div>
  )
    }

export default ModalExampleCloseIcon
