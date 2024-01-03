function GET() {
    return(`
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

async function POST(payload) {
    return(`<!DOCTYPE html>
    <html>
    <head>
        <title>HTML Page</title>
    </head>
    <body>
        <h1>Hello, we received your request!</h1>
        <h3>Received Body:</h3>
        <pre>${payload}</pre>
    </body>
    </html>`);
  
}

export {GET,POST}