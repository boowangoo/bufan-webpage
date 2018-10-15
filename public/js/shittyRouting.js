const myHashes = {
    '#/home': '../html/view/home.html',
    '#/cv': '../html/view/cv.html',
    '#/projects': '../html/view/projects.html',
    '#/blog': '../html/view/blog.html',
    '#/contact': '../html/view/contact.html'
};

const loadByHash = () => {
    let hash = null;
    
    if (location.hash) {
	    hash = myHashes[location.hash];
    } else if (location.pathname === '/') {
	    hash = '#/home';
	    location.assign('#/home');
    }
    
    $('#container').load(hash || '../html/view/error.html');
};

loadByHash();

window.addEventListener('hashchange', loadByHash, false);
