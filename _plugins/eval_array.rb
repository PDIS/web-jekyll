module Jekyll
  module EvalArray
    def eval_array(text)
      text2 = text.gsub! '}{', '},{'
      eval('['+ text2 +']')
    end
  end
end

Liquid::Template.register_filter(Jekyll::EvalArray)
