const masterDataRoutes = [
    {
        path: '/master-data',
        name: 'master-data',
        meta: {
            title: 'Master Data',
            requiresAuth: true
        },
        children:[
            // companies, services, users,
            {
                path: 'companies',
                name: 'companies',
                component: () => import('../views/master-data/Companies.vue'),
                meta: {
                    title: 'Companies',
                    requiresAuth: true
                }
            },
            {
                path: 'services',
                name: 'services',
                component: () => import('../views/master-data/Services.vue'),
                meta: {
                    title: 'Services',
                    requiresAuth: true
                }
            },
            {
                path: 'users',
                name: 'users',
                component: () => import('../views/master-data/Users.vue'),
                meta: {
                    title: 'Users',
                    requiresAuth: true
                }
            } , 
            {
                path: 'roles',
                name: 'roles',
                component: () => import('../views/master-data/Roles.vue'),
                meta: {
                    title: 'Roles',
                    requiresAuth: true
                }
            } , 
            // clients
            {
                path: 'clients',
                name: 'clients',
                component: () => import('../views/master-data/Clients.vue'),
                meta: {
                    title: 'Clients',
                    requiresAuth: true
                }
            },
            
        ]
    }
]

export default masterDataRoutes;