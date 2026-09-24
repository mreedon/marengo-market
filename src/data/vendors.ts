/*
  Vendor roster for the current market date.

  Source of truth: the organizer's roster PDFs, emailed to the vendor list a few
  days before each market (marengoilmarket@gmail.com). The booth-numbered roster
  and the park map arrive in a second, later email — `booth` comes from those.

  The PDF is the authority on WHO is attending; prior git revisions of this file
  are the authority on WORDING. The sheet is title-case and sometimes truncates
  (Fearless Garden's "Garden Access" is really "garden accessories"), so pull
  descriptions for returning vendors out of git rather than retyping the sheet.
  Site style is sentence case. When the sheet lists genuinely DIFFERENT products
  for a returning vendor, that is new information and the sheet wins.

  `booth` is the raw token from the map: a booth number, 'FT1'/'FT2' for the two
  food truck pads, or 'GRASS' for the grass spot. Use boothLabel() to display it.
  It is OPTIONAL on purpose — between the roster email and the booth/map email
  the lineup is known and the numbers are not. Leave it off rather than carrying
  last market's number forward: when a vendor drops out the organizer backfills
  the hole with the highest-numbered booth, so numbers do not survive a date.
  /vendors hides the park map and the booth badges while the roster has none.
*/

export type Vendor = {
  name: string;
  items: string;
  booth?: string;
  menu?: string;
};

