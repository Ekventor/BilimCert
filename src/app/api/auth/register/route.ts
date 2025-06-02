import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, recaptchaToken } = body

    // Forward the request to Django backend
    const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        recaptcha_token: recaptchaToken,
        first_name: name.split(' ')[0] || name,
        last_name: name.split(' ').slice(1).join(' ') || ''
      }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: data.message || 'Тіркелу сәтті аяқталды!',
        user: data.user
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: data.message || 'Тіркелу кезінде қате орын алды'
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Register API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Тіркелу кезінде қате орын алды'
      },
      { status: 500 }
    )
  }
}
