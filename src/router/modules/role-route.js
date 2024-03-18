const roleRoutes = [
    {
        path: 'roles',
        name: 'role',
        meta: {
            title: 'Role',
            requiresAuth: true
        },
        children:[
            {
                path: '',
                name: 'roles',
                component: () => import('../../views/master-data/role/Index.vue'),
                meta: {
                    title: 'Role',
                    requiresAuth: true
                }
            },
            {
                path: 'create',
                name: 'create-role',
                component: () => import('../../views/master-data/role/Create.vue'),
                meta: {
                    title: 'Create Role',
                    requiresAuth: true
                }
            },
            {
                path: 'update/:id',
                name: 'update-role',
                component: () => import('../../views/master-data/role/Update.vue'),
                meta: {
                    title: 'Update Role',
                    requiresAuth: true
                }
            }
        ]
    }
]
export default roleRoutes;