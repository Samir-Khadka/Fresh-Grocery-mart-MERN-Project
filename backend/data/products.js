const products = [
  {
    "name": "Fuji Apple",
    "category": "Fruits",
    "price": 1.99,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Apfel-Fuji.jpg/500px-Apfel-Fuji.jpg",
    "description": "Crisp and sweet Fuji apple."
  },
  {
    "name": "Cavendish Banana",
    "category": "Fruits",
    "price": 0.89,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/500px-Cavendish_Banana_DS.jpg",
    "description": "Classic yellow Cavendish banana."
  },
  {
    "name": "Navel Orange",
    "category": "Fruits",
    "price": 1.49,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Navel_orange.jpg/500px-Navel_orange.jpg",
    "description": "Seedless and juicy navel orange."
  },
  {
    "name": "Strawberry",
    "category": "Fruits",
    "price": 3.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "Fresh garden strawberries."
  },
  {
    "name": "Blueberry",
    "category": "Fruits",
    "price": 4.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "Plump wild blueberries."
  },
  {
    "name": "Red Grape",
    "category": "Fruits",
    "price": 2.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "Seedless red table grapes."
  },
  {
    "name": "Watermelon",
    "category": "Fruits",
    "price": 5.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "Whole seedless watermelon."
  },
  {
    "name": "Honeydew Melon",
    "category": "Fruits",
    "price": 4.49,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Honeydew.jpg/500px-Honeydew.jpg",
    "description": "Sweet honeydew melon."
  },
  {
    "name": "Pineapple",
    "category": "Fruits",
    "price": 2.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "Whole tropical pineapple."
  },
  {
    "name": "Alphonso Mango",
    "category": "Fruits",
    "price": 3.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mangoes_in_Bangalore_%282025%29_19.jpg/500px-Mangoes_in_Bangalore_%282025%29_19.jpg",
    "description": "Premium Alphonso mango."
  },
  {
    "name": "White Peach",
    "category": "Fruits",
    "price": 1.79,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "Juicy white peach."
  },
  {
    "name": "Bosc Pear",
    "category": "Fruits",
    "price": 1.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/BoscPears.jpg/500px-BoscPears.jpg",
    "description": "Sweet Bosc pear."
  },
  {
    "name": "Black Plum",
    "category": "Fruits",
    "price": 1.29,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "Ripe black plum."
  },
  {
    "name": "Kiwifruit",
    "category": "Fruits",
    "price": 0.99,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "Tangy green kiwifruit."
  },
  {
    "name": "Lemon",
    "category": "Fruits",
    "price": 0.79,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "Bright yellow lemon."
  },
  {
    "name": "Persian Lime",
    "category": "Fruits",
    "price": 0.69,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Starr-140117-3997-Citrus_latifolia-Tahitian_fruit_and_leaves-Hawea_Pl_Olinda-Maui_%2824612312943%29.jpg/500px-Starr-140117-3997-Citrus_latifolia-Tahitian_fruit_and_leaves-Hawea_Pl_Olinda-Maui_%2824612312943%29.jpg",
    "description": "Seedless Persian lime."
  },
  {
    "name": "Bing Cherry",
    "category": "Fruits",
    "price": 5.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "Dark sweet Bing cherries."
  },
  {
    "name": "Raspberry",
    "category": "Fruits",
    "price": 3.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "Fresh red raspberries."
  },
  {
    "name": "Papaya",
    "category": "Fruits",
    "price": 2.99,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg/500px-Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg",
    "description": "Ripe tropical papaya."
  },
  {
    "name": "Avocado",
    "category": "Fruits",
    "price": 1.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "Hass avocado, ready to eat."
  },
  {
    "name": "Carrot",
    "category": "Vegetables",
    "price": 1.29,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "Fresh orange carrots."
  },
  {
    "name": "Broccoli",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "Fresh green broccoli crown."
  },
  {
    "name": "Roma Tomato",
    "category": "Vegetables",
    "price": 2.49,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/TomateTrossRomanaTyp.jpg/500px-TomateTrossRomanaTyp.jpg",
    "description": "Firm and flavourful Roma tomato."
  },
  {
    "name": "Yellow Onion",
    "category": "Vegetables",
    "price": 0.99,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "All-purpose yellow onion."
  },
  {
    "name": "Garlic",
    "category": "Vegetables",
    "price": 0.79,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "Fresh garlic bulb."
  },
  {
    "name": "Sweet Potato",
    "category": "Vegetables",
    "price": 1.29,
    "stock": 140,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "Orange-fleshed sweet potato."
  },
  {
    "name": "Baby Spinach",
    "category": "Vegetables",
    "price": 2.99,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "Tender baby spinach leaves."
  },
  {
    "name": "Romaine Lettuce",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Starr_070730-7911_Lactuca_sativa.jpg/500px-Starr_070730-7911_Lactuca_sativa.jpg",
    "description": "Crisp Romaine lettuce head."
  },
  {
    "name": "Red Cabbage",
    "category": "Vegetables",
    "price": 1.49,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "Dense red cabbage head."
  },
  {
    "name": "English Cucumber",
    "category": "Vegetables",
    "price": 1.29,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "Long seedless English cucumber."
  },
  {
    "name": "Zucchini",
    "category": "Vegetables",
    "price": 1.49,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "Fresh green zucchini."
  },
  {
    "name": "Red Bell Pepper",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "Sweet red bell pepper."
  },
  {
    "name": "Jalapeño",
    "category": "Vegetables",
    "price": 0.99,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "Spicy fresh jalapeño pepper."
  },
  {
    "name": "Celery",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "Crisp celery bunch."
  },
  {
    "name": "Sweet Corn",
    "category": "Vegetables",
    "price": 0.89,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/CookedCornOnTheCob.JPG/500px-CookedCornOnTheCob.JPG",
    "description": "Fresh sweet corn on the cob."
  },
  {
    "name": "Green Peas",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "Fresh shelled green peas."
  },
  {
    "name": "Green Beans",
    "category": "Vegetables",
    "price": 2.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "Tender-crisp green beans."
  },
  {
    "name": "Cauliflower",
    "category": "Vegetables",
    "price": 2.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "White cauliflower head."
  },
  {
    "name": "Butternut Squash",
    "category": "Vegetables",
    "price": 2.49,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cucurbita_moschata_Butternut_2012_G2.jpg/500px-Cucurbita_moschata_Butternut_2012_G2.jpg",
    "description": "Sweet butternut squash."
  },
  {
    "name": "Whole Milk",
    "category": "Dairy",
    "price": 2.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "Fresh whole milk, 1 gallon."
  },
  {
    "name": "Cheddar Cheese",
    "category": "Dairy",
    "price": 4.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Somerset-Cheddar.jpg/500px-Somerset-Cheddar.jpg",
    "description": "Mature cheddar cheese block."
  },
  {
    "name": "Mozzarella",
    "category": "Dairy",
    "price": 3.49,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mozzarella_di_bufala3.jpg/500px-Mozzarella_di_bufala3.jpg",
    "description": "Fresh mozzarella ball."
  },
  {
    "name": "Unsalted Butter",
    "category": "Dairy",
    "price": 3.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "Creamy unsalted butter, 250g."
  },
  {
    "name": "Heavy Cream",
    "category": "Dairy",
    "price": 2.49,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "Fresh heavy whipping cream."
  },
  {
    "name": "Cottage Cheese",
    "category": "Dairy",
    "price": 2.79,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Cottagecheese200px.jpg/500px-Cottagecheese200px.jpg",
    "description": "Low-fat cottage cheese."
  },
  {
    "name": "Feta Cheese",
    "category": "Dairy",
    "price": 4.49,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Feta_Cheese.jpg/500px-Feta_Cheese.jpg",
    "description": "Crumbled feta cheese in brine."
  },
  {
    "name": "Chicken Breast",
    "category": "Meat",
    "price": 7.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chickens_in_market.jpg/500px-Chickens_in_market.jpg",
    "description": "Boneless skinless chicken breast."
  },
  {
    "name": "Beef Ribeye Steak",
    "category": "Meat",
    "price": 14.99,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/BeefCutRib.svg/500px-BeefCutRib.svg.png",
    "description": "Premium beef ribeye steak."
  },
  {
    "name": "Pork Belly",
    "category": "Meat",
    "price": 8.99,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "Thick-cut pork belly slices."
  },
  {
    "name": "Atlantic Salmon",
    "category": "Meat",
    "price": 11.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wst_atlantischer_lachs_stoer_001.jpg/500px-Wst_atlantischer_lachs_stoer_001.jpg",
    "description": "Fresh Atlantic salmon fillet."
  },
  {
    "name": "Yellowfin Tuna",
    "category": "Meat",
    "price": 9.99,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Thunnus_albacares.png",
    "description": "Sushi-grade yellowfin tuna."
  },
  {
    "name": "Tiger Prawns",
    "category": "Meat",
    "price": 13.99,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/CSIRO_ScienceImage_2992_The_Giant_Tiger_Prawn.jpg/500px-CSIRO_ScienceImage_2992_The_Giant_Tiger_Prawn.jpg",
    "description": "Fresh tiger prawns."
  },
  {
    "name": "Dungeness Crab",
    "category": "Meat",
    "price": 18.99,
    "stock": 15,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/DungenessCrab.jpg/500px-DungenessCrab.jpg",
    "description": "Whole cooked Dungeness crab."
  },
  {
    "name": "Streaky Bacon",
    "category": "Meat",
    "price": 5.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "Smoked streaky bacon rashers."
  },
  {
    "name": "Beef Mince",
    "category": "Meat",
    "price": 6.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hackfleisch-1.jpg/500px-Hackfleisch-1.jpg",
    "description": "Lean ground beef, 500g."
  },
  {
    "name": "Baguette",
    "category": "Bakery",
    "price": 2.49,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/500px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
    "description": "Classic French baguette."
  },
  {
    "name": "Croissant",
    "category": "Bakery",
    "price": 1.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "Buttery flaky croissant."
  },
  {
    "name": "Blueberry Muffin",
    "category": "Bakery",
    "price": 2.29,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "Moist blueberry muffin."
  },
  {
    "name": "Bagel",
    "category": "Bakery",
    "price": 1.49,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "Plain New York-style bagel."
  },
  {
    "name": "Cinnamon Roll",
    "category": "Bakery",
    "price": 2.99,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cinnamon_roll_in_Stockholm.jpg/500px-Cinnamon_roll_in_Stockholm.jpg",
    "description": "Glazed cinnamon roll."
  },
  {
    "name": "Whole Wheat Bread",
    "category": "Bakery",
    "price": 3.49,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vegan_no-knead_whole_wheat_bread_loaf%2C_September_2010.jpg/500px-Vegan_no-knead_whole_wheat_bread_loaf%2C_September_2010.jpg",
    "description": "Sliced whole wheat bread loaf."
  },
  {
    "name": "Pita Bread",
    "category": "Bakery",
    "price": 2.49,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pita_Bread.jpg/500px-Pita_Bread.jpg",
    "description": "Soft pita bread pack."
  },
  {
    "name": "Basmati Rice",
    "category": "Pantry",
    "price": 4.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Khyma_and_Basmati_rice.jpg/500px-Khyma_and_Basmati_rice.jpg",
    "description": "Long-grain basmati rice, 1kg."
  },
  {
    "name": "Spaghetti",
    "category": "Pantry",
    "price": 1.99,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Spaghettoni.jpg/500px-Spaghettoni.jpg",
    "description": "Durum wheat spaghetti, 500g."
  },
  {
    "name": "Penne Pasta",
    "category": "Pantry",
    "price": 1.99,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pennelisce_closeup.png/500px-Pennelisce_closeup.png",
    "description": "Bronze-cut penne pasta."
  },
  {
    "name": "Rolled Oats",
    "category": "Pantry",
    "price": 3.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "Whole rolled oats, 1kg."
  },
  {
    "name": "Quinoa",
    "category": "Pantry",
    "price": 5.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "White quinoa grains, 500g."
  },
  {
    "name": "Plain Flour",
    "category": "Pantry",
    "price": 1.99,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "All-purpose plain flour, 1kg."
  },
  {
    "name": "Caster Sugar",
    "category": "Pantry",
    "price": 1.79,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "Fine caster sugar, 1kg."
  },
  {
    "name": "Sea Salt",
    "category": "Pantry",
    "price": 2.49,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Salt_Farmers_-_Pak_Thale-edit1.jpg/500px-Salt_Farmers_-_Pak_Thale-edit1.jpg",
    "description": "Coarse sea salt flakes."
  },
  {
    "name": "Black Pepper",
    "category": "Pantry",
    "price": 2.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "Ground black pepper, 100g."
  },
  {
    "name": "Extra Virgin Olive Oil",
    "category": "Pantry",
    "price": 7.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "Cold-pressed extra virgin olive oil."
  },
  {
    "name": "Apple Cider Vinegar",
    "category": "Pantry",
    "price": 3.49,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Apple_Cider_Vinegar_%284108653248%29.jpg/500px-Apple_Cider_Vinegar_%284108653248%29.jpg",
    "description": "Raw unfiltered apple cider vinegar."
  },
  {
    "name": "Tomato Ketchup",
    "category": "Pantry",
    "price": 2.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "Classic tomato ketchup, 570g."
  },
  {
    "name": "Dijon Mustard",
    "category": "Pantry",
    "price": 2.99,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dijon_mustard_on_a_spoon_-_20051218.jpg/500px-Dijon_mustard_on_a_spoon_-_20051218.jpg",
    "description": "Smooth Dijon mustard."
  },
  {
    "name": "Mayonnaise",
    "category": "Pantry",
    "price": 2.79,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "Real egg mayonnaise."
  },
  {
    "name": "Soy Sauce",
    "category": "Pantry",
    "price": 2.49,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "Dark soy sauce, 150ml."
  },
  {
    "name": "Peanut Butter",
    "category": "Pantry",
    "price": 3.99,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "Smooth peanut butter, 340g."
  },
  {
    "name": "Strawberry Jam",
    "category": "Pantry",
    "price": 3.49,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fruits_jam_variants.jpg/500px-Fruits_jam_variants.jpg",
    "description": "Chunky strawberry jam."
  },
  {
    "name": "Manuka Honey",
    "category": "Pantry",
    "price": 8.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manuka_honey_in_a_bowl.jpg/500px-Manuka_honey_in_a_bowl.jpg",
    "description": "MGO-certified Manuka honey."
  },
  {
    "name": "Maple Syrup",
    "category": "Pantry",
    "price": 6.99,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "Pure Canadian maple syrup, Grade A."
  },
  {
    "name": "Coconut Oil",
    "category": "Pantry",
    "price": 5.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Coconut_and_oil.jpg/500px-Coconut_and_oil.jpg",
    "description": "Cold-pressed virgin coconut oil."
  },
  {
    "name": "Chickpeas",
    "category": "Pantry",
    "price": 1.49,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chickpea_BNC.jpg/500px-Chickpea_BNC.jpg",
    "description": "Canned chickpeas in water."
  },
  {
    "name": "Red Kidney Beans",
    "category": "Pantry",
    "price": 1.29,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_Rajma_BNC.jpg/500px-Red_Rajma_BNC.jpg",
    "description": "Canned red kidney beans."
  },
  {
    "name": "Lentils",
    "category": "Pantry",
    "price": 2.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/3_types_of_lentil.png/500px-3_types_of_lentil.png",
    "description": "Green lentils, 500g."
  },
  {
    "name": "Tinned Tomatoes",
    "category": "Pantry",
    "price": 1.19,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/500px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg",
    "description": "Chopped tinned tomatoes, 400g."
  },
  {
    "name": "Vegetable Stock",
    "category": "Pantry",
    "price": 1.99,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Making_stock_for_pho_bo.jpg/500px-Making_stock_for_pho_bo.jpg",
    "description": "Low-salt vegetable stock cubes."
  },
  {
    "name": "Ground Coffee",
    "category": "Beverages",
    "price": 8.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "Medium roast ground coffee, 250g."
  },
  {
    "name": "English Breakfast Tea",
    "category": "Beverages",
    "price": 4.99,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mug_of_English_breakfast_tea.jpg/500px-Mug_of_English_breakfast_tea.jpg",
    "description": "Classic English breakfast tea, 80 bags."
  },
  {
    "name": "Orange Juice",
    "category": "Beverages",
    "price": 3.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Orangejuice.jpg/500px-Orangejuice.jpg",
    "description": "Freshly squeezed orange juice, 1L."
  },
  {
    "name": "Sparkling Water",
    "category": "Beverages",
    "price": 1.49,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Drinking_glass_00118.gif",
    "description": "Natural sparkling mineral water, 1.5L."
  },
  {
    "name": "Almond Milk",
    "category": "Beverages",
    "price": 2.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Home-made_almond_milk%2C_November_2012.jpg/500px-Home-made_almond_milk%2C_November_2012.jpg",
    "description": "Unsweetened almond milk, 1L."
  },
  {
    "name": "Coconut Water",
    "category": "Beverages",
    "price": 2.49,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Young_Coconut_Drink.jpg/500px-Young_Coconut_Drink.jpg",
    "description": "Pure coconut water, 330ml."
  },
  {
    "name": "Green Tea",
    "category": "Beverages",
    "price": 3.99,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Green_tea_3_appearances.jpg/500px-Green_tea_3_appearances.jpg",
    "description": "Japanese sencha green tea, 20 bags."
  },
  {
    "name": "Whole Milk Latte",
    "category": "Beverages",
    "price": 2.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/500px-Caffe_Latte_at_Pulse_Cafe.jpg",
    "description": "Ready-to-drink whole milk latte."
  },
  {
    "name": "Dark Chocolate",
    "category": "Snacks",
    "price": 3.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Schokolade-schwarz-braun-weiss.jpg/500px-Schokolade-schwarz-braun-weiss.jpg",
    "description": "70% dark chocolate bar, 100g."
  },
  {
    "name": "Popcorn",
    "category": "Snacks",
    "price": 1.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "Lightly salted popcorn, 80g."
  },
  {
    "name": "Hummus",
    "category": "Snacks",
    "price": 2.99,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/500px-Lebanese_style_hummus.jpg",
    "description": "Classic chickpea hummus, 200g."
  },
  {
    "name": "Salted Pretzels",
    "category": "Snacks",
    "price": 2.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "Crunchy salted pretzel twists."
  },
  {
    "name": "Gummy Bears",
    "category": "Snacks",
    "price": 1.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg/500px-Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg",
    "description": "Fruity gummy bear sweets, 200g."
  },
  {
    "name": "Rice Cakes",
    "category": "Snacks",
    "price": 1.79,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pink_seolgitteok_cake.jpg/500px-Pink_seolgitteok_cake.jpg",
    "description": "Plain rice cakes, 130g."
  },
  {
    "name": "Frozen Peas",
    "category": "Frozen",
    "price": 1.99,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "Frozen garden peas, 900g."
  },
  {
    "name": "Vanilla Ice Cream",
    "category": "Frozen",
    "price": 4.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "Classic vanilla ice cream, 1L."
  },
  {
    "name": "Fish Fingers",
    "category": "Frozen",
    "price": 3.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Fishfinger_classic_fried_2.jpg/500px-Fishfinger_classic_fried_2.jpg",
    "description": "Breaded fish fingers, 10-pack."
  },
  {
    "name": "Frozen Pizza",
    "category": "Frozen",
    "price": 5.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/500px-Pizza-3007395.jpg",
    "description": "Margherita frozen pizza, 350g."
  },
  {
    "name": "Edamame",
    "category": "Frozen",
    "price": 2.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg/500px-Edamame_by_Zesmerelda_in_Chicago.jpg",
    "description": "Frozen shelled edamame, 400g."
  },
  {
    "name": "Pomegranate",
    "category": "Fruits",
    "price": 2.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/500px-Pomegranate_Juice_%282019%29.jpg",
    "description": "Ruby-red pomegranate, packed with antioxidants."
  },
  {
    "name": "Dragon Fruit",
    "category": "Fruits",
    "price": 4.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/500px-Pitaya_cross_section_ed2.jpg",
    "description": "Exotic pink dragon fruit."
  },
  {
    "name": "Coconut",
    "category": "Fruits",
    "price": 2.49,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg/500px-Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg",
    "description": "Fresh whole coconut."
  },
  {
    "name": "Grapefruit",
    "category": "Fruits",
    "price": 1.29,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Grapefruits_-_whole-halved-segments.jpg/500px-Grapefruits_-_whole-halved-segments.jpg",
    "description": "Tangy pink grapefruit."
  },
  {
    "name": "Apricot",
    "category": "Fruits",
    "price": 2.49,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/500px-Apricot_and_cross_section.jpg",
    "description": "Sweet golden apricots."
  },
  {
    "name": "Guava",
    "category": "Fruits",
    "price": 1.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Guava_pink_fruit.jpg/500px-Guava_pink_fruit.jpg",
    "description": "Tropical pink-fleshed guava."
  },
  {
    "name": "Lychee",
    "category": "Fruits",
    "price": 3.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Litchi_chinensis_fruits.JPG/500px-Litchi_chinensis_fruits.JPG",
    "description": "Fragrant fresh lychees."
  },
  {
    "name": "Jackfruit",
    "category": "Fruits",
    "price": 5.99,
    "stock": 25,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/The_jackfruit_is_holding_on_to_the_tree.jpg/500px-The_jackfruit_is_holding_on_to_the_tree.jpg",
    "description": "Large tropical jackfruit."
  },
  {
    "name": "Beetroot",
    "category": "Vegetables",
    "price": 1.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Detroitdarkredbeets.png/500px-Detroitdarkredbeets.png",
    "description": "Earthy fresh beetroot."
  },
  {
    "name": "Aubergine",
    "category": "Vegetables",
    "price": 1.79,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/500px-Solanum_melongena_24_08_2012_%281%29.JPG",
    "description": "Glossy purple aubergine."
  },
  {
    "name": "Kale",
    "category": "Vegetables",
    "price": 2.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Boerenkool.jpg/500px-Boerenkool.jpg",
    "description": "Curly green kale leaves."
  },
  {
    "name": "Brussels Sprouts",
    "category": "Vegetables",
    "price": 2.29,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Brussels_sprout_closeup.jpg/500px-Brussels_sprout_closeup.jpg",
    "description": "Fresh Brussels sprouts."
  },
  {
    "name": "Leek",
    "category": "Vegetables",
    "price": 1.49,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Leek_on_white_background_-_0947.jpg/500px-Leek_on_white_background_-_0947.jpg",
    "description": "Mild-flavoured fresh leeks."
  },
  {
    "name": "Bok Choy",
    "category": "Vegetables",
    "price": 1.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bok_Choy_%2849553125456%29.jpg/500px-Bok_Choy_%2849553125456%29.jpg",
    "description": "Crisp baby bok choy."
  },
  {
    "name": "Radish",
    "category": "Vegetables",
    "price": 0.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/500px-Radish_3371103037_4ab07db0bf_o.jpg",
    "description": "Crunchy red radishes."
  },
  {
    "name": "Pumpkin",
    "category": "Vegetables",
    "price": 3.49,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "Whole orange pumpkin."
  },
  {
    "name": "Turnip",
    "category": "Vegetables",
    "price": 1.29,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/500px-Turnip_2622027.jpg",
    "description": "Fresh white turnips."
  },
  {
    "name": "Gouda Cheese",
    "category": "Dairy",
    "price": 5.49,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chesses_gouda_affinage.JPG/500px-Chesses_gouda_affinage.JPG",
    "description": "Mild and creamy Gouda."
  },
  {
    "name": "Brie",
    "category": "Dairy",
    "price": 6.49,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/500px-Brie_01.jpg",
    "description": "Soft-ripened French Brie."
  },
  {
    "name": "Cream Cheese",
    "category": "Dairy",
    "price": 2.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Philly_cream_cheese.jpg/500px-Philly_cream_cheese.jpg",
    "description": "Smooth spreadable cream cheese."
  },
  {
    "name": "Sour Cream",
    "category": "Dairy",
    "price": 1.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bowl_of_chili_with_sour_cream_and_cheese.jpg/500px-Bowl_of_chili_with_sour_cream_and_cheese.jpg",
    "description": "Thick tangy sour cream."
  },
  {
    "name": "Blue Cheese",
    "category": "Dairy",
    "price": 5.99,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bleu_au_lait_de_ch%C3%A8vre.jpg/500px-Bleu_au_lait_de_ch%C3%A8vre.jpg",
    "description": "Pungent creamy blue cheese."
  },
  {
    "name": "Pork Sausages",
    "category": "Meat",
    "price": 4.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Wurstplatte.jpg/500px-Wurstplatte.jpg",
    "description": "Traditional pork sausages, 6 pack."
  },
  {
    "name": "Smoked Ham",
    "category": "Meat",
    "price": 6.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ham_%284%29.jpg/500px-Ham_%284%29.jpg",
    "description": "Thick-cut smoked honey ham."
  },
  {
    "name": "Duck Breast",
    "category": "Meat",
    "price": 11.99,
    "stock": 25,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/And_%2824559569447%29.jpg/500px-And_%2824559569447%29.jpg",
    "description": "Premium duck breast fillet."
  },
  {
    "name": "Cod Fillet",
    "category": "Meat",
    "price": 8.99,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Atlantic_Cod%2C_Atlantischer_Kabeljau_%28Gadus_morhua%29.jpg/500px-Atlantic_Cod%2C_Atlantischer_Kabeljau_%28Gadus_morhua%29.jpg",
    "description": "Fresh sustainable cod fillet."
  },
  {
    "name": "Mackerel",
    "category": "Meat",
    "price": 5.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Scomber_scombrus_217326414.jpg/500px-Scomber_scombrus_217326414.jpg",
    "description": "Fresh whole Atlantic mackerel."
  },
  {
    "name": "Scallops",
    "category": "Meat",
    "price": 14.99,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Argopecten_irradians.jpg/500px-Argopecten_irradians.jpg",
    "description": "Hand-dived king scallops."
  },
  {
    "name": "Venison Steak",
    "category": "Meat",
    "price": 13.99,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Venison_Steaks.jpg/500px-Venison_Steaks.jpg",
    "description": "Lean wild venison steak."
  },
  {
    "name": "Focaccia",
    "category": "Bakery",
    "price": 3.99,
    "stock": 25,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Focaccia_with_Crumb.jpg/500px-Focaccia_with_Crumb.jpg",
    "description": "Rosemary and sea salt focaccia."
  },
  {
    "name": "Naan Bread",
    "category": "Bakery",
    "price": 1.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/500px-Annapurna_Naan.jpg",
    "description": "Soft tandoor-baked naan bread."
  },
  {
    "name": "Rye Bread",
    "category": "Bakery",
    "price": 3.49,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Market_Bread%2C_Riga%2C_Latvia.jpg/500px-Market_Bread%2C_Riga%2C_Latvia.jpg",
    "description": "Dense dark rye loaf."
  },
  {
    "name": "Brioche",
    "category": "Bakery",
    "price": 3.99,
    "stock": 25,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brioche.jpg/500px-Brioche.jpg",
    "description": "Buttery French brioche loaf."
  },
  {
    "name": "Danish Pastry",
    "category": "Bakery",
    "price": 2.49,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Glazed_apple_Danish.jpg/500px-Glazed_apple_Danish.jpg",
    "description": "Flaky cream cheese Danish."
  },
  {
    "name": "Turmeric Powder",
    "category": "Pantry",
    "price": 2.99,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Turmeric_inflorescence.jpg/500px-Turmeric_inflorescence.jpg",
    "description": "Ground turmeric spice, 100g."
  },
  {
    "name": "Ground Cumin",
    "category": "Pantry",
    "price": 2.49,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Cuminum_cyminum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-198.jpg",
    "description": "Aromatic ground cumin."
  },
  {
    "name": "Smoked Paprika",
    "category": "Pantry",
    "price": 2.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/81/Piment%C3%B3n_Tap_de_Cort%C3%AD_%28cropped%29.jpg",
    "description": "Rich smoked paprika spice."
  },
  {
    "name": "Ground Cinnamon",
    "category": "Pantry",
    "price": 2.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cinnamomum_verum_spices.jpg/500px-Cinnamomum_verum_spices.jpg",
    "description": "Sweet Ceylon cinnamon powder."
  },
  {
    "name": "Balsamic Vinegar",
    "category": "Pantry",
    "price": 4.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Balsamic_vinegar_%28drops%29.jpg/500px-Balsamic_vinegar_%28drops%29.jpg",
    "description": "Aged Italian balsamic vinegar."
  },
  {
    "name": "Tahini",
    "category": "Pantry",
    "price": 3.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tahina.JPG/500px-Tahina.JPG",
    "description": "Smooth sesame seed paste."
  },
  {
    "name": "Fish Sauce",
    "category": "Pantry",
    "price": 2.49,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sauce_de_poisson.jpg/500px-Sauce_de_poisson.jpg",
    "description": "Authentic Thai fish sauce."
  },
  {
    "name": "Sriracha Sauce",
    "category": "Pantry",
    "price": 3.49,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Siracha_sauce.jpg/500px-Siracha_sauce.jpg",
    "description": "Hot chilli sriracha sauce."
  },
  {
    "name": "Brown Rice",
    "category": "Pantry",
    "price": 3.99,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Reis_-_Sorte_C_voll.jpg/500px-Reis_-_Sorte_C_voll.jpg",
    "description": "Wholegrain brown rice, 1kg."
  },
  {
    "name": "Arborio Rice",
    "category": "Pantry",
    "price": 3.99,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/79/Reis_Arborio.JPG",
    "description": "Creamy risotto arborio rice."
  },
  {
    "name": "Baking Powder",
    "category": "Pantry",
    "price": 1.49,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BakingPowder.jpg/500px-BakingPowder.jpg",
    "description": "Raising agent baking powder."
  },
  {
    "name": "Cornstarch",
    "category": "Pantry",
    "price": 1.29,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Cornstarch_mixed_with_water.jpg/500px-Cornstarch_mixed_with_water.jpg",
    "description": "Fine cornstarch thickener."
  },
  {
    "name": "Worcestershire Sauce",
    "category": "Pantry",
    "price": 2.49,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Worcester_Sauce_001.jpg/500px-Worcester_Sauce_001.jpg",
    "description": "Classic Worcestershire sauce."
  },
  {
    "name": "Oat Milk",
    "category": "Beverages",
    "price": 2.49,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oat_milk_glass_and_bottles.jpg/500px-Oat_milk_glass_and_bottles.jpg",
    "description": "Barista oat milk, 1L."
  },
  {
    "name": "Matcha Powder",
    "category": "Beverages",
    "price": 9.99,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Matcha_Scoop.jpg/500px-Matcha_Scoop.jpg",
    "description": "Ceremonial grade matcha, 50g."
  },
  {
    "name": "Apple Juice",
    "category": "Beverages",
    "price": 2.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Apfelsaft_im_Glas.jpg/500px-Apfelsaft_im_Glas.jpg",
    "description": "Pressed apple juice, 1L."
  },
  {
    "name": "Peppermint Tea",
    "category": "Beverages",
    "price": 3.49,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/500px-Pfefferminze_natur_peppermint.jpg",
    "description": "Refreshing peppermint herbal tea."
  },
  {
    "name": "Hot Chocolate",
    "category": "Beverages",
    "price": 4.99,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/After_The_St._Patrick%27s_Parade_Late_Lunch_%40_Lemon%2C_Dawson_Street%2C_Dublin%2C_Rep._Of_Ireland_A_Fine_Tradition%21_%286992614913%29.jpg/500px-After_The_St._Patrick%27s_Parade_Late_Lunch_%40_Lemon%2C_Dawson_Street%2C_Dublin%2C_Rep._Of_Ireland_A_Fine_Tradition%21_%286992614913%29.jpg",
    "description": "Rich premium hot chocolate powder."
  },
  {
    "name": "Lemonade",
    "category": "Beverages",
    "price": 1.99,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lemonade_-_27682817724.jpg/500px-Lemonade_-_27682817724.jpg",
    "description": "Sparkling cloudy lemonade, 1L."
  },
  {
    "name": "Cashews",
    "category": "Snacks",
    "price": 4.99,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/500px-Cashew_apples.jpg",
    "description": "Roasted salted cashew nuts, 200g."
  },
  {
    "name": "Almonds",
    "category": "Snacks",
    "price": 4.49,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg/500px-Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg",
    "description": "Raw whole almonds, 200g."
  },
  {
    "name": "Walnuts",
    "category": "Snacks",
    "price": 5.49,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/500px-Walnuts_-_whole_and_open_with_halved_kernel.jpg",
    "description": "Shelled walnut halves, 200g."
  },
  {
    "name": "Sunflower Seeds",
    "category": "Snacks",
    "price": 2.49,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sunflower_Seeds_Kaldari.jpg/500px-Sunflower_Seeds_Kaldari.jpg",
    "description": "Roasted sunflower seeds, 150g."
  },
  {
    "name": "Beef Jerky",
    "category": "Snacks",
    "price": 5.99,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Jerky_%281%29.jpg/500px-Jerky_%281%29.jpg",
    "description": "Smoky beef jerky strips, 100g."
  },
  {
    "name": "Dried Mango",
    "category": "Snacks",
    "price": 3.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/DriedfruitS.jpg/500px-DriedfruitS.jpg",
    "description": "Sweet dried mango slices, 150g."
  },
  {
    "name": "Peanuts",
    "category": "Snacks",
    "price": 2.49,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg/500px-Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg",
    "description": "Dry roasted peanuts, 200g."
  },
  {
    "name": "Frozen Waffles",
    "category": "Frozen",
    "price": 3.49,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/500px-Waffles_with_Strawberries.jpg",
    "description": "Belgian-style frozen waffles, 6 pack."
  },
  {
    "name": "Frozen Mixed Berries",
    "category": "Frozen",
    "price": 3.99,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Berberis_thunbergii_berries.jpg/500px-Berberis_thunbergii_berries.jpg",
    "description": "Frozen mixed berry blend, 500g."
  },
  {
    "name": "Frozen French Fries",
    "category": "Frozen",
    "price": 2.49,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/500px-French_Fries.JPG",
    "description": "Crispy frozen French fries, 1kg."
  },
  {
    "name": "Frozen Spinach",
    "category": "Frozen",
    "price": 1.99,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "Chopped frozen spinach, 450g."
  },
  {
    "name": "Frozen Shrimp",
    "category": "Frozen",
    "price": 7.99,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "Peeled frozen shrimp, 400g."
  }
];

module.exports = products;
