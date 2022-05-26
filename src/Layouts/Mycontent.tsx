import {Breadcrumb, Row,List} from 'antd';
import {CustomCard} from './CustomCard';
import {useRootStore} from "../index";
import {IContentModel} from "../interface/Interfaces";
import {NoteValue} from "../Notes/NoteValue";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";



export  const  Mycontent = observer(() => {
    const {contents,content_notes_array} = useRootStore()
    // console.log(">>root_store",contents)
    useEffect(() => {
        console.log('>>content_notes_array', content_notes_array)
    }, [ content_notes_array ])
    return (

        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row>
                {contents.map((content:IContentModel) => {
                    return (
                        <CustomCard key={content.id} content={content}/>
                    )
                } )}

            </Row>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={content_notes_array}
                    renderItem={(content:any)=> (
                        <List.Item>
                            <NoteValue key={content.id} content={content}/>
                        </List.Item>
                    ) }
                />
            </div>
        </div>






    )
    }

)