CREATE DATABASE QLPHONGKHAMBENH
GO
USE QLPHONGKHAMBENH
GO
CREATE TABLE BENHNHAN
(
    MABN CHAR(8),
    DIENTHOAI CHAR(12),
    MATKHAU VARCHAR(32),
    HOTEN NVARCHAR(64),
    NGAYSINH DATE,
    DIACHI NVARCHAR(128),
    DAKHOA BIT
)

CREATE TABLE NHANVIEN
(
    MANV CHAR(8),
    DIENTHOAI CHAR(12),
    MATKHAU VARCHAR(32),
    HOTEN NVARCHAR(64),
    DAKHOA BIT
)

CREATE TABLE QUANTRI
(
    MAQT CHAR(8),
    DIENTHOAI CHAR(12),
    MATKHAU VARCHAR(32),
    HOTEN NVARCHAR(64),
)

CREATE TABLE NHASI
(
    MANS CHAR(8),
    DIENTHOAI CHAR(12),
    MATKHAU VARCHAR(32),
    HOTEN NVARCHAR(64),
    DAKHOA BIT
)

CREATE TABLE LICHKHAM
(
    MAHEN CHAR(8),
    MABN CHAR(8),
    MANS CHAR(8),
    NGAYKHAM DATE,
    GIOKHAM TIME
)

CREATE TABLE LICHLAMVIEC
(
    MANS CHAR(8),
    NGAYKHAM DATE,
    GIOKHAM TIME
)

CREATE TABLE HOADON
(
    MAHD CHAR(10),
    MAHEN CHAR(8),
    NGAYKHAM DATE,
    GIOKHAM TIME,
    TONGTIEN BIGINT,
    CHANDOAN NVARCHAR(128),
    TRIEUCHUNG NVARCHAR(128)
)

CREATE TABLE TOATHUOC
(
    MAHD CHAR(10),
    MALO CHAR(8),
    MATHUOC CHAR(5),
    SOLUONG INT,
    LIEULUONG NVARCHAR(32),
    THANHTIEN INT
)

CREATE TABLE DICHVUCHIDINH
(
    MAHD CHAR(10),
    MADV CHAR(3),
    THANHTIEN INT
)

CREATE TABLE DICHVU
(
    MADV CHAR(3),
    TENDV NVARCHAR(64),
    DONGIA INT
)

CREATE TABLE THUOC
(
    MALO CHAR(8),
    MATHUOC CHAR(5),
    TENTHUOC NVARCHAR(32),
    DONVI VARCHAR(10),
    CHIDINH NVARCHAR(128),
    SOLUONG INT,
    NGAYHETHAN DATE,
    DONGIA INT
)


/*NOT NULL */
--R21
ALTER TABLE BENHNHAN ALTER COLUMN MABN CHAR(8) NOT NULL;
ALTER TABLE BENHNHAN ALTER COLUMN DIENTHOAI CHAR(12) NOT NULL;
ALTER TABLE BENHNHAN ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

--R22
ALTER TABLE NHANVIEN ALTER COLUMN MANV CHAR(8) NOT NULL;
ALTER TABLE NHANVIEN ALTER COLUMN DIENTHOAI CHAR(12) NOT NULL;
ALTER TABLE NHANVIEN ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

--R23
ALTER TABLE NHASI ALTER COLUMN MANS CHAR(8) NOT NULL;
ALTER TABLE NHASI ALTER COLUMN DIENTHOAI CHAR(12) NOT NULL;
ALTER TABLE NHASI ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

--R24
ALTER TABLE QUANTRI ALTER COLUMN MAQT CHAR(8) NOT NULL;
ALTER TABLE QUANTRI ALTER COLUMN DIENTHOAI CHAR(12) NOT NULL;
ALTER TABLE QUANTRI ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

--R25
ALTER TABLE LICHKHAM ALTER COLUMN MAHEN CHAR(8) NOT NULL;
ALTER TABLE LICHKHAM ALTER COLUMN NGAYKHAM DATE NOT NULL;
ALTER TABLE LICHKHAM ALTER COLUMN GIOKHAM TIME NOT NULL;

