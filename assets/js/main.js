
$(document).ready(function() {
    $('.menu ul li a').click(function(e) {
      e.preventDefault();
      const targetId = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(targetId).offset().top }, 'slow');
    })
  })
  

  var arr_hinh = [
    "assets/img/anh1.png",
    "assets/img/anh2.png",
    "assets/img/anh3.png",
    "assets/img/anh4.png",
    "assets/img/anh5.png"
    ];
    var index = 0;

    function prev() {
    index--;
    if (index < 0) {
        index = arr_hinh.length - 1;
    }
    document.getElementById("hinh").src = arr_hinh[index];
    }

    function next() {
    index++;
    if (index == arr_hinh.length) {
        index = 0;
    }
    document.getElementById("hinh").src = arr_hinh[index];
    }
    
    window.addEventListener('scroll', function() {
    var keomenu = document.querySelector('.keomenu');
    var scrollPosition = window.scrollY;

    // Điều kiện để thêm/đổi lớp
    if (scrollPosition > 0) {
        keomenu.classList.add('active'); // Thêm lớp "active" vào keomenu
        canhgiua.style.color = 'red'; // Đổi màu chữ thành màu đỏ
    } else {
        keomenu.classList.remove('active'); // Xóa lớp "active" khỏi keomenu
        menu.style.color = 'black'; // Đổi màu chữ thành màu đen
    }
    });