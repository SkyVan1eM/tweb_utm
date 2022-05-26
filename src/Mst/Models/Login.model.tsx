import { getParent, getParentOfType, types } from 'mobx-state-tree';
import { LoginStore } from '../Stores/Login.store';

export const LoginModel = types.model('LoginModel', {
    id: types.identifier,
    user: '',
    password: ''
})