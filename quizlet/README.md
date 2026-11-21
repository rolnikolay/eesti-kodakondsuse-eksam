# Quizlet flashcards (Estonian → Russian)

540 vocabulary cards extracted from the study bank (`data/drill-bank-quality-v3.json`), split into the 4 exam topic blocks with **no duplicates** across files. Within each file, terms are sorted by frequency in that block.

## Ready-to-use Quizlet sets & source files

| Block | Topic | Cards | Source file | Quizlet set |
|---|---|---:|---|---|
| 1 | Foundations of the state (*riigikord*, PS I & III) | 96 | [`block-1-riigikord.txt`](block-1-riigikord.txt) | [Open on Quizlet](https://quizlet.com/1238200473/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B3%D0%BE%D1%81%D1%81%D1%82%D1%80%D0%BE%D1%8F-riigikord-flash-cards/) |
| 2 | Fundamental rights, freedoms & duties (*õigused*, PS II) | 169 | [`block-2-oigused.txt`](block-2-oigused.txt) | [Open on Quizlet](https://quizlet.com/1238200564/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B-%D0%B8-%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-oigused-flash-cards/) |
| 3 | State institutions & courts (*organid*, PS IV–XIII) | 156 | [`block-3-organid.txt`](block-3-organid.txt) | [Open on Quizlet](https://quizlet.com/1238200676/%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%8B-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8-%D0%B8-%D1%81%D1%83%D0%B4%D1%8B-organid-flash-cards/) |
| 4 | Citizenship Act (*kodakondsuse saamine / kaotamine*, KodS) | 119 | [`block-4-kodakondsus.txt`](block-4-kodakondsus.txt) | [Open on Quizlet](https://quizlet.com/1238200743/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BE-%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5-kodakondsuse-saamine-kaotamine-flash-cards/) |

### Card format

- **Front (Term):** Estonian word or phrase + usage example (or exam question `→` correct answer).
- **Back (Definition):** Russian translation + translation of the example.

Example:
- Front: `taotlema • Ta taotleb Eesti kodakondsust.`
- Back: `ходатайствовать; подавать заявление на получение • Он ходатайствует о получении гражданства Эстонии.`

Files are UTF-8 with no header row: one card per line, one `Tab` (`\t`) between term and definition. Semicolons inside translations are part of the text, not delimiters.

## How to import into your own Quizlet set

1. Open [Quizlet](https://quizlet.com/) in a browser and click **+ → Flashcard set** (create a new set).
2. Click **+ Import** (or **Import from Word, Excel, Google Docs, etc.**).
3. Copy the entire contents of one `.txt` file (`block-1-riigikord.txt`, etc.) and paste it into the import box.
4. Set **Between term and definition** to **Tab**.
5. Set **Between cards** to **New line**.
6. Check the preview card count (`96`, `169`, `156`, or `119`) and click **Import**.
7. Set the term language to **Estonian** and the definition language to **Russian**, then click **Create**.
8. Repeat for each block you want (optionally group all 4 sets into one Quizlet folder).

Official guide: https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content

---

## По-русски: как импортировать карточки в Quizlet

540 карточек со словами и выражениями из учебного банка (`data/drill-bank-quality-v3.json`), разбитые на 4 блока экзамена **без повторов** (96 + 169 + 156 + 119 = 540). Внутри каждого файла слова отсортированы по частоте встречаемости в этом блоке.

Можно сразу открыть готовые наборы по ссылкам в таблице выше или создать свои наборы из `.txt`-файлов:

1. Откройте [Quizlet](https://quizlet.com/) в браузере и нажмите **+ → Учебный модуль** (создать набор карточек).
2. Нажмите **+ Импорт** (импорт текста).
3. Скопируйте всё содержимое нужного `.txt`-файла и вставьте в поле импорта.
4. В поле **Между термином и определением** выберите **Табуляция / Tab**.
5. В поле **Между карточками** выберите **Новая строка / New line**.
6. Убедитесь, что в предпросмотре отображается нужное число карточек (`96`, `169`, `156` или `119`), и нажмите **Импортировать**.
7. Выберите язык терминов — **эстонский**, язык определений — **русский**, и сохраните набор.
8. При желании импортируйте каждый из 4 файлов как отдельный набор и объедините их в одну папку.

### Примечание

Наборы предназначены для изучения лексики по материалам учебного тренажёра. Актуальность правовых формулировок на официальном экзамене отдельно не проверялась — для подготовки к реальному экзамену используйте официальные тексты законов и материалы Harno.
