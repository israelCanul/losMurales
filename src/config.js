 export const Captains = {
  range : [['17:00','21:00']],
  interval : 30,
  id: 0,
 }
 export const Sisal = {
  range : [['17:00','21:30']],
  interval : 30,
  id: 1
 }
 export const Conquistador = {
  range : [['17:00','23:00']],
  interval : 15,
  id: 2
 }

 export const Murales = {
  range : [['17:00','21:00']],
  interval : 30,
  id: 3
 }

 export const Trattoria = {
  range : [['17:00','21:30']],
  interval : 30,
  id: 6
 }

 export function onInputKeyupNumber(e){
   e.target.value= e.target.value.replace(/[^0-9]/g, '');
 }
 export const maxWidth = 1600;


//http://localhost/reservations/reservationsPR-rest.php
//https://www.elconquistadorcancun.com/reservas-PR/reservationsPR-rest.php
 export const ROOT_URL_PRUE = 'http://localhost/reservations/reservations-rest.php';
 export const ROOT_URL_PROD = 'https://www.elconquistadorcancun.com/reservas-PR/reservationsPR-rest.php';


 export const MenuMurales = [
   {
     cat: 'Cold Appetizers',
     items : [
        {title : 'Marlin Salpicón',
        subtitle : 'Shredded  llet of smoked marlin served with Xcatic chili, tomato, red onion, avocado and a coriander dressing. 125'
        },
        {title : 'Salmon Gravlax Tiradito',
        subtitle : 'Salmon in a 24-hour marinade, served over a mango and cucumber relish with a sweet mustard vinaigrette. 140'
        },
        {title : 'Shrimp Symphony',
        subtitle : 'A delicate and intriguing blend of  avors from land and sea make this shrimp cocktail a delight. 165'
        },
        {title : 'Scallops',
        subtitle : 'Whisky  ambéed scallops, served on an onion marmalade and fresh endive salad. 170'
        },
        {title : 'Stffed Avocado',
        subtitle : 'Avocado with a shrimp  lling, served with a red wine vinaigrette. 165'
        },
        {title : 'Tuna Tiradito',
        subtitle : 'Chili powder and hibiscus-crusted seared tuna with sweet potato chips. 225'
        },
        {title : 'Tuna Tartare',
        subtitle : 'Fresh tuna  llet marinated in lime juice with capers and mango, served with tuna wrapped in prosciutto and phyllo pastry with mango sauce and strawberry vinaigrette. 145'
        }
     ]
   },
   {
     cat: 'Hot Appetizers',
     items : [
        {title : 'Crab Enchiladas',
        subtitle : 'Crepes with a crabmeat  lling, served with tomato sauce and rice. 260'
        },
        {title : 'Buttered Clams',
        subtitle : 'Clams in a butter sauce with sautéed vegetables and a hint of caviar. 195 surcharge 120'
        },
        {title : 'Shrimp Crisps',
        subtitle : 'Crispy fried plantain slices served with sautéed diced shrimp, garlic, tomato and basil. 140'
        },
        {title : 'Porcini Mushroom Crepe',
        subtitle : 'Crepe with a porcini mushroom  lling, served with a sauce featuring the rich  avors of wild portobello and porcini mushrooms. 145'
        },
        {title : 'Lobster Risotto',
        subtitle : 'Arborio rice served with squash  owers and lobster slices. 245 surcharge 70'
        }
     ]
   },
   {
     cat: 'Soups',
     items : [
        {title : 'Lobster Bisque',
        subtitle : 'Cream of lobster soup, full of the  avors of the sea, served with a hint of cognac. 143'
        },
        {title : 'Clam Chowder',
        subtitle : 'New England-style cream of clam soup served in a freshly baked loaf to bring out the  avor of the clams. 145'
        },
        {title : 'Seafood Soup',
        subtitle : 'A hearty mix of seafood and vegetables in a broth with a hint of chili. 160'
        }
     ]
   },
   {
     cat: 'Salads',
     items : [
         {title : 'Caesar Salad',
         subtitle : 'Lettuce leaves coated with Caesar dressing, served with Parmesan cheese crisps. 118 With shrimp 165'
         },
         {title : 'Murales Salad',
         subtitle : 'Mixed lettuces drizzled with mango vinaigrette and served with fried calamari and litchis. 148'
         },
         {title : 'Apple, Nut and Roquefort Cheese Salad',
         subtitle : 'A tangy salad that blends the  avors of mixed lettuces, toasted nuts, apples and a hint of Roquefort cheese, drizzled with a balsamic vinegar glaze. 1485'
         }
     ]
   },
   {
     cat: 'Pastas',
     items : [
        {title : 'Open Seafood Ravioli',
        subtitle : 'Freshly made spinach pasta  lled with lobster, shrimp, scallop and squid and served with tomato sauce and a hint of Xtabentun liqueur. 245'
        },
        {title : 'Murales Penne',
        subtitle : 'Penne pasta with crabmeat pasta in a creamy three-cheese sauce. 296'
        },
        {title : 'Gluten-Free Fettuccini',
        subtitle : 'Gluten-free pasta sautéed with mushrooms, olive oil, onion, cream and grilled lobster. 367'
        }
     ]
   },
   {
     cat: 'Lobster',
     items : [
        {title : 'Lobster Tail',
        subtitle : '12 oz lobster tail served with pilaf rice, herbed tomatoes and marinated grilled vegetables. 780'
        },
        {title : 'Mixed Grill',
        subtitle : 'Nature’s bounty from land and sea, lobster tail, salmon, shrimp and beef  llet served with steamed vegetables. Ideal for sharing (2 people). 1,310 '
        }
     ]
   } ,
   {
     cat: 'Shrimp',
     items : [
        {title : 'Lime Shrimp',
        subtitle : 'Shrimp cooked in lime and tequila sauce, served with rice and chili de árbol oil. 320'
        },
        {title : 'Coconut Shrimp',
        subtitle : 'Golden-fried shrimp served with creamy coconut sauce and tamarind sauce. 310'
        }
     ]
   },
   {
     cat: 'Meat & Poultry',
     items : [
        {title : 'Angus Beef Fillet',
        subtitle : 'Beef  llet with potato au gratin, parsley and wild mushroom goulash. 420'
        },
        {title : 'Rib Eye',
        subtitle : '12 oz Rib eye served with potatoes au gratin and grilled vegetables. 450'
        },
        {title : 'Rack of Lamb',
        subtitle : 'Tender roast rack of lamb cooked with herbs and served with baked artichoke and mint sauce. 410'
        },
        {title : 'Grilled Arrachera Steak',
        subtitle : 'Grilled beef with a delightful red wine reduction, accompanied by rosemary potatoes. 305'
        },
        {title : 'Kurobuta Pork Chops',
        subtitle : 'Grilled pork chops served with Mediterranean quinoa and  g marmalade. 442'
        },
        {title : 'Rock Cornish Game Hen',
        subtitle : 'Rock Cornish Game Hen Rock Cornish game hen served on a bed of lentil and Portobello mushroom risotto with  ambéed  gs and asparagus. 340'
        }
     ]
   },
   {
     cat: 'Fish',
     items : [
        {title : 'Tuna Steak',
        subtitle : 'Grilled tuna steak served with mashed local pumpkin and a black Mayan sauce. 325'
        },
        {title : 'Chilean Sea Bass',
        subtitle : 'Sea bass  llet with garlic mashed potato, asparagus, caramelized shallots and pernod sauce. 4420'
        },
        {title : 'Salmon',
        subtitle : 'Grilled salmon with capers, served with an asparagus bundle, marinated lettuce and a pomegranate vinaigrette. 305'
        },
        {title : 'Grouper',
        subtitle : 'Grilled grouper served with rice and almond and pimiento sauce. 319'
        },
        {title : 'Boquinete',
        subtitle : 'Grilled boquinete or Spanish snapper served with steamed vegetables and garlic-dill butter. 320'
        }
     ]
   }
 ]

// se agregan los items de los comentarios para la pagina

export const CommentsTripAdvisor = [
  {comment:"I've dined here many times. I love the ambiance, the staff, and, of course, the cuisine. Keep up the good work!",
    name: "Anikasmama",
    image: "https://media-cdn.tripadvisor.com/media/photo-l/07/56/72/0e/anikasmama.jpg",
    link: 'https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r466252851-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS'},
  {comment:"The Los Murales is a Beautiful Restaurant with a Guitar player for your enjoyment and Flaming Desserts done right at your Table.",
    name: "JudySkibsted",
    image: "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/55/avatar028.jpg",
    link: 'https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r464129887-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS'},
    {comment:"We had a nice dinner here while staying at the Haciendas. The food and service was terrific. I'd recommend the Mayan coffee to end your dinner.",
      name: "Nikki H",
      image: "https://media-cdn.tripadvisor.com/media/photo-l/03/12/e7/b0/nikki-h.jpg",
      link: 'https://www.tripadvisor.com/ShowUserReviews-g150812-d2159424-r463804896-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html#REVIEWS'}

];
