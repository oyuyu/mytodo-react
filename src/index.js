import { observable, isArrayLike, computed, autorun, when } from 'mobx'

class Store{
    // 在类里面声明各个可被观察的属性   @observable:将状态变量转化为可观察的数据
    // 全都使用   会识别出是被当做普通函数调用的还是当做修饰器调用的   作为修饰器会自动识别变量类型 并使用不同的包装转换方案

    @observable array = []
    @observable object = {}
    @observable map = new Map
    @observable num = 20
    @observable string = 'age'
    @observable bool = true
// computed更多情况下是作为decorator来修饰类的get属性成员的
    @computed get mixed(){
        return `${store.string}:${store.num}--mixed`
    }
    
    


}
// 如何知道对象被修改了---如何对可观察的数据作出反应 ---监视变量的更改并执行自定义的逻辑  computed autorun when reaction

//computed 将其他可观察数据以想要的方式组合起来变成新的可观察数据
// 功用：
// 1.从其他可观察数据的角度来看  computed是对可观察数据的反应  （一般角度）
// 2.从使用computed值得角度来看  computed是一个可观察数据

// 使用
// computed可引用普通可观察数据   还可嵌套引用其他computed值   但不能循环引用

var store = new Store()
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

// func1返回一个boolean   为true时
when(()=>store.bool)








