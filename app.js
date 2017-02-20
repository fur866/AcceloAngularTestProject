//include File System module
let fs = require('fs');
//include HTTP moducle
let http = require('http');
//include url module
let url = require('url');
//include path module
let path = require('path');
//include socket IO module
let io = require('socket.io');

//get the directory
let dir = path.dirname(fs.realpathSync(__filename));

//start server
let server = http.createServer((req, res) => {
    //get the complete path of request
    let pathname = url.parse(req.url).pathname;
    let m;
    //if home page, load index.html
    if (pathname == '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    else if (m = pathname.match(/^\/(scripts|styles|images|templates)\//)) //else if one of these resources, load them
    {
        loadStaticResource(res,pathname);
        return;
    }
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
});

server.listen(8080);

/**
 * This function loads the requested resource and responds back to the requester
 */
function loadStaticResource(res,pathname) {
    //get the filename
    let filename = dir + pathname;
    //check if file is there
    let stats = fs.existsSync(filename) && fs.statSync(filename);
    //predefined headers for some resources
    let headers = [{'scripts': 'application/javascript'},{'css': 'text/css'},{'templates': 'text/html'}];
    if (stats && stats.isFile()) {
        //get the extension from pathname to check what resource this is
        let extension = getFileExtension(pathname);
        //get the corresponding header
        let header = (headers[extension] !== undefined ) ? headers[extension] : '';
        //write response
        res.writeHead(200, {'Content-Type': header});
        fs.createReadStream(filename).pipe(res);
        return;
    }
}

/**
 * Takes a pathname and extract the extension from it i.e "script.js" will yield "js".
 * @param fileName
 * @return {string}
 */
function getFileExtension(fileName) {
    //split file name into array separated by "."
    var extension = fileName.split(".");

    //take the very last one to get the extension
    extension = extension[extension.length - 1];

    return extension;
}