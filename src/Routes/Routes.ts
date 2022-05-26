import { v4 as uuid } from 'uuid'

export const ROUTES = [
    {
        id: uuid(),
        path: '/home',
        name: 'Home'
    },
    {
        id: uuid(),
        path: '/cards',
        name: 'Cards'
    },
    {
        id: uuid(),
        path: '/formlogin',
        name: 'FormLogin'
    }
]