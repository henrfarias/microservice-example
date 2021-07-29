import express, { Request, Response } from 'express';
import Producer from './Services/Kafka/Producer';
import { createConnection } from 'typeorm';
import { Client } from './app/Models/Client';
import helper from './helper';

createConnection().then(connection => {
  console.log('connection: ',connection.isConnected)
  
  const app = express();
  app.use(express.json());
  
  app.listen(3030, () => console.log('MS_CLIENTS running in port 3030'));
  
  helper();
  
  app.get('/clients', async (req: Request, res: Response) => {
    const clients = await Client.find();
    const producer = new Producer();
    producer.produce({
      topic: 'clients',
      messages: [{
        value: JSON.stringify(clients)
      }]
    })
    return res.sendStatus(200);
  })
});
