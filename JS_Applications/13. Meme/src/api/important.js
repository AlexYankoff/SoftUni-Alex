/*
Don't forget to add this in HTML:
<script src="/src/app.js" type = 'module'></script>

Logout in  nav index.html:
<a id = "logoutBtn" class="nav-link" href="javascript:void(0)">Logout</a>

<!-- HTML Comments -->

Forms:
form @submit =${onSubmit}

.value=${item.title}

Delete button:
${isOwner ? html `<a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>` : ''}

*/