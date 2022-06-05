import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadService } from '../../services/upload.service'

export const VideoCmp = ({ cmp, isPublish, onSelectActiveCmp, onUpdateWap }) => {

    // const onDrop = useCallback(async (acceptedFiles) => {
    //     const url = await uploadService.uploadImg((acceptedFiles[0]))
    //     onUpdateWap(cmp, 'url', url)
    // }, [])

    // const { getRootProps, getInputProps, isDragActive } = useDropzone({
    //     onDrop,
    //     maxFiles: 1,
    //     accept: {
    //         'image/png': ['.png'],
    //         'image/jpeg': ['.jpg', '.jpeg'],
    //         'image/gif': ['.gif', '.mp3', '.mp4', '.GIF']
    //     },
    //     multiple: false
    // })

    console.log(cmp)
    console.log(cmp.src)

    if (isPublish) return <section className={`video-cmp ${cmp.className}`}>
        <iframe
            src={cmp.url}
            style={cmp.style}
            display="initial"
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
        ></iframe>
    </section>


    return <section className={`video-cmp ${cmp.className}`} style={{ ...cmp.style }} >
        <div className='video-screen' onClick={ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) }}></div>
        <iframe
            src={cmp.url}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </section >
}