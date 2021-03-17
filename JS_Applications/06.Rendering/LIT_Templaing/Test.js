
import {html, render} from `https://unpkg.com/lit-html?module`
const artTemp = (article) => html`
<article> 
    <header>
        <div class="test">${article.title}
            <p></p>
        </div>
    </header>
</article>
`;