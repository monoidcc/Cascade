import React, { useEffect } from 'react'
import { StatusBar, Platform, PermissionsAndroid } from 'react-native'
import { WebView } from 'react-native-webview'
import { useRegistry } from 'lepont'
import { useAsyncStorage } from '@lepont/async-storage/bridge'
import AsyncStorage from '@react-native-community/async-storage'
import { useShare } from '@lepont/share/bridge'
import Share from 'react-native-share'

const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl = Platform.select({
  android: 'file:///android_asset/Web.bundle/index.html',
  ios: 'Web.bundle/index.html'
})!

//const uri = isDev ? 'http//localhost:1234' : webBundleUrl
const uri = webBundleUrl

const App = () => {
  const registry = useRegistry()
  useAsyncStorage(registry, AsyncStorage as any)
  useShare(registry, Share as any)

  useEffect(() => {
    if (Platform.OS === 'android') {
      (async () => {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000)
        })
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        )
        alert(granted === PermissionsAndroid.RESULTS.GRANTED)
      })()
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        ref={registry.ref as any}
        onMessage={registry.onMessage}
      />
    </>
  )
}

export default App
