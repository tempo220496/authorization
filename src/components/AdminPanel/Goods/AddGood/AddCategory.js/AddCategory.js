import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useRef } from 'react';
import { useState } from 'react';
import { storage } from '../../../../../config/fbConfig';

const AddCategory = () => {
    const fileInputRef=useRef();
    const [value,setValue]=useState({
        category:'',
        description:'',
    });
    const [images,setImages]=useState([]);
    const onChangeHandler=e=>{
        const {name,value}=e.target;
        setValue(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });
    };

    const onFileChangehandler=e=>{
        const files=e.target.files;
        for(let file of files){
            setImages(prev=>[...prev,file])
        }
    };
    const onFileUploadHandler=file=>{
        const storageRef=storage.ref(`category/${new Date().getTime()+file.name}`);
        const uploadTask=storageRef.put(file);
        uploadTask.on('state_changed',
            (snapshot)=>{console.log('uploading...')},
            (error)=>{console.log(error)},
            ()=>{
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(fileUrl=>{
                        console.log(fileUrl);
                    })
            }
        );
    };
    const onSubmitHandler=e=>{
        e.preventDefault();
        images.forEach(image=>{
            onFileUploadHandler(image);
        });
    };
    return (
        <Form onSubmit={onSubmitHandler} >
            <Form.Field>
                <label htmlFor="category" >Name of category</label>
                <input 
                type="text" 
                placeholder="Name of category" 
                id="category"
                name="category"
                value={value.category}
                onChange={onChangeHandler} />
            </Form.Field>
            <Form.Field>
                <Button 
                icon="image" 
                labelPosition="left" 
                content="Choose images"
                onClick={e=>{
                    e.preventDefault();
                    fileInputRef.current.click()
                }} />
                <input 
                type="file" 
                hidden
                ref={fileInputRef}
                multiple
                onChange={onFileChangehandler}
                />
                {
                    images.length>0 ? (
                        <ul>
                            {images.map(image=><li key={image.name}>{image.name}</li>)}
                        </ul>
                    ):null
                }
            </Form.Field>
            <Form.Field>
                <label htmlFor="description" >Description of category</label>
                <Form.TextArea 
                placeholder="Description of category" 
                id="description" 
                name="description"
                value={value.description}
                onChange={onChangeHandler} />
            </Form.Field>
            <Form.Field>
                <Button color='teal'>Create category</Button>
            </Form.Field>
        </Form>
    );
}

export default AddCategory;
