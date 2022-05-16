import Facebook from '~/images/icons/facebook.svg';
import Instagram from '~/images/icons/instagram.svg';
import Twitter from '~/images/icons/twitter.svg';
import { ISocialOnly } from './SocialOnly';

const socialOnly: ISocialOnly = {
  textReserved: '2020 Workflow, Inc. All rights reserved.',
  socials: [{
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: Facebook
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: Instagram
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://www.twitter.com/',
    icon: Twitter
  }
]
};

export const mockFooterSocialOnlyProps = {
  socialOnly,
};
