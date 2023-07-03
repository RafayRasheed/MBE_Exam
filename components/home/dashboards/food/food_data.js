export const FoodOpenNow = [
    {
        name: 'Burger O’Clock',
        image: require('../../../assets/home_main/dashboards/foods/burger2.png'),
        rating: 4.3,
        items: ['Burger', 'Sauce', 'Fries', 'Soft Drinks'],
        icon: require('../../../assets/home_main/dashboards/foods/icon.png'),
        verified: true,
        featured: true,
        totalRating: '200+',
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',
        delivery: 'Free Delivery',
        deliveryTime: '10 - 15 minutes',
        status: 'open',
        deal: '20% OFF Max Value Deals',
        timmings: [
            {
                day: 'Sunday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
            {
                day: 'Monday - Saturday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
        ],
    },
    {
        name: 'Pizza Hut',
        image: require('../../../assets/home_main/dashboards/foods/pizza.png'),
        rating: 4.3,
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',
        items: ['Pizza', 'Sauce', 'Spicy', 'BBQ'],
        icon: require('../../../assets/home_main/dashboards/foods/icon.png'),
        verified: true,
        totalRating: '200+',
        delivery: 'Free Delivery',
        featured: true,
        deliveryTime: '10 - 15 minutes',
        status: 'open',
        deal: 'Summer Deals',
        timmings: [
            {
                day: 'Sunday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
            {
                day: 'Monday - Saturday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
        ],
    },
    {
        name: 'Burger O’Clock',
        image: require('../../../assets/home_main/dashboards/foods/burger2.png'),
        rating: 4.3,
        items: ['Burger', 'Sauce', 'Fries', 'Soft Drinks'],
        icon: require('../../../assets/home_main/dashboards/foods/icon.png'),
        verified: true,
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',
        featured: false,
        totalRating: '200+',
        delivery: 'Free Delivery',
        deliveryTime: '10 - 15 minutes',
        status: 'open',
        deal: '20% OFF Max Value Deals',
        timmings: [
            {
                day: 'Sunday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
            {
                day: 'Monday - Saturday',
                times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
            },
        ],

    },
]

export const mainCourse = [
    {
        name: 'Double Quarter Extra Value Meal',
        image: require('../../../assets/home_main/daily_special/dailyS2.jpg'),
        price: '$8.25',
        resName: 'Burger O’Clock',
        cals: '640',
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',

        optionsReq: true,
        options: [
            {
                required: true,
                name: 'Side Item',
                list: ['Med Fries [350.0 Cals]', 'Med Fries [30.0 Cals]', 'Med Fries [50.0 Cals]', 'Med Fries [300.0 Cals]']
            },
            {
                required: false,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
            {
                required: false,
                name: 'Ice',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
        ],
        description: 'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, sauce, and toasted bun.'
    },
    {
        name: 'Classic Sandwich',
        resName: 'Burger O’Clock',
        image: require('../../../assets/home_main/daily_special/dailyS2.jpg'),
        price: '$8.25',
        cals: '640',
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',

        description: 'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, sauce, and toasted bun.',
        optionsReq: true,
        options: [
            {
                required: true,
                name: 'Side Item',
                list: ['Med Fries [350.0 Cals]', 'Med Fries [30.0 Cals]', 'Med Fries [50.0 Cals]', 'Med Fries [300.0 Cals]']
            },
            {
                required: false,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
            {
                required: false,
                name: 'Ice',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
        ],
    },
    {
        name: 'Classic Sandwich',
        image: require('../../../assets/home_main/daily_special/dailyS2.jpg'),
        price: '$8.25',
        cals: '640',
        optionsReq: true,
        description: 'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, sauce, and toasted bun.',
        options: [
            {
                required: true,
                name: 'Side Item',
                list: ['Med Fries [350.0 Cals]', 'Med Fries [30.0 Cals]']
            },
            {
                required: true,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
            {
                required: false,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
        ],
    },
    {
        name: 'Classic Sandwich',
        image: require('../../../assets/home_main/daily_special/dailyS2.jpg'),
        price: '$8.25',
        cals: '640',
        optionsReq: false,
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',

        options: [
            {
                required: true,
                name: 'Side Item',
                list: ['Med Fries [350.0 Cals]', 'Med Fries [30.0 Cals]', 'Med Fries [50.0 Cals]', 'Med Fries [300.0 Cals]']
            },
            {
                required: false,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
            {
                required: false,
                name: 'Ice',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
        ],
        description: 'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, sauce, and toasted bun.'
    },
    {
        name: 'Classic Sandwich',
        image: require('../../../assets/home_main/daily_special/dailyS2.jpg'),
        price: '$8.25',
        loc: '2130 Morningside Avenue, Scarborough, ON M1B',

        resName: 'Burger O’Clock',
        cals: '640',
        optionsReq: false,
        options: [
            {
                required: true,
                name: 'Side Item',
                list: ['Med Fries [350.0 Cals]', 'Med Fries [30.0 Cals]', 'Med Fries [50.0 Cals]', 'Med Fries [300.0 Cals]']
            },
            {
                required: false,
                name: 'Drink',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
            {
                required: false,
                name: 'Ice',
                list: ['Soft Drinks', 'Coffee or Tea']
            },
        ],
        description: 'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, sauce, and toasted bun.'
    },
]

export const ResCategories = [
    'Popular', 'Family Deals', 'Burgers', 'Burgers', 'Specials', 'All'
]

export const foodCategories = [
    {
        id: 'cat1',
        name: 'Fast Foods',
        image: require('../../../assets/home_main/dashboards/foods/category/fast2.png'),
    },

    {
        id: 'cat2',
        name: 'Desi',
        image: require('../../../assets/home_main/dashboards/foods/category/desi2.png'),
    },
    {
        id: 'cat3',
        name: 'BBQ',
        image: require('../../../assets/home_main/dashboards/foods/category/bbq2.png'),
    },
    {
        id: 'cat4',
        name: 'Sea Foods',
        image: require('../../../assets/home_main/dashboards/foods/category/fish2.png'),
    },

    {
        id: 'cat4',
        name: 'Chineese',
        image: require('../../../assets/home_main/dashboards/foods/category/chineese2.png'),
    },
    {
        id: 'cat5',
        name: 'Deserts',
        image: require('../../../assets/home_main/dashboards/foods/category/desert2.png'),
    },

    {
        id: 'cat6',
        name: 'Drinks',
        image: require('../../../assets/home_main/dashboards/foods/category/drink2.png'),
    },
]

export const savePlaces = [
    {
        id: 'cat10',
        name: 'Home',
        address: '100 Dynamic Drive, Toronto, ON'
    },


    {
        id: 'cat11',
        name: 'Office',
        address: '100 Dynamic Drive, Toronto, ON'
    },
]

export const recentPlaces = [
    {
        id: 'cat1',
        name: 'Home',
        address: '100 Dynamic Drive, Toronto, ON'
    },
]

export const searchPlaces = [
    {
        id: 'cat2',
        address: 'Tauheed Commercial',
        city: 'Karachi, Pakistan'
    },
    {
        id: 'cat3',
        address: 'Tauheed Commercial',
        city: 'Karachi, Pakistan'
    },
    {
        id: 'cat4',
        address: 'Tauheed Estate',
        city: 'Karachi, Pakistan'
    },
    {
        id: 'cat5',
        address: 'Tauheed Enterprise',
        city: 'Karachi, Pakistan'
    },
    {
        id: 'cat6',
        address: 'Tauheed Commercial',
        city: 'Karachi, Pakistan'
    },
    {
        id: 'cat7',
        address: 'Tauheed Commercial',
        city: 'Karachi, Pakistan'
    },
]
