<template>
  <div class="diagnosis-container">
    <h3 class="diagnosis-title">📋 Laporan Diagnosis Pasien</h3>

    <table class="data-pasien">
      <tbody>
        <tr>
          <th>👤 Nama Pasien</th>
          <td>{{ diagnosis.nama }}</td>
        </tr>
        <tr>
          <th>🎂 Umur</th>
          <td>{{ diagnosis.umur }} tahun</td>
        </tr>
        <tr>
          <th>📅 Tanggal Pemeriksaan</th>
          <td>{{ diagnosis.tanggal }}</td>
        </tr>
      </tbody>
    </table>

    <div class="laporan">
      <p><strong>🩺 Keluhan Utama:</strong> {{ diagnosis.keluhanUtama }}</p>
      <p><strong>🔍 Diagnosa:</strong> {{ diagnosis.keterangan }}</p>
      <p><strong>💊 Rencana Tindakan:</strong> {{ diagnosis.rencana }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diagnosis: {
        nama: 'Arya Mohan',
        umur: 19,
        tanggal: '27 Mei 2025',
        keluhanUtama: 'Demam selama 3 hari dengan suhu 38.5°C disertai sakit kepala dan badan lemas.',
        keterangan: 'Demam akut kemungkinan disebabkan infeksi virus. Tidak ditemukan tanda-tanda infeksi berat.',
        rencana: 'Istirahat cukup, konsumsi banyak cairan, dan konsumsi obat penurun panas 3x sehari setelah makan. Jika demam tidak turun dalam 3 hari, segera kontrol kembali.'
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.diagnosis-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px 35px;
  background: linear-gradient(to bottom right, #f0f4f8, #e0f7f9);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}

.diagnosis-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1abc9c;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(26, 188, 156, 0.2);
}

.data-pasien {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.data-pasien th,
.data-pasien td {
  padding: 12px 16px;
  font-size: 1.1rem;
  text-align: left;
  border-bottom: 1px solid #d1e7e3;
}

.data-pasien th {
  width: 40%;
  background-color: #d1f2eb;
  color: #148f77;
  font-weight: 600;
  border-radius: 8px 0 0 8px;
}

.data-pasien td {
  width: 60%;
  background-color: #fdfefe;
}

.laporan p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin: 18px 0;
  background: #ffffff;
  padding: 15px;
  border-left: 5px solid #1abc9c;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

.laporan p strong {
  color: #16a085;
}
</style>
