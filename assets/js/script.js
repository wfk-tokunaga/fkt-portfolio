const icons = {
    js: '<i class="fab fa-js-square"></i>',
    node: '<i class="fab fa-node-js"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    html: '<i class="fab fa-html5"></i>',
    mdb: '<i class="fab fa-mdb"></i>',
    codepen: '<i class="fab fa-codepen"></i>',
    github: '<i class="fab fa-github"></i>',
    code: '<i class="fas fa-code"></i>'
}

// console.log(icons.js);

for (icon in icons) {
    console.log(`${icon}: ${icons[icon]}`);
}