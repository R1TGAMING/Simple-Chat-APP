      const socket = io();
      const form = document.getElementById('form');
      const input = document.getElementById('input');
      const messages = document.getElementById('messages');
      const user = document.getElementById('user');

      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        socket.emit('chat-masuk', input.value);
        input.value = '';

      })

      socket.on('chat-keluar', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        
      })

      socket.on("user-online", (msg) => {
        user.innerHTML = msg;
      })