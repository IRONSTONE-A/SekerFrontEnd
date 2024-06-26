//!   " " , ' ',  ` `

let text = 'antep\'in hamamları'
let text1 = "antep'in \nhamamları"
console.log(text1)
let age = 45

let person = "benim personelim " + age +" yaşında"
let person1 = `benim personelim ${age} yaşında`
console.log(person);
console.log(person1);
let temp = ` <h1>merhaba ${age}</h1>
             <p>Lorem ipsum dolor sit amet.</p>
             <button>
               tıkla
             </button> `
console.log(temp);       

//! kaçış karakterleri 
// \'   quote                   => alıntı
// \b	Backspace               => geri al
// \f	Form Feed               => form besleme
// \n	New Line                => yeni satır
// \r	Carriage Return         => satır başı 
// \t	Horizontal Tabulator    => yatay sekme
// \v	Vertical Tabulator      => dikey sekme
document.getElementById("container").innerHTML = temp

console.log(person)
console.log(person1)