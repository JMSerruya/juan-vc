import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Juan Manuel Serruya | Angel Investor', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to the homepage of Juan Manuel Serruya, Angel Investor based in Europe.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Juan Manuel Serruya',
  subtitle: "I'm an Angel Investor backing early stage technology companies",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi! I am a technologist that spent the last two decades building at startups, from small bootstrapped efforts to 6 years at Spotify.",
  paragraphTwo:
    "I am investing in early stage tech companies at the pre seed and seed stage, I look for teams that can build and ship their own product and prioritize talking to customers.",
  paragraphThree:
    'I write 20K to 50K Euro checks, if you\'re looking for capital and think we could be a fit, don\'t hesitate to reach out.',
  resume: 'https://www.linkedin.com/in/jmserruya/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'azelio.jpg',
    title: 'Azelio',
    info: 'CLEAN POWER WHEN & WHERE YOU NEED IT',
    info2:
      'Combining an innovative storage design with well-established power production technology, Azelio has developed a renewable energy storage solution providing around-the-clock clean power.',
    url: 'https://www.azelio.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hello@juan.vc',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JMSerruya',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jmserruya/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
