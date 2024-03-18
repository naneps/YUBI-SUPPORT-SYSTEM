const companyRoutes = [
    {
        path: 'companies',
        name: 'companies',
        meta: {
            title: 'Companies',
            requiresAuth: true,
            middlewares: ['role:admin']
        },
        children: [
            {
                path: '',
                name: 'companies',
                component: () => import('../../views/master-data/company/Index.vue'),
                meta: {
                    title: 'Companies',
                    requiresAuth: true,
                    middlewares: ['role:admin']
                }
            },
            {
                path: 'create',
                name: 'create-company',
                component: () => import('../../views/master-data/company/Create.vue'),
                meta: {
                    title: 'Create Company',
                    requiresAuth: true,
                    middlewares: ['role:admin']
                }
            },
            {
                path: 'update/:id',
                name: 'update-company',
                component: () => import('../../views/master-data/company/Update.vue'),
                meta: {
                    title: 'Update Company',
                    requiresAuth: true,
                    middlewares: ['role:admin']
                }
            }
        ]
    },
]
export default companyRoutes;