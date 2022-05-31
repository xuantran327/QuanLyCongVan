-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 31, 2022 lúc 08:10 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlycongvan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cong_van`
--

CREATE TABLE `cong_van` (
  `id` int(10) UNSIGNED NOT NULL,
  `so_hieu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_lap` date DEFAULT NULL,
  `ngay_ky` date DEFAULT NULL,
  `ngay_hieu_luc` date DEFAULT NULL,
  `ngay_chuyen` date DEFAULT NULL,
  `trich_yeu_noi_dung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nguoi_ky` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_tep_dinh_kem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con_hieu_luc` tinyint(1) NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'thong-bao.jpg',
  `id_co_quan_ban_hanh` int(10) UNSIGNED NOT NULL,
  `id_hinh_thuc_van_ban` int(10) UNSIGNED NOT NULL,
  `id_linh_vuc` int(10) UNSIGNED NOT NULL,
  `id_loai_van_ban` int(10) UNSIGNED NOT NULL,
  `id_loai_hinh_cong_van` int(10) UNSIGNED NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cong_van`
--

INSERT INTO `cong_van` (`id`, `so_hieu`, `ngay_lap`, `ngay_ky`, `ngay_hieu_luc`, `ngay_chuyen`, `trich_yeu_noi_dung`, `nguoi_ky`, `ten_tep_dinh_kem`, `con_hieu_luc`, `thumbnail`, `id_co_quan_ban_hanh`, `id_hinh_thuc_van_ban`, `id_linh_vuc`, `id_loai_van_ban`, `id_loai_hinh_cong_van`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, '/TB-KT&ĐBCL', '2022-05-30', '2022-02-11', '2022-05-30', '2022-02-11', 'Tổ chức thi kết thúc học phần Vật lý và Nguyên lý hệ điều hành (Đối với Sinh viên đã Hoãn thi/Duyệt thi lại ở Học Kỳ II Năm học 2020-2021 - chưa nộp đơn xin dự thi)', 'ThS. Lê Hà Như Thảo', 'hyK_1. TB vv to chuc Thi học phan VL,Tieng Anh 1 và NLHĐH cho SV hoãn thi ở Học kỳ II Năm Học 2020-2021_CT.docx.pdf', 1, 'thong-bao.jpg', 1, 2, 1, 1, 1, 'to-chuc-thi-ket-thuc-hoc-phan-vat-ly-va-nguyen-ly-he-dieu-hanh-doi-voi-sinh-vien-da-hoan-thiduyet-thi-lai-o-hoc-ky-ii-nam-hoc-2020-2021-chua-nop-don-xin-du-thi', '2022-05-30 14:09:00', '2022-05-30 14:38:40'),
(2, '64/HD-KT&ĐBCL', '2022-05-30', '2021-11-26', '2022-05-30', '2021-11-26', 'Công tác thi và coi thi trực tuyến học kỳ 1, năm học 2021 - 2022', 'ThS. Lê Hà Như Thảo', 'JK1_3. HD64_To chuc thi online HK 1-21-22.pdf', 0, 'thong-bao.jpg', 2, 4, 1, 1, 1, 'cong-tac-thi-va-coi-thi-truc-tuyen-hoc-ky-1-nam-hoc-2021-2022', '2022-05-30 14:16:29', '2022-05-30 14:39:00'),
(3, '38/ĐHNN', '2022-05-30', '2022-01-07', '2022-05-30', '2022-01-07', 'Phúc khảo kết quả kỳ thi khảo sát năng lực chuẩn đầu ra ngoại ngữ cho sinh viên đợt thi ngày 26/12/2021', 'TS. Phạm Thị Tố Như', 'SrW_38 ĐHNN VV PHÚC KHẢO KẾT QUẢ KỲ THI KSNL CĐR NN CHO SV ĐỢT THI NGÀY 26.12.2021.pdf', 0, 'thong-bao.jpg', 1, 2, 1, 1, 2, 'phuc-khao-ket-qua-ky-thi-khao-sat-nang-luc-chuan-dau-ra-ngoai-ngu-cho-sinh-vien-dot-thi-ngay-26122021', '2022-05-30 14:28:59', '2022-05-30 14:39:12'),
(4, '04/TB-KT&ĐBCL', '2022-05-30', '2022-01-04', '2022-05-30', '2022-01-04', 'Đăng ký thi năng lực tiếng Anh đầu ra trình độ Cao đẳng dành cho sinh viên khóa 2019 – 2022 đợt bổ sung', 'ThS. Lê Hà Như Thảo', '0Gh_20220104_174546_tb-dang-ky-thi-tieng-anh-dau-ra.docx.pdf', 0, 'thong-bao.jpg', 1, 2, 1, 1, 1, 'dang-ky-thi-nang-luc-tieng-anh-dau-ra-trinh-do-cao-dang-danh-cho-sinh-vien-khoa-2019-2022-dot-bo-sung', '2022-05-30 14:31:59', '2022-05-30 14:39:27'),
(5, '67/TB-KT&ĐBCL', '2022-05-30', '2021-12-03', '2022-05-30', '2021-12-03', 'Đăng ký thi đánh giá chuẩn đầu ra tiếng Anh cho sinh viên tốt nghiệp năm 2021 theo hình thức trực tuyến (Đợt 2)', 'ThS. Lê Hà Như Thảo', 'd46_67-TB đăng ký thi TA CDR 2021.pdf', 0, 'thong-bao.jpg', 1, 2, 1, 1, 1, 'dang-ky-thi-danh-gia-chuan-dau-ra-tieng-anh-cho-sinh-vien-tot-nghiep-nam-2021-theo-hinh-thuc-truc-tuyen-dot-2', '2022-05-30 14:34:25', '2022-05-30 14:39:43'),
(6, '0003/2022/CV-VOA', NULL, '2022-01-04', NULL, '2022-01-11', 'Cử sinh viên tham gia chương trình hỗ trợ đào tạo đặc biệt \"Chương trình Quốc gia đào tạo, nâng cao và hoàn thiện kỹ năng cho sinh viên Việt Nam trong bối cảnh CMCN 4.0\"', 'Hoàng Ngọc Trung', 'QSU_1-đã chuyển đổi.pdf', 1, 'thong-bao.jpg', 4, 2, 1, 1, 2, 'cu-sinh-vien-tham-gia-chuong-trinh-ho-tro-dao-tao-dac-biet-chuong-trinh-quoc-gia-dao-tao-nang-cao-va-hoan-thien-ky-nang-cho-sinh-vien-viet-nam-trong-boi-canh-cmcn-40', '2022-05-30 14:44:13', '2022-05-30 14:44:13'),
(7, '1379/TB-ĐHVH', NULL, '2021-11-16', NULL, '2021-11-16', 'Đăng ký tham gia buổi giới thiệu học bổng của Tập đoàn Thép JFE, Nhật Bản', 'TS. Lê Thị Minh Đức', 'up5_jpg2pdf.pdf', 0, 'thong-bao.jpg', 2, 2, 1, 1, 1, 'dang-ky-tham-gia-buoi-gioi-thieu-hoc-bong-cua-tap-doan-thep-jfe-nhat-ban', '2022-05-30 14:52:48', '2022-05-30 14:52:48'),
(8, '40/TH-CTSV', NULL, '2021-05-12', NULL, '2021-05-12', 'Rà soát danh sách cử tri', 'ThS. Trần Thị Kim Oanh', 'NAa_z.pdf', 0, 'thong-bao.jpg', 5, 2, 2, 1, 1, 'ra-soat-danh-sach-cu-tri', '2022-05-30 14:58:23', '2022-05-30 14:58:23'),
(9, '32/TB-ĐT', NULL, '2022-05-15', NULL, '2022-02-15', 'Tổ chức xét và công nhận tốt nghiệp cho sinh viên trình độ đại học và cao đẳng - Đợt 1 năm 2022', 'ThS. Trần Thị Trà Vinh', 'meO_Thông báo xét công nhận tốt nghiệp _Đợt 1 năm 2022.pdf', 0, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'to-chuc-xet-va-cong-nhan-tot-nghiep-cho-sinh-vien-trinh-do-dai-hoc-va-cao-dang-dot-1-nam-2022', '2022-05-30 15:02:03', '2022-05-30 15:02:03'),
(10, '221/KH-ĐHVH', NULL, '2022-01-24', NULL, '2022-01-24', 'Tổ chức cho sinh viên toàn trường học tập trung sau Tết Nguyên Đán Nhâm Dần 2022', 'TS. Lê Thị Minh Đức', 'bAw_KH.VV TỔ CHỨC CHO SV TOÀN TRƯỜNG HỌC TẬP TRUNG_0001.pdf', 1, 'thong-bao.jpg', 2, 1, 1, 1, 1, 'to-chuc-cho-sinh-vien-toan-truong-hoc-tap-trung-sau-tet-nguyen-dan-nham-dan-2022', '2022-05-30 15:06:56', '2022-05-30 15:06:56'),
(11, '/TB-ĐT', NULL, '2022-01-14', NULL, '2022-01-14', 'Kế hoạch đánh giá Đồ án tốt nghiệp theo hình thức trực tuyến đối với sinh viên trình độ đại học ngành Công nghệ thông tin và ngành Công nghệ kỹ thuật máy tính (Đợt 1 - tháng 01 năm 2022)', 'TS. Huỳnh Ngọc Thọ', 'tHo_Thông báo đánh giá Đồ án tốt nghiệp.pdf', 0, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'ke-hoach-danh-gia-do-an-tot-nghiep-theo-hinh-thuc-truc-tuyen-doi-voi-sinh-vien-trinh-do-dai-hoc-nganh-cong-nghe-thong-tin-va-nganh-cong-nghe-ky-thuat-may-tinh-dot-1-thang-01-nam-2022', '2022-05-30 15:10:11', '2022-05-30 15:10:11'),
(12, '1489/TB-ĐHVH', NULL, '2021-12-15', NULL, '2021-12-15', 'Triển khai giảng dạy và học tập kỳ 2 năm học 2021-2022', 'TS. Trần Thế Sơn', 'KYV_Thong bao - giang dạy va hoc tap HK2 (21-22).pdf', 1, 'thong-bao.jpg', 2, 2, 1, 1, 1, 'trien-khai-giang-day-va-hoc-tap-ky-2-nam-hoc-2021-2022', '2022-05-30 15:14:09', '2022-05-30 15:14:09'),
(13, '79/TB-ĐT', NULL, '2021-12-06', NULL, '2021-12-06', 'Triển khai thực hiện Khoá luận tốt nghiệp ngành Quản trị kinh doanh khoá học 2018 học kỳ 2, năm học 2021-2022', 'TS. Huỳnh Ngọc Thọ', 'XwU_TB_Trien khai thuc hien Khoa luan TN_QTKD_0001.pdf', 1, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'trien-khai-thuc-hien-khoa-luan-tot-nghiep-nganh-quan-tri-kinh-doanh-khoa-hoc-2018-hoc-ky-2-nam-hoc-2021-2022', '2022-05-30 15:17:28', '2022-05-30 15:17:28'),
(14, '352/TB-ĐHVH', NULL, '2022-03-17', NULL, '2022-03-17', 'Triệu tập sinh viên tham gia các phiên tư vấn và tuyển dụng của các doanh nghiệp', 'TS. Trần Thế Sơn', 'nKQ_y.pdf', 0, 'thong-bao.jpg', 2, 2, 1, 1, 1, 'trieu-tap-sinh-vien-tham-gia-cac-phien-tu-van-va-tuyen-dung-cua-cac-doanh-nghiep', '2022-05-30 15:29:40', '2022-05-30 15:29:40'),
(15, '331/TB-ĐHVH', NULL, '2022-03-09', NULL, '2022-03-09', 'Cập nhật tình hình tiêm vắc-xin phòng, chống Covid-19 và tình trạng dịch tễ của sinh viên', 'TS. Trần Thế Sơn', 'iaD_x.pdf', 1, 'thong-bao.jpg', 2, 2, 3, 1, 1, 'cap-nhat-tinh-hinh-tiem-vac-xin-phong-chong-covid-19-va-tinh-trang-dich-te-cua-sinh-vien', '2022-05-30 15:34:27', '2022-05-30 15:34:27'),
(16, '93/TB-ĐT', NULL, '2022-04-13', NULL, '2022-04-13', 'Rà soát kết quả tốt nghiệp của sinh viên trình độ đại học và cao đẳng - Đợt 1 năm 2022', 'TS. Huỳnh Ngọc Thọ', 'EJM_TB rà soát tốt nghiệp_Đợt 1 2022.pdf', 0, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'ra-soat-ket-qua-tot-nghiep-cua-sinh-vien-trinh-do-dai-hoc-va-cao-dang-dot-1-nam-2022', '2022-05-30 15:37:35', '2022-05-30 15:37:35'),
(17, '/TB-PĐT', NULL, '2022-05-26', NULL, '2022-05-26', 'Kết quả đăng ký Chuyên ngành cho sinh viên Khóa 2021', 'TS. Huỳnh Ngọc Thọ', '7bA_Thông báo.pdf', 1, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'ket-qua-dang-ky-chuyen-nganh-cho-sinh-vien-khoa-2021', '2022-05-30 15:40:23', '2022-05-30 15:40:23'),
(18, '106/TB-ĐT', NULL, '2022-05-04', NULL, '2022-05-04', 'Triển khai Thực tập tốt nghiệp cho sinh viên khoá 2018 và Thực tập doanh nghiệp cho sinh viên khoá 2020 ngành Công nghệ thông tin, ngành Công nghệ kỹ thuật máy tính', 'TS. Huỳnh Ngọc Thọ', 'wt8_Thông báo thực tập.pdf', 1, 'thong-bao.jpg', 6, 2, 1, 1, 1, 'trien-khai-thuc-tap-tot-nghiep-cho-sinh-vien-khoa-2018-va-thuc-tap-doanh-nghiep-cho-sinh-vien-khoa-2020-nganh-cong-nghe-thong-tin-nganh-cong-nghe-ky-thuat-may-tinh', '2022-05-30 15:46:28', '2022-05-30 15:46:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `co_quan_ban_hanh`
--

CREATE TABLE `co_quan_ban_hanh` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `co_quan_ban_hanh`
--

INSERT INTO `co_quan_ban_hanh` (`id`, `name`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, 'Phòng khảo thí - Đảm bảo chất lượng giáo dục', 'phong-khao-thi-dam-bao-chat-luong-giao-duc', NULL, '2022-05-30 13:46:31'),
(2, 'Trường Đại học Công nghệ thông tin và Truyền thông Việt Hàn', 'truong-dai-hoc-cong-nghe-thong-tin-va-truyen-thong-viet-han', NULL, '2022-05-30 14:13:24'),
(3, 'Trường Đại học Ngoại ngữ - ĐHĐN', 'truong-dai-hoc-ngoai-ngu-dhdn', NULL, '2022-05-30 14:24:22'),
(4, 'Công ty cổ phần Học viện trực tuyến Việt Nam', 'cong-ty-co-phan-hoc-vien-truc-tuyen-viet-nam', NULL, '2022-05-30 14:37:16'),
(5, 'Phòng Công tác sinh viên', 'phong-cong-tac-sinh-vien', NULL, '2022-05-30 14:55:51'),
(6, 'Phòng Đào tạo', 'phong-dao-tao', NULL, '2022-05-30 14:59:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinh_thuc_van_ban`
--

