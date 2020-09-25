const Options = require( './buyOption.js' );
const mongoose = require( 'mongoose' );
const db = require( './index.js' );


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
let _names = ['65" Class Q900TS QLED 8K UHD HDR Smart TV (2020)', 'Canex', 'Fasesoft', 'Don Dincore', 'Singlestock', 'Redfind', 'Alphatax', 'Latstattrax', 'Matin', 'Tiphold', 'Rebam', 'Gold Tech', 'Vivabam','Jay-Sing', 'Funquadlax', 'Hot Tone','Freshdax', 'Indigo Zamfind', 'Touchlux', 'Ran-La', 'Faxredstock', 'Freshcof', 'Nim It', 'Sandex', 'Anex', 'Nimron', 'Lat-Dox', 'Indigofix', 'Sil-Sing', 'Kaylab', 'Round-Fresh', 'Canfind', 'Plustone', 'Tan-Stock', 'Ventohattip', 'Randex', 'Zaamfan', 'Villa-Job', 'Tanplus', 'Eco Saildax', 'K-lax', 'Tranfan', 'Cansunfax', 'Nimnix', 'Strongit', 'Lajob', 'Tres Ranity', 'Ronflex', 'Tan Redlight', 'Singlefix', 'Yearity', 'Solokix', 'Qvobam', 'Warmflex', 'Zoo Zamlam', 'Kaylux', 'Zimdox', 'Tansuntam', 'Ecoflex',' U-light', 'Don-Dax', 'Strongsanstring', 'Salt-Fan', 'Sanit', 'New Joystring', 'Substrong', 'Quotetom', 'Lotjob', 'Domcof', 'Vilaeco', 'Zum-Flex', 'Zaamdom', 'Silver Zozfan', 'Subdintax', 'Insing', 'Unodax', 'Tres Dax', 'Dommatfix', 'Sollax', 'Zumlight', 'Can-Air', 'Stockity', 'Stanex', 'Red Qvofan', 'Ron Core', 'Holdfind', 'Re Lab', 'Volt Quadhome', 'Trustlight', 'Stocktip', 'S-fan', 'Danfax', 'Zoo-Tom', 'Roundlab', 'Voyaphase', 'Zummafix', 'Fresh-Tom', 'An Zumity', 'Zon-Com', 'Toughlam', 'Trusttrax'];
let _modelNums = ['QN65Q900TSFXZA', '91AU53DHTY9NCFW', 'U55HFWYPGE3R24Y', 'BRYCQO079D1AL5C', '0WRXYQT1840MJKI', 'YJD48TM7HKJK5V4', '4D8SY0O9HML0FOK', 'WJ5NHTFYOAVGCAU', 'O85Z02ZH5K9E1GQ', 'GAG60GFECGVKWOS', 'D7BO9Z30IU0VIG6', 'FBKKQF8SCWVQHNN', '66JRC5HS1K78QLF', 'FS2FYFKNR0F9TH7', 'UHGXGPDDVY75A94', 'HQHXDM0ECK4ERIH', '7ORFNNJWZMDN8VF', 'MSGSVWHVU5U125M', 'HVT8ANK3DIXNLNM', 'FRP74SN8IUXF1K0', 'MYAHVGB2FTFUFXU', '6Z6VRNSVDQHO5FO', 'L3EMBBBW9V6KKYF', 'B4YOMD72J4V3XEG', 'T117PJ8EBGPS3KG', 'K4X536LKS1P0AO5', 'RH54VUR3BFEY5T1', '4LAWHJ5UHCRHV0V', '2HLKIDQS7LJZRIV', 'UM7LPF04TMSUDYL', '5M50VWSLTC88FGF', 'EFU4J0BSZCU62DT', 'S8NYEXFMKW1MZG8', 'ILDG4EB95FUT58Q', '82VB78K2LN8QJK0', 'VJUJNPYM811I6GW', 'KJTLPPD7364QSE4', 'Z29K1DC9MOWMSS5', 'SJGST3H9CYMA07N', 'GBN2LG1YY80GW5Q', '582Y869NWVTQ5YT', 'W6LVRAULVFQWCXC', 'K6F17UFXBP7AN7X', 'A8ULSLWTHNISK4Y', 'FNE9HR1Y6ZVIQBU', 'Y1ULRE9TYQUA9H3', 'Q1FFD074QYT6SGA', '9Z35YIBGSYZ8ZI0', 'Y2BCNCWD2QI0OEG', 'WOCENPUBIZ2YMBM', '6N1LDD6E4CZCTLE', 'GJNVS578KWO0EBY', 'USXLZ53VVV8OZKU', 'HY0BZT0IXMCIOML', 'IDLAX9PS93A4PGA', 'KI7AXL36OJ8DL8L', 'GQEVPMXRUGFJ4Q2', 'IQY6R1MR8P8VCIJ', '5VZ7C6S5JROXNKH', 'FMVIIZ70D330ITU', 'H26KJ6G3OMS5CUD', 'XD25RDZCK8M5YF3', 'XQPK7TRWATUNMMV', 'S8NUF7R1RZE8YNK', 'KUJ9BSGFM3GVK2Z', 'U9JJERLI4IQJX2V', 'ROIBICYR9FMSS43', '858HD5XU8PAFPMF', 'SXQYYU3HNY7ZFJM', 'R06ZDMKLRKQYO3E', 'VE4B2YEJMAOCSMW', 'LQ6MGVI3ECU80J3', 'ZM6BCJFFSTDCL1J', '44D9NPGAJXD6PNE', 'RQYCVY73YL2WE3Q', 'HEEIS1Q27CBRUO2', 'XYVMZZ6Q8Y0JB02', 'X2DLPSRUGXX3RYD', '3RDMAAGE3B28K6F', 'TJMT17TFA74C4HI', 'YM3WAR5L3M2JBNK', 'NXK5G2UEG1TWBJ9', '7ACNFMP8VQM1706', 'OXPTMJ6B8SBBZN6', 'RYTOIRGR23KLUU2', 'SVHXIG9U4ZDAX6A', '2NXX8Y9WVVED2Y1', 'DPTI6E9RIF4HG1J', 'JMKXK2R04MLYMAX', 'UEPX04LMCI4E968', 'X81P04GJAJTDXUU', '79XPM41856NOD7Q', 'NQMUQBQX6962BEG', 'V0GBPUMSUQXWW1D', 'CTGG2BWD7N4TYAZ', '8W28VZRTLFGBL1C', 'O2HA7HHWBEVARNQ', 'NE37KE5YBSOTVUM', 'J2HMBVIQ1QMKLBK', 'ZE0F7H63BKN7ZPQ'];
let _stars = function ( i ) {
  let result = i === 0 ? 4.8 : (Math.random() * 5).toFixed( 1 );
  return result;
}
let _votes = function ( i ) {
  let result = i === 0 ? 31 : Math.floor(Math.random() * 1000 );
  return result;
}
let _ins2Yr = function ( i ) {
  let result = i === 0 ? 499.99 : (Math.random() * 500 ).toFixed( 2 );
  return result;
}
let _ins4Yr = function ( i ) {
  let result = i === 0 ? 799.99 : ( (Math.random() * 500 ) + 200 ).toFixed( 2 );
  return result;
}
let _installments = function ( i ) {
  let result = i === 0 ? 93.74 : ( ( Math.random() * 400 ) + 50 ).toFixed( 2 );
  return result;
}// cash every month for 48 monts
let _buyNow = function ( i, installments ) {
  let result = i === 0 ? 4999.99 : ( installments * 48 ) - ( installments * .2 );
  return result;
}// 20% discount for paying now include this detail in React

let sampleData = function () {
  let result = [];
  for ( let i = 0; i < 100; i++ ) {
    let tmp = _installments( i );
    let savings = i === 0 ? 1000 : tmp;
    result.push({
      _id: i,
      name: _names[ i ],
      modelNum: _modelNums[ i ],
      averageReview: {
        stars: _stars( i ),
        votes: _votes( i ),
      },
      insPlan2Yr: _ins2Yr( i ), // 2 year insurance plan
      insPlan4Yr: _ins4Yr( i ), // 4 year insurance plan
      installments: tmp, // over 48 months 0% APR
      buyNow: _buyNow( i, tmp ),
      savings: savings
    });
  }
  return result;
}





db.collection('options').insertMany( sampleData() );
// const build = function() {
//   db.collection('options')
//   .then(()=> {console.log('test')})
// }
// db.on('open').then((response) => {console.log('yes')});
// collectionAsync( 'options' ).then((result)=>{console.log('result')})

// .then((result) => {result.insertMany( sampleData() )})

// .then( (result) => { console.log( 'testing promise' ) } )
// new Promise (db.collection('options'))
// .then((result) => {result.insertMany( sampleData() )})
// .then(()=>{db.close()})


