import React, {createContext, useContext, useState} from 'react'
import { User, UserContext } from '../import/userContext'

function Encabezado(){

    const {name, company , photo}= useContext<User>(UserContext)

    return(
        
            <div className='HeadContainer'>
                <img src="https://www.yakult.mx/dist/img/53686-logo.png" alt="" />
                <p>{company}</p>
                <div><img src={photo} className='photo'></img></div>
                <p>{name}</p>
            </div>
        
        
    )
}
export default Encabezado