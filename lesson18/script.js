const BASE_URL = 'https://jsonplaceholder.typicode.com';

const containerForAllPosts = document.createElement('div')
const postsRequest = new XMLHttpRequest();
postsRequest.responseType = 'json';
postsRequest.open('GET', `${BASE_URL}/posts`);
postsRequest.send();

const hideComments = (div) => {
    let comments = div.lastElementChild;
    comments.remove()
}

const showComments = (comments, div) => {
    const textContainer = document.createElement('div');

    comments.forEach((obj) => {
        let {body: comment} = obj;

        const paragraph = document.createElement('p');
        paragraph.classList.add('comment-container');
        paragraph.innerText = comment;

        textContainer.append(paragraph)

    });

    div.append(textContainer)
    
}

const getPostComments = (id, event) => {
    const commentsXHR = new XMLHttpRequest();
    commentsXHR.open('GET', `${BASE_URL}/posts/${id}/comments`);
    commentsXHR.responseType = 'json';

    commentsXHR.send()

    let btn = event.target;
    let parent = btn.parentNode;

    commentsXHR.onload = () => {
        let {response} = commentsXHR;
        if(button.innerText === 'Show comments'){
            button.innerText = 'Hide comments'
            showComments(response, parent)
        } else {
            button.innerText = 'Show comments';
            hideComments(parent)
        }
    } 
}

const postRender = (list, container) => {
    const posts = list.map((post) => {
        const containerForPost = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postText = document.createElement('p');
        const postBtn = document.createElement('button');

        postTitle.innerText = post.title;
        postText.innerText = post.body;
        postBtn.innerText = 'Show comments';

        containerForPost.classList.add('post-container');
        postBtn.classList.add('button');

        containerForPost.append(postTitle, postText, postBtn);


        let postsId = post.id;

        postBtn.addEventListener('click', (event) => {
            getPostComments(postsId, event)
        })

        container.append(containerForPost)
    })

   
}

postsRequest.onload = () => {
    const {response} = postsRequest;
    postRender(response, containerForAllPosts)
    document.body.append(containerForAllPosts)
}

