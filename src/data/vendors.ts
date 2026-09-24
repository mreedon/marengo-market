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
  { name: 'Ashley Jordan', items: 'Homemade cards, bookmarks, and small paintings', booth: '11' },
  { name: 'Ava Celine & Co. Bakery', items: "Gourmet Reese's & Oreo cupcakes", booth: '15' },
  { name: 'Beads By Beans', items: 'Beaded jewelry including earrings, necklaces, bracelets, badge reels, keychains', booth: '6' },
  { name: 'Big Baluka Snacks', items: 'Freeze dried candy & fruit', booth: '44' },
  { name: "Carol's Crafts", items: 'Embroidered towels, crocheted towels, cat toys, face cloth', booth: '23' },
  { name: 'Cindy Swift', items: 'Hand poured cement painted turtle stepping stones', booth: '29' },
  { name: 'Circus Act', items: 'Circus fitness', booth: 'GRASS' },
  { name: 'Cub Scouts', items: 'Non-profit', booth: '40' },
  { name: 'Dave Made LLC', items: 'Handmade crafts, planters, games & novelties', booth: '13' },
  { name: 'DBM Designs By Denise', items: 'T-shirts, sweatshirts, pants, crochet items, canvas bags, kids items, pictures', booth: '7' },
  { name: 'Dee Welsch', items: 'Fall decorations', booth: '35' },
  { name: 'Divine Designs', items: 'Sewing & embroidery items', booth: '24' },
  { name: "Doo-Broz Meats n' Treats", items: 'Pet treats', booth: '14' },
  { name: 'Dorothy Jewelry', items: 'Jewelry', booth: '38' },
  { name: 'Easy Peasy Lemon Squeezy', items: 'Fresh squeezed lemonade, more than 8 flavor options with added boba', booth: '20', menu: '/menus/easy-peasy-lemon-squeezy-menu.jpg' },
  { name: 'Enchanted Crafts', items: 'Jewelry, sublimation fabric items, crochet, crystals', booth: '5' },
  { name: 'ERG Elite Remodeling', items: 'Home improvement', booth: '3' },
  { name: 'Fat Cat Lounge', items: 'Home grown homemade catnip toys', booth: '32' },
  { name: 'Fearless Garden', items: 'Birdbaths, plant stands, garden accessories', booth: '4' },
  { name: "Grammy's Homemade Jams, Pickles, Salsas & More", items: 'Homemade jams, pickles, pickled products, and salsas', booth: '43' },
  { name: 'Healthy Hemp', items: 'CBD products', booth: '25' },
  { name: 'JB Manualidades', items: 'Handmade dolls, Christmas crafts, crocheted dolls', booth: '37' },
  { name: 'JD&J Crafts', items: 'Diamond art, wreaths, wooden decor', booth: '10' },
  { name: 'Jewels Crafts', items: 'Silicone beaded accessory bar: 20+ items to choose from & 1000s of beads to design with', booth: '42' },
  { name: 'Joy In Motion Dance Studio', items: 'Dance studio', booth: '1' },
  { name: 'KRD Farms', items: 'Certified organic farm fresh produce', booth: '19' },
  { name: 'Little Farm On The Creek', items: 'Garden starters, whipped tallow balm, dish soap sets, honey', booth: '28' },
  { name: 'Maggie Brown', items: 'Crochet stuffed animals', booth: '27' },
  { name: 'Marengo Union Library Dist.', items: 'Non-profit', booth: '39' },
  { name: 'Mary Holeton', items: 'Wood signs, home decor, baby and toddler clothing, towels', booth: '46' },
  { name: 'Nutrilite, XS & Artistry', items: 'Organic vitamin drinks, vitamin B12 based energy drinks, premium skincare', booth: '31' },
  { name: 'Ray Ray Crochet', items: 'Crochet items', booth: '49' },
  { name: 'RC Short Kits & Prints', items: '3D printed & resin art, jewelry, games, bookmarks, coasters, key chains, laser etched glass, metal & acrylic signs, laser engraved leather tags & chains', booth: '18' },
  { name: 'Redefined Designs', items: 'Upcycled clothing & accessories', booth: '12' },
  { name: 'Roisin Gardens', items: 'Fresh cut flowers', booth: '21' },
  { name: 'RP Fab LLC & Iridescent Essence', items: 'Soaps, bath bombs, body butter, facial serum, laser cut items, wood turned items, fabrication services', booth: '33' },
  { name: "Séance at Tiffany's", items: 'Tarot readings, candles, art, kits, bells', booth: '50' },
  { name: 'Selah & Ash', items: 'Original herbal teas, ginger flakes, floral bouquets, memory butterflies', booth: '34' },
  { name: 'Simply Mae Designs', items: 'Keychains, sublimation, shirts, cups, home decor, stickers', booth: '41' },
  { name: 'Spirit Bombs', items: 'Bath bombs, shower steamers, herbal tea blends, hair oil, sea moss, Korean skincare, herbal salts, salt scrubs', booth: '45' },
  { name: 'Starlight Hidden Candles', items: 'Candles', booth: '9' },
  { name: 'Sunbeams Uganda', items: 'Handmade baskets, aprons, handbags, totes', booth: '17' },
  { name: 'Sweet Jems', items: 'Sugar & chocolate chip cookies', booth: '22' },
  { name: 'Taqueria Paloma', items: 'Mexican food truck', booth: 'FT1', menu: '/menus/taqueria-paloma-menu.jpg' },
  { name: 'The Fabled Lilac', items: 'Watercolor paintings & gifts: florals, naturescapes, and portraits', booth: '48' },
  { name: 'The Plant Hustle', items: 'Live plants, keychains, plant related items', booth: '47' },
  { name: 'The Whimsical Workshop', items: 'Beaded jewelry, keychains, felt plushies, upcycled home decor, 3D printed items, magnets', booth: '51' },
  { name: 'Tolentino Creations and Desserts', items: 'Ribbon flower bouquets, pipe cleaner flower bouquets, keychains, can coozies, car coasters, lip balm holders & more', booth: '30' },
  { name: 'Travis Coudal for Ward 4 & Marengo Weekly', items: 'Ward 4 campaign booth and local news', booth: '2' },
  { name: 'Unhallowed, LLC', items: 'Hot sauces and rubs', booth: '16' },
  { name: "Vee's Crafts & More", items: 'Scrunchies, bracelets, stickers, diamond art figures', booth: '8' },
  { name: 'Wendy Ingrassin', items: 'Mason jar firefly lights, LED decorative candle lights', booth: '36' },
  { name: 'Yobi Made Prints', items: '3D printed toys & collectibles', booth: '26' },
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
