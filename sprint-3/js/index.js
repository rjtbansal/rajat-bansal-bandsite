let commentsObj = [];
const myApiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const fetchComments = () => {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${myApiKey}`)
    //sorting by timestamp in descending order
     .then(res => {
        commentsObj = res.data;
        commentsObj.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
     })
     .then(() => {
        commentsObj.forEach(commentObj => {
            displayComment(commentObj);
        });
     })
     .catch(err => console.log(err));
}


const displayComment = commentObj => {
    const childDiv = document.createElement('div');
    childDiv.className = 'comments__subdiv';
    
    const imagePlaceHolderDiv = document.createElement('div');
    imagePlaceHolderDiv.className = 'comment-author__image';

    const commentAuthorNameH4 = document.createElement('h4');
    commentAuthorNameH4.className = 'comment-author__name';
    commentAuthorNameH4.textContent = commentObj.name;

    const commentDateH4 = document.createElement('h4');
    commentDateH4.className = 'comment-date';

    commentDateH4.textContent = new Date(commentObj.timestamp).toDateString()

    //delete: diving deeper
    const deleteCommentBtn = document.createElement('button');
    deleteCommentBtn.className = 'comment-delete-button';
    deleteCommentBtn.textContent = 'DELETE';
    deleteCommentBtn.addEventListener('click', e => {
        axios.delete(`https://project-1-api.herokuapp.com/comments/${commentObj.id}?api_key=${myApiKey}`)
            .then(res => {
                console.log(res);
                clearComments();
                fetchComments();
            })
            .catch(err => {
                    console.log(err)
            });
    });

    const likeCommentButton = document.createElement('button');
    likeCommentButton.className = 'comment-like-button';
    likeCommentButton.textContent = 'LIKE';

    //like comments: diving deeper. 
    let currentLikes = commentObj.likes;
    likeCommentButton.addEventListener('click', e => {
        axios.put(`https://project-1-api.herokuapp.com/comments/${commentObj.id}/like?api_key=${myApiKey}`, {
            likes: currentLikes++
        })
        .then(res => {
                  console.log(res.data); //this response object will have number of likes
        })
        .catch(err => {
            console.log(err);
        })
    });

    const commentTextP = document.createElement('p');
    commentTextP.className = 'comment-text';
    commentTextP.textContent = commentObj.comment;

    const borderDiv = document.createElement('div');
    borderDiv.className = 'comment-border';

    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    commentsDisplayedDiv.appendChild(childDiv);
    childDiv.appendChild(imagePlaceHolderDiv);
    childDiv.appendChild(commentAuthorNameH4);
    childDiv.appendChild(commentDateH4);

    commentsDisplayedDiv.appendChild(commentTextP);
    commentsDisplayedDiv.appendChild(deleteCommentBtn);
    commentsDisplayedDiv.appendChild(likeCommentButton);
    commentsDisplayedDiv.appendChild(borderDiv);

}

const clearComments = () => {
    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    while(commentsDisplayedDiv.firstChild) {
        commentsDisplayedDiv.removeChild(commentsDisplayedDiv.firstChild);
    }
}

fetchComments();

const form = document.querySelector('#comment_form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const userCommentObj = {};
    userCommentObj.name = e.target.name.value;
    userCommentObj.comment = e.target.comment.value;
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myApiKey}`, {
        name: userCommentObj.name,
        comment: userCommentObj.comment,
    })
    .then(res => {
       fetchComments();
    })
    .catch(err => {
        console.log(err);
    })

    //clearing form fields
    form.reset();
    
    //clearing all comments from page
    clearComments();

});



