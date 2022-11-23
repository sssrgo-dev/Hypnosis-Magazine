import facebook from '../media/png/facebook.png';
import twitter from '../media/png/twitter.png';
import linkedin from '../media/png/Linkedin.png';
import sharelink from '../media/png/link.png';

import centralImage from '../media/jpg/Rectangle 20.jpg';
import secondaryImage1 from '../media/jpg/Rectangle 21.jpg';
import secondaryImage2 from '../media/jpg/Rectangle 23.jpg';
import videoImage from '../media/jpg/Rectangle 24.jpg';

export const videoBanner = {
  bannerImage: {
    src: videoImage,
    alt: 'We didn’t eat this morning, we haven’t had a meal in ten days. We are still waiting for food.',
  },
  bannerInfo: {
    heading: `We didn’t eat this morning, we haven’t had a meal in ten days. We are still waiting for food.`,
    texts: [
      {
        p: 'The past days have been cruel on Fatumata and her two young children – forced to walk over 100 miles in search of food, water and sanctuary.',
      },
      {
        p: 'Her three-year-old daughter Shankaron sits on her lap, eyes blank and scared. It is a look that is far too common in these parts.',
      },
    ],
  },
};

export const menuContent = [
  'Home',
  'World',
  'Polititcs',
  'Tech',
  'Sports',
  'Culture',
];

export const socialButtons = [
  { name: 'facebook', iconLink: facebook },
  { name: 'twitter', iconLink: twitter },
  { name: 'linkedin', iconLink: linkedin },
  { name: 'sharelink', iconLink: sharelink },
];

export const mainBanner = {
  bannerImage: {
    src: centralImage,
    alt: 'People are dying of hunger... there’s no water’',
  },

  bannerInfo: {
    heading: `People are dying of hunger... there’s no water’`,
    texts: [
      {
        p: 'In Somalia, more than 6 million people are in need of food assistance – more than half the population. But even inside the camps, food is scarce.',
      },
    ],
  },
};

export const secondaryBanner1 = {
  bannerImage: {
    src: secondaryImage1,
    alt: 'Let’s help them. I know you can’',
  },

  bannerInfo: {
    heading: `Let’s help them. I know you can`,
    texts: [
      {
        p: 'Drought, impending famine and the presence of terrorist group Al-Shabaab have left the country and its people in a desperate situation.',
      },
      {
        p: 'Cheeks sunken, he stands next to his shelter recalling tales of those in his village who had lost their lives.',
      },
    ],
  },
};

export const secondaryBanner2 = {
  bannerImage: {
    src: secondaryImage2,
    alt: 'Still ‘neglected’',
  },

  bannerInfo: {
    heading: `Still ‘neglected’`,
    texts: [
      {
        p: '“The situation is critical in Somalia. People are dying of hunger and there is no water,” said Mogadishu resident Noor Ibrahim, who fled his home to seek help at a camp.',
      },
      {
        p: '“Al-Shabaab blocks the roads, there is no access for food aid, the Shabaab steal food as well.',
      },
    ],
  },
};
