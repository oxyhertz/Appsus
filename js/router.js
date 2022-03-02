import homePage from './pages/app-home-page.cmp.js';
import emailPage from './apps/email/pages/email-app.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import notesPage from './apps/notes/pages/notes-app.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/email',
    component: emailPage,
  },
  {
    path: '/email/:emailId',
    component: emailDetails
},
  {
    path: '/notes',
    component: notesPage,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
