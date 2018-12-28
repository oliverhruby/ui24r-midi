import { HexPipe } from "./hex.pipe";

describe("Pipe: Hex", () => {
  let pipe: HexPipe;

  beforeEach(() => {
    pipe = new HexPipe();
  });

  it("255 should return FF", () => {
    expect(pipe.transform(255)).toBe("FF");
  });
});
