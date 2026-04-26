const products = [
  {
    "name": "Organic Apple",
    "category": "Fruits",
    "price": 2.28,
    "stock": 153,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality organic apple for your everyday needs."
  },
  {
    "name": "Fresh Apple",
    "category": "Fruits",
    "price": 3.87,
    "stock": 102,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality fresh apple for your everyday needs."
  },
  {
    "name": "Premium Apple",
    "category": "Fruits",
    "price": 6.18,
    "stock": 187,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality premium apple for your everyday needs."
  },
  {
    "name": "Value Apple",
    "category": "Fruits",
    "price": 2.9,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality value apple for your everyday needs."
  },
  {
    "name": "Local Apple",
    "category": "Fruits",
    "price": 8.19,
    "stock": 97,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality local apple for your everyday needs."
  },
  {
    "name": "Imported Apple",
    "category": "Fruits",
    "price": 2.01,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality imported apple for your everyday needs."
  },
  {
    "name": "Farm-style Apple",
    "category": "Fruits",
    "price": 9.55,
    "stock": 187,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality farm-style apple for your everyday needs."
  },
  {
    "name": "Classic Apple",
    "category": "Fruits",
    "price": 7.6,
    "stock": 132,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality classic apple for your everyday needs."
  },
  {
    "name": "Deluxe Apple",
    "category": "Fruits",
    "price": 3.92,
    "stock": 23,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality deluxe apple for your everyday needs."
  },
  {
    "name": "Signature Apple",
    "category": "Fruits",
    "price": 3.27,
    "stock": 13,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg",
    "description": "High quality signature apple for your everyday needs."
  },
  {
    "name": "Organic Banana",
    "category": "Fruits",
    "price": 9.32,
    "stock": 52,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality organic banana for your everyday needs."
  },
  {
    "name": "Fresh Banana",
    "category": "Fruits",
    "price": 10.32,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality fresh banana for your everyday needs."
  },
  {
    "name": "Premium Banana",
    "category": "Fruits",
    "price": 7.81,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality premium banana for your everyday needs."
  },
  {
    "name": "Value Banana",
    "category": "Fruits",
    "price": 9.28,
    "stock": 176,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality value banana for your everyday needs."
  },
  {
    "name": "Local Banana",
    "category": "Fruits",
    "price": 10.34,
    "stock": 73,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality local banana for your everyday needs."
  },
  {
    "name": "Imported Banana",
    "category": "Fruits",
    "price": 10.99,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality imported banana for your everyday needs."
  },
  {
    "name": "Farm-style Banana",
    "category": "Fruits",
    "price": 10.55,
    "stock": 195,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality farm-style banana for your everyday needs."
  },
  {
    "name": "Classic Banana",
    "category": "Fruits",
    "price": 6.27,
    "stock": 145,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality classic banana for your everyday needs."
  },
  {
    "name": "Deluxe Banana",
    "category": "Fruits",
    "price": 9.44,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality deluxe banana for your everyday needs."
  },
  {
    "name": "Signature Banana",
    "category": "Fruits",
    "price": 3.65,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    "description": "High quality signature banana for your everyday needs."
  },
  {
    "name": "Organic Orange",
    "category": "Fruits",
    "price": 4.74,
    "stock": 182,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality organic orange for your everyday needs."
  },
  {
    "name": "Fresh Orange",
    "category": "Fruits",
    "price": 7.06,
    "stock": 91,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality fresh orange for your everyday needs."
  },
  {
    "name": "Premium Orange",
    "category": "Fruits",
    "price": 5.57,
    "stock": 156,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality premium orange for your everyday needs."
  },
  {
    "name": "Value Orange",
    "category": "Fruits",
    "price": 6.71,
    "stock": 111,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality value orange for your everyday needs."
  },
  {
    "name": "Local Orange",
    "category": "Fruits",
    "price": 7.84,
    "stock": 60,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality local orange for your everyday needs."
  },
  {
    "name": "Imported Orange",
    "category": "Fruits",
    "price": 4.52,
    "stock": 179,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality imported orange for your everyday needs."
  },
  {
    "name": "Farm-style Orange",
    "category": "Fruits",
    "price": 5.04,
    "stock": 121,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality farm-style orange for your everyday needs."
  },
  {
    "name": "Classic Orange",
    "category": "Fruits",
    "price": 10.72,
    "stock": 43,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality classic orange for your everyday needs."
  },
  {
    "name": "Deluxe Orange",
    "category": "Fruits",
    "price": 2.27,
    "stock": 136,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality deluxe orange for your everyday needs."
  },
  {
    "name": "Signature Orange",
    "category": "Fruits",
    "price": 7.07,
    "stock": 165,
    "image": "https://via.placeholder.com/500?text=Orange",
    "description": "High quality signature orange for your everyday needs."
  },
  {
    "name": "Organic Strawberry",
    "category": "Fruits",
    "price": 2.74,
    "stock": 193,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality organic strawberry for your everyday needs."
  },
  {
    "name": "Fresh Strawberry",
    "category": "Fruits",
    "price": 7.28,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality fresh strawberry for your everyday needs."
  },
  {
    "name": "Premium Strawberry",
    "category": "Fruits",
    "price": 9.11,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality premium strawberry for your everyday needs."
  },
  {
    "name": "Value Strawberry",
    "category": "Fruits",
    "price": 4.63,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality value strawberry for your everyday needs."
  },
  {
    "name": "Local Strawberry",
    "category": "Fruits",
    "price": 1.77,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality local strawberry for your everyday needs."
  },
  {
    "name": "Imported Strawberry",
    "category": "Fruits",
    "price": 9.81,
    "stock": 57,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality imported strawberry for your everyday needs."
  },
  {
    "name": "Farm-style Strawberry",
    "category": "Fruits",
    "price": 9.13,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality farm-style strawberry for your everyday needs."
  },
  {
    "name": "Classic Strawberry",
    "category": "Fruits",
    "price": 8.59,
    "stock": 117,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality classic strawberry for your everyday needs."
  },
  {
    "name": "Deluxe Strawberry",
    "category": "Fruits",
    "price": 10.35,
    "stock": 123,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality deluxe strawberry for your everyday needs."
  },
  {
    "name": "Signature Strawberry",
    "category": "Fruits",
    "price": 2.14,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/500px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    "description": "High quality signature strawberry for your everyday needs."
  },
  {
    "name": "Organic Blueberry",
    "category": "Fruits",
    "price": 1.28,
    "stock": 46,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality organic blueberry for your everyday needs."
  },
  {
    "name": "Fresh Blueberry",
    "category": "Fruits",
    "price": 9.43,
    "stock": 115,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality fresh blueberry for your everyday needs."
  },
  {
    "name": "Premium Blueberry",
    "category": "Fruits",
    "price": 7.34,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality premium blueberry for your everyday needs."
  },
  {
    "name": "Value Blueberry",
    "category": "Fruits",
    "price": 10.83,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality value blueberry for your everyday needs."
  },
  {
    "name": "Local Blueberry",
    "category": "Fruits",
    "price": 5.81,
    "stock": 102,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality local blueberry for your everyday needs."
  },
  {
    "name": "Imported Blueberry",
    "category": "Fruits",
    "price": 10.47,
    "stock": 190,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality imported blueberry for your everyday needs."
  },
  {
    "name": "Farm-style Blueberry",
    "category": "Fruits",
    "price": 5.79,
    "stock": 171,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality farm-style blueberry for your everyday needs."
  },
  {
    "name": "Classic Blueberry",
    "category": "Fruits",
    "price": 4.44,
    "stock": 142,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality classic blueberry for your everyday needs."
  },
  {
    "name": "Deluxe Blueberry",
    "category": "Fruits",
    "price": 9.08,
    "stock": 74,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality deluxe blueberry for your everyday needs."
  },
  {
    "name": "Signature Blueberry",
    "category": "Fruits",
    "price": 7.68,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Blueberries.jpg/500px-Blueberries.jpg",
    "description": "High quality signature blueberry for your everyday needs."
  },
  {
    "name": "Organic Raspberry",
    "category": "Fruits",
    "price": 1.72,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality organic raspberry for your everyday needs."
  },
  {
    "name": "Fresh Raspberry",
    "category": "Fruits",
    "price": 3.12,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality fresh raspberry for your everyday needs."
  },
  {
    "name": "Premium Raspberry",
    "category": "Fruits",
    "price": 1.34,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality premium raspberry for your everyday needs."
  },
  {
    "name": "Value Raspberry",
    "category": "Fruits",
    "price": 1.44,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality value raspberry for your everyday needs."
  },
  {
    "name": "Local Raspberry",
    "category": "Fruits",
    "price": 6.31,
    "stock": 51,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality local raspberry for your everyday needs."
  },
  {
    "name": "Imported Raspberry",
    "category": "Fruits",
    "price": 2,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality imported raspberry for your everyday needs."
  },
  {
    "name": "Farm-style Raspberry",
    "category": "Fruits",
    "price": 6.26,
    "stock": 122,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality farm-style raspberry for your everyday needs."
  },
  {
    "name": "Classic Raspberry",
    "category": "Fruits",
    "price": 1.53,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality classic raspberry for your everyday needs."
  },
  {
    "name": "Deluxe Raspberry",
    "category": "Fruits",
    "price": 3.48,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality deluxe raspberry for your everyday needs."
  },
  {
    "name": "Signature Raspberry",
    "category": "Fruits",
    "price": 2.81,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raspberry_-_halved_%28Rubus_idaeus%29.jpg/500px-Raspberry_-_halved_%28Rubus_idaeus%29.jpg",
    "description": "High quality signature raspberry for your everyday needs."
  },
  {
    "name": "Organic Grape",
    "category": "Fruits",
    "price": 1.94,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality organic grape for your everyday needs."
  },
  {
    "name": "Fresh Grape",
    "category": "Fruits",
    "price": 1.98,
    "stock": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality fresh grape for your everyday needs."
  },
  {
    "name": "Premium Grape",
    "category": "Fruits",
    "price": 3.03,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality premium grape for your everyday needs."
  },
  {
    "name": "Value Grape",
    "category": "Fruits",
    "price": 9.75,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality value grape for your everyday needs."
  },
  {
    "name": "Local Grape",
    "category": "Fruits",
    "price": 8.64,
    "stock": 33,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality local grape for your everyday needs."
  },
  {
    "name": "Imported Grape",
    "category": "Fruits",
    "price": 3.37,
    "stock": 108,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality imported grape for your everyday needs."
  },
  {
    "name": "Farm-style Grape",
    "category": "Fruits",
    "price": 5.25,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality farm-style grape for your everyday needs."
  },
  {
    "name": "Classic Grape",
    "category": "Fruits",
    "price": 1.96,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality classic grape for your everyday needs."
  },
  {
    "name": "Deluxe Grape",
    "category": "Fruits",
    "price": 1.59,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality deluxe grape for your everyday needs."
  },
  {
    "name": "Signature Grape",
    "category": "Fruits",
    "price": 10.55,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/500px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
    "description": "High quality signature grape for your everyday needs."
  },
  {
    "name": "Organic Watermelon",
    "category": "Fruits",
    "price": 1.23,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality organic watermelon for your everyday needs."
  },
  {
    "name": "Fresh Watermelon",
    "category": "Fruits",
    "price": 9.5,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality fresh watermelon for your everyday needs."
  },
  {
    "name": "Premium Watermelon",
    "category": "Fruits",
    "price": 2.13,
    "stock": 168,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality premium watermelon for your everyday needs."
  },
  {
    "name": "Value Watermelon",
    "category": "Fruits",
    "price": 7.97,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality value watermelon for your everyday needs."
  },
  {
    "name": "Local Watermelon",
    "category": "Fruits",
    "price": 9.54,
    "stock": 158,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality local watermelon for your everyday needs."
  },
  {
    "name": "Imported Watermelon",
    "category": "Fruits",
    "price": 7.52,
    "stock": 127,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality imported watermelon for your everyday needs."
  },
  {
    "name": "Farm-style Watermelon",
    "category": "Fruits",
    "price": 1.63,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality farm-style watermelon for your everyday needs."
  },
  {
    "name": "Classic Watermelon",
    "category": "Fruits",
    "price": 4.46,
    "stock": 72,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality classic watermelon for your everyday needs."
  },
  {
    "name": "Deluxe Watermelon",
    "category": "Fruits",
    "price": 7.48,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality deluxe watermelon for your everyday needs."
  },
  {
    "name": "Signature Watermelon",
    "category": "Fruits",
    "price": 7.42,
    "stock": 61,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/500px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
    "description": "High quality signature watermelon for your everyday needs."
  },
  {
    "name": "Organic Cantaloupe",
    "category": "Fruits",
    "price": 7.39,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality organic cantaloupe for your everyday needs."
  },
  {
    "name": "Fresh Cantaloupe",
    "category": "Fruits",
    "price": 4.19,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality fresh cantaloupe for your everyday needs."
  },
  {
    "name": "Premium Cantaloupe",
    "category": "Fruits",
    "price": 9.06,
    "stock": 176,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality premium cantaloupe for your everyday needs."
  },
  {
    "name": "Value Cantaloupe",
    "category": "Fruits",
    "price": 4.52,
    "stock": 174,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality value cantaloupe for your everyday needs."
  },
  {
    "name": "Local Cantaloupe",
    "category": "Fruits",
    "price": 10.52,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality local cantaloupe for your everyday needs."
  },
  {
    "name": "Imported Cantaloupe",
    "category": "Fruits",
    "price": 1.2,
    "stock": 142,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality imported cantaloupe for your everyday needs."
  },
  {
    "name": "Farm-style Cantaloupe",
    "category": "Fruits",
    "price": 9.13,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality farm-style cantaloupe for your everyday needs."
  },
  {
    "name": "Classic Cantaloupe",
    "category": "Fruits",
    "price": 3.42,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality classic cantaloupe for your everyday needs."
  },
  {
    "name": "Deluxe Cantaloupe",
    "category": "Fruits",
    "price": 1.12,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality deluxe cantaloupe for your everyday needs."
  },
  {
    "name": "Signature Cantaloupe",
    "category": "Fruits",
    "price": 7.96,
    "stock": 22,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meloen_vrucht_met_bloem.jpg/500px-Meloen_vrucht_met_bloem.jpg",
    "description": "High quality signature cantaloupe for your everyday needs."
  },
  {
    "name": "Organic Pineapple",
    "category": "Fruits",
    "price": 1.31,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality organic pineapple for your everyday needs."
  },
  {
    "name": "Fresh Pineapple",
    "category": "Fruits",
    "price": 10.23,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality fresh pineapple for your everyday needs."
  },
  {
    "name": "Premium Pineapple",
    "category": "Fruits",
    "price": 4.74,
    "stock": 174,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality premium pineapple for your everyday needs."
  },
  {
    "name": "Value Pineapple",
    "category": "Fruits",
    "price": 7.5,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality value pineapple for your everyday needs."
  },
  {
    "name": "Local Pineapple",
    "category": "Fruits",
    "price": 1.54,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality local pineapple for your everyday needs."
  },
  {
    "name": "Imported Pineapple",
    "category": "Fruits",
    "price": 7.79,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality imported pineapple for your everyday needs."
  },
  {
    "name": "Farm-style Pineapple",
    "category": "Fruits",
    "price": 3.04,
    "stock": 128,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality farm-style pineapple for your everyday needs."
  },
  {
    "name": "Classic Pineapple",
    "category": "Fruits",
    "price": 3.56,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality classic pineapple for your everyday needs."
  },
  {
    "name": "Deluxe Pineapple",
    "category": "Fruits",
    "price": 10.21,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality deluxe pineapple for your everyday needs."
  },
  {
    "name": "Signature Pineapple",
    "category": "Fruits",
    "price": 9.19,
    "stock": 105,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/500px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
    "description": "High quality signature pineapple for your everyday needs."
  },
  {
    "name": "Organic Mango",
    "category": "Fruits",
    "price": 7.2,
    "stock": 12,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality organic mango for your everyday needs."
  },
  {
    "name": "Fresh Mango",
    "category": "Fruits",
    "price": 9.85,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality fresh mango for your everyday needs."
  },
  {
    "name": "Premium Mango",
    "category": "Fruits",
    "price": 10.44,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality premium mango for your everyday needs."
  },
  {
    "name": "Value Mango",
    "category": "Fruits",
    "price": 9.21,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality value mango for your everyday needs."
  },
  {
    "name": "Local Mango",
    "category": "Fruits",
    "price": 6.7,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality local mango for your everyday needs."
  },
  {
    "name": "Imported Mango",
    "category": "Fruits",
    "price": 4.75,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality imported mango for your everyday needs."
  },
  {
    "name": "Farm-style Mango",
    "category": "Fruits",
    "price": 8.98,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality farm-style mango for your everyday needs."
  },
  {
    "name": "Classic Mango",
    "category": "Fruits",
    "price": 6.29,
    "stock": 176,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality classic mango for your everyday needs."
  },
  {
    "name": "Deluxe Mango",
    "category": "Fruits",
    "price": 7.51,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality deluxe mango for your everyday needs."
  },
  {
    "name": "Signature Mango",
    "category": "Fruits",
    "price": 9.81,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg",
    "description": "High quality signature mango for your everyday needs."
  },
  {
    "name": "Organic Peach",
    "category": "Fruits",
    "price": 9.49,
    "stock": 51,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality organic peach for your everyday needs."
  },
  {
    "name": "Fresh Peach",
    "category": "Fruits",
    "price": 4.96,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality fresh peach for your everyday needs."
  },
  {
    "name": "Premium Peach",
    "category": "Fruits",
    "price": 5.43,
    "stock": 42,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality premium peach for your everyday needs."
  },
  {
    "name": "Value Peach",
    "category": "Fruits",
    "price": 6.63,
    "stock": 145,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality value peach for your everyday needs."
  },
  {
    "name": "Local Peach",
    "category": "Fruits",
    "price": 6.66,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality local peach for your everyday needs."
  },
  {
    "name": "Imported Peach",
    "category": "Fruits",
    "price": 8.65,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality imported peach for your everyday needs."
  },
  {
    "name": "Farm-style Peach",
    "category": "Fruits",
    "price": 4.83,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality farm-style peach for your everyday needs."
  },
  {
    "name": "Classic Peach",
    "category": "Fruits",
    "price": 5.66,
    "stock": 114,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality classic peach for your everyday needs."
  },
  {
    "name": "Deluxe Peach",
    "category": "Fruits",
    "price": 4.79,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality deluxe peach for your everyday needs."
  },
  {
    "name": "Signature Peach",
    "category": "Fruits",
    "price": 6.81,
    "stock": 146,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Illustration_Prunus_persica_clean_no_descr.jpg/500px-Illustration_Prunus_persica_clean_no_descr.jpg",
    "description": "High quality signature peach for your everyday needs."
  },
  {
    "name": "Organic Pear",
    "category": "Fruits",
    "price": 7.52,
    "stock": 13,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality organic pear for your everyday needs."
  },
  {
    "name": "Fresh Pear",
    "category": "Fruits",
    "price": 2.7,
    "stock": 16,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality fresh pear for your everyday needs."
  },
  {
    "name": "Premium Pear",
    "category": "Fruits",
    "price": 4.86,
    "stock": 76,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality premium pear for your everyday needs."
  },
  {
    "name": "Value Pear",
    "category": "Fruits",
    "price": 1.21,
    "stock": 72,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality value pear for your everyday needs."
  },
  {
    "name": "Local Pear",
    "category": "Fruits",
    "price": 10.53,
    "stock": 10,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality local pear for your everyday needs."
  },
  {
    "name": "Imported Pear",
    "category": "Fruits",
    "price": 4.88,
    "stock": 194,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality imported pear for your everyday needs."
  },
  {
    "name": "Farm-style Pear",
    "category": "Fruits",
    "price": 5.51,
    "stock": 28,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality farm-style pear for your everyday needs."
  },
  {
    "name": "Classic Pear",
    "category": "Fruits",
    "price": 8.82,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality classic pear for your everyday needs."
  },
  {
    "name": "Deluxe Pear",
    "category": "Fruits",
    "price": 4.24,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality deluxe pear for your everyday needs."
  },
  {
    "name": "Signature Pear",
    "category": "Fruits",
    "price": 10.01,
    "stock": 154,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/500px-Pears.jpg",
    "description": "High quality signature pear for your everyday needs."
  },
  {
    "name": "Organic Plum",
    "category": "Fruits",
    "price": 7.64,
    "stock": 74,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality organic plum for your everyday needs."
  },
  {
    "name": "Fresh Plum",
    "category": "Fruits",
    "price": 1.46,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality fresh plum for your everyday needs."
  },
  {
    "name": "Premium Plum",
    "category": "Fruits",
    "price": 2.43,
    "stock": 89,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality premium plum for your everyday needs."
  },
  {
    "name": "Value Plum",
    "category": "Fruits",
    "price": 10.19,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality value plum for your everyday needs."
  },
  {
    "name": "Local Plum",
    "category": "Fruits",
    "price": 1.75,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality local plum for your everyday needs."
  },
  {
    "name": "Imported Plum",
    "category": "Fruits",
    "price": 3.05,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality imported plum for your everyday needs."
  },
  {
    "name": "Farm-style Plum",
    "category": "Fruits",
    "price": 4.59,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality farm-style plum for your everyday needs."
  },
  {
    "name": "Classic Plum",
    "category": "Fruits",
    "price": 1.22,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality classic plum for your everyday needs."
  },
  {
    "name": "Deluxe Plum",
    "category": "Fruits",
    "price": 8.41,
    "stock": 102,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality deluxe plum for your everyday needs."
  },
  {
    "name": "Signature Plum",
    "category": "Fruits",
    "price": 4.75,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/500px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "description": "High quality signature plum for your everyday needs."
  },
  {
    "name": "Organic Kiwifruit",
    "category": "Fruits",
    "price": 2.66,
    "stock": 153,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality organic kiwifruit for your everyday needs."
  },
  {
    "name": "Fresh Kiwifruit",
    "category": "Fruits",
    "price": 3.5,
    "stock": 151,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality fresh kiwifruit for your everyday needs."
  },
  {
    "name": "Premium Kiwifruit",
    "category": "Fruits",
    "price": 6.97,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality premium kiwifruit for your everyday needs."
  },
  {
    "name": "Value Kiwifruit",
    "category": "Fruits",
    "price": 10.43,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality value kiwifruit for your everyday needs."
  },
  {
    "name": "Local Kiwifruit",
    "category": "Fruits",
    "price": 6.6,
    "stock": 10,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality local kiwifruit for your everyday needs."
  },
  {
    "name": "Imported Kiwifruit",
    "category": "Fruits",
    "price": 6.74,
    "stock": 42,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality imported kiwifruit for your everyday needs."
  },
  {
    "name": "Farm-style Kiwifruit",
    "category": "Fruits",
    "price": 3.27,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality farm-style kiwifruit for your everyday needs."
  },
  {
    "name": "Classic Kiwifruit",
    "category": "Fruits",
    "price": 9.51,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality classic kiwifruit for your everyday needs."
  },
  {
    "name": "Deluxe Kiwifruit",
    "category": "Fruits",
    "price": 5.94,
    "stock": 153,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality deluxe kiwifruit for your everyday needs."
  },
  {
    "name": "Signature Kiwifruit",
    "category": "Fruits",
    "price": 9,
    "stock": 22,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Actinidia_fruits.jpg/500px-Actinidia_fruits.jpg",
    "description": "High quality signature kiwifruit for your everyday needs."
  },
  {
    "name": "Organic Lemon",
    "category": "Fruits",
    "price": 7.99,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality organic lemon for your everyday needs."
  },
  {
    "name": "Fresh Lemon",
    "category": "Fruits",
    "price": 7.28,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality fresh lemon for your everyday needs."
  },
  {
    "name": "Premium Lemon",
    "category": "Fruits",
    "price": 4.05,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality premium lemon for your everyday needs."
  },
  {
    "name": "Value Lemon",
    "category": "Fruits",
    "price": 9.71,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality value lemon for your everyday needs."
  },
  {
    "name": "Local Lemon",
    "category": "Fruits",
    "price": 1.47,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality local lemon for your everyday needs."
  },
  {
    "name": "Imported Lemon",
    "category": "Fruits",
    "price": 5.93,
    "stock": 109,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality imported lemon for your everyday needs."
  },
  {
    "name": "Farm-style Lemon",
    "category": "Fruits",
    "price": 2.17,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality farm-style lemon for your everyday needs."
  },
  {
    "name": "Classic Lemon",
    "category": "Fruits",
    "price": 4.84,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality classic lemon for your everyday needs."
  },
  {
    "name": "Deluxe Lemon",
    "category": "Fruits",
    "price": 6.86,
    "stock": 172,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality deluxe lemon for your everyday needs."
  },
  {
    "name": "Signature Lemon",
    "category": "Fruits",
    "price": 10.23,
    "stock": 187,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/500px-P1030323.JPG",
    "description": "High quality signature lemon for your everyday needs."
  },
  {
    "name": "Organic Lime",
    "category": "Fruits",
    "price": 3.2,
    "stock": 92,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality organic lime for your everyday needs."
  },
  {
    "name": "Fresh Lime",
    "category": "Fruits",
    "price": 5.71,
    "stock": 104,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality fresh lime for your everyday needs."
  },
  {
    "name": "Premium Lime",
    "category": "Fruits",
    "price": 8.44,
    "stock": 200,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality premium lime for your everyday needs."
  },
  {
    "name": "Value Lime",
    "category": "Fruits",
    "price": 7.69,
    "stock": 39,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality value lime for your everyday needs."
  },
  {
    "name": "Local Lime",
    "category": "Fruits",
    "price": 7.59,
    "stock": 177,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality local lime for your everyday needs."
  },
  {
    "name": "Imported Lime",
    "category": "Fruits",
    "price": 3.95,
    "stock": 63,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality imported lime for your everyday needs."
  },
  {
    "name": "Farm-style Lime",
    "category": "Fruits",
    "price": 4.96,
    "stock": 23,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality farm-style lime for your everyday needs."
  },
  {
    "name": "Classic Lime",
    "category": "Fruits",
    "price": 4.01,
    "stock": 118,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality classic lime for your everyday needs."
  },
  {
    "name": "Deluxe Lime",
    "category": "Fruits",
    "price": 9.84,
    "stock": 56,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality deluxe lime for your everyday needs."
  },
  {
    "name": "Signature Lime",
    "category": "Fruits",
    "price": 4.97,
    "stock": 162,
    "image": "https://via.placeholder.com/500?text=Lime",
    "description": "High quality signature lime for your everyday needs."
  },
  {
    "name": "Organic Cherry",
    "category": "Fruits",
    "price": 9.94,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality organic cherry for your everyday needs."
  },
  {
    "name": "Fresh Cherry",
    "category": "Fruits",
    "price": 10.54,
    "stock": 148,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality fresh cherry for your everyday needs."
  },
  {
    "name": "Premium Cherry",
    "category": "Fruits",
    "price": 6.18,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality premium cherry for your everyday needs."
  },
  {
    "name": "Value Cherry",
    "category": "Fruits",
    "price": 3.6,
    "stock": 15,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality value cherry for your everyday needs."
  },
  {
    "name": "Local Cherry",
    "category": "Fruits",
    "price": 9.6,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality local cherry for your everyday needs."
  },
  {
    "name": "Imported Cherry",
    "category": "Fruits",
    "price": 9.65,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality imported cherry for your everyday needs."
  },
  {
    "name": "Farm-style Cherry",
    "category": "Fruits",
    "price": 3.49,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality farm-style cherry for your everyday needs."
  },
  {
    "name": "Classic Cherry",
    "category": "Fruits",
    "price": 7.75,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality classic cherry for your everyday needs."
  },
  {
    "name": "Deluxe Cherry",
    "category": "Fruits",
    "price": 7.5,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality deluxe cherry for your everyday needs."
  },
  {
    "name": "Signature Cherry",
    "category": "Fruits",
    "price": 9.77,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/500px-Cherry_season_%2848216568227%29.jpg",
    "description": "High quality signature cherry for your everyday needs."
  },
  {
    "name": "Organic Tomato",
    "category": "Vegetables",
    "price": 10.36,
    "stock": 44,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality organic tomato for your everyday needs."
  },
  {
    "name": "Fresh Tomato",
    "category": "Vegetables",
    "price": 10.61,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality fresh tomato for your everyday needs."
  },
  {
    "name": "Premium Tomato",
    "category": "Vegetables",
    "price": 10.65,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality premium tomato for your everyday needs."
  },
  {
    "name": "Value Tomato",
    "category": "Vegetables",
    "price": 1.52,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality value tomato for your everyday needs."
  },
  {
    "name": "Local Tomato",
    "category": "Vegetables",
    "price": 5.49,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality local tomato for your everyday needs."
  },
  {
    "name": "Imported Tomato",
    "category": "Vegetables",
    "price": 10.33,
    "stock": 153,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality imported tomato for your everyday needs."
  },
  {
    "name": "Farm-style Tomato",
    "category": "Vegetables",
    "price": 9.68,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality farm-style tomato for your everyday needs."
  },
  {
    "name": "Classic Tomato",
    "category": "Vegetables",
    "price": 4.96,
    "stock": 88,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality classic tomato for your everyday needs."
  },
  {
    "name": "Deluxe Tomato",
    "category": "Vegetables",
    "price": 10.1,
    "stock": 126,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality deluxe tomato for your everyday needs."
  },
  {
    "name": "Signature Tomato",
    "category": "Vegetables",
    "price": 10.51,
    "stock": 86,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/500px-Tomato_je.jpg",
    "description": "High quality signature tomato for your everyday needs."
  },
  {
    "name": "Organic Potato",
    "category": "Vegetables",
    "price": 8.67,
    "stock": 145,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality organic potato for your everyday needs."
  },
  {
    "name": "Fresh Potato",
    "category": "Vegetables",
    "price": 5.47,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality fresh potato for your everyday needs."
  },
  {
    "name": "Premium Potato",
    "category": "Vegetables",
    "price": 10.59,
    "stock": 44,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality premium potato for your everyday needs."
  },
  {
    "name": "Value Potato",
    "category": "Vegetables",
    "price": 6.76,
    "stock": 112,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality value potato for your everyday needs."
  },
  {
    "name": "Local Potato",
    "category": "Vegetables",
    "price": 1.8,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality local potato for your everyday needs."
  },
  {
    "name": "Imported Potato",
    "category": "Vegetables",
    "price": 1.82,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality imported potato for your everyday needs."
  },
  {
    "name": "Farm-style Potato",
    "category": "Vegetables",
    "price": 8.03,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality farm-style potato for your everyday needs."
  },
  {
    "name": "Classic Potato",
    "category": "Vegetables",
    "price": 10.95,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality classic potato for your everyday needs."
  },
  {
    "name": "Deluxe Potato",
    "category": "Vegetables",
    "price": 6.47,
    "stock": 134,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality deluxe potato for your everyday needs."
  },
  {
    "name": "Signature Potato",
    "category": "Vegetables",
    "price": 7.88,
    "stock": 154,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/500px-Patates.jpg",
    "description": "High quality signature potato for your everyday needs."
  },
  {
    "name": "Organic Onion",
    "category": "Vegetables",
    "price": 8.06,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality organic onion for your everyday needs."
  },
  {
    "name": "Fresh Onion",
    "category": "Vegetables",
    "price": 5.67,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality fresh onion for your everyday needs."
  },
  {
    "name": "Premium Onion",
    "category": "Vegetables",
    "price": 2.85,
    "stock": 16,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality premium onion for your everyday needs."
  },
  {
    "name": "Value Onion",
    "category": "Vegetables",
    "price": 9.92,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality value onion for your everyday needs."
  },
  {
    "name": "Local Onion",
    "category": "Vegetables",
    "price": 10.09,
    "stock": 49,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality local onion for your everyday needs."
  },
  {
    "name": "Imported Onion",
    "category": "Vegetables",
    "price": 10.75,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality imported onion for your everyday needs."
  },
  {
    "name": "Farm-style Onion",
    "category": "Vegetables",
    "price": 1.8,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality farm-style onion for your everyday needs."
  },
  {
    "name": "Classic Onion",
    "category": "Vegetables",
    "price": 3.21,
    "stock": 208,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality classic onion for your everyday needs."
  },
  {
    "name": "Deluxe Onion",
    "category": "Vegetables",
    "price": 8.19,
    "stock": 36,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality deluxe onion for your everyday needs."
  },
  {
    "name": "Signature Onion",
    "category": "Vegetables",
    "price": 6.96,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/500px-Mixed_onions.jpg",
    "description": "High quality signature onion for your everyday needs."
  },
  {
    "name": "Organic Garlic",
    "category": "Vegetables",
    "price": 2.46,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality organic garlic for your everyday needs."
  },
  {
    "name": "Fresh Garlic",
    "category": "Vegetables",
    "price": 3.54,
    "stock": 121,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality fresh garlic for your everyday needs."
  },
  {
    "name": "Premium Garlic",
    "category": "Vegetables",
    "price": 9.7,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality premium garlic for your everyday needs."
  },
  {
    "name": "Value Garlic",
    "category": "Vegetables",
    "price": 1.55,
    "stock": 67,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality value garlic for your everyday needs."
  },
  {
    "name": "Local Garlic",
    "category": "Vegetables",
    "price": 4.09,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality local garlic for your everyday needs."
  },
  {
    "name": "Imported Garlic",
    "category": "Vegetables",
    "price": 9.4,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality imported garlic for your everyday needs."
  },
  {
    "name": "Farm-style Garlic",
    "category": "Vegetables",
    "price": 8.79,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality farm-style garlic for your everyday needs."
  },
  {
    "name": "Classic Garlic",
    "category": "Vegetables",
    "price": 5.29,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality classic garlic for your everyday needs."
  },
  {
    "name": "Deluxe Garlic",
    "category": "Vegetables",
    "price": 8.18,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality deluxe garlic for your everyday needs."
  },
  {
    "name": "Signature Garlic",
    "category": "Vegetables",
    "price": 5.56,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
    "description": "High quality signature garlic for your everyday needs."
  },
  {
    "name": "Organic Carrot",
    "category": "Vegetables",
    "price": 5.56,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality organic carrot for your everyday needs."
  },
  {
    "name": "Fresh Carrot",
    "category": "Vegetables",
    "price": 10.48,
    "stock": 191,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality fresh carrot for your everyday needs."
  },
  {
    "name": "Premium Carrot",
    "category": "Vegetables",
    "price": 7.18,
    "stock": 84,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality premium carrot for your everyday needs."
  },
  {
    "name": "Value Carrot",
    "category": "Vegetables",
    "price": 8.71,
    "stock": 38,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality value carrot for your everyday needs."
  },
  {
    "name": "Local Carrot",
    "category": "Vegetables",
    "price": 4.78,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality local carrot for your everyday needs."
  },
  {
    "name": "Imported Carrot",
    "category": "Vegetables",
    "price": 9.65,
    "stock": 148,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality imported carrot for your everyday needs."
  },
  {
    "name": "Farm-style Carrot",
    "category": "Vegetables",
    "price": 9.81,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality farm-style carrot for your everyday needs."
  },
  {
    "name": "Classic Carrot",
    "category": "Vegetables",
    "price": 10.72,
    "stock": 165,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality classic carrot for your everyday needs."
  },
  {
    "name": "Deluxe Carrot",
    "category": "Vegetables",
    "price": 1.78,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality deluxe carrot for your everyday needs."
  },
  {
    "name": "Signature Carrot",
    "category": "Vegetables",
    "price": 8.71,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/500px-Vegetable-Carrot-Bundle-wStalks.jpg",
    "description": "High quality signature carrot for your everyday needs."
  },
  {
    "name": "Organic Broccoli",
    "category": "Vegetables",
    "price": 1.64,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality organic broccoli for your everyday needs."
  },
  {
    "name": "Fresh Broccoli",
    "category": "Vegetables",
    "price": 1.84,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality fresh broccoli for your everyday needs."
  },
  {
    "name": "Premium Broccoli",
    "category": "Vegetables",
    "price": 1.62,
    "stock": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality premium broccoli for your everyday needs."
  },
  {
    "name": "Value Broccoli",
    "category": "Vegetables",
    "price": 1.43,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality value broccoli for your everyday needs."
  },
  {
    "name": "Local Broccoli",
    "category": "Vegetables",
    "price": 7.79,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality local broccoli for your everyday needs."
  },
  {
    "name": "Imported Broccoli",
    "category": "Vegetables",
    "price": 2.26,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality imported broccoli for your everyday needs."
  },
  {
    "name": "Farm-style Broccoli",
    "category": "Vegetables",
    "price": 8.2,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality farm-style broccoli for your everyday needs."
  },
  {
    "name": "Classic Broccoli",
    "category": "Vegetables",
    "price": 2.08,
    "stock": 49,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality classic broccoli for your everyday needs."
  },
  {
    "name": "Deluxe Broccoli",
    "category": "Vegetables",
    "price": 3.8,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality deluxe broccoli for your everyday needs."
  },
  {
    "name": "Signature Broccoli",
    "category": "Vegetables",
    "price": 5.48,
    "stock": 195,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/500px-Broccoli_and_cross_section_edit.jpg",
    "description": "High quality signature broccoli for your everyday needs."
  },
  {
    "name": "Organic Cauliflower",
    "category": "Vegetables",
    "price": 10.52,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality organic cauliflower for your everyday needs."
  },
  {
    "name": "Fresh Cauliflower",
    "category": "Vegetables",
    "price": 9.33,
    "stock": 97,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality fresh cauliflower for your everyday needs."
  },
  {
    "name": "Premium Cauliflower",
    "category": "Vegetables",
    "price": 3.33,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality premium cauliflower for your everyday needs."
  },
  {
    "name": "Value Cauliflower",
    "category": "Vegetables",
    "price": 5.69,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality value cauliflower for your everyday needs."
  },
  {
    "name": "Local Cauliflower",
    "category": "Vegetables",
    "price": 2.86,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality local cauliflower for your everyday needs."
  },
  {
    "name": "Imported Cauliflower",
    "category": "Vegetables",
    "price": 4.84,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality imported cauliflower for your everyday needs."
  },
  {
    "name": "Farm-style Cauliflower",
    "category": "Vegetables",
    "price": 9.15,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality farm-style cauliflower for your everyday needs."
  },
  {
    "name": "Classic Cauliflower",
    "category": "Vegetables",
    "price": 1.21,
    "stock": 174,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality classic cauliflower for your everyday needs."
  },
  {
    "name": "Deluxe Cauliflower",
    "category": "Vegetables",
    "price": 2.82,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality deluxe cauliflower for your everyday needs."
  },
  {
    "name": "Signature Cauliflower",
    "category": "Vegetables",
    "price": 4.09,
    "stock": 24,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/500px-Chou-fleur_02.jpg",
    "description": "High quality signature cauliflower for your everyday needs."
  },
  {
    "name": "Organic Spinach",
    "category": "Vegetables",
    "price": 9.32,
    "stock": 116,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality organic spinach for your everyday needs."
  },
  {
    "name": "Fresh Spinach",
    "category": "Vegetables",
    "price": 2.03,
    "stock": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality fresh spinach for your everyday needs."
  },
  {
    "name": "Premium Spinach",
    "category": "Vegetables",
    "price": 8.48,
    "stock": 140,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality premium spinach for your everyday needs."
  },
  {
    "name": "Value Spinach",
    "category": "Vegetables",
    "price": 7.84,
    "stock": 76,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality value spinach for your everyday needs."
  },
  {
    "name": "Local Spinach",
    "category": "Vegetables",
    "price": 4.77,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality local spinach for your everyday needs."
  },
  {
    "name": "Imported Spinach",
    "category": "Vegetables",
    "price": 1.41,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality imported spinach for your everyday needs."
  },
  {
    "name": "Farm-style Spinach",
    "category": "Vegetables",
    "price": 5.43,
    "stock": 190,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality farm-style spinach for your everyday needs."
  },
  {
    "name": "Classic Spinach",
    "category": "Vegetables",
    "price": 10.45,
    "stock": 88,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality classic spinach for your everyday needs."
  },
  {
    "name": "Deluxe Spinach",
    "category": "Vegetables",
    "price": 2.99,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality deluxe spinach for your everyday needs."
  },
  {
    "name": "Signature Spinach",
    "category": "Vegetables",
    "price": 7.99,
    "stock": 54,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg/500px-Spinacia_oleracea_Spinazie_bloeiend.jpg",
    "description": "High quality signature spinach for your everyday needs."
  },
  {
    "name": "Organic Lettuce",
    "category": "Vegetables",
    "price": 7.76,
    "stock": 123,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality organic lettuce for your everyday needs."
  },
  {
    "name": "Fresh Lettuce",
    "category": "Vegetables",
    "price": 1.97,
    "stock": 53,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality fresh lettuce for your everyday needs."
  },
  {
    "name": "Premium Lettuce",
    "category": "Vegetables",
    "price": 4.81,
    "stock": 134,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality premium lettuce for your everyday needs."
  },
  {
    "name": "Value Lettuce",
    "category": "Vegetables",
    "price": 6.48,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality value lettuce for your everyday needs."
  },
  {
    "name": "Local Lettuce",
    "category": "Vegetables",
    "price": 8.33,
    "stock": 26,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality local lettuce for your everyday needs."
  },
  {
    "name": "Imported Lettuce",
    "category": "Vegetables",
    "price": 4.94,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality imported lettuce for your everyday needs."
  },
  {
    "name": "Farm-style Lettuce",
    "category": "Vegetables",
    "price": 10.33,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality farm-style lettuce for your everyday needs."
  },
  {
    "name": "Classic Lettuce",
    "category": "Vegetables",
    "price": 6.33,
    "stock": 117,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality classic lettuce for your everyday needs."
  },
  {
    "name": "Deluxe Lettuce",
    "category": "Vegetables",
    "price": 2.54,
    "stock": 118,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality deluxe lettuce for your everyday needs."
  },
  {
    "name": "Signature Lettuce",
    "category": "Vegetables",
    "price": 3.28,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/500px-Iceberg_lettuce_in_SB.jpg",
    "description": "High quality signature lettuce for your everyday needs."
  },
  {
    "name": "Organic Cabbage",
    "category": "Vegetables",
    "price": 9.37,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality organic cabbage for your everyday needs."
  },
  {
    "name": "Fresh Cabbage",
    "category": "Vegetables",
    "price": 4.48,
    "stock": 101,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality fresh cabbage for your everyday needs."
  },
  {
    "name": "Premium Cabbage",
    "category": "Vegetables",
    "price": 4.15,
    "stock": 171,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality premium cabbage for your everyday needs."
  },
  {
    "name": "Value Cabbage",
    "category": "Vegetables",
    "price": 2.99,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality value cabbage for your everyday needs."
  },
  {
    "name": "Local Cabbage",
    "category": "Vegetables",
    "price": 1.64,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality local cabbage for your everyday needs."
  },
  {
    "name": "Imported Cabbage",
    "category": "Vegetables",
    "price": 1.79,
    "stock": 186,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality imported cabbage for your everyday needs."
  },
  {
    "name": "Farm-style Cabbage",
    "category": "Vegetables",
    "price": 9.34,
    "stock": 32,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality farm-style cabbage for your everyday needs."
  },
  {
    "name": "Classic Cabbage",
    "category": "Vegetables",
    "price": 5.65,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality classic cabbage for your everyday needs."
  },
  {
    "name": "Deluxe Cabbage",
    "category": "Vegetables",
    "price": 9.89,
    "stock": 171,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality deluxe cabbage for your everyday needs."
  },
  {
    "name": "Signature Cabbage",
    "category": "Vegetables",
    "price": 7.8,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/500px-Cabbage_and_cross_section_on_white.jpg",
    "description": "High quality signature cabbage for your everyday needs."
  },
  {
    "name": "Organic Cucumber",
    "category": "Vegetables",
    "price": 8.4,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality organic cucumber for your everyday needs."
  },
  {
    "name": "Fresh Cucumber",
    "category": "Vegetables",
    "price": 3.65,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality fresh cucumber for your everyday needs."
  },
  {
    "name": "Premium Cucumber",
    "category": "Vegetables",
    "price": 7.37,
    "stock": 168,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality premium cucumber for your everyday needs."
  },
  {
    "name": "Value Cucumber",
    "category": "Vegetables",
    "price": 1.98,
    "stock": 67,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality value cucumber for your everyday needs."
  },
  {
    "name": "Local Cucumber",
    "category": "Vegetables",
    "price": 10.92,
    "stock": 190,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality local cucumber for your everyday needs."
  },
  {
    "name": "Imported Cucumber",
    "category": "Vegetables",
    "price": 2.78,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality imported cucumber for your everyday needs."
  },
  {
    "name": "Farm-style Cucumber",
    "category": "Vegetables",
    "price": 4.5,
    "stock": 84,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality farm-style cucumber for your everyday needs."
  },
  {
    "name": "Classic Cucumber",
    "category": "Vegetables",
    "price": 7.76,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality classic cucumber for your everyday needs."
  },
  {
    "name": "Deluxe Cucumber",
    "category": "Vegetables",
    "price": 6.19,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality deluxe cucumber for your everyday needs."
  },
  {
    "name": "Signature Cucumber",
    "category": "Vegetables",
    "price": 6.56,
    "stock": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/500px-ARS_cucumber.jpg",
    "description": "High quality signature cucumber for your everyday needs."
  },
  {
    "name": "Organic Zucchini",
    "category": "Vegetables",
    "price": 4.9,
    "stock": 102,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality organic zucchini for your everyday needs."
  },
  {
    "name": "Fresh Zucchini",
    "category": "Vegetables",
    "price": 1.34,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality fresh zucchini for your everyday needs."
  },
  {
    "name": "Premium Zucchini",
    "category": "Vegetables",
    "price": 1.68,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality premium zucchini for your everyday needs."
  },
  {
    "name": "Value Zucchini",
    "category": "Vegetables",
    "price": 5.15,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality value zucchini for your everyday needs."
  },
  {
    "name": "Local Zucchini",
    "category": "Vegetables",
    "price": 3.11,
    "stock": 37,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality local zucchini for your everyday needs."
  },
  {
    "name": "Imported Zucchini",
    "category": "Vegetables",
    "price": 2.29,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality imported zucchini for your everyday needs."
  },
  {
    "name": "Farm-style Zucchini",
    "category": "Vegetables",
    "price": 9.08,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality farm-style zucchini for your everyday needs."
  },
  {
    "name": "Classic Zucchini",
    "category": "Vegetables",
    "price": 7.53,
    "stock": 159,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality classic zucchini for your everyday needs."
  },
  {
    "name": "Deluxe Zucchini",
    "category": "Vegetables",
    "price": 1.41,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality deluxe zucchini for your everyday needs."
  },
  {
    "name": "Signature Zucchini",
    "category": "Vegetables",
    "price": 6.31,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/500px-CSA-Striped-Zucchini.jpg",
    "description": "High quality signature zucchini for your everyday needs."
  },
  {
    "name": "Organic Bell pepper",
    "category": "Vegetables",
    "price": 7.34,
    "stock": 165,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality organic bell pepper for your everyday needs."
  },
  {
    "name": "Fresh Bell pepper",
    "category": "Vegetables",
    "price": 5.37,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality fresh bell pepper for your everyday needs."
  },
  {
    "name": "Premium Bell pepper",
    "category": "Vegetables",
    "price": 8.57,
    "stock": 165,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality premium bell pepper for your everyday needs."
  },
  {
    "name": "Value Bell pepper",
    "category": "Vegetables",
    "price": 1.88,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality value bell pepper for your everyday needs."
  },
  {
    "name": "Local Bell pepper",
    "category": "Vegetables",
    "price": 4.49,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality local bell pepper for your everyday needs."
  },
  {
    "name": "Imported Bell pepper",
    "category": "Vegetables",
    "price": 5.78,
    "stock": 54,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality imported bell pepper for your everyday needs."
  },
  {
    "name": "Farm-style Bell pepper",
    "category": "Vegetables",
    "price": 5.06,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality farm-style bell pepper for your everyday needs."
  },
  {
    "name": "Classic Bell pepper",
    "category": "Vegetables",
    "price": 4.66,
    "stock": 22,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality classic bell pepper for your everyday needs."
  },
  {
    "name": "Deluxe Bell pepper",
    "category": "Vegetables",
    "price": 2.41,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality deluxe bell pepper for your everyday needs."
  },
  {
    "name": "Signature Bell pepper",
    "category": "Vegetables",
    "price": 9.58,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/500px-Green-Yellow-Red-Pepper-2009.jpg",
    "description": "High quality signature bell pepper for your everyday needs."
  },
  {
    "name": "Organic Jalapeño",
    "category": "Vegetables",
    "price": 3.28,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality organic jalapeño for your everyday needs."
  },
  {
    "name": "Fresh Jalapeño",
    "category": "Vegetables",
    "price": 9.87,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality fresh jalapeño for your everyday needs."
  },
  {
    "name": "Premium Jalapeño",
    "category": "Vegetables",
    "price": 2.58,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality premium jalapeño for your everyday needs."
  },
  {
    "name": "Value Jalapeño",
    "category": "Vegetables",
    "price": 8.54,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality value jalapeño for your everyday needs."
  },
  {
    "name": "Local Jalapeño",
    "category": "Vegetables",
    "price": 10.9,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality local jalapeño for your everyday needs."
  },
  {
    "name": "Imported Jalapeño",
    "category": "Vegetables",
    "price": 4.69,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality imported jalapeño for your everyday needs."
  },
  {
    "name": "Farm-style Jalapeño",
    "category": "Vegetables",
    "price": 6.58,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality farm-style jalapeño for your everyday needs."
  },
  {
    "name": "Classic Jalapeño",
    "category": "Vegetables",
    "price": 6.95,
    "stock": 151,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality classic jalapeño for your everyday needs."
  },
  {
    "name": "Deluxe Jalapeño",
    "category": "Vegetables",
    "price": 3.21,
    "stock": 138,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality deluxe jalapeño for your everyday needs."
  },
  {
    "name": "Signature Jalapeño",
    "category": "Vegetables",
    "price": 8.98,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg/500px-Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    "description": "High quality signature jalapeño for your everyday needs."
  },
  {
    "name": "Organic Mushroom",
    "category": "Vegetables",
    "price": 7.31,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality organic mushroom for your everyday needs."
  },
  {
    "name": "Fresh Mushroom",
    "category": "Vegetables",
    "price": 4.5,
    "stock": 38,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality fresh mushroom for your everyday needs."
  },
  {
    "name": "Premium Mushroom",
    "category": "Vegetables",
    "price": 8.04,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality premium mushroom for your everyday needs."
  },
  {
    "name": "Value Mushroom",
    "category": "Vegetables",
    "price": 5.53,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality value mushroom for your everyday needs."
  },
  {
    "name": "Local Mushroom",
    "category": "Vegetables",
    "price": 2.09,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality local mushroom for your everyday needs."
  },
  {
    "name": "Imported Mushroom",
    "category": "Vegetables",
    "price": 10.77,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality imported mushroom for your everyday needs."
  },
  {
    "name": "Farm-style Mushroom",
    "category": "Vegetables",
    "price": 6.56,
    "stock": 113,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality farm-style mushroom for your everyday needs."
  },
  {
    "name": "Classic Mushroom",
    "category": "Vegetables",
    "price": 8.04,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality classic mushroom for your everyday needs."
  },
  {
    "name": "Deluxe Mushroom",
    "category": "Vegetables",
    "price": 10.13,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality deluxe mushroom for your everyday needs."
  },
  {
    "name": "Signature Mushroom",
    "category": "Vegetables",
    "price": 1.77,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/500px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg",
    "description": "High quality signature mushroom for your everyday needs."
  },
  {
    "name": "Organic Celery",
    "category": "Vegetables",
    "price": 6.33,
    "stock": 134,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality organic celery for your everyday needs."
  },
  {
    "name": "Fresh Celery",
    "category": "Vegetables",
    "price": 3.96,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality fresh celery for your everyday needs."
  },
  {
    "name": "Premium Celery",
    "category": "Vegetables",
    "price": 2.25,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality premium celery for your everyday needs."
  },
  {
    "name": "Value Celery",
    "category": "Vegetables",
    "price": 6.34,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality value celery for your everyday needs."
  },
  {
    "name": "Local Celery",
    "category": "Vegetables",
    "price": 4.35,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality local celery for your everyday needs."
  },
  {
    "name": "Imported Celery",
    "category": "Vegetables",
    "price": 8.34,
    "stock": 185,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality imported celery for your everyday needs."
  },
  {
    "name": "Farm-style Celery",
    "category": "Vegetables",
    "price": 1.28,
    "stock": 171,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality farm-style celery for your everyday needs."
  },
  {
    "name": "Classic Celery",
    "category": "Vegetables",
    "price": 1.47,
    "stock": 44,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality classic celery for your everyday needs."
  },
  {
    "name": "Deluxe Celery",
    "category": "Vegetables",
    "price": 10.58,
    "stock": 32,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality deluxe celery for your everyday needs."
  },
  {
    "name": "Signature Celery",
    "category": "Vegetables",
    "price": 3.11,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/500px-Celery_1.jpg",
    "description": "High quality signature celery for your everyday needs."
  },
  {
    "name": "Organic Asparagus",
    "category": "Vegetables",
    "price": 6.88,
    "stock": 160,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality organic asparagus for your everyday needs."
  },
  {
    "name": "Fresh Asparagus",
    "category": "Vegetables",
    "price": 5.18,
    "stock": 75,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality fresh asparagus for your everyday needs."
  },
  {
    "name": "Premium Asparagus",
    "category": "Vegetables",
    "price": 7.2,
    "stock": 24,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality premium asparagus for your everyday needs."
  },
  {
    "name": "Value Asparagus",
    "category": "Vegetables",
    "price": 9.75,
    "stock": 156,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality value asparagus for your everyday needs."
  },
  {
    "name": "Local Asparagus",
    "category": "Vegetables",
    "price": 1.14,
    "stock": 159,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality local asparagus for your everyday needs."
  },
  {
    "name": "Imported Asparagus",
    "category": "Vegetables",
    "price": 1.29,
    "stock": 84,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality imported asparagus for your everyday needs."
  },
  {
    "name": "Farm-style Asparagus",
    "category": "Vegetables",
    "price": 7.26,
    "stock": 148,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality farm-style asparagus for your everyday needs."
  },
  {
    "name": "Classic Asparagus",
    "category": "Vegetables",
    "price": 2.8,
    "stock": 30,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality classic asparagus for your everyday needs."
  },
  {
    "name": "Deluxe Asparagus",
    "category": "Vegetables",
    "price": 3.01,
    "stock": 100,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality deluxe asparagus for your everyday needs."
  },
  {
    "name": "Signature Asparagus",
    "category": "Vegetables",
    "price": 6.76,
    "stock": 183,
    "image": "https://via.placeholder.com/500?text=Asparagus",
    "description": "High quality signature asparagus for your everyday needs."
  },
  {
    "name": "Organic Maize",
    "category": "Vegetables",
    "price": 5.34,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality organic maize for your everyday needs."
  },
  {
    "name": "Fresh Maize",
    "category": "Vegetables",
    "price": 3.22,
    "stock": 166,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality fresh maize for your everyday needs."
  },
  {
    "name": "Premium Maize",
    "category": "Vegetables",
    "price": 3.34,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality premium maize for your everyday needs."
  },
  {
    "name": "Value Maize",
    "category": "Vegetables",
    "price": 5.31,
    "stock": 154,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality value maize for your everyday needs."
  },
  {
    "name": "Local Maize",
    "category": "Vegetables",
    "price": 10.26,
    "stock": 52,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality local maize for your everyday needs."
  },
  {
    "name": "Imported Maize",
    "category": "Vegetables",
    "price": 9.11,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality imported maize for your everyday needs."
  },
  {
    "name": "Farm-style Maize",
    "category": "Vegetables",
    "price": 9.04,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality farm-style maize for your everyday needs."
  },
  {
    "name": "Classic Maize",
    "category": "Vegetables",
    "price": 8.23,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality classic maize for your everyday needs."
  },
  {
    "name": "Deluxe Maize",
    "category": "Vegetables",
    "price": 6.79,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality deluxe maize for your everyday needs."
  },
  {
    "name": "Signature Maize",
    "category": "Vegetables",
    "price": 8.38,
    "stock": 191,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "description": "High quality signature maize for your everyday needs."
  },
  {
    "name": "Organic Pea",
    "category": "Vegetables",
    "price": 3.83,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality organic pea for your everyday needs."
  },
  {
    "name": "Fresh Pea",
    "category": "Vegetables",
    "price": 8.72,
    "stock": 113,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality fresh pea for your everyday needs."
  },
  {
    "name": "Premium Pea",
    "category": "Vegetables",
    "price": 7.39,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality premium pea for your everyday needs."
  },
  {
    "name": "Value Pea",
    "category": "Vegetables",
    "price": 9.92,
    "stock": 12,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality value pea for your everyday needs."
  },
  {
    "name": "Local Pea",
    "category": "Vegetables",
    "price": 2.5,
    "stock": 22,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality local pea for your everyday needs."
  },
  {
    "name": "Imported Pea",
    "category": "Vegetables",
    "price": 1.64,
    "stock": 76,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality imported pea for your everyday needs."
  },
  {
    "name": "Farm-style Pea",
    "category": "Vegetables",
    "price": 2.39,
    "stock": 206,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality farm-style pea for your everyday needs."
  },
  {
    "name": "Classic Pea",
    "category": "Vegetables",
    "price": 3.45,
    "stock": 10,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality classic pea for your everyday needs."
  },
  {
    "name": "Deluxe Pea",
    "category": "Vegetables",
    "price": 5.02,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality deluxe pea for your everyday needs."
  },
  {
    "name": "Signature Pea",
    "category": "Vegetables",
    "price": 10.16,
    "stock": 161,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/500px-Peas_in_pods_-_Studio.jpg",
    "description": "High quality signature pea for your everyday needs."
  },
  {
    "name": "Organic Green bean",
    "category": "Vegetables",
    "price": 9.37,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality organic green bean for your everyday needs."
  },
  {
    "name": "Fresh Green bean",
    "category": "Vegetables",
    "price": 8.11,
    "stock": 12,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality fresh green bean for your everyday needs."
  },
  {
    "name": "Premium Green bean",
    "category": "Vegetables",
    "price": 5.22,
    "stock": 12,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality premium green bean for your everyday needs."
  },
  {
    "name": "Value Green bean",
    "category": "Vegetables",
    "price": 1.25,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality value green bean for your everyday needs."
  },
  {
    "name": "Local Green bean",
    "category": "Vegetables",
    "price": 8.79,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality local green bean for your everyday needs."
  },
  {
    "name": "Imported Green bean",
    "category": "Vegetables",
    "price": 2.55,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality imported green bean for your everyday needs."
  },
  {
    "name": "Farm-style Green bean",
    "category": "Vegetables",
    "price": 8.54,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality farm-style green bean for your everyday needs."
  },
  {
    "name": "Classic Green bean",
    "category": "Vegetables",
    "price": 3.9,
    "stock": 34,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality classic green bean for your everyday needs."
  },
  {
    "name": "Deluxe Green bean",
    "category": "Vegetables",
    "price": 10.72,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality deluxe green bean for your everyday needs."
  },
  {
    "name": "Signature Green bean",
    "category": "Vegetables",
    "price": 3.15,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heaps_of_beans.jpg/500px-Heaps_of_beans.jpg",
    "description": "High quality signature green bean for your everyday needs."
  },
  {
    "name": "Organic Sweet potato",
    "category": "Vegetables",
    "price": 9.8,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality organic sweet potato for your everyday needs."
  },
  {
    "name": "Fresh Sweet potato",
    "category": "Vegetables",
    "price": 8.62,
    "stock": 146,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality fresh sweet potato for your everyday needs."
  },
  {
    "name": "Premium Sweet potato",
    "category": "Vegetables",
    "price": 6.61,
    "stock": 32,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality premium sweet potato for your everyday needs."
  },
  {
    "name": "Value Sweet potato",
    "category": "Vegetables",
    "price": 3.09,
    "stock": 173,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality value sweet potato for your everyday needs."
  },
  {
    "name": "Local Sweet potato",
    "category": "Vegetables",
    "price": 3.46,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality local sweet potato for your everyday needs."
  },
  {
    "name": "Imported Sweet potato",
    "category": "Vegetables",
    "price": 4.38,
    "stock": 46,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality imported sweet potato for your everyday needs."
  },
  {
    "name": "Farm-style Sweet potato",
    "category": "Vegetables",
    "price": 3.4,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality farm-style sweet potato for your everyday needs."
  },
  {
    "name": "Classic Sweet potato",
    "category": "Vegetables",
    "price": 8.22,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality classic sweet potato for your everyday needs."
  },
  {
    "name": "Deluxe Sweet potato",
    "category": "Vegetables",
    "price": 2.89,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality deluxe sweet potato for your everyday needs."
  },
  {
    "name": "Signature Sweet potato",
    "category": "Vegetables",
    "price": 3.86,
    "stock": 81,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/500px-Ipomoea_batatas_006.JPG",
    "description": "High quality signature sweet potato for your everyday needs."
  },
  {
    "name": "Organic Pumpkin",
    "category": "Vegetables",
    "price": 6.77,
    "stock": 112,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality organic pumpkin for your everyday needs."
  },
  {
    "name": "Fresh Pumpkin",
    "category": "Vegetables",
    "price": 8.05,
    "stock": 82,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality fresh pumpkin for your everyday needs."
  },
  {
    "name": "Premium Pumpkin",
    "category": "Vegetables",
    "price": 6.49,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality premium pumpkin for your everyday needs."
  },
  {
    "name": "Value Pumpkin",
    "category": "Vegetables",
    "price": 10.6,
    "stock": 46,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality value pumpkin for your everyday needs."
  },
  {
    "name": "Local Pumpkin",
    "category": "Vegetables",
    "price": 1.85,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality local pumpkin for your everyday needs."
  },
  {
    "name": "Imported Pumpkin",
    "category": "Vegetables",
    "price": 4.61,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality imported pumpkin for your everyday needs."
  },
  {
    "name": "Farm-style Pumpkin",
    "category": "Vegetables",
    "price": 4.23,
    "stock": 202,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality farm-style pumpkin for your everyday needs."
  },
  {
    "name": "Classic Pumpkin",
    "category": "Vegetables",
    "price": 6.66,
    "stock": 73,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality classic pumpkin for your everyday needs."
  },
  {
    "name": "Deluxe Pumpkin",
    "category": "Vegetables",
    "price": 5.77,
    "stock": 205,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality deluxe pumpkin for your everyday needs."
  },
  {
    "name": "Signature Pumpkin",
    "category": "Vegetables",
    "price": 9.7,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/500px-FrenchMarketPumpkinsB.jpg",
    "description": "High quality signature pumpkin for your everyday needs."
  },
  {
    "name": "Organic Avocado",
    "category": "Fruits",
    "price": 7.72,
    "stock": 49,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality organic avocado for your everyday needs."
  },
  {
    "name": "Fresh Avocado",
    "category": "Fruits",
    "price": 7.63,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality fresh avocado for your everyday needs."
  },
  {
    "name": "Premium Avocado",
    "category": "Fruits",
    "price": 4.29,
    "stock": 113,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality premium avocado for your everyday needs."
  },
  {
    "name": "Value Avocado",
    "category": "Fruits",
    "price": 4.92,
    "stock": 153,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality value avocado for your everyday needs."
  },
  {
    "name": "Local Avocado",
    "category": "Fruits",
    "price": 3.19,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality local avocado for your everyday needs."
  },
  {
    "name": "Imported Avocado",
    "category": "Fruits",
    "price": 5.85,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality imported avocado for your everyday needs."
  },
  {
    "name": "Farm-style Avocado",
    "category": "Fruits",
    "price": 3.76,
    "stock": 82,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality farm-style avocado for your everyday needs."
  },
  {
    "name": "Classic Avocado",
    "category": "Fruits",
    "price": 8.02,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality classic avocado for your everyday needs."
  },
  {
    "name": "Deluxe Avocado",
    "category": "Fruits",
    "price": 8.94,
    "stock": 73,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality deluxe avocado for your everyday needs."
  },
  {
    "name": "Signature Avocado",
    "category": "Fruits",
    "price": 8.48,
    "stock": 197,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/500px-Persea_americana_fruit_2.JPG",
    "description": "High quality signature avocado for your everyday needs."
  },
  {
    "name": "Organic Milk",
    "category": "Dairy",
    "price": 6.55,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality organic milk for your everyday needs."
  },
  {
    "name": "Fresh Milk",
    "category": "Dairy",
    "price": 6.45,
    "stock": 195,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality fresh milk for your everyday needs."
  },
  {
    "name": "Premium Milk",
    "category": "Dairy",
    "price": 3.47,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality premium milk for your everyday needs."
  },
  {
    "name": "Value Milk",
    "category": "Dairy",
    "price": 6.65,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality value milk for your everyday needs."
  },
  {
    "name": "Local Milk",
    "category": "Dairy",
    "price": 9.36,
    "stock": 122,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality local milk for your everyday needs."
  },
  {
    "name": "Imported Milk",
    "category": "Dairy",
    "price": 5.43,
    "stock": 125,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality imported milk for your everyday needs."
  },
  {
    "name": "Farm-style Milk",
    "category": "Dairy",
    "price": 3.53,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality farm-style milk for your everyday needs."
  },
  {
    "name": "Classic Milk",
    "category": "Dairy",
    "price": 5.94,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality classic milk for your everyday needs."
  },
  {
    "name": "Deluxe Milk",
    "category": "Dairy",
    "price": 7.42,
    "stock": 151,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality deluxe milk for your everyday needs."
  },
  {
    "name": "Signature Milk",
    "category": "Dairy",
    "price": 5.91,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/500px-Glass_of_Milk_%2833657535532%29.jpg",
    "description": "High quality signature milk for your everyday needs."
  },
  {
    "name": "Organic Cheese",
    "category": "Dairy",
    "price": 6.54,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality organic cheese for your everyday needs."
  },
  {
    "name": "Fresh Cheese",
    "category": "Dairy",
    "price": 1.55,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality fresh cheese for your everyday needs."
  },
  {
    "name": "Premium Cheese",
    "category": "Dairy",
    "price": 5.61,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality premium cheese for your everyday needs."
  },
  {
    "name": "Value Cheese",
    "category": "Dairy",
    "price": 9.45,
    "stock": 22,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality value cheese for your everyday needs."
  },
  {
    "name": "Local Cheese",
    "category": "Dairy",
    "price": 3.26,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality local cheese for your everyday needs."
  },
  {
    "name": "Imported Cheese",
    "category": "Dairy",
    "price": 10.2,
    "stock": 87,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality imported cheese for your everyday needs."
  },
  {
    "name": "Farm-style Cheese",
    "category": "Dairy",
    "price": 5.15,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality farm-style cheese for your everyday needs."
  },
  {
    "name": "Classic Cheese",
    "category": "Dairy",
    "price": 3.16,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality classic cheese for your everyday needs."
  },
  {
    "name": "Deluxe Cheese",
    "category": "Dairy",
    "price": 6.06,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality deluxe cheese for your everyday needs."
  },
  {
    "name": "Signature Cheese",
    "category": "Dairy",
    "price": 8.4,
    "stock": 67,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/500px-Cheese_platter.jpg",
    "description": "High quality signature cheese for your everyday needs."
  },
  {
    "name": "Organic Butter",
    "category": "Dairy",
    "price": 3.07,
    "stock": 191,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality organic butter for your everyday needs."
  },
  {
    "name": "Fresh Butter",
    "category": "Dairy",
    "price": 8.49,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality fresh butter for your everyday needs."
  },
  {
    "name": "Premium Butter",
    "category": "Dairy",
    "price": 5.24,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality premium butter for your everyday needs."
  },
  {
    "name": "Value Butter",
    "category": "Dairy",
    "price": 7.05,
    "stock": 14,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality value butter for your everyday needs."
  },
  {
    "name": "Local Butter",
    "category": "Dairy",
    "price": 6.07,
    "stock": 53,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality local butter for your everyday needs."
  },
  {
    "name": "Imported Butter",
    "category": "Dairy",
    "price": 1.01,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality imported butter for your everyday needs."
  },
  {
    "name": "Farm-style Butter",
    "category": "Dairy",
    "price": 7.71,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality farm-style butter for your everyday needs."
  },
  {
    "name": "Classic Butter",
    "category": "Dairy",
    "price": 9.83,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality classic butter for your everyday needs."
  },
  {
    "name": "Deluxe Butter",
    "category": "Dairy",
    "price": 8.38,
    "stock": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality deluxe butter for your everyday needs."
  },
  {
    "name": "Signature Butter",
    "category": "Dairy",
    "price": 10.17,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/500px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
    "description": "High quality signature butter for your everyday needs."
  },
  {
    "name": "Organic Yogurt",
    "category": "Dairy",
    "price": 5.26,
    "stock": 26,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality organic yogurt for your everyday needs."
  },
  {
    "name": "Fresh Yogurt",
    "category": "Dairy",
    "price": 3.97,
    "stock": 166,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality fresh yogurt for your everyday needs."
  },
  {
    "name": "Premium Yogurt",
    "category": "Dairy",
    "price": 5.29,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality premium yogurt for your everyday needs."
  },
  {
    "name": "Value Yogurt",
    "category": "Dairy",
    "price": 5.26,
    "stock": 126,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality value yogurt for your everyday needs."
  },
  {
    "name": "Local Yogurt",
    "category": "Dairy",
    "price": 8.84,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality local yogurt for your everyday needs."
  },
  {
    "name": "Imported Yogurt",
    "category": "Dairy",
    "price": 8.23,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality imported yogurt for your everyday needs."
  },
  {
    "name": "Farm-style Yogurt",
    "category": "Dairy",
    "price": 8.38,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality farm-style yogurt for your everyday needs."
  },
  {
    "name": "Classic Yogurt",
    "category": "Dairy",
    "price": 8.73,
    "stock": 13,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality classic yogurt for your everyday needs."
  },
  {
    "name": "Deluxe Yogurt",
    "category": "Dairy",
    "price": 2,
    "stock": 124,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality deluxe yogurt for your everyday needs."
  },
  {
    "name": "Signature Yogurt",
    "category": "Dairy",
    "price": 8.96,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/500px-Joghurt.jpg",
    "description": "High quality signature yogurt for your everyday needs."
  },
  {
    "name": "Organic Cream",
    "category": "Dairy",
    "price": 6.18,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality organic cream for your everyday needs."
  },
  {
    "name": "Fresh Cream",
    "category": "Dairy",
    "price": 5.51,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality fresh cream for your everyday needs."
  },
  {
    "name": "Premium Cream",
    "category": "Dairy",
    "price": 2.98,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality premium cream for your everyday needs."
  },
  {
    "name": "Value Cream",
    "category": "Dairy",
    "price": 9.62,
    "stock": 38,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality value cream for your everyday needs."
  },
  {
    "name": "Local Cream",
    "category": "Dairy",
    "price": 6.31,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality local cream for your everyday needs."
  },
  {
    "name": "Imported Cream",
    "category": "Dairy",
    "price": 10.3,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality imported cream for your everyday needs."
  },
  {
    "name": "Farm-style Cream",
    "category": "Dairy",
    "price": 7.25,
    "stock": 184,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality farm-style cream for your everyday needs."
  },
  {
    "name": "Classic Cream",
    "category": "Dairy",
    "price": 5.35,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality classic cream for your everyday needs."
  },
  {
    "name": "Deluxe Cream",
    "category": "Dairy",
    "price": 8.06,
    "stock": 128,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality deluxe cream for your everyday needs."
  },
  {
    "name": "Signature Cream",
    "category": "Dairy",
    "price": 9.99,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg/500px-01_Mmm..._Apple_Crisp_with_Whipped_Cream.jpg",
    "description": "High quality signature cream for your everyday needs."
  },
  {
    "name": "Organic Egg",
    "category": "Pantry & Others",
    "price": 10.29,
    "stock": 27,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality organic egg for your everyday needs."
  },
  {
    "name": "Fresh Egg",
    "category": "Pantry & Others",
    "price": 9.21,
    "stock": 168,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality fresh egg for your everyday needs."
  },
  {
    "name": "Premium Egg",
    "category": "Pantry & Others",
    "price": 7.15,
    "stock": 12,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality premium egg for your everyday needs."
  },
  {
    "name": "Value Egg",
    "category": "Pantry & Others",
    "price": 9.71,
    "stock": 157,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality value egg for your everyday needs."
  },
  {
    "name": "Local Egg",
    "category": "Pantry & Others",
    "price": 2.56,
    "stock": 142,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality local egg for your everyday needs."
  },
  {
    "name": "Imported Egg",
    "category": "Pantry & Others",
    "price": 8.88,
    "stock": 202,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality imported egg for your everyday needs."
  },
  {
    "name": "Farm-style Egg",
    "category": "Pantry & Others",
    "price": 10,
    "stock": 33,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality farm-style egg for your everyday needs."
  },
  {
    "name": "Classic Egg",
    "category": "Pantry & Others",
    "price": 3.07,
    "stock": 14,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality classic egg for your everyday needs."
  },
  {
    "name": "Deluxe Egg",
    "category": "Pantry & Others",
    "price": 5.84,
    "stock": 13,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality deluxe egg for your everyday needs."
  },
  {
    "name": "Signature Egg",
    "category": "Pantry & Others",
    "price": 5.3,
    "stock": 104,
    "image": "https://via.placeholder.com/500?text=Egg%20(food)",
    "description": "High quality signature egg for your everyday needs."
  },
  {
    "name": "Organic Bread",
    "category": "Bakery",
    "price": 1.44,
    "stock": 13,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality organic bread for your everyday needs."
  },
  {
    "name": "Fresh Bread",
    "category": "Bakery",
    "price": 9.83,
    "stock": 84,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality fresh bread for your everyday needs."
  },
  {
    "name": "Premium Bread",
    "category": "Bakery",
    "price": 8.35,
    "stock": 86,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality premium bread for your everyday needs."
  },
  {
    "name": "Value Bread",
    "category": "Bakery",
    "price": 8.5,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality value bread for your everyday needs."
  },
  {
    "name": "Local Bread",
    "category": "Bakery",
    "price": 1.05,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality local bread for your everyday needs."
  },
  {
    "name": "Imported Bread",
    "category": "Bakery",
    "price": 4.01,
    "stock": 51,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality imported bread for your everyday needs."
  },
  {
    "name": "Farm-style Bread",
    "category": "Bakery",
    "price": 8.05,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality farm-style bread for your everyday needs."
  },
  {
    "name": "Classic Bread",
    "category": "Bakery",
    "price": 4.76,
    "stock": 59,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality classic bread for your everyday needs."
  },
  {
    "name": "Deluxe Bread",
    "category": "Bakery",
    "price": 7.09,
    "stock": 32,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality deluxe bread for your everyday needs."
  },
  {
    "name": "Signature Bread",
    "category": "Bakery",
    "price": 4.8,
    "stock": 122,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG",
    "description": "High quality signature bread for your everyday needs."
  },
  {
    "name": "Organic Bagel",
    "category": "Bakery",
    "price": 1.62,
    "stock": 155,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality organic bagel for your everyday needs."
  },
  {
    "name": "Fresh Bagel",
    "category": "Bakery",
    "price": 1.87,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality fresh bagel for your everyday needs."
  },
  {
    "name": "Premium Bagel",
    "category": "Bakery",
    "price": 2.37,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality premium bagel for your everyday needs."
  },
  {
    "name": "Value Bagel",
    "category": "Bakery",
    "price": 6.34,
    "stock": 47,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality value bagel for your everyday needs."
  },
  {
    "name": "Local Bagel",
    "category": "Bakery",
    "price": 5.87,
    "stock": 161,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality local bagel for your everyday needs."
  },
  {
    "name": "Imported Bagel",
    "category": "Bakery",
    "price": 6.03,
    "stock": 99,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality imported bagel for your everyday needs."
  },
  {
    "name": "Farm-style Bagel",
    "category": "Bakery",
    "price": 4.47,
    "stock": 21,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality farm-style bagel for your everyday needs."
  },
  {
    "name": "Classic Bagel",
    "category": "Bakery",
    "price": 3.55,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality classic bagel for your everyday needs."
  },
  {
    "name": "Deluxe Bagel",
    "category": "Bakery",
    "price": 10.03,
    "stock": 26,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality deluxe bagel for your everyday needs."
  },
  {
    "name": "Signature Bagel",
    "category": "Bakery",
    "price": 3.96,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/500px-Bagel_with_sesame_3.jpg",
    "description": "High quality signature bagel for your everyday needs."
  },
  {
    "name": "Organic Croissant",
    "category": "Bakery",
    "price": 10.45,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality organic croissant for your everyday needs."
  },
  {
    "name": "Fresh Croissant",
    "category": "Bakery",
    "price": 5.74,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality fresh croissant for your everyday needs."
  },
  {
    "name": "Premium Croissant",
    "category": "Bakery",
    "price": 8.28,
    "stock": 198,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality premium croissant for your everyday needs."
  },
  {
    "name": "Value Croissant",
    "category": "Bakery",
    "price": 3.54,
    "stock": 54,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality value croissant for your everyday needs."
  },
  {
    "name": "Local Croissant",
    "category": "Bakery",
    "price": 2.92,
    "stock": 138,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality local croissant for your everyday needs."
  },
  {
    "name": "Imported Croissant",
    "category": "Bakery",
    "price": 2.37,
    "stock": 25,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality imported croissant for your everyday needs."
  },
  {
    "name": "Farm-style Croissant",
    "category": "Bakery",
    "price": 9.58,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality farm-style croissant for your everyday needs."
  },
  {
    "name": "Classic Croissant",
    "category": "Bakery",
    "price": 2.76,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality classic croissant for your everyday needs."
  },
  {
    "name": "Deluxe Croissant",
    "category": "Bakery",
    "price": 1.52,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality deluxe croissant for your everyday needs."
  },
  {
    "name": "Signature Croissant",
    "category": "Bakery",
    "price": 4.53,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/500px-Croissant-Petr_Kratochvil.jpg",
    "description": "High quality signature croissant for your everyday needs."
  },
  {
    "name": "Organic Muffin",
    "category": "Bakery",
    "price": 1.59,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality organic muffin for your everyday needs."
  },
  {
    "name": "Fresh Muffin",
    "category": "Bakery",
    "price": 4.28,
    "stock": 53,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality fresh muffin for your everyday needs."
  },
  {
    "name": "Premium Muffin",
    "category": "Bakery",
    "price": 8.67,
    "stock": 205,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality premium muffin for your everyday needs."
  },
  {
    "name": "Value Muffin",
    "category": "Bakery",
    "price": 5.84,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality value muffin for your everyday needs."
  },
  {
    "name": "Local Muffin",
    "category": "Bakery",
    "price": 10.27,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality local muffin for your everyday needs."
  },
  {
    "name": "Imported Muffin",
    "category": "Bakery",
    "price": 5.16,
    "stock": 179,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality imported muffin for your everyday needs."
  },
  {
    "name": "Farm-style Muffin",
    "category": "Bakery",
    "price": 4.02,
    "stock": 188,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality farm-style muffin for your everyday needs."
  },
  {
    "name": "Classic Muffin",
    "category": "Bakery",
    "price": 7.59,
    "stock": 140,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality classic muffin for your everyday needs."
  },
  {
    "name": "Deluxe Muffin",
    "category": "Bakery",
    "price": 10.06,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality deluxe muffin for your everyday needs."
  },
  {
    "name": "Signature Muffin",
    "category": "Bakery",
    "price": 9.19,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/02116jfMuffins_in_Philippinesfvf_02.jpg/500px-02116jfMuffins_in_Philippinesfvf_02.jpg",
    "description": "High quality signature muffin for your everyday needs."
  },
  {
    "name": "Organic Chicken meat",
    "category": "Meat",
    "price": 9.8,
    "stock": 37,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality organic chicken meat for your everyday needs."
  },
  {
    "name": "Fresh Chicken meat",
    "category": "Meat",
    "price": 5.24,
    "stock": 36,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality fresh chicken meat for your everyday needs."
  },
  {
    "name": "Premium Chicken meat",
    "category": "Meat",
    "price": 3.66,
    "stock": 82,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality premium chicken meat for your everyday needs."
  },
  {
    "name": "Value Chicken meat",
    "category": "Meat",
    "price": 5.94,
    "stock": 198,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality value chicken meat for your everyday needs."
  },
  {
    "name": "Local Chicken meat",
    "category": "Meat",
    "price": 6.2,
    "stock": 15,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality local chicken meat for your everyday needs."
  },
  {
    "name": "Imported Chicken meat",
    "category": "Meat",
    "price": 4.72,
    "stock": 137,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality imported chicken meat for your everyday needs."
  },
  {
    "name": "Farm-style Chicken meat",
    "category": "Meat",
    "price": 2.5,
    "stock": 134,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality farm-style chicken meat for your everyday needs."
  },
  {
    "name": "Classic Chicken meat",
    "category": "Meat",
    "price": 3.22,
    "stock": 159,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality classic chicken meat for your everyday needs."
  },
  {
    "name": "Deluxe Chicken meat",
    "category": "Meat",
    "price": 5.46,
    "stock": 17,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality deluxe chicken meat for your everyday needs."
  },
  {
    "name": "Signature Chicken meat",
    "category": "Meat",
    "price": 3.41,
    "stock": 166,
    "image": "https://via.placeholder.com/500?text=Chicken%20meat",
    "description": "High quality signature chicken meat for your everyday needs."
  },
  {
    "name": "Organic Beef",
    "category": "Meat",
    "price": 7.13,
    "stock": 156,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality organic beef for your everyday needs."
  },
  {
    "name": "Fresh Beef",
    "category": "Meat",
    "price": 5.41,
    "stock": 112,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality fresh beef for your everyday needs."
  },
  {
    "name": "Premium Beef",
    "category": "Meat",
    "price": 8.58,
    "stock": 42,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality premium beef for your everyday needs."
  },
  {
    "name": "Value Beef",
    "category": "Meat",
    "price": 5.03,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality value beef for your everyday needs."
  },
  {
    "name": "Local Beef",
    "category": "Meat",
    "price": 4.76,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality local beef for your everyday needs."
  },
  {
    "name": "Imported Beef",
    "category": "Meat",
    "price": 5.04,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality imported beef for your everyday needs."
  },
  {
    "name": "Farm-style Beef",
    "category": "Meat",
    "price": 5.38,
    "stock": 63,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality farm-style beef for your everyday needs."
  },
  {
    "name": "Classic Beef",
    "category": "Meat",
    "price": 5.88,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality classic beef for your everyday needs."
  },
  {
    "name": "Deluxe Beef",
    "category": "Meat",
    "price": 7.38,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality deluxe beef for your everyday needs."
  },
  {
    "name": "Signature Beef",
    "category": "Meat",
    "price": 9.48,
    "stock": 131,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/500px-Standing-rib-roast.jpg",
    "description": "High quality signature beef for your everyday needs."
  },
  {
    "name": "Organic Pork",
    "category": "Meat",
    "price": 7.47,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality organic pork for your everyday needs."
  },
  {
    "name": "Fresh Pork",
    "category": "Meat",
    "price": 2.7,
    "stock": 148,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality fresh pork for your everyday needs."
  },
  {
    "name": "Premium Pork",
    "category": "Meat",
    "price": 1.99,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality premium pork for your everyday needs."
  },
  {
    "name": "Value Pork",
    "category": "Meat",
    "price": 7.73,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality value pork for your everyday needs."
  },
  {
    "name": "Local Pork",
    "category": "Meat",
    "price": 8.24,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality local pork for your everyday needs."
  },
  {
    "name": "Imported Pork",
    "category": "Meat",
    "price": 10.36,
    "stock": 107,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality imported pork for your everyday needs."
  },
  {
    "name": "Farm-style Pork",
    "category": "Meat",
    "price": 5.78,
    "stock": 159,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality farm-style pork for your everyday needs."
  },
  {
    "name": "Classic Pork",
    "category": "Meat",
    "price": 10.42,
    "stock": 63,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality classic pork for your everyday needs."
  },
  {
    "name": "Deluxe Pork",
    "category": "Meat",
    "price": 9.04,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality deluxe pork for your everyday needs."
  },
  {
    "name": "Signature Pork",
    "category": "Meat",
    "price": 8.59,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/500px-Schweinebauch-2.jpg",
    "description": "High quality signature pork for your everyday needs."
  },
  {
    "name": "Organic Lamb and mutton",
    "category": "Meat",
    "price": 9.21,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality organic lamb and mutton for your everyday needs."
  },
  {
    "name": "Fresh Lamb and mutton",
    "category": "Meat",
    "price": 10.69,
    "stock": 144,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality fresh lamb and mutton for your everyday needs."
  },
  {
    "name": "Premium Lamb and mutton",
    "category": "Meat",
    "price": 1.82,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality premium lamb and mutton for your everyday needs."
  },
  {
    "name": "Value Lamb and mutton",
    "category": "Meat",
    "price": 2.21,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality value lamb and mutton for your everyday needs."
  },
  {
    "name": "Local Lamb and mutton",
    "category": "Meat",
    "price": 9.29,
    "stock": 14,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality local lamb and mutton for your everyday needs."
  },
  {
    "name": "Imported Lamb and mutton",
    "category": "Meat",
    "price": 2.88,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality imported lamb and mutton for your everyday needs."
  },
  {
    "name": "Farm-style Lamb and mutton",
    "category": "Meat",
    "price": 1.99,
    "stock": 92,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality farm-style lamb and mutton for your everyday needs."
  },
  {
    "name": "Classic Lamb and mutton",
    "category": "Meat",
    "price": 9.6,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality classic lamb and mutton for your everyday needs."
  },
  {
    "name": "Deluxe Lamb and mutton",
    "category": "Meat",
    "price": 8.96,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality deluxe lamb and mutton for your everyday needs."
  },
  {
    "name": "Signature Lamb and mutton",
    "category": "Meat",
    "price": 8,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamb_meat_%281%29.jpg/500px-Lamb_meat_%281%29.jpg",
    "description": "High quality signature lamb and mutton for your everyday needs."
  },
  {
    "name": "Organic Turkey meat",
    "category": "Meat",
    "price": 6.92,
    "stock": 97,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality organic turkey meat for your everyday needs."
  },
  {
    "name": "Fresh Turkey meat",
    "category": "Meat",
    "price": 3.78,
    "stock": 43,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality fresh turkey meat for your everyday needs."
  },
  {
    "name": "Premium Turkey meat",
    "category": "Meat",
    "price": 3.14,
    "stock": 23,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality premium turkey meat for your everyday needs."
  },
  {
    "name": "Value Turkey meat",
    "category": "Meat",
    "price": 2.66,
    "stock": 82,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality value turkey meat for your everyday needs."
  },
  {
    "name": "Local Turkey meat",
    "category": "Meat",
    "price": 10.97,
    "stock": 165,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality local turkey meat for your everyday needs."
  },
  {
    "name": "Imported Turkey meat",
    "category": "Meat",
    "price": 4.37,
    "stock": 44,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality imported turkey meat for your everyday needs."
  },
  {
    "name": "Farm-style Turkey meat",
    "category": "Meat",
    "price": 8.99,
    "stock": 48,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality farm-style turkey meat for your everyday needs."
  },
  {
    "name": "Classic Turkey meat",
    "category": "Meat",
    "price": 10.9,
    "stock": 52,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality classic turkey meat for your everyday needs."
  },
  {
    "name": "Deluxe Turkey meat",
    "category": "Meat",
    "price": 4.99,
    "stock": 45,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality deluxe turkey meat for your everyday needs."
  },
  {
    "name": "Signature Turkey meat",
    "category": "Meat",
    "price": 6.95,
    "stock": 37,
    "image": "https://via.placeholder.com/500?text=Turkey%20meat",
    "description": "High quality signature turkey meat for your everyday needs."
  },
  {
    "name": "Organic Salmon",
    "category": "Meat",
    "price": 6.41,
    "stock": 36,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality organic salmon for your everyday needs."
  },
  {
    "name": "Fresh Salmon",
    "category": "Meat",
    "price": 6.64,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality fresh salmon for your everyday needs."
  },
  {
    "name": "Premium Salmon",
    "category": "Meat",
    "price": 4.24,
    "stock": 131,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality premium salmon for your everyday needs."
  },
  {
    "name": "Value Salmon",
    "category": "Meat",
    "price": 9.04,
    "stock": 59,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality value salmon for your everyday needs."
  },
  {
    "name": "Local Salmon",
    "category": "Meat",
    "price": 3.38,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality local salmon for your everyday needs."
  },
  {
    "name": "Imported Salmon",
    "category": "Meat",
    "price": 9.72,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality imported salmon for your everyday needs."
  },
  {
    "name": "Farm-style Salmon",
    "category": "Meat",
    "price": 9.42,
    "stock": 112,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality farm-style salmon for your everyday needs."
  },
  {
    "name": "Classic Salmon",
    "category": "Meat",
    "price": 2.58,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality classic salmon for your everyday needs."
  },
  {
    "name": "Deluxe Salmon",
    "category": "Meat",
    "price": 5.63,
    "stock": 144,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality deluxe salmon for your everyday needs."
  },
  {
    "name": "Signature Salmon",
    "category": "Meat",
    "price": 1.51,
    "stock": 94,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/500px-Salmo_salar.jpg",
    "description": "High quality signature salmon for your everyday needs."
  },
  {
    "name": "Organic Tuna",
    "category": "Meat",
    "price": 4.95,
    "stock": 193,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality organic tuna for your everyday needs."
  },
  {
    "name": "Fresh Tuna",
    "category": "Meat",
    "price": 2.19,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality fresh tuna for your everyday needs."
  },
  {
    "name": "Premium Tuna",
    "category": "Meat",
    "price": 1.88,
    "stock": 34,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality premium tuna for your everyday needs."
  },
  {
    "name": "Value Tuna",
    "category": "Meat",
    "price": 10.3,
    "stock": 194,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality value tuna for your everyday needs."
  },
  {
    "name": "Local Tuna",
    "category": "Meat",
    "price": 9.99,
    "stock": 152,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality local tuna for your everyday needs."
  },
  {
    "name": "Imported Tuna",
    "category": "Meat",
    "price": 3.5,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality imported tuna for your everyday needs."
  },
  {
    "name": "Farm-style Tuna",
    "category": "Meat",
    "price": 5.48,
    "stock": 24,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality farm-style tuna for your everyday needs."
  },
  {
    "name": "Classic Tuna",
    "category": "Meat",
    "price": 2.3,
    "stock": 72,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality classic tuna for your everyday needs."
  },
  {
    "name": "Deluxe Tuna",
    "category": "Meat",
    "price": 2.19,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality deluxe tuna for your everyday needs."
  },
  {
    "name": "Signature Tuna",
    "category": "Meat",
    "price": 1.01,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png",
    "description": "High quality signature tuna for your everyday needs."
  },
  {
    "name": "Organic Shrimp",
    "category": "Meat",
    "price": 8.58,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality organic shrimp for your everyday needs."
  },
  {
    "name": "Fresh Shrimp",
    "category": "Meat",
    "price": 8.72,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality fresh shrimp for your everyday needs."
  },
  {
    "name": "Premium Shrimp",
    "category": "Meat",
    "price": 9.97,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality premium shrimp for your everyday needs."
  },
  {
    "name": "Value Shrimp",
    "category": "Meat",
    "price": 2.82,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality value shrimp for your everyday needs."
  },
  {
    "name": "Local Shrimp",
    "category": "Meat",
    "price": 4.84,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality local shrimp for your everyday needs."
  },
  {
    "name": "Imported Shrimp",
    "category": "Meat",
    "price": 7.21,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality imported shrimp for your everyday needs."
  },
  {
    "name": "Farm-style Shrimp",
    "category": "Meat",
    "price": 8.7,
    "stock": 172,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality farm-style shrimp for your everyday needs."
  },
  {
    "name": "Classic Shrimp",
    "category": "Meat",
    "price": 6.83,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality classic shrimp for your everyday needs."
  },
  {
    "name": "Deluxe Shrimp",
    "category": "Meat",
    "price": 2.3,
    "stock": 60,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality deluxe shrimp for your everyday needs."
  },
  {
    "name": "Signature Shrimp",
    "category": "Meat",
    "price": 10.9,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palaemon_serratus_Croazia.jpg/500px-Palaemon_serratus_Croazia.jpg",
    "description": "High quality signature shrimp for your everyday needs."
  },
  {
    "name": "Organic Crab",
    "category": "Meat",
    "price": 6.44,
    "stock": 203,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality organic crab for your everyday needs."
  },
  {
    "name": "Fresh Crab",
    "category": "Meat",
    "price": 6.96,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality fresh crab for your everyday needs."
  },
  {
    "name": "Premium Crab",
    "category": "Meat",
    "price": 7.64,
    "stock": 158,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality premium crab for your everyday needs."
  },
  {
    "name": "Value Crab",
    "category": "Meat",
    "price": 3.79,
    "stock": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality value crab for your everyday needs."
  },
  {
    "name": "Local Crab",
    "category": "Meat",
    "price": 3.8,
    "stock": 59,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality local crab for your everyday needs."
  },
  {
    "name": "Imported Crab",
    "category": "Meat",
    "price": 1.74,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality imported crab for your everyday needs."
  },
  {
    "name": "Farm-style Crab",
    "category": "Meat",
    "price": 8.29,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality farm-style crab for your everyday needs."
  },
  {
    "name": "Classic Crab",
    "category": "Meat",
    "price": 6.95,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality classic crab for your everyday needs."
  },
  {
    "name": "Deluxe Crab",
    "category": "Meat",
    "price": 6.72,
    "stock": 37,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality deluxe crab for your everyday needs."
  },
  {
    "name": "Signature Crab",
    "category": "Meat",
    "price": 1.6,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cancer_pagurus.jpg/500px-Cancer_pagurus.jpg",
    "description": "High quality signature crab for your everyday needs."
  },
  {
    "name": "Organic Lobster",
    "category": "Meat",
    "price": 4.84,
    "stock": 107,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality organic lobster for your everyday needs."
  },
  {
    "name": "Fresh Lobster",
    "category": "Meat",
    "price": 9.91,
    "stock": 117,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality fresh lobster for your everyday needs."
  },
  {
    "name": "Premium Lobster",
    "category": "Meat",
    "price": 1.3,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality premium lobster for your everyday needs."
  },
  {
    "name": "Value Lobster",
    "category": "Meat",
    "price": 4.52,
    "stock": 96,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality value lobster for your everyday needs."
  },
  {
    "name": "Local Lobster",
    "category": "Meat",
    "price": 5.88,
    "stock": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality local lobster for your everyday needs."
  },
  {
    "name": "Imported Lobster",
    "category": "Meat",
    "price": 3.65,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality imported lobster for your everyday needs."
  },
  {
    "name": "Farm-style Lobster",
    "category": "Meat",
    "price": 5.4,
    "stock": 185,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality farm-style lobster for your everyday needs."
  },
  {
    "name": "Classic Lobster",
    "category": "Meat",
    "price": 6.97,
    "stock": 83,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality classic lobster for your everyday needs."
  },
  {
    "name": "Deluxe Lobster",
    "category": "Meat",
    "price": 8.72,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality deluxe lobster for your everyday needs."
  },
  {
    "name": "Signature Lobster",
    "category": "Meat",
    "price": 2.97,
    "stock": 99,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/500px-KreeftbijDenOsse.jpg",
    "description": "High quality signature lobster for your everyday needs."
  },
  {
    "name": "Organic Tofu",
    "category": "Pantry & Others",
    "price": 5.32,
    "stock": 115,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality organic tofu for your everyday needs."
  },
  {
    "name": "Fresh Tofu",
    "category": "Pantry & Others",
    "price": 4.07,
    "stock": 127,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality fresh tofu for your everyday needs."
  },
  {
    "name": "Premium Tofu",
    "category": "Pantry & Others",
    "price": 3.31,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality premium tofu for your everyday needs."
  },
  {
    "name": "Value Tofu",
    "category": "Pantry & Others",
    "price": 5.63,
    "stock": 197,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality value tofu for your everyday needs."
  },
  {
    "name": "Local Tofu",
    "category": "Pantry & Others",
    "price": 8.71,
    "stock": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality local tofu for your everyday needs."
  },
  {
    "name": "Imported Tofu",
    "category": "Pantry & Others",
    "price": 9.25,
    "stock": 165,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality imported tofu for your everyday needs."
  },
  {
    "name": "Farm-style Tofu",
    "category": "Pantry & Others",
    "price": 9.38,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality farm-style tofu for your everyday needs."
  },
  {
    "name": "Classic Tofu",
    "category": "Pantry & Others",
    "price": 9.72,
    "stock": 197,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality classic tofu for your everyday needs."
  },
  {
    "name": "Deluxe Tofu",
    "category": "Pantry & Others",
    "price": 2.74,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality deluxe tofu for your everyday needs."
  },
  {
    "name": "Signature Tofu",
    "category": "Pantry & Others",
    "price": 10.34,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/500px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG",
    "description": "High quality signature tofu for your everyday needs."
  },
  {
    "name": "Organic Rice",
    "category": "Pantry & Others",
    "price": 9.65,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality organic rice for your everyday needs."
  },
  {
    "name": "Fresh Rice",
    "category": "Pantry & Others",
    "price": 9,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality fresh rice for your everyday needs."
  },
  {
    "name": "Premium Rice",
    "category": "Pantry & Others",
    "price": 3.85,
    "stock": 154,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality premium rice for your everyday needs."
  },
  {
    "name": "Value Rice",
    "category": "Pantry & Others",
    "price": 5.98,
    "stock": 179,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality value rice for your everyday needs."
  },
  {
    "name": "Local Rice",
    "category": "Pantry & Others",
    "price": 5.65,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality local rice for your everyday needs."
  },
  {
    "name": "Imported Rice",
    "category": "Pantry & Others",
    "price": 6.97,
    "stock": 86,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality imported rice for your everyday needs."
  },
  {
    "name": "Farm-style Rice",
    "category": "Pantry & Others",
    "price": 7.64,
    "stock": 146,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality farm-style rice for your everyday needs."
  },
  {
    "name": "Classic Rice",
    "category": "Pantry & Others",
    "price": 8.2,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality classic rice for your everyday needs."
  },
  {
    "name": "Deluxe Rice",
    "category": "Pantry & Others",
    "price": 3.19,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality deluxe rice for your everyday needs."
  },
  {
    "name": "Signature Rice",
    "category": "Pantry & Others",
    "price": 4.29,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
    "description": "High quality signature rice for your everyday needs."
  },
  {
    "name": "Organic Pasta",
    "category": "Pantry & Others",
    "price": 5.58,
    "stock": 14,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality organic pasta for your everyday needs."
  },
  {
    "name": "Fresh Pasta",
    "category": "Pantry & Others",
    "price": 9.28,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality fresh pasta for your everyday needs."
  },
  {
    "name": "Premium Pasta",
    "category": "Pantry & Others",
    "price": 10.46,
    "stock": 176,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality premium pasta for your everyday needs."
  },
  {
    "name": "Value Pasta",
    "category": "Pantry & Others",
    "price": 1.03,
    "stock": 97,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality value pasta for your everyday needs."
  },
  {
    "name": "Local Pasta",
    "category": "Pantry & Others",
    "price": 9.93,
    "stock": 97,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality local pasta for your everyday needs."
  },
  {
    "name": "Imported Pasta",
    "category": "Pantry & Others",
    "price": 8.7,
    "stock": 21,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality imported pasta for your everyday needs."
  },
  {
    "name": "Farm-style Pasta",
    "category": "Pantry & Others",
    "price": 4.87,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality farm-style pasta for your everyday needs."
  },
  {
    "name": "Classic Pasta",
    "category": "Pantry & Others",
    "price": 1.31,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality classic pasta for your everyday needs."
  },
  {
    "name": "Deluxe Pasta",
    "category": "Pantry & Others",
    "price": 6.42,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality deluxe pasta for your everyday needs."
  },
  {
    "name": "Signature Pasta",
    "category": "Pantry & Others",
    "price": 4.94,
    "stock": 118,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
    "description": "High quality signature pasta for your everyday needs."
  },
  {
    "name": "Organic Oat",
    "category": "Pantry & Others",
    "price": 2.36,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality organic oat for your everyday needs."
  },
  {
    "name": "Fresh Oat",
    "category": "Pantry & Others",
    "price": 8.12,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality fresh oat for your everyday needs."
  },
  {
    "name": "Premium Oat",
    "category": "Pantry & Others",
    "price": 8.42,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality premium oat for your everyday needs."
  },
  {
    "name": "Value Oat",
    "category": "Pantry & Others",
    "price": 7.02,
    "stock": 128,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality value oat for your everyday needs."
  },
  {
    "name": "Local Oat",
    "category": "Pantry & Others",
    "price": 3.38,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality local oat for your everyday needs."
  },
  {
    "name": "Imported Oat",
    "category": "Pantry & Others",
    "price": 8.33,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality imported oat for your everyday needs."
  },
  {
    "name": "Farm-style Oat",
    "category": "Pantry & Others",
    "price": 1.51,
    "stock": 168,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality farm-style oat for your everyday needs."
  },
  {
    "name": "Classic Oat",
    "category": "Pantry & Others",
    "price": 2.6,
    "stock": 99,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality classic oat for your everyday needs."
  },
  {
    "name": "Deluxe Oat",
    "category": "Pantry & Others",
    "price": 7.72,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality deluxe oat for your everyday needs."
  },
  {
    "name": "Signature Oat",
    "category": "Pantry & Others",
    "price": 3.97,
    "stock": 79,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/500px-AvenaSativa3.jpg",
    "description": "High quality signature oat for your everyday needs."
  },
  {
    "name": "Organic Quinoa",
    "category": "Pantry & Others",
    "price": 3.55,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality organic quinoa for your everyday needs."
  },
  {
    "name": "Fresh Quinoa",
    "category": "Pantry & Others",
    "price": 9.75,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality fresh quinoa for your everyday needs."
  },
  {
    "name": "Premium Quinoa",
    "category": "Pantry & Others",
    "price": 8.43,
    "stock": 167,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality premium quinoa for your everyday needs."
  },
  {
    "name": "Value Quinoa",
    "category": "Pantry & Others",
    "price": 10.84,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality value quinoa for your everyday needs."
  },
  {
    "name": "Local Quinoa",
    "category": "Pantry & Others",
    "price": 10,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality local quinoa for your everyday needs."
  },
  {
    "name": "Imported Quinoa",
    "category": "Pantry & Others",
    "price": 10.08,
    "stock": 114,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality imported quinoa for your everyday needs."
  },
  {
    "name": "Farm-style Quinoa",
    "category": "Pantry & Others",
    "price": 4.26,
    "stock": 65,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality farm-style quinoa for your everyday needs."
  },
  {
    "name": "Classic Quinoa",
    "category": "Pantry & Others",
    "price": 9.8,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality classic quinoa for your everyday needs."
  },
  {
    "name": "Deluxe Quinoa",
    "category": "Pantry & Others",
    "price": 7.35,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality deluxe quinoa for your everyday needs."
  },
  {
    "name": "Signature Quinoa",
    "category": "Pantry & Others",
    "price": 4.71,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reismelde.jpg/500px-Reismelde.jpg",
    "description": "High quality signature quinoa for your everyday needs."
  },
  {
    "name": "Organic Flour",
    "category": "Pantry & Others",
    "price": 3.65,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality organic flour for your everyday needs."
  },
  {
    "name": "Fresh Flour",
    "category": "Pantry & Others",
    "price": 7.72,
    "stock": 151,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality fresh flour for your everyday needs."
  },
  {
    "name": "Premium Flour",
    "category": "Pantry & Others",
    "price": 6.08,
    "stock": 24,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality premium flour for your everyday needs."
  },
  {
    "name": "Value Flour",
    "category": "Pantry & Others",
    "price": 6.7,
    "stock": 105,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality value flour for your everyday needs."
  },
  {
    "name": "Local Flour",
    "category": "Pantry & Others",
    "price": 6.18,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality local flour for your everyday needs."
  },
  {
    "name": "Imported Flour",
    "category": "Pantry & Others",
    "price": 6.46,
    "stock": 109,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality imported flour for your everyday needs."
  },
  {
    "name": "Farm-style Flour",
    "category": "Pantry & Others",
    "price": 10.82,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality farm-style flour for your everyday needs."
  },
  {
    "name": "Classic Flour",
    "category": "Pantry & Others",
    "price": 6.14,
    "stock": 10,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality classic flour for your everyday needs."
  },
  {
    "name": "Deluxe Flour",
    "category": "Pantry & Others",
    "price": 9.09,
    "stock": 191,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality deluxe flour for your everyday needs."
  },
  {
    "name": "Signature Flour",
    "category": "Pantry & Others",
    "price": 4.07,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soy_powder.jpg/500px-Soy_powder.jpg",
    "description": "High quality signature flour for your everyday needs."
  },
  {
    "name": "Organic Sugar",
    "category": "Pantry & Others",
    "price": 5.52,
    "stock": 163,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality organic sugar for your everyday needs."
  },
  {
    "name": "Fresh Sugar",
    "category": "Pantry & Others",
    "price": 6.77,
    "stock": 118,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality fresh sugar for your everyday needs."
  },
  {
    "name": "Premium Sugar",
    "category": "Pantry & Others",
    "price": 7.2,
    "stock": 108,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality premium sugar for your everyday needs."
  },
  {
    "name": "Value Sugar",
    "category": "Pantry & Others",
    "price": 5.47,
    "stock": 198,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality value sugar for your everyday needs."
  },
  {
    "name": "Local Sugar",
    "category": "Pantry & Others",
    "price": 10.75,
    "stock": 89,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality local sugar for your everyday needs."
  },
  {
    "name": "Imported Sugar",
    "category": "Pantry & Others",
    "price": 9.42,
    "stock": 102,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality imported sugar for your everyday needs."
  },
  {
    "name": "Farm-style Sugar",
    "category": "Pantry & Others",
    "price": 4.99,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality farm-style sugar for your everyday needs."
  },
  {
    "name": "Classic Sugar",
    "category": "Pantry & Others",
    "price": 6.37,
    "stock": 142,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality classic sugar for your everyday needs."
  },
  {
    "name": "Deluxe Sugar",
    "category": "Pantry & Others",
    "price": 8.64,
    "stock": 147,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality deluxe sugar for your everyday needs."
  },
  {
    "name": "Signature Sugar",
    "category": "Pantry & Others",
    "price": 6.19,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/500px-Sucre_blanc_cassonade_complet_rapadura.jpg",
    "description": "High quality signature sugar for your everyday needs."
  },
  {
    "name": "Organic Salt",
    "category": "Pantry & Others",
    "price": 6.73,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality organic salt for your everyday needs."
  },
  {
    "name": "Fresh Salt",
    "category": "Pantry & Others",
    "price": 3.71,
    "stock": 61,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality fresh salt for your everyday needs."
  },
  {
    "name": "Premium Salt",
    "category": "Pantry & Others",
    "price": 10.88,
    "stock": 59,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality premium salt for your everyday needs."
  },
  {
    "name": "Value Salt",
    "category": "Pantry & Others",
    "price": 9.32,
    "stock": 103,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality value salt for your everyday needs."
  },
  {
    "name": "Local Salt",
    "category": "Pantry & Others",
    "price": 5.09,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality local salt for your everyday needs."
  },
  {
    "name": "Imported Salt",
    "category": "Pantry & Others",
    "price": 10.3,
    "stock": 131,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality imported salt for your everyday needs."
  },
  {
    "name": "Farm-style Salt",
    "category": "Pantry & Others",
    "price": 3.36,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality farm-style salt for your everyday needs."
  },
  {
    "name": "Classic Salt",
    "category": "Pantry & Others",
    "price": 7.62,
    "stock": 207,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality classic salt for your everyday needs."
  },
  {
    "name": "Deluxe Salt",
    "category": "Pantry & Others",
    "price": 6.07,
    "stock": 28,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality deluxe salt for your everyday needs."
  },
  {
    "name": "Signature Salt",
    "category": "Pantry & Others",
    "price": 6.36,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/500px-Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg",
    "description": "High quality signature salt for your everyday needs."
  },
  {
    "name": "Organic Black pepper",
    "category": "Pantry & Others",
    "price": 3.31,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality organic black pepper for your everyday needs."
  },
  {
    "name": "Fresh Black pepper",
    "category": "Pantry & Others",
    "price": 3.7,
    "stock": 16,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality fresh black pepper for your everyday needs."
  },
  {
    "name": "Premium Black pepper",
    "category": "Pantry & Others",
    "price": 1.17,
    "stock": 208,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality premium black pepper for your everyday needs."
  },
  {
    "name": "Value Black pepper",
    "category": "Pantry & Others",
    "price": 4.07,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality value black pepper for your everyday needs."
  },
  {
    "name": "Local Black pepper",
    "category": "Pantry & Others",
    "price": 6.25,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality local black pepper for your everyday needs."
  },
  {
    "name": "Imported Black pepper",
    "category": "Pantry & Others",
    "price": 2.56,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality imported black pepper for your everyday needs."
  },
  {
    "name": "Farm-style Black pepper",
    "category": "Pantry & Others",
    "price": 4.64,
    "stock": 207,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality farm-style black pepper for your everyday needs."
  },
  {
    "name": "Classic Black pepper",
    "category": "Pantry & Others",
    "price": 8.74,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality classic black pepper for your everyday needs."
  },
  {
    "name": "Deluxe Black pepper",
    "category": "Pantry & Others",
    "price": 3,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality deluxe black pepper for your everyday needs."
  },
  {
    "name": "Signature Black pepper",
    "category": "Pantry & Others",
    "price": 3.5,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    "description": "High quality signature black pepper for your everyday needs."
  },
  {
    "name": "Organic Olive oil",
    "category": "Pantry & Others",
    "price": 5.45,
    "stock": 45,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality organic olive oil for your everyday needs."
  },
  {
    "name": "Fresh Olive oil",
    "category": "Pantry & Others",
    "price": 10.29,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality fresh olive oil for your everyday needs."
  },
  {
    "name": "Premium Olive oil",
    "category": "Pantry & Others",
    "price": 3.94,
    "stock": 81,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality premium olive oil for your everyday needs."
  },
  {
    "name": "Value Olive oil",
    "category": "Pantry & Others",
    "price": 8.86,
    "stock": 203,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality value olive oil for your everyday needs."
  },
  {
    "name": "Local Olive oil",
    "category": "Pantry & Others",
    "price": 7.82,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality local olive oil for your everyday needs."
  },
  {
    "name": "Imported Olive oil",
    "category": "Pantry & Others",
    "price": 9.61,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality imported olive oil for your everyday needs."
  },
  {
    "name": "Farm-style Olive oil",
    "category": "Pantry & Others",
    "price": 8.05,
    "stock": 111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality farm-style olive oil for your everyday needs."
  },
  {
    "name": "Classic Olive oil",
    "category": "Pantry & Others",
    "price": 5.21,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality classic olive oil for your everyday needs."
  },
  {
    "name": "Deluxe Olive oil",
    "category": "Pantry & Others",
    "price": 2.17,
    "stock": 23,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality deluxe olive oil for your everyday needs."
  },
  {
    "name": "Signature Olive oil",
    "category": "Pantry & Others",
    "price": 2.77,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oliven_V1.jpg/500px-Oliven_V1.jpg",
    "description": "High quality signature olive oil for your everyday needs."
  },
  {
    "name": "Organic Vinegar",
    "category": "Pantry & Others",
    "price": 9.74,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality organic vinegar for your everyday needs."
  },
  {
    "name": "Fresh Vinegar",
    "category": "Pantry & Others",
    "price": 7.17,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality fresh vinegar for your everyday needs."
  },
  {
    "name": "Premium Vinegar",
    "category": "Pantry & Others",
    "price": 9.31,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality premium vinegar for your everyday needs."
  },
  {
    "name": "Value Vinegar",
    "category": "Pantry & Others",
    "price": 6.02,
    "stock": 26,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality value vinegar for your everyday needs."
  },
  {
    "name": "Local Vinegar",
    "category": "Pantry & Others",
    "price": 4.93,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality local vinegar for your everyday needs."
  },
  {
    "name": "Imported Vinegar",
    "category": "Pantry & Others",
    "price": 7.52,
    "stock": 55,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality imported vinegar for your everyday needs."
  },
  {
    "name": "Farm-style Vinegar",
    "category": "Pantry & Others",
    "price": 6.45,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality farm-style vinegar for your everyday needs."
  },
  {
    "name": "Classic Vinegar",
    "category": "Pantry & Others",
    "price": 3.16,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality classic vinegar for your everyday needs."
  },
  {
    "name": "Deluxe Vinegar",
    "category": "Pantry & Others",
    "price": 1.96,
    "stock": 88,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality deluxe vinegar for your everyday needs."
  },
  {
    "name": "Signature Vinegar",
    "category": "Pantry & Others",
    "price": 6.77,
    "stock": 207,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eguilles_20110828_14.jpg/500px-Eguilles_20110828_14.jpg",
    "description": "High quality signature vinegar for your everyday needs."
  },
  {
    "name": "Organic Ketchup",
    "category": "Pantry & Others",
    "price": 7.66,
    "stock": 32,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality organic ketchup for your everyday needs."
  },
  {
    "name": "Fresh Ketchup",
    "category": "Pantry & Others",
    "price": 4.45,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality fresh ketchup for your everyday needs."
  },
  {
    "name": "Premium Ketchup",
    "category": "Pantry & Others",
    "price": 10.82,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality premium ketchup for your everyday needs."
  },
  {
    "name": "Value Ketchup",
    "category": "Pantry & Others",
    "price": 3.09,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality value ketchup for your everyday needs."
  },
  {
    "name": "Local Ketchup",
    "category": "Pantry & Others",
    "price": 10.31,
    "stock": 142,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality local ketchup for your everyday needs."
  },
  {
    "name": "Imported Ketchup",
    "category": "Pantry & Others",
    "price": 2.55,
    "stock": 90,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality imported ketchup for your everyday needs."
  },
  {
    "name": "Farm-style Ketchup",
    "category": "Pantry & Others",
    "price": 5.19,
    "stock": 142,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality farm-style ketchup for your everyday needs."
  },
  {
    "name": "Classic Ketchup",
    "category": "Pantry & Others",
    "price": 6.14,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality classic ketchup for your everyday needs."
  },
  {
    "name": "Deluxe Ketchup",
    "category": "Pantry & Others",
    "price": 4.8,
    "stock": 71,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality deluxe ketchup for your everyday needs."
  },
  {
    "name": "Signature Ketchup",
    "category": "Pantry & Others",
    "price": 1.08,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ketchup_20160918_181342_%28cropped%29.jpg/500px-Ketchup_20160918_181342_%28cropped%29.jpg",
    "description": "High quality signature ketchup for your everyday needs."
  },
  {
    "name": "Organic Mustard",
    "category": "Pantry & Others",
    "price": 10.65,
    "stock": 185,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality organic mustard for your everyday needs."
  },
  {
    "name": "Fresh Mustard",
    "category": "Pantry & Others",
    "price": 5.59,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality fresh mustard for your everyday needs."
  },
  {
    "name": "Premium Mustard",
    "category": "Pantry & Others",
    "price": 5.78,
    "stock": 81,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality premium mustard for your everyday needs."
  },
  {
    "name": "Value Mustard",
    "category": "Pantry & Others",
    "price": 9.71,
    "stock": 21,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality value mustard for your everyday needs."
  },
  {
    "name": "Local Mustard",
    "category": "Pantry & Others",
    "price": 9.02,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality local mustard for your everyday needs."
  },
  {
    "name": "Imported Mustard",
    "category": "Pantry & Others",
    "price": 9.95,
    "stock": 158,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality imported mustard for your everyday needs."
  },
  {
    "name": "Farm-style Mustard",
    "category": "Pantry & Others",
    "price": 10.66,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality farm-style mustard for your everyday needs."
  },
  {
    "name": "Classic Mustard",
    "category": "Pantry & Others",
    "price": 4.6,
    "stock": 61,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality classic mustard for your everyday needs."
  },
  {
    "name": "Deluxe Mustard",
    "category": "Pantry & Others",
    "price": 4.09,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality deluxe mustard for your everyday needs."
  },
  {
    "name": "Signature Mustard",
    "category": "Pantry & Others",
    "price": 4.24,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mustard.JPG/500px-Mustard.JPG",
    "description": "High quality signature mustard for your everyday needs."
  },
  {
    "name": "Organic Mayonnaise",
    "category": "Pantry & Others",
    "price": 6.74,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality organic mayonnaise for your everyday needs."
  },
  {
    "name": "Fresh Mayonnaise",
    "category": "Pantry & Others",
    "price": 6.65,
    "stock": 106,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality fresh mayonnaise for your everyday needs."
  },
  {
    "name": "Premium Mayonnaise",
    "category": "Pantry & Others",
    "price": 10.27,
    "stock": 86,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality premium mayonnaise for your everyday needs."
  },
  {
    "name": "Value Mayonnaise",
    "category": "Pantry & Others",
    "price": 4.36,
    "stock": 129,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality value mayonnaise for your everyday needs."
  },
  {
    "name": "Local Mayonnaise",
    "category": "Pantry & Others",
    "price": 4.57,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality local mayonnaise for your everyday needs."
  },
  {
    "name": "Imported Mayonnaise",
    "category": "Pantry & Others",
    "price": 8.68,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality imported mayonnaise for your everyday needs."
  },
  {
    "name": "Farm-style Mayonnaise",
    "category": "Pantry & Others",
    "price": 4.03,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality farm-style mayonnaise for your everyday needs."
  },
  {
    "name": "Classic Mayonnaise",
    "category": "Pantry & Others",
    "price": 1.83,
    "stock": 57,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality classic mayonnaise for your everyday needs."
  },
  {
    "name": "Deluxe Mayonnaise",
    "category": "Pantry & Others",
    "price": 6.71,
    "stock": 124,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality deluxe mayonnaise for your everyday needs."
  },
  {
    "name": "Signature Mayonnaise",
    "category": "Pantry & Others",
    "price": 2.11,
    "stock": 155,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mayonnaise_%281%29.jpg/500px-Mayonnaise_%281%29.jpg",
    "description": "High quality signature mayonnaise for your everyday needs."
  },
  {
    "name": "Organic Soy sauce",
    "category": "Pantry & Others",
    "price": 9.19,
    "stock": 138,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality organic soy sauce for your everyday needs."
  },
  {
    "name": "Fresh Soy sauce",
    "category": "Pantry & Others",
    "price": 5.06,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality fresh soy sauce for your everyday needs."
  },
  {
    "name": "Premium Soy sauce",
    "category": "Pantry & Others",
    "price": 9.22,
    "stock": 40,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality premium soy sauce for your everyday needs."
  },
  {
    "name": "Value Soy sauce",
    "category": "Pantry & Others",
    "price": 1.41,
    "stock": 79,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality value soy sauce for your everyday needs."
  },
  {
    "name": "Local Soy sauce",
    "category": "Pantry & Others",
    "price": 10.29,
    "stock": 185,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality local soy sauce for your everyday needs."
  },
  {
    "name": "Imported Soy sauce",
    "category": "Pantry & Others",
    "price": 6.69,
    "stock": 14,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality imported soy sauce for your everyday needs."
  },
  {
    "name": "Farm-style Soy sauce",
    "category": "Pantry & Others",
    "price": 5.32,
    "stock": 19,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality farm-style soy sauce for your everyday needs."
  },
  {
    "name": "Classic Soy sauce",
    "category": "Pantry & Others",
    "price": 1.79,
    "stock": 38,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality classic soy sauce for your everyday needs."
  },
  {
    "name": "Deluxe Soy sauce",
    "category": "Pantry & Others",
    "price": 3.94,
    "stock": 208,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality deluxe soy sauce for your everyday needs."
  },
  {
    "name": "Signature Soy sauce",
    "category": "Pantry & Others",
    "price": 3.6,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/500px-Soy_sauce_2.jpg",
    "description": "High quality signature soy sauce for your everyday needs."
  },
  {
    "name": "Organic Peanut butter",
    "category": "Pantry & Others",
    "price": 2.05,
    "stock": 117,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality organic peanut butter for your everyday needs."
  },
  {
    "name": "Fresh Peanut butter",
    "category": "Pantry & Others",
    "price": 6.26,
    "stock": 16,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality fresh peanut butter for your everyday needs."
  },
  {
    "name": "Premium Peanut butter",
    "category": "Pantry & Others",
    "price": 4.83,
    "stock": 20,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality premium peanut butter for your everyday needs."
  },
  {
    "name": "Value Peanut butter",
    "category": "Pantry & Others",
    "price": 2.58,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality value peanut butter for your everyday needs."
  },
  {
    "name": "Local Peanut butter",
    "category": "Pantry & Others",
    "price": 10.76,
    "stock": 179,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality local peanut butter for your everyday needs."
  },
  {
    "name": "Imported Peanut butter",
    "category": "Pantry & Others",
    "price": 8.08,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality imported peanut butter for your everyday needs."
  },
  {
    "name": "Farm-style Peanut butter",
    "category": "Pantry & Others",
    "price": 3.67,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality farm-style peanut butter for your everyday needs."
  },
  {
    "name": "Classic Peanut butter",
    "category": "Pantry & Others",
    "price": 5.94,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality classic peanut butter for your everyday needs."
  },
  {
    "name": "Deluxe Peanut butter",
    "category": "Pantry & Others",
    "price": 8.44,
    "stock": 127,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality deluxe peanut butter for your everyday needs."
  },
  {
    "name": "Signature Peanut butter",
    "category": "Pantry & Others",
    "price": 9,
    "stock": 72,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/500px-2020-03-24_20_57_22_An_open_jar_of_Skippy_Creamy_Peanut_Butter_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
    "description": "High quality signature peanut butter for your everyday needs."
  },
  {
    "name": "Organic Jam",
    "category": "Pantry & Others",
    "price": 7.5,
    "stock": 163,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality organic jam for your everyday needs."
  },
  {
    "name": "Fresh Jam",
    "category": "Pantry & Others",
    "price": 5.78,
    "stock": 157,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality fresh jam for your everyday needs."
  },
  {
    "name": "Premium Jam",
    "category": "Pantry & Others",
    "price": 7.15,
    "stock": 184,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality premium jam for your everyday needs."
  },
  {
    "name": "Value Jam",
    "category": "Pantry & Others",
    "price": 9.98,
    "stock": 71,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality value jam for your everyday needs."
  },
  {
    "name": "Local Jam",
    "category": "Pantry & Others",
    "price": 6.34,
    "stock": 193,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality local jam for your everyday needs."
  },
  {
    "name": "Imported Jam",
    "category": "Pantry & Others",
    "price": 2.74,
    "stock": 170,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality imported jam for your everyday needs."
  },
  {
    "name": "Farm-style Jam",
    "category": "Pantry & Others",
    "price": 3.76,
    "stock": 158,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality farm-style jam for your everyday needs."
  },
  {
    "name": "Classic Jam",
    "category": "Pantry & Others",
    "price": 10.93,
    "stock": 133,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality classic jam for your everyday needs."
  },
  {
    "name": "Deluxe Jam",
    "category": "Pantry & Others",
    "price": 7.74,
    "stock": 79,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality deluxe jam for your everyday needs."
  },
  {
    "name": "Signature Jam",
    "category": "Pantry & Others",
    "price": 3.64,
    "stock": 167,
    "image": "https://via.placeholder.com/500?text=Jam",
    "description": "High quality signature jam for your everyday needs."
  },
  {
    "name": "Organic Honey",
    "category": "Pantry & Others",
    "price": 4.72,
    "stock": 185,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality organic honey for your everyday needs."
  },
  {
    "name": "Fresh Honey",
    "category": "Pantry & Others",
    "price": 5.49,
    "stock": 28,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality fresh honey for your everyday needs."
  },
  {
    "name": "Premium Honey",
    "category": "Pantry & Others",
    "price": 7.51,
    "stock": 10,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality premium honey for your everyday needs."
  },
  {
    "name": "Value Honey",
    "category": "Pantry & Others",
    "price": 5.31,
    "stock": 114,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality value honey for your everyday needs."
  },
  {
    "name": "Local Honey",
    "category": "Pantry & Others",
    "price": 7,
    "stock": 30,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality local honey for your everyday needs."
  },
  {
    "name": "Imported Honey",
    "category": "Pantry & Others",
    "price": 9.41,
    "stock": 177,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality imported honey for your everyday needs."
  },
  {
    "name": "Farm-style Honey",
    "category": "Pantry & Others",
    "price": 2.23,
    "stock": 42,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality farm-style honey for your everyday needs."
  },
  {
    "name": "Classic Honey",
    "category": "Pantry & Others",
    "price": 6.33,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality classic honey for your everyday needs."
  },
  {
    "name": "Deluxe Honey",
    "category": "Pantry & Others",
    "price": 5.11,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality deluxe honey for your everyday needs."
  },
  {
    "name": "Signature Honey",
    "category": "Pantry & Others",
    "price": 2.04,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
    "description": "High quality signature honey for your everyday needs."
  },
  {
    "name": "Organic Maple syrup",
    "category": "Pantry & Others",
    "price": 10.25,
    "stock": 139,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality organic maple syrup for your everyday needs."
  },
  {
    "name": "Fresh Maple syrup",
    "category": "Pantry & Others",
    "price": 1.89,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality fresh maple syrup for your everyday needs."
  },
  {
    "name": "Premium Maple syrup",
    "category": "Pantry & Others",
    "price": 2.96,
    "stock": 81,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality premium maple syrup for your everyday needs."
  },
  {
    "name": "Value Maple syrup",
    "category": "Pantry & Others",
    "price": 4.87,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality value maple syrup for your everyday needs."
  },
  {
    "name": "Local Maple syrup",
    "category": "Pantry & Others",
    "price": 8.96,
    "stock": 35,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality local maple syrup for your everyday needs."
  },
  {
    "name": "Imported Maple syrup",
    "category": "Pantry & Others",
    "price": 8.65,
    "stock": 95,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality imported maple syrup for your everyday needs."
  },
  {
    "name": "Farm-style Maple syrup",
    "category": "Pantry & Others",
    "price": 7.52,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality farm-style maple syrup for your everyday needs."
  },
  {
    "name": "Classic Maple syrup",
    "category": "Pantry & Others",
    "price": 4.37,
    "stock": 203,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality classic maple syrup for your everyday needs."
  },
  {
    "name": "Deluxe Maple syrup",
    "category": "Pantry & Others",
    "price": 2.85,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality deluxe maple syrup for your everyday needs."
  },
  {
    "name": "Signature Maple syrup",
    "category": "Pantry & Others",
    "price": 2.78,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maple_syrup.jpg/500px-Maple_syrup.jpg",
    "description": "High quality signature maple syrup for your everyday needs."
  },
  {
    "name": "Organic Coffee",
    "category": "Pantry & Others",
    "price": 10.01,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality organic coffee for your everyday needs."
  },
  {
    "name": "Fresh Coffee",
    "category": "Pantry & Others",
    "price": 3.18,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality fresh coffee for your everyday needs."
  },
  {
    "name": "Premium Coffee",
    "category": "Pantry & Others",
    "price": 4.9,
    "stock": 16,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality premium coffee for your everyday needs."
  },
  {
    "name": "Value Coffee",
    "category": "Pantry & Others",
    "price": 7.95,
    "stock": 172,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality value coffee for your everyday needs."
  },
  {
    "name": "Local Coffee",
    "category": "Pantry & Others",
    "price": 4.98,
    "stock": 44,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality local coffee for your everyday needs."
  },
  {
    "name": "Imported Coffee",
    "category": "Pantry & Others",
    "price": 6.67,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality imported coffee for your everyday needs."
  },
  {
    "name": "Farm-style Coffee",
    "category": "Pantry & Others",
    "price": 1.61,
    "stock": 27,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality farm-style coffee for your everyday needs."
  },
  {
    "name": "Classic Coffee",
    "category": "Pantry & Others",
    "price": 10.47,
    "stock": 51,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality classic coffee for your everyday needs."
  },
  {
    "name": "Deluxe Coffee",
    "category": "Pantry & Others",
    "price": 4.51,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality deluxe coffee for your everyday needs."
  },
  {
    "name": "Signature Coffee",
    "category": "Pantry & Others",
    "price": 9.61,
    "stock": 80,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg",
    "description": "High quality signature coffee for your everyday needs."
  },
  {
    "name": "Organic Tea",
    "category": "Pantry & Others",
    "price": 3.87,
    "stock": 168,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality organic tea for your everyday needs."
  },
  {
    "name": "Fresh Tea",
    "category": "Pantry & Others",
    "price": 7.74,
    "stock": 84,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality fresh tea for your everyday needs."
  },
  {
    "name": "Premium Tea",
    "category": "Pantry & Others",
    "price": 9.69,
    "stock": 33,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality premium tea for your everyday needs."
  },
  {
    "name": "Value Tea",
    "category": "Pantry & Others",
    "price": 1.09,
    "stock": 24,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality value tea for your everyday needs."
  },
  {
    "name": "Local Tea",
    "category": "Pantry & Others",
    "price": 9.46,
    "stock": 107,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality local tea for your everyday needs."
  },
  {
    "name": "Imported Tea",
    "category": "Pantry & Others",
    "price": 8.56,
    "stock": 34,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality imported tea for your everyday needs."
  },
  {
    "name": "Farm-style Tea",
    "category": "Pantry & Others",
    "price": 4.33,
    "stock": 54,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality farm-style tea for your everyday needs."
  },
  {
    "name": "Classic Tea",
    "category": "Pantry & Others",
    "price": 2.09,
    "stock": 134,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality classic tea for your everyday needs."
  },
  {
    "name": "Deluxe Tea",
    "category": "Pantry & Others",
    "price": 2.66,
    "stock": 114,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality deluxe tea for your everyday needs."
  },
  {
    "name": "Signature Tea",
    "category": "Pantry & Others",
    "price": 6.58,
    "stock": 97,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Longjing_tea_steeping_in_gaiwan.jpg/500px-Longjing_tea_steeping_in_gaiwan.jpg",
    "description": "High quality signature tea for your everyday needs."
  },
  {
    "name": "Organic Juice",
    "category": "Pantry & Others",
    "price": 6.73,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality organic juice for your everyday needs."
  },
  {
    "name": "Fresh Juice",
    "category": "Pantry & Others",
    "price": 8.77,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality fresh juice for your everyday needs."
  },
  {
    "name": "Premium Juice",
    "category": "Pantry & Others",
    "price": 3.81,
    "stock": 192,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality premium juice for your everyday needs."
  },
  {
    "name": "Value Juice",
    "category": "Pantry & Others",
    "price": 6.85,
    "stock": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality value juice for your everyday needs."
  },
  {
    "name": "Local Juice",
    "category": "Pantry & Others",
    "price": 3.68,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality local juice for your everyday needs."
  },
  {
    "name": "Imported Juice",
    "category": "Pantry & Others",
    "price": 1.45,
    "stock": 75,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality imported juice for your everyday needs."
  },
  {
    "name": "Farm-style Juice",
    "category": "Pantry & Others",
    "price": 2.13,
    "stock": 13,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality farm-style juice for your everyday needs."
  },
  {
    "name": "Classic Juice",
    "category": "Pantry & Others",
    "price": 1.78,
    "stock": 21,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality classic juice for your everyday needs."
  },
  {
    "name": "Deluxe Juice",
    "category": "Pantry & Others",
    "price": 6.8,
    "stock": 83,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality deluxe juice for your everyday needs."
  },
  {
    "name": "Signature Juice",
    "category": "Pantry & Others",
    "price": 6.1,
    "stock": 72,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/500px-Orange_juice_1.jpg",
    "description": "High quality signature juice for your everyday needs."
  },
  {
    "name": "Organic Soft drink",
    "category": "Pantry & Others",
    "price": 6.16,
    "stock": 54,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality organic soft drink for your everyday needs."
  },
  {
    "name": "Fresh Soft drink",
    "category": "Pantry & Others",
    "price": 5.82,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality fresh soft drink for your everyday needs."
  },
  {
    "name": "Premium Soft drink",
    "category": "Pantry & Others",
    "price": 4.38,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality premium soft drink for your everyday needs."
  },
  {
    "name": "Value Soft drink",
    "category": "Pantry & Others",
    "price": 1.06,
    "stock": 155,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality value soft drink for your everyday needs."
  },
  {
    "name": "Local Soft drink",
    "category": "Pantry & Others",
    "price": 10.45,
    "stock": 127,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality local soft drink for your everyday needs."
  },
  {
    "name": "Imported Soft drink",
    "category": "Pantry & Others",
    "price": 3.86,
    "stock": 74,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality imported soft drink for your everyday needs."
  },
  {
    "name": "Farm-style Soft drink",
    "category": "Pantry & Others",
    "price": 5.34,
    "stock": 50,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality farm-style soft drink for your everyday needs."
  },
  {
    "name": "Classic Soft drink",
    "category": "Pantry & Others",
    "price": 7.61,
    "stock": 202,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality classic soft drink for your everyday needs."
  },
  {
    "name": "Deluxe Soft drink",
    "category": "Pantry & Others",
    "price": 10.01,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality deluxe soft drink for your everyday needs."
  },
  {
    "name": "Signature Soft drink",
    "category": "Pantry & Others",
    "price": 6.52,
    "stock": 189,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
    "description": "High quality signature soft drink for your everyday needs."
  },
  {
    "name": "Organic Drinking water",
    "category": "Pantry & Others",
    "price": 10.03,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality organic drinking water for your everyday needs."
  },
  {
    "name": "Fresh Drinking water",
    "category": "Pantry & Others",
    "price": 10.67,
    "stock": 130,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality fresh drinking water for your everyday needs."
  },
  {
    "name": "Premium Drinking water",
    "category": "Pantry & Others",
    "price": 2.79,
    "stock": 49,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality premium drinking water for your everyday needs."
  },
  {
    "name": "Value Drinking water",
    "category": "Pantry & Others",
    "price": 2.18,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality value drinking water for your everyday needs."
  },
  {
    "name": "Local Drinking water",
    "category": "Pantry & Others",
    "price": 10.52,
    "stock": 43,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality local drinking water for your everyday needs."
  },
  {
    "name": "Imported Drinking water",
    "category": "Pantry & Others",
    "price": 2.68,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality imported drinking water for your everyday needs."
  },
  {
    "name": "Farm-style Drinking water",
    "category": "Pantry & Others",
    "price": 2.53,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality farm-style drinking water for your everyday needs."
  },
  {
    "name": "Classic Drinking water",
    "category": "Pantry & Others",
    "price": 3.92,
    "stock": 52,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality classic drinking water for your everyday needs."
  },
  {
    "name": "Deluxe Drinking water",
    "category": "Pantry & Others",
    "price": 7.79,
    "stock": 159,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality deluxe drinking water for your everyday needs."
  },
  {
    "name": "Signature Drinking water",
    "category": "Pantry & Others",
    "price": 9.58,
    "stock": 11,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg/500px-Clean_water_for_a_village_in_West_Lombok_%2810686572086%29.jpg",
    "description": "High quality signature drinking water for your everyday needs."
  },
  {
    "name": "Organic Beer",
    "category": "Pantry & Others",
    "price": 8.52,
    "stock": 207,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality organic beer for your everyday needs."
  },
  {
    "name": "Fresh Beer",
    "category": "Pantry & Others",
    "price": 6.53,
    "stock": 194,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality fresh beer for your everyday needs."
  },
  {
    "name": "Premium Beer",
    "category": "Pantry & Others",
    "price": 6.87,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality premium beer for your everyday needs."
  },
  {
    "name": "Value Beer",
    "category": "Pantry & Others",
    "price": 3.01,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality value beer for your everyday needs."
  },
  {
    "name": "Local Beer",
    "category": "Pantry & Others",
    "price": 4.45,
    "stock": 119,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality local beer for your everyday needs."
  },
  {
    "name": "Imported Beer",
    "category": "Pantry & Others",
    "price": 6.4,
    "stock": 152,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality imported beer for your everyday needs."
  },
  {
    "name": "Farm-style Beer",
    "category": "Pantry & Others",
    "price": 3.84,
    "stock": 109,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality farm-style beer for your everyday needs."
  },
  {
    "name": "Classic Beer",
    "category": "Pantry & Others",
    "price": 9.78,
    "stock": 77,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality classic beer for your everyday needs."
  },
  {
    "name": "Deluxe Beer",
    "category": "Pantry & Others",
    "price": 7.51,
    "stock": 56,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality deluxe beer for your everyday needs."
  },
  {
    "name": "Signature Beer",
    "category": "Pantry & Others",
    "price": 7.55,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg/500px-Hacker-Pschorr_Oktoberfest_Girl_Remix.jpg",
    "description": "High quality signature beer for your everyday needs."
  },
  {
    "name": "Organic Wine",
    "category": "Pantry & Others",
    "price": 1.52,
    "stock": 52,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality organic wine for your everyday needs."
  },
  {
    "name": "Fresh Wine",
    "category": "Pantry & Others",
    "price": 6.63,
    "stock": 116,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality fresh wine for your everyday needs."
  },
  {
    "name": "Premium Wine",
    "category": "Pantry & Others",
    "price": 8.92,
    "stock": 136,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality premium wine for your everyday needs."
  },
  {
    "name": "Value Wine",
    "category": "Pantry & Others",
    "price": 4.02,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality value wine for your everyday needs."
  },
  {
    "name": "Local Wine",
    "category": "Pantry & Others",
    "price": 9.11,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality local wine for your everyday needs."
  },
  {
    "name": "Imported Wine",
    "category": "Pantry & Others",
    "price": 9.58,
    "stock": 205,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality imported wine for your everyday needs."
  },
  {
    "name": "Farm-style Wine",
    "category": "Pantry & Others",
    "price": 6.66,
    "stock": 110,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality farm-style wine for your everyday needs."
  },
  {
    "name": "Classic Wine",
    "category": "Pantry & Others",
    "price": 4.19,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality classic wine for your everyday needs."
  },
  {
    "name": "Deluxe Wine",
    "category": "Pantry & Others",
    "price": 8.76,
    "stock": 137,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality deluxe wine for your everyday needs."
  },
  {
    "name": "Signature Wine",
    "category": "Pantry & Others",
    "price": 9.86,
    "stock": 33,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Red_and_white_wine_in_glass.jpg/500px-Red_and_white_wine_in_glass.jpg",
    "description": "High quality signature wine for your everyday needs."
  },
  {
    "name": "Organic Potato chip",
    "category": "Pantry & Others",
    "price": 9.51,
    "stock": 87,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality organic potato chip for your everyday needs."
  },
  {
    "name": "Fresh Potato chip",
    "category": "Pantry & Others",
    "price": 10.72,
    "stock": 112,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality fresh potato chip for your everyday needs."
  },
  {
    "name": "Premium Potato chip",
    "category": "Pantry & Others",
    "price": 5.46,
    "stock": 170,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality premium potato chip for your everyday needs."
  },
  {
    "name": "Value Potato chip",
    "category": "Pantry & Others",
    "price": 1.93,
    "stock": 149,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality value potato chip for your everyday needs."
  },
  {
    "name": "Local Potato chip",
    "category": "Pantry & Others",
    "price": 4.92,
    "stock": 134,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality local potato chip for your everyday needs."
  },
  {
    "name": "Imported Potato chip",
    "category": "Pantry & Others",
    "price": 9.52,
    "stock": 156,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality imported potato chip for your everyday needs."
  },
  {
    "name": "Farm-style Potato chip",
    "category": "Pantry & Others",
    "price": 8.66,
    "stock": 167,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality farm-style potato chip for your everyday needs."
  },
  {
    "name": "Classic Potato chip",
    "category": "Pantry & Others",
    "price": 3.43,
    "stock": 41,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality classic potato chip for your everyday needs."
  },
  {
    "name": "Deluxe Potato chip",
    "category": "Pantry & Others",
    "price": 6.86,
    "stock": 101,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality deluxe potato chip for your everyday needs."
  },
  {
    "name": "Signature Potato chip",
    "category": "Pantry & Others",
    "price": 3.68,
    "stock": 10,
    "image": "https://via.placeholder.com/500?text=Potato%20chip",
    "description": "High quality signature potato chip for your everyday needs."
  },
  {
    "name": "Organic Pretzel",
    "category": "Pantry & Others",
    "price": 9.69,
    "stock": 131,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality organic pretzel for your everyday needs."
  },
  {
    "name": "Fresh Pretzel",
    "category": "Pantry & Others",
    "price": 9.29,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality fresh pretzel for your everyday needs."
  },
  {
    "name": "Premium Pretzel",
    "category": "Pantry & Others",
    "price": 9.37,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality premium pretzel for your everyday needs."
  },
  {
    "name": "Value Pretzel",
    "category": "Pantry & Others",
    "price": 4.6,
    "stock": 114,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality value pretzel for your everyday needs."
  },
  {
    "name": "Local Pretzel",
    "category": "Pantry & Others",
    "price": 9.33,
    "stock": 122,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality local pretzel for your everyday needs."
  },
  {
    "name": "Imported Pretzel",
    "category": "Pantry & Others",
    "price": 9.97,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality imported pretzel for your everyday needs."
  },
  {
    "name": "Farm-style Pretzel",
    "category": "Pantry & Others",
    "price": 8.37,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality farm-style pretzel for your everyday needs."
  },
  {
    "name": "Classic Pretzel",
    "category": "Pantry & Others",
    "price": 7.82,
    "stock": 146,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality classic pretzel for your everyday needs."
  },
  {
    "name": "Deluxe Pretzel",
    "category": "Pantry & Others",
    "price": 8.24,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality deluxe pretzel for your everyday needs."
  },
  {
    "name": "Signature Pretzel",
    "category": "Pantry & Others",
    "price": 10.06,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/500px-BrezelnSalz02_%28cropped%29.JPG",
    "description": "High quality signature pretzel for your everyday needs."
  },
  {
    "name": "Organic Popcorn",
    "category": "Pantry & Others",
    "price": 1.98,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality organic popcorn for your everyday needs."
  },
  {
    "name": "Fresh Popcorn",
    "category": "Pantry & Others",
    "price": 1.36,
    "stock": 34,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality fresh popcorn for your everyday needs."
  },
  {
    "name": "Premium Popcorn",
    "category": "Pantry & Others",
    "price": 9.45,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality premium popcorn for your everyday needs."
  },
  {
    "name": "Value Popcorn",
    "category": "Pantry & Others",
    "price": 9.93,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality value popcorn for your everyday needs."
  },
  {
    "name": "Local Popcorn",
    "category": "Pantry & Others",
    "price": 4.17,
    "stock": 193,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality local popcorn for your everyday needs."
  },
  {
    "name": "Imported Popcorn",
    "category": "Pantry & Others",
    "price": 7.54,
    "stock": 18,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality imported popcorn for your everyday needs."
  },
  {
    "name": "Farm-style Popcorn",
    "category": "Pantry & Others",
    "price": 7.67,
    "stock": 145,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality farm-style popcorn for your everyday needs."
  },
  {
    "name": "Classic Popcorn",
    "category": "Pantry & Others",
    "price": 9.97,
    "stock": 98,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality classic popcorn for your everyday needs."
  },
  {
    "name": "Deluxe Popcorn",
    "category": "Pantry & Others",
    "price": 8.98,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality deluxe popcorn for your everyday needs."
  },
  {
    "name": "Signature Popcorn",
    "category": "Pantry & Others",
    "price": 7.66,
    "stock": 150,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/500px-Popcorn_-_Studio_-_2011.jpg",
    "description": "High quality signature popcorn for your everyday needs."
  },
  {
    "name": "Organic Cookie",
    "category": "Pantry & Others",
    "price": 5.13,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality organic cookie for your everyday needs."
  },
  {
    "name": "Fresh Cookie",
    "category": "Pantry & Others",
    "price": 1.87,
    "stock": 103,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality fresh cookie for your everyday needs."
  },
  {
    "name": "Premium Cookie",
    "category": "Pantry & Others",
    "price": 4.27,
    "stock": 138,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality premium cookie for your everyday needs."
  },
  {
    "name": "Value Cookie",
    "category": "Pantry & Others",
    "price": 3.86,
    "stock": 200,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality value cookie for your everyday needs."
  },
  {
    "name": "Local Cookie",
    "category": "Pantry & Others",
    "price": 1.71,
    "stock": 59,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality local cookie for your everyday needs."
  },
  {
    "name": "Imported Cookie",
    "category": "Pantry & Others",
    "price": 5.68,
    "stock": 100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality imported cookie for your everyday needs."
  },
  {
    "name": "Farm-style Cookie",
    "category": "Pantry & Others",
    "price": 8.1,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality farm-style cookie for your everyday needs."
  },
  {
    "name": "Classic Cookie",
    "category": "Pantry & Others",
    "price": 6.59,
    "stock": 52,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality classic cookie for your everyday needs."
  },
  {
    "name": "Deluxe Cookie",
    "category": "Pantry & Others",
    "price": 3.7,
    "stock": 190,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality deluxe cookie for your everyday needs."
  },
  {
    "name": "Signature Cookie",
    "category": "Pantry & Others",
    "price": 8.38,
    "stock": 169,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/500px-Choco_chip_cookie.png",
    "description": "High quality signature cookie for your everyday needs."
  },
  {
    "name": "Organic Chocolate",
    "category": "Pantry & Others",
    "price": 4.07,
    "stock": 91,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality organic chocolate for your everyday needs."
  },
  {
    "name": "Fresh Chocolate",
    "category": "Pantry & Others",
    "price": 2.83,
    "stock": 198,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality fresh chocolate for your everyday needs."
  },
  {
    "name": "Premium Chocolate",
    "category": "Pantry & Others",
    "price": 6.52,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality premium chocolate for your everyday needs."
  },
  {
    "name": "Value Chocolate",
    "category": "Pantry & Others",
    "price": 5.84,
    "stock": 183,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality value chocolate for your everyday needs."
  },
  {
    "name": "Local Chocolate",
    "category": "Pantry & Others",
    "price": 8.8,
    "stock": 199,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality local chocolate for your everyday needs."
  },
  {
    "name": "Imported Chocolate",
    "category": "Pantry & Others",
    "price": 7.32,
    "stock": 112,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality imported chocolate for your everyday needs."
  },
  {
    "name": "Farm-style Chocolate",
    "category": "Pantry & Others",
    "price": 7.6,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality farm-style chocolate for your everyday needs."
  },
  {
    "name": "Classic Chocolate",
    "category": "Pantry & Others",
    "price": 8.09,
    "stock": 175,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality classic chocolate for your everyday needs."
  },
  {
    "name": "Deluxe Chocolate",
    "category": "Pantry & Others",
    "price": 2.87,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality deluxe chocolate for your everyday needs."
  },
  {
    "name": "Signature Chocolate",
    "category": "Pantry & Others",
    "price": 9.67,
    "stock": 160,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Three_Bars_%281%29.jpg/500px-Three_Bars_%281%29.jpg",
    "description": "High quality signature chocolate for your everyday needs."
  },
  {
    "name": "Organic Ice cream",
    "category": "Pantry & Others",
    "price": 7.54,
    "stock": 134,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality organic ice cream for your everyday needs."
  },
  {
    "name": "Fresh Ice cream",
    "category": "Pantry & Others",
    "price": 10.77,
    "stock": 82,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality fresh ice cream for your everyday needs."
  },
  {
    "name": "Premium Ice cream",
    "category": "Pantry & Others",
    "price": 4.2,
    "stock": 166,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality premium ice cream for your everyday needs."
  },
  {
    "name": "Value Ice cream",
    "category": "Pantry & Others",
    "price": 9.43,
    "stock": 120,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality value ice cream for your everyday needs."
  },
  {
    "name": "Local Ice cream",
    "category": "Pantry & Others",
    "price": 1.18,
    "stock": 127,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality local ice cream for your everyday needs."
  },
  {
    "name": "Imported Ice cream",
    "category": "Pantry & Others",
    "price": 5.35,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality imported ice cream for your everyday needs."
  },
  {
    "name": "Farm-style Ice cream",
    "category": "Pantry & Others",
    "price": 8.59,
    "stock": 205,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality farm-style ice cream for your everyday needs."
  },
  {
    "name": "Classic Ice cream",
    "category": "Pantry & Others",
    "price": 4.49,
    "stock": 29,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality classic ice cream for your everyday needs."
  },
  {
    "name": "Deluxe Ice cream",
    "category": "Pantry & Others",
    "price": 8.65,
    "stock": 94,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality deluxe ice cream for your everyday needs."
  },
  {
    "name": "Signature Ice cream",
    "category": "Pantry & Others",
    "price": 8.37,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/500px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    "description": "High quality signature ice cream for your everyday needs."
  },
  {
    "name": "Organic Breakfast cereal",
    "category": "Pantry & Others",
    "price": 9.21,
    "stock": 196,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality organic breakfast cereal for your everyday needs."
  },
  {
    "name": "Fresh Breakfast cereal",
    "category": "Pantry & Others",
    "price": 8.84,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality fresh breakfast cereal for your everyday needs."
  },
  {
    "name": "Premium Breakfast cereal",
    "category": "Pantry & Others",
    "price": 7.44,
    "stock": 26,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality premium breakfast cereal for your everyday needs."
  },
  {
    "name": "Value Breakfast cereal",
    "category": "Pantry & Others",
    "price": 8.44,
    "stock": 201,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality value breakfast cereal for your everyday needs."
  },
  {
    "name": "Local Breakfast cereal",
    "category": "Pantry & Others",
    "price": 4.33,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality local breakfast cereal for your everyday needs."
  },
  {
    "name": "Imported Breakfast cereal",
    "category": "Pantry & Others",
    "price": 5.49,
    "stock": 157,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality imported breakfast cereal for your everyday needs."
  },
  {
    "name": "Farm-style Breakfast cereal",
    "category": "Pantry & Others",
    "price": 2.79,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality farm-style breakfast cereal for your everyday needs."
  },
  {
    "name": "Classic Breakfast cereal",
    "category": "Pantry & Others",
    "price": 8.1,
    "stock": 53,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality classic breakfast cereal for your everyday needs."
  },
  {
    "name": "Deluxe Breakfast cereal",
    "category": "Pantry & Others",
    "price": 9.49,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality deluxe breakfast cereal for your everyday needs."
  },
  {
    "name": "Signature Breakfast cereal",
    "category": "Pantry & Others",
    "price": 1.2,
    "stock": 179,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/500px-NCI_Visuals_Food_Meal_Breakfast.jpg",
    "description": "High quality signature breakfast cereal for your everyday needs."
  },
  {
    "name": "Organic Soup",
    "category": "Pantry & Others",
    "price": 10.12,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality organic soup for your everyday needs."
  },
  {
    "name": "Fresh Soup",
    "category": "Pantry & Others",
    "price": 8.27,
    "stock": 37,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality fresh soup for your everyday needs."
  },
  {
    "name": "Premium Soup",
    "category": "Pantry & Others",
    "price": 7.82,
    "stock": 149,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality premium soup for your everyday needs."
  },
  {
    "name": "Value Soup",
    "category": "Pantry & Others",
    "price": 3.09,
    "stock": 143,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality value soup for your everyday needs."
  },
  {
    "name": "Local Soup",
    "category": "Pantry & Others",
    "price": 2.78,
    "stock": 180,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality local soup for your everyday needs."
  },
  {
    "name": "Imported Soup",
    "category": "Pantry & Others",
    "price": 8.27,
    "stock": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality imported soup for your everyday needs."
  },
  {
    "name": "Farm-style Soup",
    "category": "Pantry & Others",
    "price": 2.56,
    "stock": 39,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality farm-style soup for your everyday needs."
  },
  {
    "name": "Classic Soup",
    "category": "Pantry & Others",
    "price": 1.55,
    "stock": 188,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality classic soup for your everyday needs."
  },
  {
    "name": "Deluxe Soup",
    "category": "Pantry & Others",
    "price": 5.55,
    "stock": 107,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality deluxe soup for your everyday needs."
  },
  {
    "name": "Signature Soup",
    "category": "Pantry & Others",
    "price": 6.11,
    "stock": 42,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/500px-Asparagus_soup_%28spargelsuppe%29.jpg",
    "description": "High quality signature soup for your everyday needs."
  },
  {
    "name": "Organic Baked beans",
    "category": "Pantry & Others",
    "price": 8.31,
    "stock": 93,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality organic baked beans for your everyday needs."
  },
  {
    "name": "Fresh Baked beans",
    "category": "Pantry & Others",
    "price": 8.08,
    "stock": 61,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality fresh baked beans for your everyday needs."
  },
  {
    "name": "Premium Baked beans",
    "category": "Pantry & Others",
    "price": 3.15,
    "stock": 205,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality premium baked beans for your everyday needs."
  },
  {
    "name": "Value Baked beans",
    "category": "Pantry & Others",
    "price": 1.88,
    "stock": 140,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality value baked beans for your everyday needs."
  },
  {
    "name": "Local Baked beans",
    "category": "Pantry & Others",
    "price": 10.48,
    "stock": 195,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality local baked beans for your everyday needs."
  },
  {
    "name": "Imported Baked beans",
    "category": "Pantry & Others",
    "price": 1.36,
    "stock": 85,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality imported baked beans for your everyday needs."
  },
  {
    "name": "Farm-style Baked beans",
    "category": "Pantry & Others",
    "price": 1.05,
    "stock": 135,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality farm-style baked beans for your everyday needs."
  },
  {
    "name": "Classic Baked beans",
    "category": "Pantry & Others",
    "price": 7.78,
    "stock": 49,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality classic baked beans for your everyday needs."
  },
  {
    "name": "Deluxe Baked beans",
    "category": "Pantry & Others",
    "price": 3.1,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality deluxe baked beans for your everyday needs."
  },
  {
    "name": "Signature Baked beans",
    "category": "Pantry & Others",
    "price": 4.77,
    "stock": 194,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baked_beans_in_tomato_sauce.jpg/500px-Baked_beans_in_tomato_sauce.jpg",
    "description": "High quality signature baked beans for your everyday needs."
  },
  {
    "name": "Organic Nut",
    "category": "Pantry & Others",
    "price": 10.2,
    "stock": 80,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality organic nut for your everyday needs."
  },
  {
    "name": "Fresh Nut",
    "category": "Pantry & Others",
    "price": 8.41,
    "stock": 164,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality fresh nut for your everyday needs."
  },
  {
    "name": "Premium Nut",
    "category": "Pantry & Others",
    "price": 3.54,
    "stock": 204,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality premium nut for your everyday needs."
  },
  {
    "name": "Value Nut",
    "category": "Pantry & Others",
    "price": 8.3,
    "stock": 38,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality value nut for your everyday needs."
  },
  {
    "name": "Local Nut",
    "category": "Pantry & Others",
    "price": 6.07,
    "stock": 57,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality local nut for your everyday needs."
  },
  {
    "name": "Imported Nut",
    "category": "Pantry & Others",
    "price": 3.95,
    "stock": 104,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality imported nut for your everyday needs."
  },
  {
    "name": "Farm-style Nut",
    "category": "Pantry & Others",
    "price": 9.52,
    "stock": 181,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality farm-style nut for your everyday needs."
  },
  {
    "name": "Classic Nut",
    "category": "Pantry & Others",
    "price": 3.65,
    "stock": 66,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality classic nut for your everyday needs."
  },
  {
    "name": "Deluxe Nut",
    "category": "Pantry & Others",
    "price": 4.91,
    "stock": 101,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality deluxe nut for your everyday needs."
  },
  {
    "name": "Signature Nut",
    "category": "Pantry & Others",
    "price": 2.37,
    "stock": 137,
    "image": "https://via.placeholder.com/500?text=Nut%20(fruit)",
    "description": "High quality signature nut for your everyday needs."
  },
  {
    "name": "Organic Seed",
    "category": "Pantry & Others",
    "price": 5.14,
    "stock": 204,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality organic seed for your everyday needs."
  },
  {
    "name": "Fresh Seed",
    "category": "Pantry & Others",
    "price": 1.53,
    "stock": 207,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality fresh seed for your everyday needs."
  },
  {
    "name": "Premium Seed",
    "category": "Pantry & Others",
    "price": 1.43,
    "stock": 19,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality premium seed for your everyday needs."
  },
  {
    "name": "Value Seed",
    "category": "Pantry & Others",
    "price": 4.23,
    "stock": 68,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality value seed for your everyday needs."
  },
  {
    "name": "Local Seed",
    "category": "Pantry & Others",
    "price": 8.08,
    "stock": 58,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality local seed for your everyday needs."
  },
  {
    "name": "Imported Seed",
    "category": "Pantry & Others",
    "price": 1.66,
    "stock": 154,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality imported seed for your everyday needs."
  },
  {
    "name": "Farm-style Seed",
    "category": "Pantry & Others",
    "price": 4.42,
    "stock": 48,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality farm-style seed for your everyday needs."
  },
  {
    "name": "Classic Seed",
    "category": "Pantry & Others",
    "price": 6.03,
    "stock": 140,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality classic seed for your everyday needs."
  },
  {
    "name": "Deluxe Seed",
    "category": "Pantry & Others",
    "price": 7.58,
    "stock": 194,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality deluxe seed for your everyday needs."
  },
  {
    "name": "Signature Seed",
    "category": "Pantry & Others",
    "price": 3.93,
    "stock": 209,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/500px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    "description": "High quality signature seed for your everyday needs."
  },
  {
    "name": "Organic Granola",
    "category": "Pantry & Others",
    "price": 4.46,
    "stock": 104,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality organic granola for your everyday needs."
  },
  {
    "name": "Fresh Granola",
    "category": "Pantry & Others",
    "price": 2.79,
    "stock": 70,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality fresh granola for your everyday needs."
  },
  {
    "name": "Premium Granola",
    "category": "Pantry & Others",
    "price": 4.73,
    "stock": 145,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality premium granola for your everyday needs."
  },
  {
    "name": "Value Granola",
    "category": "Pantry & Others",
    "price": 4.41,
    "stock": 165,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality value granola for your everyday needs."
  },
  {
    "name": "Local Granola",
    "category": "Pantry & Others",
    "price": 2,
    "stock": 69,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality local granola for your everyday needs."
  },
  {
    "name": "Imported Granola",
    "category": "Pantry & Others",
    "price": 2.8,
    "stock": 164,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality imported granola for your everyday needs."
  },
  {
    "name": "Farm-style Granola",
    "category": "Pantry & Others",
    "price": 6.52,
    "stock": 141,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality farm-style granola for your everyday needs."
  },
  {
    "name": "Classic Granola",
    "category": "Pantry & Others",
    "price": 6.53,
    "stock": 155,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality classic granola for your everyday needs."
  },
  {
    "name": "Deluxe Granola",
    "category": "Pantry & Others",
    "price": 3.46,
    "stock": 182,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality deluxe granola for your everyday needs."
  },
  {
    "name": "Signature Granola",
    "category": "Pantry & Others",
    "price": 1.88,
    "stock": 170,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/500px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
    "description": "High quality signature granola for your everyday needs."
  },
  {
    "name": "Organic Bacon",
    "category": "Meat",
    "price": 10.71,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality organic bacon for your everyday needs."
  },
  {
    "name": "Fresh Bacon",
    "category": "Meat",
    "price": 3.86,
    "stock": 94,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality fresh bacon for your everyday needs."
  },
  {
    "name": "Premium Bacon",
    "category": "Meat",
    "price": 7.57,
    "stock": 162,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality premium bacon for your everyday needs."
  },
  {
    "name": "Value Bacon",
    "category": "Meat",
    "price": 8.95,
    "stock": 133,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality value bacon for your everyday needs."
  },
  {
    "name": "Local Bacon",
    "category": "Meat",
    "price": 4.17,
    "stock": 64,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality local bacon for your everyday needs."
  },
  {
    "name": "Imported Bacon",
    "category": "Meat",
    "price": 2.93,
    "stock": 107,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality imported bacon for your everyday needs."
  },
  {
    "name": "Farm-style Bacon",
    "category": "Meat",
    "price": 8.65,
    "stock": 78,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality farm-style bacon for your everyday needs."
  },
  {
    "name": "Classic Bacon",
    "category": "Meat",
    "price": 9.21,
    "stock": 132,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality classic bacon for your everyday needs."
  },
  {
    "name": "Deluxe Bacon",
    "category": "Meat",
    "price": 9.47,
    "stock": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality deluxe bacon for your everyday needs."
  },
  {
    "name": "Signature Bacon",
    "category": "Meat",
    "price": 4.13,
    "stock": 74,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/500px-Made20bacon.png",
    "description": "High quality signature bacon for your everyday needs."
  }
];

module.exports = products;
