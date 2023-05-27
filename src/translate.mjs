
import dictionary from "./words_dictionary.json" assert { type: 'json' };
import known_words from "./rotation_yellow_dictionary.json" assert { type: 'json' };
//import dictionary from "./test_dictionary.json" assert { type: 'json' };

const LETTERS = new Array(25)
    .fill("a".charCodeAt(0))
    .map((charCode, index) => charCode + index)
    .map(charCode => String.fromCharCode(charCode))
    .join("")
    .repeat(2)
    .split("");

const ALL_SHIFTS = new Array(25).fill(0).map((_, index) => index);

function permutate(indices, shift) {
    return indices.map((index) => index + shift);
}

function word_from_indices(permutation) {
    return permutation.map((index) => LETTERS[index]).join("");
}

function is_known_word(word) {
    return known_words[word] !== undefined;
}

function translate_all(words) {
    return words.map((word) => {
        if (is_known_word(word)) {
            return known_words[word];
        }

        const letter_indices = word.split("").map((letter) => LETTERS.indexOf(letter));
        const all_words = ALL_SHIFTS
            .map((shift) => word_from_indices(permutate(letter_indices, shift)));

        const found_words = all_words.filter((one_word) => dictionary[one_word] !== undefined);
        return word
            + ": "
            + (found_words.length === 0
                ? all_words.join(", ")
                : (found_words.length === 1
                    ? found_words[0]
                    : found_words.join(", ")));
    });
}

const words = Array.from(process.argv).slice(2);

const translated_words = Array.from(translate_all(words));

const translated_text = translated_words.reduce((previous, current) => {
    if (String(current).includes(":")) {
        return previous.trim() + "\n" + current + "\n";
    }
    return previous + " " + current;
}, "").trim();

console.log("");
console.log("TRANSLATED TEXT:\n");
console.log(translated_text);
console.log("");