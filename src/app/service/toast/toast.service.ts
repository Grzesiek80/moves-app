import { Injectable, signal } from '@angular/core';

export type ToastMessage = { id: number; text: string; type?: 'info' | 'success' | 'danger' };

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _messages = signal<ToastMessage[]>([]);
  private counter = 0;

  messages = this._messages;

  show(text: string, type: ToastMessage['type'] = 'info', timeout = 1000) {
    const id = ++this.counter;
    this._messages.update(list => [...list, { id, text, type }]);
    setTimeout(() => this.remove(id), timeout);
  }

  remove(id: number) {
    this._messages.update(list => list.filter(m => m.id !== id));
  }
}
