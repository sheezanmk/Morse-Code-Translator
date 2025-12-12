import { engToMorse } from "../src/engToMorse.js";
import { morseToEng } from "../src/morseToEng.js";

describe("engToMorse", () => {
  test("encodes a single word like DND correctly", () => {
    const result = engToMorse("DND");
    expect(result).toBe("-.. -. -..");
  });

  test("encodes HELLO WORLD correctly", () => {
    const result = engToMorse("HELLO WORLD");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });


test("encodes Hi! and ignores special chars", () => {
    const result = engToMorse("Hi!");
    expect(result).toBe(".... ..");
  });

  });

  describe("morseToEng", () => {
    test("decodes -.. -. -..", () => {
      const result = morseToEng("-.. -. -..");
      expect(result).toBe("DND");
    });

     test("decodes .... . .-.. .-.. --- / .-- --- .-. .-.. -..", () => {
      const result = morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
      expect(result).toBe("HELLO WORLD");
    });

     test("decodes .... ..", () => {
      const result = morseToEng(".... ..");
      expect(result).toBe("HI");
    });
  });