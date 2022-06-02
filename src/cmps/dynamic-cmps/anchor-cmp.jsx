
export const AnchorCmp = ({ cmp, onSelectActiveCmp, isPublish }) => {
  if (isPublish) return <a className={`anchor-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</a>

  return <a className={`anchor-cmp up-screen ${cmp.className}`}
    target="_blank" style={cmp.style}
    onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
    {cmp.txt}
  </a>
}