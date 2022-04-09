import {types} from "mobx-state-tree";

export const  ContentModel = types.model('ContentModel',{
    id:types.identifier,
    title:'',
    description:'',
    seen:false,
    notite:'',
})
    .views((self) =>({
        get isSeen(){
            return self.seen
        },
        FindInTitle(param:any){
            self.title.includes(param)
        }
    }))
    .actions((self) => ({
        changeNotes(value:string){
            self.notite =value
        },
        changeSeen(state:boolean){
            self.seen =state
        }
    }))