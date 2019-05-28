const categories = [
    {
      id: 'bottle',
      name: 'Milk Tracker',
      component: 'MilkTracker',      
      image: require('../assets/icons/bottle.png')
    },
    {
      id: 'calculator',
      name: 'Calculator',
      component: 'Calculator',      
      image: require('../assets/icons/calculator.png')
    },
    {
      id: 'drink',
      name: 'Drink Counter',
      component: 'DrinkCounter',      
      image: require('../assets/icons/drink.png')
    },
    {
      id: 'journal',
      name: 'Milk Journal',
      component: 'Journal',      
      image: require('../assets/icons/journal.png')
    },
    {
      id: 'meditation',
      name: 'Flow Meditation',
      component: 'Meditation',      
      image: require('../assets/icons/meditation.png')
    },
    {
      id: 'questions',
      name: 'Questions',
      component: 'Questions',    
      image: require('../assets/icons/questions.png')
    },
  ];
  
 const explore = [
    // images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
  ];
  
  const profile = {
    username: 'oauzenne',
    location: 'America',
    email: 'oauzenne@gmail.com',
    avatar: require('../assets/images/avatar.png'),
    baby_name: 'Marley',
    notifications: true,
    newsletter: false,
  };
  
  export {
    categories,
    explore,
    profile,
  }