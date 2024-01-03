--Phantom 01
--tran01
go 
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_FREE_BY_DATE @NGAYKHAM DATE
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHLAMVIEC LLV WITH (HOLDLOCK) WHERE LLV.NGAYKHAM = @NGAYKHAM and 
            NOT EXISTS(
                SELECT * 
                FROM LICHKHAM LK
                WITH (HOLDLOCK)
                WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
            AND NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM CT WHERE CT.MANS = LLV.MANS AND CT.GIOKHAM = LLV.GIOKHAM AND CT.NGAYKHAM = LLV.NGAYKHAM) 
            )
        
            BEGIN
                SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
                FROM LICHLAMVIEC LLV
                JOIN NHASI NS ON NS.MANS = LLV.MANS
                WHERE LLV.NGAYKHAM = @NGAYKHAM AND NOT EXISTS(
                    SELECT * 
                    FROM LICHKHAM LK
                    WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                            AND LK.NGAYKHAM = LLV.NGAYKHAM)
                ORDER BY NS.HOTEN
            END

        ELSE
            WAITFOR DELAY '00:00:05'
            BEGIN
                SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
                FROM LICHLAMVIEC LLV
                JOIN NHASI NS ON NS.MANS = LLV.MANS
                WHERE LLV.NGAYKHAM = @NGAYKHAM 
                    AND NOT EXISTS(
                        SELECT * 
                        FROM LICHKHAM LK
                        WITH (HOLDLOCK)
                        WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                                AND LK.NGAYKHAM = LLV.NGAYKHAM)
                    AND NOT EXISTS(
                            SELECT * 
                            FROM CHITIETPHIENKHAM CT 
                            WHERE CT.MANS = LLV.MANS AND CT.GIOKHAM = LLV.GIOKHAM 
                                AND CT.NGAYKHAM = LLV.NGAYKHAM)
                ORDER BY NS.HOTEN
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

--tran02
GO
CREATE OR ALTER PROC REGISTER_LICHKHAM
    @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), 
    @NGAYSINH DATE, @DIACHI NVARCHAR(128),
    @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
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

        DECLARE @MABN CHAR(16)
        SELECT @MABN = MABN FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI

        INSERT INTO LICHKHAM(MANS, MABN, NGAYKHAM, GIOKHAM)
        VALUES (@MANS, @MABN, @NGAYKHAM, @GIOKHAM)

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

