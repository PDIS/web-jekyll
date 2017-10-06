# 建置環境 Development
## windows
1. clone this repo
2. install `chocolatey`
3. install `ruby` by `choco`
4. install `jekyll` by `gem`
5. run `jekyll serve` or `jekyll serve --drafts`
6. open browser to `127.0.0.1:4000`

push to github results to automatically render a static site for you

## mac
1. install `jekyll` by `gem`
2. run `jekyll serve` or `jekyll serve --drafts`
3. open browser to `127.0.0.1:4000`

# 檔案結構 Structure
## 單篇文章 Text
- /_posts/
  - 日誌 (category: blog)
  - 專案 (category: project)

## 站內資料 Data
- /_data/
  - features.yml
    - 首頁區塊資訊 [圖示樣式可參考][1]
  - nav.yml
    - 導覽列項目
  - aboutus.json
    - 關於我們
  - informations.yml
    - 置底連結文字
  - tracks.json
    - 工作紀錄頁面
  - tools.yml
    - 工具頁面
- /_config.yml
  - 首頁大標資訊

## 頁面版型 Page
- /_layouts/
  - 版型可用之嵌入內容 [色碼可參考][2]
- /_includes/
  - page 可用之版型
- /pages/
  - 各頁 page
- /index.html
  - 首頁 page

[1]: http://materializecss.com/icons.html
[2]: http://materializecss.com/color.html