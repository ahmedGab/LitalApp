import React,{useState,useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import "./login.css"
import {getUsersFromApi} from "../apis/json-server"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Redirect} from "react-router-dom";


function LoginForm () {
 const [email,setEmail]= useState("")
 const [password,setPassword]= useState("")
 const [authAdmin,setauth]=useState(false)
 const[authMod,setMod]=useState(false)
 const [id,setid]=useState(0)
 const users = useSelector(state => state.users);
 const dispatch = useDispatch();



useEffect(() => {

    dispatch(getUsersFromApi())
  
}, [])
function verification(){
//const mail=users.filter((el,i)=>el["gmail"].localeCompare(email))
//const pass = users.filter((el,i) => el["password"].localeCompare(password));
let filteredUsers = users.filter(user => {
  return user.gmail === email && user.password === password &&  user.role==="admin"
});
let filtredModerateur=users.filter(user => {
  return user.gmail === email && user.password === password &&  user.role==="user"
});
if (filteredUsers.length) {
  // if login details are valid return user details
  let user = filteredUsers[0];
  let responseJson = {
    id: user.id,
    name:user.name,
    mail: user.gmail,
    password: user.password,
    
};
setid(responseJson.id)
setauth(true)
 alert("bienvenue "+responseJson.name)
}

  if(filtredModerateur.length) {
    
 let user=filtredModerateur[0];
 
 let responseModerateur={
  id: user.id,
  name:user.name,
  mail: user.gmail,
  password: user.password,
 }
 setMod(true)
 setid(responseModerateur.id)

 alert(responseModerateur.name)
}


            }
 return (
    <div className="background-login">
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <div className="header-login">
      <Header as='h1'   textAlign='center'>
        <Image src="http://latelierlital.com/sites/default/files/logo_lital_0.png" /> Connectez-vous
      </Header>
      </div>
      <Form  size='large' container mobile only grid required>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email"  value={email}      onChange={e => setEmail(e.target.value) } required
  />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={e =>setPassword(e.target.value)}

          />
             {authAdmin &&!authMod ?
      <Button inverted color='brown' fluid size='large' onSubmit={verification}>
            Login
          </Button> && <Redirect to={`/users/${id}`} />

          : !authAdmin &&authMod?<Button inverted color='brown' fluid size='large' onSubmit={verification}>
          Login
        </Button> && <Redirect  to={"/articlesUsers/"+id} />:<Button inverted color='brown' fluid size='large' onClick={verification}>
          Login
        </Button>
}
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  </div>
 )}


export default LoginForm