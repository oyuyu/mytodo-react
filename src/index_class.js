
// ---------------实现类的继承与多态1---------------------
function Animal(){}
function Dog(){}
//为Animal的原型对象 定义/修改新的属性
Object.defineProperties(Animal.prototype,{
    name:{
        value(){
            return 'Animal'
        }
    },
    say:{
        value(){
            return `yyy${this.name()}`
        }
        
    }

})
// document.write(new Dog().say())   //
//实现Dog继承Animal    Dog instanceof Animal=true
//
//dog.__proto__===Dog.prototype
//Dog.__proto__===Animal.prototype

//多态的实现
Dog.prototype=Object.create(Animal.prototype, {//Dog继承Animal   Dog的实例一定可以访问到Animal的方法
    //不定义constructor属性    Dog.prototype.constructor指向Animal---------wrong
    constructor:{
        value:Dog,
        enumerable:false,   //constructor属性是不可枚举的  要设置为false
    },
    name:{
        value(){
            return 'Dog'
        }
    }
})  
document.write(new Dog().say())
console.log(new Dog() instanceof Animal);




// ---------------------实现类的继承2--------------------

class People{
    // 在类中直接定义方法
    name(){
        return 'yuyu'
    }
    say(){

        return `i'm ${this.name()}`
    }
}

//继承
class W extends People{
    //定义属性
    age=18
    name(){
        return '阿k'

    }
}

const whr=new W
document.write(whr.say())
document.write(whr.age)



