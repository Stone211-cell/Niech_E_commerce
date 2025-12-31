'use client'
import { actionFunction } from "@/utils/types"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

const initialState = {
  msg:''
}



const FormContainer = ({action,children,className}:{action:actionFunction,children:React.ReactNode,className?:string}) => {
    
    const [state,formAction] = useActionState(action,initialState)

    useEffect(()=> {
      if (state.msg){

        toast.success(state.msg);
      }

    },[state])
  return (
    <form action={formAction} className={className}>{children}</form>
  )
}
export default FormContainer