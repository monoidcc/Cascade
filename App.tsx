import React, { useEffect } from 'react'
import { StatusBar, Platform, PermissionsAndroid } from 'react-native'
import { WebView } from 'react-native-webview'
import { useBridge } from 'lepont'
import { AsyncStorageBridge } from '@lepont/async-storage/bridge'
import AsyncStorage from '@react-native-community/async-storage'
import CameraRoll from '@react-native-community/cameraroll'
import RNFS from 'react-native-fs'
import { PermissionsAndroidBridge } from '@lepont/permissions-android/bridge'
import { PlatformBridge } from '@lepont/platform/bridge'
import ReactNativeShare from 'react-native-share'
import { ShareBridge } from '@lepont/share/bridge'

// const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl = Platform.select({
  android: 'file:///android_asset/Web.bundle/index.html',
  ios: 'Web.bundle/index.html'
})!

//const uri = isDev ? 'http//localhost:1234' : webBundleUrl
const uri = webBundleUrl

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#ffffff')
    }
  }, [])
  const [ref, onMessage] = useBridge(
    registry =>
      registry.register(
        'cameraroll:save',
        async ({
          tag,
          type,
          album
        }: {
          tag: string
          type: 'photo' | 'video'
          album: string
        }): Promise<void> => {
          await CameraRoll.save(tag, { type, album })
        }
      ),
    registry =>
      registry.register(
        'write-tmp-image',
        async ({
          content,
          filename,
          encode
        }: {
          content: string
          filename: string
          encode: string
        }) => {
          const path = RNFS.DocumentDirectoryPath + '/' + filename
          await RNFS.writeFile(path, content, encode)
          return path
        }
      ),
    AsyncStorageBridge(AsyncStorage as any),
    PermissionsAndroidBridge(PermissionsAndroid as any),
    PlatformBridge(Platform),
    ShareBridge(ReactNativeShare as any)
  )

  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView
        source={{ uri }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        ref={ref}
        onMessage={onMessage}
      />
    </>
  )
}

export default App
