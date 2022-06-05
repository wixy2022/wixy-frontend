import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadService } from '../../services/upload.service'

export const ImgCmp = ({ cmp, isPublish, onSelectActiveCmp, onUpdateWap }) => {

    const onDrop = useCallback(async (acceptedFiles) => {
        const url = await uploadService.uploadImg((acceptedFiles[0]))
        onUpdateWap(cmp, 'url', url)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/gif': ['.gif', '.mp3', '.mp4', '.GIF']
        },
        multiple: false
    })

    if (isPublish) return <section className={`img-cmp ${cmp.className}`}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>

    return <section className={`img-cmp ${cmp.className}`} style={{ ...cmp.style }} >
        <img {...getInputProps()}
            {...getRootProps({ onClick: ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) } })}
            // onDragEnter={(ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) })}
            // Style gets an empty object because of Drag Zone
            src={cmp.url} alt={cmp.alt} style={{}} /> 
    </section >
}
// style={{ height: '100%', minWidth: '100%', objectFit: 'cover' }} other option 
// style={{ width: '100%', objectFit: 'cover' }} other option 
