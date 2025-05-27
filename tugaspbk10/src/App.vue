<template>
  <div class="container">
    <h1 class="title">🌿e-FarmaCare RS Eka Hospital🌿</h1>
    <h2 class="subtitle">"Solusi Apotik Digital yang Cepat & Terpercaya"</h2>
    <p class="description">
        e-FarmaCare RS Eka Hospital adalah sistem apotik digital yang memudahkan pengelolaan obat, pencatatan resep, dan pemantauan stok secara real-time.  
      Dengan antarmuka yang intuitif, sistem ini membantu tenaga medis dan farmasi bekerja lebih cepat, akurat, dan efisien.
    </p>

    <nav class="nav">
      <router-link :to="{ path: '/login' }" class="nav-link" exact-active-class="active-link">
        👤 Login
      </router-link>
      <router-link :to="{ path: '/diagnosis' }" class="nav-link" exact-active-class="active-link">
        🩺 Diagnosis
      </router-link>
      <router-link :to="{ path: '/obat' }" class="nav-link" exact-active-class="active-link">
        💊 Obat
      </router-link>
      <router-link :to="{ path: '/resep' }" class="nav-link" exact-active-class="active-link">
        📋 Resep
      </router-link>
    </nav>

    <hr class="divider" />
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media (max-width: 600px) {
  .container {
    padding: 20px;
    margin: 20px auto;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1rem;
    padding: 16px;
  }

  .nav {
    flex-direction: column;
    gap: 16px;
  }

  .nav-link {
    font-size: 1rem;
    justify-content: center;
  }
}

.container {
  max-width: 850px;
  margin: 50px auto;
  padding: 25px 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  background: linear-gradient(135deg, #e0f7f9, #f0f4f8);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s ease;
}

.container:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.title {
  font-size: 3rem;
  font-weight: 800;
  color: #1b3a57;
  margin-bottom: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(27, 58, 87, 0.3);
}

.subtitle {
  font-size: 1.8rem;
  font-weight: 700;
  color: #16a085; 
  margin-bottom: 26px;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(22, 160, 133, 0.3);
}


.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #3a4a5a;
  text-align: justify;
  margin: 0 auto 40px;
  padding: 20px 25px;
  max-width: 720px;
  background: rgba(22, 160, 133, 0.1);
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(22, 160, 133, 0.15);
  user-select: text;
  transition: background-color 0.3s ease;
}

.description:hover {
  background: rgba(22, 160, 133, 0.15);
}

.nav {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  color: #2980b9;
  padding: 10px 22px;
  border-radius: 10px;
  background: #eaf6fb;
  box-shadow: 0 2px 8px rgba(41, 128, 185, 0.15);
  transition: background-color 0.35s ease, color 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease;
  user-select: none;
  font-size: 1.05rem;
}

.nav-link:hover {
  background-color: #16a085;
  color: white;
  box-shadow: 0 4px 15px rgba(22, 160, 133, 0.6);
  transform: translateY(-3px);
}

.active-link {
  background-color: #16a085;
  color: white;
  box-shadow: 0 0 12px rgba(22, 160, 133, 0.75);
  transform: translateY(-2px);
}

.divider {
  border: none;
  height: 2px;
  background: linear-gradient(to right, #16a085, #2980b9);
  margin-bottom: 25px;
  border-radius: 10px;
}
</style>
