let commentsObj = [];
const myApiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const fetchComments = () => {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${myApiKey}`)
     .then(res => {
        commentsObj = res.data;
        commentsObj = commentsObj.reverse();
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
    commentDateH4.textContent = new Date(commentObj.timestamp).toDateString();

    const commentTextP = document.createElement('p');
    commentTextP.className = 'comment-text';
    commentTextP.textContent = commentObj.comment;

    const borderDiv = document.createElement('div');
    borderDiv.className = 'show__border';
    borderDiv.style.borderBottom = '2px solid lightgray';
    borderDiv.style.marginBottom = '1rem';

    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    commentsDisplayedDiv.appendChild(childDiv);
    childDiv.appendChild(imagePlaceHolderDiv);
    childDiv.appendChild(commentAuthorNameH4);
    childDiv.appendChild(commentDateH4);
    commentsDisplayedDiv.appendChild(commentTextP);
    commentsDisplayedDiv.appendChild(borderDiv)
}

const generateTodaysDate = () => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
}

fetchComments();

const form = document.querySelector('#comment_form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const userCommentObj = {};

    userCommentObj.name = e.target.name.value;

    //generating today's date
    const currentDate = generateTodaysDate();
    userCommentObj.timestamp = currentDate;
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
    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    while(commentsDisplayedDiv.firstChild) {
        commentsDisplayedDiv.removeChild(commentsDisplayedDiv.firstChild);
    }

});