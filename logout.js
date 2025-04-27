const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Шлях до вашого middleware

// Маршрут для виходу користувача (захищений, щоб переконатися, що користувач увійшов)
router.post('/logout', authenticateToken, (req, res) => {
   try {
      // На сервері ми можемо виконати певні дії, наприклад,
      // залогувати вихід користувача.
      console.log(`Користувач з ID ${req.user.userId} вийшов.`);

      // У випадку JWT, основна робота робиться на клієнті.
      // Ми просто відправляємо успішний статус.
      res.status(200).json({ message: 'Вихід успішний' });

      // Альтернативно (якщо ви реалізуєте "чорний список" токенів):
      // const token = req.headers['authorization'].split(' ')[1];
      // blacklistToken(token); // Функція для додавання токена до чорного списку
      // res.status(200).json({ message: 'Вихід успішний, токен анульовано' });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Помилка виходу' });
   }
});

module.exports = router;
