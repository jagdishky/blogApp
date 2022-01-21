// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import {english} from "./english"

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

 let strings = new LocalizedStrings({
 "en-US":english,
 en:english,
});

export default strings;