# Домашнее задание по селекторам и локаторам. Уровень 1: Основы
**Сайт для практики:** https://www.wikipedia.org/

### 1. Найти главный логотип Wikipedia
* **CSS:** `.central-textlogo`
* **XPath:** `//div[@class='central-textlogo']`

### 2. Найти поле для ввода поискового запроса по его ID
* **CSS:** `#search-input`
* **XPath:** `//*[@id='search-input']`

### 3. Найти кнопку поиска (с иконкой лупы) по её типу
* **CSS:** `button[type='submit']`
* **XPath:** `//button[@type='submit']`

### 4. Найти все ссылки <a>, ведущие на другие языковые версии
* **CSS:** `.central-featured a`
* **XPath:** `//div[@class='central-featured']//a`

### 5. Найти заголовок "Русский" по его атрибуту lang
* **CSS:** `.central-featured [lang='ru'] strong`
* **XPath:** `//nav[contains(@class, 'central-featured')]//*[@lang='ru']//strong`

### 6. Найти ссылку на английскую версию по её ID
* **CSS:** `#js-link-box-en`
* **XPath:** `//*[@id='js-link-box-en']`

### 7. Найти элемент <small>, который содержит количество статей на русском языке
* **CSS:** `#js-link-box-ru small`
* **XPath:** `//a[@id='js-link-box-ru']/small`

### Продвинутые селекторы

### 8. Найти ссылку <a> на испанскую версию (Español), которая является прямым потомком элемента с lang="es"
* **CSS:** `[lang='es'] > a`
* **XPath:** `//*[@lang='es']/a`

### 9. Найти пятый по счету языковой блок в списке
* **CSS:** `.central-featured-lang:nth-child(5)`
* **XPath:** `(//div[contains(@class, 'central-featured-lang')])[5]`

### 10. Найти элемент, содержащий точный текст "日本語"
* **CSS:** `[lang='ja'] strong`
* **XPath:** `//strong[text()='日本語']`

### 11. Найти все языковые блоки, атрибут lang которых начинается с буквы "e" (English, Español, Esperanto)
* **CSS:** `div[lang^='e']`
* **XPath:** `//div[starts-with(@lang, 'e')]`

### 12. Найти ссылку <a>, URL которой (href) содержит подстроку "es.wikipedia"
* **CSS:** `.central-featured a[href*='es.wikipedia']`
* **XPath:** `//*[@class='central-featured']//a[contains(@href, 'es.wikipedia')]
`

### 13. Найти элемент с количеством статей (<small>), который идет сразу после элемента <strong> с текстом "Español"
* **CSS:** `[lang='es'] strong + small`
* **XPath:** `//strong[text()='Español']/following-sibling::small`

### 14. Найти последний языковой блок в главном списке
* **CSS:** `.central-featured-lang:last-child`
* **XPath:** `(//div[contains(@class, 'central-featured-lang')])[last()]`

### 15. Найти ссылку <a> внутри элемента с текстом "Italiano"
* **CSS:** `.central-featured-lang[lang='it']`
* **XPath:** `//a[.//strong[text()='Italiano']]`