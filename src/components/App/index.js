import React, { Component } from 'react';
// 引入头部组件
import Header from '../Header';
import './App.css';
import QuizForm from '../QuizForm';
import QuizList from '../QuizList';
class App extends Component {
    constructor(props){
        super(props);
        const data = [
          { 
            id:'1',
            titleValue:'我是标题',
            contentValue:"狼的欲望永远也不会得到满足，我们只能坚决与恶狼做殊死搏斗。朋友来了有好酒，豺狼来了有猎枪！狼的贪婪本质告诉我们在狼面前寻求妥协纯粹是一厢情愿。对于那些十恶不赦、不知悔改的强盗国家继承者，我们千万不要再如历史上一样一味地忍让。如果狼来了，那就拿起猎枪吧！",
            commentCount: 20
          },
          { 
            id:'2',
            titleValue:'我又是标题',
            contentValue:"狼的欲望永远也不会得到满足，我们只能坚决与恶狼做殊死搏斗。朋友来了有好酒，豺狼来了有猎枪！狼的贪婪本质告诉我们在狼面前寻求妥协纯粹是一厢情愿。对于那些十恶不赦、不知悔改的强盗国家继承者，我们千万不要再如历史上一样一味地忍让。如果狼来了，那就拿起猎枪吧！",
            commentCount: 18
          },
        ];
        this.state = {
          data: data,
        }
        this.addOneQuiz = this.addOneQuiz.bind(this);
        this.onVote = this.onVote.bind(this);
        this.isDisPlay = this.isDisPlay.bind(this);
    }
    addOneQuiz(newQuiz){
        newQuiz.id = this.state.data.length + 1;
        this.setState({
          // concat不会修改原数组，push会修改原数组
          data: this.state.data.concat(newQuiz)
        })
    }
    onVote(id,count){
        const QuizData = this.state.data;
        QuizData.map((item)=>{
            if(item.id === id){
                item.commentCount = count;
            }
        });
        this.setState({
            data: QuizData
        })
    }
    isDisPlay(param){
        if(param===false){
            document.getElementsByClassName('Question')[0].style.display = 'none';
        } else{
          document.getElementsByClassName('Question')[0].style.display = 'block';
        }
    }
    render() { 
        return (
          <div className="App">
            <Header isDisPlay={this.isDisPlay} />
            <div className="Question" >
                <QuizForm addOneQuiz = {this.addOneQuiz} />
            </div>
            <QuizList commentList={this.state.data} onVote = {this.onVote} />
          </div>
        );
    }
}
 
export default App;


