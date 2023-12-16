export const quizData = {
  quizzes: [
    {
      title: "Algoritmlar bo'yicha savollar",
      icon: "/images/genetic-algorithm-svgrepo-com.svg",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Chiziqli, takrorlanuvchi, tarmoqlanuvchi va aralash algoritmlar",
            "matematik va fizik algoritmlar",
            "kimyoviy algoritmlar",
            "To’g’ri javob yo’q",
          ],
          answer: "Chiziqli, takrorlanuvchi, tarmoqlanuvchi va aralash algoritmlar",
        },
        {
          question:
            "XX asrning 70-yillarida golland olimi Edsger Deykstra (1930– 2002) har qanday algoritm uning nima maqsadda tuzilganligi va murakkabligidan qat’i nazar, nechta algoritmik konstruksiyadan foydalanilgan holda yozilishi mumkinligi haqidagi g‘oyani ilgari surdi va tо‘liq asoslab berdi?",
          options: [
            "4 ta",
            "5 ta",
            "3 ta",
            "6 ta",
          ],
          answer: "3 ta",
        },
        {
          question:
            "Qaysi algoritmga, biron bir shart tekshirilishi yoki qandaydir parametrning har xil qiymatlari asosida algoritmda takrorlanish yuz beradigan jarayonlarga aytiladi?",
          options: [
            "Takrorlanuvchi",
            "Tarmoqlanuvchi",
            "chiziqli",
            "to’g’ri javob yo’q"],
          answer: "Takrorlanuvchi",
        },
        {
          question: "Tarkibida bir necha turdagi algoritmlar qatnashgan algoritmga qaysi (kombinatsiyalashgan) algoritm deyiladi?",
          options: [
            "Tarmoqlanuvchi",
            "chiziqli",
            "Aralash",
            "Takrorlanuvchi",
          ],
          answer:
            "Aralash",
        },
      ],
    },
    {
      title: "Dasturlash tillari bo’yicha savollar",
      icon: "/images/python_original_logo_icon_146381.svg",
      questions: [
        {
          question: "1. ....... dastur kodini kiritish, uni fayl sifatida saqlamasdan turib natijasini ko‘rish muhiti?",
          options: [
            "Dasturlash muhiti",
            "chiziqli muhit",
            "Takrorlanuvchi muhit",
            "Interfaol muhit",
          ],
          answer: "Interfaol muhit",
        },
        {
          question: "2.	…………  dastur kodini kiritish, alohida fayl sifatida saqlash va ishga tushirish muhiti.",
          options: ["tarmoqlanuvchi muhit", " chiziqli muhit", "Takrorlanuvchi muhit", "Dasturlash muhiti"],
          answer: "Dasturlash muhiti",
        },
        {
          question: "Qaysi tilda interfaol web-saytlarni yozish uchun mo‘ljallangan til.",
          options: [
            "PHP",
            "JAVA",
            "C#",
            "JavaScript",
          ],
          answer: "JavaScript",
        },
        {
          question:
            "........ inson va kompyuter o‘rtasidagi rasmiy aloqa tili. U ma’lum qoidalar asosida ma’lumotlarni qayta ishlash dasturlarini yaratish uchun qo‘llaniladi?",
          options: ["IDE", "C#", "PHP", "Dasturlash tili"],
          answer: "Dasturlash tili",
        },
        {
          question: "Kompyuter dasturlarini yaratish jarayoni ham kompyuterda masalani yechish jarayoniga o‘xshash bo‘lib,  necha bosqichni o‘z ichiga oladi?",
          options: ["6 bosqichni", "8 bosqichni", "2 bosqichni", "4 bosqichni"],
          answer: "6 bosqichni",
        },
      ],
    },
    {
      title: "Python dasturlash tili bo’yicha savollar",
      icon: "/images/python_103279.svg",
      questions: [
        {
          question:
            `1.	>>> age = 15<br>
                >>> print(age)
                <br>natijasi qanday qiymat qaytaradi?
            `,
          options: [
            "15",
            "7.5",
            "9",
            "14",
          ],
          answer: "15",
        },
        {
          question: `2.	>>> name = 'Anvar'<br>
                        >>> print(name)<br>natijasi qanday qiymat qaytaradi?
          `,
          options: [
            "Anva",
            "Sarvar",
            "Var",
            "Anvar",
          ],
          answer: "Anvar",
        },
        {
          question: `3.	>>> a = 6<br>
          >>> b = a<br>
          >>> a = 10<br>
          >>> c = a + b<br>
          >>> print(c)<br>   natijasi qanday qiymat qaytaradi?
          `,
          options: ["10", "20", "16","22"],
          answer: "16",
        },
        {
          question:
            `4.	>>> a = 48<br>
            >>> b = 8<br>
            >>> c = a / b<br>
            >>> print(c)<br>
            `,
          options: [
            "7.0",
            "8.0",
            "6.0",
            "5.0"
          ],
          answer: "6.0",
        },
        {
          question: `5.	>>> a = “Hello”<br>
          >>> b = “World”<br>
          >>> print(a+ “ ” + b)<br>  natijasi qanday qiymat qaytaradi?
          `,
          options: [
            "World  Hello",
            "Hello World",
            "HelloWorld",
            "to’g’ri javob yo’q",
          ],
          answer: "Hello World",
        }
      ],
    },
    // {
    //   title: "Accessibility",
    //   icon: "/images/icon-accessibility.svg",
    //   questions: [
    //     {
    //       question: "What does 'WCAG' stand for?",
    //       options: [
    //         "Web Content Accessibility Guidelines",
    //         "Web Compliance Accessibility Guide",
    //         "Web Content Accessibility Goals",
    //         "Website Compliance and Accessibility Guidelines",
    //       ],
    //       answer: "Web Content Accessibility Guidelines",
    //     },
    //     {
    //       question:
    //         "Which element is used to provide alternative text for images for screen reader users?",
    //       options: [
    //         "<alt>",
    //         "<figcaption>",
    //         "<description>",
    //         "<img alt='description'>",
    //       ],
    //       answer: "<img alt='description'>",
    //     },
    //     {
    //       question: "What does ARIA stand for in web development?",
    //       options: [
    //         "Accessible Rich Internet Applications",
    //         "Advanced Responsive Internet Assistance",
    //         "Accessible Responsive Internet Applications",
    //         "Automated Responsive Internet Actions",
    //       ],
    //       answer: "Accessible Rich Internet Applications",
    //     },
    //     {
    //       question: "Which of the following is not a principle of the WCAG?",
    //       options: ["Perceivable", "Dependable", "Operable", "Understandable"],
    //       answer: "Dependable",
    //     },
    //     {
    //       question:
    //         "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
    //       options: ["3:1", "4.5:1", "7:1", "2:1"],
    //       answer: "4.5:1",
    //     },
    //     {
    //       question:
    //         "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
    //       options: ["<div>", "<span>", "<a href='...'>", "<p>"],
    //       answer: "<a href='...'>",
    //     },
    //     {
    //       question:
    //         "What is the purpose of the 'lang' attribute in an HTML page?",
    //       options: [
    //         "To specify the scripting language",
    //         "To define the character set",
    //         "To indicate the language of the page content",
    //         "To declare a language pack",
    //       ],
    //       answer: "To indicate the language of the page content",
    //     },
    //     {
    //       question:
    //         "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
    //       options: [
    //         "Keyboard Accessible",
    //         "Mouse Independence",
    //         "Device Independence",
    //         "Operable Controls",
    //       ],
    //       answer: "Keyboard Accessible",
    //     },
    //     {
    //       question:
    //         "What is the role of 'skip navigation' links in web accessibility?",
    //       options: [
    //         "To skip over primary navigation to the main content",
    //         "To provide shortcuts to different sections of the website",
    //         "To help users skip unwanted sections like advertisements",
    //         "To bypass broken links in the navigation",
    //       ],
    //       answer: "To skip over primary navigation to the main content",
    //     },
    //     {
    //       question:
    //         "Which of these tools can help in checking the accessibility of a website?",
    //       options: [
    //         "W3C Validator",
    //         "Google Lighthouse",
    //         "CSS Validator",
    //         "JavaScript Console",
    //       ],
    //       answer: "Google Lighthouse",
    //     },
    //   ],
    // },
  ],
};
