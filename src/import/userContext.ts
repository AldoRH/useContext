import { createContext } from "react";

export interface User{
    id: number,
    name: string,
    company: string,
    position: string,
    qr: string,
    photo: string
}

export const UserContext = createContext<User>({
    id: 1234,
    name: 'xxxxx',
    company: 'Yakult',
    position: 'Comercializador internacional',
    qr: 'xxxxx',
    photo: 'xxxx'
})