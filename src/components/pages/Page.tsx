import React from 'react';
import {PagesType} from '../data/dataState';
import {useParams} from 'react-router-dom';

type PropsType = {
    pages: PagesType[]
}
export const Page: React.FC<PropsType> = ({pages, ...otheProps}) => {

    let params = useParams()
    console.log(typeof Number(params))
    // if (typeof Number(params) !== 'number') {
    //     params = 0;
    // }

    return (
        <div>
           <div>{pages[Number(params.id)].heading}</div>
            <br/>
           <div>{pages[Number(params.id)].about}</div>
        </div>
    );
};

