import { Instance } from "mobx-state-tree";
import { LoginModel } from "../Mst/Models/Login.model";
import { LoginStore } from "../Mst/Stores/Login.store";

export interface ILoginStore extends Instance<typeof LoginStore>{
}
export interface ILoginModel extends Instance<typeof LoginModel>{
}