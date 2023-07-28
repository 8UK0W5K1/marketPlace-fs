const PORT = 4000;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

// Dotenv credentials for DB
require('dotenv').config();

const routes = express.Router();

app.use('/api', routes);

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

// ajouter pour POSTMAN
const jsonParser = bodyParser.json();

//cors
routes.use(cors());

//ROUTES API RESTFUL

routes.get('/', (req, res) => {
  res.send('Hello World!');
});
/* routes.get('/products', (req, res) => {
  res.send('Liste des produits')
}) */

// MongoDB Client
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PWD}@${process.env.DB_CLUSTER}.eyxi3nu.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect((err) => {
      if (err) throw Error(err);
    });
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    const products = client
      .db(`${process.env.DB_NAME}`)
      .collection(`${process.env.DB_COLLECTION}`);

    routes.get('/products', (req, res) => {
      products
        .find()
        .toArray()
        .then((error, results) => {
          if (error) {
            return res.send(error);
          }
          res.status(200).send({ results });
        })
        .catch((err) => res.send(err));
    });

    const exampleObject = {
      id: 21,
      category: 'hat',
      name: 'borsalino hat',
      price: 34,
    };

    routes.post('/products/add', function (req, res) {
      products
        .insertOne(exampleObject)
        .then((error, result) => {
          if (error) {
            console.log(error);
            return res.send(error);
          }
          return res.status(200).send(`Sucessfully added ${result} to your DB`);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
    });

    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
