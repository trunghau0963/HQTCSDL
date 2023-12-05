/*
lẤY THÔNG TIN TOÀN BỘ NHÂN VIÊN
    GET_INFO_NHANVIEN
LẤY THÔNG TIN NHÂN VIÊN BẰNG ID 
    GET_INFO_NHANVIEN_BY_ID @MANV CHAR(16)
LẤY THÔNG TIN NHÂN VIÊN BẰNG TÊN
    GET_INFO_NHANVIEN_BY_NAME @HOTEN NVARCHAR(64)
LẤY THÔNG TIN NHÂN VIÊN BẰNG SDT
    GET_INFO_NHANVIEN_BY_PHONENUMBER @DIENTHOAI CHAR(12)
LẤY THÔNG TIN TOÀN BỘ NHA SĨ
    GET_INFO_NHASI
LẤY THÔNG TIN NHA SĨ BẰNG ID
    GET_INFO_NHASI_BY_ID @MANS CHAR(16)
LẤY THÔNG TIN NHA SĨ BẰNG TÊN
    GET_INFO_NHASI_BY_NAME @HOTEN NVARCHAR(64)
LẤY THÔNG TIN NHA SĨ BẰNG SDT
    GET_INFO_NHASI_BY_PHONENUMBER @DIENTHOAI CHAR(12)
LẤY THÔNG TIN BỆNH NHÂN BẰNG ID
    GET_INFO_BENHNHAN_BY_ID @MABN CHAR(16)
LẤY THÔNG TIN BỆNH NHÂN BẰNG TÊN
    GET_INFO_BENHNHAN_BY_NAME @HOTEN NVARCHAR(64)
LẤY THÔNG TIN BỆNH NHÂN BẰNG SDT
    GET_INFO_BENHNHAN_BY_PHONENUMBER @DIENTHOAI CHAR(12)
LẤY THÔNG TIN THUỐC(TOÀN BỘ)
    GET_INFO_THUOC_ALL
LẤY THÔNG TIN THUỐC(CHƯA HẾT HẠN)
    GET_INFO_THUOC
LẤY THÔNG TIN THUỐC BẰNG ID (CHƯA HẾT HẠN)
    GET_INFO_THUOC_BY_ID @ID CHAR(10)
LẤY THÔNG TIN THUỐC BẰNG MÃ LÔ (CHƯA HẾT HẠN)
    GET_INFO_THUOC_BY_BATCH @MALO CHAR(12)
LẤY THÔNG TIN THUỐC BẰNG ID VÀ LÔ (CHƯA HẾT HẠN)
    GET_INFO_THUOC_BY_ID_AND_BATCH  @MALO CHAR(12), @MATHUOC CHAR(10)
LẤY THÔNG TIN THUỐC BẰNG NAME
    GET_INFO_THUOC_BY_NAME @TENTHUOC NVARCHAR(32)
LẤY THÔNG TIN DỊCH VỤ
    GET_INFO_DICHVU
LẤY THÔNG TIN DỊCH VỤ BẰNG ID
    GET_INFO_DICHVU_BY_ID @MADV CHAR(9)
LẤY THÔNG TIN DỊCH VỤ BẰNG NAME
    GET_INFO_DICHVU_BY_NAME @TENDV NVARCHAR(32)
LẤY THÔNG TIN LỊCH KHÁM
    GET_LICHKHAM_DETAIL
LẤY THÔNG TIN LỊCH KHÁM CỦA BỆNH NHÂN NÀO ĐÓ
    GET_LICHKHAM_DETAIL_FOR_BENHNHAN @MABN CHAR(16)
LẤY THÔNG TIN LỊCH KHÁM CỦA NHA SĨ NÀO ĐÓ
    GET_LICHKHAM_DETAIL_OF_NHASI @MANS CHAR(16)
LẤY THÔNG TIN LỊCH KHÁM ĐÃ HOÀN THÀNH
    GET_LICHKHAM_DETAIL_DONE
LẤY THÔNG TIN LỊCH KHÁM ĐÃ HOÀN THÀNH CỦA NHA SĨ NÀO ĐÓ
    GET_LICHKHAM_DETAIL_DONE_OF_NHASI @MANS CHAR(16)
LẤY THÔNG TIN LỊCH KHÁM CHƯA HOÀN THÀNH
    GET_LICHKHAM_DETAIL_UNFINISHED
LẤY THÔNG TIN LỊCH KHÁM CHƯA HOÀN THÀNH CỦA NHA SĨ NÀO ĐÓ
    GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI @MANS CHAR(16)
LẤY THÔNG TIN LỊCH LÀM VIÊC
    GET_LICHLAMVIEC_DETAIL
LẤY THÔNG TIN LỊCH LÀM VIÊC CỦA NHA SĨ NÀO ĐÓ
    GET_LICHLAMVIEC_DETAIL_OF_NHASI @MANS CHAR(16)
LẤY THÔNG TIN LỊCH LÀM VIÊC CÒN TRỐNG
    GET_LICHLAMVIEC_DETAIL_FREE
LẤY THÔNG TIN LỊCH LÀM VIÊC CÒN TRỐNG CỦA NHA SĨ NÀO ĐÓ
    GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI @MANS CHAR(16)
LẤY THÔNG TIN LỊCH LÀM VIÊC ĐÃ ĐƯƠC ĐĂNG KÍ
   GET_LICHLAMVIEC_DETAIL_REGISTRED
LẤY THÔNG TIN LỊCH LÀM VIÊC ĐÃ ĐƯƠC ĐĂNG KÍ CỦA NHA SĨ NÀO ĐÓ
   GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI @MANS CHAR(16)
LẤY CHI TIẾT HÓA ĐƠN CỦA AI ĐÓ
    GET_CHITIETPHIENKHAM_DETAIL @MABN CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME
LẤY CHI TIẾT TOÀN BỘ HÓA ĐƠN
    GET_CHITIETPHIENKHAM_DETAIL_ALL
LẤY CHI TIẾT TOA THUỐC CỦA HÓA ĐƠN NÀO ĐÓ
    GET_TOATHUOC_DETAIL @MACT CHAR(13)
LẤY CHI TIẾT TOÀN BỘ BẢNG TOA THUỐC
    GET_TOATHUOC
LẤY CHI TIẾT DỊCH VỤ CHỈ ĐỊNH CỦA HÓA ĐƠN NÀO ĐÓ
    GET_DICHVUCHIDINH_DETAIL @MACT CHAR(13)
LẤY CHI TIẾT TOÀN BỘ BẢNG DỊCH VỤ CHỈ ĐỊNH
    GET_DICHVUCHIDINH


THÊM NHA SĨ
    INSERT_INTO_NHASI @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
THÊM BỆNH NHÂN
    INSERT_INTO_BENHNHAN 
        @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), 
        @MATKHAU VARCHAR(32) = NULL,
        @NGAYSINH DATE, @DIACHI NVARCHAR(128) 
THÊM NHÂN VIÊN
    INSERT_INTO_NHANVIEN @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
THÊM QUẢN TRỊ
    INSERT_INTO_QUANTRI @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), @MATKHAU VARCHAR(32)
THÊM LỊCH KHÁM
    REGISTER_LICHKHAM
        @TEN NVARCHAR(64), @DIENTHOAI CHAR(12), 
        @NGAYSINH DATE, @DIACHI NVARCHAR(128),
        @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
THÊM LỊCH LÀM VIỆC
    INSERT_INTO_LICHLAMVIEC
        @MANS CHAR(16),
        @NGAYKHAM DATE, @GIOKHAM TIME
THÊM HÓA ĐƠN
    INSERT_INTO_CHITIETPHIENKHAM 
        @MABN CHAR(16),
        @MANS CHAR(16),
        @NGAYKHAM DATE, @GIOKHAM TIME,
        @CHANDOAN NVARCHAR(512), @TRIEUCHUNG NVARCHAR(512) 
THÊM THUỐC VÀO HÓA ĐƠN
    INSERT_INTO_TOATHUOC
        @MACT CHAR(13),
        @TENTHUOC NVARCHAR(32),
        @SOLUONG INT,
        @LIEULUONG NVARCHAR(32)
THÊM DỊCH VỤ CHỈ ĐỊNH VÀO HÓA ĐƠN
    INSERT_INTO_DICHVUCHIDINH
        @MACT CHAR(13),
        @TENDV NVARCHAR(64)
THÊM DỊCH VỤ VÀO DANH MỤC
    INSERT_INTO_DICHVU
        @TENDV NVARCHAR(64),
        @DONGIA INT
THÊM THUỐC VÀO DANH MỤC
    INSERT_INTO_THUOC
        @TENTHUOC NVARCHAR(32),
        @DONVI VARCHAR(10),
        @CHIDINH NVARCHAR(128),
        @SOLUONG INT,
        @NGAYHETHAN DATE,
        @DONGIA INT

XÓA BÊNH NHÂN
    REMOVE_BENHNHAN
        @MABN CHAR(16)
XÓA DỊCH VỤ CHỈ ĐỊNH KHỎI HÓA ĐƠN
    DROP_DICHVUCHIDINH
        @MACT CHAR(13),
        @MADV CHAR(9)
XÓA THUỐC KHỎI HÓA ĐƠN
    DROP_THUOC_IN_TOATHUOC
        @MACT CHAR(13),
        @MATHUOC NVARCHAR(32),
        @MALO CHAR(12)
XÓA DỊCH VỤ KHỎI DANH MỤC
    DROP_DICHVU @MADV NVARCHAR(9)
XÓA THUỐC KHỎI DANH MỤC
    DROP_THUOC
        @MALO CHAR(12),
        @MATHUOC CHAR(10)
XÓA THUỐC HẾT HẠN KHỎI DANH MỤC
    DROP_THUOC_EXPIRED
        @MALO CHAR(12),
        @MATHUOC CHAR(10)
HỦY LỊCH KHÁM
    DROP_LICHKHAM
        @MANS CHAR(16), @NGAYKHAM DATE, @GIOKHAM TIME 
XÓA LỊCH LÀM VIỆC
    DROP_LICHLAMVIEC 
        @MANS CHAR(16),
        @NGAYKHAM DATE, @GIOKHAM TIME 


ĐỔI THÔNG TIN BỆNH NHÂN
    UPDATE_INFO_BENHNHAN
        @MABN CHAR(16),
        @MATKHAU VARCHAR(32),
        @HOTEN NVARCHAR(64),
        @NGAYSINH DATE,
        @DIACHI NVARCHAR(128)
ĐỔI LỊCH KHÁM
    CHANGE_LICHKHAM
        @SODIENTHOAI CHAR(12),
        @MANS_OLD CHAR(16), @NGAYKHAM_OLD DATE, @GIOKHAM_OLD TIME, 
        @MANS_NEW CHAR(16), @NGAYKHAM_NEW DATE, @GIOKHAM_NEW TIME

ĐỔI LỊCH LÀM VIỆC
    CHANGE_LICHLAMVIEC
        @SODIENTHOAI CHAR(12),
        @NGAYKHAM_OLD DATE, @GIOKHAM_OLD TIME, 
        @NGAYKHAM_NEW DATE, @GIOKHAM_NEW TIME

ĐỔI THÔNG TIN THUỐC
    UPDATE_INFO_THUOC
        @MALO CHAR(12),
        @MATHUOC CHAR(10),
        @TENTHUOC NVARCHAR(32),
        @DONVI VARCHAR(10),
        @CHIDINH NVARCHAR(128),
        @SOLUONG INT,
        @NGAYHETHAN DATE,
        @DONGIA INT

ĐỔI THÔNG TIN DỊCH VỤ
    UPDATE_INFO_DICHVU
        @MADV CHAR(9),
        @TENDV NVARCHAR(64),
        @DONGIA INT

ĐĂNG NHẬP
    SIGIN
    @DIENTHOAI CHAR(10),
    @MATKHAU VARCHAR(32)

KHÓA BỆNH NHÂN
    BLOCK_ACCOUNT_BENHNHAN @MABN CHAR(16)
KHÓA NHA SĨ
    BLOCK_ACCOUNT_NHASI @MANS CHAR(16)
KHÓA NHÂN VIÊN
    BLOCK_ACCOUNT_NHANVIEN @MANV CHAR(16)
*/
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
CREATE OR ALTER PROC GET_INFO_THUOC_ALL
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
        WHERE DAXOA = 0
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
        WHERE T.MALO = @MALO AND DAXOA = 0
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
        WHERE T.MATHUOC = @MATHUOC AND T.MALO = @MALO AND DAXOA = 0
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
        WHERE T.TENTHUOC = @TENTHUOC AND DAXOA = 0
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
        SELECT * FROM BENHNHAN WHERE DIENTHOAI = @DIENTHOAI
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

        SELECT @MALO = MALO FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @SOLUONG <= SOLUONG AND DAKHOA = 0
        SELECT @MATHUOC = MATHUOC FROM THUOC WHERE @TENTHUOC = TENTHUOC AND @MALO = MALO AND DAKHOA = 0
        
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

        UPDATE THUOC
        SET DAXOA = 1
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
    @MATKHAU VARCHAR(32),
    @ROLE VARCHAR(16)
