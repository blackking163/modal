const ProductsData = [
    {
       img: './img/card-1.png',
       title:'3D Soft Curves',
       user:'♾️ Esther Howard',
       price:'0,89 Eth'
    },
    {
       img: './img/card-2.png',
       title:'The mystery of the black square',
       user:'👨🏿‍🦱 Jenny Wilson',
       price:'0.24 ETH'
    },
    {
       img: './img/card-3.png',
       title:'Pink Cloud 🌥',
       user:'😂 Floyd Miles',
       price:'0.3 ETH'
    },
    {
       img: './img/card-4.png',
       title:'3D Ethereum',
       user:'🔝 Jane Cooper',
       price:'0.12 ETH'
    }
 ]
 
 
 const wrapper = document.querySelector('.live__wrapper1');
 const cards = ProductsData.map((card) => {
   return `
           <div class="live__card">
             <img src="${card.img}" alt="" class="live__card-img" />
             <div class="live__card-box">
               <h3>${card.title}</h3>
               <div>
                 <p>${card.user}</p>
                 <p>
                   Current Bid <br />
                   <b>${card.price}</b>
                 </p>
               </div>
             </div>
           </div>
     `;
 }).join('');
 wrapper.innerHTML = cards;
 
 const ProductsData2 = [
    
       {
          img: './img/card-5.png',
          title:'3D Soft Curves',
          user:'♾️ Esther Howard',
          price:'0,89 Eth'
       },
       {
          img: './img/card-6.png',
          title:'The mystery of the black square',
          user:'👨🏿‍🦱 Jenny Wilson',
          price:'0.24 ETH'
       },
       {
          img: './img/card-7.png',
          title:'Pink Cloud 🌥',
          user:'😂 Floyd Miles',
          price:'0.3 ETH'
       },
       {
          img: './img/card-8.png',
          title:'3D Ethereum',
          user:'🔝 Jane Cooper',
          price:'0.12 ETH'
       },
    
       {
          img: './img/card-9.png',
          title:'3D Soft Curves',
          user:'♾️ Esther Howard',
          price:'0,89 Eth'
       },
       {
          img: './img/card-10.png',
          title:'The mystery of the black square',
          user:'👨🏿‍🦱 Jenny Wilson',
          price:'0.24 ETH'
       },
       {
          img: './img/card-11.png',
          title:'Pink Cloud 🌥',
          user:'😂 Floyd Miles',
          price:'0.3 ETH'
       },
       {
          img: './img/card-12.png',
          title:'3D Ethereum',
          user:'🔝 Jane Cooper',
          price:'0.12 ETH'
       },
    
       {
          img: './img/card-13.png',
          title:'3D Soft Curves',
          user:'♾️ Esther Howard',
          price:'0,89 Eth'
       },
       {
          img: './img/card-14.png',
          title:'The mystery of the black square',
          user:'👨🏿‍🦱 Jenny Wilson',
          price:'0.24 ETH'
       },
       {
          img: './img/card-15.png',
          title:'Pink Cloud 🌥',
          user:'😂 Floyd Miles',
          price:'0.3 ETH'
       },
       {
          img: './img/card-1.png',
          title:'3D Ethereum',
          user:'🔝 Jane Cooper',
          price:'0.12 ETH'
       },
    
 ]
 
 const wrapper2 = document.querySelector('.live__wrapper2');
 const cards2 = ProductsData2.map((card) => {
   return `
           <div class="live__card">
             <img src="${card.img}" alt="" class="live__card-img" />
             <div class="live__card-box">
               <h3>${card.title}</h3>
               <div>
                 <p>${card.user}</p>
                 <p>
                   Current Bid <br />
                   <b>${card.price}</b>
                 </p>
               </div>
             </div>
           </div>
     `;
 }).join('');
 wrapper2.innerHTML = cards2;



















const modal = document.querySelector('.modal')
const openModal = document.querySelector('#open-btn')
const closeModal = document.querySelector('.close')

openModal.onclick = () => {
   modal.classList.add('active')

}
closeModal.onclick = () => {
   modal.classList.remove('active')
} 































































































































































document.getElementById('telegramForm').addEventListener('submit', function (e) {
   e.preventDefault();

   const name = document.getElementById('name').value;
   const phone = document.getElementById('phone').value;
   const token = '7120947305:AAEAiGl3pVQVKBiYsg-Ur4qez7Ih2ssb7vg';  // Замените на ваш токен
   const chat_id = '-4570303746';  // Замените на ваш chat_id
   const url = `https://api.telegram.org/bot${token}/sendMessage`;

   // Формируем сообщение
   const message = `Name: ${name}\nPhone: ${phone}`;

   const data = {
     chat_id: chat_id,
     text: message
   };

   fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => {
     if (data.ok) {
       alert("Message sent!");
     } else {
       alert("Error sending message.");
     }
   })
   .catch(error => {
     console.error('Error:', error);
     alert("Error sending message.");
   });
 });






 const theme = document.querySelector('#theme')
 const body = document.querySelector('body')

 theme.onclick = () => {
   body.classList.toggle('dark')
 }
 








































 
