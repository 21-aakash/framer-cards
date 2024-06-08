import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {

  return (

    <>
     <motion.div  drag dragConstraints={reference } whileDrag ={{scale:1.2}}  dragElastic={0.2} dragTransition={{bounceStiffness:600 , bounceDamping:10}} className= 'relative flex-shrink-0 py-10 px-8 text-white w-60 h-72 rounded-[30px] bg-zinc-900/90 overflow-hidden'>
     <FaRegFileAlt/>
     <p className='leading-tight text-sm mt-5 font-semibold'>{data.desc}</p>
     
     <div className="footer absolute bottom-0  w-full left-0 ">


             <div className='flex items-center justify-between  px-8 py-3  mb-3'>

              <h5>{data.filesize}</h5>
              <span className=' w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
{data.close ? <IoCloseOutline/> : <LuDownload size=".7em" color='#000'/>}
              
              </span>
              
             </div>

             {
                        
    data.tag.isOpen && (   <div className={`tag w-full  py-4 h-10  ${data.tag.tagColor== "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>


    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>


</div>) 


             }

          
     </div>
     
     </motion.div>
      
    </>
   
  )
}


export default Card
