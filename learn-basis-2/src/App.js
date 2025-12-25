import { useRef, useState } from "react";
import "./comment.css";
import _ from "lodash"
import classNames from 'classnames'


function App() {

  const publish = () =>{
    setCommentList
    ([
      ...commentList,
        {
    id: 100,
    username: "MarvelousTangyuan",
    avatar: "https://i.pravatar.cc/50?img=1",
    content: content,
    time: "2025-09-01 10:23",
    like: 12
  }
    ])
    setContent('')
    contentRef.current.focus()
  }

  const contentRef = useRef(null)

  const [content, setContent] = useState('')

  const inputRef = useRef(null)

  const getDom = () => {
    console.log(inputRef.current)
  }

  const [value, setValue] = useState('')

  const handleChange = (value) =>{
    setValue(value)
  }

  const changeTab = (type) => {
    console.log(type)
    setType(type)
    if(type === 'hot'){
      // 最热排序
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    }else{
      // 最新排序
      setCommentList(_.orderBy(commentList, 'time', 'desc'))
    }
  }

  const [type, setType] = useState('hot')

  const tabs = [
  { type: 'new', text: '最新' },
  { type: 'hot', text: '最热' }
]


  const handleDel = (id) => {
    setCommentList(commentList.filter(item => item.id !== id))
  }

  const user = {
    userId : 1,
    username : 'MarvelousTangyuan'
  }

  const list = [
  {
    id: 1,
    username: "MarvelousTangyuan",
    avatar: "https://i.pravatar.cc/50?img=1",
    content: "这也太像哔哩哔哩评论区了吧！",
    time: "2025-09-01 10:23",
    like: 12
  },
  {
    id: 2,
    username: "张三",
    avatar: "https://i.pravatar.cc/50?img=2",
    content: "React 的 map 遍历终于懂了 👍",
    time: "2025-09-02 18:05",
    like: 5
  },
  {
    id: 3,
    username: "李四",
    avatar: "https://i.pravatar.cc/50?img=3",
    content: "这个练习对新手真的很友好",
    time: "2025-09-03 21:40",
    like: 23
  }
]


  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'));
  return (
    <div className="app">
      {/* 顶部评论导航 */}
<div className="reply-navigation">
  <div className="reply-title">评论</div>

  {/* 分类 Tab */}
  <div className="reply-tabs">
    {tabs.map(item => <span onClick={ 
      ()=> changeTab(item.type)} 
      key={item.type} 
      className={classNames('reply-tab', {active: type === item.type})}
       >
       
        {item.text}
      </span>)}
    
  </div>
</div>
<div className="reply-editor">
  {/* 用户头像 */}
  <div className="editor-avatar">
    <img
      src="https://i.pravatar.cc/50?img=1"
      alt=""
    />
  </div>

  {/* 输入区域 */}
  <div className="editor-main">
    <textarea
    onChange={(e) => setContent(e.target.value)}
    value={content}
    ref={contentRef}
      className="editor-textarea"
      placeholder="发一条友善的评论吧～"
      rows={4}
    />

    {/* 操作区 */}
    <div className="editor-actions">
      <span className="editor-tip">Ctrl + Enter 发送</span>
      <button onClick={publish} className="editor-submit">发布</button>
    </div>
  </div>
</div>


      {/* 评论区 */}
      <div className="reply-wrap">
        {/* 评论列表 */}
        <div className="reply-list">

          {/* ===== 评论项（你后面用 map 生成）===== */}
          {commentList.map(item => (
            <div key={item.id} className="reply-item">
            {/* 头像 */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img
                  className="bili-avatar-img"
                  src={item.avatar}
                  alt=""
                />
              </div>
            </div>

            {/* 内容区 */}
            <div className="content-wrap">
              {/* 用户名 */}
              <div className="user-name">{item.username}</div>

              {/* 评论内容 */}
              <div className="reply-content">
                {item.content}
              </div>

              {/* 底部信息 */}
              <div className="reply-footer">
                <span className="reply-time">{item.time}</span>
                <span className="reply-like">👍 {item.like}</span>
                <span className="reply-reply">回复</span>
                { user.userId === item.id &&
                 <span onClick={() => handleDel(item.id)} className="reply-reply">删除</span>}
                
              </div>
            </div>
          </div>
          ))}


          <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          ref={inputRef}
          />
          <button onClick={getDom}>获取dom</button>
          {/* ===== 评论项结束 ===== */}

        </div>
      </div>
    </div>
  );
}

export default App;
