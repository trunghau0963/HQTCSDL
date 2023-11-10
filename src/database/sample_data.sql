--Nhap lieu
GO
INSERT INTO THUOC(MaLo, MaThuoc, TenThuoc, DonVi, ChiDinh, SoLuong, NgayHetHan, DonGia)
VALUES
    ('L0000001', 'T0001', 'Paracetamol', 'Viên', N'Sưng đỏ, đau đầu', 100, '2024-12-31', 1500),
    ('L0000002', 'T0002', 'Amoxicillin', 'Viên', N'Nhiễm trùng hô hấp', 50, '2024-11-30', 3000),
    ('L0000003', 'T0003', 'Ibuprofen', 'Viên', N'Đau bên ngoài', 75, '2024-12-15', 2500),
    ('L0000004', 'T0004', 'Omeprazole', 'Viên', N'Viêm dạ dày', 30, '2024-11-30', 1200),
    ('L0000005', 'T0005', 'Aspirin', 'Viên', N'Giảm đau', 60, '2025-12-20', 1800),
    ('L0000006', 'T0006', 'Lisinopril', 'Viên', N'Hạ huyết áp', 45, '2026-11-30', 6000),
    ('L0000007', 'T0007', 'Simvastatin', 'Viên', N'Giảm cholesterol', 70, '2027-12-15', 5000),
    ('L0000008', 'T0008', 'Metformin', 'Viên', N'Điều trị đái tháo đường', 40, '2028-12-31', 12500),
    ('L0000009', 'T0009', 'Losartan', 'Viên', N'Hạ huyết áp', 55, '2025-11-30', 10900),
    ('L0000010', 'T0010', 'Atorvastatin', 'Viên', N'Giảm cholesterol', 80, '2026-12-15', 12250);


INSERT INTO DICHVU (MADV, TENDV, DONGIA)
VALUES
    ('DV1', N'Hàn răng', 150000),
    ('DV2', N'Lấy chảy', 80000),
    ('DV3', N'Tẩy trắng răng', 250000),
    ('DV4', N'Trám răng', 120000),
    ('DV5', N'Khám tổng quát', 100000),
    ('DV6', N'Lấy vôi răng', 150000),
    ('DV7', N'Nhổ răng', 100000);

INSERT INTO NHANVIEN (MANV, DIENTHOAI, MATKHAU, HOTEN, DAKHOA)
VALUES
    ('NV000001', '0123456789', 'e10adc3949ba59abbe56e057f20f883e', N'Nguyễn Văn A', 0),
    ('NV000002', '0987654321', '21232f297a57a5a743894a0e4a801fc3', N'Trần Thị B', 0),
    ('NV000003', '0369871234', '5f4dcc3b5aa765d61d8327deb882cf99', N'Huỳnh Văn C', 0),
    ('NV000004', '0912345678', '098f6bcd4621d373cade4e832627b4f6', N'Lê Thị D', 0),
    ('NV000005', '0765432109', 'c4ca4238a0b923820dcc509a6f75849b', N'Phạm Văn E', 0);

INSERT INTO QUANTRI (MAQT, DIENTHOAI, MATKHAU, HOTEN)
VALUES
    ('QT000001', '0123456789', 'e10adc3949ba59abbe56e057f20f883e', N'Nguyễn Văn Phúc'),
    ('QT000002', '0987654321', '21232f297a57a5a743894a0e4a801fc3', N'Trần Thị Thu Hương'),
    ('QT000003', '0369871234', '5f4dcc3b5aa765d61d8327deb882cf99', N'Huỳnh Minh Đức'),
    ('QT000004', '0912345678', '098f6bcd4621d373cade4e832627b4f6', N'Lê Thanh Tùng'),
    ('QT000005', '0765432109', 'c4ca4238a0b923820dcc509a6f75849b', N'Phạm Ngọc Ánh');

INSERT INTO NHASI (MANS, DIENTHOAI, MATKHAU, HOTEN, DAKHOA)
VALUES
    ('NS000001', '0123456789', 'e10adc3949ba59abbe56e057f20f883e', N'Nguyễn Văn Nha ', 1),
    ('NS000002', '0987654321', '21232f297a57a5a743894a0e4a801fc3', N'Trần Thị Sĩ', 0),
    ('NS000003', '0369871234', '5f4dcc3b5aa765d61d8327deb882cf99', N'Huỳnh Minh Nhật', 1),
    ('NS000004', '0912345678', '098f6bcd4621d373cade4e832627b4f6', N'Lê Thanh Nhã', 0),
    ('NS000005', '0765432109', 'c4ca4238a0b923820dcc509a6f75849b', N'Phạm Ngọc Nhung', 1),
    ('NS000006', '0123456780', 'e10adc3949ba59abbe56e057f20f883e', N'Vũ Văn Hải', 1),
    ('NS000007', '0987654322', '21232f297a57a5a743894a0e4a801fc3', N'Lê Thị Riêng', 0),
    ('NS000008', '0369871235', '5f4dcc3b5aa765d61d8327deb882cf99', N'Trần Minh Trí', 1),
    ('NS000009', '0912345679', '098f6bcd4621d373cade4e832627b4f6', N'Phạm Thanh Hoài', 0),
    ('NS000010', '0765432101', 'c4ca4238a0b923820dcc509a6f75849b', N'Huỳnh Ngọc Mẫn', 1);

