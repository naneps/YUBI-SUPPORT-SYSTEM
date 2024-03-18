import companyRoutes from './modules/company-route.js';
import roleRoutes from './modules/role-route.js';
import userRoutes from './modules/user-route.js';
const masterDataRoutes = [
    {
        path: '/master-data',
        name: 'master-data',
        meta: {
            title: 'Master Data',
            requiresAuth: true
        },
        children:[
            ...companyRoutes , 
            ...userRoutes ,
            ...roleRoutes,
        ]
    }
]

export default masterDataRoutes;