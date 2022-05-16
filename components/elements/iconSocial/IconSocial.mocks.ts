import Facebook from '~/images/icons/facebook.svg';
import { ISocial } from './IconSocial';

const base: ISocial = {
  id: 'facebook',
  name: 'Facebook',
  url: 'https://www.facebook.com/',
  icon: Facebook,
};

export const mockIconSocialProps = {
  base,
};
