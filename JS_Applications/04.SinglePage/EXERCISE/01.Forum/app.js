function solve() {
    let sectionPostForm = document.getElementById('postComment');
    document.getElementsByTagName('a')[0].addEventListener('click', reload);
    sectionPostForm.innerHTML = loadPostForm();
    document.getElementById('postPost').addEventListener('submit', createPost);
    document.getElementById('postPost').addEventListener('reset', clearForm);
    loadPosts();
}

solve();

function reload() {
    solve();
}
function clearForm(event){
    event.stopPropagation()
    event.target.reset()
}

async function createPost(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let post = {
        title: formData.get('topicName'),
        username: formData.get('username'),
        text: formData.get('postText'),
        date: new Date(),
        subscribers: Math.floor(Math.random() * 500)
    };

    if (post.title === '' || post.username === '' || post.text === '') {
        return alert('All fields are required!');
    }

    await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    });

    form.reset();
    loadPosts();

}

function loadPostForm() {
    let postForm = `<div class="new-topic-border">
                <div class="header-background">
                    <span>New Topic</span>
                </div>
                <form id="postPost">
                    <div class="new-topic-title">
                        <label for="topicName">Title <span class="red">*</span></label>
                        <input type="text" name="topicName" id="topicName">
                    </div>
                    <div class="new-topic-title">
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="new-topic-content">
                        <label for="postText">Post <span class="red">*</span></label>
                        <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
                    </div>
                    <div class="new-topic-buttons">
                        <button type="reset" class="cancel">Cancel</button>
                        <button type="submit" class="public">Post</button>
                    </div>

                </form>
            </div>`;
    return postForm;
}

async function getPosts() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    let data = await response.json();
    return data;
}

async function loadPosts() {
    let posts = await getPosts();
    let sectionPosts = document.getElementById('postedContent');
    sectionPosts.innerHTML = '';
    document.getElementById('title').innerHTML=''
    document.getElementById('titleComments').innerHTML = ''
    document.getElementById('answer').innerHTML = ''

    for (const post of Object.values(posts)) {
        let postContent = `
                <!-- topic component  -->
                <div class="topic-container">
                    <div class="topic-name-wrapper">
                        <div class="topic-name">
                            <a id = "${post._id}" href="#" class="normal" onclick = "commentPost(this.id);loadComments(this.id)">
                                <h2>${post.title}</h2>
                            </a>
                            <div class="columns">
                                <div>
                                    <p>Date:
                                        <time>${post.date}</time>
                                    </p>
                                    <div class="nick-name">
                                        <p>Username: <span>${post.username}</span></p>
                                    </div>
                                </div>
                                <div class="subscribers">
                                    <!-- <button class="subscribe">Subscribe</button> -->
                                    <p>Subscribers: <span>${post.subscribers}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        let div = document.createElement('div');
        div.className = 'topic-title';
        div.innerHTML = postContent;
        sectionPosts.appendChild(div);
    }
}

async function commentPost(id) {
    let sectionPostForm = document.getElementById('postComment');
    sectionPostForm.innerHTML = '';
    let sectionPosts = document.getElementById('postedContent');
    sectionPosts.innerHTML = '';

    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    let post = await response.json();

    let commentedTitle = `<div class="theme-title">
                        <div class="theme-name-wrapper">
                            <div class="theme-name">
                                <h2>${post.title}</h2>
                                <p>Date:
                                    <time>${post.date}</time>
                                </p>
                                <p>${post.text}</p>
                                
                            </div>
                            <div class="subscribers">
                                <p>Subscribers: <span>${post.subscribers}</span></p>
                                <!-- <button class="subscribe">Subscribe</button>
                                <button class="unsubscribe">Unsubscribe</button> -->
                               
                            </div>
                        </div>
                    </div>`;
    document.getElementById('title').innerHTML = commentedTitle;
    let answer = `<div class="answer-comment">
                        <p><span>currentUser</span> comment:</p>
                        <div class="answer">
                            <form id="answerForm">
                                <textarea name="postCommentText" id="postCommentText" cols="30" rows="10"></textarea>
                                <div>
                                    <label for="username">Username <span class="red">*</span></label>
                                    <input type="text" name="username" id="username">
                                </div>
                                <button>Post</button>
                            </form>
                        </div>
                    </div>`;
    document.getElementById('answer').innerHTML = answer;
    document.getElementById('answerForm').addEventListener('submit', (event) => createComment(event, id));

}

async function createComment(event, id) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let comment = {
        username: formData.get('username'),
        text: formData.get('postCommentText'),
        date: new Date(),
        likes: Math.floor(Math.random() * 10),
        postId: id

    };
    if (comment.username === '' || comment.text === '') {
        return alert('All fields are required!');
    }
    await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    });
    form.reset();
    loadComments(id);
}

async function loadComments(id) {
    document.getElementById('titleComments').innerHTML = ''
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    let data = await response.json();
    for (const comment of Object.values(data)) {
        if (comment.postId == id) {
            let div = document.createElement('div');
            div.className = "comment";
            let commentForPost = `
                        <header class="header">
                            <p><span>${comment.username}</span> posted on
                                <time>${comment.date}</time>
                            </p>
                        </header>
                        <div class="comment-main">
                            <div class="userdetails">
                                <img src="./static/profile.png" alt="avatar">
                            </div>
                            <div class="post-content">
                                <p>${comment.text}</p>
                            </div>
                        </div>
                        <div class="footer">
                            <p><span>${comment.likes}</span> likes</p>
                        </div>`;
            div.innerHTML = commentForPost;
            document.getElementById('titleComments').appendChild(div)
        }
    }

}