---
sidebar_position: 1
---

# HTML nima?

Internetda "HTML dasturlash tilimi yoki yo'qmi" degan ko'p argumentlar va _meme_ mavjud:

![HTML memes](./img/html_memes.png)

Lekin bir narsa aniq, **HTML** veb-sahifalarni yasash uchun standart _markup_ tili hisoblanadi va *HTML*siz _website_ yasay olmaymiz. _HTML_ - **H**yper **T**ext **M**arkup **L**anguage bo'lib, webdagi *content*ni ma'nosi va tuzilishini belgilaydi. *HTML*dan tashqari boshqa texnologiyalar odatda veb-sahifaning ko'rinishini (CSS) yoki funksionalligi (JavaScript) tasvirlash uchun ishlatiladi.

Hozir siz *HTML*ni o'rganypsiz, shuning uchun siz "HTML dasturlash tili va men dasturchiman" - deb tortishsangiz bo'ladi 😅. (Agarda isbotlab ber deyishsa [ushbu blogni](https://javascript.plainenglish.io/html-is-a-programming-language-prove-me-wrong-7c1ab0c9b8f9) o'qib ko'ring 😎).

## Oddiy HTML strukturasi

Pastda eng oddiy HTML code ko'rsatilgan:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Kiwi Title</title>
  </head>
  <body>
    <h1>Heading h1</h1>
    <p>Paragraph p</p>

    <section></section>

    <footer>© 2023 kiwiCodeCamp.</footer>
  </body>
</html>
```

Yuqoridagi HTML codeni browswerdagi ko'rinishi 👇

<iframe width="100%" height="300" src="//jsfiddle.net/nomanoff/p78zxmnq/3/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
