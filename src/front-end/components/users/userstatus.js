
import React from 'react'
import { Dropdown ,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import admin from "../images/admin.png"

import "./users.css"

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = ({nom}) => (
  <Dropdown  text={nom}>
    <Dropdown.Menu >
 <Link><Dropdown.Item  className="Dropdown-admin" text=' Compte' /> </Link>  
   <Link> <Dropdown.Item className="Dropdown-admin" text='Historique' /> </Link>  
      <Link to="/"> <Dropdown.Item className="Dropdown-admin" text='Se déconnecter' /></Link>  
          </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDropdown