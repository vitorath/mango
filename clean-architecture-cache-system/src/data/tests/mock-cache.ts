import { SavePurchases } from "@/domain/usecases";
import { CacheStore } from "@/data/protocols/cache";

const maxAgeInDays = 3

export const getCacheExpirationDate = (timestamp: Date): Date => {
  const maxCacheAge = new Date(timestamp);
  maxCacheAge.setDate(maxCacheAge.getDate() - maxAgeInDays);
  return maxCacheAge;
}

export class CachStoreSpy implements CacheStore {
  actions: Array<CachStoreSpy.Action> = [];
  deleteKey: string;
  insertKey: string;
  fetchKey: string;
  insertValues: Array<SavePurchases.Params> = [];
  fetchResult: any;

  fetch(key: string): any {
    this.actions.push(CachStoreSpy.Action.fetch);
    this.fetchKey = key;
    return this.fetchResult;
  }

  delete(key: string): void {
    this.actions.push(CachStoreSpy.Action.delete);
    this.deleteKey = key;
  }

  insert(key: string, value: any): void {
    this.actions.push(CachStoreSpy.Action.insert);
    this.insertKey = key;
    this.insertValues = value;
  }

  replace(key: string, value: any): void {
    this.delete(key);
    this.insert(key, value);
  }

  simulateDeleteError(): void {
    jest.spyOn(CachStoreSpy.prototype, 'delete').mockImplementationOnce(() => { 
      this.actions.push(CachStoreSpy.Action.delete);
      throw new Error(); 
    });
  }

  simulateInsertError(): void {
    jest.spyOn(CachStoreSpy.prototype, 'insert').mockImplementationOnce(() => { 
      this.actions.push(CachStoreSpy.Action.insert);
      throw new Error(); 
    });
  }

  simulateFetchError(): void {
    jest.spyOn(CachStoreSpy.prototype, 'fetch').mockImplementationOnce(() => { 
      this.actions.push(CachStoreSpy.Action.fetch);
      throw new Error(); 
    });
  }
}

export namespace CachStoreSpy {
  export enum Action {
    delete, 
    insert,
    fetch
  }
}
