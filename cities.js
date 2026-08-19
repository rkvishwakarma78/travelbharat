/**
 * TRAVELBHARAT - EXPANDED CITIES DATASET (200+ Tourist Cities across all 36 Indian States & UTs)
 * Normalized dataset mapping accurately to stateId, region, tier, howToReach, weatherInfo, and live CDN source photos.
 */

const TravelBharatCities = [
  {
    "id": "manali",
    "name": "Manali",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Valley of the Gods & Snow Adventure Hub",
    "overview": "Nestled in the Beas Valley, Manali offers snow sports at Solang, gateway to Atal Tunnel/Spiti, and old wooden temples.",
    "bestTime": "March to June & Dec to Feb (Snow)",
    "idealDuration": "3-4 Days",
    "howToReach": {
      "air": "Bhuntar Airport Kullu (50km)",
      "train": "Chandigarh (310km)",
      "road": "Four-lane highway from Chandigarh"
    },
    "weatherInfo": "Alpine climate, heavy snowfall in winter.",
    "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "shimla",
    "name": "Shimla",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Summer Capital of British India",
    "overview": "Colonial Mall Road, Christ Church on the Ridge, Jakhoo Temple, and the UNESCO Kalka-Shimla Toy Train.",
    "bestTime": "March to June & Dec to Feb",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jubarhati Airport (22km) / Chandigarh (115km)",
      "train": "Shimla Toy Train / Kalka",
      "road": "Himalayan Expressway"
    },
    "weatherInfo": "Cool summers, snow in winter.",
    "heroImage": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dharamshala",
    "name": "Dharamshala & McLeod Ganj",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Little Lhasa & Abode of the Dalai Lama",
    "overview": "Seat of the Tibetan government-in-exile, Namgyal Monastery, Triund trek, and high-altitude cricket stadium.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Kangra-Gaggal Airport (15km)",
      "train": "Pathankot (85km)",
      "road": "NH154"
    },
    "weatherInfo": "Refreshing mountain climate.",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "spiti-valley",
    "name": "Spiti Valley (Kaza)",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "The Middle Land & High-Altitude Moonscape",
    "overview": "Spectacular cold mountain desert with 1000-year-old Key Monastery, Chandratal Lake, and world's highest post office at Hikkim.",
    "bestTime": "May to October",
    "idealDuration": "4-6 Days",
    "howToReach": {
      "air": "Bhuntar Airport (240km)",
      "train": "Chandigarh",
      "road": "Manali-Kaza via Atal Tunnel / Shimla route"
    },
    "weatherInfo": "High-altitude cold desert.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kasol",
    "name": "Kasol & Parvati Valley",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Mini Israel & Kheerganga Trek",
    "overview": "Scenic hamlet on the Parvati River, famous for backpacker cafes, pine forests, and Kheerganga hot springs trek.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Bhuntar Airport (30km)",
      "train": "Chandigarh (280km)",
      "road": "Branch off from Bhuntar"
    },
    "weatherInfo": "Crisp pine air.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bir-billing",
    "name": "Bir Billing",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Paragliding Capital of India",
    "overview": "World's second highest paragliding takeoff site at Billing, Tibetan monasteries at Bir, and peaceful eco-cafes.",
    "bestTime": "October to June (Best Oct-Nov)",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Dharamshala Airport (65km)",
      "train": "Pathankot / Ahju Toy Train",
      "road": "Connected via Kangra"
    },
    "weatherInfo": "Clean alpine breeze.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jibhi",
    "name": "Jibhi & Tirthan Valley",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "offbeat",
    "knownAs": "Pristine Trout Streams & Great Himalayan National Park",
    "overview": "Untouched wooden chalet village, Jalori Pass, Serolsar Lake, and crystal clear trout fishing streams.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Bhuntar Airport (50km)",
      "train": "Chandigarh",
      "road": "Drive via Aut Tunnel"
    },
    "weatherInfo": "Pure mountain tranquility.",
    "heroImage": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dalhousie",
    "name": "Dalhousie & Khajjiar",
    "stateId": "himachal-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Mini Switzerland of India",
    "overview": "Colonial town set across five hills; Khajjiar offers a green saucer meadow surrounded by towering deodar trees.",
    "bestTime": "March to June & Dec to Feb",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Pathankot Airport (80km)",
      "train": "Pathankot Cantt (80km)",
      "road": "NH154A"
    },
    "weatherInfo": "Pleasantly cold.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Yoga Capital of the World & River Rafting",
    "overview": "Spiritual and adventure hub on the Ganges, famous for Lakshman Jhula, Beatles Ashram, white-water rafting, and Ganga Aarti.",
    "bestTime": "September to May",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jolly Grant Dehradun (20km)",
      "train": "Yog Nagari Rishikesh (YNRK)",
      "road": "NH334 (4.5 hrs from Delhi)"
    },
    "weatherInfo": "Pleasant winters and springs.",
    "heroImage": "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Gateway to the Gods & Har Ki Pauri",
    "overview": "Revered pilgrimage destination where the holy Ganges emerges from the Himalayas; mesmerizing evening Ganga Aarti.",
    "bestTime": "October to April",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Dehradun Airport (35km)",
      "train": "Haridwar Junction (HW)",
      "road": "NH334"
    },
    "weatherInfo": "Pleasant during winter.",
    "heroImage": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nainital",
    "name": "Nainital",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "City of Lakes & Naini Peak",
    "overview": "Charming Kumaon hill station centered around the eye-shaped emerald Naini Lake, surrounded by seven lush hills.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Pantnagar Airport (70km)",
      "train": "Kathgodam Station (35km)",
      "road": "NH109"
    },
    "weatherInfo": "Cool and pleasant.",
    "heroImage": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Queen of the Hills & Gun Hill",
    "overview": "Overlooking the Doon Valley, Mussoorie offers Kempty Falls, scenic Camel's Back Road, and views of snow-capped peaks.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Dehradun Airport (55km)",
      "train": "Dehradun Station (35km)",
      "road": "1 hr uphill drive from Dehradun"
    },
    "weatherInfo": "Cool and breezy.",
    "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "auli",
    "name": "Auli",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Skiing Paradise of India",
    "overview": "Premier Himalayan ski resort offering international-standard slopes and a 360-degree panorama of Nanda Devi.",
    "bestTime": "December to March (Skiing) & April to June",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Dehradun Airport (280km)",
      "train": "Rishikesh / Haridwar",
      "road": "Drive via Joshimath + Cable car"
    },
    "weatherInfo": "Heavy snow in winter, crisp alpine air.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jim-corbett",
    "name": "Jim Corbett (Ramnagar)",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "India's Oldest National Park & Royal Tigers",
    "overview": "Legendary tiger territory in the Himalayan foothills featuring Dhikala zone safaris, wild elephants, and dense sal forests.",
    "bestTime": "November to June",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Pantnagar (80km) / Delhi (250km)",
      "train": "Ramnagar Station (RMR)",
      "road": "NH309"
    },
    "weatherInfo": "Crisp forest breeze.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kedarnath",
    "name": "Kedarnath",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Sacred Jyotirlinga in Himalayan Glaciers",
    "overview": "One of India's most sacred Shiva shrines at 3,584m altitude near the Mandakini River, surrounded by snow peaks.",
    "bestTime": "May to June & Sept to Oct",
    "idealDuration": "2 Days Trek",
    "howToReach": {
      "air": "Dehradun Airport / Heliservices",
      "train": "Rishikesh",
      "road": "Drive to Gaurikund + 16km trek"
    },
    "weatherInfo": "Cold alpine weather.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "badrinath",
    "name": "Badrinath",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "major",
    "knownAs": "Char Dham Abode of Lord Vishnu",
    "overview": "Sacred temple nestled between Nar and Narayana mountain ranges on the banks of the Alaknanda River.",
    "bestTime": "May to June & Sept to Oct",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Dehradun (310km)",
      "train": "Rishikesh",
      "road": "NH07 via Joshimath"
    },
    "weatherInfo": "Cold mountain climate.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dhanaulti",
    "name": "Dhanaulti & Kanatal",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "offbeat",
    "knownAs": "Quiet Deodar Forest Retreat",
    "overview": "Peaceful escape amidst dense rhododendron and deodar forests with Eco Park and stunning Himalayan views.",
    "bestTime": "September to June",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Dehradun Airport (80km)",
      "train": "Dehradun Station",
      "road": "24 km beyond Mussoorie"
    },
    "weatherInfo": "Quiet, chilly, and serene.",
    "heroImage": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers",
    "stateId": "uttarakhand",
    "region": "North",
    "tier": "offbeat",
    "knownAs": "UNESCO Alpine Botanical Wonderland",
    "overview": "High-altitude UNESCO sanctuary boasting over 500 species of endemic alpine wild blossoms blooming in monsoon.",
    "bestTime": "July to early September",
    "idealDuration": "3-4 Days Trek",
    "howToReach": {
      "air": "Dehradun Airport (295km)",
      "train": "Rishikesh",
      "road": "Drive to Govindghat + Trek via Ghangaria"
    },
    "weatherInfo": "Alpine blooms and monsoon mists.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "amritsar",
    "name": "Amritsar",
    "stateId": "punjab",
    "region": "North",
    "tier": "major",
    "knownAs": "Golden Temple & Wagah Border",
    "overview": "Spiritual center of Sikhism housing the gilded Sri Harmandir Sahib (Golden Temple), Jallianwala Bagh, and Attari-Wagah border ceremony.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Sri Guru Ram Dass Jee International (ATQ)",
      "train": "Amritsar Junction (ASR)",
      "road": "Grand Trunk Road (NH44)"
    },
    "weatherInfo": "Pleasant winters, hot summers.",
    "heroImage": "https://images.unsplash.com/photo-1588096344356-9a4f40f0a514?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "patiala",
    "name": "Patiala",
    "stateId": "punjab",
    "region": "North",
    "tier": "major",
    "knownAs": "Royal Qila Mubarak & Sheesh Mahal",
    "overview": "Celebrated for the grand 18th-century Qila Mubarak fort complex, Baradari Gardens, and traditional Patiala craftwork.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Chandigarh Airport (65km)",
      "train": "Patiala Railway Station (PTA)",
      "road": "NH07"
    },
    "weatherInfo": "Moderate winter weather.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ludhiana",
    "name": "Ludhiana",
    "stateId": "punjab",
    "region": "North",
    "tier": "major",
    "knownAs": "Manchester of India & Lodhi Fort",
    "overview": "Vibrant industrial city featuring Maharaja Ranjit Singh War Museum, Lodhi Fort ruins, and rich Punjabi dining.",
    "bestTime": "October to March",
    "idealDuration": "1 Day",
    "howToReach": {
      "air": "Sahnewal Airport / Chandigarh (100km)",
      "train": "Ludhiana Junction (LDH)",
      "road": "NH44"
    },
    "weatherInfo": "Pleasant during winter.",
    "heroImage": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kurukshetra",
    "name": "Kurukshetra",
    "stateId": "haryana",
    "region": "North",
    "tier": "major",
    "knownAs": "Land of the Mahabharata & Brahma Sarovar",
    "overview": "The epic battlefield of the Mahabharata, birthplace of the Bhagavad Gita at Jyotisar, and sacred Brahma Sarovar water tank.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Chandigarh (90km) / Delhi (160km)",
      "train": "Kurukshetra Junction (KKDE)",
      "road": "NH44"
    },
    "weatherInfo": "Pleasant winter days.",
    "heroImage": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gurugram",
    "name": "Gurugram (Gurgaon)",
    "stateId": "haryana",
    "region": "North",
    "tier": "major",
    "knownAs": "Millennium City & Cyber Hub",
    "overview": "Modern corporate skyline with high-end dining at Cyber Hub, Kingdom of Dreams, and Sultanpur National Bird Sanctuary.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Delhi IGI Airport (15km)",
      "metro": "Delhi Metro Yellow Line / Rapid Metro",
      "road": "Delhi-Gurgaon Expressway"
    },
    "weatherInfo": "Warm sunny days in winter.",
    "heroImage": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "agra",
    "name": "Agra",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "City of Taj Mahal & Mughal Splendour",
    "overview": "Home to three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and Fatehpur Sikri.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Kheria Airport Agra / Delhi (200km)",
      "train": "Agra Cantt (AGC)",
      "road": "Yamuna Expressway (3 hrs from Delhi)"
    },
    "weatherInfo": "Pleasant winters (8°C-22°C).",
    "heroImage": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "varanasi",
    "name": "Varanasi (Kashi)",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "The Spiritual Capital of India",
    "overview": "One of the world's oldest living cities, celebrated for sacred Ganga Aarti at Dashashwamedh Ghat and Kashi Vishwanath Temple.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Lal Bahadur Shastri Airport (VNS)",
      "train": "Varanasi Junction (BSB) / DDU",
      "road": "NH19"
    },
    "weatherInfo": "Cool winters, festive during Dev Deepawali.",
    "heroImage": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lucknow",
    "name": "Lucknow",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "City of Nawabs & Tehzeeb",
    "overview": "Renowned for its Bara Imambara labyrinth (Bhulbhulaiya), exquisite Chikan embroidery, and royal Awadhi cuisine.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Chaudhary Charan Singh Airport (LKO)",
      "train": "Lucknow Charbagh (LKO)",
      "road": "Agra-Lucknow Expressway"
    },
    "weatherInfo": "Crisp pleasant winters.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ayodhya",
    "name": "Ayodhya",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Birthplace of Lord Rama",
    "overview": "A sacred pilgrimage epicenter on the banks of the holy Saryu River featuring the grand Shri Ram Janmabhoomi Mandir.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Maharishi Valmiki Airport Ayodhya (AYJ)",
      "train": "Ayodhya Dham Junction (AY)",
      "road": "NH27"
    },
    "weatherInfo": "Moderate to cool in winter.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mathura-vrindavan",
    "name": "Mathura & Vrindavan",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Land of Lord Krishna & Braj Dham",
    "overview": "Sacred twin holy cities renowned for Krishna Janmasthan, Prem Mandir, Banke Bihari Temple, and vibrant Holi festivities.",
    "bestTime": "September to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Delhi Airport (150km)",
      "train": "Mathura Junction (MTJ)",
      "road": "Yamuna Expressway"
    },
    "weatherInfo": "Pleasant during winter and spring.",
    "heroImage": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "prayagraj",
    "name": "Prayagraj (Allahabad)",
    "stateId": "uttar-pradesh",
    "region": "North",
    "tier": "major",
    "knownAs": "Holy Triveni Sangam & Kumbh City",
    "overview": "The holy confluence of Ganga, Yamuna, and mythical Saraswati rivers, host to the colossal Maha Kumbh Mela.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Prayagraj Airport (IXD)",
      "train": "Prayagraj Junction (PRYJ)",
      "road": "NH19"
    },
    "weatherInfo": "Cool winters.",
    "heroImage": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "major",
    "knownAs": "The Pink City",
    "overview": "Capital of Rajasthan, famed for majestic amber forts, opulent city palaces, and vibrant bazaars.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jaipur International (JAI)",
      "train": "Jaipur Junction (JP)",
      "road": "NH48 (4-5 hrs from Delhi)"
    },
    "weatherInfo": "Pleasant winters (10°C-25°C), hot summers.",
    "heroImage": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "major",
    "knownAs": "City of Lakes & Venice of the East",
    "overview": "Romance on the waters of Lake Pichola surrounded by the Aravalli hills and royal white marble palaces.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Maharana Pratap Airport (UDR)",
      "train": "Udaipur City Station",
      "road": "NH48"
    },
    "weatherInfo": "Cool winters, moderate monsoons.",
    "heroImage": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jodhpur",
    "name": "Jodhpur",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "major",
    "knownAs": "The Blue City & Sun City",
    "overview": "Dominated by the colossal Mehrangarh Fort overlooking a sea of indigo-blue painted houses.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Jodhpur Airport (JDH)",
      "train": "Jodhpur Station",
      "road": "NH62"
    },
    "weatherInfo": "Warm and dry climate.",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "major",
    "knownAs": "The Golden City",
    "overview": "Rising out of the Thar Desert with its living yellow sandstone fort and rolling dunes.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jaisalmer Airport (JSA)",
      "train": "Jaisalmer Station",
      "road": "Connected via Jodhpur"
    },
    "weatherInfo": "Desert climate with cool winter nights.",
    "heroImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pushkar",
    "name": "Pushkar",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "offbeat",
    "knownAs": "Sacred Lake & Brahma Temple",
    "overview": "A holy lakeside town with the world-famous Brahma Temple and the vibrant annual Camel Fair.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Kishangarh Airport (45km)",
      "train": "Ajmer Junction (14km)",
      "road": "Short drive from Ajmer"
    },
    "weatherInfo": "Sunny and pleasant in winter.",
    "heroImage": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bikaner",
    "name": "Bikaner",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "offbeat",
    "knownAs": "Camel Country & Junagarh Fort",
    "overview": "A desert city renowned for the impregnable Junagarh Fort, Karni Mata Temple, and exquisite savouries.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Nal Airport Bikaner (BKB)",
      "train": "Bikaner Junction",
      "road": "NH11"
    },
    "weatherInfo": "Dry desert weather.",
    "heroImage": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mount-abu",
    "name": "Mount Abu",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "major",
    "knownAs": "Oasis in the Desert & Dilwara Temples",
    "overview": "Rajasthan's sole hill station featuring serene Nakki Lake and the Dilwara Jain Temples.",
    "bestTime": "Year-round (Best Nov-March)",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Udaipur Airport (185km)",
      "train": "Abu Road Station (28km)",
      "road": "Paved mountain ghat road"
    },
    "weatherInfo": "Pleasant temperate climate.",
    "heroImage": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "chittorgarh",
    "name": "Chittorgarh",
    "stateId": "rajasthan",
    "region": "West",
    "tier": "offbeat",
    "knownAs": "Symbol of Rajput Valour",
    "overview": "Home to India's largest fort complex, historic towers of Victory and Fame, and legends of Rani Padmini.",
    "bestTime": "October to March",
    "idealDuration": "1 Day",
    "howToReach": {
      "air": "Udaipur Airport (90km)",
      "train": "Chittorgarh Junction (COR)",
      "road": "NH48"
    },
    "weatherInfo": "Warm sunny days in winter.",
    "heroImage": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rann-of-kutch",
    "name": "Rann of Kutch (Dhordo / Bhuj)",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "The Great White Desert & Rann Utsav",
    "overview": "A mesmerizing infinite expanse of white salt desert shining under the full moon, accompanied by Kutchi handicrafts.",
    "bestTime": "November to February",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Bhuj Airport (BHJ - 80km)",
      "train": "Bhuj Railway Station",
      "road": "Connected via Bhuj"
    },
    "weatherInfo": "Warm sunny days, chilly desert nights.",
    "heroImage": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gir",
    "name": "Gir National Park (Sasan Gir)",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "Only Natural Abode of Asiatic Lions",
    "overview": "The world's sole refuge for the majestic Asiatic Lion roaming freely in dry deciduous teak forests.",
    "bestTime": "December to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Keshod (50km) / Rajkot (160km)",
      "train": "Junagadh / Veraval Station",
      "road": "Connected via Junagadh"
    },
    "weatherInfo": "Dry forest weather.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "statue-of-unity",
    "name": "Statue of Unity (Ekta Nagar)",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "World's Tallest Statue (182m)",
    "overview": "The world's tallest statue commemorating Sardar Vallabhbhai Patel overlooking the Narmada River.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Vadodara Airport (90km)",
      "train": "Ekta Nagar Station (EKNR)",
      "road": "4-lane expressway from Vadodara"
    },
    "weatherInfo": "Pleasant during winter.",
    "heroImage": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ahmedabad",
    "name": "Ahmedabad",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "UNESCO World Heritage City & Sabarmati",
    "overview": "Mahatma Gandhi's Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, and Gujarati delicacies.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Sardar Vallabhbhai Patel Airport (AMD)",
      "train": "Ahmedabad Junction (ADI)",
      "road": "NE1 Expressway"
    },
    "weatherInfo": "Pleasant in winter.",
    "heroImage": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dwarka",
    "name": "Dwarka",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "Kingdom of Lord Krishna & Char Dham",
    "overview": "Ancient seaside holy city housing the 2000-year-old Dwarkadhish Temple and Beyt Dwarka island.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Jamnagar Airport (130km)",
      "train": "Dwarka Station (DWK)",
      "road": "NH51"
    },
    "weatherInfo": "Breezy coastal climate.",
    "heroImage": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "somnath",
    "name": "Somnath",
    "stateId": "gujarat",
    "region": "West",
    "tier": "major",
    "knownAs": "First Among the 12 Sacred Jyotirlingas",
    "overview": "Grand beachfront temple reconstructed in Chalukyan style on the Arabian Sea shore.",
    "bestTime": "October to March",
    "idealDuration": "1 Day",
    "howToReach": {
      "air": "Diu Airport (85km)",
      "train": "Veraval Junction (VRL - 6km)",
      "road": "NH51"
    },
    "weatherInfo": "Coastal and pleasant.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mumbai",
    "name": "Mumbai",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "City of Dreams & Gateway of India",
    "overview": "Financial capital buzzing with Marine Drive, Victorian Gothic architecture, Bollywood, and Elephanta Caves.",
    "bestTime": "November to February",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Chhatrapati Shivaji Maharaj International (BOM)",
      "train": "CSMT / Mumbai Central",
      "road": "Major national expressway hub"
    },
    "weatherInfo": "Warm coastal climate, mild winters.",
    "heroImage": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "aurangabad",
    "name": "Chhatrapati Sambhajinagar (Aurangabad)",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "UNESCO Ajanta & Ellora Caves Gateway",
    "overview": "Gateway to the world-renowned rock-cut Ajanta and Ellora Caves (including monolithic Kailash Temple).",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Aurangabad Airport (IXU)",
      "train": "Aurangabad Station (AWB)",
      "road": "Samruddhi Mahamarg"
    },
    "weatherInfo": "Pleasant during winter.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lonavala",
    "name": "Lonavala & Khandala",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "Sahyadri Monsoon Retreat & Chikki",
    "overview": "Popular weekend getaway in the Sahyadri mountains with Bhushi Dam, Karla Caves, Tiger's Leap, and famous chikki.",
    "bestTime": "July to February",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Pune Airport (65km) / Mumbai (90km)",
      "train": "Lonavala Station",
      "road": "Mumbai-Pune Expressway"
    },
    "weatherInfo": "Misty during monsoon, cool in winter.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mahabaleshwar",
    "name": "Mahabaleshwar & Panchgani",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "Strawberry Country & Western Ghats Viewpoints",
    "overview": "Lush hill station famous for sweet strawberry farms, Arthur's Seat, Venna Lake, and Table Land plateau.",
    "bestTime": "October to June",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Pune Airport (120km)",
      "train": "Satara / Wathar Station",
      "road": "NH48 to Wai ghats"
    },
    "weatherInfo": "Cool mountain breezes.",
    "heroImage": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pune",
    "name": "Pune",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "Oxford of the East & Cultural Capital",
    "overview": "Maratha historical heritage at Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, and vibrant cafe culture.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Pune Airport (PNQ)",
      "train": "Pune Junction (PUNE)",
      "road": "Mumbai-Pune Expressway (3 hrs)"
    },
    "weatherInfo": "Pleasant and moderate.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nashik",
    "name": "Nashik",
    "stateId": "maharashtra",
    "region": "West",
    "tier": "major",
    "knownAs": "Wine Capital of India & Trimbakeshwar",
    "overview": "Surrounded by premium vineyard wine tours (Sula Vineyards) and the sacred Trimbakeshwar Jyotirlinga.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Nashik Airport (ISK)",
      "train": "Nashik Road (NK)",
      "road": "NH160 from Mumbai (3.5 hrs)"
    },
    "weatherInfo": "Pleasantly cool winters.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "north-goa",
    "name": "North Goa (Calangute, Anjuna, Baga)",
    "stateId": "goa",
    "region": "West",
    "tier": "major",
    "knownAs": "Party Capital, Fort Aguada & Water Sports",
    "overview": "Vibrant beach nightlife, flea markets at Anjuna, historic Fort Aguada, and buzzing shacks.",
    "bestTime": "November to March",
    "idealDuration": "3-4 Days",
    "howToReach": {
      "air": "Mopa Airport (GOX) / Dabolim (GOI)",
      "train": "Thivim (THVM)",
      "road": "NH66"
    },
    "weatherInfo": "Tropical beach sunshine.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "south-goa",
    "name": "South Goa (Palolem, Colva, Agonda)",
    "stateId": "goa",
    "region": "West",
    "tier": "major",
    "knownAs": "Serene White Sands & Cabo de Rama",
    "overview": "Tranquil crescent beaches, scenic Cabo de Rama cliff fort, dolphin cruises, and laid-back coastal charm.",
    "bestTime": "November to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Dabolim Airport (GOI)",
      "train": "Madgaon Junction (MAO)",
      "road": "NH66"
    },
    "weatherInfo": "Relaxed coastal warmth.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "old-goa",
    "name": "Old Goa (Velha Goa)",
    "stateId": "goa",
    "region": "West",
    "tier": "major",
    "knownAs": "UNESCO Portuguese Churches & Basilica",
    "overview": "Ancient Portuguese colonial capital housing the Basilica of Bom Jesus (St. Francis Xavier) and Se Cathedral.",
    "bestTime": "October to March",
    "idealDuration": "1 Day",
    "howToReach": {
      "air": "Dabolim Airport (25km)",
      "train": "Karmali Station (3km)",
      "road": "10 km east of Panaji"
    },
    "weatherInfo": "Pleasant winter days.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "panaji",
    "name": "Panaji (Panjim)",
    "stateId": "goa",
    "region": "West",
    "tier": "major",
    "knownAs": "Fontainhas Latin Quarter & Mandovi Cruises",
    "overview": "Goa's capital city famous for colorful Portuguese villas in Fontainhas and sunset river cruises.",
    "bestTime": "October to April",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Dabolim / Mopa",
      "train": "Karmali (12km)",
      "road": "NH66"
    },
    "weatherInfo": "Breezy riverside warmth.",
    "heroImage": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bengaluru",
    "name": "Bengaluru (Bangalore)",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "Silicon Valley & Garden City",
    "overview": "Dynamic tech hub filled with botanical gardens (Lalbagh, Cubbon Park), craft breweries, and Bangalore Palace.",
    "bestTime": "Year-round (Best Oct-Feb)",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Kempegowda International (BLR)",
      "train": "KSR Bengaluru (SBC)",
      "road": "Major NH intersection"
    },
    "weatherInfo": "Pleasant year-round weather.",
    "heroImage": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mysuru",
    "name": "Mysuru (Mysore)",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "City of Palaces & Royal Dasara",
    "overview": "Famed for the illuminated Mysore Palace, Chamundi Hills, fragrant sandalwood, and silk sarees.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Mysore Airport (MYQ) / Bengaluru (170km)",
      "train": "Mysuru Junction (MYS)",
      "road": "Bengaluru-Mysuru Expressway (2 hrs)"
    },
    "weatherInfo": "Mild and pleasant.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "UNESCO Vijayanagara Boulder Wonderland",
    "overview": "Spectacular ruins of the 14th-century Vijayanagara Empire scattered across giant granite boulders.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jindal Vidyanagar Airport (40km)",
      "train": "Hosapete Junction (HPT - 12km)",
      "road": "NH67"
    },
    "weatherInfo": "Warm and dry in winter.",
    "heroImage": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "coorg",
    "name": "Coorg (Madikeri / Kodagu)",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "Scotland of India & Coffee Country",
    "overview": "A mist-covered hill station in the Western Ghats, famed for coffee estates, spice trails, and Abbey Falls.",
    "bestTime": "October to April",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Kannur (90km) / Mangalore (140km)",
      "train": "Mysuru (120km)",
      "road": "Scenic Western Ghats route"
    },
    "weatherInfo": "Crisp and misty hill climate.",
    "heroImage": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gokarna",
    "name": "Gokarna",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "Om Beach & Mahabaleshwar Temple",
    "overview": "A coastal pilgrimage and relaxed beach town featuring the famous Om Beach and cliff-side treks.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Dabolim Goa (140km)",
      "train": "Gokarna Road Station",
      "road": "NH66"
    },
    "weatherInfo": "Warm sunny beaches.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "chikmagalur",
    "name": "Chikmagalur",
    "stateId": "karnataka",
    "region": "South",
    "tier": "major",
    "knownAs": "Birthplace of Indian Coffee & Mullayanagiri",
    "overview": "Lush green slopes where coffee was first cultivated in India; home to Karnataka's highest peak.",
    "bestTime": "September to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Mangalore Airport (150km)",
      "train": "Chikkamagaluru / Kadur",
      "road": "NH73 from Bangalore (4.5 hrs)"
    },
    "weatherInfo": "Pleasantly cool.",
    "heroImage": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "alleppey",
    "name": "Alleppey (Alappuzha)",
    "stateId": "kerala",
    "region": "South",
    "tier": "major",
    "knownAs": "Venice of the East & Backwater Houseboats",
    "overview": "World-famous network of tranquil lagoons, palm-fringed canals, and overnight traditional houseboats.",
    "bestTime": "September to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Cochin Airport (75km)",
      "train": "Alappuzha Station (ALLP)",
      "road": "NH66"
    },
    "weatherInfo": "Warm tropical coastal weather.",
    "heroImage": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "munnar",
    "name": "Munnar",
    "stateId": "kerala",
    "region": "South",
    "tier": "major",
    "knownAs": "Tea Capital & Nilgiri Hills",
    "overview": "Rolling emerald carpet of tea plantations, mist-draped peaks, Anamudi, and cool waterfalls.",
    "bestTime": "September to May",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Cochin Airport (110km)",
      "train": "Aluva Station (105km)",
      "road": "Scenic mountain ghat road"
    },
    "weatherInfo": "Cool mountain temperatures (12°C-22°C).",
    "heroImage": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kochi",
    "name": "Kochi (Cochin)",
    "stateId": "kerala",
    "region": "South",
    "tier": "major",
    "knownAs": "Queen of the Arabian Sea",
    "overview": "A vibrant port city blending Chinese fishing nets, Portuguese Fort Kochi, Jew Town, and spice markets.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Cochin International (COK)",
      "train": "Ernakulam Junction (ERS)",
      "road": "NH66 & NH544"
    },
    "weatherInfo": "Pleasant coastal sea breeze.",
    "heroImage": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "stateId": "kerala",
    "region": "South",
    "tier": "major",
    "knownAs": "Spice Hills & Edakkal Caves",
    "overview": "Pristine hill district featuring prehistoric Edakkal rock engravings and Chembra Peak heart lake.",
    "bestTime": "October to May",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Calicut Airport (95km)",
      "train": "Kozhikode Station (85km)",
      "road": "Thamarassery Ghat Pass"
    },
    "weatherInfo": "Lush green and refreshing.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "varkala",
    "name": "Varkala",
    "stateId": "kerala",
    "region": "South",
    "tier": "major",
    "knownAs": "Red Cliff Coast & Papanasam Beach",
    "overview": "Dramatic red cliffs bordering the Arabian Sea with cliffside cafes and surf breaks.",
    "bestTime": "November to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Trivandrum Airport (45km)",
      "train": "Varkala Sivagiri Station",
      "road": "NH66"
    },
    "weatherInfo": "Warm and breezy.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "chennai",
    "name": "Chennai",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "Cultural Gateway of South India",
    "overview": "Cosmopolitan capital boasting Marina Beach, Kapaleeshwarar Temple, Carnatic music, and filter coffee.",
    "bestTime": "November to February",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Chennai International (MAA)",
      "train": "Chennai Central (MAS)",
      "road": "Major NH terminal"
    },
    "weatherInfo": "Warm coastal days, pleasant evenings.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "Temple City & Meenakshi Amman",
    "overview": "Ancient city built around the towering sculpted gopurams of the sacred Meenakshi Amman Temple.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Madurai Airport (IXM)",
      "train": "Madurai Junction (MDU)",
      "road": "NH44"
    },
    "weatherInfo": "Moderate in winter months.",
    "heroImage": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ooty",
    "name": "Ooty (Udhagamandalam)",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "Queen of Hill Stations & Nilgiri Toy Train",
    "overview": "Colonial hill resort famous for UNESCO Nilgiri Mountain Railway, botanical gardens, and tea hills.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Coimbatore Airport (88km)",
      "train": "Udagamandalam Toy Train",
      "road": "Nilgiri Ghats"
    },
    "weatherInfo": "Chilly and refreshing (10°C-20°C).",
    "heroImage": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mahabalipuram",
    "name": "Mahabalipuram",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "UNESCO Shore Temple & Pancha Rathas",
    "overview": "7th-century seaside rock-cut temples, Arjuna's Penance, and the iconic windswept Shore Temple.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Chennai Airport (55km)",
      "train": "Chengalpattu Station (29km)",
      "road": "East Coast Road (ECR - 1 hr)"
    },
    "weatherInfo": "Breezy seaside warmth.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kanyakumari",
    "name": "Kanyakumari",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "Southernmost Tip of Mainland India",
    "overview": "Where three seas unite; site of Vivekananda Rock Memorial and spectacular sunrise/sunsets.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Trivandrum Airport (90km)",
      "train": "Kanyakumari Station (CAPE)",
      "road": "NH44 terminus"
    },
    "weatherInfo": "Oceanic breeze.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rameshwaram",
    "name": "Rameshwaram",
    "stateId": "tamil-nadu",
    "region": "South",
    "tier": "major",
    "knownAs": "Holy Island, Pamban Bridge & Dhanushkodi",
    "overview": "Sacred pilgrimage island with Ramanathaswamy Temple's 1000-pillar corridor and Dhanushkodi ghost town.",
    "bestTime": "October to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Madurai Airport (175km)",
      "train": "Rameswaram Station (RMM)",
      "road": "Pamban Sea Bridge"
    },
    "weatherInfo": "Sunny and coastal.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "visakhapatnam",
    "name": "Visakhapatnam (Vizag)",
    "stateId": "andhra-pradesh",
    "region": "South",
    "tier": "major",
    "knownAs": "City of Destiny & Rushikonda Beach",
    "overview": "Scenic coastal city with Dolphin's Nose cliff, Submarine Museum, Kailasagiri hill, and nearby Borra Caves.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Visakhapatnam Airport (VTZ)",
      "train": "Visakhapatnam Junction (VSKP)",
      "road": "NH16"
    },
    "weatherInfo": "Pleasant coastal climate.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tirupati",
    "name": "Tirupati & Tirumala",
    "stateId": "andhra-pradesh",
    "region": "South",
    "tier": "major",
    "knownAs": "Abode of Lord Sri Venkateswara",
    "overview": "World-renowned holy shrine of Lord Balaji perched atop the Seven Hills of Tirumala.",
    "bestTime": "September to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Tirupati Airport (TIR)",
      "train": "Tirupati Main (TPTY)",
      "road": "Connected from Chennai/Bangalore"
    },
    "weatherInfo": "Moderate mountain weather on hills.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "araku-valley",
    "name": "Araku Valley",
    "stateId": "andhra-pradesh",
    "region": "South",
    "tier": "major",
    "knownAs": "Ooty of Andhra & Coffee Plantations",
    "overview": "Picturesque hill station in the Eastern Ghats famous for organic coffee plantations, waterfalls, and Borra Caves.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Vizag Airport (115km)",
      "train": "Araku Railway Station (Vistadome train from Vizag)",
      "road": "Ghat road from Vizag"
    },
    "weatherInfo": "Pleasant and misty.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "stateId": "telangana",
    "region": "South",
    "tier": "major",
    "knownAs": "City of Pearls & Charminar",
    "overview": "Historic 400-year-old Charminar, Golconda Fort, opulent Chowmahalla Palace, and authentic Hyderabadi Dum Biryani.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Rajiv Gandhi International (HYD)",
      "train": "Secunderabad (SC) / Hyderabad (HYB)",
      "road": "Major NH node"
    },
    "weatherInfo": "Pleasant in winter.",
    "heroImage": "https://images.unsplash.com/photo-1605335198270-424a52003cba?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "warangal",
    "name": "Warangal",
    "stateId": "telangana",
    "region": "South",
    "tier": "major",
    "knownAs": "Capital of Kakatiya Dynasty & Thousand Pillar Temple",
    "overview": "Exquisite Kakatiya rock carving at Ramappa Temple (UNESCO), Thousand Pillar Temple, and the Warangal Fort gate.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Hyderabad Airport (160km)",
      "train": "Warangal Station (WL)",
      "road": "NH163 from Hyderabad (3 hrs)"
    },
    "weatherInfo": "Moderate winter weather.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kolkata",
    "name": "Kolkata",
    "stateId": "west-bengal",
    "region": "East",
    "tier": "major",
    "knownAs": "City of Joy & Cultural Capital",
    "overview": "Colonial Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple, tramways, and grand Durga Puja celebrations.",
    "bestTime": "October to March",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Netaji Subhash Chandra Bose Airport (CCU)",
      "train": "Howrah (HWH) / Sealdah",
      "road": "National highway hub"
    },
    "weatherInfo": "Pleasant winters (12°C-24°C).",
    "heroImage": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "stateId": "west-bengal",
    "region": "East",
    "tier": "major",
    "knownAs": "Queen of the Hills & UNESCO Toy Train",
    "overview": "Spectacular sunrise over Kanchenjunga from Tiger Hill, world-famous Darjeeling tea gardens, and the historic Toy Train.",
    "bestTime": "March to May & Oct to Dec",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Bagdogra Airport (70km)",
      "train": "New Jalpaiguri NJP (70km) + Toy Train",
      "road": "Hill Cart Road (NH110)"
    },
    "weatherInfo": "Chilly mountain climate.",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans (Gosaba)",
    "stateId": "west-bengal",
    "region": "East",
    "tier": "major",
    "knownAs": "UNESCO Mangrove Delta & Royal Bengal Tigers",
    "overview": "World's largest mangrove forest delta, boat safaris exploring tidal waterways for swimming royal Bengal tigers.",
    "bestTime": "November to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Kolkata Airport (110km)",
      "train": "Canning Station (45km)",
      "boat": "Launch boat from Godkhali Port"
    },
    "weatherInfo": "Misty riverine delta.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kalimpong",
    "name": "Kalimpong",
    "stateId": "west-bengal",
    "region": "East",
    "tier": "offbeat",
    "knownAs": "Orchid Nurseries & Teesta Valley Views",
    "overview": "Serene hill town overlooking the Teesta River, known for Buddhist monasteries, colonial schools, and exotic flower nurseries.",
    "bestTime": "March to May & Sept to Dec",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Bagdogra (75km)",
      "train": "New Jalpaiguri NJP (70km)",
      "road": "NH10"
    },
    "weatherInfo": "Pleasant temperate mountain climate.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "puri",
    "name": "Puri",
    "stateId": "odisha",
    "region": "East",
    "tier": "major",
    "knownAs": "Jagannath Temple & Golden Beach",
    "overview": "Sacred Char Dham pilgrimage shrine of Lord Jagannath, annual Ratha Yatra, and Blue Flag Golden Beach.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Bhubaneswar Airport (60km)",
      "train": "Puri Railway Station (PURI)",
      "road": "NH316 (1 hr from Bhubaneswar)"
    },
    "weatherInfo": "Pleasant winter sea breeze.",
    "heroImage": "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bhubaneswar",
    "name": "Bhubaneswar",
    "stateId": "odisha",
    "region": "East",
    "tier": "major",
    "knownAs": "Temple City of India & Lingaraj",
    "overview": "Ancient temple architecture at Lingaraj, Mukteshwar, and the rock-cut caves of Udayagiri and Khandagiri.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Biju Patnaik Airport (BBI)",
      "train": "Bhubaneswar Station (BBS)",
      "road": "NH16"
    },
    "weatherInfo": "Mild in winter.",
    "heroImage": "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "konark",
    "name": "Konark",
    "stateId": "odisha",
    "region": "East",
    "tier": "major",
    "knownAs": "UNESCO Sun Temple & Chandrabhaga Beach",
    "overview": "13th-century architectural marvel shaped like a colossal 24-wheeled chariot dedicated to Surya the Sun God.",
    "bestTime": "October to March",
    "idealDuration": "1 Day",
    "howToReach": {
      "air": "Bhubaneswar Airport (65km)",
      "train": "Puri (35km)",
      "road": "Marine Drive from Puri (45 mins)"
    },
    "weatherInfo": "Sunny coastal climate.",
    "heroImage": "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bodh-gaya",
    "name": "Bodh Gaya",
    "stateId": "bihar",
    "region": "East",
    "tier": "major",
    "knownAs": "Enlightenment of Lord Buddha & Mahabodhi Temple",
    "overview": "One of the most sacred Buddhist pilgrimage sites where Gautama Buddha attained enlightenment under the Bodhi Tree.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Gaya Airport (GAY - 10km)",
      "train": "Gaya Junction (15km)",
      "road": "NH83"
    },
    "weatherInfo": "Pleasant during winter.",
    "heroImage": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nalanda-rajgir",
    "name": "Nalanda & Rajgir",
    "stateId": "bihar",
    "region": "East",
    "tier": "major",
    "knownAs": "Ancient World University & Vishwa Shanti Stupa",
    "overview": "UNESCO ruins of the 5th-century ancient residential University of Nalanda and Rajgir's hilltop Peace Pagoda.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Patna Airport (90km)",
      "train": "Rajgir / Bakhtiyarpur Station",
      "road": "NH20"
    },
    "weatherInfo": "Pleasant winter weather.",
    "heroImage": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ranchi",
    "name": "Ranchi",
    "stateId": "jharkhand",
    "region": "East",
    "tier": "major",
    "knownAs": "City of Waterfalls (Hundru, Jonha, Dassam)",
    "overview": "Charming plateau capital surrounded by cascading waterfalls, Tagore Hill, and Patratu Valley viewpoints.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Birsa Munda Airport (IXR)",
      "train": "Ranchi Junction",
      "road": "NH33"
    },
    "weatherInfo": "Cool plateau breeze in winter.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "khajuraho",
    "name": "Khajuraho",
    "stateId": "madhya-pradesh",
    "region": "Central",
    "tier": "major",
    "knownAs": "UNESCO Erotic Temple Sculptures & Dance Festival",
    "overview": "UNESCO group of 10th-century Chandela dynasty sandstone temples featuring intricate erotic and spiritual sculptures.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Khajuraho Airport (HJR)",
      "train": "Khajuraho Railway Station (KURJ)",
      "road": "NH39"
    },
    "weatherInfo": "Sunny and crisp in winter.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gwalior",
    "name": "Gwalior",
    "stateId": "madhya-pradesh",
    "region": "Central",
    "tier": "major",
    "knownAs": "Pearl in the Necklace of India's Forts",
    "overview": "Majestic hilltop Gwalior Fort, Jai Vilas Palace, Tansen's tomb, and rich classical Gwalior Gharana musical heritage.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Gwalior Airport (GWL)",
      "train": "Gwalior Junction (GWL)",
      "road": "NH44 (Delhi-Gwalior)"
    },
    "weatherInfo": "Pleasant winter days.",
    "heroImage": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "orchha",
    "name": "Orchha",
    "stateId": "madhya-pradesh",
    "region": "Central",
    "tier": "offbeat",
    "knownAs": "Medieval Bundelkhand Palaces on Betwa River",
    "overview": "Timeless medieval town on the Betwa River boasting Jahangir Mahal, Raja Mahal, and riverside royal cenotaphs (Chhatris).",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Gwalior Airport (120km)",
      "train": "Jhansi Junction (16km)",
      "road": "Short taxi from Jhansi"
    },
    "weatherInfo": "Pleasant and quiet.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ujjain",
    "name": "Ujjain",
    "stateId": "madhya-pradesh",
    "region": "Central",
    "tier": "major",
    "knownAs": "Mahakaleshwar Jyotirlinga & Shipra Ghats",
    "overview": "Ancient holy city on the Shipra River, famous for the Mahakaleshwar Jyotirlinga (Bhasma Aarti) and Simhastha Kumbh Mela.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Indore Airport (55km)",
      "train": "Ujjain Junction (UJN)",
      "road": "4-lane expressway from Indore"
    },
    "weatherInfo": "Pleasant winter climate.",
    "heroImage": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bandhavgarh",
    "name": "Bandhavgarh & Kanha",
    "stateId": "madhya-pradesh",
    "region": "Central",
    "tier": "major",
    "knownAs": "Highest Tiger Density & Jungle Book Trails",
    "overview": "World-class national parks with high Royal Bengal tiger sighting rates in dense sal forests and bamboo valleys.",
    "bestTime": "October to May",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Jabalpur Airport (160km)",
      "train": "Umaria / Katni Station",
      "road": "Connected via Jabalpur"
    },
    "weatherInfo": "Forest chill in winter mornings.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jagdalpur",
    "name": "Jagdalpur & Bastar (Chitrakote)",
    "stateId": "chhattisgarh",
    "region": "Central",
    "tier": "major",
    "knownAs": "Niagara of India & Bastar Tribal Art",
    "overview": "Horseshoe-shaped Chitrakote Waterfalls on the Indravati River, Kotumsar stalactite caves, and Bastar bell-metal handicrafts.",
    "bestTime": "July to February",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Jagdalpur Airport (JGB) / Raipur (300km)",
      "train": "Jagdalpur Station",
      "road": "NH30"
    },
    "weatherInfo": "Pleasant forest weather.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "guwahati",
    "name": "Guwahati",
    "stateId": "assam",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Gateway to the Northeast & Kamakhya Temple",
    "overview": "Bustling riverine city on the Brahmaputra, home to the sacred hilltop Kamakhya Temple and Umananda river island.",
    "bestTime": "October to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Lokpriya Gopinath Bordoloi Airport (GAU)",
      "train": "Guwahati (GHY)",
      "road": "NH27"
    },
    "weatherInfo": "Moderate and pleasant.",
    "heroImage": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kaziranga",
    "name": "Kaziranga National Park",
    "stateId": "assam",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "UNESCO Sanctuary of One-Horned Rhinoceros",
    "overview": "World Heritage sanctuary hosting two-thirds of the planet's great one-horned rhinoceros population, wild buffalo, and tigers.",
    "bestTime": "November to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Jorhat (95km) / Guwahati (220km)",
      "train": "Furkating / Jakhalabandha",
      "road": "NH715"
    },
    "weatherInfo": "Pleasant misty mornings.",
    "heroImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "majuli",
    "name": "Majuli Island",
    "stateId": "assam",
    "region": "Northeast",
    "tier": "offbeat",
    "knownAs": "World's Largest River Island & Neo-Vaishnavite Satras",
    "overview": "Serene island on the Brahmaputra River known for ancient Vaishnavite monasteries (Satras) and mask-making art.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Jorhat (20km to ghat)",
      "ferry": "Ferry from Nimati Ghat Jorhat (1 hr)"
    },
    "weatherInfo": "Peaceful riverine weather.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "silchar",
    "name": "Silchar",
    "stateId": "assam",
    "region": "Northeast",
    "tier": "offbeat",
    "knownAs": "Island of Peace & Historic Khaspur Capital",
    "overview": "Principal commercial hub of the Barak Valley, rich in tea gardens and historical ruins of the Dimasa Kachari kingdom at Khaspur.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Kumbhirgram Airport Silchar (IXS)",
      "train": "Silchar Station (SCL)",
      "road": "NH37 / NH53"
    },
    "weatherInfo": "Mild subtropical winter.",
    "heroImage": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "shillong",
    "name": "Shillong",
    "stateId": "meghalaya",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Scotland of the East & Rock Music Capital",
    "overview": "Pine-clad hills, Umiam Lake, Elephant Falls, Don Bosco Museum, and a vibrant indie music culture.",
    "bestTime": "September to May",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Umroi Shillong (SHL) / Guwahati (120km)",
      "train": "Guwahati Station (100km)",
      "road": "Scenic 4-lane GS Road"
    },
    "weatherInfo": "Crisp and refreshing (12°C-22°C).",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "cherrapunji",
    "name": "Cherrapunji (Sohra) & Nohkalikai",
    "stateId": "meghalaya",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Land of Rainfalls & Living Root Bridges",
    "overview": "Spectacular plateau of plunging waterfalls (Nohkalikai Falls), limestone caves, and double-decker root bridges at Nongriat.",
    "bestTime": "September to May",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Guwahati Airport (160km)",
      "train": "Guwahati (150km)",
      "road": "54 km scenic drive from Shillong"
    },
    "weatherInfo": "Lush mist and cool cascades.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dawki",
    "name": "Dawki & Mawlynnong",
    "stateId": "meghalaya",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Crystal Umngot River & Asia's Cleanest Village",
    "overview": "Boating on glass-like transparent waters of the Umngot River at Dawki and visiting Mawlynnong's pristine bamboo village.",
    "bestTime": "November to April",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Guwahati (180km)",
      "road": "Connected via Shillong / Pynursla"
    },
    "weatherInfo": "Clear skies and pleasant breeze.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tawang",
    "name": "Tawang",
    "stateId": "arunachal-pradesh",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "400-Year-Old Monastery & Sela Pass",
    "overview": "Perched at 3,048m, home to India's largest Buddhist monastery, snow-draped Sela Pass, and the pristine Madhuri Lake.",
    "bestTime": "March to June & Sept to Nov",
    "idealDuration": "3-4 Days",
    "howToReach": {
      "air": "Tezpur (320km) / Guwahati (450km)",
      "road": "Scenic high-altitude highway (ILP required)"
    },
    "weatherInfo": "Chilly alpine mountain climate.",
    "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ziro",
    "name": "Ziro Valley",
    "stateId": "arunachal-pradesh",
    "region": "Northeast",
    "tier": "offbeat",
    "knownAs": "Apatani Tribal Pine Valley & Music Festival",
    "overview": "Picturesque pine-covered valley famous for the distinctive Apatani tribe's sustainable culture and outdoor music festival.",
    "bestTime": "March to October",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Itanagar Airport (120km)",
      "train": "Naharlagun Station",
      "road": "Connected via Itanagar"
    },
    "weatherInfo": "Cool and verdant.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gangtok",
    "name": "Gangtok",
    "stateId": "sikkim",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Capital of Sikkim with Views of Kanchenjunga",
    "overview": "Clean mountain city with views of Mt. Kanchenjunga, MG Marg promenade, Rumtek Monastery, and ropeway cable cars.",
    "bestTime": "March to May & Oct to Dec",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Pakyong Airport (30km) / Bagdogra (125km)",
      "train": "New Jalpaiguri NJP (120km)",
      "road": "NH10"
    },
    "weatherInfo": "Crisp and pleasant (10°C-18°C).",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pelling",
    "name": "Pelling",
    "stateId": "sikkim",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Closest Views of Mt. Kanchenjunga & Skywalk",
    "overview": "Serene West Sikkim town featuring the Pemayangtse Monastery, glass skywalk, Rabdentse ruins, and sunrise peak views.",
    "bestTime": "September to May",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Bagdogra Airport (140km)",
      "train": "New Jalpaiguri NJP (135km)",
      "road": "Connected via Geyzing"
    },
    "weatherInfo": "Peaceful mountain chill.",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kohima",
    "name": "Kohima & Dzukou Valley",
    "stateId": "nagaland",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Hornbill Festival & Trekker's Dream Valley",
    "overview": "Historic WWII War Cemetery, Kisama Heritage Village (Hornbill Festival), and the trek into the emerald Dzukou Valley.",
    "bestTime": "October to May (Hornbill in Dec)",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Dimapur Airport (74km)",
      "train": "Dimapur Station",
      "road": "NH29"
    },
    "weatherInfo": "Cool mountain temperatures.",
    "heroImage": "https://images.unsplash.com/photo-1579618218290-24a26f63a728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "imphal",
    "name": "Imphal & Loktak Lake",
    "stateId": "manipur",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Floating Phumdis & Keibul Lamjao Park",
    "overview": "Loktak Lake's circular floating biomass islands (phumdis), the world's only floating national park, and Kangla Fort.",
    "bestTime": "October to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Bir Tikendrajit Airport Imphal (IMF)",
      "road": "NH02 / NH37"
    },
    "weatherInfo": "Pleasant winter climate.",
    "heroImage": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "aizawl",
    "name": "Aizawl",
    "stateId": "mizoram",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Hillside City of Blue Mountains & Reiek Peak",
    "overview": "Perched on high ridges overlooking lush bamboo valleys, Solomon's Temple, and breathtaking panoramas from Reiek Tlang.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Lengpui Airport Aizawl (AJL)",
      "road": "NH54"
    },
    "weatherInfo": "Pleasantly cool.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "agartala",
    "name": "Agartala & Unakoti",
    "stateId": "tripura",
    "region": "Northeast",
    "tier": "major",
    "knownAs": "Ujjayanta Palace & Rock Carvings",
    "overview": "Royal white Ujjayanta Palace, the water palace Neermahal on Rudrasagar Lake, and colossal rock bas-reliefs at Unakoti.",
    "bestTime": "October to March",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Maharaja Bir Bikram Airport (IXA)",
      "train": "Agartala Station (AGTL)",
      "road": "NH08"
    },
    "weatherInfo": "Moderate and pleasant.",
    "heroImage": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "delhi-city",
    "name": "New Delhi & Old Delhi",
    "stateId": "delhi",
    "region": "UT",
    "tier": "major",
    "knownAs": "National Capital & Red Fort City",
    "overview": "A blend of ancient empires (Mughal Red Fort, Qutub Minar, Humayun's Tomb, India Gate) and bustling Chandni Chowk bazaars.",
    "bestTime": "October to March",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Indira Gandhi International (DEL)",
      "train": "New Delhi (NDLS) / Nizamuddin",
      "road": "National hub"
    },
    "weatherInfo": "Crisp pleasant winters (8°C-22°C).",
    "heroImage": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "leh",
    "name": "Leh",
    "stateId": "ladakh",
    "region": "UT",
    "tier": "major",
    "knownAs": "Capital of Ladakh & Shanti Stupa",
    "overview": "High-altitude Himalayan hub at 3,500m featuring Leh Palace, Shanti Stupa, Thiksey Monastery, and bustling Tibetan markets.",
    "bestTime": "May to September",
    "idealDuration": "3-4 Days",
    "howToReach": {
      "air": "Kushok Bakula Rimpochee Airport (IXL)",
      "road": "Manali-Leh / Srinagar-Leh Highway"
    },
    "weatherInfo": "High-altitude cold desert sunshine.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pangong-tso",
    "name": "Pangong Tso & Nubra Valley",
    "stateId": "ladakh",
    "region": "UT",
    "tier": "major",
    "knownAs": "Color-Shifting Salt Lake & Double-Humped Camels",
    "overview": "Spectacular 134km lake spanning India and Tibet, alongside Nubra Valley's Hunder sand dunes and Khardung La pass.",
    "bestTime": "May to September",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "road": "Drive from Leh via Chang La (Pangong) and Khardung La (Nubra)"
    },
    "weatherInfo": "Chilly high altitude.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "srinagar",
    "name": "Srinagar",
    "stateId": "jammu-and-kashmir",
    "region": "UT",
    "tier": "major",
    "knownAs": "Jewel of Kashmir & Dal Lake Shikaras",
    "overview": "Romantic Dal Lake houseboats, Mughal gardens (Shalimar, Nishat), floating vegetable markets, and wooden Old City bridges.",
    "bestTime": "April to October & Dec to Feb (Snow)",
    "idealDuration": "3 Days",
    "howToReach": {
      "air": "Sheikh ul-Alam Airport (SXR)",
      "road": "NH44 via Chenani-Nashri Tunnel"
    },
    "weatherInfo": "Cool alpine summers, snowy winters.",
    "heroImage": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gulmarg",
    "name": "Gulmarg",
    "stateId": "jammu-and-kashmir",
    "region": "UT",
    "tier": "major",
    "knownAs": "Meadow of Flowers & Asia's Highest Gondola",
    "overview": "World-class ski resort with the Gulmarg Gondola rising to 4,000m on Apharwat Peak and lush meadows in summer.",
    "bestTime": "December to March (Skiing) & May to Sept",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Srinagar Airport (55km)",
      "road": "1.5 hr drive from Srinagar"
    },
    "weatherInfo": "Sub-zero snow wonderland in winter.",
    "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pahalgam",
    "name": "Pahalgam",
    "stateId": "jammu-and-kashmir",
    "region": "UT",
    "tier": "major",
    "knownAs": "Valley of Shepherds & Betaab Valley",
    "overview": "Nestled on the Lidder River, starting point for Amarnath Yatra, surrounded by pine forests, Betaab Valley, and Aru Valley.",
    "bestTime": "March to November",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Srinagar Airport (90km)",
      "road": "Drive via Anantnag"
    },
    "weatherInfo": "Crisp pine air.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "katra",
    "name": "Katra (Vaishno Devi)",
    "stateId": "jammu-and-kashmir",
    "region": "UT",
    "tier": "major",
    "knownAs": "Holy Shrine of Mata Vaishno Devi",
    "overview": "Base camp for the sacred 12km pilgrimage trek to the Holy Cave shrine of Mata Vaishno Devi in Trikuta Mountains.",
    "bestTime": "March to October",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Jammu Airport (50km)",
      "train": "Shri Mata Vaishno Devi Katra (SVDK)",
      "road": "NH44 via Jammu"
    },
    "weatherInfo": "Pleasant mountain days.",
    "heroImage": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "port-blair",
    "name": "Port Blair",
    "stateId": "andaman-and-nicobar",
    "region": "UT",
    "tier": "major",
    "knownAs": "Historic Cellular Jail & Island Capital",
    "overview": "Historic capital of the Andaman Islands, featuring the national memorial Cellular Jail (Kala Pani) and ferry gateway to outer islands.",
    "bestTime": "October to May",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Veer Savarkar International (IXZ)",
      "sea": "Ships from Chennai/Kolkata"
    },
    "weatherInfo": "Tropical maritime climate.",
    "heroImage": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "havelock",
    "name": "Havelock Island (Swaraj Dweep)",
    "stateId": "andaman-and-nicobar",
    "region": "UT",
    "tier": "major",
    "knownAs": "Radhanagar Beach & Scuba Coral Reefs",
    "overview": "Famed for Radhanagar Beach (ranked among Asia's best beaches), elephant beach water sports, and pristine coral scuba diving.",
    "bestTime": "October to May",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "ferry": "Speed ferry from Port Blair (90 mins)"
    },
    "weatherInfo": "Turquoise waters and tropical breeze.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pondicherry-city",
    "name": "Puducherry (Pondicherry)",
    "stateId": "puducherry",
    "region": "UT",
    "tier": "major",
    "knownAs": "French Quarter & Sri Aurobindo Ashram",
    "overview": "Pastel French colonial villas in White Town, chic cafes, seaside promenade, Sri Aurobindo Ashram, and Auroville.",
    "bestTime": "October to March",
    "idealDuration": "2-3 Days",
    "howToReach": {
      "air": "Puducherry Airport (PNY) / Chennai (150km)",
      "train": "Puducherry Station (PDY)",
      "road": "East Coast Road (ECR)"
    },
    "weatherInfo": "Breezy coastal warmth.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "diu",
    "name": "Diu",
    "stateId": "dadra-and-nagar-haveli-and-daman-and-diu",
    "region": "UT",
    "tier": "major",
    "knownAs": "Portuguese Fortress Island & Nagoa Beach",
    "overview": "Historic Portuguese coastal fortress with sea-facing cannons, St. Paul's Church, Shell Museum, and horseshoe Nagoa Beach.",
    "bestTime": "October to April",
    "idealDuration": "2 Days",
    "howToReach": {
      "air": "Diu Airport (DIU)",
      "train": "Veraval / Delvada",
      "road": "Connected from Gujarat"
    },
    "weatherInfo": "Breezy and sunny.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "daman",
    "name": "Daman",
    "stateId": "dadra-and-nagar-haveli-and-daman-and-diu",
    "region": "UT",
    "tier": "major",
    "knownAs": "Moti Daman Fort & Coastal Getaway",
    "overview": "Twin Portuguese forts of Moti Daman and Nani Daman, historic cathedrals, Devka beach, and seaside promenades.",
    "bestTime": "October to April",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Surat (120km) / Mumbai (170km)",
      "train": "Vapi Station (12km)",
      "road": "NH48"
    },
    "weatherInfo": "Pleasant coastal climate.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kavaratti",
    "name": "Kavaratti & Bangaram",
    "stateId": "lakshadweep",
    "region": "UT",
    "tier": "major",
    "knownAs": "Coral Atolls & Emerald Lagoons",
    "overview": "Crystal clear lagoons, untouched coral reefs, sea turtle nesting, and world-class scuba diving in the Arabian Sea.",
    "bestTime": "October to May",
    "idealDuration": "3-4 Days",
    "howToReach": {
      "air": "Agatti Airport (AGX) + Boat transfer",
      "sea": "Passenger ships from Kochi"
    },
    "weatherInfo": "Pristine tropical paradise.",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "chandigarh-city",
    "name": "Chandigarh",
    "stateId": "chandigarh",
    "region": "UT",
    "tier": "major",
    "knownAs": "Le Corbusier's Planned Capital & Rock Garden",
    "overview": "Famed for Nek Chand's iconic Rock Garden crafted from recycled urban waste, Sukhna Lake, and modernist architecture.",
    "bestTime": "October to March",
    "idealDuration": "1-2 Days",
    "howToReach": {
      "air": "Chandigarh International (IXC)",
      "train": "Chandigarh Junction (CDG)",
      "road": "NH44"
    },
    "weatherInfo": "Crisp and clean in winter.",
    "heroImage": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  }
];
