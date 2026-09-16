# 穿搭配色工具｜離線 App 版 v12

這個版本已把原本單檔 HTML 包成可安裝的 PWA（Progressive Web App）。

## 特性
- 36 套穿搭資料與 36 張 WebP 圖片全部內建在 `index.html`。
- 不使用 Google Sheets、Apps Script、API 或任何外部圖片。
- 第一次透過 HTTPS 網址開啟並安裝後，可在 iPhone 主畫面像 App 一樣啟動。
- Service Worker 會快取 App 本體，之後可在飛航模式／無網路狀態使用。
- 無 App Store 費用、無 Apple Developer 年費、無後端主機費。

## iPhone 安裝方式
1. 將整個資料夾放到任何免費 HTTPS 靜態網站空間（例如 GitHub Pages）。
2. iPhone 用 Safari 打開該網址一次，等頁面完整顯示。
3. Safari → 分享 → 加入主畫面 → 開啟「Open as Web App」→ 加入。
4. 建議第一次安裝完成後先打開一次 App。
5. 之後可開飛航模式測試；穿搭選色、A/B/C 推薦與圖片都應正常使用。

## 更新版本
之後若修改 `index.html`，請同步把 `service-worker.js` 裡的 `CACHE_NAME` 改成新的版本字串（例如 v13），手機下次連線後就會取得新版。

## 重要限制
PWA 要讓 iPhone 安裝與 Service Worker 生效，初次必須從 HTTPS 網址開啟；不能直接從「檔案」App 裡點本機 HTML 安裝成永久 Home Screen App。
但安裝完成並快取後，日常使用本身不需要網路。
