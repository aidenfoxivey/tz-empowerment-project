import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'get involved',
      href: getPermalink('/get-involved'),
    },
    {
      text: 'our work',
      href: getPermalink('/our-work'),
    },
    {
      text: 'about us',
      href: getPermalink('/about-us'),
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
      links: [{ text: 'support a student', href: '#' }],
    },
    {
      title: 'participate',
      links: [
        { text: 'donate', href: '#' },
        { text: 'fundraise', href: '#' },
        { text: 'volunteer', href: '#' },
      ],
    },
    {
      title: 'who is involved',
      links: [
        { text: 'our board', href: '#' },
        { text: 'partners in Tanzania', href: '#' },
        { text: 'meet our students', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'terms', href: getPermalink('/terms') },
    { text: 'privacy policy', href: getPermalink('/privacy') },
  ],
};
