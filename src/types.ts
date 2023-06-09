export type Phonetic = {
  text: string
  audio: string
}

export type Definition = {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
}

export type SearchResultEntry = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
}
