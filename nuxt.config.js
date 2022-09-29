export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'art3D',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
              rel: "stylesheet",
              href: "https://myfonts.ru/myfonts?fonts=ghea-grapalat",
            },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/bundle.scss'],

    styleResources: {
        scss: '~/assets/scss/shared/*.scss',
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
