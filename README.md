# 建置環境 Development
## windows
1. `git clone --recurse-submodules https://github.com/PDIS/web-jekyll`
2. install Ruby `choco install ruby`
3. install RubyInstaller Devkit `ridk install` (3 - MSYS2 and MINGW development toolchain)
4. `gem install bundler`
5. `bundle install`
6. run `jekyll serve` or `jekyll serve --drafts`
7. open browser to `127.0.0.1:4000`
* check https://jekyllrb.com/docs/installation/windows/#encoding if error occurs

## mac
1. `git clone --recurse-submodules https://github.com/PDIS/web-jekyll`
2. install rvm & ruby
3. `bundle install`
3. run `bundle exec jekyll serve` or `bundle exec jekyll serve --drafts`
4. open browser to `127.0.0.1:4000`

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
  - authors.json
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

# 其他 Others
- 支援 i18n
