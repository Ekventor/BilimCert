import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Авторизация қажет' 
        },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix

    // Forward the request to Django backend
    const response = await fetch(`${BACKEND_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        user: data.user
      })
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Пайдаланушы табылмады' 
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Me API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Пайдаланушы ақпаратын алу кезінде қате орын алды' 
      },
      { status: 500 }
    )
  }
}
