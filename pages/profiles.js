<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>¿Quién está leyendo hoy?</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #eef0f8, #dce3f0);
      text-align: center;
      color: #4b0082;
    }

    h1 {
      font-size: 2.5rem;
      margin-top: 40px;
      color: #6a0dad;
    }

    .profile-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
      padding: 40px;
    }

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 140px;
      transition: transform 0.3s ease;
    }

    .profile:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    .profile img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #6a0dad;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .profile span {
      margin-top: 10px;
      font-weight: bold;
      color: #333;
    }

    .add-profile {
      background: linear-gradient(135deg, #ec32a0, #7b2ff7);
      border: 4px dashed white;
      color: white;
      font-size: 2rem;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cta {
      margin-top: 50px;
      background: linear-gradient(90deg, #ffc107, #ff5722);
      color: white;
      padding: 20px 30px;
      font-size: 1.4rem;
      font-weight: bold;
      border-radius: 20px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      display: inline-block;
      text-decoration: none;
    }

    .cta:hover {
      background: linear-gradient(90deg, #ff9800, #ff3d00);
    }
  </style>
</head>
<body>
  <h1>¿Quién está leyendo hoy?</h1>
  <div class="profile-container">
    <div class="profile">
      <img src="https://cuentoseternos.com/images/leo.png" alt="Leo" />
      <span>Leo</span>
    </div>
    <div class="profile">
      <img src="https://cuentoseternos.com/images/mia.png" alt="Mia" />
      <span>Mia</span>
    </div>
    <div class="profile">
      <img src="https://cuentoseternos.com/images/max.png" alt="Max" />
      <span>Max</span>
    </div>
    <div class="profile">
      <div class="add-profile">+</div>
      <span>Agregar perfil</span>
    </div>
  </div>

  <a class="cta" href="/caricatura">$1 Caricatura mágica → ¡Descúbrela!</a>
</body>
</html>
