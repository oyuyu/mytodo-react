import React from 'react';
import { observable ,autorun, action} from 'mobx';
import { observer } from 'mobx-react'


const person = observable({
    name: "Clive Staples",
    lastName: "Lewis",
    age: 33,
    show: false,
    get labelText(){
        return this.show? `${this.name}(age:${this.sge})` : this.name
    },
    setAge(age){
        this.age=age
    }
},{
    setAge: action
});
autorun(()=>console.log(person.labelText))
person.setAge(21)

person.firstName = "C.S.";
console.log(person);
 


export default class App extends React.Component{
    render(){
        return(
            <div>mbox</div>
        )
    }
}