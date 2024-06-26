import componentLoader from './component-loader.js';
import City from '../resources/cities.js';

const options = {
    componentLoader,
    rootPath: '/admin',
    resources: [
        {
            resource: City,
            options: {
            
            },
        },
    ],
    databases: [],
};

export default options;
