import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Hello world!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 6:00AM"
                    content="Nice Blog!"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 3:35PM" 
                    content="I want to sleep!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard> 
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))