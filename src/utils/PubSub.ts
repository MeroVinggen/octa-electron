export class PubSub {
  channels: { [key: string]: Set<Function>; } = {};

  publish(channel: string, ...params: unknown[]): void {
    if (this.channels[channel] === undefined) { return; }
    this.channels[channel].forEach((handler) => {
      handler(...params);
    });
  }

  subscribe(channel: string, handler: Function) {
    if (this.channels[channel] === undefined) {
      this.channels[channel] = new Set();
    }
    this.channels[channel].add(handler);
  }

  unsubscribe(channel: string, handler: Function) {
    this.channels[channel].delete(handler);
  }
};
