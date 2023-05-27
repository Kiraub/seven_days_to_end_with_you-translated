# About the game language

## Backing language

The backing language is english without ever using the letter `z`, so all letters `a` through `y` are in use.

## The cipher

The game uses caesar-chiffre to rotate the letters of it's alphabet **per word** of its language.

Meaning a word that is once written as `abc` that is rotated to `bcd` will always appear as `abc`.

However two words that both contain `d` might be rotated a different amount.

As an example:

```txt
Cipher      | Clear   | Rotation
------------+---------+----------
pda         | the     | +4
ilkd        | long    | +3
```

Note how both cipher words contain `d` yet end up at `h` and `g` respectively.

## Additional points to keep in mind when transribing

1. There are some typos
2. Two symbols share a letter (upside-down house with two dots below; lower-left triangle with upper-right triangle)

## How to understand *my* cipher text

I have found my own ordering of the symbols of the game's language by using the symbols of the word `yellow` as my base word. All other symbols are ordered relative to those starting symbols. That's why all the cipher texts you see in this repository will be using that transcription of the symbols.

In the end it doesn't matter which base you use if you know the correct relative ordering of the symbols and provide the script the corresponding ciphertext, since it simply tries all permutations. However if you do not use the same base as i did, the dictionary i prepared of known cipher-cleartext mappings will have no hits and the output will look less clear.

