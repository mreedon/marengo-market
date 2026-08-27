/*
  Vendor roster for the current market date.

  Source of truth: the organizer's roster PDFs, emailed to the vendor list a few
  days before each market (marengoilmarket@gmail.com). The booth-numbered roster
  and the park map arrive in a second, later email — `booth` comes from those.

  The PDF is the authority on WHO is attending; prior git revisions of this file
  are the authority on WORDING. The sheet is title-case and sometimes truncates
  (Fearless Garden's "Garden Access" is really "garden accessories"), so pull
  descriptions for returning vendors out of git rather than retyping the sheet.
  Site style is sentence case.

  `booth` is the raw token from the map: a booth number, 'FT1'/'FT2' for the two
  food truck pads, or 'GRASS' for the grass spot. Use boothLabel() to display it.
*/

export type Vendor = {
  name: string;
  items: string;
  booth: string;
  menu?: string;
};

/* Alphabetical by business name. The count badge on /vendors is vendors.length. */
export const vendors: Vendor[] = [
  { name: 'Ava Celine & Co. Bakery', booth: '43', items: "Gourmet Reese's & Oreo cupcakes" },
  { name: 'Beads By Beans', booth: '6', items: 'Beaded jewelry including earrings, necklaces, bracelets, badge reels, keychains' },
  { name: 'Cabrera Sweets', booth: '36', items: 'Bento cakes, chocolate covered strawberries, cakecicles, dulces enchilados' },
  { name: "Carol's Crafts", booth: '23', items: 'Embroidered towels, crocheted towels, cat toys, face cloth' },
  { name: 'Circus Act', booth: 'GRASS', items: 'Circus fitness' },
  { name: 'Cub Scouts', booth: '40', items: 'Non-profit' },
  { name: 'DBM Designs By Denise', booth: '7', items: 'T-shirts, sweatshirts, pants, crochet items, canvas bags, kids items, pictures' },
  { name: 'Divine Designs', booth: '24', items: 'Sewing & embroidery items' },
  { name: "Doo-Broz Meats n' Treats", booth: '14', items: 'Pet treats' },
  { name: 'Dorothy Jewelry', booth: '38', items: 'Jewelry' },
  { name: 'Easy Peasy Lemon Squeezy', booth: '44', items: 'Fresh squeezed lemonade, more than 8 flavor options with added boba', menu: '/menus/easy-peasy-lemon-squeezy-menu.jpg' },
  { name: 'Enchanted Crafts', booth: '5', items: 'Jewelry, sublimation fabric items, crochet, crystals' },
  { name: 'ERG Elite Remodeling', booth: '29', items: 'Home improvement' },
  { name: 'Fearless Garden', booth: '4', items: 'Birdbaths, plant stands, garden accessories' },
  { name: 'Healthy Hemp', booth: '25', items: 'CBD products' },
  { name: 'JD&J Crafts', booth: '10', items: 'Diamond art, wreaths, wooden decor' },
  { name: 'Joy In Motion Dance Studio', booth: '1', items: '' },
  { name: 'Little Farm On The Creek', booth: '28', items: 'Garden starters, whipped tallow balm, dish soap sets, honey' },
  { name: "Lucy's Crochet Cuties", booth: '3', items: 'Crochet plush toys' },
  { name: 'Marengo Union Library Dist.', booth: '39', items: 'Non-profit' },
  { name: 'Maureen Cortilet', booth: '35', items: 'Wall decor, suncatchers, towels, diamond art, cups & plants' },
  { name: 'Nails by Alleah', booth: '33', items: 'Custom nail sets (glue on)' },
  { name: 'Norwex', booth: '13', items: 'Norwex independent consultant' },
  { name: 'Nutrilite, XS & Artistry', booth: '31', items: 'Organic vitamin drinks, vitamin B12 based energy drinks, premium skincare, cold drinks available' },
  { name: 'RC Short Kits & Prints', booth: '18', items: '3D printed & resin art, jewelry, games, bookmarks, coasters, key chains, laser etched glass, metal & acrylic signs, laser engraved leather tags & chains' },
  { name: 'Redefined Designs', booth: '12', items: 'Upcycled clothing & accessories' },
  { name: 'Rhoads Creations', booth: '15', items: 'Diamond dots, wood crafts, wristlets, pens, cups' },
  { name: 'Roisin Gardens', booth: '20', items: 'Fresh cut flowers' },
  { name: 'Scatterbrained Crafters', booth: '42', items: 'Suncatchers, coasters, magnets, paper crafts, crochet items (farmers market bags, cup holders)' },
  { name: 'Selah & Ash', booth: '34', items: "Original herbal teas, ginger flakes, children's books authored by Selah & Ash, memory butterflies" },
  { name: 'Simply Mae Designs', booth: '41', items: 'Keychains, sublimation, shirts, cups, home decor, stickers' },
  { name: 'Small Town Heart', booth: '19', items: 'Wood signs, koozies, car decals' },
  { name: 'Soda Squeezed', booth: 'FT2', items: 'Dirty soda, lemonade', menu: '/menus/soda-squeezed-menu.jpg' },
  { name: 'Spirit Bombs', booth: '45', items: 'Bath bombs, shower steamers, herbal tea blends, hair oil, sea moss, Korean skincare, herbal salts, salt scrubs' },
  { name: 'Starlight Hidden Candles', booth: '9', items: 'Candles' },
  { name: 'Sunbeams Uganda', booth: '17', items: 'Handmade baskets, aprons, handbags, totes' },
  { name: 'Sung & Shine', booth: '26', items: 'Earrings, bracelets, keychains (charms & beads)' },
  { name: 'Sweet Jems', booth: '22', items: 'Sugar & chocolate chip cookies' },
  { name: 'Taqueria Paloma', booth: 'FT1', items: 'Mexican food truck', menu: '/menus/taqueria-paloma-menu.jpg' },
  { name: 'Tolentino Creations and Desserts', booth: '30', items: 'Ribbon flower bouquets, pipe cleaner flower bouquets, keychains, can coozies, car coasters, lip balm holders & more' },
  { name: 'Travis Coudal for Ward 4 & Marengo Weekly', booth: '2', items: 'Ward 4 campaign booth and local news' },
  { name: 'Two Heifers', booth: '11', items: 'Breads, cookies, treats' },
  { name: 'Unhallowed, LLC', booth: '16', items: 'Hot sauces and rubs' },
  { name: "Vee's Crafts & More", booth: '8', items: 'Scrunchies, bracelets, stickers, diamond art figures' },
  { name: 'Windy Ridge Acres', booth: '37', items: 'Jams, extracts, produce, fabric crafts' },
  { name: 'Yobi Made Prints', booth: '27', items: '3D printed toys & collectibles' },
  { name: 'Young Ole Soul', booth: '21', items: 'Canned goods' },
];

export function boothLabel(booth: string): string {
  if (booth === 'FT1' || booth === 'FT2') return 'Food truck';
  if (booth === 'GRASS') return 'Grass spot';
  return `Booth ${booth}`;
}

export const vendorByBooth: Map<string, Vendor> = new Map(vendors.map(v => [v.booth, v]));