--R26
ALTER TABLE LICHLAMVIEC ALTER COLUMN MANS CHAR(8) NOT NULL;
ALTER TABLE LICHLAMVIEC ALTER COLUMN NGAYKHAM DATE NOT NULL;
ALTER TABLE LICHLAMVIEC ALTER COLUMN GIOKHAM TIME NOT NULL;

--R27
ALTER TABLE TOATHUOC ALTER COLUMN SOLUONG INT NOT NULL;
ALTER TABLE TOATHUOC ALTER COLUMN LIEULUONG NVARCHAR(32) NOT NULL;
ALTER TABLE TOATHUOC ALTER COLUMN MAHD CHAR(10) NOT NULL;
ALTER TABLE TOATHUOC ALTER COLUMN MALO CHAR(8) NOT NULL;
ALTER TABLE TOATHUOC ALTER COLUMN MATHUOC CHAR(5) NOT NULL;

--R28
ALTER TABLE HOADON ALTER COLUMN MAHD CHAR(10) NOT NULL;

--R29
ALTER TABLE DICHVUCHIDINH ALTER COLUMN MAHD CHAR(10) NOT NULL;
ALTER TABLE DICHVUCHIDINH ALTER COLUMN MADV CHAR(3) NOT NULL;

--R30
ALTER TABLE DICHVU ALTER COLUMN MADV CHAR(3) NOT NULL;

--R31
ALTER TABLE THUOC ALTER COLUMN TENTHUOC NVARCHAR(32) NOT NULL;
ALTER TABLE THUOC ALTER COLUMN MALO CHAR(8) NOT NULL;
ALTER TABLE THUOC ALTER COLUMN SOLUONG CHAR(8) NOT NULL;
ALTER TABLE THUOC ALTER COLUMN DONGIA CHAR(8) NOT NULL;
ALTER TABLE THUOC ALTER COLUMN NGAYHETHAN CHAR(8) NOT NULL;
ALTER TABLE THUOC ALTER COLUMN MATHUOC CHAR(5) NOT NULL;

/*UNIQUE*/
--R1
ALTER TABLE QUANTRI ADD UNIQUE (DIENTHOAI);

--R2
ALTER TABLE BENHNHAN ADD UNIQUE (DIENTHOAI);

--R3
ALTER TABLE NHANVIEN ADD UNIQUE (DIENTHOAI);

--R4
ALTER TABLE NHASI ADD UNIQUE (DIENTHOAI);

/*Add primary key*/
--R5
ALTER TABLE BENHNHAN ADD PRIMARY KEY (MABN);

--R6
ALTER TABLE NHANVIEN ADD PRIMARY KEY (MANV);

--R7
ALTER TABLE QUANTRI ADD PRIMARY KEY (MAQT);

--R8
ALTER TABLE NHASI ADD PRIMARY KEY (MANS);

--R9
ALTER TABLE LICHKHAM ADD PRIMARY KEY (MAHEN);

--R10
ALTER TABLE LICHLAMVIEC ADD PRIMARY KEY (MANS, NGAYKHAM, GIOKHAM);

--R11
ALTER TABLE HOADON ADD PRIMARY KEY (MAHD);

--R12
ALTER TABLE TOATHUOC ADD PRIMARY KEY (MAHD, MALO, MATHUOC);

--13
ALTER TABLE DICHVUCHIDINH ADD PRIMARY KEY (MAHD, MADV);

--R14
ALTER TABLE DICHVU ADD PRIMARY KEY (MADV);

--R15
ALTER TABLE THUOC ADD PRIMARY KEY (MALO, MATHUOC);

-- ADD FOREIGN KEY
--R16
ALTER TABLE LICHKHAM ADD CONSTRAINT FK_LICHKHAM_BENHNHAN FOREIGN KEY (MABN) REFERENCES BENHNHAN(MABN);