--phantom 02
--err 01
go 
CREATE OR ALTER PROC GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI_BY_NAME_AND_DATETIME @MANS CHAR(16), @NAME NVARCHAR(64), @SEARCH nvarchar(20)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM LICHKHAM LK WITH (HOLDLOCK) JOIN BENHNHAN BN ON BN.MABN = LK.MABN WHERE (BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @NAME + '%'
		OR (CONVERT(VARCHAR, LK.NGAYKHAM, 120) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%' 
			OR CONVERT(VARCHAR, LK.GIOKHAM, 108) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%')) AND NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND LK.MANS = @MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
            )
        )
            BEGIN
                SELECT LK.MANS, NS.HOTEN as HOTENNHASI, BN.DIENTHOAI, BN.HOTEN as HOTENBENHNHAN, BN.MABN, LK.NGAYKHAM, LK.GIOKHAM
                FROM LICHKHAM LK
                JOIN NHASI NS ON NS.MANS = LK.MANS
                JOIN BENHNHAN BN ON BN.MABN = LK.MABN
                WHERE  ((BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @NAME + '%')
                    OR (CONVERT(VARCHAR, LK.NGAYKHAM, 120) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%' 
                    OR CONVERT(VARCHAR, LK.GIOKHAM, 108) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%'))  AND LK.MANS = @MANS AND NOT EXISTS(
                    SELECT * FROM CHITIETPHIENKHAM HD 
                    WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                            )
                ORDER BY NS.MANS
            END
        ELSE
            BEGIN
                WAITFOR DELAY '00:00:05'
            
                SELECT LK.MANS, NS.HOTEN as HOTENNHASI, BN.DIENTHOAI, BN.HOTEN as HOTENBENHNHAN, BN.MABN, LK.NGAYKHAM, LK.GIOKHAM
                FROM LICHKHAM LK
                JOIN NHASI NS ON NS.MANS = LK.MANS
                JOIN BENHNHAN BN ON BN.MABN = LK.MABN
                WHERE  ((BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @NAME + '%')
                    OR (CONVERT(VARCHAR, LK.NGAYKHAM, 120) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%' 
                    OR CONVERT(VARCHAR, LK.GIOKHAM, 108) COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @SEARCH + '%'))  AND LK.MANS = @MANS AND NOT EXISTS(
                    SELECT * FROM CHITIETPHIENKHAM HD 
                    WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                            )
                ORDER BY NS.MANS
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

--ERR02
GO
CREATE OR ALTER PROC DROP_LICHKHAM
    @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
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

--Phantom 03
--TRAN01
GO
CREATE OR ALTER PROC INSERT_INTO_TOATHUOC
    @MACT CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1)
        END;

        DECLARE @MALO CHAR(12);
        DECLARE @MATHUOC CHAR(10);

        SELECT @MALO = MALO FROM THUOC WITH (XLOCK) WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG AND DAXOA = 0;
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO AND DAXOA = 0;

        IF @MALO IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'KHÔNG TÌM THẤY THUỐC HOẶC KHO KHÔNG ĐỦ SỐ LƯỢNG', 16, 1);
        END

        WAITFOR delay '00:00:05'
        
        IF EXISTS(SELECT 1 FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC AND @TENTHUOC = TENTHUOC) AND (SELECT DAXOA FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC) = 0
        BEGIN
            INSERT INTO TOATHUOC(MACT, MALO, MATHUOC, SOLUONG, LIEULUONG)
            VALUES (@MACT, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
        END

        EXEC GET_TOATHUOC_DETAIL @MACT
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


--trans02
go
CREATE OR ALTER PROC DROP_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
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
        SET DAXOA = 1
        WHERE MALO = @MALO AND MATHUOC = @MATHUOC

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

--Phantom 04
--TRAN01
GO
CREATE OR ALTER PROC INSERT_INTO_DICHVUCHIDINH
    @MACT CHAR(13),
    @TENDV NVARCHAR(64)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM CHITIETPHIENKHAM WHERE MACT = @MACT)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY HÓA ĐƠN CÓ MÃ ' + CONVERT(NVARCHAR, @MACT, 64)
            RAISERROR(@MSG, 16, 1)
        END

        DECLARE @MADV CHAR(9)
        SELECT @MADV = MADV FROM DICHVU WITH (XLOCK) WHERE @TENDV = TENDV AND DAXOA = 0

        IF NOT EXISTS(SELECT * FROM DICHVU WHERE @MADV = MADV)
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY DỊCH VỤ HOẶC DỊCH VỤ ĐÃ BỊ XÓA'
            RAISERROR(@MSG, 16, 1)
        END
        
        IF @MADV IS NULL
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        WAITFOR DELAY '00:00:05'

        IF EXISTS(SELECT 1 FROM DICHVU WHERE @TENDV = TENDV AND @MADV = MADV AND DAXOA = 0)
        BEGIN
            INSERT INTO DICHVUCHIDINH(MACT, MADV)
            VALUES (@MACT, @MADV) 
        END 

        exec GET_DICHVUCHIDINH_DETAIL @MACT
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

--TRAN02
GO
CREATE OR ALTER PROC DROP_DICHVU
    @MADV CHAR(9)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU WHERE MADV = @MADV) 
        BEGIN
            ROLLBACK
            SET @MSG = 'KHÔNG TÌM THẤY DỊCH VỤ CÓ MÃ ' + CONVERT(NVARCHAR, @MADV, 64)
            RAISERROR(@MSG, 16, 1)  
        END 

        UPDATE DICHVU 
        SET DAXOA = 1
        WHERE @MADV = MADV
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


--Unrepeatable 01
--tran01
GO
CREATE OR ALTER PROC INSERT_INTO_TOATHUOC
    @MACT CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
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

        SELECT @MALO = MALO FROM THUOC WITH(XLOCK) WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG AND DAXOA = 0
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO AND DAXOA = 0

        IF @MALO IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'KHÔNG TÌM THẤY THUỐC HOẶC KHO KHÔNG ĐỦ SỐ LƯỢNG', 16, 1);
        END

        WAITFOR DELAY '00:00:05'

        IF EXISTS(SELECT 1 FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC AND @TENTHUOC = TENTHUOC) AND (SELECT DAXOA FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC) = 0
        BEGIN
            INSERT INTO TOATHUOC(MACT, MALO, MATHUOC, SOLUONG, LIEULUONG)
            VALUES (@MACT, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
        END

        EXEC GET_TOATHUOC_DETAIL @MACT
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

--tran02
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
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
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

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC

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

--Unrepeatable 02
--trans 1
GO
CREATE OR ALTER PROC GET_INFO_DICHVU_BY_NAME_CHARACTER @TENDV NVARCHAR(32)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM DICHVU DV WITH(HOLDLOCK) WHERE DV.TENDV COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENDV + '%' AND DAXOA = 0)
        BEGIN
            
            SELECT *
            FROM DICHVU DV
            WHERE DV.TENDV COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENDV + '%'  AND DAXOA = 0
            ORDER BY TENDV
        END

        ELSE
            BEGIN
                WAITFOR DELAY '00:00:05'
                SELECT *
                FROM DICHVU DV
                WHERE DV.TENDV COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENDV + '%'  AND DAXOA = 0
                ORDER BY TENDV
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

