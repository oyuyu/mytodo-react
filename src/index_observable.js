import { observable, isArrayLike } from 'mobx'
// isArrayLike 用于判断是否为类数组 ---- mox提供

// observable对数据的监视分为两种类型
// 1.对数组、纯对象、map直接把observable当做函数把变量变成可观察的对象   之后对数组、对象、map内部的数据进行合理的操作都会被监视
// 2.其他类型（number,string,boolean等）要调用 observable.box将变量变为可观察对象  之后对该变量直接赋值将会被监视(实现的是对其他变量类型整体赋值的监控，对变量本身进行监控)


//arry
//被监听后 arry返回的不再是数组  而是一个类数组 模拟了数组的大部分功能   但是不要使用下标越界访问数组成员
const array=observable ([1,2,34])
console.log(array,Array.isArray(array),isArrayLike(array));


//object
//返回一个可被观察对象
const object = observable({a:1, b:2})
//监视新增加的属性   使用extendObservable
//故最佳实践是在初始化的时候就声明所有可能使用到的属性

//map
const map = observable(new Map)
map.set('a',11)
console.log(map.has('a'));

// number

const num =observable.box(20)
console.log(num);
// 修改原始类型值
num.set(55)

//获取原始类型值 get
console.log(num.get());




