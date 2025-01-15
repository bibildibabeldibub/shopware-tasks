import template from './sw-cms-element-yellow-map-component.html.twig';
import './sw-cms-element-yellow-map-preview.scss';

export default {
    template,

    inject: ['systemConfigApiService'],

    mixins: [
        'cms-element'
    ],

    data() {
        return {
            apiKey: ''
        };
    },

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },

        mapUrl() {
            return "https://location.smartmaps.app/?key=" + this.apiKey + "&x=" + this.element.config.latitude?.value + "&y=" + this.element.config.longitude?.value + "&str=CAS-Weg&zp=76131&hsn=3&cty=Karlsruhe&c=%2318355b&z=16&zc=topleft&hp=true";
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('nsc-yellow-map');
            this.getPluginConfig();
        },

        async getPluginConfig() {
            const response = await this.systemConfigApiService.getValues('SeidemannCmsBlocks.config');
            this.apiKey = response['SeidemannCmsBlocks.config.apiKey'];
        }
    }
}