import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,

  google,
  samsung,
  adobe,
  cisco,
  dell,
  facebook,
  flipkart,
  hp,
  IBM,
  instagram,
  microsoft,
  netflix,
  tesla,
  Search_icon,
  Growth_icon,
  Box_group,
  Boost_icons,
  calendar,
  smarter_search_icon,
  better_insights_icon,
  efficiency_icon,
  Campaign_icon,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Who we serve",
    url: "/who-we-serve",
  },
  {
    id: "1",
    title: "Resource",
    url: "/resource",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: "3",
    title: "About",
    url: "/about",
  },
  {
    id: "4",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const contents = [
  {
    id: 1,
    title: "Pinpoint Ideal Influencers",
    heading: "Think Outside Your Typical Circles",
    body: "Finding the right creators to promote your brand isn’t as simple as choosing the one with the biggest following, most comments, or coolest pictures. Your target audience craves authenticity and expertise – and our AI-powered platform can help you find that needle in a haystack. Whether you're in beauty, tech, gaming, or DIY, we give you the tools to find the creators you need.",
    linkText: "Explore Influencer Profiles",
    icon: Search_icon
  },
  {
    id: 2,
    title: "Access Fast and Unbiased Stats",
    heading: "No Need to Reach Out And Ask…",
    body: "Why wait on a response or rely on influencers to provide their own stats? Get fast, accurate, and up-to-date metrics with Influencity. Agencies and marketplaces may limit your group of candidates to a pre-set list of creators, but Influencity opens the door by providing on-demand insights on any public profile, anywhere in the world.",
    linkText: "See Comprehensive Influencer Statistics",
    icon: Growth_icon
  },
  {
    id: 3,
    title: "Organize and Manage Influencers",
    heading: "A Database Tailored to Your Data",
    body: "Say goodbye to messy static spreadsheets. Influencity lets you create an influencer database that meets the unique needs of your data. Optimize your workflows with an Influencer Relationship Management (IRM) tool that facilitates collaboration, enabling teams to track negotiations, save price histories, and remember the small yet important details about your most valuable creators.",
    linkText: "Create Your Influencer Database",
    icon: Box_group
  },
  {
    id: 4,
    title: "Optimize Campaign Workflows",
    heading: "Manage Collaboration Tasks in One Place",
    body: "With so many accounts, tools, and platforms, influencer marketing campaign management can become a job in itself. Most brands want to reduce the time they spend on repetitive and time-consuming tasks. We can help. Influencity helps you use precious team resources efficiently, with an end-to-end platform that automates repetitive tasks, lets you assign responsibilities, and clearly see the ROI of your efforts. ",
    linkText: "Utilize Seamless Campaign Controls",
    icon: calendar
  },
  {
    id: 5,
    title: "Send Products at Scale",
    heading: "Integrate Your Shopify Store And Sit Back",
    body: "Create end-to-end influencer seeding campaigns in just a few clicks with a Shopify integration that combines the best of both worlds – the insights and communication tools of an influencer marketing platform, along with the logistics of your existing online store.",
    body_2: "Add influencers as customers in your online store directly from the Influencity platform and generate a code that lets them request their free gift. Influencers then order and receive their gift just like any other online customer.",
    linkText: "Create Influencer Seeding Campaigns",
    icon: Growth_icon
  },
  {
    id: 4,
    title: "Analyze Campaign Yield",
    heading: "Compile Key Insights Into Reports",
    body: "Influencer Marketing should drive sales and help you meet important business goals – like a stronger brand reputation or a bigger following. However, sales rarely occur after the first interaction and connecting the dots for return on investment (ROI) can be difficult.",
    body_2: "Our data helps you see patterns between campaigns and business growth so you can have a full picture of what’s working (and what isn’t).",
    linkText: "Record Comprehensive, Accurate Analytics",
    icon: Boost_icons
  },
];


export const slides = [
  {
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  },

  {
    url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },
];

export const collaborations = [
  {
    id: 1,
    name: 'google',
    img: google,
  },
  {
    id: 2,
    name: 'microsoft',
    img: microsoft,
  },
  {
    id: 3,
    name: 'samsung',
    img: samsung,
  },
  {
    id: 4,
    name: 'adobe',
    img: adobe,
  },
  {
    id: 5,
    name: 'cisco',
    img: cisco,
  },
  {
    id: 6,
    name: 'dell',
    img: dell,
  },
  {
    id: 7,
    name: 'facebook',
    img: facebook,
  },
  {
    id: 8,
    name: 'flipkart',
    img: flipkart,
  },
  {
    id: 9,
    name: 'hp',
    img: hp,
  },
  {
    id: 10,
    name: 'IBM',
    img: IBM,
  },
  {
    id: 11,
    name: 'instagram',
    img: instagram,
  },
  {
    id: 12,
    name: 'netflix',
    img: netflix,
  },
  {
    id: 13,
    name: 'tesla',
    img: tesla,
  },
]

export const testimonials = [
  {
    id: 1,
    quote: "A great tool! Lets you find influencers all over the world and from any city.",
    name: "Mark D.",
    role: "Founder, Small Business",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
  },
  {
    id: 2,
    quote: "Absolutely amazing! I found the perfect influencers for my campaign.",
    name: "Jennifer W.",
    role: "Marketing Manager, Tech Startup",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 3,
    quote: "Incredibly easy to use. I've never had so much success with influencer marketing before.",
    name: "Michael P.",
    role: "CEO, E-commerce Company",
    imageUrl: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
  },
  {
    id: 4,
    quote: "Amazing platform! Helped me connect with influencers in my niche effortlessly.",
    name: "Jessica L.",
    role: "Content Creator, Lifestyle Blogger",
    imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80"
  },
  {
    id: 5,
    quote: "An indispensable tool for influencer marketing. Highly recommended!",
    name: "David S.",
    role: "Social Media Manager, Fashion Brand",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
  }
];


export const footerData = [
  {
    title: "Who We Serve",
    items: ["Brands", "Agencies"]
  },
  {
    title: "Solutions",
    items: [
      "Find Influencers",
      "Influencer Recruitment",
      "Influencer Outreach",
      "Manage Campaigns",
      "Influencer Payments",
      "Measure Results"
    ]
  },
  {
    title: "About",
    items: [
      "Company",
      "Careers",
      "Aur Advantages"
    ]
  },
  {
    title: "Resources",
    items: [
      "Blog",
      "eBooks",
      "Success Stories",
      "Influencer Marketing",
    ]
  },
  {
    title: "Pricing",
    items: ["Shivam"]
  },
  {
    title: "Customers",
    items: ["Contact Us", "Change Log", "Feature Request"]
  }
];

export const customerProfits = [
  {
    id: 1,
    title: "Smarter Searches",
    heading: "Build Effective Campaigns",
    body: "Solid creators are the foundation of successful campaigns, and we provide the tools to quickly discover the best influencers. Our AI-powered search engine allows you to efficiently navigate a global database of influencers, pinpointing creators in your niche who are already resonating with your target audience.",
    linkText: "Explore Influencer Profiles",
    icon: smarter_search_icon
  },
  {
    id: 2,
    title: "Better Insights",
    heading: "Data for Better Decision Making",
    body: "Influencity insights take the mystery out of influencer recruitment by providing quantitative and qualitative data not found on social media. That’s why companies large and small rely on our data to determine the smartest ways to spend their Influencer Marketing budget.",
    linkText: "See Influencer Analytics",
    icon: better_insights_icon
  },
  {
    id: 3,
    title: "Increased Efficiency",
    heading: "Reduce Your Workload",
    body: "Visualize your workflow with everything you need to know in one, centralized place. Whether you’re an agency handling diverse campaigns or an e-commerce company looking to improve the ROI of your influencer seeding efforts, our platform helps even the smallest teams do more.",
    linkText: "Improve Campaign Workflows",
    icon: efficiency_icon

  },
  {
    id: 4,
    title: "Campaign Clarity",
    heading: "Measure Your Results",
    body: "Compiling all of your information into one easy-to-use page allows you to compare the performance of various strategies in order to see what works, what doesn’t, and possible ideas for improvement.",
    body_2: "Let us do the heavy lifting of pulling insights and key data points so you can focus on what matters – getting the most from your Influencer Marketing campaigns.",
    linkText: "Measure Outcomes",
    icon: Campaign_icon
  },
]

export const plans = [
  {
    name: 'Intro',
    price: 20,
    features: [
      'All limited links',
      'Own analytics',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users'
    ]
  },
  {
    name: 'Basic',
    price: 30,
    features: [
      'All limited links',
      'Own analytics',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
      'Extra feature for Basic'
    ]
  },
  {
    name: 'Pro',
    price: 50,
    features: [
      'All limited links',
      'Own analytics',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
      'Extra feature for Pro'
    ]
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'All limited links',
      'Own analytics',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
      'Extra feature for Intermediate'
    ]
  }
];

export const books = [
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
  {
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",

      title: "E-Book",
      subtitle:
          "5 Influence Marketing Strategies for E-Commerce + Real-Life Examples",
      linkText: "Download Now",
  },
];