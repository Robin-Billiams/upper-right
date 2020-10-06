const Options = require( './buyOption.js' );
const mongoose = require( 'mongoose' );
const db = require( './index.js' );
console.log('is running seed.js')

const silence = new Options( { trialfix: 2111 } ); // rebuild this to build a random assortment of data
/**
 * 100 names
 * 100 modelNum
 * 100 stars
 * 100 votes
 * 100 insPlan2yr just cash
 * 100 insPlan4yr just cash
 * 100 installment just cash for all these add the over "48 months" or for "2 years" text in React
 * 100 buyNow
 */
let __names = [['65" Class Q900TS QLED 8K UHD HDR Smart TV (2020)', '75" Class Q900TS QLED 8K UHD HDR Smart TV (2020)', '85" Class Q900TS QLED 8K UHD HDR Smart TV (2020)'], 'Canex', 'Fasesoft', 'Don Dincore', 'Singlestock', 'Redfind', 'Alphatax', 'Latstattrax', 'Matin', 'Tiphold', 'Rebam', 'Gold Tech', 'Vivabam','Jay-Sing', 'Funquadlax', 'Hot Tone','Freshdax', 'Indigo Zamfind', 'Touchlux', 'Ran-La', 'Faxredstock', 'Freshcof', 'Nim It', 'Sandex', 'Anex', 'Nimron', 'Lat-Dox', 'Indigofix', 'Sil-Sing', 'Kaylab', 'Round-Fresh', 'Canfind', 'Plustone', 'Tan-Stock', 'Ventohattip', 'Randex', 'Zaamfan', 'Villa-Job', 'Tanplus', 'Eco Saildax', 'K-lax', 'Tranfan', 'Cansunfax', 'Nimnix', 'Strongit', 'Lajob', 'Tres Ranity', 'Ronflex', 'Tan Redlight', 'Singlefix', 'Yearity', 'Solokix', 'Qvobam', 'Warmflex', 'Zoo Zamlam', 'Kaylux', 'Zimdox', 'Tansuntam', 'Ecoflex',' U-light', 'Don-Dax', 'Strongsanstring', 'Salt-Fan', 'Sanit', 'New Joystring', 'Substrong', 'Quotetom', 'Lotjob', 'Domcof', 'Vilaeco', 'Zum-Flex', 'Zaamdom', 'Silver Zozfan', 'Subdintax', 'Insing', 'Unodax', 'Tres Dax', 'Dommatfix', 'Sollax', 'Zumlight', 'Can-Air', 'Stockity', 'Stanex', 'Red Qvofan', 'Ron Core', 'Holdfind', 'Re Lab', 'Volt Quadhome', 'Trustlight', 'Stocktip', 'S-fan', 'Danfax', 'Zoo-Tom', 'Roundlab', 'Voyaphase', 'Zummafix', 'Fresh-Tom', 'An Zumity', 'Zon-Com', 'Toughlam', 'Trusttrax'];
let __modelNums = [['QN65Q900TSFXZA', 'QN75Q900TSFXZA', 'QN85Q900TSFXZA'], '91AU53DHTY9NCFW', 'U55HFWYPGE3R24Y', 'BRYCQO079D1AL5C', '0WRXYQT1840MJKI', 'YJD48TM7HKJK5V4', '4D8SY0O9HML0FOK', 'WJ5NHTFYOAVGCAU', 'O85Z02ZH5K9E1GQ', 'GAG60GFECGVKWOS', 'D7BO9Z30IU0VIG6', 'FBKKQF8SCWVQHNN', '66JRC5HS1K78QLF', 'FS2FYFKNR0F9TH7', 'UHGXGPDDVY75A94', 'HQHXDM0ECK4ERIH', '7ORFNNJWZMDN8VF', 'MSGSVWHVU5U125M', 'HVT8ANK3DIXNLNM', 'FRP74SN8IUXF1K0', 'MYAHVGB2FTFUFXU', '6Z6VRNSVDQHO5FO', 'L3EMBBBW9V6KKYF', 'B4YOMD72J4V3XEG', 'T117PJ8EBGPS3KG', 'K4X536LKS1P0AO5', 'RH54VUR3BFEY5T1', '4LAWHJ5UHCRHV0V', '2HLKIDQS7LJZRIV', 'UM7LPF04TMSUDYL', '5M50VWSLTC88FGF', 'EFU4J0BSZCU62DT', 'S8NYEXFMKW1MZG8', 'ILDG4EB95FUT58Q', '82VB78K2LN8QJK0', 'VJUJNPYM811I6GW', 'KJTLPPD7364QSE4', 'Z29K1DC9MOWMSS5', 'SJGST3H9CYMA07N', 'GBN2LG1YY80GW5Q', '582Y869NWVTQ5YT', 'W6LVRAULVFQWCXC', 'K6F17UFXBP7AN7X', 'A8ULSLWTHNISK4Y', 'FNE9HR1Y6ZVIQBU', 'Y1ULRE9TYQUA9H3', 'Q1FFD074QYT6SGA', '9Z35YIBGSYZ8ZI0', 'Y2BCNCWD2QI0OEG', 'WOCENPUBIZ2YMBM', '6N1LDD6E4CZCTLE', 'GJNVS578KWO0EBY', 'USXLZ53VVV8OZKU', 'HY0BZT0IXMCIOML', 'IDLAX9PS93A4PGA', 'KI7AXL36OJ8DL8L', 'GQEVPMXRUGFJ4Q2', 'IQY6R1MR8P8VCIJ', '5VZ7C6S5JROXNKH', 'FMVIIZ70D330ITU', 'H26KJ6G3OMS5CUD', 'XD25RDZCK8M5YF3', 'XQPK7TRWATUNMMV', 'S8NUF7R1RZE8YNK', 'KUJ9BSGFM3GVK2Z', 'U9JJERLI4IQJX2V', 'ROIBICYR9FMSS43', '858HD5XU8PAFPMF', 'SXQYYU3HNY7ZFJM', 'R06ZDMKLRKQYO3E', 'VE4B2YEJMAOCSMW', 'LQ6MGVI3ECU80J3', 'ZM6BCJFFSTDCL1J', '44D9NPGAJXD6PNE', 'RQYCVY73YL2WE3Q', 'HEEIS1Q27CBRUO2', 'XYVMZZ6Q8Y0JB02', 'X2DLPSRUGXX3RYD', '3RDMAAGE3B28K6F', 'TJMT17TFA74C4HI', 'YM3WAR5L3M2JBNK', 'NXK5G2UEG1TWBJ9', '7ACNFMP8VQM1706', 'OXPTMJ6B8SBBZN6', 'RYTOIRGR23KLUU2', 'SVHXIG9U4ZDAX6A', '2NXX8Y9WVVED2Y1', 'DPTI6E9RIF4HG1J', 'JMKXK2R04MLYMAX', 'UEPX04LMCI4E968', 'X81P04GJAJTDXUU', '79XPM41856NOD7Q', 'NQMUQBQX6962BEG', 'V0GBPUMSUQXWW1D', 'CTGG2BWD7N4TYAZ', '8W28VZRTLFGBL1C', 'O2HA7HHWBEVARNQ', 'NE37KE5YBSOTVUM', 'J2HMBVIQ1QMKLBK', 'ZE0F7H63BKN7ZPQ'];
let __lor = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Duis tristique ac leo a pretium Donec consectetur convallis odio vel tempor Nam sed luctus dolor Donec tempus ligula purus sed commodo orci vulputate quis Aenean vitae ipsum non libero laoreet fringilla Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus Suspendisse potenti Ut blandit ullamcorper maximus Proin vel faucibus ipsum eu dapibus dolor Nunc accumsan enim eget vulputate sodales turpis lacus tempus est nec sagittis eros nulla sit amet est Ut non enim turpis Mauris congue blandit tempor Vestibulum a efficitur dui in rutrum mi Donec eu hendrerit'

