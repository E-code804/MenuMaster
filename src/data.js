const restaurants = [
  {
    _id: { $oid: "64b58b683c61936e74ff6306" },
    name: "Tarka House Restaurant",
    num_reviews: "157",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "667" },
      url: "https://media-cdn.tripadvisor.com/media/photo-o/10/a4/78/de/tarka-house-restaurant.jpg",
      height: { $numberInt: "501" },
    },
    rating: "5.0",
    price_level: "$",
    description:
      "Good Food,great Taste,good Place,good Price. we are not best but we are trying our best and we will do forever . if you like our food and service will be happy.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d12416771-Reviews-Tarka_House_Restaurant-Pattaya_Chonburi_Province.html",
    address: "Pattaya 13/4 Alley Beach road, Pattaya 20150 Thailand",
    cuisine: ["Indian", "Asian", "Bangladeshi", "Vegetarian"],
    price: "$6-$17",
  },
  {
    _id: { $oid: "64b58ddc3c61936e74ff6307" },
    name: "Cafe des Amis Fine Dining",
    num_reviews: "1562",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/09/29/c0/b7/cafe-des-amis.jpg",
      height: { $numberInt: "424" },
    },
    rating: "5.0",
    price_level: "$$$$",
    description:
      "We are family owned independent restaurant since 2008. Fine Dining, French and European cuisine. We offer 5 or 6 course Dégustation Menu’s and the largest selection of imported beef from Aus, USA, Japan. as well as some amazing Fish. Snow fish, oysters lobster scallops, large wine list, fine spirits, cocktails, Largest Gin selection in ASIA 180+ Gins, 30 Vodkas, 60 Whiskeys. Indoor and outdoor air conditioned dining areas, Romantic restaurant. Perfect for a birthday anniversary or family celebration. Cafe des Amis is elegant but relaxed and not stuffy or posh. We aspire to the challenges of keeping every customer happy and providing a high class eatery for the area. Our garden terrace dining area is perfect for children. Please use Grab Taxi app to get to us we are located 1km from walking street. Limited Vegetarian available. We have smartly dressed guests celebrating special occasions such as wedding anniversaries. Please respect our Dress Code: Smart Casual, No Flip Flops or beach",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d1594762-Reviews-Cafe_des_Amis_Fine_Dining-Pattaya_Chonburi_Province.html",
    address: "Thappraya road Soi 11, 391/6, Moo 10,, Pattaya 20150 Thailand",
    cuisine: ["French", "Vegetarian"],
    price: "$10-$100",
  },
  {
    _id: { $oid: "64b58f203c61936e74ff6308" },
    name: "Maharani",
    num_reviews: "234",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: "550",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/13/be/40/0e/maharani-queen-of-indian.jpg",
      height: "367",
    },
    rating: "5.0",
    price_level: "$$$$",
    price: "$25",
    description:
      "The jewel in the crown of Indian restaurants. The recently renovated Maharani restaurant offers authentic Indian cuisines from all over the subcontinent. Guests can relish one of the best Indian cuisines in Pattaya whilst enjoying the spectacular view of the gulf of Thailand. Our talented Indian kitchen team creates dishes and menus combining Indian ingredients with creative recipes and for these reasons many locals have hailed this restaurant as one of the best in Pattaya.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d1628784-Reviews-Maharani-Pattaya_Chonburi_Province.html",
    address:
      "353 Phra Tamnuk Road (part of the Royal Cliff Hotels Group), Pattaya 20150 Thailand",
    cuisine: ["Asian", "Indian", "Vegetarian"],
  },
  {
    _id: { $oid: "64b591843c61936e74ff630a" },
    name: "The Coffee Club - Terminal 21 Pattaya",
    num_reviews: "219",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/18/52/25/75/great-food-great-service.jpg",
      height: { $numberInt: "365" },
    },
    rating: "5.0",
    price_level: "$$ - $$$",
    price: "$130 - $1,200",
    description: "Good Food, Great Service and Great Coffee",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d15239494-Reviews-The_Coffee_Club_Terminal_21_Pattaya-Pattaya_Chonburi_Province.html",
    address: "456,777,777/1 Moo 6 N Pattaya Rd, Pattaya 20150 Thailand",
    cuisine: ["Thai", "Vegetarian"],
  },
  {
    _id: { $oid: "64b5928f3c61936e74ff630b" },
    name: "Caravan",
    num_reviews: "725",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/53/c4/fe/caravan-restaurant.jpg",
      height: { $numberInt: "367" },
    },
    rating: "4.5",
    price_level: "$$ - $$$",
    price: "$50 - $500",
    description:
      "The Caravan restaurant offers a wide range of national meals of Central Asia cuisines such as Uzbek and Kazakh, including a good selection of Russian and Ukrainian national dishes. Designed to look like a traditional caravanserai, where travelers could rest and recover in a charming atmosphere and enjoy shurpa, shashlik kebab, pilaf, lagman, samsa and other delicious meals prepared with love.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d9824860-Reviews-Caravan-Pattaya_Chonburi_Province.html",
    address:
      "179 /113, M.5, Naklua Rd., Nong Prue, Bang Lamung, Pattaya 20150 Thailand",
    cuisine: ["Russian", "Uzbek", "Halal"],
  },
  {
    _id: { $oid: "64b593773c61936e74ff630c" },
    name: "The Big Fish",
    num_reviews: "233",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/d5/ce/2b/photo4jpg.jpg",
      height: { $numberInt: "413" },
    },
    rating: "5.0",
    price_level: "$$ - $$$",
    price: "$300 - $2,000",
    description:
      "Big Fish serves as an all-day International Dining venue, from Breakfast to Seafood BBQ Dinner Buffet, this is where you can plop on your favourite aquatic ingredients or meat selections and hand it to the chefs to prepare it to your preferred doneness. The dessert corner is not to be missed.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d8260002-Reviews-The_Big_Fish-Pattaya_Chonburi_Province.html",
    address: "390 Moo 9, Pattaya Sai 2 Road, Pattaya 20150 Thailand",
    cuisine: ["Seafood", "BBQ", "Asian", "Thai"],
  },
  {
    _id: { $oid: "64b594223c61936e74ff630d" },
    name: "Robin Hood Tavern",
    num_reviews: "172",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1f/e6/0d/cc/max-s-beef-stroganoff.jpg",
      height: { $numberInt: "390" },
    },
    rating: "4.5",
    price_level: "$$ - $$$",
    price: "$99 - $2,500",
    description:
      "Gastro pub A Family Orientated, Air Conditioned, Clean and Very Spacious Restaurant Serving both Western & Thai Food with a modern flare",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d12012469-Reviews-Robin_Hood_Tavern-Pattaya_Chonburi_Province.html",
    address: "399/9 Moo 10 Second Rd, Pattaya 20150 Thailand",
    cuisine: ["British", "Steakhouse", "Vegetarian"],
  },
  {
    _id: { $oid: "64b594f23c61936e74ff630e" },
    name: "Five Star J Vegetarian Restaurant",
    num_reviews: "790",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/13/55/58/e0/3rd-road.jpg",
      height: { $numberInt: "384" },
    },
    rating: "4.5",
    price_level: "$$ - $$$",
    price: "$104 - $299",
    description:
      "International vegetarian kitchen, j or vegan. Many specialities like for example, original Italian vegetarian seafood pizza or risotto con fungi or saffron. New are Swiss Rosti and pancakes different styles. Indonesian Tempe can be ordered as sate, in some curries as well as in pasta and spaghetti. We banned white sugar and use brown sugar very careful. Beside soy bean oil for cooking we use pure coconut oil for frying and original Italian olive oil for the salads. Monosodium glutamate (MSG), sodium benzoate, artificial colouring, high fructose corn syrup, aspartame, trans fats or other chemicals are ***not*** to be found in our kitchen. As all vegetables are from the same day’s market we don't have to cover with extreme spice. We serve moderate spicy and put fresh chilli on the table. If you like more, let us know, we categorized in chillies from zero to five. You will not find: garlic and onions. Pre order and door to door service from 11 am to 11:00 pm, daily. The restaurant exists since over twenty years; the ambience has switched to European style, white and clean.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d3628657-Reviews-Five_Star_J_Vegetarian_Restaurant-Pattaya_Chonburi_Province.html",
    address:
      "313/37 South Pattaya Road Corner 3rd Road, Pattaya 20260 Thailand",
    cuisine: ["Asian", "Vegetarian"],
  },
  {
    _id: { $oid: "64b595b43c61936e74ff630f" },
    name: "Karma Indian Restaurant",
    num_reviews: "368",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "550" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/11/1f/9e/0b/comfortable-seating-at.jpg",
      height: { $numberInt: "413" },
    },
    rating: "5.0",
    price_level: "$$ - $$$",
    price: "$160 - $600",
    description:
      "Guests of Karma are treated to an Indian dining experience defined by impeccable service in a graceful, transcendent setting. The feeling is distinctly modern and yet filled with respect for ancient tradition.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d13009855-Reviews-Karma_Indian_Restaurant-Pattaya_Chonburi_Province.html",
    address:
      "371/3 Moo 10 Nongprue Near soi 18 ,soi yensabai, Pattaya 20150 Thailand",
    cuisine: ["Indian", "Asian", "Vegetarian"],
  },
  {
    _id: { $oid: "64b5965d3c61936e74ff6310" },
    name: "Zaika Indian Restaurant",
    num_reviews: "989",
    location_string: "Pattaya, Chonburi Province",
    photo: {
      width: { $numberInt: "253" },
      url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/33/da/68/img-20161005-212933-largejpg.jpg",
      height: { $numberInt: "450" },
    },
    rating: "4.5",
    price_level: "$$ - $$$",
    description:
      "Zaika Indian Cuisine & Restaurant takes pride in serving the best Indian cuisine in town. The variety in taste and flavour of Indian food is simply overpowering. That's why our restaurant is called Zaika. It translates quite literally as sense of taste & sophisticated flavours of royal and ethnic culture of Indian heritage and we are proud to bring just that for you in the form of food. Zaika Indian Cuisine uses only the freshest of ingredients on their authentic fare. Always fresh, the dishes are a savory delight.Zaika is a two-floored Indian restaurant with seating capacity of over 120 people located in the centre of Pattaya. It is an ideal place for birthday parties, family dinner and for your next conference dinner or lunch venue. We also offer catering services to small and large events, weddings, graduations, corporate and holiday parties, and executive events.Zaika is a feast for your taste buds with spices on our mind and the rich Indian flavor on our lips we delight you with a rich tasteful experience, acclaimed favourites include Zaika Gold/ Silver platter, Tawa masala, the Vindaloos, Chicken Tikka Masala, Dal Makhani and Tandoori dishes made in authentic tandoor are our specialties.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g293919-d3223623-Reviews-Zaika_Indian_Restaurant-Pattaya_Chonburi_Province.html",
    address:
      "215/62-63 Second Road Pattaya Opposite Royal Garden Plaza & Marriott Hotel, Pattaya 20150 Thailand",
    cuisine: ["Indian", "Asian", "Vegetarian"],
  },
];

