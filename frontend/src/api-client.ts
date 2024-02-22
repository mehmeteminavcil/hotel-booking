import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ""


// REGISTER

export const register = async (formData : RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`,{
        method:'POST',
        credentials:"include", // cookies
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    })

    const responseBody = await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }

}


// SIGN IN 

export const signIn = async (formData : SignInFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:'POST',
        credentials:"include",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
    })

    const body = await response.json()

    if(!response.ok){
        throw new Error(body.message)
    }
    return body
}



//VALIDATE TOKEN

export const validateToken = async ()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:"include",
    })
    if(!response.ok){
        throw new Error ("Token Invalid")
    }
    return response.json()
}

// LOGOUT 
export const signOut=async ()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:'POST'
    })
    if(!response.ok){
        throw new Error("Error during sign out")
    }
}