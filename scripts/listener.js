function Listener({move,start}) {
    window.addEventListener('keyup', function(e) {
      switch (e.code) {
        case 'ArrowUp':
          move({ row: -1, column: 0 });
          break;
        case 'ArrowLeft':
          move({ row: 0, column: -1 });
          break;
        case 'ArrowRight':
          move({ row: 0, column: 1 });
          break;
        case 'ArrowDown':
          move({ row: 1, column: 0 });
          break;
      }
    });
  
       // 处理 again 按钮点击事件
       const buttons = document.getElementsByClassName('again');
       for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
            start();
            });
          }
   
   // 处理触摸事件
   const upButton = document.getElementById('up-button');
   const downButton = document.getElementById('down-button');
   const leftButton = document.getElementById('left-button');
   const rightButton = document.getElementById('right-button');

   if (upButton && downButton && leftButton && rightButton) {
       upButton.addEventListener('touchstart', () => move({ row: -1, column: 0 }));
       downButton.addEventListener('touchstart', () => move({ row: 1, column: 0 }));
       leftButton.addEventListener('touchstart', () => move({ row: 0, column: -1 }));
       rightButton.addEventListener('touchstart', () => move({ row: 0, column: 1 }));
   }
}



  


