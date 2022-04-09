import {Card, Checkbox, Col, Input} from 'antd'
import { IContentModel} from "../interface/Interfaces";
import {useRootStore} from "../index";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
//CustomCard
export const CustomCard=observer(({content}:{content:IContentModel}) => {

        const {title,description,notite,changeNotes,isSeen,changeSeen} =content
        useEffect(()=>{
            if(isSeen) {
                alert(`Is seen ${ title }`)
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

            </Card>


        )
    }
)