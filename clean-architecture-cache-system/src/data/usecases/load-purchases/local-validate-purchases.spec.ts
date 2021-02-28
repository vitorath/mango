import { CachStoreSpy, getCacheExpirationDate, mockPurchases } from '@/data/tests';
import { LocalLoadPurchases } from '@/data/usecases';

type SutTypes = {
  sut: LocalLoadPurchases,
  cacheStore: CachStoreSpy
}

const makeSut = (timestamp = new Date()): SutTypes => {
  const cacheStore = new CachStoreSpy();
  const sut = new LocalLoadPurchases(cacheStore, timestamp);
  return {
    sut,
    cacheStore
  }
}

describe('LocalLoadPurchases', () => {
  test('Should not delete or insert cache on sut.init', () => {
    const { cacheStore } = makeSut();
    expect(cacheStore.actions).toEqual([]);
  });

  test('Should delete cache if load fails', () => {
    const { cacheStore, sut } = makeSut();
    cacheStore.simulateFetchError();
    sut.validate();
    expect(cacheStore.actions).toEqual([CachStoreSpy.Action.fetch, CachStoreSpy.Action.delete]);
    expect(cacheStore.deleteKey).toBe('purchases');
  });

  test('Should has no side effect if load succeeds', () => {
    const timestamp = getCacheExpirationDate(new Date())
    timestamp.setSeconds(timestamp.getSeconds() + 1);
    const { cacheStore, sut } = makeSut();
    cacheStore.fetchResult = { timestamp }
    sut.validate();
    expect(cacheStore.actions).toEqual([CachStoreSpy.Action.fetch]);
    expect(cacheStore.fetchKey).toBe('purchases');
  });

  test('Should delete cache if its expired', async () => {
    const timestamp = getCacheExpirationDate(new Date())
    timestamp.setSeconds(timestamp.getSeconds() - 1);
    const { cacheStore, sut } = makeSut();
    cacheStore.fetchResult = { timestamp }
    sut.validate();
    expect(cacheStore.actions).toEqual([CachStoreSpy.Action.fetch, CachStoreSpy.Action.delete]);
    expect(cacheStore.fetchKey).toBe('purchases');
    expect(cacheStore.deleteKey).toBe('purchases');
  });

  test('Should delete cache if its on expiration date', async () => {
    const timestamp = getCacheExpirationDate(new Date())
    const { cacheStore, sut } = makeSut();
    cacheStore.fetchResult = { timestamp }
    sut.validate();
    expect(cacheStore.actions).toEqual([CachStoreSpy.Action.fetch, CachStoreSpy.Action.delete]);
    expect(cacheStore.fetchKey).toBe('purchases');
    expect(cacheStore.deleteKey).toBe('purchases');
  });
});