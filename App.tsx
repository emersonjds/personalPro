
import React from 'react';
import { View } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <View className="h-1/4 bg-slate-500" />
      <View className="h-1/4 bg-slate-300" />
      <View className="h-1/4 bg-slate-100" />
    </>
  )
}

export default App;