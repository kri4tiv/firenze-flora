export const SITE = {
  name: "Firenze Flora",
  tagline: "Where flowers tell your story.",
  phone: "+971 52 554 7794",
  phoneTel: "+97152554794",
  phoneDisplay: "+971 52 554 7794",
  email: "info@firenzeflora.com",
  address: "2nd Floor, Lamborghini Dubai, Sheikh Zayed Road, Dubai, UAE",
  addressShort: "Sheikh Zayed Road, Dubai, UAE",
  whatsapp: "971525547794",
  whatsappMessage: "Hi Firenze Flora, I'd like to enquire about your services.",
  yearsInService: 14,
  eventsDelivered: "5,000+",
  happyClients: "3,000+",
  globalFootprint: 4,
} as const

export const HOME = {
  heroHeadline: "Where flowers\ntell your story.",
  heroSubtext: "Dubai's premier floral and event decor studio. Weddings, corporate events, and private celebrations — crafted with precision and passion.",
  heroCta: "Start Your Enquiry",
  heroSecondary: "View Our Work",
  brandStatement: "At Firenze Flora, we possess the artistry and passion to craft the extraordinary.",
  brandBody: "Whether it's an enchanting wedding, a corporate event that leaves a lasting impression, or a birthday celebration filled with vibrant colours — we transform your vision into reality with stunning decor and floral arrangements. With Firenze Flora by your side, the possibilities for unforgettable moments are boundless.",
  stats: [
    { value: "14", label: "Years in Service" },
    { value: "5,000+", label: "Events Delivered" },
    { value: "3,000+", label: "Happy Clients" },
    { value: "4", label: "Countries Served" },
  ],
} as const

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "All of our expectations were blown away. You made our dream wedding come to life with every intricate detail. We cannot express how grateful we are. All the guests loved it — they were amazed by everything, and so were we.",
    author: "Hessa and Haitham",
    venue: "Summersalt Beach Club, Al Naseem, Madinat Jumeirah",
    rating: 5,
  },
  {
    id: 2,
    quote: "You have the best team we have worked with, and the class you displayed was impressive. The clients expressed their huge appreciation. Waldorf Astoria Dubai will be sketched in our minds for a long time because of you.",
    author: "Praveen Tulsyan",
    venue: "Managing Director, Mirage Network Pvt Ltd — India",
    rating: 5,
  },
  {
    id: 3,
    quote: "From the moment we stepped into the venue, we were greeted with magnificent fresh flower decor that left a lasting impression. The exquisite floral designs transformed the ambiance into a dreamlike setting. Truly the masters of their craft.",
    author: "Dana Wolley",
    venue: "Raffles Hotel, Wafi — Dubai, UAE",
    rating: 5,
  },
] as const

