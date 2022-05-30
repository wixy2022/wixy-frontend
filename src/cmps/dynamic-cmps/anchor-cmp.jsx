export const AnchorCmp = ({ cmp ,isPublish}) => {
      /*🚀 ~~~~~~~~~~~~~~~~ When in Publish is True ~~~~~~~~~~~~~~~~~~~🚀 */
    if(isPublish) return <a className={`anchor-cmp up-screen ${cmp.className}`}   style={cmp.style}>{cmp.txt}</a>
    
      /*🚀 ~~~~~~~~~~~~~~~~ When in Editor mode ~~~~~~~~~~~~~~~~~~~🚀 */
    /* FIX - add options */
    return <a className={`anchor-cmp up-screen ${cmp.className}`}   style={cmp.style}>{cmp.txt}</a>
    // return <a className={`anchor-cmp up-screen ${cmp.className}`}  href={cmp.url} target="_blank" style={cmp.style}>{cmp.txt}</a>
}