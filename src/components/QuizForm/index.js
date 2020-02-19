import React, { Component } from 'react';
import './style.css';
class QuizForm extends Component {
    constructor(props){
        super(props);
        this.state={
            titleValue:'',
            contentValue:'',
            commentCount: 0,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.SendCancel = this.SendCancel.bind(this);
        this.SendConfirm = this.SendConfirm.bind(this);
    }
    handleInputChange(e){
        // 获取触发事件元素
        const target = e.target;
        // 获取文本框的值
        const value = target.value;
        // 获取触发事件元素的name值
        const name = target.name; 
        // 根据name值选择执行的操作
        this.setState({
            [name]: value
        })
    }
    SendCancel(e){
        this.setState({
            titleValue:'',
            contentValue:'',
        })
        e.preventDefault();
    }
    SendConfirm(e){
        const { addOneQuiz } = this.props;
        addOneQuiz(this.state);
        this.setState({
            titleValue:'',
            contentValue:'',
        })
        e.preventDefault(); 
    }
    render() { 
        return (
            <form className="QuizForm">
                <label htmlFor="QuizTitle">问题</label>
                <input value={this.state.titleValue} id="QuizTitle" name="titleValue" type="text" placeholder="问题标题" onChange={this.handleInputChange} />
                <textarea value={this.state.contentValue} cols="30" name="contentValue" rows="3" className="QuizContent" placeholder="问题内容" onChange={this.handleInputChange}></textarea>
                <div className="ButtonBox">
                    <button className="ButtonCancel" onClick={this.SendCancel}>取消</button>
                    <button className="ButtonConfirm" onClick={this.SendConfirm}>确定</button>
                </div>
            </form>
        );
    }
}
 
export default QuizForm;