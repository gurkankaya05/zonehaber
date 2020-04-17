import React,{useState,useEffect} from 'react';
import { Image, View, SafeAreaView, Text, FlatList, TouchableHighlight } from 'react-native'; //Kullandığım nesneler
import prettyTime from './SaatFonksiyon';




const Headlines = () => {
  

 const[headlines ,setHeadlines] = useState({});
  const category = 'technology'; //Teknoloji kategorisi
  const country ='tr'; // Ülkemizi seçtik
  const API_KEY = 'fe5d115baf5b45338a5f6f386fc6e301'; //Api key'im
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

 
  // Url'e istek atmak için FetchAPI kullanıyorum.
 useEffect(() =>{  //Verileri getiriyor.  
   fetchData();
 },[]);
 async function fetchData(){
   (await fetch(url))
   .json()
   .then(res=>setHeadlines(res))
 }
 // Haber başlığında haber kaynağı yer almasın diye yazdıiımız fonksiyon.
 function removeSource(title) {
  if (title == null || title.indexOf(' – ') < 0) return title; // "-" ile kaynağı split ediyorum.xs
  var parts = title.split(' – ');  
  parts.pop();
  return parts.join(' – ');
}
 
 function renderItem({ item }) {
  return (
    <TouchableHighlight onPress={() => { alert(item.title) }}>
    <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={{ flexWrap: 'wrap' }}>{removeSource(item.title)}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Text>{item.source.name}</Text>
          <Text>{prettyTime(item.publishedAt)}</Text>

        
        
        </View>
      </View>
    </View>
    </TouchableHighlight>); 
}

 
return (
  <SafeAreaView>
    <FlatList
      data={headlines.articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  </SafeAreaView>
);
};
export default Headlines;