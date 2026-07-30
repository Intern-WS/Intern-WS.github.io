import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'DisabilityLawyerIllinois',
  id: 'disability-lawyer-illinois',
  seo: {
    title: 'Illinois SSI and SSDI Lawyers | Williams & Swee, Ltd.',
    description: 'Williams & Swee, Ltd. helps Illinois residents with SSI, SSDI, denied claims, hearings, and appeals.',
    image: previewImage,
  },
  logo: logoImage,
  colors: {
    primary: '#173f63',
    secondary: '#b9862f',
    neutral: '#9aa3aa',
    outline: '#d06b24',
  },
  navigation: {
    darkmode: false,
    items: [
      {
              type: 'link',
              label: 'Home',
              href: '/',
            },
      {
              type: 'link',
              label: 'SSI',
              href: '/ssi',
            },
      {
              type: 'link',
              label: 'SSDI',
              href: '/ssdi',
            },
      {
              type: 'link',
              label: 'Denied benefits',
              href: '/disability-appeals',
            },
      {
              type: 'link',
              label: 'About the firm',
              href: '/about',
            },
      {
              type: 'link',
              label: 'Contact',
              href: '/contact',
            }
    ],
  },
  socials: [],
})
