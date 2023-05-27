# Seven days to end with you - translated

This repository contains scripts to translate the text from the game "seven days to end with you" as well as some already translated parts.

In case the title of the repository did not already make this clear enough:

This repository contains information that can and will heavily spoil the potential experience of playing the game blind a couple times.

My personal recommendation is to give the game a couple runs while trying to figure out the language on your own and come back once you want to get the "correct" words (depending on how you think about what "correct" is in the context of this game).

## Requirements

I used NodeJS v17.2.0 to develop the script, newer versions might work as well.

## How to use

Execute the script using NodeJs in the follwing manner:

(Error log is piped to sink cause of node warnings about experimental json modules in the used version)

```sh
node --experimental-json-modules ./translate.mjs 2>/dev/null words you want to translate
```

## References

The used word list at `./src/words_dictionary.json` is taken from `https://github.com/dwyl/english-words/blob/master/words_dictionary.json`.

