import { CustomerReview } from '../types';

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Marguerita Vaillent',
    location: 'COPENHAGEN',
    productName: 'Halden Wool Overcoat',
    rating: 5,
    text: 'Three winters in the Halden and it has not pilled, sagged or asked for anything except a brush. I have stopped looking at coats.',
    verifiedYear: 'Owned for 3 years'
  },
  {
    id: 'rev-2',
    author: 'Daniel Okonjo',
    location: 'TORONTO',
    productName: 'Otto Structured Tote',
    rating: 5,
    text: 'I bought the card holder to test the leather before committing to the tote. Six weeks later it looked like something I had owned for years. The tote arrived in March.',
    verifiedYear: 'Owned for 14 months'
  },
  {
    id: 'rev-3',
    author: 'Sofia Marchetti',
    location: 'MILAN',
    productName: 'Loden Merino Cardigan',
    rating: 5,
    text: 'Customer service replaced a corozo button by post, for free, eleven months after purchase. No form, no argument. That is the whole review.',
    verifiedYear: 'Owned for 11 months'
  }
];
