CREATE DATABASE QLPHONGKHAM
GO
USE QLPHONGKHAM
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
    MABN CHAR(8),
    MANS CHAR(8),
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
ALTER TABLE LICHKHAM ALTER COLUMN MANS CHAR(8) NOT NULL;
ALTER TABLE LICHKHAM ALTER COLUMN MABN CHAR(8) NOT NULL;
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
ALTER TABLE THUOC ALTER COLUMN NGAYHETHAN DATE NOT NULL;
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
ALTER TABLE LICHKHAM ADD PRIMARY KEY (MABN, MANS, NGAYKHAM, GIOKHAM);

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
ALTER TABLE HOADON ADD CONSTRAINT FK_HOADON_LICHKHAM FOREIGN KEY (MABN, MANS, NGAYKHAM, GIOKHAM) REFERENCES LICHKHAM(MABN, MANS, NGAYKHAM, GIOKHAM);

--R32
ALTER TABLE BENHNHAN ADD CHECK (DATEDIFF(yy, NGAYSINH, GETDATE()) >= 6)

--R33
ALTER TABLE THUOC ADD CHECK (SOLUONG >= 0)

--R34
GO
CREATE TRIGGER ADD_THUOC_IN_TOATHUOC
ON TOATHUOC
FOR INSERT
AS
BEGIN
    DECLARE @MALO CHAR(8)
    DECLARE @MATHUOC CHAR(10)
    DECLARE @SOLUONG INT
    DECLARE CURSOR_P CURSOR FOR SELECT MALO, MATHUOC, SOLUONG FROM INSERTED
    
    OPEN CURSOR_P

    FETCH NEXT FROM CURSOR_P INTO @MALO, @MATHUOC, @SOLUONG
    WHILE @@FETCH_STATUS = 0
    BEGIN
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE @MATHUOC = T.MATHUOC AND @MALO = T.MALO AND T.SOLUONG >= @SOLUONG)
        BEGIN 
            RAISERROR(N'KHÔNG ĐỦ THUỐC', 16, 1)
            ROLLBACK
            CLOSE CURSOR_P
            DEALLOCATE CURSOR_P
            RETURN
        END

        UPDATE THUOC
        SET THUOC.SOLUONG = THUOC.SOLUONG - @SOLUONG
        WHERE THUOC.MALO = @MALO AND THUOC.MATHUOC = @MATHUOC

        FETCH NEXT FROM CURSOR_P INTO @MALO, @MATHUOC, @SOLUONG 
    END

    CLOSE CURSOR_P
    DEALLOCATE CURSOR_P
END;

--R35
GO
CREATE TRIGGER CANCEL_THUOC_IN_TOATHUOC
ON TOATHUOC
FOR DELETE
AS
BEGIN
    DECLARE @MALO CHAR(8)
    DECLARE @MATHUOC CHAR(10)
    DECLARE @SOLUONG INT
    DECLARE CURSOR_P CURSOR FOR SELECT MALO, MATHUOC, SOLUONG FROM deleted
    
    OPEN CURSOR_P

    FETCH NEXT FROM CURSOR_P INTO @MALO, @MATHUOC, @SOLUONG
    WHILE @@FETCH_STATUS = 0
    BEGIN
        UPDATE THUOC
        SET THUOC.SOLUONG = THUOC.SOLUONG + @SOLUONG
        WHERE THUOC.MALO = @MALO AND THUOC.MATHUOC = @MATHUOC

        FETCH NEXT FROM CURSOR_P INTO @MALO, @MATHUOC, @SOLUONG 
    END

    CLOSE CURSOR_P
    DEALLOCATE CURSOR_P
END;


