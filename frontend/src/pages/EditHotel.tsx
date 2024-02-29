import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import * as apiClient from '../api-client';
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";

const EditHotel = () => {
  const {showToast } = useAppContext()

   const {hotelId} = useParams() 
   const {data:hotel} = useQuery("fetchMyHotelById",()=>
   apiClient.fetchMyHotelById(hotelId || ""),{
    enabled:!!hotelId,
   })

   const {mutate,isLoading} = useMutation(apiClient.updateMyHotelById,{
    onSuccess:()=>{
      showToast({message:"Hotel Saved",type:"SUCCESS"})
    },
    onError:()=>{
      showToast({message:"Error saving Hotel",type:"ERROR"})
    },
   })

   const handleSave = (HotelFormData:FormData)=>{
    mutate(HotelFormData)
   }

   

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading}/>
  )
}

export default EditHotel