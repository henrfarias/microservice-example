import express from 'express';
import Consumer from './Services/Kafka/Consumer';

const consumer = new Consumer({ groupId: 'MS_CLIENT' });
consumer.consume({ topic: 'create_user', fromBeginning: false });

const app = express();

app.use(express.json());

app.listen(3030, () => console.log('MS_CLIENTS running in port 3030'));