GO
CREATE OR ALTER TRIGGER CHANGE_THUOC_IN_TOATHUOC
ON TOATHUOC
FOR UPDATE
AS
BEGIN
    DECLARE @MALO_NEW CHAR(8)
    DECLARE @MATHUOC_NEW CHAR(10)
    DECLARE @SOLUONG_NEW INT

    DECLARE @MALO_OLD CHAR(8)
    DECLARE @MATHUOC_OLD CHAR(10)
    DECLARE @SOLUONG_OLD INT
    
    DECLARE CURSOR_NEW CURSOR FOR SELECT MALO, MATHUOC, SOLUONG FROM INSERTED
    DECLARE CURSOR_OLD CURSOR FOR SELECT MALO, MATHUOC, SOLUONG FROM deleted
    
    OPEN CURSOR_NEW
    OPEN CURSOR_OLD

    FETCH NEXT FROM CURSOR_NEW INTO @MALO_NEW, @MATHUOC_NEW, @SOLUONG_NEW
    FETCH NEXT FROM CURSOR_OLD INTO @MALO_OLD, @MATHUOC_OLD, @SOLUONG_OLD

    WHILE @@FETCH_STATUS = 0
    BEGIN
        UPDATE THUOC
        SET THUOC.SOLUONG = THUOC.SOLUONG + @SOLUONG_OLD
        WHERE THUOC.MALO = @MALO_OLD AND THUOC.MATHUOC = @MATHUOC_OLD

        IF NOT EXISTS(SELECT * FROM THUOC T WHERE @MATHUOC_NEW = T.MATHUOC AND @MALO_NEW = T.MALO AND T.SOLUONG >= @SOLUONG_NEW)
        BEGIN 
            DECLARE @MSG NVARCHAR(100)
            SELECT DISTINCT @MSG = TENTHUOC FROM THUOC T WHERE @MATHUOC_NEW = T.MATHUOC AND @MALO_NEW = T.MALO AND T.SOLUONG >= @SOLUONG_NEW
            SET @MSG = N'KHÔNG ĐỦ ' + @MSG

            RAISERROR(@MSG, 16, 1)
            ROLLBACK

            CLOSE CURSOR_NEW
            CLOSE CURSOR_OLD
            DEALLOCATE CURSOR_NEW
            DEALLOCATE CURSOR_OLD
            RETURN
        END

        UPDATE THUOC
        SET THUOC.SOLUONG = THUOC.SOLUONG - @SOLUONG_NEW
        WHERE THUOC.MALO = @MALO_NEW AND THUOC.MATHUOC = @MATHUOC_NEW

        FETCH NEXT FROM CURSOR_NEW INTO @MALO_NEW, @MATHUOC_NEW, @SOLUONG_NEW
        FETCH NEXT FROM CURSOR_OLD INTO @MALO_OLD, @MATHUOC_OLD, @SOLUONG_OLD
    END

    CLOSE CURSOR_NEW
    CLOSE CURSOR_OLD
    DEALLOCATE CURSOR_NEW
    DEALLOCATE CURSOR_OLD
END;

--R36
GO
CREATE TRIGGER TONGTIEN_INSERT
ON TOATHUOC
FOR UPDATE
AS
BEGIN 
    UPDATE HOADON
    SET HOADON.TONGTIEN = 
        (SELECT SUM(THANHTIEN) FROM TOATHUOC TT WHERE HOADON.MAHD = TT.MAHD)
        +
        (SELECT SUM(THANHTIEN) FROM DICHVUCHIDINH DV WHERE HOADON.MAHD = DV.MAHD)
END;

GO
--R37
CREATE TRIGGER TOATHUOC_THANHTIEN
ON TOATHUOC
AFTER INSERT, UPDATE
AS
BEGIN
    UPDATE TOATHUOC
    SET TOATHUOC.THANHTIEN = TOATHUOC.SOLUONG * THUOC.DONGIA
    FROM TOATHUOC
        JOIN INSERTED I ON TOATHUOC.MATHUOC = I.MATHUOC AND I.MALO = TOATHUOC.MALO
        JOIN THUOC ON THUOC.MATHUOC = TOATHUOC.MATHUOC AND THUOC.MALO = TOATHUOC.MALO
END;

