# Vasuki Linux / Termux Audit Shortcuts

## FILES

List files

```bash
find src -type f | head -50
```

Find TSX files

```bash
find src -name "*.tsx"
```

Find component files

```bash
find src/components -type f
```

---

## GIT

Current branch

```bash
git branch
```

Remote

```bash
git remote -v
```

Status

```bash
git status
```

Restore file from git

```bash
git checkout HEAD -- src/components/Explorer.tsx
```

Create branch

```bash
git checkout -b audit-cleanup
```

---

## SEARCH CODE

Find Gemini references

```bash
grep -R "GEMINI" .
```

Find API calls

```bash
grep -R "/api/" src
```

Find fetch calls

```bash
grep -R "fetch(" src
```

Find Express

```bash
grep -R "express" .
```

Find sqlite

```bash
grep -R "sqlite" .
```

Find better-sqlite3

```bash
grep -R "better-sqlite3" .
```

Find server

```bash
grep -R "server.ts" .
```

Find res references

```bash
grep -n "res\\." src/components/Explorer.tsx
```

---

## VIEW FILES

Top 30 lines

```bash
head -30 filename
```

Bottom 30 lines

```bash
tail -30 filename
```

Lines 55-90

```bash
sed -n '55,90p' src/components/Explorer.tsx
```

Lines 1-250

```bash
sed -n '1,250p' src/components/Explorer.tsx
```

---

## SQLITE

Open database

```bash
sqlite3 founder.db
```

Tables

```sql
.tables
```

Schema

```sql
.schema
```

Count rows

```sql
SELECT COUNT(*) FROM founder_entities;
```

---

## FASTAPI

Run API

```bash
uvicorn main:app --reload
```

Stats endpoint

```bash
curl http://127.0.0.1:8000/stats
```

---

## NPM

Install packages

```bash
npm install
```

Build

```bash
npm run build
```

TypeScript check

```bash
npx tsc --noEmit
```

Rebuild esbuild

```bash
npm rebuild esbuild
```

---

## DEPLOYMENT

GitHub Pages URL

```text
https://manidhar8008.github.io/M-V1-portfolio-/
```

Verify deployment

```bash
curl -s https://manidhar8008.github.io/M-V1-portfolio-/ | head -30
```

---

## EMERGENCY BACKUP

Backup Explorer

```bash
cp src/components/Explorer.tsx src/components/Explorer.tsx.bak
```

Restore Explorer

```bash
cp src/components/Explorer.tsx.bak src/components/Explorer.tsx
```

---

## VASUKI AUDIT

Find Gemini remnants

```bash
grep -R "Gemini" .
```

Find mock data

```bash
grep -R "isMock" src
```

Find Founder DB usage

```bash
grep -R "founder.db" .
```

Find API endpoint

```bash
grep -R "/api/vasuki" src
```



X
