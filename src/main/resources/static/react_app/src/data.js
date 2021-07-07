import airpodsmax from './raw-images/airpods-max.jpg';
import iphone11red from './raw-images/iphone11-red.png';
import mac from './raw-images/mac.png';
import macside from './raw-images/macside.png';
import ipad from './raw-images/ipad-20.jpg';
import iwatch from './raw-images/alu-silver.png';
import appmac from './raw-images/macbook-air.jpg';
import airpod from './raw-images/airpod.jpg';

import imgba from './raw-images/ba.png';
import imgbb from './raw-images/bb.png';
import imgbc from './raw-images/bc.png';
import imgbd from './raw-images/bd.png';

import imgwa from './raw-images/wa.png';
import imgwb from './raw-images/wb.png';
import imgwc from './raw-images/wc.png';
import imgwd from './raw-images/wd.png';

import imgra from './raw-images/beats__red_2.png';
import imgrb from './raw-images/beats__red_3.png';
import imgrc from './raw-images/beats__red_4.png';
import imgrd from './raw-images/beats__red_5.png';

import imgfa from './raw-images/beats_pink_1.png';
import imgfb from './raw-images/beats_pink_2.png';
import imgfc from './raw-images/beats_pink_3.png';
import imgfd from './raw-images/beats_pink_4.png';

import imgpea from './raw-images/beats__peach_1.png';
import imgpeb from './raw-images/beats__peach_2.png';
import imgpec from './raw-images/beats__peach_3.png';
import imgped from './raw-images/beats__peach_4.png';

export const items1 = [
    {
      id: 1,
      img:airpodsmax,
      name: 'AirPods Max',
      rate: 4,
      price: 256,
      markdownPrice: 359
    },
    {
      id: 2,
      img:iphone11red,
      name: 'iPhone 11',
      price: 489,
      rate: 4,
      markdownPrice: 796
    },
    {
      id: 3,
      img:mac,
      name: 'Apple Macbook Pro',
      price: 499,
      rate: 4,
      markdownPrice: 599
    },
    {
      id: 4,
      img:macside,
      name: 'Magic Keyboard for iPad Pro 11-inch',
      price: 299,
      rate: 4,
      markdownPrice: 359
    }
  ]

  export const items2 = [
    {
      id: 5,
      img:ipad,
      name: 'iPad (8th Generation)',
      rate: 4,
      price: 829,
      markdownPrice: 1000
    },
    {
      id: 6,
      img:iwatch,
      name: 'Apple Watch',
      price: 399,
      rate: 4,
      markdownPrice: 499
    },
    {
      id: 7,
      img:appmac,
      name: 'Apple Macbook Air',
      price: 415,
      rate: 4,
      markdownPrice: 529
    },
    {
      id: 8,
      img:airpod,
      name: 'Air Pods Pro',
      price: 459,
      rate: 4,
      markdownPrice: 599
    }
  ]

  export const headsets = [
    {
      id: 9,
      color: 'fuschia',
      name: 'Beats Solo On Ear Headphones - Fuschia',
      price: 499,
      rate: 3,
      category: 'Accessories',
      imgs: [
        imgfa,
        imgfb,
        imgfc,
        imgfd
      ]
    },
    {
      id: 10,
      color: 'red',
      name: 'Beats Solo On Ear Headphones - Red',
      price: 499,
      rate: 3,
      category: 'Accessories',
      imgs: [
        imgra,
        imgrb,
        imgrc,
        imgrd
      ]
    },
    {
      id: 11,
      color: 'black',
      name: 'Beats Solo On Ear Headphones - Black',
      price: 499,
      rate: 3,
      category: 'Accessories',
      imgs: [
        imgba,
        imgbb,
        imgbc,
        imgbd
      ]
    },
    {
      id: 12,
      color: 'white',
      name: 'Beats Solo On Ear Headphones - White',
      price: 499,
      rate: 3,
      category: 'Accessories',
      imgs: [
        imgwa,
        imgwb,
        imgwc,
        imgwd
      ]
    },
    {
      id: 13,
      color: 'peach',
      name: 'Beats Solo On Ear Headphones - Peach',
      price: 499,
      rate: 3,
      category: 'Accessories',
      imgs: [
        imgpea,
        imgpeb,
        imgpec,
        imgped
      ]
    }
  ]