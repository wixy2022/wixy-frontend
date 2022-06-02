import React from "react"

export const AnchorCmp = React.memo(({ cmp, onSelectActiveCmp, isPublish }) => {
  if (isPublish) return <a className={`anchor-cmp up-screen ${cmp.className}`} style={cmp.style}>{cmp.txt}</a>
  
  return <a className={`anchor-cmp up-screen ${cmp.className}`}
    href={cmp.url} target="_blank" style={cmp.style}
    onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
    {cmp.txt}
  </a>
})