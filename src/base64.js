import { encode, decode } from 'node-encoder'

var encodeToBase64 = (query) => {return encode(query)}

var decodeFromBase64 = (query) => {return decode(query)}


export default {
    encodeToBase64,
    decodeFromBase64
}
