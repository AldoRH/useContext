import React, {createContext, useContext, useState} from 'react'
import { User, UserContext } from '../import/userContext'

function Cuerpo(){

    const {id,position, qr}= useContext<User>(UserContext)

    return(
        
            <div className='BodyContainer'>
                <p>{position}</p>
                <p>ID: {id}</p>
                <img src={qr}></img>
            </div>
        
        
    )
}
export default Cuerpo