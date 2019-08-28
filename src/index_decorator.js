//定义修饰类的修饰器
function log(target){    //target表示被修饰的类-Numric
    // 在target类中找到所有的方法成员   获取所有的成员签名
    const descrips=Object.getOwnPropertyDescriptors(target.prototype)
    // 获取所有的成员名称
    for (const key of Object.keys(descrips)){
        //忽略构造方法
        if(key==='constructor'){
            continue;
        }
        const func=descrips[key].value
        //过滤函数类型
        if(typeof func ==='function'){
            // 重新定义该属性
            Object.defineProperty(target.prototype, key,{
                value(...args){
                    // console.log(key,'before');
                    // 调用原函数定义
                    const rst=func.apply(this,arguments)
                    // console.log(key,'after');
                    return rst
                    
                }
            })

        }


    }


}
// 定义类属性成员的修饰器   ----error
function readOnly(target,key,desc){    //target类实例对象  key类成员名  desc类成员的描述符
    desc.writable=false;
    console.info(desc,' ---')
    return desc
}

// 定义类方法成员的修饰器
function validate(target,key,desc){
    console.log(target,key);
    // target指向原型对象    
    
    const {value}= desc
    // 复写描述符的value
    desc.value=function(...args){
        // 遍历入参
        for (let num of args){
            //检查入参的类型
            if(typeof num !=='number'){
                throw new Error()
            }
        }
        //如果传入的参数是合法的  返回原定义的函数
        return {
            ...desc,
            value
        }
    }
}

@log
class Numric{
    @readOnly PI=3.14;        //对类属性成员使用装饰器   无效
    // PI=3.14
    @validate
    add(...nums){
        let pre=3
        return nums.reduce((pre,curr)=>pre+curr,0)
    }
}

//生成实例   调用add
let a = new Numric()
a.add(3,4)
// console.info(a, '--')
// new Numric().add(3,4)






