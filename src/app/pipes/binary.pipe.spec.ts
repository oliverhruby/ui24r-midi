import { BinaryPipe } from "./binary.pipe";

describe("Pipe: Binary", () => {
  let pipe: BinaryPipe;

  beforeEach(() => {
    pipe = new BinaryPipe();
  });

  it("1 should return 00000001", () => {
    expect(pipe.transform(1)).toBe("00000001");
  });
});
