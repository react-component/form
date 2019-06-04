import { InternalNamePath } from '../interface';
import { matchNamePath } from './valueUtil';

interface KV<T> {
  key: InternalNamePath;
  value: T;
}

/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
class NameMap<T = any> {
  private list: Array<KV<T>> = [];

  public clone(): NameMap<T> {
    const clone = new NameMap();
    clone.list = this.list.concat();
    return clone;
  }

  public set(key: InternalNamePath, value: T) {
    const index = this.list.findIndex(item => matchNamePath(item.key, key));
    if (index !== -1) {
      this.list[index].value = value;
    } else {
      this.list.push({
        key,
        value,
      });
    }
  }

  public get(key: InternalNamePath) {
    const result = this.list.find(item => matchNamePath(item.key, key));
    return result && result.value;
  }

  public update(key: InternalNamePath, updater: (origin: T) => T | null) {
    const origin = this.get(key);
    const next = updater(origin);

    if (!next) {
      this.delete(key);
    } else {
      this.set(key, next);
    }
  }

  public delete(key: InternalNamePath) {
    this.list = this.list.filter(item => !matchNamePath(item.key, key));
  }

  public map(callback: (kv: KV<T>) => any) {
    return this.list.map(callback);
  }

  public toJSON(): { [name: string]: T } {
    const json: any = {};
    this.map(({ key, value }) => {
      json[key.join('.')] = value;
      return null;
    });

     return json;
  }
}

export default NameMap;
