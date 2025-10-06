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
        
        SELECT LK.MANS, NS.HOTEN as HOTENNHASI, BN.DIENTHOAI, BN.HOTEN as HOTENBENHNHAN, BN.MABN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MANS AND EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
        ORDER BY NS.HOTEN
        
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
        
        SELECT LK.MANS, NS.HOTEN as HOTENNHASI, BN.DIENTHOAI, BN.HOTEN as HOTENBENHNHAN, BN.MABN, LK.NGAYKHAM, LK.GIOKHAM
        FROM LICHKHAM LK
        JOIN NHASI NS ON NS.MANS = LK.MANS
        JOIN BENHNHAN BN ON BN.MABN = LK.MABN
        WHERE LK.MANS = @MANS AND NOT EXISTS(
            SELECT * FROM CHITIETPHIENKHAM HD 
            WHERE HD.MANS = LK.MANS AND HD.NGAYKHAM = LK.NGAYKHAM AND LK.GIOKHAM = HD.GIOKHAM
                    )
        ORDER BY NS.MANS
                
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
CREATE OR ALTER PROC GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI @MANS CHAR(16)
AS
BEGIN TRAN
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @MSG NVARCHAR(64)
    BEGIN TRY
        SELECT LLV.MANS, NS.HOTEN, LLV.NGAYKHAM, LLV.GIOKHAM
        FROM LICHLAMVIEC LLV
        JOIN NHASI NS ON NS.MANS = LLV.MANS
        WHERE LLV.MANS = @MANS AND EXISTS(
            SELECT * 
            FROM LICHKHAM LK
            WHERE LK.MANS = LLV.MANS AND LK.GIOKHAM = LLV.GIOKHAM
                    AND LK.NGAYKHAM = LLV.NGAYKHAM)
        ORDER BY LLV.NGAYKHAM

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


--- loi 
--- exec INSERT_INTO_TOATHUOC 'D710E8CC-BA59', 'Amoxicillin', '1', '1'
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