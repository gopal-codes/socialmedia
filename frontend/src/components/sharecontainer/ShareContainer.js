import React, { useEffect, useRef, useState} from 'react'
import {MdPhotoLibrary,MdLocationOn,MdEmojiEmotions} from 'react-icons/md';
import {BiTag} from 'react-icons/bi';
import { FlexRow, Hr, IconText, Image, ImageBox, Share, ShareBoxIcons, ShareBoxImage, ShareBoxImageContainer, ShareButton, ShareInput, Span } from './ShareContainer.styled';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../Firebasemethods';
import axios from 'axios';

const ShareContainer = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const description = useRef("");
  const [imagefile,setimagefile]= useState([]);
  const [imagepreview,setimageprev]= useState([]);
  const [imagelink,setimagelink]= useState([]);
  const [Progress,setProgress] = useState(null);
  console.log(Progress)
  
  // function to select image.....
  const selectimages = e=>{
    e.preventDefault();
    for(let i=e.target.files.length-1;i>=0;i--){
      setimagefile((previmage)=>previmage.concat(e.target.files[i]));
      console.log(imagefile)
    } 
    // calling imagepreview
    imagepreviewFun(e)
  }
  // imagepreview
  const imagepreviewFun=(e)=>{
    if(e.target.files){
      const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
      setimageprev((previmage)=>previmage.concat(fileArray));
    }
  }

  useEffect(()=>{
    // this uploadfile() uploads each file to firebase present inside of imagefile array.
    imagefile.forEach(uploadPostFiles)
  },[imagefile])

  const uploadPostFiles =(file,index)=>{
    if(!file) return;
   
    const filename=`postimage/${file.name}_${new Date().getDate()}`
    const storageRef =ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on("state_changed", (snapshot)=>{
      const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes*100));
      if(progress===100){
        setTimeout(()=>setProgress(progress),4000)
      }
    },
    (err) =>console.log(err),
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url =>setimagelink((prevlink)=>prevlink.concat(url)))
    }
    )
  }
    // To share post.
    const sharepost = async()=>{
      const desc = description.current.value;
      const imageurl= imagelink[0];
      console.log(imageurl);
      try{ 
        const res = await axios.post("http://localhost:8800/api/posts",{userId:user._id ,desc:desc ,img:imageurl});
        console.log(res.data)
        if(res.data){
          setTimeout(()=>window.location.reload(false),1500)
        }
      }catch(err){
        console.log(err);
    }
    }

  return (
    <Share>
       <FlexRow>
       <ShareBoxImageContainer>
            <ShareBoxImage src={user.profilePicture||'/socialmediaassets/vector.jpg'} alt='profile' />
        </ShareBoxImageContainer>
        <ShareInput rows="2" ref={description} type="text" placeholder={`What's in your mind ${user.username} ?`} />
       </FlexRow>
       
       <Hr />
       
        {
          imagepreview.length===0?
          <></>:
          imagepreview.map((preview)=>(
            <ImageBox key={preview}>
              <Image onClick={()=>window.open(preview, "_blank")} src={preview}/>
            </ImageBox>
          ))
        }
      
       <FlexRow icons>
        <Span>
        <ShareBoxIcons htmlFor='postimage'>
          <MdPhotoLibrary color='red' /><IconText>Photo or video</IconText>
        </ShareBoxIcons>
        <input multiple onChange={selectimages} accept=".jpg,.png,.PNG,.svg,.jpeg" style={{display:"none"}} id='postimage' type="file" />
        <ShareBoxIcons>
          <BiTag color='blue' /><IconText>Tag</IconText>
        </ShareBoxIcons>
        <ShareBoxIcons>
          <MdEmojiEmotions color='teal' /><IconText>Fellings</IconText>
        </ShareBoxIcons>
        <ShareBoxIcons>
          <MdLocationOn color='orange' /><IconText>Location</IconText>
        </ShareBoxIcons>
        </Span>

        <Span onClick={sharepost}><ShareButton disabled={Progress<100} type="button">Share</ShareButton></Span>
       </FlexRow>
      </Share>
  )
}

export default ShareContainer