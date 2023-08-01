// theme.config.tsx
import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import CustomNav from './components/CustomNav'; // Import the custom content block component


import { Lora } from 'next/font/google';
import CustomFooter from './components/CustomFooter';
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
});


const config: DocsThemeConfig = {
  // logo: <span>☧ Orthodox Reader</span>,
  banner: {
    key: '2.0-release',
    text: (
      <a href="/about" className='text-xs'>
        orthodox-nkjv-reader 0.0.1 is released! ;) Read more →
      </a>
    )
  },
  main: ({ children }) => (
    <>
      {/* <CustomNav /> */}
      <div className={lora.className}>
        <div className="mx-auto max-w-xl lg:max-w-3xl xl:max-w-3xl">
          {children}
        </div>
      </div>
    </>
  ),
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M 12.197954 2.209845 L 12.197954 9.240429 L 14.851882 9.240429 C 15.845171 9.240429 16.610819 8.935204 17.148851 8.324745 C 17.686882 7.714287 17.955894 6.847759 17.955894 5.725136 C 17.955894 4.602514 17.686882 3.735987 17.148851 3.125526 C 16.610819 2.515068 15.845171 2.209845 14.851882 2.209845 Z M 10.102746 15.184609 L 10.102746 0.130156 L 14.851882 0.130156 C 16.600485 0.130156 17.924849 0.603514 18.825018 1.550241 C 19.725183 2.496971 20.175261 3.886002 20.175261 5.717377 C 20.175261 7.559099 19.725183 8.950717 18.825018 9.89227 C 17.924849 10.833826 16.600485 11.304596 14.851882 11.304596 L 12.197954 11.304596 L 12.197954 15.21565 L 14.976044 12.20476 L 17.769653 12.20476 L 12.570435 17.869579 L 18.033493 23.875839 L 15.255404 23.875839 L 12.213474 20.554548 L 12.213474 23.875839 L 10.102746 23.875839 L 10.102746 20.337267 L 6.859055 23.875839 L 4.080965 23.875839 L 9.668185 17.760939 L 4.546567 12.20476 L 7.355696 12.20476 Z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Orthodox Reader
      </span>
    </>
  ),
  head: (
    <>
      <title>Orthodox Reader</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Orthodox Reader" />
      <meta property="og:description" content="The complete collection of Eastern Orthodox Christian books of the bible" />
    </>
  ),
  footer: {
    component: CustomFooter,
  },
  // Customize the search input placeholder text
  search: {
    placeholder: 'Search NKJV', // Replace this with your desired text
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,
    titleComponent({ title, type, route }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'Genesis') {
        return <>{title}</>;
      }
      return <>{title}</>;
    },
  },
  // Add the `editLink` option to hide the "Edit this page" link
  editLink: {
    text: null, // Set to null to hide the link
  },
  // Add the `feedback` option to hide the "Question? Give us feedback →" link
  feedback: {
    content: null, // Set to null to hide the link
  },
  // Set gitTimestamp to null to hide the last updated date
  gitTimestamp: null,
};

export default config;
