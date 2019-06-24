import React from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;

class RemoteSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = debounce(this.handleSearch, 800);
      }
  state = {
    data: [],
    value: [],
    fetching: true,
    disabled: false
  };

  handleSearch = (value, datas) => {
    const length=value.length
    let data=datas.filter(item=> item.content.slice(0, length) === value)
    this.setState({ data, fetching: true })
   
  };
 

  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false
    });
  };

  render=()=> {
    const { fetching, data, value, disabled } = this.state;
    const { datas, style }= this.props
    return (
        <Select
          mode="multiple"
          labelInValue
          value={value}
          placeholder="Select users"
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={(e)=>this.handleSearch(e, datas)}
          onChange={this.handleChange}
          style={style}
        >
            {data.map(_=> (
                <Option key={_.id} disabled={disabled}>{_.content}</Option>
            ))}
        </Select>
    );
  }
}

//示例
export class AutoGetStaff extends React.Component {
 
    state={
      datas:[]
    }
    componentDidMount=()=>{
        this.getUsers()
    }
    getUsers=()=>{
        const res = [];
        const filedNameMap={
            userName: 'content',
            userId: 'id'

        }
        for (let i = 10; i < 36; i++) {
            res.push({userName:i.toString(36) + i, userId: i.toString(36)});
        }
        res.unshift({userName: '王慧茹', userId: 'huiru.wang' })
        const datas=res.map(item =>({
            [filedNameMap.userName] : item.userName ,
            [filedNameMap.userId] : item.userId
        }))
        this.setState({datas})
    }
    render(){
        const {datas}=this.state
        return(
            <RemoteSelect datas={datas}  style={{ width: 200 }}/>
        )
    }
}