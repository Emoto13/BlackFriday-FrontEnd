import { yupResolver } from '@hookform/resolvers';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, FormTextArea, Input } from 'semantic-ui-react';
import * as yup from "yup";
import ImageUploader from 'react-images-upload';

import { createProduct } from '../../../redux/products/actions';
import { CATEGORIES } from '../../../utils/constants/categories';
import { COUNTRIES } from '../../../utils/constants/countries';
import Navigation from '../../../utils/Navigation'

const schema = yup.object().shape({
    name: yup.string().required(),
    original_price: yup.string().required(),
    category: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().notRequired(),
    in_store: yup.number().integer().positive().required(),
    description: yup.string().notRequired(),
  });

// SEPARATE UPLOAD APP VISUALS FROM LOGIC
function UploadProductApp({ createProduct }){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [inStore, setInStore] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
      });

    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
      };

    const data = {
        in_store: inStore,
        original_price: price,
        name,
        category,
        country,
        city,
        description
    }
    
    return (
        <React.Fragment>
            <Navigation />
            <Form onSubmit={(e) => {
                e.preventDefault()
                schema.validate(data)
                .catch(function (err) {
                    console.log(err.name) // => 'ValidationError'
                    console.log(err.errors) // => ['age must be a number']
                  });
                
                const uploadData = new FormData()

                for (const index in images){
                    uploadData.append('images', images[index])
                }
                
                for (const attribute in data){
                    uploadData.append(attribute, data[attribute])
                }

                createProduct(uploadData)
            }}>

                <Form.Group widths='equal'>
                    <Form.Field
                      control={Input}
                      label='Name'
                      placeholder='Name'
                      name='name'
                      onChange={(e, {value}) => setName(value)}
                    />
                    <Form.Field
                      control={Input}
                      label='Price'
                      placeholder='Price'
                      name='price'
                      onChange={(e, {value}) => setPrice(value)}
                      />
                    <Form.Field
                    control={Dropdown}
                    label='Category'
                    placeholder='Select category'
                    fluid
                    search
                    selection
                    name='category'
                    options={CATEGORIES}
                    onChange={(e, {value})=> setCategory(value)}
                />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field 
                        control={Dropdown}
                        placeholder='Select country'
                        label='Country'
                        fluid
                        search
                        selection
                        name='country'
                        options={COUNTRIES}
                        onChange={(e, {value})=> setCountry(value)}
                    />
                    <Form.Field
                        control={Input}
                        label='City'
                        placeholder='City'
                        name='city'
                        onChange={(e, {value}) => setCity(value)}
                    />
                </Form.Group>

                    <Form.Field
                        control={Input}
                        label='Left in store'
                        placeholder='Left in store'
                        name='in_store'
                        onChange={(e, {value}) => setInStore(value)}
                    />

                <FormTextArea
                label='Description' 
                placeholder='Describe the product in a few words...'
                name='description'
                onChange={(e, {value}) => setDescription(value)}
                /> 

                <Form.Field 
                control={ImageUploader}
                withIcon={true}
                buttonText='Choose images'
                onChange={setImages}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                <Button type='submit'>Submit</Button>
            </Form>
            <div>{
            }</div>
            
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return {
        createProduct: (data) => dispatch(createProduct(data)),
    }
}

export default connect(null, mapDispatchToProps)(UploadProductApp)

/* 
    "product_data":{
    name,
    category,
    original_price,
    current_price,
    description,
    country,
    city,
    in_store}
    "product_images": []

    */