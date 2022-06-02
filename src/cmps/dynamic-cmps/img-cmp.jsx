import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadService } from '../../services/upload.service'

export const ImgCmp = ({ cmp, isPublish, onSelectActiveCmp, onUpdateWap }) => {

    const onDrop = useCallback(async (acceptedFiles) => {
        const url = await uploadService.uploadImg((acceptedFiles[0]))
        onUpdateWap('url', url)
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

    return <section className={`img-cmp ${cmp.className}`} style={{ ...cmp.style, overflow: 'hidden' }}>
        <img {...getInputProps()}
            {...getRootProps({ onClick: ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) } })}
            onDragEnter={(ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) })}
            src={cmp.url} style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }} alt={cmp.alt} />
    </section>
}