CREATE DATABASE QLPHONGKHAM
GO
USE QLPHONGKHAM
GO
CREATE OR ALTER PROC CREATE_TABLE
AS
BEGIN TRAN
    BEGIN TRY
        CREATE TABLE BENHNHAN
        (
            MABN CHAR(16) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 16),
            DIENTHOAI CHAR(10),
            MATKHAU VARCHAR(32),
            HOTEN NVARCHAR(64),
            NGAYSINH DATE,
            DIACHI NVARCHAR(128),
            DAKHOA BIT
        )

        CREATE TABLE NHANVIEN
        (
            MANV CHAR(16) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 16),
            DIENTHOAI CHAR(10),
            MATKHAU VARCHAR(32),
            HOTEN NVARCHAR(64),
            NGAYSINH DATE,
            DAKHOA BIT
        )

        CREATE TABLE QUANTRI
        (
            MAQT CHAR(16) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 16),
            DIENTHOAI CHAR(10),
            MATKHAU VARCHAR(32),
            NGAYSINH DATE,
            HOTEN NVARCHAR(64),
        )

        CREATE TABLE NHASI
        (
            MANS CHAR(16) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 16),
            DIENTHOAI CHAR(10),
            MATKHAU VARCHAR(32),
            HOTEN NVARCHAR(64),
            NGAYSINH DATE,
            DAKHOA BIT
        )

        CREATE TABLE LICHKHAM
        (
            MABN CHAR(16),
            MANS CHAR(16),
            NGAYKHAM DATE,
            GIOKHAM TIME
        )

        CREATE TABLE LICHLAMVIEC
        (
            MANS CHAR(16),
            NGAYKHAM DATE,
            GIOKHAM TIME
        )

        CREATE TABLE CHITIETPHIENKHAM
        (
            MACT CHAR(13) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 13),
            MABN CHAR(16),
            MANS CHAR(16),
            NGAYKHAM DATE,
            GIOKHAM TIME,
            TONGTIEN BIGINT DEFAULT 0,
            CHANDOAN NVARCHAR(512),
            TRIEUCHUNG NVARCHAR(512),
        )

        CREATE TABLE TOATHUOC
        (
            MACT CHAR(13),
            MALO CHAR(12),
            MATHUOC CHAR(10),
            SOLUONG INT,
            LIEULUONG NVARCHAR(32),
            THANHTIEN INT
        )

        CREATE TABLE DICHVUCHIDINH
        (
            MACT CHAR(13),
            MADV CHAR(9),
            THANHTIEN INT
        )

        CREATE TABLE DICHVU
        (
            MADV CHAR(9) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 9),
            TENDV NVARCHAR(64),
            DONGIA INT
        )

        CREATE TABLE THUOC
        (
            MALO CHAR(12) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 12),
            MATHUOC CHAR(10) DEFAULT SUBSTRING(CONVERT(CHAR(36), NEWID()), 1, 10),
            TENTHUOC NVARCHAR(32),
            DONVI VARCHAR(10),
            CHIDINH NVARCHAR(128),
            SOLUONG INT,
            NGAYHETHAN DATE,
            DONGIA INT
        )
    

        /*NOT NULL */
        --R21
        ALTER TABLE BENHNHAN ALTER COLUMN MABN CHAR(16) NOT NULL;
        ALTER TABLE BENHNHAN ALTER COLUMN DIENTHOAI CHAR(10) NOT NULL;
        ALTER TABLE BENHNHAN ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

        --R22
        ALTER TABLE NHANVIEN ALTER COLUMN MANV CHAR(16) NOT NULL;
        ALTER TABLE NHANVIEN ALTER COLUMN DIENTHOAI CHAR(10) NOT NULL;
        ALTER TABLE NHANVIEN ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

        --R23
        ALTER TABLE NHASI ALTER COLUMN MANS CHAR(16) NOT NULL;
        ALTER TABLE NHASI ALTER COLUMN DIENTHOAI CHAR(16) NOT NULL;
        ALTER TABLE NHASI ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

        --R24
        ALTER TABLE QUANTRI ALTER COLUMN MAQT CHAR(16) NOT NULL;
        ALTER TABLE QUANTRI ALTER COLUMN DIENTHOAI CHAR(10) NOT NULL;
        ALTER TABLE QUANTRI ALTER COLUMN HOTEN NVARCHAR(64) NOT NULL;

        --R25
        ALTER TABLE LICHKHAM ALTER COLUMN MANS CHAR(16) NOT NULL;
        ALTER TABLE LICHKHAM ALTER COLUMN MABN CHAR(16) NOT NULL;
        ALTER TABLE LICHKHAM ALTER COLUMN NGAYKHAM DATE NOT NULL;
        ALTER TABLE LICHKHAM ALTER COLUMN GIOKHAM TIME NOT NULL;

        --R26
        ALTER TABLE LICHLAMVIEC ALTER COLUMN MANS CHAR(16) NOT NULL;
        ALTER TABLE LICHLAMVIEC ALTER COLUMN NGAYKHAM DATE NOT NULL;
        ALTER TABLE LICHLAMVIEC ALTER COLUMN GIOKHAM TIME NOT NULL;

        --R27
        ALTER TABLE TOATHUOC ALTER COLUMN SOLUONG INT NOT NULL;
        ALTER TABLE TOATHUOC ALTER COLUMN LIEULUONG NVARCHAR(32) NOT NULL;
        ALTER TABLE TOATHUOC ALTER COLUMN MACT CHAR(13) NOT NULL;
        ALTER TABLE TOATHUOC ALTER COLUMN MALO CHAR(12) NOT NULL;
        ALTER TABLE TOATHUOC ALTER COLUMN MATHUOC CHAR(10) NOT NULL;

        --R28
        ALTER TABLE CHITIETPHIENKHAM ALTER COLUMN MACT CHAR(13) NOT NULL;

        --R29
        ALTER TABLE DICHVUCHIDINH ALTER COLUMN MACT CHAR(13) NOT NULL;
        ALTER TABLE DICHVUCHIDINH ALTER COLUMN MADV CHAR(9) NOT NULL;

        --R30
        ALTER TABLE DICHVU ALTER COLUMN MADV CHAR(9) NOT NULL;

        --R31
        ALTER TABLE THUOC ALTER COLUMN TENTHUOC NVARCHAR(32) NOT NULL;
        ALTER TABLE THUOC ALTER COLUMN MALO CHAR(12) NOT NULL;
        ALTER TABLE THUOC ALTER COLUMN SOLUONG CHAR(8) NOT NULL;
        ALTER TABLE THUOC ALTER COLUMN DONGIA CHAR(8) NOT NULL;
        ALTER TABLE THUOC ALTER COLUMN NGAYHETHAN DATE NOT NULL;
        ALTER TABLE THUOC ALTER COLUMN MATHUOC CHAR(10) NOT NULL;

        /*UNIQUE*/
        --R1
        ALTER TABLE QUANTRI ADD UNIQUE (DIENTHOAI);

        --R2
        ALTER TABLE BENHNHAN ADD UNIQUE (DIENTHOAI);

        --R3
        ALTER TABLE NHANVIEN ADD UNIQUE (DIENTHOAI);

        --R4
        ALTER TABLE NHASI ADD UNIQUE (DIENTHOAI);

        ALTER TABLE THUOC ADD UNIQUE (TENTHUOC);

        ALTER TABLE DICHVU ADD UNIQUE (TENDV);

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
        ALTER TABLE LICHKHAM ADD PRIMARY KEY (MANS, NGAYKHAM, GIOKHAM);

        --R10
        ALTER TABLE LICHLAMVIEC ADD PRIMARY KEY (MANS, NGAYKHAM, GIOKHAM);

        --R11
        ALTER TABLE CHITIETPHIENKHAM ADD PRIMARY KEY (MACT);

        --R12
        ALTER TABLE TOATHUOC ADD PRIMARY KEY (MACT, MALO, MATHUOC);

        --13
        ALTER TABLE DICHVUCHIDINH ADD PRIMARY KEY (MACT, MADV);

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
        ALTER TABLE TOATHUOC ADD CONSTRAINT FK_TOATHUOC_CHITIETPHIENKHAM FOREIGN KEY (MACT) REFERENCES CHITIETPHIENKHAM(MACT);
        ALTER TABLE TOATHUOC ADD CONSTRAINT FK_TOATHUOC_THUOC FOREIGN KEY (MALO, MATHUOC) REFERENCES THUOC(MALO, MATHUOC);

        --R18
        ALTER TABLE DICHVUCHIDINH ADD CONSTRAINT FK_DICHVUCHIDINH_CHITIETPHIENKHAM FOREIGN KEY (MACT) REFERENCES CHITIETPHIENKHAM(MACT);
        ALTER TABLE DICHVUCHIDINH ADD CONSTRAINT FK_DICHVUCHIDINH_DICHVU FOREIGN KEY (MADV) REFERENCES DICHVU(MADV);

        --R19
        ALTER TABLE LICHLAMVIEC ADD CONSTRAINT FK_LICHLAMVIEC_NHASI FOREIGN KEY (MANS) REFERENCES NHASI(MANS);

        --R20
        ALTER TABLE CHITIETPHIENKHAM ADD CONSTRAINT FK_CHITIETPHIENKHAM_LICHKHAM FOREIGN KEY (MANS, NGAYKHAM, GIOKHAM) REFERENCES LICHKHAM(MANS, NGAYKHAM, GIOKHAM);

        --R32
        ALTER TABLE BENHNHAN ADD CHECK (DATEDIFF(yy, NGAYSINH,  GETDATE()) >= 6)

        --R33
        ALTER TABLE THUOC ADD CHECK (SOLUONG >= 0)
END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        THROW
    END CATCH
COMMIT

