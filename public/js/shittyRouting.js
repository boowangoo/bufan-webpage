const hashes = {
    '#home': '../html/view/home.html',
    '#cv': '../html/view/cv.html',
    '#projects': '../html/view/projects.html',
    '#blog': '../html/view/blog.html',
    '#contact': '../html/view/contact.html'
};

const loadByHash = () => {
    if (hashes[location.hash]) {
        $('#container').load(hashes[location.hash]);
    }
};

loadByHash();

window.addEventListener('hashchange', loadByHash, false);