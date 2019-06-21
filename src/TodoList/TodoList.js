import React, {Component, Fragment} from 'react';
import {Select, Spin} from 'antd' 
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const Option=Select.Option

const res = [];
for (let i = 10; i < 36; i++) {
    res.push(i.toString(36) + i);
}
res.unshift(王慧茹)






let timeout;
let currentValue;

function fetch(value, callback) {
    // if (timeout) {
    //   clearTimeout(timeout);
    //   timeout = null;
    // }

    const matchLen=value.length
    console.log(value.slice(0,matchLen)===value);
    
    // res.filter(item=> item.slice(0,matchLen) === value)
    // console.log(res);
    

  
    // function fake() {
    //     const data = [];
    //     res.forEach(r => {
    //       data.push({
    //         value: r[0],
    //         text: r[0],
    //       });
    //     });
    //     callback(data);
    // }
  
    // timeout = setTimeout(fake, 300);
  }

// function fetch(value, callback) {
//     if (timeout) {
//       clearTimeout(timeout);
//       timeout = null;
//     }
//     currentValue = value;
//     console.log(currentValue);
    
  
//     function fake() {
//       const str = querystring.encode({
//         code: 'utf-8',
//         q: value,
//       });
//       jsonp(`https://suggest.taobao.com/sug?${str}`)
//         .then(response => response.json())
//         .then(d => {
//           if (currentValue === value) {
//             const result = d.result;
//             console.log(result);
            
//             const data = [];
//             result.forEach(r => {
//               data.push({
//                 value: r[0],
//                 text: r[0],
//               });
//             });
//             callback(data);
//           }
//         });
//     }
  
//     timeout = setTimeout(fake, 300);
//   }

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