import { MessagePipe } from './message.pipe';

describe('Pipe: Message', () => {
  let pipe: MessagePipe;

  beforeEach(() => {
    pipe = new MessagePipe();
  });

  it('144 should return Note On', () => {
    expect(pipe.transform(144)).toBe('Note On');
  });
});
