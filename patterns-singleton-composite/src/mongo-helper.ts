import { MongoClient, Collection } from 'mongodb';
import env from './env';

export class MongoHelper {
  private client:MongoClient = null;
  private static _instance: MongoHelper;

  private constructor() {}

  static get instance(): MongoHelper {
    if (!MongoHelper._instance) {
      MongoHelper._instance = new MongoHelper();
    }
    return MongoHelper._instance;
  }

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(env.mongoUrl);
  }

  async getColletion(name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect();
    }
    return this.client.db().collection(name);
  }
}