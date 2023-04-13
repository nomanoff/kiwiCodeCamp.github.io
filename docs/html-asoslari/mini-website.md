---
sidebar_position: 3
---

# HTML mini website

Avvalgi darsda boshlab qo'ygan Birinchi HTML loyihamizni davom ettiramiz.

## Images

`<img>` elementiga yana e'tibor beraylik:

```html
<img src="images/kiwicode-logo.png" alt="kiwicodecampning logosi" />
```

Yuqorida aytib o'tganimizdek, `<img>` sahifamizga rasmni o'zi qayerga yozilgan bo'lsa o'sha tartib bilan joylashtiradi.

We have also included an alt (alternative) attribute. In the alt attribute, you specify descriptive text for users who cannot see the image, possibly because of the following reasons:

Shuningdek, biz `alt` (aleternative) atributni ham kiritdik. Alt atributida siz tasvirni ko'ra olmaydigan foydalanuvchilar uchun o'sha rasmni tavsiflovchi matnni belgilaysiz, ehtimol quyidagi sabablarga ko'ra:

1. Ko'zi ojiz foydalanuvchilari uchun. Ko'rish qobiliyati sezilarli darajada zaif bo'lgan foydalanuvchilar ko'pincha *alt*dagi matnni o'qish uchun "screen reader" deb nomlangan vositalardan foydalanadilar. Shu yo'l bilan ular rasmni ko'rishmasa ham rasm nima ekanini his qilishlari mumkin.

2. Biror narsa noto'g'ri ketdi va rasm 'load' bo'lmay qoldi. Ushbu holatda browser rasmni o'rniga *alt*dagi matnni ko'rsatadi. Masalan, men `src="images/kiwicode-logo.png"` noto'g'ri qilib hato yazsam, deylik `src="images/kiwi-logo.png"`, shunda biz vebsahifamizda taxminan mana bunday yozuv ko'ramiz:

![cannot load the kiwicodecamp logo img because wrong path](./img/cannot-load-img.png)

:::tip Accessibility

Yuqoridaginday "imkoniyati cheklanglar" uchun yaxshi _software_ yarata olish **accessibility** deb ataladi. Bu borada alohida o'qishadi. Agarda ko'proq ma'lumot bilmoqchi bo'lsangiz unda [ushbu manbani](https://developer.mozilla.org/en-US/docs/Learn/Accessibility) maslahat beraman.

:::