--R51
ALTER TABLE LICHKHAM ADD CONSTRAINT FK_LICHKHAM_LICHLAMVIEC FOREIGN KEY (MANS, NGAYKHAM, GIOKHAM) REFERENCES LICHLAMVIEC(MANS, NGAYKHAM, GIOKHAM);

--R17
ALTER TABLE TOATHUOC ADD CONSTRAINT FK_TOATHUOC_HOADON FOREIGN KEY (MAHD) REFERENCES HOADON(MAHD);
ALTER TABLE TOATHUOC ADD CONSTRAINT FK_TOATHUOC_THUOC FOREIGN KEY (MALO, MATHUOC) REFERENCES THUOC(MALO, MATHUOC);

--R18
ALTER TABLE DICHVUCHIDINH ADD CONSTRAINT FK_DICHVUCHIDINH_HOADON FOREIGN KEY (MAHD) REFERENCES HOADON(MAHD);
ALTER TABLE DICHVUCHIDINH ADD CONSTRAINT FK_DICHVUCHIDINH_DICHVU FOREIGN KEY (MADV) REFERENCES DICHVU(MADV);

--R19
ALTER TABLE LICHLAMVIEC ADD CONSTRAINT FK_LICHLAMVIEC_NHASI FOREIGN KEY (MANS) REFERENCES NHASI(MANS);

--R20
ALTER TABLE HOADON ADD CONSTRAINT FK_HOADON_LICHKHAM FOREIGN KEY (MAHEN) REFERENCES LICHKHAM(MAHEN);

--R32
ALTER TABLE BENHNHAN ADD CHECK (DATEDIFF(yy, NGAYSINH, GETDATE()) >= 6)

--R33
ALTER TABLE THUOC ADD CHECK (SOLUONG >= 0)

--R34
GO
CREATE TRIGGER AFTER_THUOC_SOLD
ON TOATHUOC
AFTER INSERT
AS
BEGIN
    UPDATE THUOC
    SET THUOC.SOLUONG = THUOC.SOLUONG - I.SOLUONG
    FROM THUOC
        JOIN INSERTED I ON THUOC.MALO = I.MALO AND THUOC.MATHUOC = I.MATHUOC
END;

--R35
GO
CREATE TRIGGER TOATHUOC_CANCELED
ON TOATHUOC
FOR DELETE
AS
BEGIN
    UPDATE THUOC
    SET THUOC.SOLUONG = THUOC.SOLUONG + D.SOLUONG
    FROM THUOC
        JOIN deleted D ON THUOC.MALO = D.MALO AND THUOC.MATHUOC = D.MATHUOC
END;


GO
CREATE TRIGGER TOATHUOC_CHANGED
ON TOATHUOC
AFTER UPDATE
AS
BEGIN
    UPDATE THUOC
    SET THUOC.SOLUONG = THUOC.SOLUONG - I.SOLUONG + D.SOLUONG
    FROM THUOC
        JOIN DELETED D ON THUOC.MALO = D.MALO AND THUOC.MATHUOC = D.MATHUOC
        JOIN INSERTED I ON THUOC.MALO = I.MALO AND THUOC.MATHUOC = I.MATHUOC
END;

--R36
GO
CREATE TRIGGER TONGTIEN_INSERT
ON HOADON
AFTER INSERT
AS
BEGIN 
    DECLARE @TIENTHUOC INT;
    SELECT @TIENTHUOC = COUNT(*) FROM TOATHUOC JOIN inserted i on TOATHUOC.MAHD = i.MAHD 
    DECLARE @TIENDV INT;
    SELECT @TIENDV = COUNT(*) FROM DICHVUCHIDINH JOIN inserted i on DICHVUCHIDINH.MADV = i.MAHD 

    UPDATE HOADON
    SET HOADON.TONGTIEN = @TIENDV + @TIENTHUOC
END;