GO
EXEC CREATE_TABLE
--R34
GO
CREATE OR ALTER TRIGGER ADD_THUOC_IN_TOATHUOC
ON TOATHUOC
FOR INSERT
AS
BEGIN
    DECLARE @MALO CHAR(12)
    DECLARE @MATHUOC CHAR(10)
    DECLARE @SOLUONG INT
    DECLARE CURSOR_P CURSOR FOR SELECT MALO, MATHUOC, SOLUONG FROM INSERTED
    
    OPEN CURSOR_P

    FETCH NEXT FROM CURSOR_P INTO @MALO, @MATHUOC, @SOLUONG
    WHILE @@FETCH_STATUS = 0
    BEGIN
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE @MATHUOC = T.MATHUOC AND @MALO = T.MALO AND T.SOLUONG >= @SOLUONG)
        BEGIN 
            ROLLBACK
            CLOSE CURSOR_P
            DEALLOCATE CURSOR_P
            RAISERROR(N'KHÔNG ĐỦ THUỐC', 16, 1)
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
CREATE OR ALTER TRIGGER CANCEL_THUOC_IN_TOATHUOC
ON TOATHUOC
FOR DELETE
AS
BEGIN
    DECLARE @MALO CHAR(12)
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
    DECLARE @MALO_NEW CHAR(12)
    DECLARE @MATHUOC_NEW CHAR(10)
    DECLARE @SOLUONG_NEW INT

    DECLARE @MALO_OLD CHAR(12)
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

            ROLLBACK

            CLOSE CURSOR_NEW
            CLOSE CURSOR_OLD
            DEALLOCATE CURSOR_NEW
            DEALLOCATE CURSOR_OLD
            
            RAISERROR(@MSG, 16, 1)
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
CREATE OR ALTER TRIGGER TONGTIEN_CHITIETPHIENKHAM_TOATHUOC
ON TOATHUOC
FOR INSERT, UPDATE, DELETE
AS
BEGIN 
    UPDATE CHITIETPHIENKHAM
    SET CHITIETPHIENKHAM.TONGTIEN = COALESCE((
        SELECT SUM(THANHTIEN)
        FROM TOATHUOC TT
        WHERE CHITIETPHIENKHAM.MACT = TT.MACT
    ), 0)
    +
    COALESCE((
        SELECT SUM(THANHTIEN)
        FROM DICHVUCHIDINH DV
        WHERE CHITIETPHIENKHAM.MACT = DV.MACT
    ), 0)
    FROM CHITIETPHIENKHAM
    INNER JOIN (inserted i LEFT JOIN deleted d ON i.MACT = d.MACT) ON CHITIETPHIENKHAM.MACT = i.MACT;
END;

GO
CREATE OR ALTER TRIGGER TONGTIEN_CHITIETPHIENKHAM_DICHVUCHIDINH
ON DICHVUCHIDINH
FOR INSERT, UPDATE, DELETE
AS
BEGIN 
    UPDATE CHITIETPHIENKHAM
    SET CHITIETPHIENKHAM.TONGTIEN = COALESCE((
        SELECT SUM(THANHTIEN)
        FROM TOATHUOC TT
        WHERE CHITIETPHIENKHAM.MACT = TT.MACT
    ), 0)
    +
    COALESCE((
        SELECT SUM(THANHTIEN)
        FROM DICHVUCHIDINH DV
        WHERE CHITIETPHIENKHAM.MACT = DV.MACT
    ), 0)
    FROM CHITIETPHIENKHAM
    INNER JOIN (inserted i LEFT JOIN deleted d ON i.MACT = d.MACT) ON CHITIETPHIENKHAM.MACT = i.MACT;
END;

GO
--R37
CREATE OR ALTER TRIGGER TOATHUOC_THANHTIEN
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
CREATE OR ALTER TRIGGER INSERT_LICHLAMVIEC
ON LICHLAMVIEC
FOR INSERT, UPDATE
AS
BEGIN
    DECLARE @MANS CHAR(16);  -- Mã nha sĩ
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
            ROLLBACK
            RAISERROR(@ErrorMessage, 16, 1)
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
    DECLARE @MABN CHAR(16);  -- Mã BỆNH NHÂN
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
            ROLLBACK
            RAISERROR(@ErrorMessage, 16, 1)
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


GO
CREATE OR ALTER TRIGGER DICHVUCHIDINH_THANHTIEN
ON DICHVUCHIDINH
FOR INSERT
AS
BEGIN
    DECLARE @GIA INT
    DECLARE @MADV CHAR(9)
    
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

GO
CREATE OR ALTER TRIGGER GRANT_BENHNHAN
ON BENHNHAN
AFTER INSERT
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

         -- Xử lý cho mỗi dòng dữ liệu trong inserted
        DECLARE @DIENTHOAI CHAR(10);
        DECLARE @NGAYSINH DATE;
        DECLARE @MATKHAU VARCHAR(10);
        DECLARE @PWD VARCHAR(10);

        DECLARE CursorName CURSOR FOR
        SELECT DIENTHOAI, NGAYSINH, MATKHAU
        FROM inserted;

        OPEN CursorName;

        FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH, @MATKHAU;

        WHILE @@FETCH_STATUS = 0
        BEGIN
            -- Lấy AccountID từ bản ghi mới được thêm vào
            SET @PWD = REPLACE(CAST(@NGAYSINH AS VARCHAR(10)), '-','');
            PRINT @PWD
            -- Tạo User
            DECLARE @USRNAME VARCHAR(MAX);
            DECLARE @SqlLogin NVARCHAR(MAX);
            SET @USRNAME = @DIENTHOAI + N'_BN'
            SET @SqlLogin = 'CREATE LOGIN ' + QUOTENAME(@USRNAME) + ' WITH PASSWORD = ' + QUOTENAME(@PWD, '''');
            EXEC sp_executesql @SqlLogin; -- Thiết lập mật khẩu mặc định, bạn có thể tùy chỉnh
            
            -- Tạo User trong cơ sở dữ liệu
            DECLARE @SqlUser NVARCHAR(MAX);
            SET @SqlUser = 'Create User [' + @USRNAME + '] From Login [' + @USRNAME + '] with default_schema = QLPHONGKHAM';
            EXEC sp_executesql @SqlUser;

            -- Phân quyền cho User
            DECLARE @SqlRole NVARCHAR(MAX);
            IF @MATKHAU IS NULL
            BEGIN
                SET @SqlRole = 'ALTER ROLE KHACH ADD MEMBER ' + QUOTENAME(@USRNAME);
                EXEC sp_executesql @SqlRole;
            END

            ELSE
            BEGIN
                SET @SqlRole = 'ALTER ROLE BENHNHAN ADD MEMBER ' + QUOTENAME(@USRNAME);
                EXEC sp_executesql @SqlRole;
            END
            FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH, @MATKHAU;
        END
        CLOSE CursorName;
        DEALLOCATE CursorName;
        
    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        RAISERROR(N'THÊM THẤT BẠI', 16, 1)
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER TRIGGER GRANT_NHANVIEN
ON NHANVIEN
AFTER INSERT
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

         -- Xử lý cho mỗi dòng dữ liệu trong inserted
        DECLARE @DIENTHOAI CHAR(10);
        DECLARE @NGAYSINH DATE;
        DECLARE @PWD VARCHAR(10);

        DECLARE CursorName CURSOR FOR
        SELECT DIENTHOAI, NGAYSINH
        FROM inserted;

        OPEN CursorName;

        FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;

        WHILE @@FETCH_STATUS = 0
        BEGIN
            -- Lấy AccountID từ bản ghi mới được thêm vào
            SET @PWD = REPLACE(CAST(@NGAYSINH AS VARCHAR(10)), '-','');
            PRINT @PWD
            -- Tạo User
            DECLARE @USRNAME VARCHAR(MAX);
            DECLARE @SqlLogin NVARCHAR(MAX);
            SET @USRNAME = @DIENTHOAI + N'_NV'
            SET @SqlLogin = 'CREATE LOGIN ' + QUOTENAME(@USRNAME) + ' WITH PASSWORD = ' + QUOTENAME(@PWD, '''');
            EXEC sp_executesql @SqlLogin; -- Thiết lập mật khẩu mặc định, bạn có thể tùy chỉnh
            -- Tạo User trong cơ sở dữ liệu
            DECLARE @SqlUser NVARCHAR(MAX);
            SET @SqlUser = 'Create User [' + @USRNAME + '] From Login [' + @USRNAME + '] with default_schema = QLPHONGKHAM';
            EXEC sp_executesql @SqlUser;

            -- Phân quyền cho User
            DECLARE @SqlRole NVARCHAR(MAX);
            SET @SqlRole = 'ALTER ROLE NHANVIEN ADD MEMBER ' + QUOTENAME(@USRNAME);
            EXEC sp_executesql @SqlRole;

            FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;
        END
        CLOSE CursorName;
        DEALLOCATE CursorName;
        
    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        RAISERROR(N'THÊM THẤT BẠI', 16, 1)
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER TRIGGER GRANT_QUANTRI
ON QUANTRI
AFTER INSERT
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

         -- Xử lý cho mỗi dòng dữ liệu trong inserted
        DECLARE @DIENTHOAI CHAR(10);
        DECLARE @NGAYSINH DATE;
        DECLARE @PWD VARCHAR(10);

        DECLARE CursorName CURSOR FOR
        SELECT DIENTHOAI, NGAYSINH
        FROM inserted;

        OPEN CursorName;

        FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;

        WHILE @@FETCH_STATUS = 0
        BEGIN
            -- Lấy AccountID từ bản ghi mới được thêm vào
            SET @PWD = REPLACE(CAST(@NGAYSINH AS VARCHAR(10)), '-','');
            PRINT @PWD
            
            -- Tạo User
            DECLARE @USRNAME VARCHAR(MAX);
            DECLARE @SqlLogin NVARCHAR(MAX);
            SET @USRNAME = @DIENTHOAI + N'_QT'
            SET @SqlLogin = 'CREATE LOGIN ' + QUOTENAME(@USRNAME) + ' WITH PASSWORD = ' + QUOTENAME(@PWD, '''');
            EXEC sp_executesql @SqlLogin; -- Thiết lập mật khẩu mặc định, bạn có thể tùy chỉnh
            
            -- Tạo User trong cơ sở dữ liệu
            DECLARE @SqlUser NVARCHAR(MAX);
            SET @SqlUser = 'Create User [' + @USRNAME + '] From Login [' + @USRNAME + '] with default_schema = QLPHONGKHAM';
            EXEC sp_executesql @SqlUser;

            -- Phân quyền cho User
            DECLARE @SqlRole NVARCHAR(MAX);
            SET @SqlRole = 'ALTER ROLE QUANTRI ADD MEMBER ' + QUOTENAME(@USRNAME);
            EXEC sp_executesql @SqlRole;
            FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;
        END
        CLOSE CursorName;
        DEALLOCATE CursorName;
        
    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        RAISERROR(N'TẠO LOGIN THẤT BẠI', 16, 1)
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER TRIGGER GRANT_NHASI
ON NHASI
AFTER INSERT
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

         -- Xử lý cho mỗi dòng dữ liệu trong inserted
        DECLARE @DIENTHOAI CHAR(10);
        DECLARE @NGAYSINH DATE;
        DECLARE @PWD VARCHAR(10);

        DECLARE CursorName CURSOR FOR
        SELECT DIENTHOAI, NGAYSINH
        FROM inserted;

        OPEN CursorName;

        FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;

        WHILE @@FETCH_STATUS = 0
        BEGIN
            -- Lấy AccountID từ bản ghi mới được thêm vào
            SET @PWD = REPLACE(CAST(@NGAYSINH AS VARCHAR(10)), '-','');
            PRINT @PWD
            -- Tạo User
            DECLARE @USRNAME VARCHAR(MAX);
            DECLARE @SqlLogin NVARCHAR(MAX);
            SET @USRNAME = @DIENTHOAI + N'_NS'
            SET @SqlLogin = 'CREATE LOGIN ' + QUOTENAME(@USRNAME) + ' WITH PASSWORD = ' + QUOTENAME(@PWD, '''');
            EXEC sp_executesql @SqlLogin; -- Thiết lập mật khẩu mặc định, bạn có thể tùy chỉnh

            -- Tạo User trong cơ sở dữ liệu
            DECLARE @SqlUser NVARCHAR(MAX);
            SET @SqlUser = 'Create User [' + @USRNAME + '] From Login [' + @USRNAME + '] with default_schema = QLPHONGKHAM';
            EXEC sp_executesql @SqlUser;

            -- Phân quyền cho User
            DECLARE @SqlRole NVARCHAR(MAX);
            SET @SqlRole = 'ALTER ROLE NHASI ADD MEMBER ' + QUOTENAME(@USRNAME);
            EXEC sp_executesql @SqlRole;

            FETCH NEXT FROM CursorName INTO @DIENTHOAI, @NGAYSINH;
        END
        CLOSE CursorName;
        DEALLOCATE CursorName;
        
    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        RAISERROR(N'THÊM THẤT BẠI', 16, 1)
    END CATCH
COMMIT TRAN
--FUNCTION
GO
CREATE OR ALTER PROC GET_INFO_NHANVIEN
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHANVIEN NV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHÂN VIÊN NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANV, HOTEN, DIENTHOAI
        FROM NHANVIEN NV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHANVIEN_BY_ID @MANV CHAR(16)
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHANVIEN NV WHERE NV.MANV = @MANV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHÂN VIÊN CÓ MÃ ' + CONVERT(NVARCHAR, @MANV, 16)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANV, HOTEN, DIENTHOAI
        FROM NHANVIEN NV
        WHERE NV.MANV = @MANV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN



GO
CREATE OR ALTER PROC GET_INFO_NHANVIEN_BY_NAME @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHANVIEN NV WHERE NV.HOTEN = @HOTEN)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG TÌM THẤY NHÂN VIÊN CÓ TÊN ' + CONVERT(NVARCHAR, @HOTEN, 64)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANV, HOTEN, DIENTHOAI
        FROM NHANVIEN NV
        WHERE NV.HOTEN = @HOTEN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHANVIEN_BY_PHONENUMBER @DIENTHOAI CHAR(10)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHANVIEN NV WHERE NV.DIENTHOAI = @DIENTHOAI)
        BEGIN
            DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
        END

        SELECT MANV, HOTEN, DIENTHOAI
        FROM NHANVIEN NV
        WHERE NV.DIENTHOAI = @DIENTHOAI
    END TRY
    BEGIN CATCH
        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM BENHNHAN BN)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MABN, HOTEN, DIENTHOAI, NGAYSINH, DIACHI
        FROM BENHNHAN BN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_ID @MABN CHAR(16)
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM BENHNHAN BN WHERE BN.MABN = @MABN)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN ' + CONVERT(NVARCHAR, @MABN, 16)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MABN, HOTEN, DIENTHOAI, NGAYSINH, DIACHI
        FROM BENHNHAN BN
        WHERE BN.MABN = @MABN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_NAME @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM BENHNHAN BN WHERE BN.HOTEN = @HOTEN)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN CÓ TÊN ' + CONVERT(NVARCHAR, @HOTEN, 64)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MABN, HOTEN, DIENTHOAI, NGAYSINH, DIACHI
        FROM BENHNHAN BN
        WHERE BN.HOTEN = @HOTEN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_PHONENUMBER @DIENTHOAI CHAR(10)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM BENHNHAN BN WHERE BN.DIENTHOAI = @DIENTHOAI)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN CÓ SỐ ĐIỆN THOẠI ' + CONVERT(NVARCHAR, @DIENTHOAI, 64)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MABN, HOTEN, DIENTHOAI, NGAYSINH, DIACHI
        FROM BENHNHAN BN
        WHERE BN.DIENTHOAI = @DIENTHOAI
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN


