import React from 'react';
import {PagesType} from '../data/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';
import { Content } from './Content';

type PropsType = {
    pages: PagesType[]
}
export const Page: React.FC<PropsType> = ({pages, ...otheProps}) => {

    const params = useParams()
    let magicNumber = Number(params.id)
    // console.log(params)
    // if (typeof Number(params) !== 'number') {
    //     params = 0;
    // }

    return (

        <>
            {magicNumber <= pages.length - 1
                ? <Content heading={pages[Number(params.id)].heading} pages={pages[Number(params.id)].about}/>
                : <Error404/>
            }

        </>

        // <div>
        //    <div>{pages[Number(params.id)].heading}</div>
        //     <br/>
        //    <div>{pages[Number(params.id)].about}</div>
        //

        // </div>
    )
}


