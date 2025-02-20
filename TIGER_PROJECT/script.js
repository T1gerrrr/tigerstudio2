function showPage(pageId) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
  
    // Hiển thị trang được chọn
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
  
    // Lưu trang hiện tại vào localStorage
    localStorage.setItem('activePage', pageId);
  }
  
  // Mặc định hiển thị trang được lưu trong localStorage hoặc "gioi-thieu" khi tải trang
  document.addEventListener('DOMContentLoaded', () => {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
      showPage(savedPage); // Nếu có trang đã lưu, hiển thị trang đó
    } else {
      showPage('gioi-thieu'); // Nếu không có, hiển thị trang mặc định "gioi-thieu"
    }
  });
  
  // Thêm sự kiện cho nút "XEM THÊM" để chuyển trang
  const bidButtons = document.querySelectorAll('.bid-now');
  bidButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      showPage('thong-tin-sp'); // Khi nhấn vào nút, chuyển đến trang thong-tin2
    });
  });
  
  // Thêm sự kiện cho việc hiển thị bảng thông tin khi di chuột vào nút
  bidButtons.forEach(button => {
    button.addEventListener('mouseover', (event) => {
      // Tìm thẻ card chứa nút "XEM THÊM" và hiển thị bảng thông tin bên trong nó
      const card = event.target.closest('.card');
      const infoBox = card.querySelector('.info-box');
      infoBox.style.display = 'block'; // Hiển thị bảng thông tin
    });
  
    // Ẩn bảng thông tin khi di chuột ra khỏi nút
    button.addEventListener('mouseout', (event) => {
      const card = event.target.closest('.card');
      const infoBox = card.querySelector('.info-box');
      infoBox.style.display = 'none'; // Ẩn bảng thông tin
    });
  });
  
  
  let currentImageIndex = 0;
  const images = ['img/1.jpg', 'img/logs.png', 'img/TG.png', 'img/bg2.jpg']; // Đường dẫn hình ảnh
  
  function changeImage() {
    const imageElement = document.getElementById('rotating-image');
    
    // Mờ ảnh lại trước khi thay đổi
    imageElement.style.opacity = 0;
  
    // Sau khi ảnh mờ, thay đổi ảnh
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;  // Tăng chỉ số ảnh và quay lại nếu hết danh sách
      imageElement.src = images[currentImageIndex];  // Thay đổi ảnh
  
      // Làm ảnh dần hiện lên
      imageElement.style.opacity = 1;
    }, 1000); // Đợi 1 giây cho hiệu ứng mờ dần trước khi thay đổi ảnh
  }
  
  // Chạy hàm thay đổi ảnh mỗi 5 giây
  setInterval(changeImage, 5000);
  
  // Khởi tạo lần đầu tiên khi trang tải
  changeImage();
  