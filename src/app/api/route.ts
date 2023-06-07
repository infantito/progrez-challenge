import { NextResponse } from 'next/server'

import menu from './menu.json'

async function GET() {
  return NextResponse.json(menu)
}

export { GET }
