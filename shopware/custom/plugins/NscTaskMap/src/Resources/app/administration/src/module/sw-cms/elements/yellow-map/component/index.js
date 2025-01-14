import template from './sw-cms-element-yellow-map-component.html.twig';
import './sw-cms-element-yellow-map-preview.scss';

export default {
    template,

    data() {
        return {
            boxLimit: 8
        };
    },

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },

        mapUrl() {
            return "https://www.yellowmap.de/api_rst/api/loader?libraries=free-3&apiKey=" /*todo add apiKey from sysConfig*/;
        }
    }
}