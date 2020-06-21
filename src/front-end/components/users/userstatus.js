import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import admin from "../images/admin.png"
import "./users.css"
const trigger = (
  <div >
  <Image className="az" src={admin}  verticalAlign='middle' />{' '}
    <span>Meriem</span>
  </div>
)

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

const DropdownImageTriggerExample = () => (
  <Dropdown className="drop"
    trigger={trigger}
    options={options}
    pointing='top left'
    icon={null}
  />
)

export default DropdownImageTriggerExample