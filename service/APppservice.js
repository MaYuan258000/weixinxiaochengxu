import Promise from '../windor/bluebird.js';

import Basenvice from './Basenvice.js';
function searchSugest(value, latitude, longitude){
  return Basenvice.odd('https://w.mapbar.com/search2015/search/suggest',{
    keywords: value,
    city: "371700",
    location: latitude + ',' + longitude
  })
}
function searchResult(value, latitude, longitude){
   return Basenvice.odd('https://w.mapbar.com/search2015/search/suggest', {
     keywords: value,
     city: "371700",
     location: latitude + ',' + longitude,
     page_num:1
   })
 }
module.exports={
  searchSugest,
  searchResult
}