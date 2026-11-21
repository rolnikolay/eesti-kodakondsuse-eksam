# kodakondsuse-eksam

Drill trainer for the Estonian citizenship exam (Constitution + Citizenship Act).

**Live:** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/ · [Mock exam (24 questions)](https://rolnikolay.github.io/eesti-kodakondsuse-eksam/exam.html)

> **Disclaimer (EN / ET / RU below):** Study bank, not kept in sync with official exam changes. Fork and change freely. Not Harno / not the state. For the real exam use [PS](https://www.riigiteataja.ee/akt/PS), [KodS](https://www.riigiteataja.ee/akt/126062025008), and official materials.

---

## English

### What it is
A static practice site for the **Eesti Vabariigi põhiseaduse ja kodakondsuse seaduse tundmise eksam**. Question in Estonian; Russian debrief after you answer. Progress stays in the browser (`localStorage`). No server.

### Links
- **Live:** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/  
  **Mock exam (24 questions):** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/exam.html  
  On a phone: “Add to Home Screen” / “Install” (PWA).
- **Repository:** https://github.com/rolnikolay/eesti-kodakondsuse-eksam

### Quizlet flashcards (Estonian → Russian)
540 vocabulary cards extracted from the study bank, split into 4 non-overlapping exam blocks ([`quizlet/`](quizlet/), with [import instructions](quizlet/README.md)):
- **Block 1 — Foundations of the state (*riigikord*, 96 cards):** [Quizlet](https://quizlet.com/1238200473/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B3%D0%BE%D1%81%D1%81%D1%82%D1%80%D0%BE%D1%8F-riigikord-flash-cards/) · [`block-1-riigikord.txt`](quizlet/block-1-riigikord.txt)
- **Block 2 — Rights, freedoms & duties (*õigused*, 169 cards):** [Quizlet](https://quizlet.com/1238200564/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-%D0%B8-%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-oigused-flash-cards/) · [`block-2-oigused.txt`](quizlet/block-2-oigused.txt)
- **Block 3 — State institutions & courts (*organid*, 156 cards):** [Quizlet](https://quizlet.com/1238200676/%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%8B-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B8-%D1%81%D1%83%D0%B4%D1%8B-organid-flash-cards/) · [`block-3-organid.txt`](quizlet/block-3-organid.txt)
- **Block 4 — Citizenship Act (*kodakondsus*, 119 cards):** [Quizlet](https://quizlet.com/1238200743/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BE-%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5-kodakondsuse-saamine-kaotamine-flash-cards/) · [`block-4-kodakondsus.txt`](quizlet/block-4-kodakondsus.txt)

### Run locally
No build step:

```bash
open index.html   # or double-click / xdg-open

python3 -m http.server 8080
# then http://127.0.0.1:8080
```

Works on [Cloudflare Pages](https://pages.cloudflare.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/), or any static host. Publish the repo root (`index.html`, `data/`; plus icons + manifest for PWA).

### Question bank
- What the live site runs: inlined in `index.html` as `QUESTIONS`.
- Same bank as a file: `data/drill-bank-quality-v3.json` (525 items).

### Editing the bank
No public build script here. Edit `data/drill-bank-quality-v3.json`, then replace the `QUESTIONS = [ ... ]` array in `index.html` (or treat `data/` as the source and embed when you ship).

### Fork
Fork freely. Wording, distractors, accessibility — welcome. Please keep the disclaimer visible.

### Where it came from
Built from practice items and a consultation presentation for exam prep. Three people who trained with this material scored **23–24 / 24** on the official exam on **26 September 2026**.

### Credits / sources
- Original site & question bank: [Denis Ivanov](https://ivanov.in) (forked from [upyrj/eesti-kodakondsuse-eksam](https://github.com/upyrj/eesti-kodakondsuse-eksam))
- [Grok Bot Tõnu](https://x.ai/bot) — Cursor/Grok Bot that built the original drill with [Denis](https://ivanov.in)
- Law: [PS](https://www.riigiteataja.ee/akt/PS), [KodS](https://www.riigiteataja.ee/akt/126062025008); exam context: [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) and [Integratsiooni Sihtasutus](https://integratsioon.ee/kodakondsuseksam) (not affiliated)

### Disclaimer
This is a **study** bank. It is **not** kept up to date with official exam changes and **not** a [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) or state product. Fork and change as you like. For the real exam, use the official law texts ([**PS**](https://www.riigiteataja.ee/akt/PS), [**KodS**](https://www.riigiteataja.ee/akt/126062025008)) and official materials.

### License
MIT — see [`LICENSE`](LICENSE).

---

## Eesti

### Mis see on
Staatiline treeningleht **Eesti Vabariigi põhiseaduse ja kodakondsuse seaduse tundmise eksami** (kodakondsuseksam) jaoks. Küsimus eesti keeles; pärast vastust vene keeles selgitus. Progress jääb brauserisse (`localStorage`). Serverit pole.

### Lingid
- **Live:** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/  
  **Proovieksam (24 küsimust):** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/exam.html  
  Telefonis: “Lisa avakuvale” / “Installi” (PWA).
- **Repositoorium:** https://github.com/rolnikolay/eesti-kodakondsuse-eksam

### Quizlet sõnakaardid (eesti → vene)
540 sõnakaarti õppepangast 4 eksamiploki kaupa ilma kordusteta ([`quizlet/`](quizlet/), [impordijuhis](quizlet/README.md)):
- **Plokk 1 — Riigikord (96 kaarti):** [Quizlet](https://quizlet.com/1238200473/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B3%D0%BE%D1%81%D1%81%D1%82%D1%80%D0%BE%D1%8F-riigikord-flash-cards/) · [`block-1-riigikord.txt`](quizlet/block-1-riigikord.txt)
- **Plokk 2 — Põhiõigused, vabadused ja kohustused (169 kaarti):** [Quizlet](https://quizlet.com/1238200564/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-%D0%B8-%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-oigused-flash-cards/) · [`block-2-oigused.txt`](quizlet/block-2-oigused.txt)
- **Plokk 3 — Riigiorganid ja kohtud (156 kaarti):** [Quizlet](https://quizlet.com/1238200676/%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%8B-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B8-%D1%81%D1%83%D0%B4%D1%8B-organid-flash-cards/) · [`block-3-organid.txt`](quizlet/block-3-organid.txt)
- **Plokk 4 — Kodakondsuse seadus (119 kaarti):** [Quizlet](https://quizlet.com/1238200743/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BE-%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5-kodakondsuse-saamine-kaotamine-flash-cards/) · [`block-4-kodakondsus.txt`](quizlet/block-4-kodakondsus.txt)

### Kohalik käivitamine
Ehitust pole vaja:

```bash
open index.html

python3 -m http.server 8080
# siis http://127.0.0.1:8080
```

Sobib [Cloudflare Pages](https://pages.cloudflare.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/) või mis tahes staatiline host. Avalda repo juur (`index.html`, `data/`; PWA jaoks ka ikoonid + manifest).

### Küsimustepank
- Live sait kasutab panka, mis on `index.html`-is (`QUESTIONS`).
- Sama pank failina: `data/drill-bank-quality-v3.json` (525 küsimust).

### Panga muutmine
Avalikku build-skripti pole. Muuda `data/drill-bank-quality-v3.json`, siis asenda `QUESTIONS = [ ... ]` massiiv `index.html`-is (või hoia `data/` allikana ja sisseehita enne avaldamist).

### Fork
Forki vabalt. Sõnastus, distraktorid, ligipääsetavus — oodatud. Jäta disclaimer nähtavaks.

### Päritolu
Tehtud treeningülesannete ja konsultatsiooni esitluse põhjal. Kolm inimest, kes selle materjaliga treenisid, said ametlikul eksamil **26. septembril 2026** **23–24 / 24**.

### Tunnustus / allikad
- Algne sait ja küsimustepank: [Denis Ivanov](https://ivanov.in) (fork repositooriumist [upyrj/eesti-kodakondsuse-eksam](https://github.com/upyrj/eesti-kodakondsuse-eksam))
- [Grok Bot Tõnu](https://x.ai/bot) — Cursor/Grok Bot, kellega [Denis](https://ivanov.in) algse driilli kokku pani
- Seadused: [PS](https://www.riigiteataja.ee/akt/PS), [KodS](https://www.riigiteataja.ee/akt/126062025008); eksami kontekst: [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) ja [Integratsiooni Sihtasutus](https://integratsioon.ee/kodakondsuseksam) (seotud ei ole)

### Hoiatus
See on **õppe**pank. Seda **ei hoita** ametlike eksamimuudatustega sünkroonis ja see **ei ole** [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) ega riigi toode. Forki ja muuda. Päriseksami jaoks kasuta ametlikke seadustekste ([**PS**](https://www.riigiteataja.ee/akt/PS), [**KodS**](https://www.riigiteataja.ee/akt/126062025008)) ja ametlikke materjale.

### Litsents
MIT — fail [`LICENSE`](LICENSE).

---

## Русский

### Что это
Тренажёр к экзамену на знание **Конституции ЭР и Закона о гражданстве** (kodakondsuse eksam). Вопрос по-эстонски, после ответа — разбор по-русски. Прогресс в браузере (`localStorage`), без сервера.

### Ссылки
- **Сайт:** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/  
  **Пробный экзамен (24 вопроса):** https://rolnikolay.github.io/eesti-kodakondsuse-eksam/exam.html  
  На телефоне: «Добавить на экран» / Install — это PWA.
- **Репозиторий:** https://github.com/rolnikolay/eesti-kodakondsuse-eksam

### Карточки Quizlet (эстонский → русский)
540 карточек со словами и примерами из учебного банка, разбитые на 4 блока экзамена без повторов ([`quizlet/`](quizlet/), [инструкция по импорту](quizlet/README.md)):
- **Блок 1 — Основы госстроя (*riigikord*, 96 карточек):** [Quizlet](https://quizlet.com/1238200473/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B3%D0%BE%D1%81%D1%81%D1%82%D1%80%D0%BE%D1%8F-riigikord-flash-cards/) · [`block-1-riigikord.txt`](quizlet/block-1-riigikord.txt)
- **Блок 2 — Основные права, свободы и обязанности (*õigused*, 169 карточек):** [Quizlet](https://quizlet.com/1238200564/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-%D0%B8-%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-oigused-flash-cards/) · [`block-2-oigused.txt`](quizlet/block-2-oigused.txt)
- **Блок 3 — Органы власти и суды (*organid*, 156 карточек):** [Quizlet](https://quizlet.com/1238200676/%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%8B-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B8-%D1%81%D1%83%D0%B4%D1%8B-organid-flash-cards/) · [`block-3-organid.txt`](quizlet/block-3-organid.txt)
- **Блок 4 — Закон о гражданстве (*kodakondsus*, 119 карточек):** [Quizlet](https://quizlet.com/1238200743/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BE-%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5-kodakondsuse-saamine-kaotamine-flash-cards/) · [`block-4-kodakondsus.txt`](quizlet/block-4-kodakondsus.txt)

### Как открыть у себя
Сборка не нужна:

```bash
open index.html

python3 -m http.server 8080
# затем http://127.0.0.1:8080
```

Подойдёт [Cloudflare Pages](https://pages.cloudflare.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/) или любой static host. Выкладывай корень репо (`index.html`, `data/`; для PWA ещё иконки и manifest).

### Банк вопросов
- Живой сайт крутит банк из `index.html` (`QUESTIONS`).
- Тот же банк файлом: `data/drill-bank-quality-v3.json` (525 штук).

### Как править банк
Отдельного build-скрипта нет. Правишь `data/drill-bank-quality-v3.json`, потом подставляешь массив `QUESTIONS = [ ... ]` в `index.html` (или считаешь `data/` источником и вшиваешь перед выкладкой).

### Форк
Форкайте как хотите. Правки формулировок, вариантов ответа, доступности — ок. Дисклеймер лучше оставить на виду.

### Откуда это
Собрано из тренировочных заданий и консультационной презентации к экзамену. Трое, кто готовился по этому материалу, **26 сентября 2026** сдали официальный экзамен на **23–24 из 24**.

### Благодарности / источники
- Оригинальный сайт и банк вопросов: [Denis Ivanov](https://ivanov.in) (форк [upyrj/eesti-kodakondsuse-eksam](https://github.com/upyrj/eesti-kodakondsuse-eksam))
- [Grok Bot Tõnu](https://x.ai/bot) — ассистент, с которым [Denis](https://ivanov.in) собрал исходный тренажёр
- Законы: [PS](https://www.riigiteataja.ee/akt/PS), [KodS](https://www.riigiteataja.ee/akt/126062025008); контекст экзамена: [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) и [Integratsiooni Sihtasutus](https://integratsioon.ee/kodakondsuseksam) (мы с ними не связаны)

### Дисклеймер
Это **учебный** банк. Его **не** держат в актуальном виде под официальный экзамен, и это **не** продукт [Harno](https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/kodakondsuseksamid) / государства. Форкайте и меняйте. На настоящем экзамене опирайтесь на тексты законов ([**PS**](https://www.riigiteataja.ee/akt/PS), [**KodS**](https://www.riigiteataja.ee/akt/126062025008)) и официальные материалы.

### Лицензия
MIT — файл [`LICENSE`](LICENSE).