--trans02
go
CREATE OR ALTER PROC UPDATE_INFO_DICHVU
    @MADV CHAR(9),
    @TENDV NVARCHAR(64),
    @DONGIA INT
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MADV IS NULL OR @TENDV IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM DICHVU WHERE @MADV = MADV AND DAXOA = 0)
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

--Unrepeatable 03
--trans 1
GO
CREATE OR ALTER PROC GET_INFO_THUOC_BY_NAME_CHARACTER @TENTHUOC NVARCHAR(32)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM THUOC T with(HOLDLOCK) WHERE T.TENTHUOC COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENTHUOC + '%' AND DAXOA = 0)
        BEGIN
        	    SELECT *
                FROM THUOC T
                WHERE T.TENTHUOC COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENTHUOC + '%' AND DAXOA = 0
                ORDER BY TENTHUOC
        END
        ELSE
            BEGIN
                WAITFOR DELAY '00:00:05'
                SELECT *
                FROM THUOC T
                WHERE T.TENTHUOC COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @TENTHUOC + '%' AND DAXOA = 0
                ORDER BY TENTHUOC
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

--trans 2
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
    SET TRANSACTION ISOLATION LEVEL REPEATABLE READ
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        UPDATE THUOC
        SET TENTHUOC = CASE WHEN @TENTHUOC IS NULL THEN TENTHUOC ELSE @TENTHUOC END, 
            DONVI = CASE WHEN @DONVI IS NULL THEN DONVI ELSE @DONVI END, 
            SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE @SOLUONG END,
            NGAYHETHAN = CASE WHEN @NGAYHETHAN IS NULL THEN NGAYHETHAN ELSE @NGAYHETHAN END, 
            DONGIA = CASE WHEN @DONGIA IS NULL THEN DONGIA ELSE @DONGIA END
        WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC

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

EXEC GET_INFO_THUOC_BY_NAME 'Amoxicil'

EXEC GET_INFO_THUOC_ALL

--Unrepeatable 04
--trans 1
go
CREATE OR ALTER PROC UPDATE_INFO_BENHNHAN
    @MABN CHAR(16),
    @MATKHAU VARCHAR(32),
    @HOTEN NVARCHAR(64),
    @NGAYSINH DATE,
    @DIACHI NVARCHAR(128)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
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
            MATKHAU = CASE WHEN @MATKHAU IS NULL or len(@MATKHAU) < 6 THEN MATKHAU ELSE @MATKHAU END
        WHERE MABN = @MABN

        exec GET_INFO_BENHNHAN_BY_ID @MABN

    END TRY
    BEGIN CATCH
        ROLLBACK TRAN
        THROW
    END CATCH
COMMIT TRAN

GO
CREATE OR ALTER PROC GET_INFO_BENHNHAN_BY_NAME_CHARACTER @HOTEN NVARCHAR(64)
As
BEGIN TRAN 
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        IF NOT EXISTS(SELECT * FROM BENHNHAN BN WITH(HOLDLOCK) WHERE BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @HOTEN + '%')
        BEGIN
            SELECT *
            FROM BENHNHAN BN
            WHERE BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @HOTEN + '%'
            ORDER BY BN.HOTEN
        END
        ELSE
        BEGIN
            WAITFOR DELAY '00:00:05'
            SELECT *
            FROM BENHNHAN BN
            WHERE BN.HOTEN COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @HOTEN + '%'
            ORDER BY BN.HOTEN
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


