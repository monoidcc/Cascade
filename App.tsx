import React, { useEffect } from 'react'
import { StatusBar, Platform, PermissionsAndroid } from 'react-native'
import { WebView } from 'react-native-webview'
import { useBridge } from 'lepont'
import { AsyncStorageBridge } from '@lepont/async-storage/bridge'
import AsyncStorage from '@react-native-community/async-storage'
import { ShareBridge } from '@lepont/share/bridge'
import Share from 'react-native-share'
import CameraRoll from '@react-native-community/cameraroll'

const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl = Platform.select({
  android: 'file:///android_asset/Web.bundle/index.html',
  ios: 'Web.bundle/index.html'
})!

//const uri = isDev ? 'http//localhost:1234' : webBundleUrl
const uri = webBundleUrl

const App = () => {
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
          alert('CameraRoll.save')
          alert(`tag.length=${tag.length}`)
          await CameraRoll.save(tag, { type, album })
        }
      ),
    AsyncStorageBridge(AsyncStorage as any),
    ShareBridge(Share as any)
  )

  useEffect(() => {
    if (Platform.OS === 'android') {
      ;(async () => {
        await new Promise(resolve => {
          setTimeout(resolve, 3000)
        })
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
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
        ref={ref as any}
        onMessage={onMessage}
      />
    </>
  )
}

export default App