export const SERVICES = {
  weddings: {
    title: "Weddings",
    headline: "Wedding decor in Dubai",
    metaTitle: "Weddings | Wedding Decor in Dubai | Firenze Flora",
    metaDescription: "Premium wedding floral decor in Dubai. Arabic, Indian, Iranian, Western & destination weddings. Reception styling, arches, centrepieces, flower walls. Enquire today.",
    intro: "Every wedding is a reflection of the couple. We craft floral environments that honour your culture, your story, and your vision — with flawless execution on the day.",
    body: "Firenze Flora is one of Dubai's most trusted wedding decorators, working across Arabic, Iranian, Western, Indian, and destination weddings. We directly import flowers from Holland and premium global sources, ensuring every arrangement is fresh, distinctive, and a cut above.",
    whatWeDeliver: [
      "Wedding Flowers & Florals", "Bridal Bouquet", "Boutonniere",
      "Flower Walls", "Reception Styling", "Centrepieces",
      "Flower Arches", "Car Decoration", "Proposals", "Engagement",
    ],
    cultures: [
      { id: "arabic", title: "Arabic Weddings", description: "Where timeless elegance meets vibrant celebration. We blend traditional Arabic aesthetic with contemporary floral design.", image: "/images/portfolio/arabic-wedding.webp" },
      { id: "indian", title: "Indian Weddings", description: "A symphony of fragrances, colours, and emotions. Our intricate knowledge of Indian wedding customs creates breathtaking multi-day celebrations.", image: "/images/portfolio/indian-wedding.webp" },
      { id: "iranian", title: "Iranian Weddings", description: "Persian weddings carry deep cultural significance. We honour every tradition with carefully selected florals.", image: "/images/hero/hero-poster.webp" },
      { id: "western", title: "Western Weddings", description: "From garden romance to black-tie grandeur — designed with a refined, editorial eye. Every bloom placed with intention.", image: "/images/portfolio/bridal-bouquet.webp" },
      { id: "destination", title: "Destination Weddings", description: "Dubai is a world-class destination wedding city. We work with international couples across the UAE's most iconic venues.", image: "/images/portfolio/wedding-centrepiece.webp" },
    ],
    faqs: [
      { question: "How far in advance should I book?", answer: "We recommend enquiring at least 3–6 months ahead. Peak season (October–April) books quickly, though we can accommodate shorter timelines depending on availability." },
      { question: "Do you handle venue setup and breakdown?", answer: "Yes — our team manages full delivery, professional setup, and post-event breakdown. We coordinate directly with venue coordinators." },
      { question: "Do you use fresh or artificial flowers?", answer: "We work primarily with fresh flowers imported directly from Holland and premium global sources. Artificial options are available on request for specific elements." },
      { question: "Do you service all of Dubai?", answer: "Yes. We operate across all major Dubai venues — Jumeirah, Downtown, DIFC, Palm Jumeirah, Madinat Jumeirah, Waldorf Astoria, Raffles, and beyond." },
    ],
  },
  events: {
    title: "Events",
    headline: "Event decor in Dubai",
    metaTitle: "Events | Premium Event Decor in Dubai | Firenze Flora",
    metaDescription: "Corporate, private, and brand event decor in Dubai. Birthday parties, anniversaries, corporate galas, openings. Creative concept, flawless setup.",
    intro: "Whether you are celebrating a personal milestone or hosting a corporate showcase, we bring concept to life with precision and premium materials.",
    private: {
      title: "Private Events",
      description: "From anniversary dinners to birthday celebrations, flower decor adds elegance and vitality to every occasion.",
      items: [
        { name: "Birthday Parties", desc: "From charming centrepieces to statement installations, we create atmospheres where wishes come true." },
        { name: "Anniversary Events", desc: "Floral decoration that symbolises enduring love and the blossoming of cherished memories." },
        { name: "Baby Showers", desc: "Soft, beautiful florals that make your celebration as special as the new arrival." },
        { name: "Proposals", desc: "A scene of timeless romance where every detail speaks of your love story." },
        { name: "Graduation Ceremonies", desc: "Mark this milestone with florals that celebrate achievement in style." },
      ],
    },
    corporate: {
      title: "Corporate Events",
      description: "Decor is the visual language of your brand. We craft memorable and impactful experiences for clients, partners, and employees.",
      items: [
        { name: "Office Decoration", desc: "Elevate your workspace with curated floral arrangements that inspire and impress." },
        { name: "Business Meetings & Lunches", desc: "Corporate table decor that fosters connections and productive conversations." },
        { name: "Openings & Launches", desc: "Set the stage for your new venture with decor that blends elegance and excitement." },
        { name: "Conference Days", desc: "Professional, polished decor that reinforces your brand throughout the day." },
        { name: "Corporate Gifting", desc: "Curated floral gifts that reinforce connections and leave a positive impression." },
      ],
    },
    other: {
      title: "Other Decorations",
      items: [
        { name: "Housewarming Parties", desc: "Welcome guests into a beautifully decorated new home." },
        { name: "Home Decoration", desc: "Bespoke floral styling for your living spaces." },
      ],
    },
  },
  otherServices: {
    title: "Other Services",
    headline: "More services in Dubai",
    metaTitle: "Other Services | Firenze Flora Dubai",
    metaDescription: "Housewarming florals, bespoke gifting, and custom floral installations in Dubai by Firenze Flora.",
    intro: "Beyond weddings and events, we offer bespoke florals for homes, gifting, and custom installations.",
  },
} as const

export const ABOUT = {
  headline: "About Firenze Flora",
  metaTitle: "About | Firenze Flora Dubai",
  metaDescription: "Firenze Flora — Dubai's premier floral and event decor studio. 14 years, 5,000+ events, and a passion for the extraordinary.",
  body: [
    "Firenze Flora was founded with one belief: that every celebration deserves to be extraordinary. Based in Dubai, we design floral and event environments for clients who expect both creativity and precision.",
    "With 14 years of experience and over 5,000 events delivered, we have built a reputation across the UAE and beyond as the studio that turns visions into reality — no matter how ambitious.",
    "We source flowers directly from Holland and premium global suppliers, ensuring every arrangement carries our signature quality. Our team manages every detail from concept through to post-event breakdown.",
    "Dubai is our home. Every install, every arrangement, every concept is designed for this city and its discerning clientele.",
  ],
  mission: "We don't follow trends — we set them. Our events are a canvas of floral innovation, where every stroke of creativity leaves a lasting impression.",
} as const

export const PACKAGES = {
  headline: "Packages",
  metaTitle: "Packages | Firenze Flora Dubai",
  metaDescription: "Explore example wedding and event decor package ranges by Firenze Flora Dubai. Enquire for a tailored proposal.",
  intro: "These are starting ranges to give you a sense of investment. Every event is unique — enquire for a tailored proposal.",
  note: "All packages include delivery, setup, and breakdown within Dubai.",
  items: [
    {
      name: "Essentials", range: "From AED 3,000", note: "Starting range", highlight: false,
      items: ["Bridal bouquet", "Reception centrepieces (up to 8 tables)", "Welcome floral arrangement", "Cake flowers", "Delivery and setup"],
    },
    {
      name: "Signature", range: "From AED 12,000", note: "Most popular", highlight: true,
      items: ["Everything in Essentials", "Flower arch or feature backdrop", "Aisle arrangements", "Full reception styling", "Ceiling florals (venue permitting)", "Car decoration", "Dedicated lead designer"],
    },
    {
      name: "Bespoke", range: "Custom quote", note: "For discerning clients", highlight: false,
      items: ["Fully custom concept and design", "Dedicated senior designer", "Site visit included", "Unlimited revisions", "Full venue transformation", "Direct flower imports on request", "Priority scheduling"],
    },
  ],
} as const

export const CONTACT = {
  headline: "Contact",
  metaTitle: "Contact | Firenze Flora Dubai",
  metaDescription: "Contact Firenze Flora in Dubai. Share your event date and venue to start your enquiry.",
  responseTime: "We typically respond within 24 hours.",
} as const