GO
--R37
CREATE TRIGGER TOATHUOC_THANHTIEN
ON TOATHUOC
AFTER INSERT, UPDATE
AS
BEGIN
    UPDATE TOATHUOC
    SET TOATHUOC.THANHTIEN = I.SOLUONG * THUOC.DONGIA
    FROM TOATHUOC
        JOIN INSERTED I ON TOATHUOC.MATHUOC = I.MATHUOC
        JOIN THUOC ON THUOC.MATHUOC = TOATHUOC.MATHUOC
END;

--R38
GO
CREATE TRIGGER AFTER_LICHLAMVIEC_INSERT
ON LICHLAMVIEC
INSTEAD OF INSERT, UPDATE
AS
BEGIN
    DECLARE @MANS CHAR(8);  -- Mã nha sĩ
    DECLARE @NGAYKHAM DATE;  -- Ngày lịch hẹn

    -- Lấy giá trị MANS và NGAY từ bảng inserted
    SELECT @MANS = MANS, @NGAYKHAM = NGAYKHAM FROM inserted;

    -- Kiểm tra số lịch hẹn của nha sĩ trong ngày
    IF (
        SELECT COUNT(*)
        FROM LICHLAMVIEC
        WHERE MANS = @MANS AND NGAYKHAM = @NGAYKHAM
    ) >= 6
    BEGIN
        -- Nha sĩ đã có quá 6 lịch hẹn trong ngày, không cho phép thêm lịch hẹn mới
        RAISERROR ('Nha sĩ đã có quá 6 lịch hẹn trong ngày.', 16, 1);
        ROLLBACK
    END
    ELSE
    BEGIN
        -- Nha sĩ chưa có quá 6 lịch hẹn, thực hiện thêm lịch hẹn mới
        INSERT INTO LICHLAMVIEC
        SELECT * FROM inserted;
    END
END;

--R39
GO
CREATE TRIGGER AFTER_LICHKHAM_INSERT
ON LICHKHAM
INSTEAD OF INSERT, UPDATE
AS
BEGIN
    DECLARE @MABN CHAR(8);
    DECLARE @NGAYKHAM DATE;
    IF(
        SELECT COUNT(*)
        FROM LICHKHAM
        WHERE @MABN = MABN AND @NGAYKHAM = NGAYKHAM
        ) >= 1
    BEGIN
        RAISERROR('Bệnh nhân đã đặt lịch hẹn trong ngày', 16, 1);
        ROLLBACK
    END
    ELSE
    BEGIN
        INSERT INTO LICHKHAM
        SELECT * FROM inserted
    END
END;

--R40
ALTER TABLE LICHLAMVIEC ADD CHECK((datepart(hour, GIOKHAM) >= 7 and datepart(hour, GIOKHAM) <= 11) or (datepart(hour, GIOKHAM) >= 13 and datepart(hour, GIOKHAM) <= 17));

--R41
ALTER TABLE BENHNHAN ADD CHECK (LEN(MATKHAU) >= 6)
ALTER TABLE NHASI ADD CHECK (LEN(MATKHAU) >= 6)
ALTER TABLE NHANVIEN ADD CHECK (LEN(MATKHAU) >= 6)
ALTER TABLE QUANTRI ADD CHECK (LEN(MATKHAU) >= 6)

--R42
ALTER TABLE BENHNHAN ADD CHECK (LEN(MABN) = 8)

--R43
ALTER TABLE NHANVIEN ADD CHECK (LEN(MANV) = 8)

--R44
ALTER TABLE NHASI ADD CHECK (LEN(MANS) = 8)

--R45
ALTER TABLE QUANTRI ADD CHECK (LEN(MAQT) = 8)

--R46
ALTER TABLE LICHKHAM ADD CHECK (LEN(MAHEN) = 8)

--R47
ALTER TABLE HOADON ADD CHECK (LEN(MAHD) = 10)

--R48
ALTER TABLE THUOC ADD CHECK (LEN(MALO) = 8)

--R49
ALTER TABLE THUOC ADD CHECK (LEN(MATHUOC) = 5)

--R50
ALTER TABLE DICHVU ADD CHECK (LEN(MADV) = 3)

