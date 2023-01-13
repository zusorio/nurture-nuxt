// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '@/assets/base.css',
        '@fontsource/lora/variable.css'
    ],
    modules: ['nuxt-icon', '@nuxt/image-edge']
})
