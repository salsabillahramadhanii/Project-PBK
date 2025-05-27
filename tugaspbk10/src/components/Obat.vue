<template>
  <div class="obat-container">
    <h3 class="obat-title">🧾 Daftar Obat</h3>

    <div
      class="kategori"
      v-for="(subkategori, kategori) in daftarObat"
      :key="kategori"
    >
      <div class="kategori-header" @click="toggleKategori(kategori)">
        <h4 class="kategori-title">{{ kategori }}</h4>
        <span class="toggle-icon">
          {{ kategoriAktif === kategori ? '▲' : '▼' }}
        </span>
      </div>

      <div v-if="kategoriAktif === kategori" class="kategori-detail">
        <div
          class="subkategori"
          v-for="(obats, sub) in subkategori"
          :key="sub"
        >
          <strong class="subkategori-title">{{ sub }}</strong>
          <ul class="obat-list">
            <li v-for="obat in obats" :key="obat.nama">
              {{ obat.nama }}
              <span class="stok">Stok: {{ obat.stok }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kategoriAktif: null,
      daftarObat: {
        'Obat-obatan': {
          Antibiotik: [
            { nama: 'Amoxicillin', stok: 15 },
            { nama: 'Cefadroxil', stok: 8 }
          ],
          Analgesik: [
            { nama: 'Paracetamol', stok: 50 },
            { nama: 'Ibuprofen', stok: 20 }
          ],
          Antasida: [
            { nama: 'Antasida Doen', stok: 10 },
            { nama: 'Ranitidine', stok: 5 }
          ]
        },
        Infus: {
          Cairan: [
            { nama: 'Ringer Lactate', stok: 12 },
            { nama: 'Nacl 0.9%', stok: 30 }
          ],
          Vitamin: [
            { nama: 'Vitamin C Infus', stok: 7 }
          ]
        },
        Vitamin: {
          Tablet: [
            { nama: 'Redoxon', stok: 25 },
            { nama: 'Enervon-C', stok: 18 }
          ],
          Sirup: [
            { nama: 'Vitamin C Syrup', stok: 22 }
          ]
        },
        'Perawatan Luka': {
          Salep: [
            { nama: 'Salep Ketoprofen', stok: 14 },
            { nama: 'Salep Neosporin', stok: 9 }
          ],
          Perban: [
            { nama: 'Perban Steril', stok: 40 },
            { nama: 'Plester Luka', stok: 60 }
          ]
        }
      }
    };
  },
  methods: {
    toggleKategori(kategori) {
      this.kategoriAktif = this.kategoriAktif === kategori ? null : kategori;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.obat-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 25px 30px;
  background-color: #f8fdfd;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}

.obat-title {
  text-align: center;
  font-size: 1.8rem;
  color: #16a085;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
}

.kategori {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  border: 1.5px solid #1abc9c;
  transition: box-shadow 0.3s ease;
}

.kategori:hover {
  box-shadow: 0 6px 14px rgba(26, 188, 156, 0.15);
}

.kategori-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1abc9c;
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

.kategori-title {
  margin: 0;
}

.toggle-icon {
  font-size: 1.1rem;
}

.kategori-detail {
  padding: 15px 18px;
  background-color: #eafaf9;
}

.subkategori {
  margin-bottom: 14px;
}

.subkategori-title {
  font-size: 1rem;
  color: #148f77;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

.obat-list {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 0.95rem;
  color: #34495e;
}

.obat-list li {
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stok {
  font-weight: 600;
  color: #2980b9;
  font-size: 0.85rem;
  margin-left: 12px;
}
</style>
