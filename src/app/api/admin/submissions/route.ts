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

    const searchParams = request.nextUrl.searchParams
    const queryString = searchParams.toString()
    const url = `${BACKEND_URL}/api/admin/submissions${queryString ? `?${queryString}` : ''}`

    // Forward the request to Django backend
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Accept': 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()
      return NextResponse.json(data)
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Өтініштер тізімін алу кезінде қате орын алды' 
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Admin submissions API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Сервер қатесі' 
      },
      { status: 500 }
    )
  }
}
