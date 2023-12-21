const products = [
  {
    name: "products1",
    url: "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    name: "products2",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Flipkart SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
  },
  {
    name: "products3",
    url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    title: {
      shortTitle: "Fitness Gear",
      longTitle:
        "AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)",
    },
    price: {
      mrp: 499,
      cost: 166,
      discount: "66%",
    },
    description:
      "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
  },
  {
    name: "products4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    name: "products5",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    description: "",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
  },

  {
    name: "products6",
    url: "https://diamu.com.bd/wp-content/uploads/2022/05/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-3.jpg",
    detailUrl:
      "https://diamu.com.bd/wp-content/uploads/2022/05/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-3.jpg",
    title: {
      shortTitle: "Electronics",
      longTitle: "Sony Noise-Canceling Wireless Headphones WH-450 (Black)",
    },
    price: {
      mrp: 24854,
      cost: 19999,
      discount: "17%",
    },
    description:
      "Immerse yourself in your music with Sony's WH-450 wireless headphones. Enjoy industry-leading noise cancellation, wireless freedom, and high-quality audio. The headphones also feature touch controls for easy playback and call management.",
    discount: "Free Shipping",
    tagline: "Premium Sound Experience",
  },

  {
    name: "products7",
    url: "https://img1.theiconic.com.au/dklDLsCLWHNfwjrqmkdaNYz1ZHo=/fit-in/1000x0/filters:fill(ffffff):quality(85)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fsamsonite-business-3287-2680601-1.jpg",
    detailUrl:
      "https://img1.theiconic.com.au/dklDLsCLWHNfwjrqmkdaNYz1ZHo=/fit-in/1000x0/filters:fill(ffffff):quality(85)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fsamsonite-business-3287-2680601-1.jpg",
    title: {
      shortTitle: "Fashion",
      longTitle: "Classic Leather Unisex Crossbody Bag (Brown)",
    },
    price: {
      mrp: 8999,
      cost: 5999,
      discount: "33%",
    },
    description:
      "Add a touch of timeless style to your outfit with this classic leather crossbody bag. The unisex design is perfect for daily use or a night out. It features multiple compartments to keep your essentials organized and an adjustable strap for comfort.",
    discount: "Buy One, Get One 50% Off",
    tagline: "Elegant Utility",
  },

  {
    name: "products8",
    url: "https://www.wellbeingme.co.uk/cdn/shop/products/WellbeingMe-EssentialOilelectricdiffuser-lightwood-Withalloils_1500x.png?v=1606916575",
    detailUrl:
      "https://www.wellbeingme.co.uk/cdn/shop/products/WellbeingMe-EssentialOilelectricdiffuser-lightwood-Withalloils_1500x.png?v=1606916575",
    title: {
      shortTitle: "Home & Decor",
      longTitle: "Aromatherapy Essential Oil Diffuser",
    },
    price: {
      mrp: 4995,
      cost: 2999,
      discount: "40%",
    },
    description:
      "Create a calming and fragrant atmosphere in your home with this aromatherapy essential oil diffuser. The diffuser uses ultrasonic technology to disperse a fine mist of water and essential oils, promoting relaxation and stress relief.",
    discount: "Includes Starter Set of Essential Oils",
    tagline: "Tranquility at Home",
  },
  {
    name: "products9",
    url: "https://images.macrumors.com/t/1K3HAyYnNWIvIWDl9NH677zx230=/1600x1200/smart/article-new/2023/04/tp-link-kasa-smart-plug.jpg",
    detailUrl:
      "https://images.macrumors.com/t/1K3HAyYnNWIvIWDl9NH677zx230=/1600x1200/smart/article-new/2023/04/tp-link-kasa-smart-plug.jpg",
    title: {
      shortTitle: "Tech Gadgets",
      longTitle: "Smart WiFi Plug with Energy Monitoring",
    },
    price: {
      mrp: 2499,
      cost: 1899,
      discount: "24%",
    },
    description:
      "Take control of your appliances and devices with the Smart WiFi Plug. This plug allows you to remotely turn devices on or off using a smartphone app. It also features energy monitoring, so you can track the energy usage of connected devices and optimize your energy consumption.",
    discount: "Works with Amazon Alexa and Google Assistant",
    tagline: "Efficiency at Your Fingertips",
  },

  {
    name: "products10",
    url: "https://images-fe.ssl-images-amazon.com/images/I/51l9fkECknL._AC_UL600_SR600,600_.jpg",
    detailUrl:
      "https://images-fe.ssl-images-amazon.com/images/I/51l9fkECknL._AC_UL600_SR600,600_.jpg",
    title: {
      shortTitle: "Outdoor Gear",
      longTitle: "AdventurePro Waterproof Hiking Backpack (30L)",
    },
    price: {
      mrp: 7999,
      cost: 5999,
      discount: "25%",
    },
    description:
      "Embark on your outdoor adventures with the AdventurePro Waterproof Hiking Backpack. This 30-liter backpack features durable waterproof material, multiple pockets, and adjustable straps for comfort. Whether you're hiking, camping, or traveling, this backpack is designed to keep your gear safe and organized.",
    discount: "Free Foldable Water Bottle Included",
    tagline: "Explore the Great Outdoors",
  },
  {
    name: "products11",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd0MhF1M5pm9V-QJOXenD_gJs3lXe8DQtHcmER4yGGlGbaFxFs7shOITNCbPz_PGOY60&usqp=CAU",
    detailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd0MhF1M5pm9V-QJOXenD_gJs3lXe8DQtHcmER4yGGlGbaFxFs7shOITNCbPz_PGOY60&usqp=CAU",
    title: {
      shortTitle: "Beauty",
      longTitle: "LuxGlow 24K Gold-Infused Facial Mask",
    },
    price: {
      mrp: 399,
      cost: 299,
      discount: "25%",
    },
    description:
      "Treat your skin to the ultimate luxury with the LuxGlow 24K Gold-Infused Facial Mask. This indulgent mask is formulated with real gold particles and nourishing ingredients to rejuvenate and hydrate your skin. Experience a radiant and glowing complexion after each use.",
    discount: "Comes with Application Brush",
    tagline: "Elevate Your Skincare Routine",
  },
  {
    name: "products12",
    url: "https://m.media-amazon.com/images/I/61Il3pjKVNL._AC_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61Il3pjKVNL._AC_.jpg",
    title: {
      shortTitle: "Toys & Games",
      longTitle: "BuildMaster Engineering Construction Set",
    },
    price: {
      mrp: 3299,
      cost: 2499,
      discount: "24%",
    },
    description:
      "Ignite your child's creativity with the BuildMaster Engineering Construction Set. This set includes various pieces for building vehicles, structures, and more. It encourages hands-on learning, problem-solving, and imaginative play, making it an ideal gift for young builders and engineers.",
    discount: "Includes Colorful Instruction Booklet",
    tagline: "Learning Through Play",
  },
];

module.exports = products;
