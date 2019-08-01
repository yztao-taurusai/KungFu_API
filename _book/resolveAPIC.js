const fs = require('fs')
const path = require('path')



const functionInputFile = path.join('./', 'functions', 'Functions.md')
const functionsOutputFile = path.join('./', 'resolveOutput', 'functions')
const contextInputFolder = path.join('./', 'context')
const contextOutputFile = path.join('./', 'resolveOutput', 'context')
const keywordInputFolder = path.join('./', 'data_struct')
const keywordOutputFile = path.join('./', 'resolveOutput', 'keyword')

const resolveFunctions = () => {
    functionsMD = fs.readFileSync(functionInputFile).toString();
    const re = /## `([\s\S]+?)`<div/g;
    const tempR = functionsMD.match(re)
    const functions = tempR.map(e => e.slice(4).slice(0, e.slice(4).length - 5))
    const functionsStr = functions.map(f => `"${f}"`)
    fs.writeFile(functionsOutputFile, '')
    fs.appendFile(functionsOutputFile, functionsStr.join(',\n'))
}

const resolveContext = () => {
    const re = /`context([\s\S]+?)`/g;
    let contexts = [];
    const files = fs.readdirSync(contextInputFolder)
    files.forEach(f => {
        const fileContent = fs.readFileSync(path.join(contextInputFolder, f)).toString()
        const contextList = fileContent.match(re)
        
        contextList.forEach(c => {
            c = c.slice(1, c.length - 1)
            const keyword = f.slice(0, f.length - 3)
            if(contexts.join('').indexOf(keyword + '(') == -1) contexts.push(`"${c}"`)
        })
    })
    fs.writeFile(contextOutputFile, '')
    fs.appendFile(contextOutputFile, contexts.join(',\n'))
    fs.appendFile(contextOutputFile, '\n')
    fs.appendFile(contextOutputFile, contexts.map(c => '"' + c.slice(9)).join(',\n'))
}

const resolveKeyWords = () => {
    const files = fs.readdirSync(keywordInputFolder)
    let contexts= [];
    files.forEach(f => {
        const fileContent = fs.readFileSync(path.join(keywordInputFolder, f)).toString().split('\n');
        fileContent.forEach(line => {
            const l = line.split('|')
            if(l.length < 1) return;
            const durtys = l[1]
            if(!durtys) return;
            if(durtys.indexOf('#') !== -1) return;
            if(durtys.indexOf('-') !== -1) return;
            if(/.*[\u4e00-\u9fa5]+.*$/.test(durtys)) return;
            const keyword = durtys.trim()
            contexts.push(`"${keyword}"`)
        })
    })
    fs.writeFile(keywordOutputFile, '')
    fs.appendFile(keywordOutputFile, contexts.join(',\n'))
}

resolveFunctions()
resolveContext()
resolveKeyWords()