CREATE TABLE `hinh_thuc_van_ban` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hinh_thuc_van_ban`
--

INSERT INTO `hinh_thuc_van_ban` (`id`, `name`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, 'Công văn điều hành', 'cong-van-dieu-hanh', NULL, '2022-05-30 13:53:31'),
(2, 'Thông báo', 'thong-bao', NULL, '2022-05-30 13:53:44'),
(3, 'Báo cáo', 'bao-cao', NULL, '2022-05-30 13:53:56'),
(4, 'Công văn hướng dẫn', 'cong-van-huong-dan', NULL, '2022-05-30 14:27:34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `linh_vuc`
--

CREATE TABLE `linh_vuc` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `linh_vuc`
--

INSERT INTO `linh_vuc` (`id`, `name`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, 'Giáo dục', 'giao-duc', NULL, '2022-05-30 13:43:56'),
(2, 'Chính trị', 'chinh-tri', '2022-05-30 13:44:15', '2022-05-30 14:56:49'),
(3, 'Y tế', 'y-te', '2022-05-30 15:32:23', '2022-05-30 15:32:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai_hinh_cong_van`
--

CREATE TABLE `loai_hinh_cong_van` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loai_hinh_cong_van`
--

INSERT INTO `loai_hinh_cong_van` (`id`, `name`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, 'Công văn nội bộ', 'loai-hinh-cong-van-1', NULL, NULL),
(2, 'Công văn đến', 'cong-van-den', NULL, '2022-05-30 13:47:28'),
(3, 'Công văn đi', 'cong-van-di', NULL, '2022-05-30 13:52:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai_van_ban`
--

