/**
 * Fungsi untuk memesan mobil melalui WhatsApp
 * @param {string} carName - Nama mobil yang dipilih
 */
function orderViaWA(carName) {
    const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo BabelDrive, saya ingin menyewa mobil ${carName}. Apakah masih tersedia?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

/**
 * Logika penanganan form kontak/booking
 */
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
            const name = document.getElementById('name').value;
            const waNumber = document.getElementById('whatsapp').value;
            const messageText = document.getElementById('message').value;
            
            const fullMessage = `Pesan Baru dari Website:\n\n` +
                                `Nama: ${name}\n` +
                                `WhatsApp: ${waNumber}\n` +
                                `Pesan: ${messageText}`;
                                
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
            window.open(url, '_blank');
        });
    }

    /**
     * Animasi navigasi saat scroll
     */
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.remove('py-4');
            nav.classList.add('py-2');
        } else {
            nav.classList.remove('py-2');
            nav.classList.add('py-4');
        }
    });
});