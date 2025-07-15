import { notFound } from 'next/navigation';
import React from 'react'

const Page =  async ({params}) => {


  const {id} = await params;

 //ürün bulunamadı demek isterken not found göndere bilirim
  if(id === null || id === undefined) notFound();
    
    //ürün id'si 1 ise
    if(id === 1) notFound();


  return (
    <div>Page Product Page {id}</div>
  )
}

export default Page