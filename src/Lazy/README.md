懒加载

---------------------------------
Lazy( ()=>import('xxxxxxx') )

----------------------------------
Suspense组件
<Suspense fallback={<div>Loading...</div>}>   <>


{/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素。可以将 Suspense 组件置于懒加载组件之上的任何位置。可以用一个 Suspense 组件包裹多个懒加载组件。 */}
