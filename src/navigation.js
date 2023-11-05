import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'get involved',
      href: getPermalink('/get-involved'),
    },
    {
      text: 'about us',
      href: getPermalink('/about'),
    },
    {
      text: 'contact us',
      href: getPermalink('/contact-us'),
    },
  ],
  actions: [{ type: 'button', text: 'donate', href: 'https://buy.stripe.com/4gwg11cet8dC0Ny7ss' }],
};

export const footerData = {
  links: [
    {
      title: 'learn more',
      links: [{ text: 'about us', href: '/about-us' }],
    },
    {
      title: 'participate',
      links: [
        { text: 'donate', href: 'https://buy.stripe.com/4gwg11cet8dC0Ny7ss' },
        // { text: 'fundraise', href: '#' },
        // { text: 'volunteer', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'terms', href: getPermalink('/terms') },
    { text: 'privacy policy', href: getPermalink('/privacy') },
  ],
};
