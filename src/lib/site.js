export const SITE = {
  name: 'DevUtilityHub',
  url: 'https://devutilityhub.com',
  description: 'Fast, free browser-based developer utilities for JSON, Base64, URLs, JWTs, UUIDs, timestamps, regex, hashes, YAML and text.',
}

export const tools = [
  { slug:'json-formatter', name:'JSON Formatter', description:'Format, validate and minify JSON instantly in your browser.', icon:'Braces', category:'Data', keywords:'json formatter, json validator, json beautifier, json minifier' },
  { slug:'base64', name:'Base64 Encoder & Decoder', description:'Encode text to Base64 or decode Base64 back to readable text.', icon:'Binary', category:'Encoding', keywords:'base64 encoder, base64 decoder, base64 converter' },
  { slug:'url-encoder', name:'URL Encoder & Decoder', description:'Safely encode or decode URL components and query strings.', icon:'Link', category:'Web', keywords:'url encoder, url decoder, percent encoding' },
  { slug:'jwt-decoder', name:'JWT Decoder', description:'Decode JSON Web Tokens locally without sending them to a server.', icon:'KeyRound', category:'Security', keywords:'jwt decoder, jwt parser, json web token decoder' },
  { slug:'uuid-generator', name:'UUID Generator', description:'Generate cryptographically strong UUID v4 values in one click.', icon:'Fingerprint', category:'Generators', keywords:'uuid generator, guid generator, uuid v4' },
  { slug:'timestamp', name:'Unix Timestamp Converter', description:'Convert Unix timestamps to dates and dates to Unix time.', icon:'Clock3', category:'Date & Time', keywords:'unix timestamp converter, epoch converter, unix time' },
  { slug:'regex-tester', name:'Regex Tester', description:'Test regular expressions against sample text with match highlighting.', icon:'Regex', category:'Text', keywords:'regex tester, regular expression tester, regex validator' },
  { slug:'hash-generator', name:'SHA-256 Hash Generator', description:'Generate a SHA-256 hash locally using the Web Crypto API.', icon:'Hash', category:'Security', keywords:'sha256 generator, sha-256 hash, hash generator' },
  { slug:'yaml-json', name:'YAML ↔ JSON Converter', description:'Convert YAML and JSON data in your browser with readable output.', icon:'FileJson', category:'Data', keywords:'yaml to json, json to yaml, yaml converter' },
  { slug:'text-counter', name:'Text & Character Counter', description:'Count words, characters, lines and estimate reading time.', icon:'Type', category:'Text', keywords:'word counter, character counter, text counter' },
]
