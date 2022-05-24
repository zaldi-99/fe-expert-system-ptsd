import React from "react";
import Navbar from "../components/Navbar";

const AboutSystem = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="about-container">
        <h1>Tentang Sistem</h1>
      </div>
      <div className="about-information">
        <h3>
          Website ini merupakan aplikasi sistem pakar yang dibuat dengan tujuan
          membantu seseorang melakukan deteksi dini terhadap gangguan stress
          pasca trauma yang kemungkinan terjadi pada seseorang dengan pengalaman
          traumatis.
        </h3>
        <p>
          Gejala gejala yang digunakan untuk melakukan diagnosa PTSD didapatkan
          dari *mas soni* selain itu juga gejala yang digunakan merujuk pada
          buku DSM-IV. Saran penganan yang diberikan jika pengguna terdiagnosa
          menderita PTSD adalah dengan berkonsultasi langsung dengan pakar yang
          dipercaya atau segera datang ke penyedia layanan kesehatan terdekat.
        </p>
        <p>
          Dalam menentukan seseorang terdiagnosa ptsd atau tidak adalah dengan
          menerapkan aturan-aturan yang diambil bersama dengan pakar dan juga
          buku DSM-IV. Aturan tersebut adalah sebagai berikut :
          <ol>
            <li>
              Jika tidak pernah mengalami peristiwa traumatis, maka negatif PTSD
            </li>
            <li>
              Jika pernah mengalami peristiwa traumatis diikuti dengan adanya
              satu atau lebih gejala intrusi (intrusion) maka positif PTSD.
            </li>
            <li>
              Jika pernah mengalami peristiwa traumatis diikuti dengan adanya
              satu atau lebih gejala penghindaran (avoidance) maka positif PTSD.
            </li>
            <li>
              Jika pernah mengalami peristiwa traumatis diikuti dengan adanya
              dua atau lebih gejala perubahan suansa hati (mood) maka positif
              PTSD.
            </li>
            <li>
              Jika pernah mengalami peristiwa traumatis diikuti dengan adanya
              dua atau lebih gejala perubahan gairah dan reaktivitas (arousal)
              maka positif PTSD.
            </li>
          </ol>
          Penjelasan singkat dari aturan yang ditetapkan adalah jika seseorang
          mengalami peristiwa traumatis kemudian diikuti dengan adanya gejala
          intrusi maka sistem akan memberikan hasil positif.
        </p>
        <p>
          Aplikasi ini dibuat oleh Mochamad Rizky Zaldi, mahasiswa informatika
          Universitas Multimedia Nusantara untuk memenuhi tugas akhir sebagai
          syarat kelulusan.
        </p>
      </div>
    </div>
  );
};

export default AboutSystem;
