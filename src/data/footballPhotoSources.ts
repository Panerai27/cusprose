export type PhotoSourceType = 'fifa' | 'federation' | 'getty' | 'wikimedia' | 'other';
export type PhotoLicenseStatus = 'pending-review' | 'approved' | 'rejected';

export interface FootballPhotoSourceMeta {
  sourceUrl: string;
  sourceTitle: string;
  sourceType: PhotoSourceType;
  licenseStatus: PhotoLicenseStatus;
}

export const FOOTBALL_PHOTO_SOURCES: Record<string, FootballPhotoSourceMeta> = {
  'lionel-messi': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-2026-squads-confirmed',
    sourceTitle: 'FIFA World Cup 2026 squads confirmed',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'cristiano-ronaldo': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/26-superstars-cristiano-ronaldo',
    sourceTitle: 'Cristiano Ronaldo: Stats, quotes, highlights, trivia and quiz - FIFA',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'kylian-mbappe': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/kylian-mbappe-of-france-poses-during-the-official-fifa-news-photo/1442234453',
    sourceTitle: 'Kylian Mbappe of France poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'neymar': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/neymar-of-brazil-poses-during-the-official-fifa-world-cup-news-photo/1443089060',
    sourceTitle: 'Neymar of Brazil poses during the official FIFA World Cup Qatar 2022 ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'erling-haaland': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/erling-haaland-of-norway-poses-for-a-portrait-during-the-news-photo/2281137887?adppopup=true',
    sourceTitle: 'Erling Haaland of Norway poses for a portrait during the official...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'vinicius-junior': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/vinicius-junior-brazil-records-stats-quotes',
    sourceTitle: 'Vinicius Junior: Stats, quotes, highlights, trivia and quiz - FIFA',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'luka-modric': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/luka-modric-of-croatia-poses-during-the-official-fifa-world-news-photo/1443076684',
    sourceTitle: 'Luka Modric of Croatia poses during the official FIFA World Cup Qatar ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'kevin-de-bruyne': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/kevin-de-bruyne-belgium-highlights-stats',
    sourceTitle: 'Kevin De Bruyne | Profile | FIFA World Cup 2026',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'robert-lewandowski': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/robert-lewandowski-of-poland-poses-during-the-official-fifa-news-photo/1442524019',
    sourceTitle: 'Robert Lewandowski of Poland poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'harry-kane': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/harry-kane-of-england-poses-during-the-official-fifa-world-news-photo/2280773881',
    sourceTitle: 'Harry Kane of England poses during the official FIFA World Cup 2026 ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'mohamed-salah': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/mohamed-salah-of-egypt-poses-for-a-portrait-during-the-news-photo/2281464380?adppopup=true',
    sourceTitle: 'Mohamed Salah of Egypt poses for a portrait during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'luis-suarez': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/articles/luis-suarez-career-uruguay',
    sourceTitle: 'Suarez era at Uruguay comes to end - FIFA',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'sergio-ramos': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/sergio-ramos-of-spain-poses-during-the-official-fifa-world-news-photo/450355658',
    sourceTitle: 'Sergio Ramos of Spain poses during the official Fifa World Cup 2014 ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'manuel-neuer': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/manuel-neuer-of-germany-poses-for-a-portrait-during-the-news-photo/2280940798',
    sourceTitle: 'Manuel Neuer of Germany poses for a portrait during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'virgil-van-dijk': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/virgil-van-dijk-of-netherlands-poses-for-a-portrait-during-news-photo/2280381531?adppopup=true',
    sourceTitle: 'Virgil van Dijk of Netherlands poses for a portrait during the...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'jude-bellingham': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/jude-bellingham-of-england-poses-for-a-portrait-during-the-news-photo/2280722725',
    sourceTitle: 'Jude Bellingham of England poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'rodri': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/rodri-of-spain-poses-for-a-portrait-during-the-official-news-photo/2281070339?adppopup=true',
    sourceTitle: 'Rodri of Spain poses for a portrait during the official FIFA World ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'federico-valverde': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/federico-valverde-of-uruguay-poses-for-a-portrait-during-news-photo/2281285112?adppopup=true',
    sourceTitle: 'Federico Valverde of Uruguay poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'julian-alvarez': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/julian-alvarez-stats-quotes-records',
    sourceTitle: 'Julian Alvarez: Stats, quotes, highlights, trivia and quiz - FIFA',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'lautaro-martinez': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/lautaro-martinez-of-argentina-poses-during-the-official-news-photo/1442742404',
    sourceTitle: 'Lautaro Martinez of Argentina poses during the official FIFA World ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'emiliano-martinez': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/emiliano-martinez-of-argentina-poses-for-a-portrait-during-news-photo/2281294539?adppopup=true',
    sourceTitle: 'Emiliano Martinez of Argentina poses for a portrait during the...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'enzo-fernandez': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/enzo-fernandez-of-argentina-poses-for-a-portrait-during-the-news-photo/2281294524?adppopup=true',
    sourceTitle: 'Enzo Fernandez of Argentina poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'alexis-mac-allister': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/alexis-mac-allister-of-argentina-poses-for-a-portrait-news-photo/2281294383?adppopup=true',
    sourceTitle: 'Alexis Mac Allister of Argentina poses for a portrait during the...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'martin-odegaard': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/norway-squad-announcement-stale-solbakken',
    sourceTitle: 'Norway squad announcement | FIFA World Cup 2026',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'bukayo-saka': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/bukayo-saka-of-england-poses-for-a-portrait-during-the-news-photo/2280722741?adppopup=true',
    sourceTitle: 'Bukayo Saka of England poses for a portrait during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'phil-foden': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/phil-foden-of-england-is-seen-during-the-fifa-world-cup-news-photo/1448302055',
    sourceTitle: 'Phil Foden of England is seen during the FIFA World Cup Qatar 2022...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'cole-palmer': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/cole-palmer-of-chelsea-poses-for-a-portrait-during-the-news-photo/2220244324',
    sourceTitle: 'Cole Palmer of Chelsea poses for a portrait during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'declan-rice': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/declan-rice-of-england-during-the-official-fifa-world-cup-news-photo/2280771086',
    sourceTitle: 'Declan Rice of England during the official FIFA World Cup 2026...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'trent-alexander-arnold': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/trent-alexander-arnold-of-england-poses-during-the-official-news-photo/1442013344',
    sourceTitle: 'Trent Alexander-Arnold of England poses during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'bruno-fernandes': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/bruno-fernandes-of-portugal-poses-during-the-official-fifa-news-photo/1442847922',
    sourceTitle: 'Bruno Fernandes of Portugal poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'bernardo-silva': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/bernardo-silva-of-portugal-poses-for-a-portrait-during-the-news-photo/2281584686?adppopup=true',
    sourceTitle: 'Bernardo Silva of Portugal poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'rafael-leao': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/rafael-leao-of-portugal-poses-for-a-portrait-during-the-news-photo/2281584768?adppopup=true',
    sourceTitle: 'Rafael Leao of Portugal poses for a portrait during the official FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'joao-felix': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/joao-felix-of-portugal-poses-during-the-official-fifa-world-news-photo/1443058718',
    sourceTitle: 'Joao Felix of Portugal poses during the official FIFA World Cup Qatar ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'achraf-hakimi': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/achraf-hakimi-of-morocco-poses-for-a-portrait-during-the-news-photo/2280418815',
    sourceTitle: 'Achraf Hakimi of Morocco poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'yassine-bounou': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/yassine-bounou-of-morocco-poses-for-a-portrait-during-the-news-photo/2280419155',
    sourceTitle: 'Yassine Bounou of Morocco poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'victor-osimhen': {
    sourceUrl: 'https://www.gettyimages.com/photos/victor-osimhen-nigeria',
    sourceTitle: '2,229 Victor Osimhen Nigeria Stock Photos, High-Res Pictures, and ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'ademola-lookman': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/ademola-lookman-of-the-super-eagles-warms-up-during-the-news-photo/2233946267?adppopup=true',
    sourceTitle: 'Ademola Lookman of the Super Eagles warms up during the 2026 FIFA ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'mohammed-kudus': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/mohammed-kudus-of-ghana-poses-during-the-official-fifa-news-photo/1443110653',
    sourceTitle: 'Mohammed Kudus of Ghana poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'takefusa-kubo': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/takefusa-kubo-of-japan-poses-during-the-official-fifa-world-news-photo/2280185207?adppopup=true',
    sourceTitle: 'Takefusa Kubo of Japan poses during the official FIFA World Cup 2026 ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'kaoru-mitoma': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/kaoru-mitoma-of-japan-poses-during-the-official-fifa-world-news-photo/1442484152',
    sourceTitle: 'Kaoru Mitoma of Japan poses during the official FIFA World Cup Qatar ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'son-heung-min': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/son-heungmin-stats-quotes-records',
    sourceTitle: 'Son Heungmin: Stats, quotes, highlights, trivia and quiz - FIFA',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'kim-min-jae': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/min-jae-kim-of-korea-republic-poses-for-a-portrait-during-news-photo/2280523519?adppopup=true',
    sourceTitle: 'Min-Jae Kim of Korea Republic poses for a portrait during the...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'christian-pulisic': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/christian-pulisic-of-the-united-states-poses-for-a-portrait-news-photo/2280772729?adppopup=true',
    sourceTitle: 'United States Portraits - FIFA World Cup 2026 - Getty Images',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'alphonso-davies': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/alphonso-davies-of-canada-poses-for-a-portrait-during-the-news-photo/2280760796?adppopup=true',
    sourceTitle: 'Alphonso Davies of Canada poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'jonathan-david': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/jonathan-david-of-canada-poses-during-the-official-fifa-news-photo/1443092605',
    sourceTitle: 'Jonathan David of Canada poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'santiago-gimenez': {
    sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/mexico-squad-announced',
    sourceTitle: 'Javier Aguirre reveals Mexico&#x27;s 26-strong FIFA World Cup squad',
    sourceType: 'fifa',
    licenseStatus: 'pending-review',
  },
  'edson-alvarez': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/edson-alvarez-of-mexico-poses-during-the-official-fifa-news-photo/1442717096',
    sourceTitle: 'Edson Alvarez of Mexico poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'antoine-griezmann': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/antoine-griezmann-of-france-poses-during-the-official-fifa-news-photo/1442234382',
    sourceTitle: 'Antoine Griezmann of France poses during the official FIFA World Cup ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'ousmane-dembele': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/ousmane-dembele-of-france-poses-for-a-portrait-during-the-news-photo/2281411653?adppopup=true',
    sourceTitle: 'Ousmane Dembele of France poses for a portrait during the official ...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
  'aurelien-tchouameni': {
    sourceUrl: 'https://www.gettyimages.com/detail/news-photo/aurelien-tchouameni-of-france-poses-for-a-portrait-during-news-photo/2281411483?adppopup=true',
    sourceTitle: 'Aurelien Tchouameni of France poses for a portrait during the...',
    sourceType: 'getty',
    licenseStatus: 'rejected',
  },
};

export const FOOTBALL_REUSABLE_PHOTO_SOURCES: Record<string, FootballPhotoSourceMeta> = Object.fromEntries(
  Object.entries(FOOTBALL_PHOTO_SOURCES).filter(([, meta]) =>
    (meta.sourceType === 'fifa' || meta.sourceType === 'federation') && meta.licenseStatus !== 'rejected'
  )
);
