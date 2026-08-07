// Switch Tab Function
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const navs = document.querySelectorAll('nav a');
    navs.forEach(nav => nav.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    document.getElementById(`nav-${tabId}`).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Live Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('liveClock').textContent = `${hours}:${minutes}:${seconds} WIB`;
}
setInterval(updateClock, 1000);
updateClock();

// Hero Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

setInterval(() => {
    moveSlide(1);
}, 5000);

// Modal Service Data
const serviceData = {
    skck: {
        title: "Penerbitan Surat Keterangan Catatan Kepolisian (SKCK)",
        image: "https://i.postimg.cc/zXBx0JGY/2026-07-15-11-21-36-IMG-5359.jpg",
        desc: "Layanan penerbitan SKCK diperuntukkan bagi warga yang memerlukan surat keterangan rekam jejak kepolisian.",
        requirements: [
            "Fotokopi KTP (sesuai domisili)",
            "Fotokopi Kartu Keluarga (KK)",
            "Fotokopi Akta Kelahiran / Ijazah Terakhir",
            "Pasfoto terbaru ukuran 4x6 latar merah (6 lembar)",
            "Bukti kepesertaan aktif BPJS Kesehatan"
        ]
    },
    kehilangan: {
        title: "Laporan Kehilangan Barang / Dokumen",
        image: "https://i.postimg.cc/hPBSd5D7/2026-07-15-11-25-29-IMG-5368.jpg",
        desc: "Pelayanan penerbitan Surat Tanda Penerimaan Laporan Kehilangan (STPLK) untuk dokumen penting.",
        requirements: [
            "Identitas Diri (KTP/Kartu Pelajar)",
            "Surat Pengantar dari Desa/Kelurahan setempat",
            "Fotokopi dokumen yang hilang (jika ada)"
        ]
    },
    keramaian: {
        title: "Penerbitan Surat Izin Keramaian",
        image: "https://i.postimg.cc/vmdLFMbD/2026-07-17-08-10-54-IMG-5420.jpg",
        desc: "Diperlukan untuk kegiatan masyarakat yang mengumpulkan banyak orang.",
        requirements: [
            "Surat Permohonan Izin Keramaian",
            "Surat Pengantar dari RT/RW & Desa/Kelurahan",
            "Rencana Susunan Acara & Denah Lokasi Kegiatan",
            "Fotokopi KTP Penanggung Jawab"
        ]
    },
    pengaduan: {
        title: "Layanan Pengaduan & Bantuan Masyarakat",
        image: "https://i.postimg.cc/8PVS6vrh/2026-07-15-11-26-03-IMG-5370.jpg", 
        desc: "Sentra Pelayanan Kepolisian Terpadu (SPKT) Polsek Cibadak menerima laporan tindak pidana atau potensi gangguan keamanan.",
        requirements: [
            "Identitas pelapor/korban (KTP)",
            "Penjelasan kronologi kejadian secara rinci",
            "Membawa barang bukti pendukung (jika ada)"
        ]
    }
};

function openServiceModal(type) {
    const data = serviceData[type];
    if (!data) return;

    let reqListHTML = data.requirements.map(req => `<li>${req}</li>`).join('');

    document.getElementById('modalBody').innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="modal-img">
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <h4 style="margin-top: 15px; color: var(--primary-color);">Persyaratan Dokumentasi:</h4>
        <ul>${reqListHTML}</ul>
        <p style="font-size:0.85rem; color:#d32f2f; font-weight:bold;">* Layanan SPKT Polsek Cibadak Bebas Pungli.</p>
    `;
    document.getElementById('serviceModal').style.display = 'flex';
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

window.onclick = function(event) {
    const serviceModal = document.getElementById('serviceModal');
    if (event.target === serviceModal) {
        closeServiceModal();
    }
};