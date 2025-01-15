
Shopware.Component.register('sw-cms-block-nsc-yellow-map', () => import('./component'));
Shopware.Component.register('sw-cms-preview-nsc-yellow-map', () => import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'yellow-map-block',
    category: 'map',
    label: 'Yellow-Map',
    component: 'sw-cms-block-nsc-yellow-map',
    previewComponent: 'sw-cms-preview-nsc-yellow-map',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        mapCenter: 'nsc-yellow-map'
    }
});