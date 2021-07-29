import { Kafka, Producer as KafkaProducer } from 'kafkajs';

interface IMessage {
  value: string;
}

interface IProduce {
  topic: string;
  messages: IMessage[];
}

export default class Producer {
  private producer: KafkaProducer;

  constructor() {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
    this.producer = kafka.producer();
  }

  public async produce({ topic, messages }: IProduce) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages,
    });
    await this.producer.disconnect()
  }
}
