const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

if (hour < 12 || (hour >= 14 && hour < 17) ) {
  init();
}

function createNotify(text) {
  const body = document.getElementsByTagName('body')[0];

  const containerNotify = document.createElement('div');
  containerNotify.className = 'notify-block';
  containerNotify.id = 'cai-nghien-notify';
  const msg = document.createElement('h1');
  msg.textContent = text ? text : "Lại sửa lại code gì rồi phải không!!!";
  containerNotify.appendChild(msg);

  const arrImg = [
    "https://i.pinimg.com/originals/88/a3/f4/88a3f4ff505be8548807e4b73d1be63d.gif",
    "https://i.pinimg.com/originals/ff/4c/1c/ff4c1c3ab2264b7acb526893a2575e63.gif",
    "https://i.pinimg.com/originals/ee/2f/8f/ee2f8f19e327bcc1a90bb777f014946d.gif",
    "https://i.pinimg.com/originals/2e/b8/dd/2eb8dda12be99f0385e10f048ac81aae.gif",
    "https://i.pinimg.com/originals/9f/a3/a0/9fa3a071516dae51b7bbae9843d71329.gif",
    "https://i.pinimg.com/originals/75/e0/60/75e060b40876ab2103c4694217be9389.gif",
    "https://i.pinimg.com/originals/19/3b/ff/193bff606ef659249253cb7a84f10b3c.gif",
  ];

  const random = Math.floor(Math.random() * arrImg.length);
  if(random) {
    const img = document.createElement('img');
    img.src = arrImg[random];
    containerNotify.appendChild(img);
  }

  body.append(containerNotify);
}

function init() {
  createNotify('Vào FB gì giờ này, ra ngoài làm việc đi!');

  setInterval(() => {
    const notify = document.getElementById('cai-nghien-notify');
    if (notify && notify.style.display === 'none') {
      createNotify('Thêm CSS vào làm gì, Đi làm ngay!!!');
    }
    if (!notify) {
      createNotify('Định xóa HTML à, Không dễ thế đâu. Quay lại làm việc đi!!!');
    }
  }, 3000);
}

