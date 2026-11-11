# Tesla — Styleguide

Tesla сайтын ([Tesla-relume-e5](https://teslarelumee5-tsetsen.vercel.app)) дизайн систем: өнгө, үсэг, зай, хэлбэр, сүүдэр, дүрс, компонент, хөдөлгөөн.
Үндсэн сайтын `/styleguide` хуудсыг бие даасан апп болгон гаргасан.

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

## Ажиллуулах

Node.js 20.9+ хэрэгтэй.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Үндсэн сайттай хэрхэн холбоотой вэ

- `app/globals.css`, `components/ui/*`, `components/home/*`, `components/model/*`, `data/model-details/*` нь үндсэн сайтаас хуулсан хуулбар.
  Үндсэн сайт дээр token эсвэл компонент өөрчлөгдвөл энд мөн хуулж шинэчилнэ.
- ModelCard-ын жишээ өгөгдөл Supabase-ийн оронд `data/featured-model.ts`-аас ирнэ, тиймээс өгөгдлийн сан, env хэрэггүй.
- "Хэсгүүд" доторх холбоосууд үндсэн сайт руу шинэ tab-аар нээгдэнэ. Хаягийг `NEXT_PUBLIC_SITE_URL`-ээр солино
  (анхдагч: `https://teslarelumee5-tsetsen.vercel.app`, `lib/site.ts`).

## Бүтэц

```
app/
  layout.tsx        Header, Inter фонт, Lenis
  page.tsx          Styleguide хуудас
  globals.css       Tailwind @theme — бүх token
components/
  styleguide/       Toc, ColorSwatch, TypeSpecimen, MotionReplay, Primitives
  ui/ home/ model/  Сайтаас хуулсан, демо болгон харуулдаг компонентууд
data/
  styleguide.ts     Хэсэг, token, хөдөлгөөний жагсаалт
  featured-model.ts ModelCard-ын жишээ
public/assets/      Зураг, Figma icon (icons хавтсанд нэмсэн SVG автоматаар гарна)
```
