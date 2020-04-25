import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { firestore } from '../../../../config/fbConfig';

const AddGood = () => {
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const onSubmitHandler=e=>{
        e.preventDefault();
        firestore.collection('goods').add({
            title,
            price:parseInt(price,10)
        })
            .then(docRef=>{
                console.log("Document written with ID: ",docRef.id);
            })
            .catch(error=>{
                console.log("Error adding document: ",error);
            });
    }
    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Name of good' name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input placeholder='Price of good' type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default AddGood;
