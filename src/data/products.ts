import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'halden-wool-overcoat',
    slug: 'halden-wool-overcoat',
    name: 'Halden Wool Overcoat',
    category: 'Outerwear',
    subCategory: 'Coats & Overcoats',
    price: 58000,
    badge: 'BESTSELLER',
    soldOut: false,
    rating: 5.0,
    reviewCount: 214,
    description: 'A double-faced overcoat with a dropped shoulder and a hand-finished collar.',
    detailedDescription: 'Woven in Piedmont from 100% carded virgin wool. Double-faced construction requires no lining, allowing the drape to move with natural ease. Finished by hand in Porto by a family-owned workshop in business since 1978. Designed to last decades, backed by our two-year free repair guarantee.',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Camel', hex: '#c4a47c' },
      { name: 'Charcoal', hex: '#3a3a3c' },
      { name: 'Slate Blue', hex: '#5e6572' }
    ],
    sizes: ['46', '48', '50', '52'],
    millName: 'Lanificio Fratelli Cerruti',
    millLocation: 'Biella, Piedmont, Italy',
    materialComposition: '100% Carded Virgin Wool (620g/m²), Corozo nut buttons',
    careInstructions: 'Brush with a natural bristle garment brush after wear. Spot clean when necessary. Professional dry clean every two years maximum.',
    inStock: true
  },
  {
    id: 'marne-cropped-trench',
    slug: 'marne-cropped-trench',
    name: 'Marne Cropped Trench',
    category: 'Outerwear',
    subCategory: 'Jackets & Shells',
    price: 44000,
    badge: 'NEW',
    soldOut: true,
    rating: 4.9,
    reviewCount: 48,
    description: 'A weatherproof cropped trench with a storm flap, horn buckle, and deep raglan sleeve.',
    detailedDescription: 'Cut from high-density organic cotton gabardine treated with a fluorocarbon-free hydrophobic finish. Unstructured through the chest with an exaggerated storm yoke and raglan sleeves designed to layer easily over knitwear.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Sand', hex: '#d9d2c2' },
      { name: 'Black', hex: '#1c1c1e' }
    ],
    sizes: ['46', '48', '50', '52'],
    millName: 'Olmetex Mills',
    millLocation: 'Como, Lombardy, Italy',
    materialComposition: '100% Organic Compact Cotton Gabardine (380g/m²)',
    careInstructions: 'Sponge clean with cool water. Cool iron with cloth barrier.',
    inStock: false
  },
  {
    id: 'aster-quilted-liner',
    slug: 'aster-quilted-liner',
    name: 'Aster Quilted Liner',
    category: 'Outerwear',
    subCategory: 'Liners & Vests',
    price: 33500,
    soldOut: false,
    rating: 4.8,
    reviewCount: 89,
    description: 'An onion-quilted recycled ripstop liner insulated with recycled down, wearable solo or buttoned into the Halden.',
    detailedDescription: 'Engineered as an adaptable thermal core. Made from whisper-quiet Japanese recycled nylon with custom tonal binding and concealed internal button loops that integrate into all Adrix outerwear models.',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Slate Green', hex: '#586760' },
      { name: 'Dark Navy', hex: '#222733' },
      { name: 'Stone', hex: '#c5bfb4' }
    ],
    sizes: ['46', '48', '50', '52'],
    millName: 'Limonta 1893',
    millLocation: 'Costa Masnaga, Lecco, Italy',
    materialComposition: '100% Recycled Nylon Shell, 700FP Recycled European Down (90/10)',
    careInstructions: 'Machine wash delicate at 30°C. Tumble dry low with wool balls until fully lofted.',
    inStock: true
  },
  {
    id: 'sundby-cashmere-crew',
    slug: 'sundby-cashmere-crew',
    name: 'Sundby Cashmere Crew',
    category: 'Knitwear',
    subCategory: 'Sweaters & Knits',
    price: 24000,
    badge: 'BESTSELLER',
    soldOut: false,
    rating: 5.0,
    reviewCount: 342,
    description: 'A seamless 7-gauge crew neck spun from pure Mongolian cashmere, brushed lightly for softness.',
    detailedDescription: 'Spun from two-ply Grade-A cashmere fibers averaging 15.5 microns in diameter and over 38mm in length. Knitted whole without seams on Shima Seiki machines in Veneto, Italy to eliminate friction points and reduce yarn waste.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#ded7c9' },
      { name: 'Charcoal', hex: '#313236' },
      { name: 'Olive Heather', hex: '#494f43' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    millName: 'Cariaggi Fine Yarns',
    millLocation: 'Cagli, Marche, Italy',
    materialComposition: '100% Two-Ply Grade-A Mongolian Cashmere (7-gauge)',
    careInstructions: 'Hand wash in lukewarm water with wool detergent. Never wring. Dry flat on a clean towel. Store folded, never on a hanger.',
    inStock: true
  },
  {
    id: 'fjord-ribbed-turtleneck',
    slug: 'fjord-ribbed-turtleneck',
    name: 'Fjord Ribbed Turtleneck',
    category: 'Knitwear',
    subCategory: 'Turtlenecks & Rolls',
    price: 19500,
    soldOut: false,
    rating: 4.9,
    reviewCount: 165,
    description: 'Heavyweight 5-gauge fisherman rib turtleneck knit from untreated Geelong lambswool.',
    detailedDescription: 'Substantial, protective, and deeply comfortable. The collar holds its structure without constricting, while the chunky rib provides natural thermal regulation and elasticity that bounces back season after season.',
    images: [
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Heather Charcoal', hex: '#383b40' },
      { name: 'Raw Ecru', hex: '#f0ede4' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    millName: 'Zegna Baruffa Lane Borgosesia',
    millLocation: 'Biella, Italy',
    materialComposition: '100% Superfine Untreated Geelong Wool (5-gauge)',
    careInstructions: 'Wash sparingly by hand. Air out between wears.',
    inStock: true
  },
  {
    id: 'loden-merino-cardigan',
    slug: 'loden-merino-cardigan',
    name: 'Loden Merino Cardigan',
    category: 'Knitwear',
    subCategory: 'Cardigans',
    price: 26000,
    badge: 'LIMITED',
    soldOut: false,
    rating: 4.8,
    reviewCount: 94,
    description: 'A boxy V-neck cardigan in forest loden green with natural corozo nut buttons and saddle shoulders.',
    detailedDescription: 'Yarn-dyed in the Scottish Borders using water from Loch Leven. The dense Milano rib knit resists sagging at the elbows and hem, finished with genuine corozo nut buttons sourced from Ecuador.',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Loden Green', hex: '#44563c' },
      { name: 'Oatmeal Taupe', hex: '#c5b8a5' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    millName: 'Todd & Duncan',
    millLocation: 'Kinross, Scotland',
    materialComposition: '100% Extra-fine Merino Wool, Natural Corozo buttons',
    careInstructions: 'Gentle hand wash. Spare corozo button included in inner seam.',
    inStock: true
  },
  {
    id: 'otto-structured-tote',
    slug: 'otto-structured-tote',
    name: 'Otto Structured Tote',
    category: 'Leather',
    subCategory: 'Totes & Bags',
    price: 38000,
    badge: 'BESTSELLER',
    soldOut: false,
    rating: 5.0,
    reviewCount: 198,
    description: 'An open-top tote cut from 3.2mm full-grain vegetable-tanned bridle leather with saddle-stitched handles.',
    detailedDescription: 'Constructed from thick vegetable-tanned shoulder hide steeped in chestnut and mimosa tannins for sixty days in Tuscany. Thick enough to stand unassisted on its beveled base. Will develop a rich, honeyed patina unique to its owner.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Cognac', hex: '#8c4824' },
      { name: 'Deep Espresso', hex: '#2c1e18' },
      { name: 'Natural Oak', hex: '#c29b6f' }
    ],
    sizes: ['One Size (38 x 34 x 14 cm)'],
    millName: 'Conceria Walpier',
    millLocation: 'Ponte a Egola, Tuscany, Italy',
    materialComposition: '100% Buttero Full-Grain Vegetable-Tanned Cowhide',
    careInstructions: 'Condition once per year with natural beeswax leather balm. Scratches rub away with the warmth of your thumb.',
    inStock: true
  },
  {
    id: 'pell-crossbody',
    slug: 'pell-crossbody',
    name: 'Pell Crossbody',
    category: 'Leather',
    subCategory: 'Bags',
    price: 26500,
    badge: 'NEW',
    soldOut: false,
    rating: 4.9,
    reviewCount: 71,
    description: 'A minimalist structured crossbody with solid brass turnlock closure and an adjustable strap.',
    detailedDescription: 'Sized to accommodate a passport, notebook, sunglasses and phone. Fitted with sand-cast unlacquered solid brass hardware from a historic foundry in Birmingham that patinas gently in step with the leather.',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#141416' },
      { name: 'Whiskey Tan', hex: '#945b34' }
    ],
    sizes: ['One Size (21 x 15 x 6 cm)'],
    millName: 'Badalassi Carlo Tannery',
    millLocation: 'San Miniato, Tuscany, Italy',
    materialComposition: 'Minerva Box Tumbled Vegetable Tanned Leather, Solid Brass',
    careInstructions: 'Avoid heavy rain for the first three months while the surface oil sets.',
    inStock: true
  },
  {
    id: 'brenna-card-holder',
    slug: 'brenna-card-holder',
    name: 'Brenna Card Holder',
    category: 'Leather',
    subCategory: 'Small Leather Goods',
    price: 7800,
    soldOut: false,
    rating: 4.9,
    reviewCount: 284,
    description: 'Folded single-piece card case holding eight cards and folded notes, hand-burnished edges.',
    detailedDescription: 'Folded from a single origami-inspired die-cut piece of bridle leather without stitching at the stress points. Hand-burnished with beeswax and wooden slickers in Guimarães, Portugal.',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Saddle Tan', hex: '#96552a' },
      { name: 'Charcoal Black', hex: '#1f1f21' },
      { name: 'Olive Drab', hex: '#484b39' }
    ],
    sizes: ['One Size (10 x 7 cm)'],
    millName: 'Conceria Walpier',
    millLocation: 'Ponte a Egola, Tuscany, Italy',
    materialComposition: '100% French Calf Vegetable-Tanned Leather (1.8mm)',
    careInstructions: 'Requires no upkeep. Skin oils from daily handling will nourish the grain naturally.',
    inStock: true
  },
  {
    id: 'kaolin-vase-tall',
    slug: 'kaolin-vase-tall',
    name: 'Kaolin Vase, Tall',
    category: 'Objects',
    subCategory: 'Ceramics',
    price: 11500,
    soldOut: false,
    rating: 4.9,
    reviewCount: 52,
    description: 'Hand-thrown stoneware vase with an unglazed matte raw kaolin finish, watertight interior.',
    detailedDescription: 'Thick-walled high-fire stoneware thrown by hand on a kick-wheel in Kyoto. Left intentionally unglazed on the exterior to preserve the velvety, chalky touch of raw iron-rich clay. Glazed with clear food-safe glass inside to hold fresh stems.',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Raw Chalk', hex: '#ede8dd' },
      { name: 'Smoked Iron', hex: '#524e4b' }
    ],
    sizes: ['Tall (28 cm height, 11 cm base)'],
    millName: 'Studio Kobo Pottery',
    millLocation: 'Kyoto, Japan',
    materialComposition: 'High-fire Shigaraki stoneware clay',
    careInstructions: 'Rinse with warm water. Hand wash with mild soap.',
    inStock: true
  },
  {
    id: 'terra-serving-bowl',
    slug: 'terra-serving-bowl',
    name: 'Terra Serving Bowl',
    category: 'Objects',
    subCategory: 'Tableware',
    price: 7200,
    originalPrice: 9000,
    badge: 'SALE',
    soldOut: false,
    rating: 4.7,
    reviewCount: 39,
    description: 'Lathe-turned shallow serving dish carved from salvaged European walnut and sealed with natural walnut oil.',
    detailedDescription: 'Turned from a single solid block of windfall European walnut. Each bowl bears individual whorls and mineral streaks unique to the tree from which it came. Food safe and treated exclusively with cold-pressed culinary-grade walnut oil.',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Natural Walnut', hex: '#5c3d28' }
    ],
    sizes: ['Medium (26 cm diameter, 6 cm height)'],
    millName: 'Workshop Guimarães',
    millLocation: 'Minho, Northern Portugal',
    materialComposition: 'Solid European Walnut (FSC certified salvage), Cold-pressed walnut oil',
    careInstructions: 'Hand wash with mild soapy water and dry immediately. Re-oil every six months.',
    inStock: true
  },
  {
    id: 'ash-candle-cedar-moss',
    slug: 'ash-candle-cedar-moss',
    name: 'Ash Candle, Cedar & Moss',
    category: 'Objects',
    subCategory: 'Home Fragrance',
    price: 4200,
    soldOut: false,
    rating: 4.9,
    reviewCount: 118,
    description: 'Non-GMO rapeseed and coconut wax hand-poured into a reusable stoneware ceramic vessel. Scented with Atlas cedarwood and oakmoss.',
    detailedDescription: 'Formulated without paraffin, phthalates or synthetic preservatives. Scented with botanical essential oils evoking damp soil, woodchips, and crushed needles after rain. Approximate burn time of 65 hours. The matte ceramic tumbler is designed to be washed and repurposed as a coffee cup or desk pot once burned down.',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: [
      { name: 'Moss Celadon', hex: '#637066' },
      { name: 'Charcoal Matte', hex: '#2b2c2d' }
    ],
    sizes: ['300g (65 Hour Burn)'],
    millName: 'Grasse Botanicals & Ceramica Caldas',
    millLocation: 'Grasse, France & Caldas da Rainha, Portugal',
    materialComposition: 'European Rapeseed & Coconut Wax, Unbleached Cotton Wick, Ceramic Cup',
    careInstructions: 'Trim wick to 5mm before every lighting. Allow melt pool to reach the edges on first burn.',
    inStock: true
  }
];
