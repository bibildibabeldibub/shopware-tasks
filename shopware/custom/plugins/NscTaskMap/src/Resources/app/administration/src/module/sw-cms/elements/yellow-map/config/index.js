import template from './sw-cms-el-config-yellow-map.html.twig';

const {Criteria, EntityCollection} = Shopware.Data;
const {Mixin} = Shopware;

export default {
    template,

    inject: [
        'repositoryFactory',
    ],

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    data() {
        return {}
    },
    computed: {
    },

    created() {
        this.initElementConfig('nsc-yellow-map');
    },


    methods: {
        onLatitudeUpdate(value) {
            this.element.config.zoom.value = value;
        },
        onLongitudeUpdate(value) {
            this.element.config.longitude.value = value;
        },
        onZoomUpdate(value){
            this.element.config.zoom.value = value;
        }
    }
}