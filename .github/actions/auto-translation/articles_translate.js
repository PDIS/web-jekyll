const {Translate} = require('@google-cloud/translate').v2;
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
    return translate.translate(text, target)
    .then(results => results[0])
    .catch(err => console.error('gcloud err:', err))
}

async function main() {
    filenames = fs.readdirSync(postsFolder)
    /* go through the first level */
    for (let i = 0; i < filenames.length ; i++) {
        /* check if it is directories */
        let path = `${postsFolder}/${filenames[i]}`
        if (fs.lstatSync(path).isDirectory()) {
            let dir = filenames[i]
            /* loop all files in directories */
            for (let sub_file of fs.readdirSync(path)) {
                sub_path = path + `/${sub_file}`
                /* copy file */
                fs.copyFileSync(sub_path, `${zhTWPostsFolder}/${dir}/${sub_file}`)
                /* ignore if eng ver exist */
                if (fs.existsSync(`${enPostsFolder}/${dir}/${sub_file}`)) {}
                else {
                    let post = yamlFront.loadFront(fs.readFileSync(sub_path))
                    let enPost = await translateArticle(post.__content.replace(/\n/g, '||'), 'en')
                    /* remove space in URL added by tranlate */
                    enPost = enPost.replace(/(\|\|)/g, '\n')
                                    .replace(/(\[ )/g, '[')
                                    .replace(/(] \()/g, '](')
                                    .replace(/(\]\])/g, ']')
                                    .replace(/\]\(.*\)/g, match => match.toLowerCase())
                    let post_config = await translateYamlFronts(post, 'en')
                    /* copy translated file */
                    fs.writeFileSync(`${enPostsFolder}/${dir}/${sub_file}`, `${post_config}---\n${enPost}`)
                    console.log(`${sub_file} translated in subfolders.`)
                }
            }
            continue
        }

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

        console.log(filenames[i] + " translated.");
    }
}

main().catch(err => {
    console.error('main err:', err);
});



