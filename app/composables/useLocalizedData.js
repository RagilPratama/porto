import { en, id } from '~/data/siteContent.js'

export const useLocalizedData = () => {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'id' ? id : en))
}
