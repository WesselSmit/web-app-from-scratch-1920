import * as storage from './modules/storage.js'

//TODO: je moet minimaal: MAP, FILTER & REDUCE gebruiken in je code (je moet laten zien dat je dit beheerst)
//todo je hoeft deze methodes niet perse in je app te verwerken, als dat conceptueel moeilijk is dan mag je ook een
//todo stuk code schrijven dat aantoont dat je deze methodes begrijpt wat los staat van je applicatie

routie({
    '': () => {
        storage.checkStoredData()
    },
    'hiermoetietsmeteenIDkomen': () => {
        // dit moet naar de detail page linken
    }
})

//TODO: als het niet mogelijk is om met een template engine beide 'img' & 'video' tags aan te maken -> verwijder dan alle video's uit de data 


//todo: maak een data-object met meerdere dingen erin, loop met mustache eroverheen (zie ook de tutorial)
//todo: in de echte code van de NASA applicatie moet de data worden opgeschoond:
// - beste kwaliteit URLs moeten gebruikt worden (zie documentatie)
// - alle onnodige shit eruit
// - id meegeven aan elk data-object-item

//todo: add error handling in fetch 

//todo: make something that gives 'feedback' to the users

//todo: maak een functie die de data sorteert (sorteer de foto's van nieuw to oud)
//todo: maak een knop voor alleen: foto's, maak een knop voor alleen: video's





// * hieronder staat een compleet werkend voorbeeld, deze moet alleen nog omgeschreven worden naar een module

const template = `{
    "name": {{ name }},
    "hello": {{#obj}}{{name}}{{/obj}},
    "version": {{version}},
    {{^name}}
    "description": {{description}},
    {{/name}}
    "keywordsmulti": [
    {{#keywords}}
        "{{name}}"
    {{/keywords}}
    ],
    license: {{#license}}"MIT"{{/license}},
    author: {{#func}}{{name}}{{/func}}
}`

const data = {
    name: 'Cantinflas',
    version: '1.0.0',
    description: 'Tiny mustache-like template engine',
    obj: {
        name: 'Hello'
    },
    keywords: [{
        name: 'template'
    }, {
        name: 'mustache'
    }, {
        name: 'handlebars'
    }],
    license: true,
    func: string => `Good Boy ${string}!`
};



const CHUNK = /[\t ]*({{([#^])+([\w\d.$@]+)}})[\s\S]*?({{\/\3}})[\t ]*\n?/g;
const VARIABLE = /{{\s*(.+?)\s*}}/g

const isObj = any => any === Object(any);
const isArr = any => Array.isArray(any);
const isFunc = any => typeof any === 'function';
const isEmpObj = obj => Object.keys(obj).length === 0;
const escRGX = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

/**
 * Compile templates with Mustache-like syntax
 * @param {String} template Input string
 * @param {Object} data Data object
 * @returns {String} Compiled output string
 */
function cantinflas(template, data) {
    return render(template, data);

    function render(fragment, context) {
        return fragment.replace(CHUNK, (...[chunk, tagstart, meta, name, tagend]) => {
                const INLINE = new RegExp(`^.*${escRGX(tagstart)}.*${escRGX(tagend)}.*$`, 'm');
                const RGX = INLINE.test(chunk) ?
                    new RegExp(`{{[#^]${escRGX(name)}}}([\\s\\S]*?)${escRGX(tagend)}`, 'g') :
                    new RegExp(`\\s*{{[#^]${escRGX(name)}}}\\n?([\\s\\S]*?)[\\t ]*\\n?${escRGX(tagend)}\\s*`, 'g');

                return chunk.replace(RGX, function (_, inner) {
                    const val = value(name, context);
                    if (meta === '#') {
                        if (isArr(val)) {
                            return val.reduce((str, crr, i) => {
                                let ctx = {
                                    ...context,
                                    '.': crr,
                                    '@index': i,
                                    '@last': i === val.length - 1,
                                    '@first': i === 0
                                };
                                if (isArr(crr) || isObj(crr)) ctx = {
                                    ...ctx,
                                    ...crr
                                } // only spread objects and arrays - not strings
                                return str += render(inner, ctx);
                            }, '');
                        }
                        if (isFunc(val)) return render(val(inner, context), context);
                        if (isObj(val)) return isEmpObj(val) ? '' : render(inner, {
                            ...context,
                            ...val
                        });
                        return !!val ? render(inner, context) : '';
                    }
                    if (meta === '^') return !val ? render(inner, context) : '';
                })
            })
            .replace(VARIABLE, (_, key) => {
                const val = value(key, context);
                return val || val === 0 ? val : '';
            });
    }
}

/**
 * Extract values from objects using
 * strings with notation e.g `myobject.property`.
 * @param {String} key String to parse
 * @param {Object|Array} data Object to extract information from
 * @returns {Any} Value
 */
function value(key, data) {
    if (key === '.') return data['.'];
    const parts = key.split('.');
    while (parts.length) {
        if (!(parts[0] in data)) return false;
        data = data[parts.shift()];
    }
    return data;
}
document.querySelector('#overview div:last-of-type').innerHTML = cantinflas(template, data)