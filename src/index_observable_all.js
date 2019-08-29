// 可观察数据->修改可观察数据->对可观察数据的反应
// 状态数据管理工具



import { observable, isArrayLike, computed, autorun, when, reaction, action,runInAction } from 'mobx'
// 对于多处重复调用的修改状态逻辑使用action实现复用
class Store{
    // 在类里面声明各个可被观察的属性   @observable:将状态变量转化为可观察的数据
    // 全都使用   会识别出是被当做普通函数调用的还是当做修饰器调用的   作为修饰器会自动识别变量类型 并使用不同的包装转换方案

    @observable array = []
    @observable object = {}
    @observable map = new Map
    @observable num = 20
    @observable string = 'age'
    @observable bool = false
    // computed更多情况下是作为decorator来修饰类的get属性成员的
    @computed get mixed(){
        return `${store.string}:${store.num}--mixed`
    }
    // 每次修改都会触发副作用 高频的修改没必要   解决方案：action
    // action   任何修改状态的行为   将多次修改状态的行为合并为一次，从而减少触发autorun...
    // ation.bound  把被修饰方法的上下文强制绑定到该对象   将方法作为callback传给其他对象时使用
    // action/action.bound要绑定在预先定义的方法上
    @action bar(){
        this.string = 'hello'
        this.num = 88
    }
    // 语法糖runInAction  允许随时定义匿名的action并运行
}

var store = new Store()

// 直接将对可观察数据的修改放在runInAction包裹的方法中
runInAction('modify',()=>{
    store.string = 'hello'
    store.num = 88
})


// 如何知道对象被修改了---如何对可观察的数据作出反应 ---监视变量的更改并执行自定义的逻辑  computed autorun when reaction

//computed 将其他可观察数据以想要的方式组合起来变成新的可观察数据（将多个可观察数据组合成一个可观察数据）
// 功用：
// 1.从其他可观察数据的角度来看  computed是对可观察数据的反应  （一般角度）
// 2.从使用computed值得角度来看  computed是一个可观察数据

// 使用
// computed可引用普通可观察数据   还可嵌套引用其他computed值   但不能循环引用
// 传给computed一个无参数的函数   函数内部引用其他可观察数据
var foo=computed(function(){
    return `${store.string}:${store.num}---computed`
})
console.log(foo.get());
// 为监视到数据的变化---在返回的computed对象上调用observe方法   
// 数据一旦变化都会被调用一次
foo.observe(function(change){  //需要入参change   change本身存储了修改前后的值
    console.log(change);  
})

store.num=18


//autorun（在可观察数据被修改之后 自动执行依赖可观察数据的行为(传入autorun的函数)） 
// 关注点：
// 1.自动运行什么---自动运行传入aurorun的参数   
// 2.怎么触发自动运行---autorun中引用的任意可观察数据发生变化就会触发autorun执行

autorun(()=>{
    console.log(`${store.string}:${store.num}----autorun`);
    // 说明computed方法是可以zuo
    console.log(`${store.mixed}----autorun`);
    
    
})
store.num=16

// when(func1, func2)    
// func1 根据可观察数据返回一个bool值   为true时执行第二个函数 (执行一次)
// 注意点：
// 1.func1必须根据可观察数据返回bool值
// 2.func1开始就返回真，func2立即执行
when(()=>store.bool,()=>console.log(store.bool))
store.bool=false
// store.bool=true


//reaction(func1,func2)   初始化阶段 func1会被执行一次  mobx便知道有哪些可观察数据被引用了  不必执行副作用就能建立起副作用与可观察数据之间的联系
// func1的返回值作为func2的参数
// 分离可观察数据声明 以副作用的方式对autorun作出改进
//场景：在没有数据之前不想也不必调用写缓存的逻辑   实现数据在第一次被填充之后启用写缓存的逻辑
reaction(()=>[store.string,store.num],arr => console.log(arr.join(':'),'------reaction'))

store.string='money'
store.num=1000000000000
  





store.bar()


