 
import React, { Component } from "react";
import {getArticlesFromApi} from "../apis/json-server"
import Article from './articles'
import { connect } from "react-redux";
import AddArticle from "./addarticles"

import "../users/users.css"
import "./aticles.css"

import { Link,Redirect} from "react-router-dom";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Container,
  Label,
  Menu,
  Table
} from "semantic-ui-react";


class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    },
    value:""
  };
handlechange=(event)=>{
  this.setState({value: event.target.value});

}

  componentDidMount(){
    this.props.getarticles()
    }
  render() {
    const  articles=this.props.articles

    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
            
            </Menu.Menu>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
              
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
         
            >
            
              
            </Menu>
          </Menu>
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
            <Menu.Item as={Link} to="/users">
             page Modérateurs
              </Menu.Item>
       
              <Menu.Item active as={Link} to='/articles'>page Articles</Menu.Item>
            
              <Menu.Item as="a">Historique</Menu.Item>
              <Divider hidden />
              <Menu.Item as="a">Page Facebook Lital</Menu.Item>
              <Menu.Item as="a">Site web Lital</Menu.Item>
            
              
            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  Chercher ou ajouter des articles
                </Header>
              </Grid.Row>
              <Grid.Row >
             
              <select name="value" value={this.state.value} className="ui search dropdown" onChange={this.handlechange} >
   <option value="" >nom</option>
  {articles.map(el=>

  <option value={el.nom}   >{el.nom}</option>
 
  )}
   </select>

  <select className="ui search dropdown" value={this.state.value} onChange={this.handlechange} >
    
  <option value="">Collection</option>
  {articles.map(el=>

<option value={el.collection}   >{el.collection}</option>

)}
  </select>
  <select className="ui search dropdown"  value={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option value="">Type</option>
  {articles.map(el=>

<option value={el.type}   >{el.type}</option>

)}
  </select>
  <select className="ui search dropdown" value={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option value="">Mesure</option>
  {articles.map(el=>

<option value={el.mesure}   >{el.mesure}</option>

)}  </select>
  <select className="ui search dropdown"  value={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option value="">Quantité</option>
  {articles.map(el=>

<option value={el.quantity}   >{el.quantity}</option>

)}  </select>
  <select className="ui search dropdown"  value={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option value="">Couleur</option>
  {articles.map(el=>

<option value={el.couleur}   >{el.couleur}</option>

)}  </select>
  <select className="ui search dropdown"  value={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option value="">Phase</option>
  {articles.map(el=>

<option value={el.phase}   >{el.phase}</option>

)}  </select>
  <p>{this.state.value}</p>
                <Grid.Column mobile={16} tablet={16} computer={16}>
             
            <AddArticle/>
          
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  La liste des articles
                </Header>
                <Input icon='users' iconPosition='left' placeholder='Search by reference...' />

              </Grid.Row>
<Container >
  <Table celled >
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Réference</Table.HeaderCell>
        <Table.HeaderCell>Nom d'article</Table.HeaderCell>
        <Table.HeaderCell>Collection</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Mesure</Table.HeaderCell>
        <Table.HeaderCell>Quantité</Table.HeaderCell>
        <Table.HeaderCell>Couleur</Table.HeaderCell>
        <Table.HeaderCell>Phase</Table.HeaderCell>
        <Table.HeaderCell>image</Table.HeaderCell>
        <Table.HeaderCell>Commentaire</Table.HeaderCell>
        <Table.HeaderCell>Suppression</Table.HeaderCell>
        <Table.HeaderCell>Modification</Table.HeaderCell>

      </Table.Row>
    </Table.Header>
    
    {this.state.value===""?
    articles.map( 
  el=> <Article key={el.id} el={el} />
    ): articles.filter(el=>el.nom===this.state.value || el.collection===this.state.value|| el.type===this.state.value || el.mesure===this.state.value || el.quantity==this.state.value|| el.couleur===this.state.value || el.phase===this.state.value).map( 
  el=> <Article key={el.id} el={el} />
    )}

  
    </Table>
</Container>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
    articles:state.articles
    })
    const mapDispatchToProps=(dispatch)=>({
    getarticles:()=>dispatch(getArticlesFromApi())
    })
export default connect(mapStateToProps,mapDispatchToProps)(App);