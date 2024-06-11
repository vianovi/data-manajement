function backup() {
    try {
        localStorage.setItem('backup_dataArray', JSON.stringify(backup_dataArray));
        console.log('Data berhasil dibackup:', backup_dataArray);
    }   catch (error) {
        console.error('gagal membuat backup:', error);
    }
}

function memuat_backup() {
    try {
        const storedData = localStorage.getItem('backup_dataArray');
        if (storedData) {
            dataArray = JSON.parse(storedData);
            console.log('Data berhasil dimuat:', dataArray);
            displayData_backup();
        } else {
            console.log('Tidak ada data yang disimpan sebelumnya.');
        }
    } catch (error) {
        console.error('Gagal memuat data:', error);
    }
}

function openIndexHtml() {
    window.location.href = "index.html";
    memuat_backup();
}
