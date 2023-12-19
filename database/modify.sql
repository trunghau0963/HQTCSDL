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