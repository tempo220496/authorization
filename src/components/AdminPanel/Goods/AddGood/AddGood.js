import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGood } from '../../../../store/actions/goodsAction';

const AddGood = ({history}) => {
    const [value,setValue]=useState({
        title:'',
        price:'',
        description:''
    });
    const dispatch=useDispatch();
    const onChangeHandler=e=>{
        const name=e.target.name;
        const value=e.target.value;
        setValue(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    };
    const onSubmitHandler=e=>{
        e.preventDefault();
        const good={
            title:value.title,
            price:parseInt(value.price,10),
            description:value.description
        };
        dispatch(addGood(good,history))
    }
    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Name of good' name="title" onChange={onChangeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input placeholder='Price of good' type="number" name="price" onChange={onChangeHandler} />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <TextArea placeholder='Description of good' name="description" onChange={onChangeHandler} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default AddGood;
