# İkinci Nəfəs — Psixologiya Mərkəzi

React + Vite + TypeScript + Tailwind CSS

## Başlamaq

```bash
npm install
npm run dev
```

## Struktur

```
src/
├── api/          # API layer — backend qoşulduqda yalnız bu dəyişir
├── constants/    # Bütün statik data (mock)
├── hooks/        # useApi generic hook
├── types/        # TypeScript interfaceləri
├── components/   # Yenidən istifadə olunan UI komponentlər
└── pages/        # Səhifələr (route-a uyğun)
```

## Backend inteqrasiyası

1. `.env` faylında `VITE_API_BASE_URL` set edin
2. `src/api/index.ts` — hər funksiya artıq real API-a müraciət edəcək
3. `src/types/index.ts` — backend response formatına uyğunlaşdırın

## Səhifələr

| Route | Komponent |
|-------|-----------|
| `/` | HomePage |
| `/haqqimizda` | HaqqimızdaPage |
| `/xidmetler` | XidmetlerPage |
| `/xidmetler/depressiya-mualicesi` | DepressiyaMualicesiPage |
| `/psixoloqlar` | PsixoloqlarPage |
| `/testler` | TestlerPage |
| `/bloq` | BloqPage |
| `/elaqe` | ElaqePage |
