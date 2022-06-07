import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Loader } from "../cmps/app-loader"
import { TemplateCard } from "../cmps/template-card"
import { utilService } from "../services/util.service"
import { wapService } from "../services/wap.service"





export const MySites = () => {
    const { user } = useSelector(storeState => storeState.userModule)
    const [userWaps, setUserWaps] = useState(null)

    useEffect(() => {
        loadUserWaps()
    }, [])

    const loadUserWaps = async () => {
        const userWapsFromBack = await wapService.query({ userId: user._id })
        
        setUserWaps(userWapsFromBack)
    }
    if (!userWaps) return <Loader />
    
    return <div className="my-sites">
        <h2>My Sites</h2>
        <div className="user-waps">

            {userWaps.map(wap => <TemplateCard key={utilService.createKey()} isMySites={true} wap={wap} />)}
        </div>
    </div>
}