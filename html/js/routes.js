var routes = [
  // Index page
  {
    path: '/',
    el: document.querySelector('.page[data-name="home"]'),
    name: 'home',
  },
  // Index page
  {
    path: 'feed',
    el: document.querySelector('.page[data-name="home"]'),
    name: 'home',
  },
  // login page
  {
    path: '/login/',
    url: './pages/login.html',
    name: 'login'
  },
  // sign_up page
  {
    path: '/signup/user/:userId',
    componentUrl: './pages/signup.html',
    name: 'signup',
  },
  // menu
  {
    path: '/menu/',
    url: './pages/menu/index.html',
    tabs: [
      {
        path: '/',
        id: 'menu1',
         url: './pages/menu/menu1.html',
      },
      {
        path: '/menu2/',
        id: 'menu2',
       url: './pages/menu/menu2.html',
      },
      {
        path: '/menu3/',
        id: 'menu3',
         url: './pages/menu/menu3.html',
      },
    ],
  },
  // Default route, match to all pages (e.g. 404 page)
{
  path: '(.*)',
  url: './pages/404.html',
},

];
