import {Form, Input, Button, Menu} from 'antd';
import {useEffect, useState} from "react";
import {integer} from "mobx-state-tree/dist/types/primitives";
import {FastBackwardOutlined} from "@ant-design/icons";
export const FormLayout =() =>{

    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[phone,setPhone]=useState('')
    const[i,seti]=useState('')
    const ShowResult =()=>{
        alert('Input:'+i)
    }

    useEffect(() =>{

        },[]
    )

    return(

        <Form
            name="wrap"
            labelCol={{ flex: '100px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
        >

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Username" name="username" rules={[{ required: true }]}>
                <Input value={username} onChange={(e )=> setusername(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Email" name="Email" rules={[{ required: true }]}>
                <Input value={email}  onChange={(e )=> setemail(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Phone"  name="Phone"   rules={[{ required: true }]}>
                <Input  type="number" value={phone} onChange={(e )=> setPhone(e.target.value)}
                        style={{ width: '40%'}}
                />
            </Form.Item>
            <Form.Item style={{paddingLeft:'500px'}}
                       label="inputvalue"  name="inputvalue"   rules={[{ required: true }]}>
                <input value={i} onChange={(e)=>seti(e.target.value)}
                />
            </Form.Item>

            <Form.Item label=" ">

                <Button style={{ width:'15%',
                    marginLeft:'40%',
                    marginRight:'25%'}}
                        onClick={ShowResult}  type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>
        </Form>
    )
}



