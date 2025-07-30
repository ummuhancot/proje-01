import { notFound } from 'next/navigation';
import React from 'react'


const API_URL = `https://68847e9b745306380a386b6a.mockapi.io/sari/coffe/user`;
//dinamik olarak sayfanın ismini yazdırır.
export const generateMetadata= async ({params})=>{
  //fetch data
   const { id } = await params;
   const res = await fetch(
    `${API_URL}/${id}`
   );
  const data = await res.json();
  
  return{
    title:"??????",
    description:"??????"
  }
}

const Page =  async ({params}) => {
  
  
  const {id} = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  if(!res.ok) throw new Error(data.message)



  return (
    <div>Page Product Page </div>
  )
}

export default Page