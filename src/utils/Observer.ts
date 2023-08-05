type Subscriber = (action: string, data: unknown) => void;

export class Observer {
  private subscribers: Array<Subscriber>;

  constructor() {
    this.subscribers = [];
  }

  public subscribe(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  public unsubscribe(callback: Subscriber) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
  }

  public broadcast(action: string, data: unknown) {
    this.subscribers.forEach((callback) => callback(action, data));
  }
};
