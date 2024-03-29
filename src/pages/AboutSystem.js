import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutSystem.css";

const AboutSystem = () => {
  return (
    <div className="page">
      <Navbar />
      <section className="about-container">
        <div className="about-header">
          <h1>Tentang Sistem</h1>
        </div>
        <div className="about-information">
          <div className="about-information-item">
            <div className="about-heading">
              <h3>Deskripsi</h3>
            </div>
            <p>
              Website ini merupakan aplikasi sistem pakar yang dibuat dengan
              tujuan membantu seseorang melakukan deteksi dini terhadap
              posttraumatic stress disorder atau gangguan stress pasca trauma
              yang kemungkinan terjadi pada seseorang dengan pengalaman
              traumatis. Diharapkan dengan dilakukannya deteksi dini maka
              pengguna dapat segera mendapatkan penanganan yang tepat sebelum
              adanya gangguan lain terjadi.
            </p>
          </div>
          <div className="about-information-item">
            <div className="about-heading">
              <h3>Sistem Pakar</h3>
            </div>
            <p>
              Sistem pakar merupakan suatu program komputer atau sistem
              informasi yang mengandung beberapa pengetahuan dari satu atau
              lebih pakar manusia terkait suatu bidang yang cenderung spesifik.
              Pada sistem pakar diagnosa PTSD ini menggunakan bantuan dari
              seorang pakar psikolog klinis dewasa yaitu Sonny Tirta Luzanil,
              M.Psi,. Psikolog.
            </p>
          </div>
          <div className="about-information-item">
            <div className="about-heading">
              <h3>Forward Chaining</h3>
            </div>
            <p>
              Forward chaining merupakan salah satu metode yang dapat digunakan
              dalam pembuatan sistem pakar. Pada metode ini dilakukan pelacakan
              kedepan berdasarkan pada fakta yang ada kemudian mengarahkan pada
              kesimpulan. Dalam menentukan seseorang terdiagnosa ptsd adalah
              dengan menerapkan aturan-aturan yang diambil bersama dengan pakar
              dan juga buku DSM-5. Aturan tersebut adalah sebagai berikut :
            </p>
            <ol>
              <li>
                Jika pengguna <span>tidak pernah</span> mengalami peristiwa
                traumatis, maka <span>negatif</span> PTSD
              </li>
              <li>
                Jika pengguna <span>pernah</span> mengalami peristiwa traumatis
                diikuti dengan adanya{" "}
                <span>satu atau lebih gejala intrusi (intrusion)</span> maka
                <span> positif</span> PTSD.
              </li>
              <li>
                Jika pengguna <span>pernah</span> mengalami peristiwa traumatis
                diikuti dengan adanya{" "}
                <span>satu atau lebih gejala penghindaran (avoidance) </span>
                maka <span>positif</span> PTSD.
              </li>
              <li>
                Jika pengguna <span>pernah</span> mengalami peristiwa traumatis
                diikuti dengan adanya{" "}
                <span>dua atau lebih gejala perubahan suansa hati (mood)</span>{" "}
                maka <span>positif</span> PTSD.
              </li>
              <li>
                Jika pengguna <span>pernah</span> mengalami peristiwa traumatis
                diikuti dengan adanya{" "}
                <span>
                  dua atau lebih gejala perubahan gairah dan reaktivitas
                  (arousal)
                </span>{" "}
                maka <span>positif</span> PTSD.
              </li>
            </ol>
            <p>
              Contoh penjelasan dari aturan yang ditetapkan adalah jika
              seseorang mengalami peristiwa traumatis kemudian diikuti dengan
              adanya gejala intrusi maka sistem akan memberikan hasil positif.
            </p>
          </div>

          <div className="about-information-item">
            <div className="about-heading">
              <h3>Pengembang</h3>
            </div>
            <p>
              Aplikasi ini dibuat oleh Mochamad Rizky Zaldi, mahasiswa Program
              Studi Informatika Universitas Multimedia Nusantara dengan tujuan
              untuk memenuhi tugas akhir sebagai syarat kelulusan.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      {/* <p>
              Gejala gejala yang digunakan untuk melakukan diagnosa PTSD
              didapatkan dari *mas soni* selain itu juga gejala yang digunakan
              merujuk pada buku DSM-IV. Saran penganan yang diberikan jika
              pengguna terdiagnosa menderita PTSD adalah dengan berkonsultasi
              langsung dengan pakar yang dipercaya atau segera datang ke penyedia
              layanan kesehatan terdekat.
            </p> */}
    </div>
  );
};

export default AboutSystem;
