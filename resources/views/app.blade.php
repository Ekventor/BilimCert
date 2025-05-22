<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'BilimCert') }}</title>

        <link rel="icon" href="/components/ui/logo1.png" type="image/png">
        <link rel="apple-touch-icon" href="/components/ui/logo1.png">
        <link rel="shortcut icon" href="/components/ui/logo1.png" type="image/png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <!-- SVG Filters for Color Blind Modes (hidden) -->
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Protanopia (Red-Blind) Filter -->
                <filter id="protanopia-filter">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.567, 0.433, 0,     0, 0
                                0.558, 0.442, 0,     0, 0
                                0,     0.242, 0.758, 0, 0
                                0,     0,     0,     1, 0"/>
                </filter>

                <!-- Deuteranopia (Green-Blind) Filter -->
                <filter id="deuteranopia-filter">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.625, 0.375, 0,   0, 0
                                0.7,   0.3,   0,   0, 0
                                0,     0.3,   0.7, 0, 0
                                0,     0,     0,   1, 0"/>
                </filter>

                <!-- Tritanopia (Blue-Blind) Filter -->
                <filter id="tritanopia-filter">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.95, 0.05,  0,     0, 0
                                0,    0.433, 0.567, 0, 0
                                0,    0.475, 0.525, 0, 0
                                0,    0,     0,     1, 0"/>
                </filter>
            </defs>
        </svg>
    </body>
</html>
