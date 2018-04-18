export const API_SERVER = 'http://192.168.70.12:8480/api';

export const AppConfig = {
    //面包屑的配置
    breadcrumbConfig: {
        '/home': '后台管理系统',
        '/home/index': '首页',
        '/home/statistics': '数据统计',
        '/home/crud': 'CRUD示例',
        '/home/configForm': '配置表单',
        '/home/editor': '编辑器',
        '/home/markdown': 'markdown编辑器',
    },
    menuConfig: [
        {
            name: '首页',
            key: 'home',
            src: '/home/index',
            icon: 'home'
        },
        {
            name: '表格CRUD',
            key: 'crud',
            icon: 'desktop',
            src: '/home/crud',
        },
        {
            name: '表单',
            key: 'form',
            icon: 'book',
            nodes: [
                {
                    name: '配置表单',
                    key: 'configForm',
                    src: '/home/configForm'
                },
                {
                    name: '编辑器',
                    key: 'editor',
                    src: '/home/editor'
                },
                {
                    name: 'markdown',
                    key: 'markdown',
                    src: '/home/markdown'
                }
            ]
        },
        {
            name: '数据统计',
            key: 'statistics',
            src: '/home/statistics',
            icon: 'home'
        }
    ]
};

