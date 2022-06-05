import { useEffect, useState } from "react"
import { Loader } from "../cmps/app-loader"
import { wapService } from "../services/wap.service"





export const MySites =()=>{

const [userWaps,setUserWaps] = useState(null)

useEffect(()=>{
    loadUserWaps()
},[])

const loadUserWaps = async ()=>{
   const userWapsFromBack =  await wapService.getUserWaps()
   setUserWaps(userWapsFromBack)
} 
 if(!userWaps) return <Loader/>
    return <div className="my-sites">

    </div>
}