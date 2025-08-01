

  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');
  const overlay = document.getElementById('popupOverlay');

  openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    // Thêm lớp để kích hoạt hiệu ứng
    setTimeout(() => overlay.classList.add('show'), 10);
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    // Chờ hiệu ứng xong mới ẩn hoàn toàn
    setTimeout(() => overlay.style.display = 'none', 300);
  });

  document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');
  const overlay = document.getElementById('popupOverlay');
  const cancelBtn = document.getElementById('cancelBtn');
  const continueBtn = document.getElementById('continueBtn');
  const input = document.getElementById('userInput');

  function closePopup() {
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 300);
  }

  openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('show'), 10);
  });

  closeBtn.addEventListener('click', closePopup);
  cancelBtn.addEventListener('click', closePopup);

  continueBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
      alert('Bạn đã nhập: ' + value);
      closePopup();
    } else {
      alert('Vui lòng nhập dữ liệu.');
    }
  });
});

