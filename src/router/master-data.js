const masterDataRoutes = [
    {
        path: '/master-data',
        name: 'master-data',
        meta: {
            title: 'Master Data',
            requiresAuth: true
        },
        children:[
            {
                path: 'companies',
                name: 'companies',
                meta: {
                    title: 'Companies',
                    requiresAuth: true
                    middlewares: ['role:admin']
                },
                children: [
                    {
                        path: '',
                        name: 'companies',
                        component: () => import('../views/master-data/company/Index.vue'),
                        meta: {
                            title: 'Companies',
                            requiresAuth: true
                            middlewares: ['role:admin']
                        }
                    },
                    {
                        path: 'create',
                        name: 'create-company',
                        component: () => import('../views/master-data/company/Create.vue'),
                        meta: {
                            title: 'Create Company',
                            requiresAuth: true
                            middlewares: ['role:admin']
                        }
                    },
                    {
                        path: 'update/:id',
                        name: 'update-company',
                        component: () => import('../views/master-data/company/Update.vue'),
                        meta: {
                            title: 'Update Company',
                            requiresAuth: true
                            middlewares: ['role:admin']
                        }
                    }
                ]
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