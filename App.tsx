import React, { useEffect } from "react";
import { PermissionsAndroid, Platform, StatusBar } from "react-native";
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

// const isDev = process.env.NODE_ENV === 'development'

const webBundleUrl = Platform.select({
  android: "file:///android_asset/Web.bundle/index.html",
  ios: "Web.bundle/index.html",
})!;

//const uri = isDev ? 'http//localhost:1234' : webBundleUrl
const uri = webBundleUrl;

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000");
      changeNavigationBarColor("#000000", true, true);
    }
    StatusBar.setBarStyle("light-content");
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
    (registry) =>
      registry.register(
        "set-status-bar-style",
        (
          { color, style }: {
            color: string;
            style: "light-content" | "dark-content";
          },
        ) => {
          if (Platform.OS === "android") {
            StatusBar.setBackgroundColor(color);
            changeNavigationBarColor(color, style === "dark-content", true);
          }
          StatusBar.setBarStyle(style);
        },
      ),
    AsyncStorageBridge(AsyncStorage as any),
    PermissionsAndroidBridge(PermissionsAndroid as any),
    ShareBridge(ReactNativeShare as any),
  );

  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView
        source={{ uri }}
        originWhitelist={["*"]}
        javaScriptEnabled
        domStorageEnabled
        ref={ref}
        onMessage={onMessage}
      />
    </>
  );
};

export default App;
