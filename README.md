# BilimCert Frontend - Next.js Application

## 🚀 **АРХИТЕКТУРА FRONTEND**

BilimCert Frontend построен на современном стеке технологий:

- **Next.js 14** с App Router
- **TypeScript** для типизации
- **Tailwind CSS** для стилизации
- **React Hook Form** для форм
- **Zustand** для состояния
- **React Hot Toast** для уведомлений

## 📁 **СТРУКТУРА ПРОЕКТА**

```
frontend/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (pages)/            # Группированные страницы
│   │   ├── globals.css         # Глобальные стили
│   │   ├── layout.tsx          # Корневой layout
│   │   └── page.tsx            # Главная страница
│   ├── components/             # React компоненты
│   │   ├── forms/              # Формы
│   │   ├── layout/             # Layout компоненты
│   │   ├── sections/           # Секции страниц
│   │   └── ui/                 # UI компоненты
│   ├── contexts/               # React контексты
│   ├── hooks/                  # Кастомные хуки
│   ├── lib/                    # Утилиты и API
│   ├── store/                  # Zustand store
│   └── types/                  # TypeScript типы
├── public/                     # Статические файлы
├── tailwind.config.js          # Tailwind конфигурация
├── tsconfig.json              # TypeScript конфигурация
└── package.json               # Зависимости
```

## 🔧 **УСТАНОВКА И ЗАПУСК**

### **1. Клонирование:**
```bash
git clone https://github.com/Ekventor/BilimCert.git -b frontend1
cd BilimCert
```

### **2. Установка зависимостей:**
```bash
npm install
# или
yarn install
# или
pnpm install
```

### **3. Настройка переменных окружения:**
```bash
cp .env.example .env.local
# Отредактируйте .env.local с вашими настройками
```

### **4. Запуск в режиме разработки:**
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### **5. Сборка для продакшена:**
```bash
npm run build
npm run start
```

## 🌐 **ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ**

Создайте файл `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

# Analytics (опционально)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_YANDEX_METRICA_ID=your_yandex_metrica_id
```

## 🔌 **API ИНТЕГРАЦИЯ**

Frontend интегрирован с Django Backend через REST API:

### **BilimCert API Client:**
```typescript
// Аутентификация
bilimcertAPI.login(credentials)
bilimcertAPI.register(userData)
bilimcertAPI.logout()

// Формы
bilimcertAPI.submitContactForm(formData)
bilimcertAPI.submitQuestionForm(formData)
bilimcertAPI.submitAccreditationForm(formData)
bilimcertAPI.submitPartnershipForm(formData)
bilimcertAPI.submitRecognitionForm(formData)

// Новости
bilimcertAPI.getNews()
bilimcertAPI.getNewsById(id)
```

### **Endpoints:**
- **Backend URL:** `http://localhost:8000/api`
- **Authentication:** Session-based
- **CORS:** Настроен для frontend домена

## 🎨 **ДИЗАЙН СИСТЕМА**

### **Цветовая палитра:**
- **Primary:** `#003366` (глубокий синий)
- **Accent:** `#FF6600` (оранжевый)
- **Background:** `#FFFFFF` (белый)
- **Text:** `#1F2937` (темно-серый)

### **Темы:**
- ✅ **Светлая тема** (по умолчанию)
- ✅ **Темная тема** (`dark:` классы)
- ✅ **Высокий контраст** (accessibility)
- ✅ **Комбинированные режимы**

### **Адаптивность:**
- **Desktop:** 1200px+
- **Tablet:** 768px-1199px
- **Mobile:** 320px-767px

## 🌍 **МУЛЬТИЯЗЫЧНОСТЬ**

Поддерживаемые языки:
- 🇰🇿 **Казахский** (основной)
- 🇷🇺 **Русский**
- 🇬🇧 **Английский**

### **Использование:**
```tsx
import { TranslatedText } from '@/components/ui/TranslatedText'

<TranslatedText 
  kk="Қазақша мәтін"
  ru="Русский текст" 
  en="English text"
/>
```

## ♿ **ДОСТУПНОСТЬ**

### **Реализованные функции:**
- ✅ **WCAG 2.1 AA** соответствие
- ✅ **Keyboard navigation**
- ✅ **Screen reader** поддержка
- ✅ **High contrast** режим
- ✅ **Font scaling** до 200%
- ✅ **Focus indicators**
- ✅ **ARIA attributes**

### **Компонент AccessibilityToggle:**
```tsx
import { AccessibilityToggle } from '@/components/ui/AccessibilityToggle'

<AccessibilityToggle />
```

## 📱 **ОСНОВНЫЕ СТРАНИЦЫ**

### **Публичные страницы:**
- `/` - Главная страница
- `/accreditation` - Аккредитация
- `/recognition` - Признание документов
- `/partnership` - Партнерство
- `/news` - Новости
- `/contacts` - Контакты
- `/faq` - Часто задаваемые вопросы

### **Формы:**
- `/contacts` - Контактная форма
- `/questions` - Форма вопросов
- `/partnership/application` - Заявка на партнерство
- `/accreditation/application` - Заявка на аккредитацию
- `/recognition/application` - Заявка на признание

### **Аутентификация:**
- `/auth/login` - Вход
- `/auth/register` - Регистрация
- `/profile` - Профиль пользователя

## 🧪 **РАЗРАБОТКА**

### **Команды:**
```bash
# Разработка
npm run dev

# Сборка
npm run build

# Запуск продакшен сервера
npm run start

# Линтинг
npm run lint

# Проверка типов
npm run type-check
```

### **Структура компонентов:**
```tsx
// Пример компонента
interface ComponentProps {
  title: string
  children: React.ReactNode
}

export function Component({ title, children }: ComponentProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      {children}
    </div>
  )
}
```

## 🚀 **РАЗВЕРТЫВАНИЕ**

### **Vercel (рекомендуется):**
```bash
npm install -g vercel
vercel
```

### **Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### **Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 📞 **ПОДДЕРЖКА**

Для вопросов по frontend разработке:
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
