const Translate = require('@google-cloud/translate');
const yamlFront = require('yaml-front-matter');
const yaml = require('json2yaml')
const fs = require('fs');

const postsFolder = './_posts'
const enPostsFolder = './_i18n/en/_posts'
const zhTWPostsFolder = './_i18n/zh-TW/_posts'

const translate = new Translate();
// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.

async function translateYamlFronts(config, target){
    delete config.__content
    config.title = await translateArticle(config.title, target)
    config.excerpt = await translateArticle(config.excerpt, target)
    return yaml.stringify(config)
}

async function translateArticle(text, target){
    return translate
    .translate(text, target)
    .then(results => {
        return results[0]
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

async function main() {
    filenames = fs.readdirSync(postsFolder)

    for (let i = 0; i < filenames.length ; i++) {

        fs.copyFileSync(`${postsFolder}/${filenames[i]}`, `${zhTWPostsFolder}/${filenames[i]}`)

        if (fs.existsSync(`${enPostsFolder}/${filenames[i]}`)) {
            continue
        }

        let fileContent = fs.readFileSync(`${postsFolder}/${filenames[i]}`);
        let post = yamlFront.loadFront(fileContent);
        let enPost = await translateArticle(post.__content.replace(/\n/g,'||'), 'en');

        enPost = enPost
                .replace(/(\|\|)/g, '\n').replace(/(\[ )/g, '[')
                .replace(/(] \()/g, '](').replace(/(\]\])/g,']') 
                .replace(/\]\(.*\)/g, match=>match.toLowerCase())
                // .replace(/\s+(?=[^(\)]*\))/g,'') // remove space in URL added by translate

        let config = await translateYamlFronts(post, 'en')
        
        fs.writeFileSync(`${enPostsFolder}/${filenames[i]}`, config + "---\n" + enPost);

        console.log(filenames[i] + " DONE");
    }
}

main().catch(err => {
    console.error('ERROR:', err);
});



