module Jekyll
  module EvalString
    def eval_string(text)
      eval(text)
    end
  end
end

Liquid::Template.register_filter(Jekyll::EvalString)
