import React from 'react';
import {useParams} from 'react-router-dom';
import {v1} from 'uuid';
import adidasModel1 from '../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from '../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import adidasModel3
    from '../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import pumapic1 from '../../assets/puma1.jpg';
import pumapic2 from '../../assets/puma2.jpg';
import pumapic3 from '../../assets/puma3.jpg';
import pumapic4 from '../../assets/puma4.jpg';

export const crossModels: CrossModelsType = {
    adidas: [
    {
        id: v1(),
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,
    },
    {
        id: v1(),
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2,
    },
    {
        id: v1(),
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3,
    },
],
    puma: [
    {
        id: v1(),
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumapic1,
    },
    {
        id: v1(),
        model: 'PUMA PM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumapic2,
    },
    {
        id: v1(),
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: pumapic3,
    },
    {
        id: v1(),
        model: 'PUMA SUPER+ ',
        collection: 'new collection21',
        price: '400400$',
        picture: pumapic4,
    },
],
    abibas: [],
}

type CrossModelsType = {
    [key: string]: BrandStateType[]
 }

type BrandStateType = {
    id: string
    model: string
    collection: string
    price: string
    picture: string
}

const Model = () => {

    const {brand, id} = useParams()

    const boots = crossModels[`${brand}`].find(model => model.id === id)

    return (

        <div>
            {boots ? (
                <div style={{textAlign: 'center'}}>
                    <img src={boots.picture} alt={boots.model}
                         style={{width: '600px', height: 'auto', marginRight: '10px'}}/>
                    <h2>{boots.model}</h2>
                    <p>Collection - {boots.collection}</p>
                    <p>Price - {boots.price}</p>
                </div>
            ) : (
                <h2 style={{textAlign: 'center'}}>Такой модели нет :(((</h2>
            )}
        </div>
    );
};

export default Model;