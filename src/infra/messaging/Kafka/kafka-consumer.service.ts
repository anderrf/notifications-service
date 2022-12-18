import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
    
    public constructor(){
        super({
            client: {
                clientId: 'notifications',
                brokers: ['selected-spaniel-8885-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c2VsZWN0ZWQtc3BhbmllbC04ODg1JCYnHSOL-pPLZikTWgGFGYz63FjXjwSjkr4',
                    password: 'kV3W5ryXGvmxvQmvdZkqbFmfmcSg0p_unvDicb0GGR_WiUd3om4xD9yaZ_EO9lu0n-S6zg==',
                },
                ssl: true
            }
        });
    }

    public async onModuleDestroy(){
        await this.close();
    }

}