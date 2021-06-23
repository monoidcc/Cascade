import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useBridge } from "lepont";
import { AsyncStorageBridge } from "@lepont/async-storage/bridge";
import AsyncStorage from "@react-native-community/async-storage";
import CameraRoll from "@react-native-community/cameraroll";
import RNFS from "react-native-fs";
import { PermissionsAndroidBridge } from "@lepont/permissions-android/bridge";
import ReactNativeShare from "react-native-share";
import { ShareBridge } from "@lepont/share/bridge";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const webBundleUrl = Platform.select({
  android: "file:///android_asset/Web.bundle/index.html",
  ios: "Web.bundle/index.html",
})!;

const uri = webBundleUrl;

const initialStatusBarColor = "#ffffff"
const initialStatusBarStyle = "dark-content" as const

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(initialStatusBarColor);
      changeNavigationBarColor(initialStatusBarColor, true, true);
    }
  }, []);
  const [ref, onMessage] = useBridge(
    (registry) =>
      registry.register(
        "cameraroll:save",
        async ({
          tag,
          type,
          album,
        }: {
          tag: string;
          type: "photo" | "video";
          album: string;
        }): Promise<void> => {
          await CameraRoll.save(tag, { type, album });
        },
      ),
    (registry) =>
      registry.register(
        "write-tmp-image",
        async ({
          content,
          filename,
          encode,
        }: {
          content: string;
          filename: string;
          encode: string;
        }) => {
          const path = RNFS.DocumentDirectoryPath + "/" + filename;
          await RNFS.writeFile(path, content, encode);
          return path;
        },
      ),
    AsyncStorageBridge(AsyncStorage as any),
    PermissionsAndroidBridge(PermissionsAndroid as any),
    ShareBridge(ReactNativeShare as any),
  );

  return (
    <>
      <StatusBar barStyle={initialStatusBarStyle} />
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri }}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          ref={ref}
          onMessage={onMessage}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: initialStatusBarColor,
  },
});

export default App;
