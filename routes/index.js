function GET() {
  return (`
  <!DOCTYPE html>
  <html>
  <head>
      <title>HTML Page</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
          margin: 0;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          font-size: 84px;
          margin-bottom: 0;
          margin-top: 0;
        }
        h2 {
          color: #333;
          font-size: 24px;
          margin-top: 0;
        }
      </style>
  </head>
  <body>
      <div class="container">
        <h1>Node.JS!</h1>
        <h2>KUDRIAVTSEVA ANASTASIIA</h2>

      </div>
  </body>
  </html>
`);
}

export { GET };
