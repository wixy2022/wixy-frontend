import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useEffectUpdate } from '../../hooks/use-effect-update'





export const ImgCmp = ({ cmp, isPublish }) => {
    const [image,setImages] =useState([])
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader()
            reader.onload =()=>{
                setImages(reader.result)
            }
            reader.readAsDataURL(acceptedFiles[0])
        });
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    })
    useEffectUpdate(()=>{
        console.log(image)
    },[image])

    /*🚀 ~~~~~~~~~~~~~~~~ When in Publish is True ~~~~~~~~~~~~~~~~~~~🚀 */
    if (isPublish) return <section className={`img-cmp ${cmp.className}`}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>


    /* FIX - add options */
    // when in editor mode
    // return <section   className={`img-cmp ${cmp.className}`}>
    //     {/* return <section onDragEnter={(ev)=>onDragImg(ev)} onDrop={(ev)=>onDragImg(ev)}  onDragOver={(ev)=>onDragImg(ev)} className={`img-cmp ${cmp.className}`}> */}
    //     <img  src={cmp.url} style={cmp.style} alt={cmp.alt} />
    // </section>
    return <section  {...getRootProps()} className={`img-cmp ${cmp.className}`}>
        {/* return <section onDragEnter={(ev)=>onDragImg(ev)} onDrop={(ev)=>onDragImg(ev)}  onDragOver={(ev)=>onDragImg(ev)} className={`img-cmp ${cmp.className}`}> */}
        <img {...getInputProps()} src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>
}