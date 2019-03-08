var hashFiles = {
    '#/home': '../html/view/home.html',
    '#/cv': '../html/view/cv.html',
    '#/projects': '../html/view/projects.html',
    '#/blog': '../html/view/blog.html',
    '#/contact': '../html/view/contact.html'
};

var loadByHash = function() {
    $('#container').load(hashFiles[location.hash] || '../html/view/error.html');
};

if (!location.hash && location.pathname === '/') {
	location.assign('#/home');
}

window.addEventListener('hashchange', loadByHash, false);
window.addEventListener('load', loadByHash, false);
