import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Home from './src/pages/Home/Home';

const App: FC = () => {
  return (
    <>
      <Home />
      {/* <SafeAreaView className="flex-1">
        <View className="flex-1 bg-black">
          <Text className="text-2xl text-white dark:text-white"> / </Text>
        </View>
      </SafeAreaView> */}
    </>
  )
}

export default App;