const commentsObj = [
    {
        name: 'Micheal Lyons',
        timestamp: '12/18/2018',
        comment: `They BLEW the ROOF off at their
        last show, once everyone started
        figuring out they were going. This is
        still simply the greatest opening of a
        concert I have EVER witnessed.`
    },
    {
        name: 'Gary Wong',
        timestamp: '12/12/2018',
        comment: `Every time I see him shred I feel so
        motivated to get off my couch and
        hop on my board. He’s so talented! I
        wish I can ride like him one day so I
        can really enjoy myself!`
    },
    {
        name: 'Theodore Duncan',
        timestamp: '11/15/2018',
        comment: `How can someone be so good!!!
        You can tell he lives for this and
        loves to do it every day. Everytime I
        see him I feel instantly happy! He’s
        definitely my favorite ever!`
    }
];

const displayComment = commentObj => {
    
    const imagePlaceHolderDiv = document.createElement('div');
    imagePlaceHolderDiv.className = 'comment-author__image';

    const commentAuthorNameH4 = document.createElement('h4');
    commentAuthorNameH4.className = 'comment-author__name';
    commentAuthorNameH4.textContent = commentObj.name;

    const commentDateH4 = document.createElement('h4');
    commentDateH4.className = 'comment-date';
    commentDateH4.textContent = commentObj.timestamp;

    const commentTextP = document.createElement('p');
    commentTextP.className = 'comment-text';
    commentTextP.textContent = commentObj.comment;


    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    commentsDisplayedDiv.appendChild(imagePlaceHolderDiv);
    commentsDisplayedDiv.appendChild(commentAuthorNameH4);
    commentsDisplayedDiv.appendChild(commentDateH4);
    commentsDisplayedDiv.appendChild(commentTextP);
}

commentsObj.forEach(commentObj => {
    displayComment(commentObj);
});

const generateTodaysDate = () => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
}

const form = document.querySelector('#comment_form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const userCommentObj = {};

    userCommentObj.name = e.target.name.value;

    //generating today's date
    const currentDate = generateTodaysDate();
    userCommentObj.timestamp = currentDate;
    userCommentObj.comment = e.target.comment.value;
    commentsObj.unshift(userCommentObj);

    //clearing form fields
    form.reset();
    
    //clearing all comments from page
    const commentsDisplayedDiv = document.querySelector('.comments__displayed');
    while(commentsDisplayedDiv.firstChild) {
        commentsDisplayedDiv.removeChild(commentsDisplayedDiv.firstChild);
    }

    //display all comments 
    commentsObj.forEach(commentObj => {
        displayComment(commentObj);
    });

});