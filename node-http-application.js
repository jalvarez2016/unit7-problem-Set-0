const http = require("http");
const fs = require('fs');
const url = require("url");
const app = http.createServer(handleRequest);
const PORT = 8020;

function handleRequest(req,res) {
    const path = url.parse(req.url);
    const renderText = (value, code=200) => {
        res.writeHead(code);
        res.write(value);
        res.end();
    }

    const renderTemplate = (file, params={}) => {
        fs.readFile(`./templates/${file}`, 'utf8', (err, data) => {
            if(!err){
                Object.keys(params).forEach(param => {
                    data = data.replace(`{{${param}}}`, params[param]);
                })
                renderText(data);
            } else {
                console.log('error reading file');
            }
        })
    }

    if(path.pathname === "/"){
        const queryObj = url.parse(req.url, true).query;
        renderTemplate('index.html', queryObj);
    } else if(path.pathname === "/dogs"){
        renderText("Hello Dogs");
    } else {
        renderText("Sorry, that route does not exist", 404);
    }
}

app.listen(PORT, () => {
    console.log(`server started`);
})