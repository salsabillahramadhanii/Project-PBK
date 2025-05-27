<template>
  <div class="container">
    <h3>💊 Resep Obat</h3>

    <label for="pasien">Nama Pasien:</label>
    <input id="pasien" v-model="pasien" placeholder="Masukkan nama pasien" />

    <label for="obat">Nama Obat:</label>
    <input id="obat" v-model="obat" placeholder="Masukkan nama obat" />

    <button @click="kirimResep">Kirim Resep</button>

    <div v-if="hasilResep" class="hasil-resep">
      <h4>✅ Resep Terkirim</h4>
      <p>
        Resep untuk pasien <strong>{{ hasilResep.pasien }}</strong> dengan obat
        <strong>{{ hasilResep.obat }}</strong> telah berhasil dikirim ke apoteker.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasien: '',
      obat: '',
      hasilResep: null
    };
  },
  methods: {
    kirimResep() {
      if (!this.pasien.trim() || !this.obat.trim()) {
        alert('Harap isi nama pasien dan nama obat!');
        return;
      }
      this.hasilResep = {
        pasien: this.pasien.trim(),
        obat: this.obat.trim()
      };
      this.pasien = '';
      this.obat = '';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.container {
  max-width: 450px;
  margin: 40px auto;
  padding: 28px 32px;
  background-color: #f8fdfd;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}

h3 {
  text-align: center;
  font-size: 1.8rem;
  color: #1abc9c;
  font-weight: 700;
  margin-bottom: 24px;
}

label {
  display: block;
  margin: 16px 0 6px;
  font-weight: 600;
  color: #2980b9;
}

input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #2980b9;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 10px rgba(26, 188, 156, 0.3);
}

button {
  margin-top: 26px;
  width: 100%;
  background-color: #1abc9c;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #16a085;
}

.hasil-resep {
  margin-top: 30px;
  background-color: #e8f9f5;
  border: 1.5px solid #1abc9c;
  border-radius: 10px;
  padding: 18px 22px;
  color: #117a65;
}

.hasil-resep h4 {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #16a085;
}
</style>