CREATE TABLE `loai_van_ban` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loai_van_ban`
--

INSERT INTO `loai_van_ban` (`id`, `name`, `ten_khong_dau`, `created_at`, `updated_at`) VALUES
(1, 'Văn bản chỉ đạo điều hành', 'van-ban-chi-dao-dieu-hanh', NULL, '2022-05-30 13:54:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2022_04_17_174251_create_linh_vuc_table', 1),
(2, '2022_04_17_174840_create_loai_hinh_cong_van_table', 1),
(3, '2022_04_17_182158_create_co_quan_ban_hanh_table', 1),
(4, '2022_04_17_182235_create_hinh_thuc_van_ban_table', 1),
(5, '2022_04_17_182318_create_loai_van_ban_table', 1),
(6, '2022_04_17_185107_create_slide_table', 1),
(7, '2022_04_17_191614_create_role_table', 1),
(8, '2014_10_12_000000_create_users_table', 2),
(9, '2014_10_12_100000_create_password_resets_table', 2),
(10, '2019_08_19_000000_create_failed_jobs_table', 2),
(11, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(12, '2022_04_17_182437_create_cong_van_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'SuperAdmin', NULL, NULL),
(2, 'Admin', NULL, '2022-05-30 00:14:21'),
(3, 'Nhân viên', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slides`
--

