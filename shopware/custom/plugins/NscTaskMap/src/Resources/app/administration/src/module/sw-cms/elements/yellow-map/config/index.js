import template from './sw-cms-el-config-yellow-map.html.twig';

const {Criteria, EntityCollection} = Shopware.Data;
const {Mixin} = Shopware;

export default {
    template,

    inject: [
        'repositoryFactory',
    ],

    mixins: [
        'cms-element'
    ],

    data() {
        return {}
    },
    computed: {
    },

    created() {
        this.createdComponent();
    },


    methods: {
        createdComponent() {
            console.log('createdComponent')
            this.initElementConfig('nsc-yellow-map');
            console.log(this.element.config)
        },
        onLatitudeUpdate(value) {
            this.element.config.latitude.value = value;
        },
        onLongitudeUpdate(value) {
            this.element.config.longitude.value = value;
        },
        onZoomUpdate(value){
            this.element.config.zoom.value = value;
        }
    }
}