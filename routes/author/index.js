function GET() {
  return { firstName: 'Mary', lastName: 'Shelly', age: 45 };
}

function POST({ name, age }) {
  return { firstName, lastName, age };
}

function OPTIONS() {
  return { message: 'Options' };
}

export { GET, POST, OPTIONS };