--Lost update 01
--tran01
GO
CREATE OR ALTER PROC INSERT_INTO_TOATHUOC
    @MACT CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
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

        SELECT @MALO = MALO FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG AND DAXOA = 0
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO AND DAXOA = 0

        IF @MALO IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'KHÔNG TÌM THẤY THUỐC HOẶC KHO KHÔNG ĐỦ SỐ LƯỢNG', 16, 1);
        END
        
        IF (SELECT DAXOA FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC) = 0
        BEGIN
            INSERT INTO TOATHUOC(MACT, MALO, MATHUOC, SOLUONG, LIEULUONG)
            VALUES (@MACT, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
        END

        EXEC GET_TOATHUOC_DETAIL @MACT
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

--tran02
go
CREATE OR ALTER PROC CHANGE_QUANTITY_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @SOLUONG INT,
    @ACTION CHAR(3)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC with(XLOCK) WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END
        

        WAITFOR DELAY '00:00:05'

        IF @ACTION = '+'
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG + @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
        ELSE
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG - @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
       
        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC
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

exec INSERT_INTO_TOATHUOC 'AA8630F6-698E', 'Amoxicillin', 20,'a'

--Lost update 02
--tran01
GO
CREATE OR ALTER PROC INSERT_INTO_TOATHUOC
    @MACT CHAR(13),
    @TENTHUOC NVARCHAR(32),
    @SOLUONG INT,
    @LIEULUONG NVARCHAR(32)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
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

        SELECT @MALO = MALO FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG AND DAXOA = 0
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO AND DAXOA = 0

        IF @MALO IS NULL
        BEGIN
            ROLLBACK
            RAISERROR(N'KHÔNG TÌM THẤY THUỐC HOẶC KHO KHÔNG ĐỦ SỐ LƯỢNG', 16, 1);
        END
        
        IF (SELECT DAXOA FROM THUOC WHERE MALO = @MALO AND @MATHUOC = MATHUOC) = 0
        BEGIN
            INSERT INTO TOATHUOC(MACT, MALO, MATHUOC, SOLUONG, LIEULUONG)
            VALUES (@MACT, @MALO, @MATHUOC, @SOLUONG, @SOLUONG) 
        END

        EXEC GET_TOATHUOC_DETAIL @MACT
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

--tran02
go
CREATE OR ALTER PROC CHANGE_QUANTITY_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @SOLUONG INT,
    @ACTION CHAR(3)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WITH (XLOCK) WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        WAITFOR DELAY '00:00:05'

        IF @ACTION = '+'
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG + @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
        ELSE
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG - @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC
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

--Lost update 02
--tran01
GO
CREATE OR ALTER PROC DROP_THUOC_IN_TOATHUOC
    @MACT CHAR(13),
    @MATHUOC NVARCHAR(32),
    @MALO CHAR(12)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
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

--tran02
go
CREATE OR ALTER PROC CHANGE_QUANTITY_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @SOLUONG INT,
    @ACTION CHAR(3)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WITH (XLOCK) WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        WAITFOR DELAY '00:00:05'

        IF @ACTION = '+'
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG + @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
        ELSE
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG - @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC
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

--Phantom 03
--tran01
go
CREATE OR ALTER PROC CHANGE_QUANTITY_THUOC
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @SOLUONG INT,
    @ACTION CHAR(3)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WITH (XLOCK) WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        WAITFOR DELAY '00:00:05'

        IF @ACTION = '+'
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG + @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
        ELSE
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG - @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC
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

--tran02
go
CREATE OR ALTER PROC CHANGE_QUANTITY_THUOC_2
    @MALO CHAR(12),
    @MATHUOC CHAR(10),
    @SOLUONG INT,
    @ACTION CHAR(3)
AS
BEGIN TRAN
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    BEGIN TRY
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @MANS CHAR(16)
        
        IF  @MALO IS NULL OR @MATHUOC IS NULL 
        BEGIN
            RAISERROR ('INPUT KHÔNG ĐƯỢC ĐỂ NULL', 16, 1);
        END

        IF NOT EXISTS(SELECT * FROM THUOC WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0)
        BEGIN
            RAISERROR (N'KHÔNG TÌM THẤY THUỐC', 16, 1);
        END

        IF @ACTION = '+'
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG + @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END
        ELSE
            BEGIN
                UPDATE THUOC
                SET SOLUONG = CASE WHEN @SOLUONG IS NULL THEN SOLUONG ELSE SOLUONG - @SOLUONG END
                WHERE @MALO = MALO AND MATHUOC = @MATHUOC AND DAXOA = 0
            END

        EXEC GET_INFO_THUOC_BY_ID_AND_BATCH @MALO, @MATHUOC
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
