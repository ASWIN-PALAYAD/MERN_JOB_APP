import React, { useReducer, useState } from 'react';
import { gigReducer, INITIAL_STATE } from '../../reducers/gigReducer';
import "./Add.scss";
import upload from '../../utils/upload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import {useNavigate} from 'react-router-dom'


const Add = () => {

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value }
    })
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
    e.target[0].value = '';
  };

  const handleUpload = async () => {
    setUploading(true);

    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);

      dispatch({
        type:'ADD_IMAGES',
        payload :{ cover , images}
      });

    } catch (error) {
      console.log(error);
    }
  }


    const queryClient = useQueryClient();


    const mutation = useMutation({
      mutationFn: (gig) => {
          return newRequest.post('/gigs',gig) 
      },
      onSuccess: ()=> {
          queryClient.invalidateQueries(['myGigs'])
      }
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      mutation.mutate(state);
      // navigate('/mygigs')

    }

  return (
    <div className='add' >
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" name='title' placeholder='e.g I will do something iam really good at'
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="desighn">Desingn</option>
              <option value="web">Web Development</option>
              <option value="animatin">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInput">
            <label htmlFor="">Cover Image</label>
            <input type="file" onChange={e => setSingleFile(e.target.files[0])} />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple onChange={e => setFiles(e.target.files)} />
            </div>
            <button onClick={handleUpload} >{uploading ? 'uploading' : 'upload'}</button>
            </div>
            <label htmlFor="">Description</label>
            <textarea name="desc" id="" cols="30" rows="16" onChange={handleChange}
              placeholder='Bried descriptions to introduce your service to customers'></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" name='shortTitle' onChange={handleChange} placeholder='e.g one-page web design' />
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" onChange={handleChange} cols="30" rows="10" placeholder='Short description of your service' ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name='deliveryTime' min={1} onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input type="number" name='revisionNumber' min={1} onChange={handleChange} />
            <label htmlFor="">Add Features</label>
            <form action="" className='add' onSubmit={handleFeature}>
              <input type="text" placeholder='e.g. page design' />
              <button type='submit' >add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map(f=> (
                <div className="item" key={f}>
                <button onClick={()=> dispatch({type:'REMOVE_FEATURE', payload: f})} >
                  {f}
                  <span>X</span>
                </button>
            </div>
              ))}
              
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name='price' min={1} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add 