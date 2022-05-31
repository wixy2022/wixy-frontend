const  uploadImg = async (img)=> {
  const CLOUD_NAME = "drpqhjyvk"
  const UPLOAD_PRESET = "q99nkkuo"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  
  const formData = new FormData();
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('file', img)
  // console.log(formData)
  try{
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    const {url} = await res.json()
    console.log(url)
    return url
    
  }catch(err){
    console.error(err)
    throw err
  }
  
}
export const uploadService = {
  uploadImg
}
