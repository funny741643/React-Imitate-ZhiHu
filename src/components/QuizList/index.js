import React, { Component } from 'react';
import QuizItem from '../QuizItem';
class QuizList extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { commentList,onVote } = this.props;
        console.log(commentList);
        return (  
            <div className="QuizList">
                {
                    commentList.map((item)=>
                        <QuizItem key={item.id} ItemData={item} onVote={onVote} />
                    )
                }    
            </div>  
        );
    }
}
 
export default QuizList;