
const  obj = {
    name: '张三',
    age: 18,
    state: {text: "一些"}
}

// 方法一 模板渲染法
const header = componentFun(() => {
  /*
   <div>
     引入当前JS，可以将我放到所有页面
        <ul>
         <li>{{name}}</li>
         <li>{{age}}</li>
         <li>{{state.text}}</li>
        </ul>
   </div>
 */
});
let div = document.createElement("div")
div.innerHTML = '节点引入+模板渲染方式！我是引入的部分'+ header(obj)
document.body.insertBefore(div, document.body.lastChild)

// 模拟得到数据
const obj1 = [
    {
        name: '张三',
        age: 18,
        state: "一些"
    },
    {
        name: '张三',
        age: 18,
        state: "没有"
    },
    {
        name: '张三',
        age: 18,
        state: "更多"
    }
]

// 方法二  直接拼接 功能强，可配置好
!function () {
    let str = ""
    obj1.forEach((n, i) => {
     str +=  "<ul>"+
         "<li>"+n.name+i+"</li>"+
         "<li>"+n.age+i+"</li>"+
         "<li>"+n.state+i+"</li>"+
       "</ul>"
    })
    const domNode = "<div>"+
        "<p>-----节点引入+直接拼接渲染方式！我是引入的部分---引入当前JS，可以放到所有页面</p>"+
        str
        +"</div>"
    let div = document.createElement("div")
    div.innerHTML = domNode
  document.body.insertBefore(div, document.body.firstChild)
}()

