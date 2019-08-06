import React, { Fragment } from 'react';
import { Form, Input, Select, Modal } from 'antd';

const {Option} = Select ,
      {TextArea}= Input;

class CustomizedForm extends React.Component{
    state={
        visible: true,
        reasons: ''
    }
    handleChange=(e)=>{
        const { reasons }=this.state
        const { setFieldsValue } =this.props.form;
        this.setState({
            reasons:`${reasons}
${e}`
        },()=>setFieldsValue({'wechatDesc': this.state.reasons})
        )
        
        
        
    }
    getReasons=(e)=>{
        let reasons=e.target.value
        console.log(e.target.value);
        this.setState({reasons:reasons})
    }

    content=()=>{
        const { getFieldDecorator } =this.props.form;
        const formItemLayout = {
            labelCol: { span: 5},
            wrapperCol: { span: 16 }
        };
        return (
            <Form {...formItemLayout} >
                <Form.Item label="拒绝理由" >
                    {getFieldDecorator('rejectReason', {
                        rules: [{ required: true, message: 'rejectReason is required!' }],
                    })(
                        <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="拒绝原因"
                        //   optionFilterProp="children"
                        onChange={this.handleChange}
                        >
                            <Option value="拒绝理由1">拒绝理由1</Option>
                            <Option value="拒绝理由2">拒绝理由2</Option>
                            <Option value="拒绝理由3">拒绝理由3</Option>
                            <Option value="拒绝理由4">拒绝理由4</Option>
                            <Option value="拒绝理由5">拒绝理由5</Option>
                            <Option value="拒绝理由6">拒绝理由6</Option>
                            <Option value="拒绝理由7">拒绝理由7</Option>
                                
                        </Select>
                    )}
                </Form.Item>
                <Form.Item style={{marginTop: 15}}>
                    {
                    getFieldDecorator('wechatDesc', {
                        rules: [{ required: true, message: '拒绝原因信息不可为空！' }]
                    })(
                        <TextArea
                            autosize={{minRows: 4, maxRows: 4}}
                            placeholder="请填写拒绝原因 0/200"
                            maxLength={200}
                            onChange={this.getReasons}
                        />
                    )
                    }
                </Form.Item>
            </Form>
        )
    }
    render(){
        return(
            <Modal
                visible={this.state.visible}
                title='审核拒绝'
            >
                {this.content()}
            </Modal>
        )
    }
}
const RefuseModal=Form.create()(CustomizedForm)
export default RefuseModal
