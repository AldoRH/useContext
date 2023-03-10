import React, { useEffect, useState} from 'react'
import { User, UserContext } from '../import/userContext'
import Encabezado from './Encabezado'
import Cuerpo from './Cuerpo'

export function ContextText(){

    const [user, setUser] = useState<User>({
        id: 21241028719202,
        name: 'Juan del Cruz Gongora',
        company: 'Yakult',
        position: 'Comercializador internacional',
        qr: 'https://etirapid.com/wp-content/uploads/2021/03/codigo-qr.png',
        photo: 'https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123385.png'
    })

    return(
        <UserContext.Provider value={user}>
            <div className='TarjetaContainer'>
                <Encabezado/>
                <Cuerpo/>
            </div>
        </UserContext.Provider>
    )
}

export default ContextText