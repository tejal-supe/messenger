import React from 'react'
import { IconType } from 'react-icons'

interface AuthButton {
    icon : IconType,
    onClick : ()=> void
}


const AuthSocialButton : React.FC<AuthButton> = ({icon:Icon,onClick}) => {
  return (
   <button
   type='button'
   onClick={onClick}
   className='inline-flex w-full justify-center mt-4 py-3 px-2 rounded-sm bg-white text-grey-400 ring-1 ring-inset ring-gray-200 hover:bg-gray-100 focus:outline-offset-0'>
    <Icon />
   </button>
  )
}

export default AuthSocialButton