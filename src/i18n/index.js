import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale:'en',
  fallbackLocale:'en',
  messages:{
    en:{
        login:"Login",
        register:"Register",
        about:"About",
        career:"Careers",
        project:"Project",
        service:"Service",
        blog:"Blog"
    },
    km:{
        login:"ចូល",
        register:"ចុះឈ្មោះ",
        about:"អំពីយើង",
        career:"អ្នកថែទាំ",
        project:"គម្រោង",
        service:"សេវ៉ាកម្ម",
        blog:"Blog"

    }
  }
})

export default i18n