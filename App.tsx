import React from 'react'
import { StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'
import { useRegistry } from 'lepont'
import { useAsyncStorage } from '@lepont/async-storage/bridge'
import AsyncStorage from '@react-native-community/async-storage'
import { useShare } from '@lepont/share/bridge'
import Share from 'react-native-share'

const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl =
  Platform.OS === 'android'
    ? 'file:///android_asset/Web.bundle/index.html'
    : 'Web.bundle/index.html'

//const uri = isDev ? 'http://localhost:1234' : webBundleUrl
const uri = webBundleUrl

const App = () => {
  const registry = useRegistry()
  useAsyncStorage(registry, AsyncStorage)
  useShare(registry, Share)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        ref={registry.ref}
        onMessage={registry.onMessage}
      />
    </>
  )
}

export default App
