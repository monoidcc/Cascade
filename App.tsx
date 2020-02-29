import React from 'react'
import { StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl =
  Platform.OS === 'android'
    ? 'file:///android_asset/Web.bundle/index.html'
    : 'Web.bundle/index.html'

//const uri = isDev ? 'http://localhost:1234' : webBundleUrl
const uri = webBundleUrl

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  )
}

export default App
