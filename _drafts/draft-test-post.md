---
layout: post
title: (draft) 貼文指引 Post Example 
excerpt: 這是一篇對於 Jekyll (markdown) 格式貼文的方法指引。This post is a guide of how to post in Jekyll (markdown) format.
image: https://images.unsplash.com/photo-1484199408980-5918a796a53f?dpr=1&auto=compress,format&fit=crop&w=1199&h=776&q=80&cs=tinysrgb&crop=&bg=
author: Mark、唐鳳
category: [blog, project]
tags:
  - draft
  - 這邊可以下標籤
---

第一段內文會變成此文章的「摘錄」，或是透過 excerpt 檔頭來設置。By default excerpt is the first paragraph of content in the post, however it can be customized by setting a excerpt_separator variable in front matter or _config.yml.

大標
===

小標
---

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

有些內文可以是 *斜體*.
Some of these words _are emphasized also_.

有些內文也可以是 **粗體**.
Or, if you prefer, __use two underscores instead__.

![內嵌圖片描述](/images/pdis-team.jpg)

你可以直接 [提供連結](/assets/mydoc.pdf) 。
你可以直接 [提供連結](/assets/mydoc.pdf "With a Title") 。

I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].
I start my morning with a cup of coffee and [The New York Times][NY Times].
Implicit link [Google][]
AUTOMATIC LINKS <http://pdis.tw>

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
[ny times]: http://www.nytimes.com/
[Google]: http://google.com/


### 引文 Quote

I strongly recommend against using any `<blink>` tags.

```
程式區塊 code block
```

> 這是一個引文區塊。
> 
> This is the second paragraph in the blockquote.
>
> ## 這是一個小標 H2 in a blockquote

### 條列 List

* Candy.
* Gum.
* Booze.

+ Candy.
+ Gum.
+ Booze.

- Candy.
- Gum.
- Booze.

1. Candy.
2. Gum.
3. Booze.

### 水平線 Horizontal Line

* * *
***
*****
- - -
---------------------------------------

### 草稿 Drafts

Drafts are posts without a date in the filename. They’re posts you’re still working on and don’t want to publish yet. To get up and running with drafts, create a _drafts folder in your site’s root and create your first draft:
```
|-- _drafts/
|   |-- a-draft-post.md
```
To preview your site with drafts, run jekyll serve or jekyll build with the --drafts switch. Each will be assigned the value modification time of the draft file for its date, and thus you will see currently edited drafts as the latest posts.