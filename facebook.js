// import 'app.css';

// Nếu cần sét giờ chạy tool thì dùng đống này
const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

// Thêm Css cho web

// const styleUrl = chrome.runtime.getURL('styles.css');
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = styleUrl;
// document.head.appendChild(link);

// Chạy hàm xử lý chính
// if (hour < 12 || (hour >= 14 && hour < 17) ) {
if (true) {
  init();
}

// check URL facebook
function isFacebook() {
  try {
    const currentURL = window.location.href;
    const isTeleURL = currentURL.includes('facebook.com');
  
    if (isTeleURL) {
        console.log('Phát hiện ra website Facebook !!!')
        return true
    };

    return false
  } catch {
    console.log('Không phát hiện ra trang web Facebook')
    return false
  }
}

// Tạo ra conttent chặn ngộ nghĩnh
function createNotify(text) {
  // Tìm ra phần tử body của web
  const body = document.getElementsByTagName('body')[0];

  const containerNotify = document.createElement('div');
  containerNotify.className = 'notify-block';
  containerNotify.id = 'cai-nghien-notify';
  const msg = document.createElement('h1');
  msg.textContent = text ? text : "Lại sửa lại code gì rồi phải không!!!";
  containerNotify.appendChild(msg);

  // list ảnh
  const arrImg = [
    "https://i.pinimg.com/originals/88/a3/f4/88a3f4ff505be8548807e4b73d1be63d.gif",
    "https://i.pinimg.com/originals/ff/4c/1c/ff4c1c3ab2264b7acb526893a2575e63.gif",
    "https://i.pinimg.com/originals/ee/2f/8f/ee2f8f19e327bcc1a90bb777f014946d.gif",
    "https://i.pinimg.com/originals/2e/b8/dd/2eb8dda12be99f0385e10f048ac81aae.gif",
    "https://i.pinimg.com/originals/9f/a3/a0/9fa3a071516dae51b7bbae9843d71329.gif",
    "https://i.pinimg.com/originals/75/e0/60/75e060b40876ab2103c4694217be9389.gif",
  ];

  const random = Math.floor(Math.random() * arrImg.length);
  if(random) {
    const img = document.createElement('img');
    img.src = arrImg[random];
    containerNotify.appendChild(img);
  }

  // Xóa hết nội dung trang web
  body.innerHTML = '';

  // add nội dung mới vào
  body.append(containerNotify);
}

function init() {
  createNotify('Vào FB gì giờ này, ra ngoài làm việc đi!');

  setInterval(() => {
    // Nếu là Facebook thì tôi mới chạy tool
    if (isFacebook)  {
      const notify = document.getElementById('cai-nghien-notify');
      if (notify && notify.style.display === 'none') {
        createNotify('Thêm CSS vào làm gì, Đi làm ngay!!!');
      }
      if (!notify) {
        createNotify('Định xóa HTML à, Không dễ thế đâu. Quay lại làm việc đi!!!');
      } 
    }
  }, 3000);
}

