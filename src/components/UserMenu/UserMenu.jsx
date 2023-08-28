import { useAuth } from 'hooks'
import React from 'react'

function UserMenu() {
  const {user}= useAuth()

  return (
    <div>{user.name},,,,,---
Here must be name of user and logout button or burger menu</div>
  )
}

export default UserMenu
