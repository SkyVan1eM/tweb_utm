import { Row } from 'antd';
import CustomCard from './CustomCard';

const description = [
    {
        id: 1,
        title: "Cardul de titlu 1",
        description: "description"
    },
    {
        id: 2,
        title: "Cardul de titlu 2",
        description: "description"
    },
    {
        id: 3,
        title: "Cardul de titlu 3",
        description: "description"
    },
    {
        id: 4,
        title: "Cardul de titlu 4",
        description: "description"
    },
    {
        id: 5,
        title: "Cardul de titlu 5",
        description: "description"
    },
    {
        id: 6,
        title: "Cardul de titlu 6",
        description: "description"
    },
]


function Mycontent() {
    return (

        <Row gutter={16} >
            {
                description.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} description={element.description}/>
                    )
                })
            }
        </Row>
    )
}

export default Mycontent