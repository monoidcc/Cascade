import React from 'react'
import { StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri: `https://example.com` }}
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  )
}

export default App
