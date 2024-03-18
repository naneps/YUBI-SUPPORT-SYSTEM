const userRoutes =[
    {
        path: 'users',
        name: 'users',
        meta: {
            title: 'User',
            requiresAuth: true
        },
        children:[
            {
                path: '',
                name: 'users',
                component: () => import('../../views/master-data/user/Index.vue'),
                meta: {
                    title: 'User',
                    requiresAuth: true
                }
            },
            {
                path: 'create',
                name: 'create-user',
                component: () => import('../../views/master-data/user/Create.vue'),
                meta: {
                    title: 'Create User',
                    requiresAuth: true
                }
            },
            {
                path: 'update/:id',
                name: 'update-user',
                component: () => import('../../views/master-data/user/Update.vue'),
                meta: {
                    title: 'Update User',
                    requiresAuth: true
                }
            }
        ]

    }
]
export default userRoutes;