export default restaurants;

/* <div class="container px-5 py-24 mx-auto flex flex-wrap">
  <div class="h-full p-4 lg:w-1/3">
    <div class=" bg-gray-100 px-8 pt-16 pb-16 relative">
      <h2 class="text-xs mb-1">CATEGORY</h2>
      <h1 class="title-font sm:text-2xl text-xl mb-3">
        Raclette Blueberry Nextious
      </h1>
      <p class="mb-3">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p>
      <a class="text-indigo-500 inline-flex items-center" href="/">
        Learn More
      </a>
    </div>
  </div>
  <div class="h-full p-4 lg:w-1/3">
    <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
      <h2 class="text-xs mb-1">CATEGORY</h2>
      <h1 class="title-font sm:text-2xl text-xl mb-3">
        Ennui Snackwave Thundercats
      </h1>
      <p class="mb-3">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p>
      <a class="text-indigo-500 inline-flex items-center" href="/">
        Learn More
      </a>
    </div>
  </div>
  <div class="h-full p-4 lg:w-1/3">
    <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
      <h2 class="text-xs mb-1">CATEGORY</h2>
      <h1 class="title-font sm:text-2xl text-xl mb-3">
        Selvage Poke Waistcoat
      </h1>
      <p class="mb-3">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p>
      <a class="text-indigo-500 inline-flex items-center" href="/">
        Learn More
      </a>
    </div>
  </div>
</div>; */
