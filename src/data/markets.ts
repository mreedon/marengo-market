/*
  2026 season dates, shared by the homepage, the schedule page and the park map
  caption. These lived as three hand-edited copies; the map caption was the one
  that went stale, because the other two only ever render `nextMarket`.

  `music` is per-market on purpose: only the next market renders, so a lineup
  note retires itself when the date rolls over instead of going stale.

  `rainDate` is stored bare ('October 2'). The schedule table prefixes the
  weekday itself; the homepage prints it as-is.
*/

export type Market = {
  date: string;
  rainDate: string | null;
  music: { act: string; time: string } | null;
};

export const markets: Market[] = [
  { date: 'Friday, May 29',       rainDate: 'June 5',      music: null },
  { date: 'Friday, June 26',      rainDate: null,          music: null },
  { date: 'Friday, August 7',     rainDate: null,          music: null },
  { date: 'Friday, August 28',    rainDate: 'September 4', music: { act: 'Two Girls One Guitar', time: '6:30–8 PM' } },
  { date: 'Friday, September 25', rainDate: 'October 2',   music: null },
];

/* A market stays flagged "Next" through its own evening, so compare against the
   start of today rather than the current time. Resolved at build time — it can
   go stale between deploys, which is why a rebuild after a date passes is a real
   content change and not just a no-op.

  ⚠ This MUST stay a function called from page frontmatter, never a `const`
  computed at module top level. Top-level module code is evaluated inside the
  Cloudflare adapter's bundle, where the clock is frozen at the epoch — a
  module-scope `new Date()` reads 1 Jan 1970 and every page picks the FIRST
  market of the season as "next". Page frontmatter runs on the real clock. */
export function getNextMarket(): Market | undefined {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return markets.find(m => {
    const d = new Date(m.date.replace('Friday, ', '') + ', 2026');
    return d >= today;
  });
}
