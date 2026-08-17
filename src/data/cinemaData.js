export const LOCATIONS = [
  {
    id: 'loc-abule-egba',
    name: 'Heritage Cinemas — Abule-Egba',
    address: '117a, Lagos-Abeokuta Expressway, U-Turn, Abule-Egba, Lagos',
    city: 'Lagos, Nigeria',
    features: ['Dolby 7.1 Surround', '4K Laser Projection', 'Luxury VIP Recliners', 'Gourmet Concession Bar'],
    phone: '+234 812 345 6789',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'loc-mowe',
    name: 'Heritage Cinemas — Mowe',
    address: 'Heritage Mall Complex, Ofada Road, Mowe',
    city: 'Ogun State, Nigeria',
    features: ['4K Digital Projection', 'Dolby Atmos', 'Premium Recliners', 'Snack Lounge'],
    phone: '+234 809 876 5432',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  }
];

export const TICKET_TYPES = [
  {
    id: 'adult',
    name: 'Adult Standard',
    description: 'Standard full admission ticket',
    price: 4500,
    priceFormatted: '₦4,500'
  },
  {
    id: 'child',
    name: 'Child (Under 12)',
    description: 'Discounted admission for young moviegoers',
    price: 3000,
    priceFormatted: '₦3,000'
  },
  {
    id: 'student',
    name: 'Student Pass',
    description: 'Valid student identification card required at entry',
    price: 3500,
    priceFormatted: '₦3,500'
  },
  {
    id: 'vip',
    name: 'VIP Luxury Recliner',
    description: 'Ultra-plush leather recliner with dedicated table tray & seat service',
    price: 7500,
    priceFormatted: '₦7,500'
  }
];

