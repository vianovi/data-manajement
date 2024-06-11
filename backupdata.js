
function simpanSessionStorage() {
    try {
        sessionStorage.setItem('session_dataArray', JSON.stringify(backup_dataArray));
        console.log('Data berhasil disimpan di sessionStorage:', backup_dataArray);
    } catch (error) {
        console.error('Gagal menyimpan data di sessionStorage:', error);
    }
}

function muatSessionStorage() {
    try {
        const storedData = sessionStorage.getItem('session_dataArray');
        if (storedData) {
            backup_dataArray = JSON.parse(storedData);
            displayData_backup();
            console.log('Data berhasil dimuat dari sessionStorage:', backup_dataArray);
        } else {
            console.log('Tidak ada data yang disimpan di sessionStorage.');
        }
    } catch (error) {
        console.error('Gagal memuat data dari sessionStorage:', error);
    }
}
function openIndexHtml() {
    window.location.href = 'index.html';
}
