import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadService } from '../../services/upload.service'
export const ImgCmp = ({ cmp, isPublish, onSelectActiveCmp }) => {

    const [image, setImage] = useState(cmp.url)
    const onDrop = useCallback(async (acceptedFiles) => {
        const url = await uploadService.uploadImg((acceptedFiles[0]))
        setImage(url)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    })
    useEffect(() => {

    }, [image])

    if (isPublish) return <section className={`img-cmp ${cmp.className}`}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>

    return <section {...getRootProps()} className={`img-cmp ${cmp.className}`}
        onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
        <img {...getInputProps()} src={image} style={{ ...cmp.style, width: '100%' }} alt={cmp.alt} />
    </section>


    // Unassigend q99nkkuo

    // if (isPublish) return <section className={`img-cmp ${cmp.className}`}>
    //       <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    // </section>

    // return <section className={`img-cmp ${cmp.className}`}
    //     onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
    //     <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    // </section>

}