export const SNACKS = [
  {
    id: 'snack-1',
    name: 'Heritage Mega Popcorn & Drink Combo',
    category: 'Combos',
    description: '1x Giant Tub of Fresh Butter Popcorn + 2x 50cl Chilled Soft Drinks',
    price: 4500,
    priceFormatted: '₦4,500',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'snack-2',
    name: 'Solo Moviegoers Treat',
    category: 'Combos',
    description: '1x Regular Sweet/Salted Popcorn + 1x 50cl Chilled Beverage',
    price: 3000,
    priceFormatted: '₦3,000',
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'snack-3',
    name: 'Spicy Grilled Shawarma / Hotdog',
    category: 'Hot Food',
    description: 'Grilled sausage/beef wrap with spicy cabbage relish and special sauce',
    price: 3500,
    priceFormatted: '₦3,500',
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'snack-4',
    name: 'Crispy Warm Nachos with Cheese & Salsa',
    category: 'Hot Food',
    description: 'Warm tortilla chips served with melted cheddar queso and mild salsa dip',
    price: 3800,
    priceFormatted: '₦3,800',
    badge: null,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'snack-5',
    name: 'Fresh Sweet & Salted Butter Popcorn',
    category: 'Popcorn',
    description: 'Freshly popped cinema classic kernels with signature butter glaze',
    price: 2500,
    priceFormatted: '₦2,500',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'snack-6',
    name: 'Chilled Fruit Juice / Soft Drink 50cl',
    category: 'Beverages',
    description: 'Ice-cold selection of Coca-Cola, Fanta, Sprite, or Chi Exotic Juice',
    price: 1200,
    priceFormatted: '₦1,200',
    badge: null,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOVIES = [
  {
    id: 'apaara-the-outcast',
    title: 'ÀPÀÁRÀ: THE OUTCAST',
    shortTitle: 'Apaara',
    tagline: 'When tradition casts you out, destiny calls you home.',
    status: 'now_showing',
    rating: 8.9,
    ageRating: '18',
    runtime: '1h 57m',
    runtimeMinutes: 117,
    releaseYear: 2026,
    genre: ['Epic', 'Drama', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM', 'DOLBY'],
    synopsis: 'Set in 19th-century Yorubaland, an exiled heir marked by an ancient ancestral prophecy returns from the wilderness during a catastrophic drought to challenge tyrannical warlords and unite warring kingdoms.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'ÀPÀÁRÀ',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'Kunle Afolayan',
    cast: [
      { name: 'Gabriel Afolayan', role: 'Apaara', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Sola Sobowale', role: 'Iya Agba', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
      { name: 'Odunlade Adekola', role: 'Balogun Ogun', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['1:00PM'],
      saturday: ['1:00PM', '7:30PM'],
      sunday: [],
      monTue: ['1:00PM'],
      wedThu: ['1:00PM']
    },
    techSpecs: {
      sound: 'Dolby 7.1 Surround',
      aspectRatio: '2.39:1 CinemaScope',
      resolution: '4K Native Digital',
      language: 'Yoruba, English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'omotara-johnson',
    title: 'THE RETURN OF OMOTARA JOHNSON',
    shortTitle: 'Omotara Johnson',
    tagline: 'Legacy, vengeance, and a destiny that cannot be outrun.',
    status: 'now_showing',
    rating: 8.9,
    ageRating: 'PG-13',
    runtime: '2h 00m',
    runtimeMinutes: 120,
    releaseYear: 2026,
    genre: ['Drama', 'Thriller', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM', 'DOLBY'],
    synopsis: 'The highly anticipated continuation of Omotara\'s gripping saga. Forced back into the high-stakes underworld of Lagos to protect her family\'s heritage, Omotara must outwit ruthless adversaries while uncovering deep-seated secrets.',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'OMOTARA JOHNSON',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'Kayode Kasum',
    cast: [
      { name: 'Kehinde Bankole', role: 'Omotara Johnson', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Femi Adebayo', role: 'Chief Balogun', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Bimbo Ademoye', role: 'Ronke', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['1:00PM', '7:00PM'],
      saturday: ['3:00PM', '7:00PM'],
      sunday: ['1:00PM', '7:00PM'],
      monTue: ['3:00PM', '5:00PM', '7:00PM'],
      wedThu: ['3:00PM', '5:00PM', '7:00PM']
    },
    techSpecs: {
      sound: 'Dolby 7.1 Surround & Spatial Audio',
      aspectRatio: '2.39:1 Anamorphic Widescreen',
      resolution: '4K Ultra HD Digital Master',
      language: 'Yoruba, English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'spider-man-brand-new-day',
    title: 'SPIDER-MAN: BRAND NEW DAY',
    shortTitle: 'Spider-Man',
    tagline: 'A clean slate comes with a dangerous price.',
    status: 'now_showing',
    rating: 8.8,
    ageRating: 'PG-13',
    runtime: '2h 00m',
    runtimeMinutes: 120,
    releaseYear: 2026,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    category: 'Action',
    formats: ['IMAX', 'DOLBY', 'PREMIUM'],
    synopsis: 'Starting over in New York with no memory of his past from those he loves, Peter Parker balances life as an anonymous college student with defending the city against a dangerous underworld syndicate.',
    heroImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'SPIDER-MAN',
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    director: 'Jon Watts',
    cast: [
      { name: 'Tom Holland', role: 'Peter Parker / Spider-Man', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Zendaya', role: 'MJ', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['3:00PM'],
      saturday: ['3:00PM', '5:25PM'],
      sunday: ['3:00PM', '5:25PM'],
      monTue: ['3:00PM'],
      wedThu: ['3:00PM']
    },
    techSpecs: {
      sound: 'Dolby Atmos / IMAX 12-Track',
      aspectRatio: '1.90:1 IMAX Expanded Ratio',
      resolution: '4K High Dynamic Range',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'njem-the-journey',
    title: 'NJEM: THE JOURNEY',
    shortTitle: 'Njem',
    tagline: 'The road to redemption tests every bond.',
    status: 'now_showing',
    rating: 8.7,
    ageRating: '15+',
    runtime: '2h 05m',
    runtimeMinutes: 125,
    releaseYear: 2026,
    genre: ['Adventure', 'Drama', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM', 'DOLBY'],
    synopsis: 'A thrilling cross-country expedition from Lagos to the Eastern heartlands where four estranged siblings must escort an enigmatic cargo while evading law enforcement and corrupt syndicates.',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'NJEM',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'CJ Obasi',
    cast: [
      { name: 'Stan Nze', role: 'Obinna', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Uzoamaka Aniunoh', role: 'Chioma', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['2:00PM', '6:00PM'],
      saturday: ['4:00PM', '8:00PM'],
      sunday: ['2:00PM', '6:00PM'],
      monTue: ['4:00PM'],
      wedThu: ['4:00PM']
    },
    techSpecs: {
      sound: 'Dolby 7.1 Surround',
      aspectRatio: '2.39:1 Scope',
      resolution: '4K Master',
      language: 'Igbo, English, Pidgin',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'moana-2',
    title: 'MOANA 2',
    shortTitle: 'Moana 2',
    tagline: 'The ocean is calling her back.',
    status: 'now_showing',
    rating: 8.6,
    ageRating: 'PG',
    runtime: '1h 40m',
    runtimeMinutes: 100,
    releaseYear: 2026,
    genre: ['Animation', 'Adventure', 'Family'],
    category: 'Animation',
    formats: ['DOLBY', 'PREMIUM'],
    synopsis: 'After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a brand-new crew of unlikely seafarers to the far seas of Oceania into dangerous, long-lost waters.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'MOANA 2',
    trailerUrl: 'https://www.youtube.com/embed/67vbA5ZJb3s',
    director: 'Dave Derrick Jr.',
    cast: [
      { name: 'Auliʻi Cravalho', role: 'Moana (voice)', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Dwayne Johnson', role: 'Maui (voice)', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['12:30PM', '4:30PM'],
      saturday: ['12:30PM', '4:30PM'],
      sunday: ['12:30PM', '4:30PM'],
      monTue: ['2:30PM'],
      wedThu: ['2:30PM']
    },
    techSpecs: {
      sound: 'Dolby Atmos Spatial Sound',
      aspectRatio: '2.39:1',
      resolution: '4K Ultra HD',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'one-night-only',
    title: 'ONE NIGHT ONLY',
    shortTitle: 'One Night Only',
    tagline: 'One diner. One secret. One night.',
    status: 'now_showing',
    rating: 8.4,
    ageRating: 'PG-13',
    runtime: '1h 48m',
    runtimeMinutes: 108,
    releaseYear: 2026,
    genre: ['Thriller', 'Crime', 'Comedy'],
    category: 'Action',
    formats: ['PREMIUM', 'DOLBY'],
    synopsis: 'When a late-night diner in downtown Lagos becomes the unexpected refuge for an escaped heiress and two bungling thieves during a torrential storm, a game of psychological cat-and-mouse begins.',
    heroImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'ONE NIGHT ONLY',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'Toka McBaror',
    cast: [
      { name: 'Blossom Chukwujekwu', role: 'Dante', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Ini Dima-Okojie', role: 'Simi', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['6:30PM', '9:15PM'],
      saturday: ['6:30PM', '9:15PM'],
      sunday: ['6:30PM', '9:15PM'],
      monTue: ['6:30PM'],
      wedThu: ['6:30PM']
    },
    techSpecs: {
      sound: 'Dolby 7.1 Surround',
      aspectRatio: '2.00:1 Univisium',
      resolution: '4K Digital Master',
      language: 'English, Pidgin',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'the-end-of-oak-street',
    title: 'THE END OF OAK STREET',
    shortTitle: 'Oak Street',
    tagline: 'Quiet suburbs hide the darkest truths.',
    status: 'now_showing',
    rating: 8.3,
    ageRating: 'PG-13',
    runtime: '1h 52m',
    runtimeMinutes: 112,
    releaseYear: 2026,
    genre: ['Mystery', 'Drama'],
    category: 'Drama',
    formats: ['PREMIUM'],
    synopsis: 'An investigative journalist uncovers a decades-old suburban conspiracy when an eccentric resident suddenly vanishes from a gated estate on Oak Street.',
    heroImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'THE END OF OAK STREET',
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    director: 'Michael Bayo',
    cast: [
      { name: 'Deyemi Okanlawon', role: 'Victor', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['1:30PM', '5:30PM'],
      saturday: ['1:30PM', '5:30PM'],
      sunday: ['1:30PM', '5:30PM'],
      monTue: ['3:30PM'],
      wedThu: ['3:30PM']
    },
    techSpecs: {
      sound: 'Dolby Digital 5.1',
      aspectRatio: '16:9 Widescreen',
      resolution: '4K',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'above-and-below',
    title: 'ABOVE AND BELOW',
    shortTitle: 'Above & Below',
    tagline: 'Survival between the deep ocean and the sky.',
    status: 'now_showing',
    rating: 8.5,
    ageRating: 'PG-13',
    runtime: '2h 10m',
    runtimeMinutes: 130,
    releaseYear: 2026,
    genre: ['Sci-Fi', 'Thriller', 'Action'],
    category: 'Action',
    formats: ['IMAX', 'DOLBY', 'PREMIUM'],
    synopsis: 'When a deep-sea research station loses communication during an atmospheric anomaly, the crew must work together with an orbital station team to survive an unprecedented oceanic disaster.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'ABOVE AND BELOW',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'Roland Emmerich',
    cast: [
      { name: 'Chris Hemsworth', role: 'Captain Miller', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['3:30PM', '8:00PM'],
      saturday: ['3:30PM', '8:00PM'],
      sunday: ['3:30PM', '8:00PM'],
      monTue: ['5:00PM'],
      wedThu: ['5:00PM']
    },
    techSpecs: {
      sound: 'Dolby Atmos / IMAX 12-Track',
      aspectRatio: '1.90:1 IMAX',
      resolution: '4K Laser',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'call-of-my-life',
    title: 'CALL OF MY LIFE',
    shortTitle: 'Call of My Life',
    tagline: 'When purpose calls, courage answers.',
    status: 'now_showing',
    rating: 8.7,
    ageRating: 'PG',
    runtime: '1h 55m',
    runtimeMinutes: 115,
    releaseYear: 2026,
    genre: ['Drama', 'Family', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM'],
    synopsis: 'An inspiring musical drama about a determined young prodigy from a humble neighbourhood who captures the nation\'s heart on a prestigious international music stage.',
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'CALL OF MY LIFE',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    director: 'Tope Oshin',
    cast: [
      { name: 'Nse Ikpe-Etim', role: 'Mama Faith', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['1:00PM', '5:00PM'],
      saturday: ['1:00PM', '5:00PM'],
      sunday: ['1:00PM', '5:00PM'],
      monTue: ['3:00PM'],
      wedThu: ['3:00PM']
    },
    techSpecs: {
      sound: 'Dolby 7.1 Surround',
      aspectRatio: '16:9',
      resolution: '4K',
      language: 'English, Yoruba',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'paw-patrol-the-movie-2',
    title: 'PAW PATROL: THE MOVIE',
    shortTitle: 'PAW Patrol',
    tagline: 'No pup is too small for a giant adventure!',
    status: 'now_showing',
    rating: 8.5,
    ageRating: 'PG',
    runtime: '1h 32m',
    runtimeMinutes: 92,
    releaseYear: 2026,
    genre: ['Animation', 'Adventure', 'Family'],
    category: 'Animation',
    formats: ['PREMIUM'],
    synopsis: 'When a magical meteor crashes in Adventure City, it gives the PAW Patrol pups superpowers, turning them into The Mighty Pups to take on evil schemes!',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'PAW PATROL',
    trailerUrl: 'https://www.youtube.com/embed/67vbA5ZJb3s',
    director: 'Cal Brunker',
    cast: [
      { name: 'Mckenna Grace', role: 'Skye (voice)', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['11:00AM', '2:00PM'],
      saturday: ['11:00AM', '2:00PM'],
      sunday: ['11:00AM', '2:00PM'],
      monTue: ['1:00PM'],
      wedThu: ['1:00PM']
    },
    techSpecs: {
      sound: 'Dolby Digital 5.1',
      aspectRatio: '2.39:1',
      resolution: '4K',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'ajosepo-2-the-gathering',
    title: 'AJOSEPO 2: THE GATHERING',
    shortTitle: 'Ajosepo 2',
    tagline: 'Two families, one celebration, and double the drama.',
    status: 'now_showing',
    rating: 8.7,
    ageRating: 'PG-13',
    runtime: '2h 00m',
    runtimeMinutes: 120,
    releaseYear: 2026,
    genre: ['Comedy', 'Family', 'Drama', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM', 'DOLBY'],
    synopsis: 'Following the dramatic events of the first wedding, the families gather again for an extravagant anniversary celebration at a luxury resort. Old rivalries reignite and hilarious secrets explode as the matriarchs clash over family hierarchy.',
    heroImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'AJOSEPO 2',
    trailerUrl: 'https://www.youtube.com/embed/67vbA5ZJb3s',
    director: 'Kayode Kasum',
    cast: [
      { name: 'Mike Afolarin', role: 'Dapo', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Tomike Adeoye', role: 'Tiwatope', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['5:00PM', '8:20PM'],
      saturday: ['1:00PM'],
      sunday: ['1:00PM', '5:00PM'],
      monTue: ['1:00PM', '5:55PM'],
      wedThu: ['1:00PM', '5:25PM']
    },
    techSpecs: {
      sound: 'Dolby Digital 5.1 Surround',
      aspectRatio: '16:9 HD Widescreen',
      resolution: '4K Master',
      language: 'English, Yoruba, Pidgin',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'sweet-16',
    title: 'SWEET 16',
    shortTitle: 'Sweet 16',
    tagline: 'Growing up is the ultimate adventure.',
    status: 'now_showing',
    rating: 8.5,
    ageRating: 'PG',
    runtime: '2h 00m',
    runtimeMinutes: 120,
    releaseYear: 2026,
    genre: ['Romance', 'Drama', 'Nollywood'],
    category: 'Nollywood',
    formats: ['PREMIUM'],
    synopsis: 'A heartfelt romantic drama exploring the poignant journey of a young girl stepping into womanhood in modern Lagos, discovering her artistic passion, first love, and the complex bond with her devoted single father.',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'SWEET 16',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    director: 'Willis Ikedum',
    cast: [
      { name: 'Alexx Ekubo', role: 'Uncle Williams', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Yemi Alade', role: 'Auntie Joy', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {
      friday: ['3:00PM'],
      saturday: ['5:00PM'],
      sunday: ['3:00PM'],
      monTue: ['7:55PM'],
      wedThu: ['7:25PM']
    },
    techSpecs: {
      sound: 'Dolby Digital 5.1',
      aspectRatio: '2.00:1 Univisium',
      resolution: '4K Ultra HD',
      language: 'English, Pidgin',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'avatar-fire-and-ash',
    title: 'AVATAR: FIRE AND ASH',
    shortTitle: 'Avatar 3',
    tagline: 'The journey to Pandora continues.',
    status: 'coming_soon',
    rating: 9.1,
    ageRating: 'PG-13',
    runtime: '3h 10m',
    runtimeMinutes: 190,
    releaseYear: 2026,
    genre: ['Sci-Fi', 'Action', 'Fantasy'],
    category: 'Sci-Fi',
    formats: ['IMAX', 'DOLBY', 'PREMIUM'],
    synopsis: 'Jake Sully and Neytiri face an aggressive clan of Na\'vi known as the "Ash People," taking the epic conflict for Pandora into unexplored volcanic territories.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'AVATAR: FIRE & ASH',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    director: 'James Cameron',
    cast: [
      { name: 'Sam Worthington', role: 'Jake Sully', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {},
    techSpecs: {
      sound: 'Dolby Atmos Object Audio',
      aspectRatio: '1.85:1 3D IMAX High Frame Rate',
      resolution: '4K Native Dual-Laser 3D',
      language: 'English',
      subtitles: 'English [CC]'
    }
  },
  {
    id: 'the-odyssey',
    title: 'THE ODYSSEY',
    shortTitle: 'The Odyssey',
    tagline: 'The ancient myth returns to the big screen.',
    status: 'coming_soon',
    rating: 8.8,
    ageRating: '18',
    runtime: '2h 30m',
    runtimeMinutes: 150,
    releaseYear: 2026,
    genre: ['Action', 'History', 'Epic'],
    category: 'Action',
    formats: ['IMAX', 'DOLBY'],
    synopsis: 'An epic adaptation of Homer\'s ancient legend following Odysseus on his perilous ten-year journey home after the fall of Troy.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    posterImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    titleLogo: 'THE ODYSSEY',
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    director: 'Ridley Scott',
    cast: [
      { name: 'Paul Mescal', role: 'Odysseus', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
    ],
    showtimes: {},
    techSpecs: {
      sound: 'Dolby Atmos 12-Track',
      aspectRatio: '2.39:1',
      resolution: '4K Laser',
      language: 'English, Greek',
      subtitles: 'English [CC]'
    }
  }
];

export const CATEGORIES = ['All', 'Nollywood', 'Action', 'Drama', 'Animation', 'Sci-Fi'];

export const INITIAL_USER_BOOKINGS = [
  {
    bookingId: 'HC-849201',
    movieId: 'apaara-the-outcast',
    movieTitle: 'ÀPÀÁRÀ: THE OUTCAST',
    posterImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    location: 'Heritage Cinemas — Abule-Egba',
    date: 'Saturday, Aug 15, 2026',
    dayKey: 'saturday',
    time: '7:30PM',
    format: 'Heritage VIP Dolby Lounge',
    tickets: [
      { name: 'Adult Standard', count: 2, price: 4500 },
      { name: 'VIP Luxury Recliner', count: 1, price: 7500 }
    ],
    snacks: [
      { name: 'Heritage Mega Popcorn & Drink Combo', count: 1, price: 4500 }
    ],
    totalPaid: 21000,
    status: 'Confirmed',
    bookedAt: '2026-08-14T18:30:00Z'
  }
];
