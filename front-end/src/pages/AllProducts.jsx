import { useState } from "react"
import UploadProduct from "../components/UploadProduct"


const AllProducts = () => {
   const [openUploadProduct,setOpenUploadProduct] = useState(false)
  // const [allProduct,setAllProduct] = useState([])


  return (
    <>
            <div className='bg-white py-2 px-4 flex justify-between items-center'>
            <h2 className='font-bold text-lg'>All Product</h2>
            <button  className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full '
             onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
        </div>

        {/**all product */}
        <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
          {
  
          }
        </div>

    
        {/**upload prouct component */}
        {
          openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={"kj"}/>
          )
        }
      
    
    
    
    </>
  )
}

export default AllProducts