GO
CREATE OR ALTER PROC GET_INFO_NHASI
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHASI NS)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANS, HOTEN, DIENTHOAI
        FROM NHASI NS
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_ID @MANS CHAR(16)
As
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHASI NS WHERE NS.MANS = @MANS)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 16)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANS, HOTEN, DIENTHOAI
        FROM NHASI NS
        WHERE NS.MANS = @MANS
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_NAME @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHASI NS WHERE NS.HOTEN = @HOTEN)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ TÊN ' + CONVERT(NVARCHAR, @HOTEN, 16)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANS, HOTEN, DIENTHOAI
        FROM NHASI NS
        WHERE NS.HOTEN = @HOTEN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_PHONENUMBER @DIENTHOAI CHAR(10)
As
BEGIN TRAN 
   DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM NHASI NS WHERE NS.DIENTHOAI = @DIENTHOAI)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ SỐ ĐIỆN THOẠI ' + CONVERT(NVARCHAR, @DIENTHOAI, 64)
            RAISERROR(@MSG, 16, 1);
        END

        SELECT MANS, HOTEN, DIENTHOAI
        FROM NHASI NS
        WHERE NS.DIENTHOAI = @DIENTHOAI
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BẢNG GHI NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT *
        FROM THUOC T
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_ID @ID CHAR(10)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE T.MATHUOC = @ID)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BẢNG GHI NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT *
        FROM THUOC T
        WHERE T.MATHUOC = @ID
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_BATCH @MALO CHAR(12)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE T.MALO = @MALO)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BẢNG GHI NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT *
        FROM THUOC T
        WHERE T.MALO = @MALO
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_ID_AND_BATCH  @MALO CHAR(12), @MATHUOC CHAR(10)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE T.MALO = @MALO AND T.MATHUOC = @MATHUOC)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BẢNG GHI NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT *
        FROM THUOC T
        WHERE T.MATHUOC = @MATHUOC AND T.MALO = @MALO
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_NAME @TENTHUOC NVARCHAR(32)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T WHERE T.TENTHUOC = @TENTHUOC)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY THUỐC CÓ TÊN ' + CONVERT(NVARCHAR, @TENTHUOC, 64)
            RAISERROR(@MSG, 16, 1);
        END
        SELECT *
        FROM THUOC T
        WHERE T.TENTHUOC = @TENTHUOC
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_DICHVU
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU DV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BẢNG GHI NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT *
        FROM DICHVU DV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_DICHVU_BY_ID @MADV CHAR(9)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU DV WHERE DV.MADV = @MADV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY DỊCH VỤ PHÙ HỢP'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT *
        FROM DICHVU DV
        WHERE DV.MADV = @MADV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_DICHVU_BY_NAME @TENDV NVARCHAR(32)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU DV WHERE DV.TENDV = @TENDV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY DỊCH VỤ PHÙ HỢP'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT *
        FROM DICHVU DV
        WHERE DV.TENDV = @TENDV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE MANS = @MANS)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MANS
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_FOR_BENHNHAN @MABN CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE MABN = @MABN)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MABN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_DONE
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_DONE_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND LK.MANS = @MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MANS AND EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_UNFINISHED
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN


