
export const AnchorCmp = ({ cmp, onSelectActiveCmp, isPublish, onUpdateCmpTxt }) => {

  const onFocusIn = (ev) => {
    ev.stopPropagation()
    onSelectActiveCmp(cmp, ev.target)
  }

  const onBlur = ({ target: { innerText } }) => {
    onUpdateCmpTxt(innerText)
  }

  if (isPublish) return <a className={`anchor-cmp ${cmp.className}`}
    target="_blank"
    href={cmp.url}
    style={cmp.style}
  >{cmp.txt}</a>

  return <a className={`anchor-cmp ${cmp.className}`}
    style={cmp.style}
    onFocus={onFocusIn} onBlur={onBlur}
    onClick={ev => ev.stopPropagation()}
    contentEditable suppressContentEditableWarning={true}>
    {cmp.txt}
  </a>
}