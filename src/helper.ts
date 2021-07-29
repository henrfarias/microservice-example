import Consumer from "./Services/Kafka/Consumer";

export default async function helper(): Promise<void> {
  const consumer = new Consumer({ groupId: 'MS_CLIENT' });
  consumer.consume({ topic: 'create_user', fromBeginning: false });
} 