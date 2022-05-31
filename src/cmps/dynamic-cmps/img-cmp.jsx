    
export const ImgCmp = ({ cmp,isPublish }) => {

      /*🚀 ~~~~~~~~~~~~~~~~ When in Publish is True ~~~~~~~~~~~~~~~~~~~🚀 */
      if(isPublish) return <section className={`img-cmp ${cmp.className}`}>
    <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
</section>


/* FIX - add options */
// when in editor mode
    return <section className={`img-cmp ${cmp.className}`}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>
}