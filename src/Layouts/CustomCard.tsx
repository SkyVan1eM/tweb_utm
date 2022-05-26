import {Button, Card, Checkbox, Col, Input} from 'antd'
import { IContentModel} from "../interface/Interfaces";
import {useRootStore} from "../index";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
//CustomCard
export const CustomCard=observer(({content}:{content:IContentModel}) => {

        const {title,description,notite,changeNotes,isSeen,changeSeen,addNoteValue,removeNote} =content
        useEffect(()=>{
            if(isSeen) {
                console.log(`Is seen ${ title }`)
            }
        },[isSeen])
        return (

            <Card title={title} bordered={false}>
                {description}
                <Input value={notite}
                       placeholder={notite}
                       onChange={(e)=>changeNotes(e.target.value)}
                />
                <Checkbox defaultChecked={ isSeen } checked={isSeen} onChange={(e)=>changeSeen(e.target.checked)}/>
                <Button onClick={addNoteValue}>Add value</Button>
                <Button type={'primary'} onClick={removeNote}>Remove value</Button>
            </Card>


        )
    }
)


