function huruhara() {
    return "xwbmrperu123";
}

function enhuuuu(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        // Check if the character is a letter
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += text[i]; // Keep non-alphabetic characters unchanged
        }
    }

    return result;
}

function dehuuuu(text, shift) {
    // Decryption is the same as encryption, just with a reversed shift
    return enhuuuu(text, 26 - shift);
}

function getDate(){
    // Mendapatkan tanggal saat ini
var today = new Date();

// Mendapatkan tahun
var year = today.getFullYear();
// Mendapatkan bulan (perhatikan bahwa bulan dimulai dari 0)
var month = today.getMonth() + 1; // Ditambah 1 karena bulan dimulai dari 0
// Mendapatkan tanggal
var date = today.getDate();

// Format tanggal, bulan, dan tahun menjadi string dengan format 'tahun-bulan-tanggal'
var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (date < 10 ? '0' : '') + date;

// Output string hasil format
return formattedDate;

}



function encryptText(x) {
    var huuuur = huruhara();
    const shiftValue = 3;
    var huuu = dehuuuu(huuuur, shiftValue);
    var currentTime = new Date();

    // Waktu 1

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    var waktuSkrg = ('0' + currentHours).slice(-2) + ':' + ('0' + currentMinutes).slice(-2);

    //waktu 2
    currentTime.setMinutes(currentMinutes + 15);
    var currentMinutes2 = currentTime.getMinutes();
    var waktuBaru = ('0' + currentHours).slice(-2) + ':' + ('0' + currentMinutes2).slice(-2);

    // Format Kode Baru
    var newDate = getDate();
    var newF1 = x.slice(0,2).concat(newDate,waktuSkrg,waktuBaru);
    var formatKode = newF1.join(',');
    // Melakukan enkripsi teks
    var encrypted = CryptoJS.AES.encrypt(formatKode, huuu).toString();

    // Menampilkan hasil enkripsi
    console.log(newDate,waktuSkrg,waktuBaru);
    console.log(newF1);
    console.log(formatKode);
    return encrypted;
}

function decryptText(x) {
    var huuuur = huruhara();
    const shiftValue = 3;
    var huuu = dehuuuu(huuuur, shiftValue);
    // Melakukan dekripsi teks
    var decrypt = CryptoJS.AES.decrypt(x, huuu);
    var decryptedText = decrypt.toString(CryptoJS.enc.Utf8);

    // Menampilkan hasil dekripsi
    return decryptedText;
}


function qrGenerator(){
    event.preventDefault();
    var kodeLama = document.getElementById("plainText").value;


    if (!kodeLama){
        document.getElementById("plainTextError").style.display = 'block';
        document.getElementById("newCode").value = '';
        return;
    } else {
        document.getElementById("plainTextError").style.display = 'none';
    }

    var fKodeLama = decryptText(kodeLama);
    var newString = fKodeLama.split(',');
    var newQR = encryptText(newString);

    document.getElementById("newCode").value = newQR;
}

function copyPlainText() {
    var kodeLama = document.getElementById("plainText").value;
    document.getElementById("newCode").value = kodeLama;
}
