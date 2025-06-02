import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const slug = params.slug.join('/')
    const body = await request.json()

    // Forward the request to Django backend
    const response = await fetch(`${BACKEND_URL}/api/forms/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    // Return the response from Django
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('API proxy error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const slug = params.slug.join('/')
    const searchParams = request.nextUrl.searchParams

    // Build query string
    const queryString = searchParams.toString()
    const url = `${BACKEND_URL}/api/forms/${slug}${queryString ? `?${queryString}` : ''}`

    // Forward the request to Django backend
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    const data = await response.json()

    // Return the response from Django
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('API proxy error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
