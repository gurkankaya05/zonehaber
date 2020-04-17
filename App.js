import React from 'react';
import { Text, FlatList, SafeAreaView, ImageBackground, Dimensions, TouchableHighlight, Alert} from 'react-native';
 
const App = () => {
  const numColumns = 2;
  const tileWidth = Dimensions.get('window').width / numColumns;
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  const dataSource = [
    { category: 'Teknoloji', imageId: '1518770660439-4636190af475' },
    { category: 'Spor', imageId: '1521412644187-c49fa049e84d' },
    { category: 'Sağlık', imageId: '1526256262350-7da7584cf5eb' },
    { category: 'Ekonomi', imageId: '1515548212260-ac87067b15ab' },
    { category: 'Eğitim', imageId: '1481627834876-b7833e8f5570' },
    { category: 'Müzik', imageId: '1458560871784-56d23406c091' },
    { category: 'Tiyatro', imageId: '1562329265-95a6d7a83440' },
    { category: 'Sinema', imageId: '1489599849927-2ee91cede3ba' },
    { category: 'Hava', imageId: '1508697014387-db70aad34f4d' },
    { category: 'Seyahat', imageId: '1473625247510-8ceb1760943f' },
    { category: 'Astroloji', imageId: '1532968961962-8a0cb3a2d4f5' },
    { category: 'Otomobil', imageId: '1537041373298-55dbb337e651' },
    { category: 'Galeri', imageId: '1500051638674-ff996a0ec29e' },
    { category: 'Video', imageId: '1524253482453-3fed8d2fe12b' },
  ];
 
  
  renderItem = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => { Alert.alert(item.category) }}>
        <ImageBackground
          source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
          style={{
            width: tileWidth,
            height: tileWidth,
            justifyContent: 'center'
          }}>
          <Text style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 15
          }}>{item.category}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.category}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};
 
export default App;