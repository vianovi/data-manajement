// Fungsi untuk menyimpan data array ke localStorage
function saveData() {
    try {
        localStorage.setItem('dataArray', JSON.stringify(dataArray));
        console.log('Data berhasil disimpan:', dataArray);
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
    }
}

// Fungsi untuk memuat data array dari localStorage
function loadData() {
    try {
        const storedData = localStorage.getItem('dataArray');
        if (storedData) {
            dataArray = JSON.parse(storedData);
            console.log('Data berhasil dimuat:', dataArray);
            displayData();
        } else {
            console.log('Tidak ada data yang disimpan sebelumnya.');
        }
    } catch (error) {
        console.error('Gagal memuat data:', error);
    }
}

// Fungsi untuk menyembunyikan data yang sudah ditampilkan
function hideData() {
    try {
        const dataListElement = document.getElementById('dataList');
        dataListElement.style.display = 'none';
        console.log('Data berhasil disembunyikan.');
    } catch (error) {
        console.error('Gagal menyembunyikan data:', error);
    }
}

// Fungsi untuk menampilkan data yang sudah disembunyikan
function showData() {
    try {
        const dataListElement = document.getElementById('dataList');
        dataListElement.style.display = 'block';
        console.log('Data berhasil ditampilkan.');
    } catch (error) {
        console.error('Gagal menampilkan data:', error);
    }
}

// Fungsi untuk mencari data berdasarkan nama
function searchData() {
    try {
        const searchInput = document.getElementById('searchInput');
        const searchQuery = searchInput.value;
        const filteredData = dataArray.filter(data => data.nama.toLowerCase().includes(searchQuery.toLowerCase()));
        filter_displayData(filteredData);
    } catch (error) {
        console.error('Gagal mencari data:', error);
    }
}

// Fungsi untuk menghapus data array berdasarkan nilai variabelnya
function deleteData() {
    try {
        const searchInput = document.getElementById('searchInput_delete');
        const searchQuery = searchInput.value;
        const initialLength = dataArray.length;
        
        // Filter dataArray untuk menghapus data yang sesuai dengan searchQuery
        dataArray = dataArray.filter(data => !data.nama.toLowerCase().includes(searchQuery.toLowerCase()));
        
        if (dataArray.length < initialLength) {
            console.log('Data berhasil dihapus.');
            saveData(); // Simpan perubahan ke localStorage
            displayData(); // Tampilkan data yang tersisa
        } else {
            console.log('Data tidak ditemukan.');
        }
    } catch (error) {
        console.error('Gagal menghapus data:', error);
    }
}
