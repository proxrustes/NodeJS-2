export function GET() {
    return (`Name: John Doe
        Age: 25
        Email: john.doe@example.com`);
}

export function POST(payload) {
    return payload
}

export function OPTIONS() {
    return { message: 'Options' };
  }