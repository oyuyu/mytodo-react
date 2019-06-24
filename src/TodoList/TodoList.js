import React, {Component, Fragment} from 'react';
import {Select, Spin} from 'antd' 
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const Option=Select.Option

const res = [];
for (let i = 10; i < 36; i++) {
    res.push(i.toString(36) + i);
}
res.unshift('王慧茹')






let timeout;
let currentValue;

function fetch(value, callback) {
    let data=[]
    const matchLen=value.length
    data=res.filter(item=> item.slice(0,matchLen) === value)
    console.log(data);
    
    // callback()
 
  }






class SelectComp extends React.Component{
    state={
        data:[],
        value:undefined,
        fatch:false
    }


    handleSearch = value => {
        console.log(value);
        
        fetch(value, data => this.setState({ data }));
      };
    handleChange=(options)=>{
        this.setState(options)

    }
    render(){
        console.log(this.state.data);
        
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
        const {fetching}=this.state
        return(
            <Fragment>
                 <Select
                    mode="multiple"
                    style={{ width: '60%',margin:100 }}
                    placeholder="Please select"
                    defaultValue={[]}
                    // onChange={handleChange}
                    showSearch
                    // value={this.state.value}
                    // placeholder={this.props.placeholder}
                    // style={this.props.style}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={this.handleSearch}
                    onChange={this.handleChange}
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                 >
                     {options}
                     
                 </Select>
            </Fragment>
        )
    }

}


export default SelectComp