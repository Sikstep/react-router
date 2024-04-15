import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './Adidas';

const Model = () => {

    const params = useParams()

    const boots = adidasArr.find(adidas => adidas.id === params.id)


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