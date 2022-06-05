import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Loader } from "../cmps/app-loader"
import { wapService } from "../services/wap.service"





export const MySites =()=>{
const {user} = useSelector(storeState=>storeState.userModule)
const [userWaps,setUserWaps] = useState(null)

useEffect(()=>{
    loadUserWaps()
},[])

const loadUserWaps = async ()=>{
   const userWapsFromBack =  await wapService.query({userId:user._id})
   console.log(userWapsFromBack)
   setUserWaps(userWapsFromBack)
} 
 if(!userWaps) return <Loader/>
    return <div className="my-sites">

    </div>
}