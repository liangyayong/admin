import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// const tit = <p>我是p标签</p>
// const list = [{
//     id:1,name:'jock'
// },
// {
//     id:2,name:'tom'
// },{
//     id:3,name:'jm'
// },{
//     id:4,name:'js'
// }]
// const title = (<ul className='ul'>{
//    list.map(item=><li key={item.id}>{item.name}</li>)
// }
    
// </ul>)
// - 需求：实现评论列表功能
// - 1 如果有评论数据，就展示列表结构 li（ 列表渲染 ）
//   - name 表示评论人，渲染 h3
//   - content 表示评论内容，渲染 p
// - 2 如果没有评论数据，就展示一个 h1 标签，内容为： 暂无评论！
// - 3 根据自己的喜好添加样式
const list = [
    { id: 1, name: 'jack', content: 'rose, you jump i jump' },
    { id: 2, name: 'rose', content: 'jack, you see you, one day day' },
    { id: 3, name: 'tom', content: 'jack,。。。。。' },
    { id: 4, name: 'tim', content: 'jack,。。升水。。。' },
    { id: 5, name: 't11', content: 'jack,。。问问。。。' },
  ]
//   第一种方法
  const fn= ()=>{
      if (list.length>0) {
        return   <ul className='ul'>{
              list.map(item=><li key={item.id}> <h3>评论人:{item.name}</h3>
               <p>评论内容:{item.content}</p>
              </li>)
          }</ul>   
      }else{
        return <h1> 暂无评论</h1>
      }
  }
  const title = <div className='app'>{fn()}</div>
  const ll = div
// const li = (<ul className='ul'>{
//     list.map(item=><li key={item.id}>
//         <h3> 评论人:{item.name}</h3>
//         <p> 评论内容：{item.content}</p>
//     </li>)
// }</ul>)
// const li2 =(
//     <h1>站务评论</h1>
// )
// const isshow = list.length>0
//   const title = <div className='app'>{isshow? li: li2}</div>

ReactDOM.render(title,document.getElementById('root'))