export const issueRoutes = [
    {
        path: '/issues',
        name: 'issue',
        meta: {
            title: 'Issue',
            requiresAuth: true
        },
        children:[
            {
                path: '',
                name: 'issues',
                component: () => import('../../views/issue/Index.vue'),
                meta: {
                    title: 'Issue',
                    requiresAuth: true
                }
            },
            {
                path: 'create',
                name: 'create-issue',
                component: () => import('../../views/issue/Create.vue'),
                meta: {
                    title: 'Create Issue',
                    requiresAuth: true
                }
            },
            {
                path: 'update/:id',
                name: 'update-issue',
                component: () => import('../../views/issue/Update.vue'),
                meta: {
                    title: 'Update Issue',
                    requiresAuth: true
                }
            }
        ]
    }
]