--R38
GO
CREATE TRIGGER INSERT_LICHLAMVIEC
ON LICHLAMVIEC
FOR INSERT, UPDATE
AS
BEGIN
    DECLARE @MANS CHAR(8);  -- Mã nha sĩ
    DECLARE @NGAYKHAM DATE;  -- Ngày lịch hẹn

    DECLARE CURSOR_P CURSOR FOR SELECT MANS, NGAYKHAM FROM inserted

    OPEN CURSOR_P

    FETCH NEXT FROM CURSOR_P INTO @MANS, @NGAYKHAM
    WHILE @@FETCH_STATUS = 0
    BEGIN
        IF(SELECT COUNT(*) FROM LICHLAMVIEC WHERE MANS = @MANS AND NGAYKHAM = @NGAYKHAM) > 5
        BEGIN
            DECLARE @ErrorMessage NVARCHAR(100);
            SET @ErrorMessage = @MANS + N' CÓ HƠN 5 LỊCH HẸN TRONG NGAY ' + CONVERT(NVARCHAR, @NGAYKHAM, 103);
            PRINT @ErrorMessage
            ROLLBACK
        END
        FETCH NEXT FROM CURSOR_P INTO @MANS, @NGAYKHAM
    END

    CLOSE CURSOR_P
    DEALLOCATE CURSOR_P
END;


--R39
GO
CREATE OR ALTER TRIGGER INSERT_LICHKHAM
ON LICHKHAM
FOR INSERT, UPDATE
AS
BEGIN
    DECLARE @MABN CHAR(8);  -- Mã BỆNH NHÂN
    DECLARE @NGAYKHAM DATE;  -- Ngày lịch hẹn

    DECLARE CURSOR_P CURSOR FOR SELECT MABN, NGAYKHAM FROM inserted

    OPEN CURSOR_P

    FETCH NEXT FROM CURSOR_P INTO @MABN, @NGAYKHAM
    WHILE @@FETCH_STATUS = 0
    BEGIN
        IF(SELECT COUNT(*) FROM LICHKHAM WHERE MABN = @MABN AND NGAYKHAM = @NGAYKHAM) > 1
        BEGIN
            DECLARE @ErrorMessage NVARCHAR(100);
            SET @ErrorMessage = @MABN + N' CÓ HƠN 1 LỊCH HẸN TRONG NGAY ' + CONVERT(NVARCHAR, @NGAYKHAM, 103);
            PRINT @ErrorMessage
            ROLLBACK
        END
        FETCH NEXT FROM CURSOR_P INTO @MABN, @NGAYKHAM
    END

    CLOSE CURSOR_P
    DEALLOCATE CURSOR_P
END;

--R40
GO
ALTER TABLE LICHLAMVIEC ADD CHECK((datepart(hour, GIOKHAM) >= 7 and datepart(hour, GIOKHAM) < 11) or (datepart(hour, GIOKHAM) >= 13 and datepart(hour, GIOKHAM) < 17));

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
ALTER TABLE HOADON ADD CHECK (LEN(MAHD) = 10)

--R47
ALTER TABLE THUOC ADD CHECK (LEN(MALO) = 8)

--R48
ALTER TABLE THUOC ADD CHECK (LEN(MATHUOC) = 5)

--R49
ALTER TABLE DICHVU ADD CHECK (LEN(MADV) = 3)


GO
CREATE TRIGGER INSERT_DICHVUCHIDINH
ON DICHVUCHIDINH
FOR INSERT
AS
BEGIN
    DECLARE @GIA INT
    DECLARE @MADV CHAR(3)
    
    DECLARE CURSOR_p CURSOR FOR
    SELECT MADV
    FROM inserted

    OPEN CURSOR_p
    FETCH NEXT FROM CURSOR_p INTO @MADV
    
    WHILE @@FETCH_STATUS = 0
    BEGIN
        SELECT @GIA = DONGIA FROM DICHVU WHERE @MADV = MADV
        
        UPDATE DICHVUCHIDINH
        SET THANHTIEN = @GIA
        WHERE MADV = @MADV

        FETCH NEXT FROM CURSOR_p INTO @MADV
    END

    CLOSE CURSOR_p
    DEALLOCATE CURSOR_p
END;