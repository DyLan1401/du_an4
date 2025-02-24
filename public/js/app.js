var images = document.querySelectorAll('.image img');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

// Hiển thị gallery
function galleryShow() {
    // Ẩn/hiện nút điều hướng trái/phải
    if (currentIndex == 0) {
        left.classList.add('hide');
    } else {
        left.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        right.classList.add('hide');
    } else {
        right.classList.remove('hide');
    }

    // Cập nhật ảnh hiển thị trong gallery
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

// Đóng gallery
function closeGallery() {
    gallery.classList.remove('show');
}

// Mở gallery khi click vào ảnh
images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        galleryShow();
    });
});

// Đóng gallery khi click nút đóng
close.addEventListener('click', closeGallery);

// Đóng gallery khi nhấn phím ESC
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) { // 27 là mã phím ESC
        closeGallery();
    }
});

// Chuyển đến ảnh trước đó
left.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        galleryShow();
    }
});

// Chuyển đến ảnh tiếp theo
right.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        galleryShow();
    }
});