--R52
GO
CREATE TRIGGER BEFORE_TOATHUOC_ADD
ON TOATHUOC
INSTEAD OF INSERT
AS 
BEGIN
    IF NOT EXISTS(SELECT * FROM inserted 
    JOIN THUOC 
    ON THUOC.MATHUOC = inserted.MATHUOC AND THUOC.SOLUONG >= inserted.SOLUONG)
    BEGIN
        RAISERROR ('Số lượng thuốc kê đơn phải nhỏ hơn hoặc bằng số lượng thuốc còn lại trong kho.', 16, 1);
        ROLLBACK;
    END
END;

--Phan quyen--

--Tao login
EXEC SP_ADDLOGIN 'Login_1', 'AAAA@123'
EXEC SP_ADDLOGIN 'Login_2', 'BBBB@123'
EXEC SP_ADDLOGIN 'Login_3', 'CCCC@123'
EXEC SP_ADDLOGIN 'Login_4', 'DDDD@123'

--Tao user
Create User user_1 From Login Login_1 with default_schema = QLPHONGKHAM
Create User user_2 FROM Login Login_2 with default_schema = QLPHONGKHAM
Create User user_3 FROM Login Login_3 with default_schema = QLPHONGKHAM
Create User user_4 FROM Login Login_4 with default_schema = QLPHONGKHAM

--Tao role
EXEC SP_ADDROLE 'BENHNHAN'
EXEC SP_ADDROLE 'NHASI'
EXEC SP_ADDROLE 'QUANTRI'
EXEC SP_ADDROLE 'NHANVIEN'

--Gan quyen
GRANT select, UPDATE(DIENTHOAI, MATKHAU, HOTEN, NGAYSINH, DIACHI) 
ON BENHNHAN
TO BENHNHAN

GRANT select 
ON NHASI(MANS, HOTEN)
TO BENHNHAN

GRANT select 
ON THUOC(MATHUOC, TENTHUOC, DONVI, DONGIA)
TO BENHNHAN

GRANT select 
ON DICHVU(MADV, TENDV, DONGIA)
TO BENHNHAN

GRANT SELECT 
ON LICHLAMVIEC 
TO BENHNHAN

GRANT SELECT, INSERT, DELETE
ON LICHKHAM 
TO BENHNHAN 

GRANT SELECT 
ON HOADON
TO BENHNHAN

GRANT SELECT 
ON TOATHUOC
TO BENHNHAN

GRANT SELECT 
ON DICHVUCHIDINH
TO BENHNHAN

GRANT INSERT
ON BENHNHAN
TO NHASI 

GRANT SELECT, INSERT, UPDATE
ON HOADON
TO NHASI

GRANT SELECT, INSERT, UPDATE
ON TOATHUOC
TO NHASI

GRANT SELECT, INSERT, UPDATE
ON DICHVUCHIDINH
TO NHASI

GRANT UPDATE
ON LICHLAMVIEC
TO NHASI

GRANT SELECT 
ON LICHLAMVIEC
TO NHASI

GRANT SELECT 
ON THUOC
TO NHASI

GRANT SELECT
ON DICHVU
TO NHASI

GRANT SELECT 
ON LICHKHAM
TO NHANVIEN

GRANT INSERT, UPDATE 
ON LICHKHAM
TO NHANVIEN

GRANT SELECT 
ON TOATHUOC
TO NHANVIEN

GRANT SELECT 
ON DICHVUCHIDINH
TO NHANVIEN

GRANT SELECT
ON HOADON
TO NHANVIEN

GRANT SELECT, INSERT, DELETE, UPDATE 
ON THUOC
TO QUANTRI

GRANT SELECT, INSERT, DELETE, UPDATE 
ON DICHVU
TO QUANTRI

GRANT SELECT, INSERT, DELETE, UPDATE 
ON NHANVIEN
TO QUANTRI

GRANT SELECT, INSERT, DELETE, UPDATE 
ON BENHNHAN
TO QUANTRI

GRANT SELECT, INSERT, DELETE, UPDATE 
ON NHASI
TO QUANTRI


