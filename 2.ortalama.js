var matematik = [84,75,96];
var tarih = [50,73,15];
var edebiyat = [67,80,61];
var ortalama = [];

var ort1 = (matematik[0]+matematik[1]+matematik[2])/3;
var ort2 = (tarih[0]+tarih[1]+tarih[2])/3;
var ort3 = (edebiyat[0]+edebiyat[1]+edebiyat[2])/3;

ortalama.push(ort1);
ortalama.push(ort2);
ortalama.push(ort3);

var toplam = (ortalama[0]+ortalama[1]+ortalama[2])/3;
alert(toplam);