let resultBuilder = function(cb, i) {
  let result = [];
  for ( let j = 0; j < ( i % 2 ) + 1; j++ ) {
    let temp = j > 0 ? result[ j - 1 ] : 0;
    result.push(cb(temp))
  }
  return result;
}
let _names = function ( i ) {
  if ( i === 0) {
    return __names[i];
  }
  let result = [];
  let alts = ['minor', 'super', 'ultra']
  for ( let j = 0; j < ( i % 2 ) + 1; j++ ) {
    result.push( __names[ i ] + alts[ j ] );
  }
  result.push( __names[ i ] );
  return result;
}
let _modelNums = function ( i ) {
  if ( i === 0 ) {
    return __modelNums[ i ];
  }
  let result = [];
  let alts = ['00', '21', '97'];
  for ( let j = 0; j < ( i % 2 ) + 1; j++ ) {
    result.push (__modelNums[ i ] + alts[ j ] );
  }
  result.push( __modelNums[ i ] );
  return result;
}
let deets = function ( i ) {
  if ( i === 0 ) {
    return `Edge-to-edge viewing with Infinity Screen.`;
  }
  let random = Math.floor(Math.random() * 11)
  return __lor.slice(random, random + 7 + random);
}
let deets2 = function ( i ) {
  if ( i === 0 ) {
    return `See the mind-blowing sharpness and depth of real 8K with 16 times more resolution than HDTV.`;
  }
  let random = Math.floor(Math.random() * 31)
  return __lor.slice(random, random + 7 + random);
}
let op = function ( i ) {
  if ( i === 0 ) {
    return 'Size';
  }
  let random = Math.floor(Math.random() * 100 );
  return __lor.slice(random, random + 6);
}
let ops = function ( i ) {
  if ( i === 0 ) {
    return [ '65"', '75"', '85"' ];
  }
  let random = function ( x ) {
    return Math.floor(Math.random() * 1000 ) + x;
  }
  return resultBuilder(random, i);
}
let _price = function ( i ) {
  if ( i === 0 ) {
    return [ 5499.99,  6999.99, 10499.99];
  }
  let random = function ( x ) {
    return Math.floor(Math.random() * 20000) + 1000.99 + x;
  }
  return resultBuilder(random, i);
}
let _stars = function ( i ) {
  let result = i === 0 ? 4.8 : (Math.random() * 5).toFixed( 1 );
  return result;
}
let _votes = function ( i ) {
  if ( i === 0 ) {
    return 31;
  }
  let random = function ( x ) {
    return Math.floor(Math.random() * 1000 );
  }
  return resultBuilder(random, i);
}
let _ins2Yr = function ( i ) {
  if ( i === 0 ) {
    return [499.99, 599.99, 699.99];
  }
  let random = function ( x ) {
    return ( Math.floor( Math.random() * 500 ) ) + .99;
  }
  return resultBuilder(random, i);
}
let _ins4Yr = function ( i ) {
  if ( i === 0 ) {
    return [799.99, 1199.99, 1599.99];
  }
  let random = function ( x ) {
    return ( Math.floor( ( Math.random() * 500 ) + 200 ) ) + .99;
  }
  return resultBuilder(random, i);
}
let _installments = function ( i ) {
  if ( i === 0 ) {
    return [93.74, 145.83, 218.75] ;
  }
  let random = function ( x ) {
    return Number(( ( Math.random() * 400 ) + 50 ).toFixed( 2 )) + x;
  };
  return resultBuilder( random, i );
}// cash every month for 48 monts
let _buyNow = function ( i, installments ) {
  let result = i === 0 ? 4999.99 : ( installments * 48 ) - ( installments * .2 );
  return result;
}// 20% discount for paying now include this detail in React

let sampleData = function () {
  let result = [];
  for ( let i = 0; i < 100; i++ ) {
    let tmp = _installments( i );
    let save;
    if ( tmp > 208 ) {
      save = 3003;
    } else if ( tmp > 20 ) {
      save = 1000;
    } else {
      save = 10;
    }
    let savings = i === 0 ? 1000 : save;
    result.push({
      _id: i,
      name: _names( i ),
      modelNum: _modelNums( i ),
      averageReview: {
        stars: _stars( i ),
        votes: _votes( i ),
      },
      keyDetails: deets( i ),
      addDetails: deets2( i ),
      option: op( i ),
      options: ops( i ),
      prices: _price( i ),
      insPlan2Yr: _ins2Yr( i ), // 2 year insurance plan
      insPlan4Yr: _ins4Yr( i ), // 4 year insurance plan
      installments: tmp, // over 48 months 0% APR
      buyNow: Number( _buyNow( i, tmp ).toFixed( 2 ) ),
      savings: savings
    });
  }
  return result;
}


db.collection( 'options' ).insertManyAsync( sampleData() )
.then((result) => { db.close() } );
