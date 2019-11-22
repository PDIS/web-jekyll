# Example:
# {{"{% if page.next_in_category != nil "}}%}
# <a href="{{"{{page.next_in_category.url"}}}}" class="next-link">Older Post</a>
# {{"{% endif "}}%}
# {{"{% if page.previous_in_category != nil "}}%}
# <a href="{{"{{page.previous_in_category.url"}}}}" class="previous-link">Newer Post</a>
# {{"{% endif "}}%}

module Jekyll
  class WithinCategoryPostNavigation < Generator
    def generate(site)
      site.categories.each_pair do |category, posts|
        posts.sort! { |a,b| b <=> a}
        posts.each do |post|
          index = posts.index post
          next_in_category = nil
          previous_in_category = nil
          if index
            if index < posts.length - 1
              next_in_category = posts[index + 1]
            end
          	if index > 0
              previous_in_category = posts[index - 1]
            end
          end
          post.data["next_in_category"] = next_in_category unless next_in_category.nil?
          post.data["previous_in_category"] = previous_in_category unless previous_in_category.nil?
        end
      end
    end
  end
end