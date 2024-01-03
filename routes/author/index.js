export function GET() {
  return { firstName: 'Mary', lastName: 'Shelly', age: 45 };
}

export function POST({ firstName, lastName, age }) {
  return { firstName, lastName, age };
}

export function OPTIONS() {
  return { message: 'POST, GET' };
}
