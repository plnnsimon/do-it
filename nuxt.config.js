export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Do-It',
        title: 'Do-It',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/DOIT.png' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', integrity: "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==", crossorigin: "anonymous", referrerpolicy: "no-referrer" },
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: 'swiper/css/swiper.css' }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/v-calendar', ssr: false },
        { src: '~/plugins/v-select', ssr: false },
        { src: '~/plugins/vue-awesome-swiper', ssr: false },
        { src: '~/api/api' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components/base',
        '~/components/tabs',
        '~/components/profile',
        '~/components',
    ],

    loading: {
        color: 'rgba(9, 95, 224, 1)',
        height: '5px',
        continuous: true,
        duration: 1000
    },
    loadingIndicator: {
        name: 'circle',
        color: 'rgba(9, 95, 224, 1)',
        background: '#0f1215'
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
    ],
    router: {
        middleware: ['auth']
    },
    googleFonts: {
        families: {
            Rubik: true,
            Roboto: true
        }
    },

    styleResources: {
        scss: [
            '~/assets/progressbar.scss',
        ]
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyBox4veLiHWTJCvClORokq946IMkVnMYh0',
                    authDomain: 'do-it-b1370.firebaseapp.com',
                    projectId: 'do-it-b1370',
                    storageBucket: 'do-it-b1370.appspot.com',
                    messagingSenderId: "900050670378",
                    appId: '1:900050670378:web:11a8711e11271aea658453',
                    measurementId: 'G-XX2N4Z0ED8'
                },
                services: {
                    storage: true,
                    realtimeDb: true,
                    auth: {
                        persistence: 'local', // default
                        initialize: {
                            onAuthStateChangedAction: 'onAuthStateChangedAction',
                            subscribeManually: false
                        },
                        ssr: false
                    }
                }
            }
        ],
    ],
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
