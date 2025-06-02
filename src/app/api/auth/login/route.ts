import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Forward the request to Django backend
    const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: data.message || 'Сәтті кірдіңіз!',
        token: data.token,
        user: data.user
      })
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Email немесе құпия сөз дұрыс емес' 
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Кіру кезінде қате орын алды' 
      },
      { status: 500 }
    )
  }
}
