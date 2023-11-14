
--FUNCTION
GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_ID @MABN CHAR(16)
As
BEGIN TRAN
    BEGIN TRY
        SELECT *
        FROM BENHNHAN BN
        WHERE BN.MABN = @MABN
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(64)
        SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN ' + CONVERT(NVARCHAR, @MABN, 16)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_NAME @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM BENHNHAN BN
        WHERE BN.HOTEN = @HOTEN
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(64)
        SET @MSG = N'KHÔNG TÌM THẤY BỆNH NHÂN ' + CONVERT(NVARCHAR, @HOTEN, 64)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_PHONENUMBER @DIENTHOAI CHAR(12)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM BENHNHAN BN
        WHERE BN.DIENTHOAI = @DIENTHOAI
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(64)
        SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ SỐ ĐIỆN THOẠI ' + CONVERT(NVARCHAR, @DIENTHOAI, 64)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_ID @MANS CHAR(16)
As
BEGIN TRAN
    BEGIN TRY
        SELECT *
        FROM NHASI NS
        WHERE NS.MANS = @MANS
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(128)
        SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ ' + CONVERT(NVARCHAR, @MANS, 16)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_NAME @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM NHASI NS
        WHERE NS.HOTEN = @HOTEN
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(64)
        SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ ' + CONVERT(NVARCHAR, @HOTEN, 64)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_NHASI_BY_PHONENUMBER @DIENTHOAI CHAR(12)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM NHASI NS
        WHERE NS.DIENTHOAI = @DIENTHOAI
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(64)
        SET @MSG = N'KHÔNG TÌM THẤY NHA SĨ CÓ SỐ ĐIỆN THOẠI ' + CONVERT(NVARCHAR, @DIENTHOAI, 64)
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_LIST_THUOC_BY_BATCH @MALO CHAR(12)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM THUOC T
        WHERE T.MALO = @MALO
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(128)
        SET @MSG = N'KHÔNG TÌM THẤY DANH SÁCH THUỐC PHÙ HỢP'
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_ID_AND_BATCH @MATHUOC CHAR(10), @MALO CHAR(12)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM THUOC T
        WHERE T.MATHUOC = @MATHUOC AND T.MALO = @MALO
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(128)
        SET @MSG = N'KHÔNG TÌM THẤY THUỐC'
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_TENTHUOC @TENTHUOC NVARCHAR(32)
As
BEGIN TRAN 
    BEGIN TRY
        SELECT *
        FROM THUOC T
        WHERE T.TENTHUOC = @TENTHUOC
    END TRY
    BEGIN CATCH
        DECLARE @MSG NVARCHAR(128)
        SET @MSG = N'KHÔNG TÌM THẤY THUỐC'
        RAISERROR(@MSG, 16, 1);
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC INSERT_INTO_NHASI @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF LEN(@TEN) = 0 OR LEN(@DIENTHOAI) = 0 OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        INSERT INTO NHASI(HOTEN, DIENTHOAI, MATKHAU, DAKHOA)
        VALUES (@TEN, @DIENTHOAI, @MATKHAU, 0)
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
CREATE OR ALTER PROC INSERT_INTO_NHANVIEN @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF LEN(@TEN) = 0 OR LEN(@DIENTHOAI) = 0 OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        INSERT INTO NHANVIEN(HOTEN, DIENTHOAI, MATKHAU, DAKHOA)
        VALUES (@TEN, @DIENTHOAI, @MATKHAU, 0)
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
CREATE OR ALTER PROC INSERT_INTO_QUANTRI @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        IF LEN(@TEN) = 0 OR LEN(@DIENTHOAI) = 0 OR LEN(@MATKHAU) < 6
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        INSERT INTO QUANTRI(HOTEN, DIENTHOAI, MATKHAU)
        VALUES (@TEN, @DIENTHOAI, @MATKHAU)
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
    @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), 
    @MATKHAU VARCHAR(32) = NULL,
    @NGAYSINH DATE, @DIACHI NVARCHAR(128) 
AS  
BEGIN TRAN
    BEGIN TRY
        IF  LEN(@TEN) = 0 OR LEN(@DIENTHOAI) = 0 
            OR (LEN(@MATKHAU) != 0 AND LEN(@MATKHAU) < 6) 
            OR LEN(@NGAYSINH) = 0 OR LEN(@DIACHI) = 0
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
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
CREATE OR ALTER PROC INSERT_INTO_LICHKHAM
    @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), 
    @NGAYSINH DATE, @DIACHI NVARCHAR(128),
    @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    BEGIN TRY
        IF  LEN(@TEN) = 0 OR LEN(@DIENTHOAI) = 0 
            OR LEN(@NGAYSINH) = 0 OR LEN(@DIACHI) = 0
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI)
        BEGIN
            EXEC INSERT_INTO_BENHNHAN @TEN, @DIENTHOAI, NULL, @NGAYSINH, @DIACHI
        END
        ELSE    
        BEGIN
            DECLARE @MABN CHAR(16)
            SELECT @MABN = MABN FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI

            INSERT INTO LICHKHAM(MANS, MABN, NGAYKHAM, GIOKHAM)
            VALUES (@MANS, @MABN, @NGAYKHAM, @GIOKHAM)
        END
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
CREATE OR ALTER PROC INSERT_INTO_LICHLAMVIEC 
    @MANS CHAR(16),
    @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    BEGIN TRY
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
CREATE OR ALTER PROC INSERT_INTO_HOADON 
    @MABN CHAR(16),
    @MANS CHAR(16),
    @NGAYKHAM DATE, @GIOKHAM TIME,
    @CHANDOAN NVARCHAR(128), @TRIEUCHUNG NVARCHAR(128) 
AS
BEGIN TRAN
    BEGIN TRY
        INSERT INTO HOADON(MABN, MANS, NGAYKHAM, GIOKHAM, CHANDOAN, TRIEUCHUNG)
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
    @MAHD CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @MALO CHAR(12)
        DECLARE @MATHUOC CHAR(10)

        SELECT @MALO = MALO FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO
        
        INSERT INTO TOATHUOC(MAHD, MALO, MATHUOC, SOLUONG, LIEULUONG)
        VALUES (@MAHD, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
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
    @MAHD CHAR(13),
    @TENDV NVARCHAR(64)
AS
BEGIN TRAN
    BEGIN TRY
        DECLARE @MADV CHAR(9)
        SELECT @MADV = MADV FROM DICHVU WHERE @TENDV = TENDV
        
        IF @MADV IS NULL
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        INSERT INTO DICHVUCHIDINH(MAHD, MADV)
        VALUES (@MAHD, @MADV) 
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
CREATE OR ALTER PROC CHANGE_LICHKHAM
    @NGAYKHAM_OLD DATE, @GIOKHAM_OLD TIME, 
    @NGAYKHAM_NEW DATE, @GIOKHAM_NEW TIME, 
    @MANS_OLD CHAR(16), @MANS_NEW CHAR(16)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        
        IF  @NGAYKHAM_OLD IS NULL OR @GIOKHAM_OLD IS NULL 
            OR @NGAYKHAM_NEW IS NULL OR @GIOKHAM_NEW IS NULL OR @MANS_OLD IS NULL
            OR @MANS_NEW IS NULL
        BEGIN
            RAISERROR ('Error raised in TRY block.', 16, 1);
        END

        IF EXISTS(SELECT * FROM HOADON WHERE NGAYKHAM = @NGAYKHAM_OLD AND MANS = @MANS_OLD AND GIOKHAM = @GIOKHAM_OLD)
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