# 建置環境 Development
## windows
1. clone this repo
2. install `chocolatey`
3. install `ruby` by `choco`
4. install `jekyll` by `gem`
5. run `jekyll serve`
6. open `127.0.0.1:4000`
7. push to github results to automatically render a static site for you

# 檔案結構 Structure
## 單篇文章 Text
- /_posts/
  - 日誌
- /_projects/
  - 專案

## 站內資料 Data
- /_data/
  - features.yml
    - 首頁區塊資訊
  - navigation.yml (working)
    - 導覽列項目
  - aboutus.json
    - 關於我們
- /_config.yml
  - 首頁標頭資訊

## 頁面版型 Page
- /_layouts/
  - 版型可用之嵌入內容
- /_includes/
  - page 可用之版型
- /pages/
  - 各頁 page
- /index.html
  - 首頁 page

---

# License

The theme is available as open source under the terms of the [MIT License][2].

[Materialize][3] a  modern responsive front-end framework based on Material Design

Copyright © 2017 Marco Damiani. Powered by <a href="http://jekyllrb.com">Jekyll</a>

[1]: https://github.com/jekyll/minima
[2]: https://opensource.org/licenses/MIT
[3]: http://materializecss.com/
