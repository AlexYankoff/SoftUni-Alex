/*
Don't forget to add this in HTML:
<script src="/src/app.js" type = 'module'></script>

<a  id = "logoutBtn" href="javascript:void(0)">Logout</a>

<!-- HTML Comments -->

Forms:
form @submit =${onSubmit}

.value=${item.title}

Delete button:
${isOwner ? html `<a @click=${onDelete} href="javascript:void(0)">Delete</a>` : ''}

*/