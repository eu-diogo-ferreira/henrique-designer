import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.instagram.com/henrique.design1/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'projeto_1.png',
    title: '',
    info: 'Este é um dos meus primeiros trabalhos, em breve muitos outros estarão disponíveis!',
    info2: '',
    url: '',
    repo: 'https://www.instagram.com/henrique.design1/', // if no repo, the button will not show up
  },
  /*{
    id: uuidv1(),
    img: 'projetos.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.instagram.com/henrique.design1/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projetos.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.instagram.com/henrique.design1/', // if no repo, the button will not show up
  },*/
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/heu_rick',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/henrique.design1/',
    },
    {
      id: uuidv1(),
      name: 'pinterest',
      url: 'https://br.pinterest.com/henrique_anselmo419/',
    },
    {
      id: uuidv1(),
      name: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=5519996504081&text=Olá,%20eu%20gostaria%20de%20fazer%20um%20pedido%20de%20Design',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
