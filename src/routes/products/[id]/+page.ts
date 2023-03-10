import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const { id } = params;

  if (/\D/.test(id)) {
    throw error(404, { message: 'hey', id, code: 'NON_DIGIT_ID' });
  }

  return {
    id,
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
  };
};
