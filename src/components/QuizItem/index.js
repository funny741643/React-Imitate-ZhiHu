import React, { Component } from 'react';
import './style.css';
class QuizItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            up: false,
            down: false
        }
        this.handlePraise = this.handlePraise.bind(this);
        this.handleSneer = this.handleSneer.bind(this);
    }
    handlePraise(e){
        const { onVote,ItemData } = this.props;
        if(this.state.up === false){
            onVote(ItemData.id,ItemData.commentCount+1);
        }
        this.setState({
            up: true,
            down: false
        });
    }
    handleSneer(e){
        const { onVote,ItemData } = this.props;
        if(this.state.down === false){
            onVote(ItemData.id,ItemData.commentCount-1);
        }
        this.setState({
            up: false,
            down: true
        })
    }

    render() { 
        const { ItemData }= this.props
        return (  
            <div className="QuizItem">
                <div className="QuizDetail">
        <div className="QuizDetail-Title">{ItemData.titleValue}</div>
        <div className="QuizDetail-Content">{ItemData.contentValue}</div>
                </div>
                <div className="Comment">
                    <span className="Comment-praise" onClick={this.handlePraise}>赞</span>
                    <span className="Comment-sneer" onClick={this.handleSneer}>踩</span>
        <span className="Comment-count">{ItemData.commentCount}</span>
                </div>
            </div>
        );
    }
}
 
export default QuizItem;