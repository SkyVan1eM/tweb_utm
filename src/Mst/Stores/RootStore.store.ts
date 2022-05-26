import {applySnapshot, types} from "mobx-state-tree";
import {ContentModel} from "../Models/Content.model";

const RootStore =types.model('RootStore',{
    contents:types.array(ContentModel),
    content_notes_array:types.array(types.safeReference(ContentModel))
})
    .actions((self)=>({
        setDatainLocalStorage(value:string){
            localStorage.setItem('StringState',JSON.stringify(value))
        },
        getDatafromLocalStorage(key:string ='StringState'){
            return localStorage.getItem(key)
        },
        removemyLocalStorage(key:string ='StringState'){
            localStorage.removeItem(key)
            console.log(`>>${key} a fost sters`)
        },

    }))

    .actions((self)=>({
        setInitialStorageValue() {
            const obj={
            }
            let arr=new Array(" ")
            self.setDatainLocalStorage(JSON.stringify(self.contents.pop()?.description))
            console.log(JSON.stringify(self.contents.pop()?.description))
        },
        addNote(id: string) {
            self.content_notes_array.push(id)
        },
        removeNote(id: string) {
            const updatesNotes = self.content_notes_array.filter((content) => {
                if (content?.id !== id) {
                    return true
                } else {
                    return false
                }


            })

            // @ts-ignore
            applySnapshot(self.content_notes_array,updatesNotes)
        }
    }))
export default RootStore