AS
BEGIN TRAN
    DECLARE @MSG NVARCHAR(128)
    BEGIN TRY
		IF @DIENTHOAI IS NULL OR @MATKHAU IS NULL OR @role IS NULL
		BEGIN;
			throw 51000, N'PHONE, ĐIỆN THOẠI, ROLE KHÔNG ĐƯỢC ĐỂ TRỐNG.', 1
		END

		IF @ROLE = 'patient'
		BEGIN
			SET @ROLE = 'BENHNHAN'
		END

		IF @ROLE = 'admin'
		BEGIN
			SET @ROLE = 'QUANTRI'
		END


		IF @ROLE = 'dentist'
		BEGIN
			SET @ROLE = 'NHASI'
		END

		IF @ROLE = 'staff'
		BEGIN
			SET @ROLE = 'NHANVIEN'
		END

        DECLARE @SQL NVARCHAR(128), @ISLOCKED BIT

        SET @SQL = '
            SELECT @ISLOCKED = DAKHOA from ' + quotename(@role) + '
            where DIENTHOAI = @DIENTHOAI AND MATKHAU = @MATKHAU
        '
        EXEC sp_executesql @SQL,
            N'@DIENTHOAI char(10), @MATKHAU nvarchar(64), @isLocked bit output',
            @DIENTHOAI = @DIENTHOAI, @MATKHAU = @MATKHAU, @ISLOCKED = @ISLOCKED output

        IF @ISLOCKED = 1
        BEGIN;
            throw 51000, 'This account is currently locked.', 1
        END

		SET @sql = '
			SELECT * FROM ' + quotename(@role) + '
			WHERE DIENTHOAI = @DIENTHOAI AND MATKHAU = @MATKHAU
		'
		exec sp_executesql @sql,
			N'@DIENTHOAI nchar(10), @MATKHAU nvarchar(64)',
			@DIENTHOAI = @DIENTHOAI, @MATKHAU = @MATKHAU

	end try
    BEGIN CATCH
        RAISERROR (N'ĐĂNG NHẬP THẤT BẠI', 16, 1);
    END CATCH
COMMIT TRAN