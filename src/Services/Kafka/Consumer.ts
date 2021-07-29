import { Kafka, Consumer as KafkaConsumer } from 'kafkajs';

interface IConsumer {
  groupId: string;
}

interface IConsume {
  topic: string;
  fromBeginning: boolean;
}

export default class Consumer {
  private consumer: KafkaConsumer;

  constructor({ groupId }: IConsumer) {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
    this.consumer = kafka.consumer({ groupId });
  }

  public async consume({ topic, fromBeginning }: IConsume) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        console.log({
          value: message.value?.toString(),
        });
        if (!message.value) return;
        const payload = message.value.toString();
        console.log(payload);
      },
    });
  }
}
