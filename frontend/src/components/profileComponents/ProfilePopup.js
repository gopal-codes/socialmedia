import React from 'react'
import { useState } from 'react';
import { GiTireIronCross } from 'react-icons/gi';
import { DescribeText, EditBox, EditContainer, Input, InputContainers, PictureSelect, ProfilePicture, ProfilePictureContainer, Submit, UserEditPopup } from './Profilepopup.style'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Firebasemethods';
import axios from 'axios';
import { useFetchData } from '../../allFunctions/useAllfunctions';

const ProfilePopup = ({setshow}) => {

  const user = JSON.parse(localStorage.getItem('user'));
  const {data:currentuser} = useFetchData(`http://localhost:8800/api/users/${user._id}`)

  const [disable,setdisable] = useState(null);
  const [image,setimage]= useState(null);
  const [preview,setpreview] = useState(null);
  const [url,seturl] = useState(null);
  const [inputs,setinputs] = useState({
    name:null,
    relation:null,
    city:null,
    from:null,
    description:null
  })
  
  // handle input change.
  const Changehandler = (e)=>{
    const {name,value} = e.target;
    setinputs({...inputs,[name]:value})
  }

  // select and preview image.
  const select = (e)=>{
    setimage(e.target.files[0]);
    setpreview(URL.createObjectURL(e.target.files[0]));
  }

  // THis function upload single image to firebase
  const uploadFiles =()=>{
    setdisable(true)
    if(!image) return;
    const imageRef = ref(storage,`profilepicture/${image.name}_${new Date().getDate()}`)
    uploadBytes(imageRef,image)
    .then(()=>{
      getDownloadURL(imageRef)
      .then((url)=> {
        seturl(url);
        console.log(url);
        setdisable(false)
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


// form submit.
  const submit =async()=>{
    if(image!==null){
       uploadFiles();
      }

      const Url=url;
      const name= inputs.name===null?currentuser.username:inputs.name;
      const relation= inputs.relation===null?currentuser.relationship:inputs.relation;
      const city= inputs.city===null?currentuser.city:inputs.city;
      const from = inputs.from===null?currentuser.from:inputs.from;
      const desc = inputs.description===null?currentuser.desc:inputs.description;


      if(disable===false){
        const res =await axios.put(`http://localhost:8800/api/users/${user._id}`,
        {userId:currentuser._id, profilePicture:Url,username:name,relationship:relation,
        city:city,from:from,desc:desc});
        console.log(res.data);
        setinputs({})
        if(res.data){
          setshow(false)
          window.location.reload();
        }
      }            
  }
  
  return (
    <UserEditPopup>
        <EditContainer >
          <GiTireIronCross onClick={()=>setshow(false)} style={{position:"absolute",top:"10px",right:"10px"}} />

          <EditBox>
            <ProfilePictureContainer>
              <ProfilePicture src={preview || '/socialmediaassets/vector.jpg'} alt="profilepic" />
              <PictureSelect htmlFor='img' >Select Picture</PictureSelect>
              <input onChange={select} accept="image/*" style={{display:"none"}} id='img' type="file" />

              <InputContainers>
                <Input type="text" name="name" onChange={Changehandler} placeholder="Name" />
                <Input type="text" name="relation" onChange={Changehandler} placeholder="Relationship Status" />
              </InputContainers>
              <InputContainers>
                <Input type="text" name="city" onChange={Changehandler} placeholder="City" />
                <Input type="text" name="from" onChange={Changehandler} placeholder="From" />
              </InputContainers>
              <InputContainers>
                <DescribeText rows="5" type="text" name="description" onChange={Changehandler} placeholder="Describe YourSelf!!! Who YOu Are?" ></DescribeText>
              </InputContainers>
              <Submit disabled={disable} onClick={submit}>{url?"Confirm":"Submit"}</Submit>
            </ProfilePictureContainer>
          </EditBox>
        </EditContainer>
    </UserEditPopup>
  )
}

export default ProfilePopup