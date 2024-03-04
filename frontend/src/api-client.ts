import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import {HotelSearchResponse, HotelType} from "../../backend/src/shared/types"
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

// ADD MY HOTEL

export const addMyHotel = async (hotelFormData:FormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`,{
        method:'POST',
        credentials:"include",
        body:hotelFormData,

    })
    if(!response.ok){
        throw new Error("Failed to add hotel")
    }
    return response.json();
}


// FETCH MY HOTELS

export const fetchMyHotels = async ():Promise<HotelType[]> =>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`,{
        credentials:"include",
      
    })

    if(!response.ok){
        throw new Error ("Error fetching hotels")
    }
    return response.json()
}

export const fetchMyHotelById = async(hotelId:string): Promise<HotelType> =>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`,{
        credentials:"include",

    })
    if(!response.ok){
        throw new Error("Error fetching hotel")
    }

    return response.json()
}


export const updateMyHotelById = async (HotelFormData:FormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/my-hotels/${HotelFormData.get("hotelId")}`,
    {
        method:"PUT",
        body:HotelFormData,
        credentials:"include",
    })

    if(!response.ok){
        throw new Error("Failed to update Hotel");
    }

    return response.json()
}


// SEARCH

export type SearchParams = {
    destination?:string;
    checkIn?:string;
    checkOut?: string;
    adultCount?:string;
    childCount?:string;
    page?:string;

}
export const searchHotels = async (
    searchParams: SearchParams
  ): Promise<HotelSearchResponse> => {
    const queryParams = new URLSearchParams();
    queryParams.append("destination", searchParams.destination || "");
    queryParams.append("checkIn", searchParams.checkIn || "");
    queryParams.append("checkOut", searchParams.checkOut || "");
    queryParams.append("adultCount", searchParams.adultCount || "");
    queryParams.append("childCount", searchParams.childCount || "");
    queryParams.append("page", searchParams.page || "");

    const response = await fetch(`${API_BASE_URL}/api/hotels/search?${queryParams}`)
    if(!response.ok){
        throw new Error("Error fetching hotels")
    }
    return response.json()


}