import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});
  return (
    <SafeAreaView>
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%', backgroundColor: 'white'}}
        resizeMode={'center'}
        onError={() => {
          console.log('Image not found');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />
    </SafeAreaView>
  );
};

export default App;