CREATE TABLE `slides` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `slides`
--

INSERT INTO `slides` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'VKU Logo', 'Ffj_default.png', '2022-05-30 00:38:15', '2022-05-30 00:38:15'),
(2, 'Campus', 'IY9_hinh1.jpg', '2022-05-30 00:39:04', '2022-05-30 00:39:04'),
(3, 'Robocar', 'Qhk_1651118044-1650718142-1650717446_img_8361.jpg', '2022-05-30 00:40:42', '2022-05-30 00:40:42'),
(4, 'Ảnh 1', 'Wj1_1652498629-1652498215_img_0604.jpg', '2022-05-30 00:41:58', '2022-05-30 00:41:58'),
(5, 'GIT Program', 'VaE_1652923616-1652062771_2017-07-262.jpg', '2022-05-30 00:42:36', '2022-05-30 00:42:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `dob` date NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default-avatar.png',
  `role_id` int(10) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `gender`, `dob`, `phone_number`, `email`, `password`, `avatar_link`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Xuân Trần', 0, '2002-03-27', '0987654321', 'rapunzelxuantran@gmail.com', '$2y$10$aeanKgqMhZb5/KZAXeMt5uQx1BHbaEyOLMr7Ety9B05/LUnkjPAKG', 'default-avatar.png', 1, NULL, NULL, NULL),
(2, 'Xuân Trần', 0, '2002-03-27', '0987654321', 'ttxxuan.20it1@vku.udn.vn', '$2y$10$Q/mZjJzFBkcmMNtFyi.mteDHbWXv2SZ6UWkuCKU9u35VzBQ0UNjqG', 'PV3_1.jpg', 2, NULL, '2022-05-28 22:26:57', '2022-05-30 00:34:03'),
(3, 'Xuân Trần', 0, '2002-03-27', '0987654321', 'tranxuanxuan27@gmail.com', '$2y$10$wKODCQFGv3ge8OwXrkSblejiyKUIq5cUO4nfKgwmYGq3cQDi8oFWe', '86D_9c755b701989d6d78f98.jpg', 3, NULL, '2022-05-30 00:16:30', '2022-05-30 00:16:30');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cong_van`
--
ALTER TABLE `cong_van`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cong_van_id_co_quan_ban_hanh_foreign` (`id_co_quan_ban_hanh`),
  ADD KEY `cong_van_id_hinh_thuc_van_ban_foreign` (`id_hinh_thuc_van_ban`),
  ADD KEY `cong_van_id_linh_vuc_foreign` (`id_linh_vuc`),
  ADD KEY `cong_van_id_loai_van_ban_foreign` (`id_loai_van_ban`),
  ADD KEY `cong_van_id_loai_hinh_cong_van_foreign` (`id_loai_hinh_cong_van`);

--
-- Chỉ mục cho bảng `co_quan_ban_hanh`
--
ALTER TABLE `co_quan_ban_hanh`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `co_quan_ban_hanh_name_unique` (`name`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `hinh_thuc_van_ban`
--
ALTER TABLE `hinh_thuc_van_ban`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hinh_thuc_van_ban_name_unique` (`name`);

--
-- Chỉ mục cho bảng `linh_vuc`
--
ALTER TABLE `linh_vuc`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `linh_vuc_name_unique` (`name`);

--
-- Chỉ mục cho bảng `loai_hinh_cong_van`
--
ALTER TABLE `loai_hinh_cong_van`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `loai_hinh_cong_van_name_unique` (`name`);

--
-- Chỉ mục cho bảng `loai_van_ban`
--
ALTER TABLE `loai_van_ban`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `loai_van_ban_name_unique` (`name`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Chỉ mục cho bảng `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cong_van`
--
ALTER TABLE `cong_van`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `co_quan_ban_hanh`
--
ALTER TABLE `co_quan_ban_hanh`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hinh_thuc_van_ban`
--
ALTER TABLE `hinh_thuc_van_ban`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `linh_vuc`
--
ALTER TABLE `linh_vuc`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `loai_hinh_cong_van`
--
ALTER TABLE `loai_hinh_cong_van`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `loai_van_ban`
--
ALTER TABLE `loai_van_ban`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cong_van`
--
ALTER TABLE `cong_van`
  ADD CONSTRAINT `cong_van_id_co_quan_ban_hanh_foreign` FOREIGN KEY (`id_co_quan_ban_hanh`) REFERENCES `co_quan_ban_hanh` (`id`),
  ADD CONSTRAINT `cong_van_id_hinh_thuc_van_ban_foreign` FOREIGN KEY (`id_hinh_thuc_van_ban`) REFERENCES `hinh_thuc_van_ban` (`id`),
  ADD CONSTRAINT `cong_van_id_linh_vuc_foreign` FOREIGN KEY (`id_linh_vuc`) REFERENCES `linh_vuc` (`id`),
  ADD CONSTRAINT `cong_van_id_loai_hinh_cong_van_foreign` FOREIGN KEY (`id_loai_hinh_cong_van`) REFERENCES `loai_hinh_cong_van` (`id`),
  ADD CONSTRAINT `cong_van_id_loai_van_ban_foreign` FOREIGN KEY (`id_loai_van_ban`) REFERENCES `loai_van_ban` (`id`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
