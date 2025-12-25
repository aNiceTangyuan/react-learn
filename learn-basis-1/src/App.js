import { useState } from "react";
import './index.css'

const count1 = 100

const list = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" }
]

function getNickname() {
  return "MarvelousTangyuan";
}

const flag = true

const isLogin = false

const articleType = 1 // 0 1 2

function getArticleType(){
  if(articleType === 0){
    return '无图文章'
} else if(articleType === 1){
    return '单图文章'
} else {
    return '多图文章'
}
}

const handleClick = (e) => {
  console.log('按钮被点击了', e);
}

// 组件

function Button() {
  return <button>组件按钮</button>
}
// const Button = () => {
//   return <Button>组件按钮</Button>
// }

  // 样式
  const style = {
    color:'blue',
    fontSize:'30px'
  }

function App() {

      const [count, setCount] = useState(0)

const addCount = () => {
  setCount(count + 1)
}

  // 修改状态的规则
  const [name, setName] = useState({ nickname: 'tyh'})

  const changeName = () => {
    setName({
      ...name,
      nickname: 'tttt'
    })
  }

  return (
    <div className="App">
      <h1>Learn Basis 1</h1>
      {/* 识别js表达式 */}

      {/* 引号传递字符串 */}
      {'hello world'}

      {/* 识别js变量 */}
      {count1}

      {/* js函数调用 */}
      {getNickname()}

      {/* 方法调用 */}
      {new Date().getDate()}

      {/* 使用js对象 */}
      <h2 style={{color:'red'}}>halo MarvelousTangyuan</h2>

      {/* 渲染列表 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {/* 条件渲染：逻辑与&& 和 三元运算符 */}
      {flag && <h2>Tangyuan</h2>}
      {isLogin ? <h2>MarvelousTangyuan</h2> : <h2>未登录</h2>}

      {getArticleType()}

      {/* 事件绑定 */}
      <button onClick={(e) => handleClick(e, 'MarvelousTangyuan')}>点我</button>

    {/* 组件调用 成对标签 */}
      <Button></Button>

      {/* 组件调用 自闭合标签 */}
      <Button />

    <button onClick={addCount}>{count}</button>

    <button onClick={changeName}>修改name:{name.nickname}</button>

    <span style={{color:'red', fontSize:'50px'}}>this is a span</span>

    <span style={style}>this is another span</span>

    <h2 className="h2">this is a h2</h2>

    </div>
  );
}

export default App;
