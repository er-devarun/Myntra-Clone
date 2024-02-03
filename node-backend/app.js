const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  setTimeout(()=>{
    res.send("Hello world! Your Server is live now");
  }, 7000);
});

app.get('/item', (req, res) => {

    res.json({ items: [
    {
      id: "001",
      image: "/images/1.png",
      company: "Nautica",
      item_name: "Henley Neck Cotton T-shirt",
      original_price: 2199,
      current_price: 659,
      discount_percentage: 70,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 3.8,
        count: 1400
      }
    },
    {
      id: "002",
      image: "/images/2.png",
      company: "Roadster",
      item_name: "Printed Round Neck Pure Cotton T-shirt",
      original_price: 899,
      current_price: 260,
      discount_percentage: 71,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 6900
      }
    },
    {
      id: "003",
      image: "/images/3.png",
      company: "The Indian Garage Co",
      item_name: "Men Slim Fit Casual Shirt",
      original_price: 1649,
      current_price: 544,
      discount_percentage: 67,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.1,
        count: 30000
      }
    },
    {
      id: "004",
      image: "/images/4.png",
      company: "Roadster",
      item_name: "Men Casual Shirt",
      original_price: 1899,
      current_price: 664,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.1,
        count: 8500
      }
    },
    {
      id: "005",
      image: "/images/5.png",
      company: "Red Tape",
      item_name: "Men Textured Walking Shoes",
      original_price: 6099,
      current_price: 1299,
      discount_percentage: 80,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 3.9,
        count: 55
      }
    },
    {
      id: "006",
      image: "/images/6.png",
      company: "HRX by Hrithik Roshan",
      item_name: "Men Running Sports Shoes",
      original_price: 2999,
      current_price: 989,
      discount_percentage: 67,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.1,
        count: 3200
      }
    },
    {
      id: "007",
      image: "/images/7.png",
      company: "TKALINI",
      item_name: "Kanjeevaram Pure Silk Saree",
      original_price: 3299,
      current_price: 791,
      discount_percentage: 76,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 3.9,
        count: 926
      }
    },
    {
      id: "008",
      image: "/images/8.png",
      company: "Tokyo Talkies",
      item_name: "Women Solid Denim Jacket",
      original_price: 2149,
      current_price: 429,
      discount_percentage: 80,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.3,
        count: 1700
      }
    },
    {
      id: "009",
      image: "/images/9.png",
      company: "BEARDO",
      item_name: "Godfather Eau De Parfum 100ml",
      original_price: 1200,
      current_price: 960,
      discount_percentage: 20,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.3,
        count: 3700
      }
    },
    {
      id: "010",
      image: "/images/10.png",
      company: "Nivea",
      item_name: "Men Fresh Deodorant 150ml",
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 6000
      }
    },
    {
      id: "011",
      image: "/images/11.png",
      company: "VEGA",
      item_name: "Men VHTH-32 Grooming Trimmer",
      original_price: 1999,
      current_price: 1399,
      discount_percentage: 30,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.6,
        count: 49
      }
    },
    {
      id: "012",
      image: "/images/12.png",
      company: "LOreal",
      item_name: "6 Oil Nourish Shampoo",
      original_price: 219,
      current_price: 164,
      discount_percentage: 25,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.4,
        count: 9300
      }
    },
    {
      id: "013",
      image: "/images/13.png",
      company: "The Indian Garage Co",
      item_name: "Men Slim Fit Jeans",
      original_price: 1999,
      current_price: 659,
      discount_percentage: 67,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4,
        count: 285
      }
    },
    {
      id: "014",
      image: "/images/14.png",
      company: "Jack & Jones",
      item_name: "Men Slim Fit Light Fade Jeans",
      original_price: 2999,
      current_price: 1499,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 3.5,
        count: 33
      }
    },
    {
      id: "015",
      image: "/images/15.png",
      company: "Saraf RS Jewellery",
      item_name: "Rose Gold-Plated AD-Studded Jewellery Set",
      original_price: 6000,
      current_price: 1200,
      discount_percentage: 80,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.5,
        count: 1500
      }
    },
    {
      id: "016",
      image: "/images/16.png",
      company: "Fire-Boltt",
      item_name: "Eclipse Luxe 1.43inch Amoled",
      original_price: 19999,
      current_price: 1599,
      discount_percentage: 92,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 464
      }
    },
    {
      id: "017",
      image: "/images/17.png",
      company: "pebble",
      item_name: "Cosmos Quest Smartwatch",
      original_price: 9999,
      current_price: 2499,
      discount_percentage: 75,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.5,
        count: 66
      }
    },
    {
      id: "018",
      image: "/images/18.png",
      company: "Mast & Harbour",
      item_name: "Men Solid Bomber Jacket",
      original_price: 3999,
      current_price: 1399,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 3.8,
        count: 419
      }
    },
    {
      id: "019",
      image: "/images/19.png",
      company: "CURVY STREET",
      item_name: "Plus Size Floral Print Top",
      original_price: 1699,
      current_price: 594,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.4,
        count: 98
      }
    },
    {
      id: "020",
      image: "/images/20.png",
      company: "DressBerry",
      item_name: "Self Design Lace Top With Slip",
      original_price: 1499,
      current_price: 569,
      discount_percentage: 62,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.4,
        count: 521
      }
    }
  ] });
  
});

app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(8080);
