import {Instance} from "mobx-state-tree";
import RootStore from "../Mst/Stores/RootStore.store";
import {ContentModel} from "../Mst/Models/Content.model";

export  interface  IRootStore extends  Instance<typeof RootStore>{

}
export  interface  IContentModel extends  Instance<typeof ContentModel>{

}