go 
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND LK.MANS = @MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH KHÁM NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT LK.MANS, NS.HOTEN, BN.DIENTHOAI, BN.HOTEN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MANS AND NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM 
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS  
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC WHERE MANS = @MANS)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC NÀO'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM 
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS  
        WHERE LLV.MANS = @MANS
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_FREE
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC LLV WHERE NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC TRỐNG NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS
        WHERE NOT EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC LLV WHERE NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LLV.MANS = @MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC TRỐNG NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS
        WHERE LLV.MANS = @MANS AND NOT EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_REGISTRED
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC LLV WHERE NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC TRỐNG NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS
        WHERE EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC LLV WHERE EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LLV.MANS = @MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
            )
        )
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY LỊCH LÀM VIỆC NÀO'
            RAISERROR(@MSG, 16, 1);
        END

        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS
        WHERE LLV.MANS = @MANS AND EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_CHITIETPHIENKHAM_DETAIL_ALL
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM HD)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY HÓA ĐƠN'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT HD.MACT, BN.DIENTHOAI, BN.HOTEN, NS.MANS, NS.HOTEN, HD.NGAYKHAM, HD.GIOKHAM, HD.CHANDOAN, HD.TRIEUCHUNG, HD.TONGTIEN
        FROM CHITIETPHIENKHAM HD
        JOIN NHASI NS ON HD.MANS = NS.MANS
        JOIN BENHNHAN BN ON HD.MABN = BN.MABN
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_CHITIETPHIENKHAM_DETAIL @MABN CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM HD 
        WHERE @MABN = MABN AND @NGAYKHAM = NGAYKHAM AND @GIOKHAM = GIOKHAM)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY HÓA ĐƠN'
            RAISERROR(@MSG, 16, 1);
        END
        
        SELECT HD.MACT, BN.DIENTHOAI, BN.HOTEN, NS.MANS, NS.HOTEN, HD.NGAYKHAM, HD.GIOKHAM, HD.CHANDOAN, HD.TRIEUCHUNG, HD.TONGTIEN
        FROM CHITIETPHIENKHAM HD
        JOIN NHASI NS ON HD.MANS = NS.MANS
        JOIN BENHNHAN BN ON HD.MABN = BN.MABN
        WHERE @MABN = HD.MABN AND @NGAYKHAM = NGAYKHAM AND @GIOKHAM = GIOKHAM
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_TOATHUOC
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM TOATHUOC TT)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY TOA THUỐC'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT TT.MACT, TT.MALO, TT.MATHUOC, T.TENTHUOC, TT.LIEULUONG, TT.SOLUONG, T.DONGIA,TT.THANHTIEN
        FROM TOATHUOC TT
        JOIN THUOC T ON T.MATHUOC = TT.MATHUOC
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_TOATHUOC_DETAIL @MACT CHAR(13)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM TOATHUOC TT
        WHERE @MACT = MACT)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY TOA THUỐC'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT TT.MACT, TT.MALO, TT.MATHUOC, T.TENTHUOC, TT.LIEULUONG, TT.SOLUONG, T.DONGIA,TT.THANHTIEN
        FROM TOATHUOC TT
        JOIN THUOC T ON T.MATHUOC = TT.MATHUOC
        WHERE @MACT = MACT
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_DICHVUCHIDINH 
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVUCHIDINH DV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY DANH SÁCH DỊCH VỤ CHỈ ĐỊNH'
            RAISERROR(@MSG, 16, 1);
        END
        SELECT DV.MACT, DV.MADV, D.TENDV, D.DONGIA, DV.THANHTIEN
        FROM DICHVUCHIDINH DV
        JOIN DICHVU D ON D.MADV = DV.MADV

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go 
CREATE OR ALTER PROC GET_DICHVUCHIDINH_DETAIL @MACT CHAR(13)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVUCHIDINH DV
        WHERE @MACT = MACT)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY DANH SÁCH DỊCH VỤ CHỈ ĐỊNH CỦA HÓA ĐƠN ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1);
        END
        SELECT DV.MACT, DV.MADV, D.TENDV, D.DONGIA, DV.THANHTIEN
        FROM DICHVUCHIDINH DV
        JOIN DICHVU D ON D.MADV = DV.MADV
        WHERE @MACT = MACT
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_NHASI @TEN NVARCHAR(64), @NGAYSINH DATE, @DIENTHOAI CHAR(10), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF (@TEN) is NULL OR @DIENTHOAI is NULL OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        INSERT INTO NHASI(HOTEN, NGAYSINH, DIENTHOAI, MATKHAU, DAKHOA)
        VALUES (@TEN, @NGAYSINH, @DIENTHOAI, @MATKHAU, 0)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();

        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_NHANVIEN @TEN NVARCHAR(64), @NGAYSINH DATE, @DIENTHOAI CHAR(10), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF (@TEN) is NULL OR @DIENTHOAI is NULL OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        INSERT INTO NHANVIEN(HOTEN, NGAYSINH, DIENTHOAI, MATKHAU, DAKHOA)
        VALUES (@TEN, @NGAYSINH, @DIENTHOAI, @MATKHAU, 0)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();

        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_QUANTRI @TEN NVARCHAR(64), @NGAYSINH DATE, @DIENTHOAI CHAR(10), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF (@TEN) is NULL OR @DIENTHOAI is NULL OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        INSERT INTO QUANTRI(HOTEN, DIENTHOAI, MATKHAU, NGAYSINH)
        VALUES (@TEN, @DIENTHOAI, @MATKHAU, @NGAYSINH)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();

        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_BENHNHAN 
    @TEN NVARCHAR(64), @DIENTHOAI CHAR(10), 
    @MATKHAU VARCHAR(32) = NULL,
    @NGAYSINH DATE, @DIACHI NVARCHAR(128) 
AS  
BEGIN TRAN
    BEGIN TRY
        IF  (@TEN) is NULL OR @DIENTHOAI is NULL
            OR (@NGAYSINH) is NULL OR (@DIACHI) is NULL
        BEGIN
            RAISERROR (N'INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END
        INSERT INTO BENHNHAN(HOTEN, DIENTHOAI, MATKHAU, NGAYSINH, DIACHI, DAKHOA)
        VALUES (@TEN, @DIENTHOAI, @MATKHAU, @NGAYSINH, @DIACHI, 0)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC REGISTER_LICHKHAM
    @TEN NVARCHAR(64), @DIENTHOAI CHAR(10), 
    @NGAYSINH DATE, @DIACHI NVARCHAR(128),
    @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

        IF  @TEN is null OR (@DIENTHOAI) is NULL
            OR (@NGAYSINH) is null OR (@DIACHI) IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI)
        BEGIN
            INSERT INTO BENHNHAN(HOTEN, DIENTHOAI, NGAYSINH, DIACHI, DAKHOA)
            VALUES (@TEN, @DIENTHOAI, @NGAYSINH, @DIACHI, 0)
        END
        ELSE    
        BEGIN
            DECLARE @MABN CHAR(16)
            SELECT @MABN = MABN FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI

            INSERT INTO LICHKHAM(MANS, MABN, NGAYKHAM, GIOKHAM)
            VALUES (@MANS, @MABN, @NGAYKHAM, @GIOKHAM)

        END

        IF(SELECT COUNT(*) FROM LICHKHAM WHERE MABN = @MABN AND NGAYKHAM = @NGAYKHAM) > 1
        BEGIN
            ROLLBACK
            RAISERROR(N'BỆNH NHÂN ĐÃ CÓ 1 LỊCH KHÁM TRONG NGÀY', 16, 1)
        END
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC DROP_LICHKHAM
    @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

        IF  @MANS is null OR (@NGAYKHAM) is NULL
            OR (@GIOKHAM) is null
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        DELETE LICHKHAM
        WHERE MANS = @MANS AND NGAYKHAM = @NGAYKHAM AND GIOKHAM = @GIOKHAM
        
    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_LICHLAMVIEC 
    @MANS CHAR(16),
    @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF @MANS IS NULL OR @NGAYKHAM IS NULL OR @GIOKHAM IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'INPUT KHÔNG ĐƯỢC ĐỂ TRỐNG', 16, 1)
        END

        IF NOT EXISTS(SELECT * FROM NHASI WHERE MANS = @MANS)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 64)
            RAISERROR(@MSG, 16, 1)
        END

        INSERT INTO LICHLAMVIEC(MANS, NGAYKHAM, GIOKHAM)
        VALUES (@MANS, @NGAYKHAM, @GIOKHAM)
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC DROP_LICHLAMVIEC 
    @MANS CHAR(16),
    @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF @MANS IS NULL OR @NGAYKHAM IS NULL OR @GIOKHAM IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'INPUT KHÔNG ĐƯỢC ĐỂ TRỐNG', 16, 1)
        END

        IF NOT EXISTS(SELECT * FROM LICHKHAM WHERE MANS = @MANS AND NGAYKHAM = @NGAYKHAM AND GIOKHAM = @GIOKHAM)
        BEGIN
            ROLLBACK
            SET @MSG = N'KHÔNG THỂ XÓA LỊCH LÀM VIỆC VÌ ĐÃ ĐƯỢC ĐẶT' + CONVERT(NVARCHAR, @MANS, 64)
            RAISERROR(@MSG, 16, 1)
        END 

        IF NOT EXISTS(SELECT * FROM NHASI WHERE MANS = @MANS)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 64)
            RAISERROR(@MSG, 16, 1)
        END

        DELETE LICHLAMVIEC
        WHERE MANS = @MANS AND NGAYKHAM = @NGAYKHAM AND GIOKHAM = @GIOKHAM

    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_CHITIETPHIENKHAM 
    @MABN CHAR(16),
    @MANS CHAR(16),
    @NGAYKHAM DATE, @GIOKHAM TIME,
    @CHANDOAN NVARCHAR(512), @TRIEUCHUNG NVARCHAR(512) 
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
    IF @MANS IS NULL OR @MABN IS NULL OR @NGAYKHAM IS NULL OR @GIOKHAM IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'INPUT KHÔNG ĐƯỢC ĐỂ TRỐNG', 16, 1)
        END

        IF NOT EXISTS(SELECT * FROM NHASI WHERE MANS = @MANS)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 64)
            RAISERROR(@MSG, 16, 1)
        END

        IF NOT EXISTS(SELECT * FROM BENHNHAN WHERE MABN = @MABN)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY BỆNH NHÂN CÓ ID ' + CONVERT(NVARCHAR, @MABN, 64)
            RAISERROR(@MSG, 16, 1)
        END

        INSERT INTO CHITIETPHIENKHAM(MABN, MANS, NGAYKHAM, GIOKHAM, CHANDOAN, TRIEUCHUNG)
        VALUES (@MABN, @MANS, @NGAYKHAM, @GIOKHAM, @CHANDOAN, @TRIEUCHUNG) 

    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_TOATHUOC
    @MACT CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1)
        END

        DECLARE @MALO CHAR(12)
        DECLARE @MATHUOC CHAR(10)

        SELECT @MALO = MALO FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO
        
        INSERT INTO TOATHUOC(MACT, MALO, MATHUOC, SOLUONG, LIEULUONG)
        VALUES (@MACT, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC DROP_THUOC_IN_TOATHUOC
    @MACT CHAR(13),
    @MATHUOC NVARCHAR(32),
    @MALO CHAR(12)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1)
        END

        DELETE TOATHUOC
        WHERE @MACT = MACT AND MATHUOC = @MATHUOC AND MALO = @MALO

    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_DICHVUCHIDINH
    @MACT CHAR(13),
    @TENDV NVARCHAR(64)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1)
        END

        DECLARE @MADV CHAR(9)
        SELECT @MADV = MADV FROM DICHVU WHERE @TENDV = TENDV
        
        IF @MADV IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        INSERT INTO DICHVUCHIDINH(MACT, MADV)
        VALUES (@MACT, @MADV) 
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC DROP_DICHVUCHIDINH
    @MACT CHAR(13),
    @MADV CHAR(9)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVUCHIDINH WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64) + ' CHƯA ĐƯỢC CHỈ ĐỊNH DỊCH VỤ NÀO'
            RAISERROR(@MSG, 16, 1)
        END

        IF NOT EXISTS(SELECT * FROM DICHVUCHIDINH WHERE MADV = @MADV) 
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY TRONG HÓA ĐƠN TỒN TẠI DỊCH VỤ CÓ MÃ ' + CONVERT(NVARCHAR, @MADV, 64)
            RAISERROR(@MSG, 16, 1)  
        END 

        DELETE DICHVUCHIDINH
        WHERE @MACT = MACT AND MADV = @MADV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_DICHVU
    @TENDV NVARCHAR(64),
    @DONGIA INT
