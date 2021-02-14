import { CharacterInterface, SymbolInterface } from "./interfaces";
import { Symbols } from "./state";

function isSymbol(char: string): boolean {
  for (let i: number = 0; i < Symbols.length; i++) {
    if (char === Symbols[i].symbol) {
      return true;
    }
  }
  return false;
}

function isPresent(char: string, chars: CharacterInterface[]): boolean {
  for (let i: number = 0; i < chars.length; i++) {
    if (chars[i].symbol) {
      if (char === chars[i].symbol) {
        return true;
      }
    } else {
      if (char === chars[i].char) {
        return true;
      }
    }
  }

  return false;
}

function getSymbol(char: string) {
  for (let i: number = 0; i < Symbols.length; i++) {
    if (char === Symbols[i].symbol) {
      return Symbols[i] as SymbolInterface;
    }
  }
  // return {name:"",symbol:""}
}

function getIndex(char: string, chars: CharacterInterface[]): number {
  for (let i: number = 0; i < chars.length; i++) {
    if (chars[i].symbol) {
      if (char === chars[i].symbol) {
        return i;
      }
    } else {
      if (char === chars[i].char) {
        return i;
      }
    }
  }
  return -1;
}

export function wordCount(text: string): CharacterInterface[] {
  let chars: CharacterInterface[] = [];
  text = text.toLocaleUpperCase();

  for (let i: number = 0; i < text.length; i++) {
    if (!isPresent(text[i], chars)) {
      if (isSymbol(text[i])) {
        let sym = getSymbol(text[i]);
        chars.push({ char: sym?.name, num: 1, symbol: sym?.symbol });
      } else {
        chars.unshift({ char: text[i], num: 1 });
      }
    } else {
      let index = getIndex(text[i], chars);
      chars[index].num++;
    }
  }
  return chars;
}
