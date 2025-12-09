# 🎓 Doria Academy - Sitio Web Institucional

Sitio web institucional profesional para **Doria Academy**, una academia de formación profesional online.

## 🚀 Tecnologías Utilizadas

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (iconos)
- **React 19**

## ✨ Características

### Diseño

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile-first)
- ✅ Animaciones suaves y efectos hover
- ✅ Paleta de colores educativa (azul, violeta, blanco)
- ✅ Tipografía profesional (Inter de Google Fonts)

### SEO

- ✅ Meta tags optimizados
- ✅ Open Graph configurado
- ✅ Twitter Cards
- ✅ Estructura semántica HTML5

### Componentes Reutilizables

- `Header` - Navegación sticky responsive con menú hamburguesa
- `Footer` - Footer institucional completo
- `Hero` - Hero section con gradientes animados
- `InfoCard` - Cards informativas con iconos
- `CourseCard` - Cards de cursos con metadata
- `Badge` - Badges con variantes de color
- `WhatsAppButton` - Botón flotante de WhatsApp

## 📄 Páginas

### 1. Home (`/`)

- Hero principal con CTA
- 3 cards de características principales
- Sección "¿Por qué elegir Doria Academy?"
- CTA final

### 2. Sobre Nosotros (`/sobre`)

- Historia de la academia
- Misión y Visión
- Valores institucionales
- Estadísticas

### 3. Cursos (`/cursos`)

- Listado de cursos en formato grid
- Filtros preparados para futuro
- 6 cursos de ejemplo (mock data)
- CTA para consultas

### 4. Campus Virtual (`/campus`)

- Página informativa de "Próximamente"
- Preview de funcionalidades futuras
- Badge de estado
- CTA para early access

### 5. Libros (`/libros`)

- Página informativa de "Próximamente"
- Preview de libros físicos y digitales
- Categorías de contenido
- CTA para notificaciones

### 6. Contacto (`/contacto`)

- Formulario funcional
- Envío directo a WhatsApp
- Información de contacto
- FAQ rápido

## 🎨 Paleta de Colores

```css
--primary: 219 95% 50%; /* Azul educativo */
--primary-dark: 219 95% 40%; /* Azul oscuro */
--secondary: 270 60% 70%; /* Violeta suave */
--background: 0 0% 100%; /* Blanco */
--foreground: 222 47% 11%; /* Gris oscuro */
```

## 🛠️ Instalación y Uso

### Requisitos Previos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

El sitio estará disponible en `http://localhost:3000`

## 📱 Configuración de WhatsApp

Para configurar el número de WhatsApp, busca y reemplaza `XXXXXXXXXX` en los siguientes archivos:

- `components/Header.tsx`
- `components/WhatsAppButton.tsx`
- `components/CourseCard.tsx`
- `app/page.tsx`
- `app/campus/page.tsx`
- `app/libros/page.tsx`
- `app/contacto/page.tsx`

Ejemplo: `https://wa.me/5491112345678`

## 📂 Estructura del Proyecto

```
doria_academy_ag/
├── app/
│   ├── campus/
│   │   └── page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   ├── cursos/
│   │   └── page.tsx
│   ├── libros/
│   │   └── page.tsx
│   ├── sobre/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Badge.tsx
│   ├── CourseCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── InfoCard.tsx
│   └── WhatsAppButton.tsx
├── public/
├── package.json
└── README.md
```

## 🔮 Próximos Pasos (Escalabilidad)

### Backend & Base de Datos

- [ ] Integrar CMS (Strapi, Contentful, Sanity)
- [ ] Base de datos para cursos
- [ ] Sistema de autenticación
- [ ] Panel de administración

### E-commerce

- [ ] Carrito de compras
- [ ] Pasarela de pagos (MercadoPago, Stripe)
- [ ] Sistema de cupones/descuentos
- [ ] Gestión de pedidos

### Campus Virtual

- [ ] Plataforma LMS
- [ ] Sistema de progreso de cursos
- [ ] Evaluaciones y quizzes
- [ ] Certificados digitales
- [ ] Foros de discusión

### Libros

- [ ] Catálogo de libros
- [ ] Venta de PDFs
- [ ] Venta de libros físicos
- [ ] Sistema de envíos

### Marketing

- [ ] Newsletter
- [ ] Blog educativo
- [ ] Testimonios de estudiantes
- [ ] Analytics (Google Analytics, Hotjar)

## 🎯 Características Implementadas

✅ Diseño profesional y moderno  
✅ Responsive design (mobile-first)  
✅ SEO optimizado  
✅ Navegación completa  
✅ Componentes reutilizables  
✅ Integración con WhatsApp  
✅ Animaciones y transiciones  
✅ Estructura escalable  
✅ TypeScript para type safety  
✅ Tailwind CSS para estilos

## 📝 Notas Técnicas

- **Next.js 16** usa Tailwind CSS v4 que tiene una sintaxis diferente a v3
- El archivo `globals.css` usa CSS vanilla en lugar de `@apply` para compatibilidad
- Todos los componentes son Server Components por defecto, excepto los que usan hooks (`'use client'`)
- Las animaciones están definidas en `globals.css` para reutilización

## 🤝 Contribución

Este es un proyecto base listo para producción. Para agregar nuevas funcionalidades:

1. Crear nuevos componentes en `/components`
2. Crear nuevas páginas en `/app/[ruta]/page.tsx`
3. Actualizar estilos en `globals.css` si es necesario
4. Mantener la estructura de carpetas consistente

## 📧 Contacto

Para más información sobre Doria Academy:

- Email: info@doriaacademy.com
- WhatsApp: [Configurar número]
- Ubicación: Buenos Aires, Argentina

---

**Desarrollado con ❤️ para Doria Academy**