AS
BEGIN TRAN
    BEGIN TRY
        INSERT INTO DICHVU(TENDV, DONGIA)
        VALUES (@TENDV, @DONGIA) 
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC DROP_DICHVU
    @MADV CHAR(9)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU WHERE MADV = @MADV) 
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY DỊCH VỤ CÓ MÃ ' + CONVERT(NVARCHAR, @MADV, 64)
            RAISERROR(@MSG, 16, 1)  
        END 

        DELETE DICHVU
        WHERE MADV = @MADV
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_THUOC
    @TENTHUOC NVARCHAR(32),
    @DONVI VARCHAR(10),
    @CHIDINH NVARCHAR(128),
    @SOLUONG INT,
    @NGAYHETHAN DATE,
    @DONGIA INT
AS
BEGIN TRAN
    BEGIN TRY
        INSERT INTO THUOC(TENTHUOC, DONVI, CHIDINH, SOLUONG, NGAYHETHAN, DONGIA)
        VALUES (@TENTHUOC, @DONVI, @CHIDINH, @SOLUONG, @NGAYHETHAN, @DONGIA) 
    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC DROP_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10)
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WHERE @MALO = MALO AND MATHUOC = @MATHUOC)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        DELETE THUOC
        WHERE MATHUOC = @MATHUOC AND MALO = @MALO

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC DROP_THUOC_EXPIRED
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);

        IF NOT EXISTS(SELECT * FROM THUOC)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        DELETE THUOC
        WHERE NGAYHETHAN <= GETDATE() 

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC CHANGE_LICHKHAM
    @SODIENTHOAI CHAR(10),
    @MANS_OLD CHAR(16), @NGAYKHAM_OLD DATE, @GIOKHAM_OLD TIME, 
    @MANS_NEW CHAR(16), @NGAYKHAM_NEW DATE, @GIOKHAM_NEW TIME
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MABN CHAR(16)
        SELECT @MABN = MABN FROM BENHNHAN WHERE DIENTHOAI = @SODIENTHOAI
        
        IF @NGAYKHAM_OLD = @NGAYKHAM_NEW AND @GIOKHAM_OLD = @GIOKHAM_NEW AND @MANS_OLD = @MANS_NEW
        BEGIN
            RAISERROR (N'VUI LÒNG THAY ĐỔI LỊCH KHÁM MỚI KHÔNG TRÙNG LỊCH KHÁM CŨ', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM LICHKHAM WHERE NGAYKHAM = @NGAYKHAM_OLD AND MANS = @MANS_OLD AND GIOKHAM = @GIOKHAM_OLD)
        BEGIN
            RAISERROR (N'KHÔNG TỒN TẠI LỊCH KHÁM CŨ', 16, 1);
        END

        IF  @NGAYKHAM_OLD IS NULL OR @GIOKHAM_OLD IS NULL 
            OR @NGAYKHAM_NEW IS NULL OR @GIOKHAM_NEW IS NULL OR @MANS_OLD IS NULL
            OR @MANS_NEW IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE NGAYKHAM = @NGAYKHAM_OLD AND MANS = @MANS_OLD AND GIOKHAM = @GIOKHAM_OLD)
        BEGIN
            RAISERROR (N'KHÔNG THỂ THAY ĐỔI VÌ LỊCH HẸN ĐÃ ĐƯỢC THỰC HIỆN', 16, 1);
        END

        UPDATE LICHKHAM
        SET GIOKHAM = @GIOKHAM_NEW, NGAYKHAM = @NGAYKHAM_NEW, MANS = @MANS_NEW
        WHERE GIOKHAM = @GIOKHAM_OLD AND @NGAYKHAM_OLD = NGAYKHAM AND @MANS_OLD = MANS

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC CHANGE_LICHLAMVIEC
    @SODIENTHOAI CHAR(10),
    @NGAYKHAM_OLD DATE, @GIOKHAM_OLD TIME, 
    @NGAYKHAM_NEW DATE, @GIOKHAM_NEW TIME
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        SELECT @MANS = MANS FROM NHASI WHERE DIENTHOAI = @SODIENTHOAI
        
        IF  @NGAYKHAM_OLD IS NULL OR @GIOKHAM_OLD IS NULL 
            OR @NGAYKHAM_NEW IS NULL OR @GIOKHAM_NEW IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC WHERE NGAYKHAM = @NGAYKHAM_OLD AND MANS = @MANS AND GIOKHAM = @GIOKHAM_OLD)
        BEGIN
            RAISERROR (N'KHÔNG TỒN TẠI LỊCH KHÁM CŨ', 16, 1);
        END

        IF EXISTS(SELECT * FROM LICHKHAM WHERE NGAYKHAM = @NGAYKHAM_OLD AND MANS = @MANS AND GIOKHAM = @GIOKHAM_OLD)
        BEGIN
            RAISERROR (N'KHÔNG THỂ THAY ĐỔI VÌ LỊCH HẸN ĐÃ ĐƯỢC BỆNH NHÂN ĐẶT', 16, 1);
        END

        UPDATE LICHLAMVIEC
        SET GIOKHAM = @GIOKHAM_NEW, NGAYKHAM = @NGAYKHAM_NEW, MANS = @MANS
        WHERE GIOKHAM = @GIOKHAM_OLD AND @NGAYKHAM_OLD = NGAYKHAM AND @MANS = MANS

        IF EXISTS(SELECT * FROM LICHLAMVIEC WHERE MANS = @MANS AND ((datepart(hour, GIOKHAM) < 7) or (datepart(hour, GIOKHAM) >= 11 and datepart(hour, GIOKHAM) < 13) or (datepart(hour, GIOKHAM) >= 17)))
        BEGIN
            ROLLBACK
            RAISERROR(N'GIỜ LÀM VIỆC NẰM NGOÀI GIỜ HÀNH CHÍNH', 16, 1)
        END

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC UPDATE_INFO_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @TENTHUOC NVARCHAR(32),
    @DONVI VARCHAR(10),
    @CHIDINH NVARCHAR(128),
    @SOLUONG INT,
    @NGAYHETHAN DATE,
    @DONGIA INT
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WHERE @MALO = MALO AND MATHUOC = @MATHUOC)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        UPDATE THUOC
        SET TENTHUOC = CASE WHEN @TENTHUOC IS NULL THEN TENTHUOC ELSE @TENTHUOC END, 
            DONVI = CASE WHEN @DONVI IS NULL THEN DONVI ELSE @DONVI END, 
            SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE @SOLUONG END,
            NGAYHETHAN = CASE WHEN @NGAYHETHAN IS NULL THEN NGAYHETHAN ELSE @NGAYHETHAN END, 
            DONGIA = CASE WHEN @DONGIA IS NULL THEN DONGIA ELSE @DONGIA END
        WHERE @MALO = MALO AND MATHUOC = @MATHUOC

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC UPDATE_INFO_DICHVU
    @MADV CHAR(9),
    @TENDV NVARCHAR(64),
    @DONGIA INT
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MADV IS NULL OR @TENDV IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM DICHVU WHERE @MADV = MADV)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY DỊCH VỤ', 16, 1);
        END

        UPDATE DICHVU
        SET TENDV = CASE WHEN @TENDV IS NULL THEN TENDV ELSE @TENDV END, 
            DONGIA = CASE WHEN @DONGIA IS NULL THEN DONGIA ELSE @DONGIA END
        WHERE @MADV = MADV

    END TRY
    BEGIN CATCH
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT 
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();
            
        ROLLBACK
        RAISERROR(@ErrorMessage,
                @ErrorSeverity, 
                @ErrorState);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC BLOCK_ACCOUNT_BENHNHAN
    @MABN CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF  @MABN IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM BENHNHAN WHERE @MABN = MABN)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN CÓ ID ' + CONVERT(NVARCHAR, @MABN, 64)
            ROLLBACK
            RAISERROR(@MSG, 16, 1);
        END

        UPDATE BENHNHAN
        SET DAKHOA = 1
        WHERE MABN = @MABN

    END TRY
    BEGIN CATCH
        SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN CÓ ID ' + CONVERT(NVARCHAR, @MABN, 64)
        ROLLBACK
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC BLOCK_ACCOUNT_NHASI
    @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF  @MANS IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM NHASI WHERE @MANS = MANS)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 64)
            ROLLBACK
            RAISERROR(@MSG, 16, 1);
        END

        UPDATE NHASI
        SET DAKHOA = 1
        WHERE MANS = @MANS

    END TRY
    BEGIN CATCH
        SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ ID ' + CONVERT(NVARCHAR, @MANS, 64)
        ROLLBACK
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC BLOCK_ACCOUNT_NHANVIEN
    @MANV CHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF  @MANV IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM NHANVIEN WHERE @MANV = MANV)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY NHÂN VIÊN CÓ ID ' + CONVERT(NVARCHAR, @MANV, 64)
            ROLLBACK
            RAISERROR(@MSG, 16, 1);
        END

        UPDATE NHANVIEN
        SET DAKHOA = 1
        WHERE MANV = @MANV

    END TRY
    BEGIN CATCH
        SET @MSG = N'KHÔNG TÌM THẤY NHÂN VIÊN CÓ ID ' + CONVERT(NVARCHAR, @MANV, 64)
        ROLLBACK
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

