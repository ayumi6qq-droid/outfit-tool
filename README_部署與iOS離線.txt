穿搭配色工具 V19R9｜GitHub Pages + iOS 離線 PWA

【直接上傳到 GitHub 儲存庫根目錄】
index.html
manifest.webmanifest
service-worker.js
.nojekyll
VERSION.txt
assets/
icons/

【GitHub Pages】
1. 建立或開啟 GitHub repository。
2. 將本 ZIP 解壓後的「所有檔案與資料夾」上傳到 repository 根目錄。
3. GitHub → Settings → Pages。
4. Source 選 Deploy from a branch。
5. Branch 選 main，Folder 選 /(root)，儲存。
6. 等 GitHub Pages 網址可開啟後，用 Safari 開啟該網址。

【iPhone / iPad 加入主畫面】
1. 第一次必須有網路，使用 Safari 開啟 GitHub Pages 網址。
2. 等頁面與圖片完整載入一次。
3. Safari「分享」→「加入主畫面」。
4. 從主畫面圖示啟動「穿搭配色」。
5. 完成第一次快取後，即可在沒有網路時開啟與切換穿搭圖片。

【離線機制】
service-worker.js 會預先快取 index.html、manifest、App icons 與 assets/ 內全部圖片。
目前 Cache 名稱：outfit-v19r9-pwa-v1。
若未來更新圖片或程式，建議同步把 CACHE_NAME 改成 v2、v3…，讓裝置取得新版。

【注意】
- 直接用 iPhone「檔案」App 點開 index.html，不會啟用 Service Worker；離線 PWA 必須先透過 HTTPS 網址（例如 GitHub Pages）安裝。
- 第一次安裝前必須在線，因為快取需要先下載完整素材。
- Google Sites 單檔版與這個 GitHub PWA 包是兩套部署方式，互不影響。
