// let btn = document.querySelector('#btn');
// let output = document.querySelector('#output');
// // document.querySelector('#output').style.color = 'black';       // To change the color to black
// let quote = ['" The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela "',

// '" The way to get started is to quit talking and begin doing." -Walt Disney "',

// '" Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma. which is living with the results of other peoples thinking. -Steve Jobs "',

// '" The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevel "',

// '" If you look at what you have in life, you will always have more. If you look at what you dont have in life, youll never have enough. -Oprah Winfrey "',

// '" If you set your goals ridiculously high and its a failure, you will fail above everyone elses success. -James Cameron "',

// '" You may say Im a dreamer, but Im not the only one. I hope someday youll join us. And the world will live as one. -John Lennon "'];

// btn.addEventListener('click', ()=>{
//     const randomquote = quote[Math.floor(Math.random() * quote.length)];
//     // document.querySelector('#output').style.color = 'black';
//     output.innerHTML = randomquote;
// });



let btn = document.querySelector('#btn');
let output = document.querySelector('#output');

let quotes = ["You have to believe in yourself when no one else does.” —Serena Williams" ,
  "When you have a dream, you have got to grab it and never let go.” —Carol Burnett",
    "“The most important thing is to enjoy your life—to be happy—its all that matters.” —Steve Jobs",
    "“Spread love everywhere you go. Let no one ever come without leaving happier.” —Mother Teresa",

    "“Be yourself; everyone else is already taken.” —Oscar Wilde",

    "“The biggest adventure you can take is to live the life of your dreams.” —Oprah Winfrey",

    "“The only thing we have to fear is fear itself.” —Franklin D. Roosevelt",

    "“I can accept failure, everyone fails at something. But I cant accept not trying.” —Michael Jordan",

    "“Youve got to be in it to win it.” —Tony Robbins" ,

    "“It does not matter how slowly you go, as long as you do not stop.” —Confucius" ];

btn.addEventListener('click',()=>{
    let randomquote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML =randomquote;
});