go
CREATE OR ALTER PROC UPDATE_INFO_BENHNHAN
    @MABN CHAR(16),
    @MATKHAU VARCHAR(32),
    @HOTEN NVARCHAR(64),
    @NGAYSINH DATE,
    @DIACHI NVARCHAR(128)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF @MABN IS NULL
        BEGIN
            RAISERROR ('MÃ BỆNH NHÂN KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM BENHNHAN WHERE @MABN = MABN)
        BEGIN
            SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN CÓ ID ' + CONVERT(NVARCHAR, @MABN, 64)
            ROLLBACK
            RAISERROR(@MSG, 16, 1);
        END

        UPDATE BENHNHAN
        SET HOTEN = CASE WHEN @HOTEN IS NULL THEN HOTEN ELSE @HOTEN END,
            NGAYSINH = CASE WHEN @NGAYSINH IS NULL THEN NGAYSINH ELSE @NGAYSINH END,
            DIACHI = CASE WHEN @DIACHI IS NULL THEN DIACHI ELSE @DIACHI END,
            MATKHAU = CASE WHEN @MATKHAU IS NULL THEN MATKHAU ELSE @MATKHAU END
        WHERE MABN = @MABN

    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        THROW
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC SIGIN
    @DIENTHOAI CHAR(10),
    @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF  NOT EXISTS (SELECT * FROM QUANTRI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU) OR
            NOT EXISTS (SELECT * FROM NHASI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU) OR
            NOT EXISTS (SELECT * FROM NHANVIEN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU) OR
            NOT EXISTS (SELECT * FROM BENHNHAN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU)
        BEGIN
            RAISERROR (N'TÀI KHOẢN CHƯA ĐĂNG KÍ', 16, 1);
        END

        IF  EXISTS (SELECT * FROM QUANTRI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU) OR
            EXISTS (SELECT * FROM NHASI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU AND DAKHOA = 1) OR
            EXISTS (SELECT * FROM NHANVIEN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU AND DAKHOA = 1) OR
            EXISTS (SELECT * FROM BENHNHAN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU AND DAKHOA = 1)
        BEGIN
            RAISERROR (N'TÀI KHOẢN ĐÃ BỊ KHÓA', 16, 1);
        END

        IF EXISTS(SELECT 1 FROM BENHNHAN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU != MATKHAU)
        BEGIN
            SET @MSG = N'SAI MẬT KHẨU'
            ROLLBACK
            RAISERROR(@MSG, 16, 1);
        END

        IF EXISTS(SELECT 1 FROM QUANTRI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU)
        BEGIN
            RETURN 1       
        END

        IF EXISTS(SELECT 1 FROM NHASI WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU)
        BEGIN
            RETURN 2    
        END

        IF EXISTS(SELECT 1 FROM NHANVIEN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU)
        BEGIN
            RETURN 3    
        END

        IF EXISTS(SELECT 1 FROM BENHNHAN WHERE @DIENTHOAI = DIENTHOAI AND @MATKHAU = MATKHAU)
        BEGIN
            RETURN 4    
        END
    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        THROW
    END CATCH
COMMIT TRAN

--Phan quyen
--Tao role
GO
EXEC SP_ADDROLE 'KHACH'
EXEC SP_ADDROLE 'BENHNHAN'
EXEC SP_ADDROLE 'NHASI'
EXEC SP_ADDROLE 'QUANTRI'
EXEC SP_ADDROLE 'NHANVIEN'

GO
--BENH NHAN CHUA CO TAI KHOAN
GRANT select 
ON NHASI(MANS, HOTEN)
TO KHACH

GRANT select 
ON THUOC(MATHUOC, TENTHUOC, DONVI, DONGIA)
TO KHACH

GRANT select 
ON DICHVU(MADV, TENDV, DONGIA)
TO KHACH

GRANT SELECT 
ON LICHLAMVIEC 
TO KHACH

GRANT SELECT, INSERT, DELETE
ON LICHKHAM 
TO KHACH 

--BENH NHAN DA CO TAI KHOAN
GRANT select, UPDATE(MATKHAU, HOTEN, NGAYSINH, DIACHI) 
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
ON CHITIETPHIENKHAM
TO BENHNHAN

GRANT SELECT 
ON TOATHUOC
TO BENHNHAN

GRANT SELECT 
ON DICHVUCHIDINH
TO BENHNHAN

--NHA SI
GRANT INSERT, SELECT(MABN, HOTEN, NGAYSINH)
ON BENHNHAN
TO NHASI 

GRANT SELECT, INSERT, UPDATE
ON CHITIETPHIENKHAM
TO NHASI

GRANT SELECT, INSERT, UPDATE
ON TOATHUOC
TO NHASI

GRANT SELECT, INSERT, UPDATE
ON DICHVUCHIDINH
TO NHASI

GRANT UPDATE, SELECT, INSERT
ON LICHLAMVIEC
TO NHASI

GRANT SELECT 
ON THUOC
TO NHASI

GRANT SELECT
ON DICHVU
TO NHASI

--NHAN VIEN
GRANT SELECT, INSERT, DELETE 
ON LICHKHAM
TO NHANVIEN

GRANT SELECT 
ON TOATHUOC
TO NHANVIEN

GRANT SELECT 
ON DICHVUCHIDINH
TO NHANVIEN

GRANT SELECT
ON CHITIETPHIENKHAM
TO NHANVIEN

--QUAN TRI
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

--PHAN QUYEN EXEC
GO
GRANT EXEC ON GET_INFO_NHANVIEN TO KHACH 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_ID TO KHACH  
GRANT EXEC ON GET_INFO_NHANVIEN_BY_NAME TO KHACH 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_PHONENUMBER TO KHACH
GRANT EXEC ON GET_INFO_NHASI TO KHACH 
GRANT EXEC ON GET_INFO_NHASI_BY_ID TO KHACH
GRANT EXEC ON GET_INFO_NHASI_BY_NAME TO KHACH 
GRANT EXEC ON GET_INFO_NHASI_BY_PHONENUMBER TO KHACH
GRANT EXEC ON GET_INFO_THUOC TO KHACH  
GRANT EXEC ON GET_INFO_THUOC_BY_ID TO KHACH  
GRANT EXEC ON GET_INFO_THUOC_BY_NAME TO KHACH  
GRANT EXEC ON GET_INFO_DICHVU TO KHACH  
GRANT EXEC ON GET_INFO_DICHVU_BY_NAME TO KHACH  
GRANT EXEC ON GET_LICHKHAM_DETAIL TO KHACH  
GRANT EXEC ON GET_LICHKHAM_DETAIL_FOR_BENHNHAN TO BENHNHAN 
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO KHACH  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL TO KHACH  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO KHACH  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_OF_NHASI TO KHACH  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE TO KHACH  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI TO KHACH  
GRANT EXEC ON GET_DICHVUCHIDINH_DETAIL TO KHACH  
GRANT EXEC ON GET_TOATHUOC_DETAIL TO KHACH  
GRANT EXEC ON INSERT_INTO_BENHNHAN TO BENHNHAN 
GRANT EXEC ON REGISTER_LICHKHAM TO KHACH  
GRANT EXEC ON DROP_LICHKHAM TO KHACH  
GRANT EXEC ON CHANGE_LICHKHAM TO KHACH  


GRANT EXEC ON GET_INFO_NHANVIEN TO BENHNHAN 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_ID TO BENHNHAN  
GRANT EXEC ON GET_INFO_NHANVIEN_BY_NAME TO BENHNHAN 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_PHONENUMBER TO BENHNHAN
GRANT EXEC ON GET_INFO_NHASI TO BENHNHAN 
GRANT EXEC ON GET_INFO_NHASI_BY_ID TO BENHNHAN
GRANT EXEC ON GET_INFO_NHASI_BY_NAME TO BENHNHAN 
GRANT EXEC ON GET_INFO_NHASI_BY_PHONENUMBER TO BENHNHAN
GRANT EXEC ON GET_INFO_BENHNHAN_BY_ID TO BENHNHAN  
GRANT EXEC ON GET_INFO_THUOC TO BENHNHAN  
GRANT EXEC ON GET_INFO_THUOC_BY_ID TO BENHNHAN  
GRANT EXEC ON GET_INFO_THUOC_BY_NAME TO BENHNHAN  
GRANT EXEC ON GET_INFO_DICHVU TO BENHNHAN  
GRANT EXEC ON GET_INFO_DICHVU_BY_NAME TO BENHNHAN  
GRANT EXEC ON GET_LICHKHAM_DETAIL TO BENHNHAN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO BENHNHAN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL TO BENHNHAN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_FOR_BENHNHAN TO BENHNHAN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO BENHNHAN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_OF_NHASI TO BENHNHAN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE TO BENHNHAN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI TO BENHNHAN  
GRANT EXEC ON GET_CHITIETPHIENKHAM_DETAIL TO BENHNHAN  
GRANT EXEC ON GET_DICHVUCHIDINH_DETAIL TO BENHNHAN  
GRANT EXEC ON GET_TOATHUOC_DETAIL TO BENHNHAN  
GRANT EXEC ON INSERT_INTO_BENHNHAN TO BENHNHAN  
GRANT EXEC ON REGISTER_LICHKHAM TO BENHNHAN  
GRANT EXEC ON DROP_LICHKHAM TO BENHNHAN  
GRANT EXEC ON UPDATE_INFO_BENHNHAN TO BENHNHAN  
GRANT EXEC ON CHANGE_LICHKHAM TO BENHNHAN  

GRANT EXEC ON GET_INFO_NHANVIEN TO NHASI 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_ID TO NHASI  
GRANT EXEC ON GET_INFO_NHANVIEN_BY_NAME TO NHASI 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_PHONENUMBER TO NHASI
GRANT EXEC ON GET_INFO_NHASI TO NHASI 
GRANT EXEC ON GET_INFO_NHASI_BY_ID TO NHASI
GRANT EXEC ON GET_INFO_BENHNHAN_BY_ID TO NHASI  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_NAME TO NHASI  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_PHONENUMBER TO NHASI  
GRANT EXEC ON GET_INFO_THUOC TO NHASI  
GRANT EXEC ON GET_INFO_THUOC_BY_ID TO NHASI  
GRANT EXEC ON GET_INFO_THUOC_BY_NAME TO NHASI  
GRANT EXEC ON GET_INFO_DICHVU TO NHASI  
GRANT EXEC ON GET_INFO_DICHVU_BY_NAME TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_DONE TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_DONE_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_UNFINISHED TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL TO NHASI  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_REGISTRED TO NHASI  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI TO NHASI  
GRANT EXEC ON GET_CHITIETPHIENKHAM_DETAIL TO NHASI  
GRANT EXEC ON GET_DICHVUCHIDINH_DETAIL TO NHASI  
GRANT EXEC ON GET_TOATHUOC_DETAIL TO NHASI  
GRANT EXEC ON INSERT_INTO_LICHLAMVIEC TO NHASI  
GRANT EXEC ON INSERT_INTO_CHITIETPHIENKHAM TO NHASI  
GRANT EXEC ON INSERT_INTO_TOATHUOC TO NHASI  
GRANT EXEC ON INSERT_INTO_DICHVUCHIDINH TO NHASI  
GRANT EXEC ON REGISTER_LICHKHAM TO NHASI
GRANT EXEC ON INSERT_INTO_BENHNHAN TO NHASI    
GRANT EXEC ON CHANGE_LICHLAMVIEC TO NHASI  

GRANT EXEC ON GET_INFO_NHANVIEN TO NHANVIEN 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_ID TO NHANVIEN  
GRANT EXEC ON GET_INFO_NHASI TO NHANVIEN 
GRANT EXEC ON GET_INFO_NHASI_BY_ID TO NHANVIEN
GRANT EXEC ON GET_INFO_NHASI_BY_NAME TO NHANVIEN 
GRANT EXEC ON GET_INFO_NHASI_BY_PHONENUMBER TO NHANVIEN
GRANT EXEC ON GET_INFO_BENHNHAN_BY_ID TO NHANVIEN  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_NAME TO NHANVIEN  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_PHONENUMBER TO NHANVIEN  
GRANT EXEC ON GET_INFO_THUOC TO NHANVIEN  
GRANT EXEC ON GET_INFO_THUOC_BY_ID TO NHANVIEN  
GRANT EXEC ON GET_INFO_THUOC_BY_NAME TO NHANVIEN  
GRANT EXEC ON GET_INFO_DICHVU TO NHANVIEN  
GRANT EXEC ON GET_INFO_DICHVU_BY_NAME TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_DONE TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_DONE_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_UNFINISHED TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL TO NHANVIEN  
GRANT EXEC ON GET_LICHKHAM_DETAIL_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_REGISTRED TO NHANVIEN  
GRANT EXEC ON GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI TO NHANVIEN  
GRANT EXEC ON GET_CHITIETPHIENKHAM_DETAIL TO NHANVIEN  
GRANT EXEC ON GET_DICHVUCHIDINH_DETAIL TO NHANVIEN  
GRANT EXEC ON GET_TOATHUOC_DETAIL TO NHANVIEN  
GRANT EXEC ON REGISTER_LICHKHAM TO NHANVIEN  
GRANT EXEC ON INSERT_INTO_LICHLAMVIEC TO NHANVIEN  
GRANT EXEC ON INSERT_INTO_BENHNHAN TO NHANVIEN  
GRANT EXEC ON CHANGE_LICHKHAM TO NHANVIEN  

GRANT EXEC ON GET_INFO_NHANVIEN TO QUANTRI 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_NAME TO QUANTRI 
GRANT EXEC ON GET_INFO_NHANVIEN_BY_ID TO QUANTRI  
GRANT EXEC ON GET_INFO_NHASI TO QUANTRI 
GRANT EXEC ON GET_INFO_NHASI_BY_ID TO QUANTRI
GRANT EXEC ON GET_INFO_NHASI_BY_NAME TO QUANTRI 
GRANT EXEC ON GET_INFO_NHASI_BY_PHONENUMBER TO QUANTRI
GRANT EXEC ON GET_INFO_BENHNHAN TO QUANTRI  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_ID TO QUANTRI  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_NAME TO QUANTRI  
GRANT EXEC ON GET_INFO_BENHNHAN_BY_PHONENUMBER TO QUANTRI  
GRANT EXEC ON GET_INFO_THUOC TO QUANTRI  
GRANT EXEC ON GET_INFO_THUOC_BY_ID TO QUANTRI  
GRANT EXEC ON GET_INFO_THUOC_BY_NAME TO QUANTRI  
GRANT EXEC ON GET_INFO_DICHVU TO QUANTRI  
GRANT EXEC ON GET_INFO_DICHVU_BY_NAME TO QUANTRI  
GRANT EXEC ON GET_CHITIETPHIENKHAM_DETAIL TO QUANTRI  
GRANT EXEC ON GET_DICHVUCHIDINH_DETAIL TO QUANTRI  
GRANT EXEC ON GET_TOATHUOC_DETAIL TO QUANTRI  
GRANT EXEC ON INSERT_INTO_NHASI TO QUANTRI  
GRANT EXEC ON INSERT_INTO_BENHNHAN TO QUANTRI  
GRANT EXEC ON INSERT_INTO_NHANVIEN TO QUANTRI  
GRANT EXEC ON INSERT_INTO_QUANTRI TO QUANTRI  
GRANT EXEC ON INSERT_INTO_DICHVU TO QUANTRI  
GRANT EXEC ON INSERT_INTO_THUOC TO QUANTRI  
GRANT EXEC ON INSERT_INTO_DICHVU TO QUANTRI  
GRANT EXEC ON DROP_THUOC TO QUANTRI  
GRANT EXEC ON DROP_THUOC_EXPIRED TO QUANTRI  
GRANT EXEC ON DROP_DICHVU TO QUANTRI  
GRANT EXEC ON UPDATE_INFO_THUOC TO QUANTRI  
GRANT EXEC ON BLOCK_ACCOUNT_BENHNHAN TO QUANTRI  
GRANT EXEC ON BLOCK_ACCOUNT_NHASI TO QUANTRI  
GRANT EXEC ON BLOCK_ACCOUNT_NHANVIEN TO QUANTRI  

--Nhap lieu
GO
EXEC INSERT_INTO_THUOC 'Paracetamol', 'Viên', N'Sưng đỏ, đau răng', 100, '2024-12-31', 1500
EXEC INSERT_INTO_THUOC 'Amoxicillin', 'Viên', N'Nhiễm trùng hô hấp', 50, '2024-11-30', 3000
EXEC INSERT_INTO_THUOC 'Ibuprofen', 'Viên', N'Đau bên ngoài', 75, '2024-12-15', 2500
EXEC INSERT_INTO_THUOC 'Omeprazole', 'Viên', N'Viêm dạ dày', 30, '2024-11-30', 1200
EXEC INSERT_INTO_THUOC 'Aspirin', 'Viên', N'Giảm đau', 60, '2025-12-20', 1800
EXEC INSERT_INTO_THUOC 'Lisinopril', 'Viên', N'Hạ huyết áp', 45, '2026-11-30', 6000
EXEC INSERT_INTO_THUOC 'Simvastatin', 'Viên', N'Giảm cholesterol', 70, '2027-12-15', 5000
EXEC INSERT_INTO_THUOC 'Metformin', 'Viên', N'Điều trị đái tháo đường', 40, '2028-12-31', 12500
EXEC INSERT_INTO_THUOC 'Losartan', 'Viên', N'Hạ huyết áp', 55, '2025-11-30', 10900
EXEC INSERT_INTO_THUOC 'Atorvastatin', 'Viên', N'Giảm cholesterol', 80, '2026-12-15', 12250


EXEC INSERT_INTO_DICHVU N'Hàn răng', 150000
EXEC INSERT_INTO_DICHVU N'Lấy chảy', 80000
EXEC INSERT_INTO_DICHVU N'Tẩy trắng răng', 250000
EXEC INSERT_INTO_DICHVU N'Trám răng', 120000
EXEC INSERT_INTO_DICHVU N'Khám tổng quát', 100000
EXEC INSERT_INTO_DICHVU N'Lấy vôi răng', 150000
EXEC INSERT_INTO_DICHVU N'Nhổ răng', 100000

EXEC INSERT_INTO_QUANTRI N'Nguyễn An Hạ', '1980-05-11', '0123456789', 'e10adck1'
EXEC INSERT_INTO_QUANTRI N'Trần Thục Oanh', '1970-12-07','0987654321', '21232f29'
EXEC INSERT_INTO_QUANTRI N'Huỳnh Văn Lập', '1995-01-03','0369871234', '5f4dcc3b'
EXEC INSERT_INTO_QUANTRI N'Lê Thị Diễm', '1988-02-15', '0912345678', '098f6bcd'
EXEC INSERT_INTO_QUANTRI N'Phạm Văn Hải', '1996-01-15','0765432109', 'c4ca4238'

EXEC INSERT_INTO_NHANVIEN N'Nguyễn Văn Phúc', '1978-09-25', '0123456789', 'e10adce5'
EXEC INSERT_INTO_NHANVIEN N'Trần Thị Thu Hương', '1980-07-12', '0987654321', '21232fd4'
EXEC INSERT_INTO_NHANVIEN N'Huỳnh Minh Đức', '1973-12-15', '0369871234', '5f4dccc3'
EXEC INSERT_INTO_NHANVIEN N'Lê Thanh Tùng', '1989-03-27', '0912345678', '098f6bk3'
EXEC INSERT_INTO_NHANVIEN N'Phạm Ngọc Ánh', '1984-07-22', '0765432109', 'c4ca42f4'

EXEC INSERT_INTO_NHASI N'Nguyễn Văn Nha', '1979-02-17','0123456789', 'e10adcd2'
EXEC INSERT_INTO_NHASI N'Trần Thị Sĩ', '1993-02-15', '0987654321', '21232fb1'
EXEC INSERT_INTO_NHASI N'Huỳnh Minh Nhật', '1979-08-21', '0369871234', '5f4dcca2'
EXEC INSERT_INTO_NHASI N'Lê Thanh Nhã', '1990-05-15', '0912345678', '098f6ba3'
EXEC INSERT_INTO_NHASI N'Phạm Ngọc Nhung', '1975-03-22', '0765432109', 'c4ca42'
EXEC INSERT_INTO_NHASI N'Vũ Văn Hải', '1965-05-01', '0123456780', 'e10adcef'
EXEC INSERT_INTO_NHASI N'Lê Thị Riêng', '1987-02-10', '0987654322', '21232fas'
EXEC INSERT_INTO_NHASI N'Trần Minh Trí', '1969-05-15', '0369871235', '5f4dcc3'
EXEC INSERT_INTO_NHASI N'Phạm Thanh Hoài', '1973-01-30', '0912345679', '098f6bcd'
EXEC INSERT_INTO_NHASI N'Huỳnh Ngọc Mẫn', '1990-03-17', '0765432101', 'c4ca4238'


EXEC INSERT_INTO_BENHNHAN  N'Nguyễn Văn Nhân', '0123456789', 'e10adc39', '1990-05-15', N'Hà Nội'
EXEC INSERT_INTO_BENHNHAN  N'Trần Thị Hoàn Mỹ','0987654321', '21232f29',  '1985-12-02', N'Tp.HCM'
EXEC INSERT_INTO_BENHNHAN  N'Huỳnh Minh Quốc', '0369871234', '5f4dcc3b', '1998-07-20', N'Đà Nẵng'
EXEC INSERT_INTO_BENHNHAN  N'Lê Thanh Hòa', '0912345678', '098f6bcd', '1980-03-10', N'Hải Phòng'
EXEC INSERT_INTO_BENHNHAN  N'Phạm Ngọc Thảo', '0765432109', 'c4ca4238', '1995-09-28', N'Cần Thơ'
EXEC INSERT_INTO_BENHNHAN  N'Vũ Văn Hùng', '0123456780', 'e10adc39', '1993-08-22', N'Hà Tĩnh'
EXEC INSERT_INTO_BENHNHAN  N'Lê Thị Tâm', '0987654322', '21232f29', '2000-04-18', N'Quảng Ngãi'
EXEC INSERT_INTO_BENHNHAN  N'Nguyễn Đình Cường', '0369871235', '5f4dcc3b', '1992-11-05', N'Bắc Ninh'
EXEC INSERT_INTO_BENHNHAN  N'Trần Thị Hoàng Yến', '0912345679', '098f6bcd', '1997-03-14', N'Huế'
EXEC INSERT_INTO_BENHNHAN  N'Phạm Văn Quyết', '0765432101', 'c4ca4238', '1989-01-09', N'Thái Nguyên'
EXEC INSERT_INTO_BENHNHAN  N'Thái Phương Anh', '0921210189', NULL, '2000-11-09', N'Hà Nội'
EXEC INSERT_INTO_BENHNHAN  N'Thái Phương Ly', '0172392101', NULL, '2002-05-07', N'Hà Nội'

--NS
GO
DECLARE @MANS_1 CHAR(16)
SELECT @MANS_1 = MANS FROM NHASI WHERE HOTEN = N'Nguyễn Văn Nha'

DECLARE @MANS_2 CHAR(16)
SELECT @MANS_2 = MANS FROM NHASI WHERE HOTEN = N'Trần Thị Sĩ'

DECLARE @MANS_3 CHAR(16)
SELECT @MANS_3 = MANS FROM NHASI WHERE HOTEN = N'Huỳnh Ngọc Mẫn'

DECLARE @MANS_4 CHAR(16)
SELECT @MANS_4 = MANS FROM NHASI WHERE HOTEN = N'Vũ Văn Hải'

DECLARE @MANS_5 CHAR(16)
SELECT @MANS_5 = MANS FROM NHASI WHERE HOTEN = N'Lê Thanh Nhã'

--BN
DECLARE @MABN_1 CHAR(16)
SELECT @MABN_1 = MABN FROM BENHNHAN WHERE HOTEN = N'Phạm Văn Quyết'

DECLARE @MABN_2 CHAR(16)
SELECT @MABN_2 = MABN FROM BENHNHAN WHERE HOTEN = N'Nguyễn Đình Cường'

DECLARE @MABN_3 CHAR(16)
SELECT @MABN_3 = MABN FROM BENHNHAN WHERE HOTEN = N'Nguyễn Văn Nhân'

DECLARE @MABN_4 CHAR(16)
SELECT @MABN_4 = MABN FROM BENHNHAN WHERE HOTEN = N'Trần Thị Hoàng Yến'

DECLARE @MABN_5 CHAR(16)
SELECT @MABN_5 = MABN FROM BENHNHAN WHERE HOTEN = N'Lê Thanh Hòa'

EXEC INSERT_INTO_LICHLAMVIEC @MANS_1, '2023-11-07', '08:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_1, '2023-11-08', '09:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_1, '2023-11-09', '14:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_1, '2023-11-20', '14:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_2, '2023-11-09', '08:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_2, '2023-11-09', '09:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_2, '2023-11-16', '09:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_3, '2023-11-07', '10:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_3, '2023-11-08', '07:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_4, '2023-11-09', '15:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_4, '2023-11-09', '16:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_4, '2023-11-12', '15:30:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_5, '2023-11-09', '07:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_5, '2023-11-09', '15:00:00'
EXEC INSERT_INTO_LICHLAMVIEC @MANS_5, '2023-11-15', '15:00:00'

EXEC REGISTER_LICHKHAM N'Phạm Văn Quyết', '0765432101', '1989-01-09', N'Thái Nguyên', @MANS_1, '2023-11-07', '08:00:00'
EXEC REGISTER_LICHKHAM N'Nguyễn Đình Cường', '0369871235', '1992-11-05', N'Bắc Ninh', @MANS_1, '2023-11-08', '09:30:00'
EXEC REGISTER_LICHKHAM N'Nguyễn Văn Nhân', '0123456789', '1990-05-15', N'Hà Nội', @MANS_3, '2023-11-08', '07:30:00'
EXEC REGISTER_LICHKHAM N'Trần Thị Hoàng Yến', '0912345679', '1997-03-14', N'Huế', @MANS_3, '2023-11-07', '10:00:00'
EXEC REGISTER_LICHKHAM N'Lê Thanh Hòa', '0912345678', '1980-03-10', N'Hải Phòng', @MANS_4, '2023-11-09', '15:30:00'
EXEC REGISTER_LICHKHAM N'Thái Phương Ly', '0172392101', '2002-05-07', N'Hà Nội', @MANS_5, '2023-11-09', '15:00:00'
EXEC REGISTER_LICHKHAM N'Thái Phương Ly', '0172392101', '2002-05-07', N'Hà Nội', @MANS_1, '2023-11-20', '14:30:00'
EXEC REGISTER_LICHKHAM N'Phạm Văn Quyết', '0765432101', '1989-01-09', N'Thái Nguyên', @MANS_1, '2023-11-09', '14:00:00'

EXEC INSERT_INTO_CHITIETPHIENKHAM @MABN_1, @MANS_1, '2023-11-07', '08:00:00', N'Viêm họng', N'Sốt cao'
EXEC INSERT_INTO_CHITIETPHIENKHAM @MABN_2, @MANS_1, '2023-11-08', '09:30:00', N'Cảm cúm', N'Đau họng, ho khan'
EXEC INSERT_INTO_CHITIETPHIENKHAM @MABN_3, @MANS_3, '2023-11-08', '07:30:00', N'Tiêu chảy', N'Buồn nôn, đau bụng'
EXEC INSERT_INTO_CHITIETPHIENKHAM @MABN_4, @MANS_3, '2023-11-07', '10:00:00', N'Viêm mũi', N'Sổ mũi, đau đầu'
EXEC INSERT_INTO_CHITIETPHIENKHAM @MABN_5, @MANS_4, '2023-11-09', '15:30:00', N'Trẻ sơ sinh', N'Khóc nhiều, không ngủ'

DECLARE @MACT_1 CHAR(14)
SELECT @MACT_1 = MACT FROM CHITIETPHIENKHAM WHERE MABN = @MABN_1 AND MANS = @MANS_1 AND NGAYKHAM = '2023-11-07' AND GIOKHAM = '08:00:00'

DECLARE @MACT_2 CHAR(14)
SELECT @MACT_2 = MACT FROM CHITIETPHIENKHAM WHERE MABN = @MABN_2 AND MANS = @MANS_1 AND NGAYKHAM = '2023-11-08' AND GIOKHAM = '09:30:00'

DECLARE @MACT_3 CHAR(14)
SELECT @MACT_3 = MACT FROM CHITIETPHIENKHAM WHERE MABN = @MABN_3 AND MANS = @MANS_3 AND NGAYKHAM = '2023-11-08' AND GIOKHAM = '07:30:00'

DECLARE @MACT_4 CHAR(14)
SELECT @MACT_4 = MACT FROM CHITIETPHIENKHAM WHERE MABN = @MABN_4 AND MANS = @MANS_3 AND NGAYKHAM = '2023-11-07' AND GIOKHAM = '10:00:00'

DECLARE @MACT_5 CHAR(14)
SELECT @MACT_5 = MACT FROM CHITIETPHIENKHAM WHERE MABN = @MABN_5 AND MANS = @MANS_4 AND NGAYKHAM = '2023-11-09' AND GIOKHAM = '15:30:00'


EXEC INSERT_INTO_DICHVUCHIDINH @MACT_1, N'Trám răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_1, N'Khám tổng quát'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_2, N'Tẩy trắng răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_2, N'Nhổ răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_3, N'Nhổ răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_4, N'Trám răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_5, N'Trám răng'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_5, N'Khám tổng quát'
EXEC INSERT_INTO_DICHVUCHIDINH @MACT_5, N'Tẩy trắng răng'

EXEC INSERT_INTO_TOATHUOC @MACT_1, 'Paracetamol', 10, N'Mỗi ngày 1 viên'
EXEC INSERT_INTO_TOATHUOC @MACT_1, 'Amoxicillin', 15, N'Sáng và tối mỗi ngày 1 viên'
EXEC INSERT_INTO_TOATHUOC @MACT_2, 'Ibuprofen', 30, N'Mỗi ngày 2 viên'
EXEC INSERT_INTO_TOATHUOC @MACT_2, 'Omeprazole', 20, N'Sáng 1 viên, tối 1 viên'
EXEC INSERT_INTO_TOATHUOC @MACT_3, 'Aspirin', 20, N'Mỗi ngày 1 viên'
EXEC INSERT_INTO_TOATHUOC @MACT_4, 'Lisinopril', 14, N'Sáng và tối mỗi ngày 1 viên'


-- DROP TABLE QUANTRI 
-- DROP TABLE NHANVIEN
-- DROP TABLE DICHVUCHIDINH
-- DROP TABLE DICHVU
-- DROP TABLE TOATHUOC
-- DROP TABLE THUOC
-- DROP TABLE CHITIETPHIENKHAM
-- DROP TABLE LICHKHAM
-- DROP TABLE LICHLAMVIEC
-- DROP TABLE NHASI
-- DROP TABLE BENHNHAN

-- DROP DATABASE QLPHONGKHAM