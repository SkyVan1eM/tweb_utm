import {IContentModel} from "../interface/Interfaces";
import {Avatar, List} from "antd";

export const NoteValue=({content}:{content:IContentModel})=>{
    return(
        <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={content.title}
            description={content.notite}
        />

    )
}