/* Alphabetical by business name. The count badge on /vendors is vendors.length. */
export const vendors: Vendor[] = [
  { name: 'Ashley Jordan', items: 'Homemade cards, bookmarks, and small paintings' },
  { name: 'Ava Celine & Co. Bakery', items: "Gourmet Reese's & Oreo cupcakes" },
  { name: 'Beads By Beans', items: 'Beaded jewelry including earrings, necklaces, bracelets, badge reels, keychains' },
  { name: 'Big Baluka Snacks', items: 'Freeze dried candy & fruit' },
  { name: "Carol's Crafts", items: 'Embroidered towels, crocheted towels, cat toys, face cloth' },
  { name: 'Cindy Swift', items: 'Hand poured cement painted turtle stepping stones' },
  { name: 'Circus Act', items: 'Circus fitness' },
  { name: 'Cub Scouts', items: 'Non-profit' },
  { name: 'Dave Made LLC', items: 'Handmade crafts, planters, games & novelties' },
  { name: 'DBM Designs By Denise', items: 'T-shirts, sweatshirts, pants, crochet items, canvas bags, kids items, pictures' },
  { name: 'Dee Welsch', items: 'Fall decorations' },
  { name: 'Divine Designs', items: 'Sewing & embroidery items' },
  { name: "Doo-Broz Meats n' Treats", items: 'Pet treats' },
  { name: 'Dorothy Jewelry', items: 'Jewelry' },
  { name: 'Easy Peasy Lemon Squeezy', items: 'Fresh squeezed lemonade, more than 8 flavor options with added boba', menu: '/menus/easy-peasy-lemon-squeezy-menu.jpg' },
  { name: 'Enchanted Crafts', items: 'Jewelry, sublimation fabric items, crochet, crystals' },
  { name: 'ERG Elite Remodeling', items: 'Home improvement' },
  { name: 'Fat Cat Lounge', items: 'Home grown homemade catnip toys' },
  { name: 'Fearless Garden', items: 'Birdbaths, plant stands, garden accessories' },
  { name: "Grammy's Homemade Jams, Pickles, Salsas & More", items: 'Homemade jams, pickles, pickled products, and salsas' },
  { name: 'Healthy Hemp', items: 'CBD products' },
  { name: 'JB Manualidades', items: 'Handmade dolls, Christmas crafts, crocheted dolls' },
  { name: 'JD&J Crafts', items: 'Diamond art, wreaths, wooden decor' },
  { name: 'Jewels Crafts', items: 'Silicone beaded accessory bar: 20+ items to choose from & 1000s of beads to design with' },
  { name: 'Joy In Motion Dance Studio', items: '' },
  { name: 'KRD Farms', items: 'Certified organic farm fresh produce' },
  { name: 'Little Farm On The Creek', items: 'Garden starters, whipped tallow balm, dish soap sets, honey' },
  { name: 'Maggie Brown', items: 'Crochet stuffed animals' },
  { name: 'Marengo Union Library Dist.', items: 'Non-profit' },
  { name: 'Mary Holeton', items: 'Wood signs, home decor, baby and toddler clothing, towels' },
  { name: 'Nutrilite, XS & Artistry', items: 'Organic vitamin drinks, vitamin B12 based energy drinks, premium skincare' },
  { name: 'Ray Ray Crochet', items: 'Crochet items' },
  { name: 'RC Short Kits & Prints', items: '3D printed & resin art, jewelry, games, bookmarks, coasters, key chains, laser etched glass, metal & acrylic signs, laser engraved leather tags & chains' },
  { name: 'Redefined Designs', items: 'Upcycled clothing & accessories' },
  { name: 'Roisin Gardens', items: 'Fresh cut flowers' },
  { name: 'RP Fab LLC & Iridescent Essence', items: 'Soaps, bath bombs, body butter, facial serum, laser cut items, wood turned items, fabrication services' },
  { name: "Séance at Tiffany's", items: 'Tarot readings, candles, art, kits, bells' },
  { name: 'Selah & Ash', items: 'Original herbal teas, ginger flakes, floral bouquets, memory butterflies' },
  { name: 'Simply Mae Designs', items: 'Keychains, sublimation, shirts, cups, home decor, stickers' },
  { name: 'Spirit Bombs', items: 'Bath bombs, shower steamers, herbal tea blends, hair oil, sea moss, Korean skincare, herbal salts, salt scrubs' },
  { name: 'Starlight Hidden Candles', items: 'Candles' },
  { name: 'Sunbeams Uganda', items: 'Handmade baskets, aprons, handbags, totes' },
  { name: 'Sweet Jems', items: 'Sugar & chocolate chip cookies' },
  { name: 'Taqueria Paloma', items: 'Mexican food truck', menu: '/menus/taqueria-paloma-menu.jpg' },
  { name: 'The Fabled Lilac', items: 'Watercolor paintings & gifts: florals, naturescapes, and portraits' },
  { name: 'The Plant Hustle', items: 'Live plants, keychains, plant related items' },
  { name: 'The Whimsical Workshop', items: 'Beaded jewelry, keychains, felt plushies, upcycled home decor, 3D printed items, magnets' },
  { name: 'Tolentino Creations and Desserts', items: 'Ribbon flower bouquets, pipe cleaner flower bouquets, keychains, can coozies, car coasters, lip balm holders & more' },
  { name: 'Travis Coudal for Ward 4 & Marengo Weekly', items: 'Ward 4 campaign booth and local news' },
  { name: 'Unhallowed, LLC', items: 'Hot sauces and rubs' },
  { name: "Vee's Crafts & More", items: 'Scrunchies, bracelets, stickers, diamond art figures' },
  { name: 'Wendy Ingrassin', items: 'Mason jar firefly lights, LED decorative candle lights' },
  { name: 'Yobi Made Prints', items: '3D printed toys & collectibles' },
];

/* True once the organizer's booth/map email has landed and `booth` is filled in. */
export const boothsAssigned = vendors.some(v => v.booth);

export function boothLabel(booth: string): string {
  if (booth === 'FT1' || booth === 'FT2') return 'Food truck';
  if (booth === 'GRASS') return 'Grass spot';
  return `Booth ${booth}`;
}

export const vendorByBooth: Map<string, Vendor> = new Map(
  vendors.filter(v => v.booth).map(v => [v.booth as string, v]),
);
