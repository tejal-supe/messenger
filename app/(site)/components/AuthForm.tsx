'use client'
import { useCallback, useEffect, useState } from "react"

 // to let next 13 know that we are using it as a client component and not a server component
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleState = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVariant('REGISTER')
        }
        else{
            setVariant('LOGIN')
        }

    },[variant])
    
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm