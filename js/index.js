var sinhvien = {
    maSinhVien: '',
    tenSinhVien: '',
    loaiSinhVien: '',
    diemToan: '',
    diemLy: '',
    diemHoa: '',
    diemrenluyen: '',
    tinhDiemTrungBinh: function () {
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    }
}
var btnXacNhan = document.querySelector('#btn-xacnhan');
btnXacNhan.onclick = function () {
    sinhvien.maSinhVien = document.querySelector('#maSv').value;
    sinhvien.tenSinhVien = document.querySelector('#tenSv').value;
    sinhvien.loaiSinhVien = document.querySelector('#loaiSv').value;
    sinhvien.diemToan = document.querySelector('#diemToan').value;
    sinhvien.diemLy = document.querySelector('#diemLy').value;
    sinhvien.diemHoa = document.querySelector('#diemHoa').value;
    sinhvien.diemrenluyen = document.querySelector('#renLuyen').value;
    console.log(sinhvien);

    //tạo thẻ tr
    var TrSinhVien = document.createElement('tr');
    TrSinhVien.style.textAlign = "center";
    var tdButtonSua = document.createElement('td');
    var btnSua = document.createElement('button');
    btnSua.innerHTML = "sữa";
    btnSua.className = "btn btn-success";
    tdButtonSua.appendChild(btnSua);

    var tdButtonXoa = document.createElement('td');
    var btnXoa = document.createElement('button');
    btnXoa.innerHTML = "Xóa";
    btnXoa.className = "btn btn-danger";
    tdButtonXoa.appendChild(btnXoa);


    // tạo thẻ td 
    var tdMaSinhVien = document.createElement('td');
    tdMaSinhVien.innerHTML = sinhvien.maSinhVien;
    var tdTenSinhVien = document.createElement('td');
    tdTenSinhVien.innerHTML = sinhvien.tenSinhVien;
    var tdLoaiSinhVien = document.createElement('td');
    tdLoaiSinhVien.innerHTML = sinhvien.loaiSinhVien;
    var tdDiemTrungBinh = document.createElement('td');
    tdDiemTrungBinh.innerHTML = sinhvien.tinhDiemTrungBinh();
    var tdDiemRenLuyen = document.createElement('td');
    tdDiemRenLuyen.innerHTML = sinhvien.diemrenluyen;

    TrSinhVien.appendChild(tdMaSinhVien);
    TrSinhVien.appendChild(tdTenSinhVien);
    TrSinhVien.appendChild(tdLoaiSinhVien);
    TrSinhVien.appendChild(tdDiemTrungBinh);
    TrSinhVien.appendChild(tdDiemRenLuyen);
    TrSinhVien.appendChild(tdButtonSua);
    TrSinhVien.appendChild(tdButtonXoa);



    document.querySelector('#tblSinhVien').appendChild(TrSinhVien);
}