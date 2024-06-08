import React , {useRef, useState} from 'react'
import Card from './Card'

const foreground = () => {

const ref = useRef(null);




const data =[


  {
           desc: "This is a sample data for description section to show its working",
           filesize: ".9mb",
           close: true,
           tag:{

            isOpen: true,
            tagTitle: "Donwload Now",
            tagColor: "blue"
           },
       

  },

  {
           desc: "This is a sample data for description section to show its working",
           filesize: ".5mb",
           close: false,
           tag:{

            isOpen: true,
            tagTitle: "Upload Now",
            tagColor: "sky"
           },
       

  },
  {
           desc: "This is a sample data for description section to show its working",
           filesize: ".9mb",
           close: true,
           tag:{

            isOpen:false,
            tagTitle: "Upload Now",
            tagColor: "sky"
           },
       

  },

]



  
  return (
   
      
<div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5'>

{ data.map((item, index)=>(

<Card data={item} reference ={ref}/>   //card ko data naam se item bhej diye 

))}

</div>

   
  )
}

export default foreground
