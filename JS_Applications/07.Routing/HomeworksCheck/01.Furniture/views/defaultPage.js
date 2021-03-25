import { html } from '../node_modules/lit-html/lit-html.js';

export function defaultPage(ctx) {
    console.log('default');
    return ctx.render(html`<p>Not found</p>`);
}