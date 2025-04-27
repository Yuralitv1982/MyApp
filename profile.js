const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Шлях до вашого middleware
const User = require('../models/user'); // Шлях до вашої моделі користувача

// Маршрут для відображення профілю користувача (захищений)
router.get('/profile', authenticateToken, async (req, res) => {
   try {
      // `req.user` містить інформацію про автентифікованого користувача,
      // отриману з JWT токена в middleware `authenticateToken`.
      const userId = req.user.userId;

      // Отримання повної інформації про користувача з бази даних
      const user = await User.findById(userId);

      if (!user) {
         return res.status(404).json({ message: 'Користувача не знайдено' });
      }

      // Відправлення даних профілю користувача клієнту
      res.json({
         username: user.username,
         // Додайте інші поля профілю, які ви хочете відобразити
         // наприклад: email: user.email, registrationDate: user.registrationDate, тощо
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Помилка отримання профілю' });
   }
});

module.exports = router;
