import React, {useState } from 'react'
import { BsCameraFill } from 'react-icons/bs';
import Styled from "styled-components";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Firebasemethods';
import axios from 'axios';

const Container = Styled.button`
z-index:1;
position:absolute;
bottom:10px;
right:10px;
background:black;
color:white;
border-radius:5px;
cursor:pointer;
&:disabled{
  cursor:not-allowed;
  background-color:gray;
  opacity:0.4;
};
`
const Label= Styled.label`
display:flex;
align-items:center;
text-align:center;
`

const Text = Styled.p`
margin:12px 0;
margin-left:5px;
cursor:pointer;
&:disabled{
  cursor:not-allowed;
  color:gray;
  opacity:0.3;
};
`

const CoverPictureEdit = ({setcoverpic}) => {

  const user = JSON.parse(localStorage.getItem("user"));
  const [image,setimage]= useState(null);
  const [url,seturl]= useState(null);
  const [disabled,setdisabled] = useState(false);

  const selectAndSave =(e)=>{
    setdisabled(true);
    setimage(e.target.files[0])
  }
  
  // THis function upload single image to firebase
  const uploadFiles =()=>{
    if(!image) return;
   
    const imageRef = ref(storage,`coverpicture/${image.name}_${new Date().getDate()}`)
    uploadBytes(imageRef,image)
    .then(()=>{
      getDownloadURL(imageRef)
      .then((url)=> {
        seturl(url);
        // This will preview image inside of Profile page.
        setcoverpic(url)
      })
      .catch((err)=>{
        console.log(err)
      });
      setimage(null);
    })
    .catch((err)=>{
      console.log(err)
    });
  };

  if(image!==null){
    uploadFiles();
    setimage(null);
  }

  if(url!==null){
    (async function () {
      const res = await axios.put(`http://localhost:8800/api/users/${user._id}` ,{userId:user._id, coverPictures:url})
      console.log(res.data)
    })();
    seturl(null);
    setdisabled(false);
  }

  return (
    <Container disabled={disabled}  >
      <Label htmlFor='image' >
          <BsCameraFill />
          <Text >Add cover photo</Text>
      </Label>
      <input onChange={selectAndSave} accept="image/*" style={{display:"none"}} id='image' type="file" />

    </Container>
  )
}

export default CoverPictureEdit