function GET(req, res, url, payload) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML Page</title>
        </head>
        <body>
            <h1>Hello, this is Lab 2!</h1>
        </body>
        </html>
    `);
}

function POST(req, res, url, payload) {
    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML Page</title>
        </head>
        <body>
            <h1>Hello, we received your request!</h1>
            <h3>Received Body:</h3>
            <pre>${req.body}</pre>
        </body>
        </html>
    `);
}

export {GET,POST}