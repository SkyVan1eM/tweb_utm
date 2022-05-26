import { LoginStore } from "./Login.store";

export const loginStore = LoginStore.create({
    contents:[
        {
            id: '1',
            user: 'q',
            password: 'q'
        },
        {
            id: '2',
            user: 'Paduraru',
            password: 'vadim123'
        }
    ]
})