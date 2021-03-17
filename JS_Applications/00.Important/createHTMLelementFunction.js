const resultDetailed = e('article', {},
            e('h2',{},detJson.name),
            e('div', {className: 'band'},
                e('div', {className: 'thumb'}, e('img', {src: detJson.img})),
                    e('div', {className: 'ingredients'},
                    e('ul', {}, detJson.ingredients.map(i => e('li', {}, i)))
                )
            ),
            e('div', {className: 'description'},
                e('h3', {}, 'Preparation:'),
                detJson.steps.map(s => e('p', {}, s))
            )
        );

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}