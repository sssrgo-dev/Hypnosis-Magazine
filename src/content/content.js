import facebook from '../media/png/facebook.png';
import twitter from '../media/png/twitter.png';
import linkedin from '../media/png/Linkedin.png';
import sharelink from '../media/png/link.png';

import centralImage from '../media/jpg/Rectangle 20.jpg';
import secondaryImage1 from '../media/jpg/Rectangle 21.jpg';
import secondaryImage2 from '../media/jpg/Rectangle 23.jpg';
import videoImage from '../media/jpg/Rectangle 24.jpg';

const bannersVideo = [
  {
    imagePath: videoImage,
    type: 'video',
    content: {
      header: `We didn’t eat this morning, we haven’t had a meal in ten days. We are still waiting for food.`,
      texts: [
        {
          p: 'The past days have been cruel on Fatumata and her two young children – forced to walk over 100 miles in search of food, water and sanctuary.',
          id: 1,
        },
        {
          p: 'Her three-year-old daughter Shankaron sits on her lap, eyes blank and scared. It is a look that is far too common in these parts.',
          id: 2,
        },
      ],
    },

    id: 1,
  },
];

const menuContent = [
  { name: 'Home', id: '1' },
  { name: 'World', id: '2' },
  { name: 'Polititcs', id: '3' },
  { name: 'Tech', id: '4' },
  { name: 'Sports', id: '5' },
  { name: 'Culture', id: '6' },
];

const socialButtons = [
  { name: 'facebook', id: 1, iconLink: facebook },
  { name: 'twitter', id: 2, iconLink: twitter },
  { name: 'linkedin', id: 3, iconLink: linkedin },
  { name: 'sharelink', id: 4, iconLink: sharelink },
];

const bannersMain = [
  {
    bannerGraphics: {
      bannerIcon: undefined,
      bannerImage: {
        src: centralImage,
        alt: '',
      },
    },
    bannerInfo: {
      heading: `People are dying of hunger... there’s no water’`,
      texts: [
        {
          p: 'In Somalia, more than 6 million people are in need of food assistance – more than half the population. But even inside the camps, food is scarce.',
        },
      ],
    },
  },
  // {
  //   imagePath: secondaryImage1,
  //   type: 'secondary',
  //   content: {
  //     header: `Let’s help them. I know you can`,
  //     texts: [
  //       {
  //         p: 'Drought, impending famine and the presence of terrorist group Al-Shabaab have left the country and its people in a desperate situation.',
  //         id: 1,
  //       },
  //       {
  //         p: 'Cheeks sunken, he stands next to his shelter recalling tales of those in his village who had lost their lives.',
  //         id: 2,
  //       },
  //     ],
  //   },

  //   id: 2,
  // },
  // {
  //   imagePath: secondaryImage2,
  //   type: 'secondary',
  //   content: {
  //     header: `Still ‘neglected’`,
  //     texts: [
  //       {
  //         p: '“The situation is critical in Somalia. People are dying of hunger and there is no water,” said Mogadishu resident Noor Ibrahim, who fled his home to seek help at a camp.',
  //         id: 1,
  //       },
  //       {
  //         p: '“Al-Shabaab blocks the roads, there is no access for food aid, the Shabaab steal food as well.',
  //         id: 2,
  //       },
  //     ],
  //   },

  //   id: 3,
  // },
];

export { menuContent, socialButtons, bannersMain, bannersVideo };
