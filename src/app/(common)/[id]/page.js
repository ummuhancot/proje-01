import React from 'react'

const Page = async ({params}) => {
    const { id } = await params;

    fetch(`https://dummyjson.com/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
  return (
    <div> 
        <h1>Product Details for ID: {id}</h1>
        {/* Render product details here */}
    </div>
  )
}

export default Page