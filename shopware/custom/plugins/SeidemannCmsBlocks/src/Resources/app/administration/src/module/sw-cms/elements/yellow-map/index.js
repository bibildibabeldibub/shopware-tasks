Shopware.Component.register('nsc-cms-el-nsc-yellow-map-preview', () => import('./preview'));
Shopware.Component.register('nsc-cms-el-nsc-yellow-map-component', () => import('./component'));
Shopware.Component.register('nsc-cms-el-nsc-yellow-map-config', () => import('./config'));

Shopware.Service('cmsService').registerCmsElement({
    name: 'nsc-yellow-map',
    label: 'nsc-cms.elements.yellowMap.label',
    component: 'nsc-cms-el-nsc-yellow-map-component',
    configComponent: 'nsc-cms-el-nsc-yellow-map-config',
    previewComponent: 'nsc-cms-el-nsc-yellow-map-preview',
    defaultConfig: {
        latitude: {
            source: 'static',
            value:  48.487845157908886,
        },
        longitude: {
            source: 'static',
            value:  9.220035057122708,
        },
        zoom: {
            source: 'static',
            value:  12,
        },
    }
});