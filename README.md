vue的一些实践
vue的组件传参通信
父传子
1.props
demo01
2.$refs
demo02
3.children
demo03
子传父
emit on demo04
1.父亲自定义方法，然后儿子emit son1
2.把on和emit挂在儿子 son2
3.把on和emit挂在父亲 son3
区别：第一种方法可以放在mounted，二三不行，只能通过事件去触发
亲兄弟传参
兄弟1->emit 父亲
父亲->props兄弟2
demo05
2层以上传参
爷爷给孙子传参 
provide inject
demo06
vue的生命周期