INSERT INTO BENHNHAN (MABN, DIENTHOAI, MATKHAU, HOTEN, NGAYSINH, DIACHI, DAKHOA)
VALUES
    ('A-000001', '0123456789', 'e10adc3949ba59abbe56e057f20f883e', N'Nguyễn Văn Nhân', '1990-05-15', N'Hà Nội', 0),
    ('A-000002', '0987654321', '21232f297a57a5a743894a0e4a801fc3', N'Trần Thị Hoàn Mỹ', '1985-12-02', N'Tp.HCM', 1),
    ('B-000003', '0369871234', '5f4dcc3b5aa765d61d8327deb882cf99', N'Huỳnh Minh Quốc', '1998-07-20', N'Đà Nẵng', 0),
    ('B-000004', '0912345678', '098f6bcd4621d373cade4e832627b4f6', N'Lê Thanh Hòa', '1980-03-10', N'Hải Phòng', 0),
    ('C-000005', '0765432109', 'c4ca4238a0b923820dcc509a6f75849b', N'Phạm Ngọc Thảo', '1995-09-28', N'Cần Thơ', 0),
    ('D-000006', '0123456780', 'e10adc3949ba59abbe56e057f20f883e', N'Vũ Văn Hùng', '1993-08-22', N'Hà Tĩnh', 0),
    ('D-000007', '0987654322', '21232f297a57a5a743894a0e4a801fc3', N'Lê Thị Tâm', '2000-04-18', N'Quảng Ngãi', 0),
    ('E-000008', '0369871235', '5f4dcc3b5aa765d61d8327deb882cf99', N'Nguyễn Đình Cường', '1992-11-05', N'Bắc Ninh', 0),
    ('F-000009', '0912345679', '098f6bcd4621d373cade4e832627b4f6', N'Trần Thị Hoàng Yến', '1997-03-14', N'Huế', 1),
    ('K-000010', '0765432101', 'c4ca4238a0b923820dcc509a6f75849b', N'Phạm Văn Quyết', '1989-01-09', N'Thái Nguyên', 0);

INSERT INTO LICHLAMVIEC (MANS, NGAYKHAM, GIOKHAM)
VALUES
    ('NS000001', '2023-11-07', '08:00:00'),
    ('NS000001', '2023-11-08', '09:30:00'),
    ('NS000001', '2023-11-09', '14:00:00'),
    ('NS000001', '2023-11-09', '08:00:00'),
    ('NS000001', '2023-11-09', '09:30:00'),
    ('NS000001', '2023-11-09', '07:00:00'),
    ('NS000001', '2023-11-09', '15:00:00'),
    ('NS000002', '2023-11-07', '10:00:00'),
    ('NS000002', '2023-11-08', '07:30:00'),
    ('NS000003', '2023-11-09', '15:30:00');

INSERT INTO LICHKHAM (MABN, MANS, NGAYKHAM, GIOKHAM)
VALUES
    ('A-000001', 'NS000001', '2023-11-07', '08:00:00'),
    ('C-000005', 'NS000002', '2023-11-08', '07:30:00'),
    ('E-000008', 'NS000003', '2023-11-09', '15:30:00'),
    ('F-000009', 'NS000001', '2023-11-08', '09:30:00'),
    ('K-000010', 'NS000002', '2023-11-07', '10:00:00');


INSERT INTO HOADON (MAHD, MABN, MANS, NGAYKHAM, GIOKHAM, TONGTIEN, CHANDOAN, TRIEUCHUNG)
VALUES
    ('HD00000001', 'A-000001', 'NS000001', '2023-11-07', '08:00:00', 150000, N'Viêm họng', N'Sốt cao'),
    ('HD00000002', 'C-000005', 'NS000002', '2023-11-08', '07:30:00', 200000, N'Cảm cúm', N'Đau họng, ho khan'),
    ('HD00000003', 'E-000008', 'NS000003', '2023-11-09', '15:30:00', 180000, N'Tiêu chảy', N'Buồn nôn, đau bụng'),
    ('HD00000004', 'F-000009', 'NS000001', '2023-11-08', '09:30:00', 220000, N'Viêm mũi', N'Sổ mũi, đau đầu'),
    ('HD00000005', 'K-000010', 'NS000002', '2023-11-07', '10:00:00', 250000, N'Trẻ sơ sinh', N'Khóc nhiều, không ngủ');

INSERT INTO DICHVUCHIDINH (MAHD, MADV, THANHTIEN)
VALUES
    ('HD00000001', 'DV1', 15000),
    ('HD00000001', 'DV2', 8000),
    ('HD00000002', 'DV3', 250000),
    ('HD00000002', 'DV4', 120000),
    ('HD00000003', 'DV5', 100000),
    ('HD00000004', 'DV1', 150000);

INSERT INTO TOATHUOC (MAHD, MALO, MATHUOC, SOLUONG, LIEULUONG, THANHTIEN)
VALUES
    ('HD00000001', 'L0000001', 'T0001', 10, N'Mỗi ngày 1 viên', 1500),
    ('HD00000001', 'L0000002', 'T0002', 15, N'Sáng và tối mỗi ngày 1 viên', 4500),
    ('HD00000002', 'L0000003', 'T0003', 30, N'Mỗi ngày 2 viên', 75000),
    ('HD00000002', 'L0000004', 'T0004', 20, N'Sáng 1 viên, tối 1 viên', 24000),
    ('HD00000003', 'L0000001', 'T0001', 20, N'Mỗi ngày 1 viên', 30000),
    ('HD00000004', 'L0000002', 'T0002', 14, N'Sáng và tối mỗi ngày 1 viên', 42000);
