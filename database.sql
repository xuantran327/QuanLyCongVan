-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: quanlycongvan
-- ------------------------------------------------------
-- Server version	8.0.27

CREATE DATABASE `quanlycongvan`;
USE `quanlycongvan`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `co_quan_ban_hanh`
--

DROP TABLE IF EXISTS `co_quan_ban_hanh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `co_quan_ban_hanh` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `co_quan_ban_hanh_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_quan_ban_hanh`
--

LOCK TABLES `co_quan_ban_hanh` WRITE;
/*!40000 ALTER TABLE `co_quan_ban_hanh` DISABLE KEYS */;
INSERT INTO `co_quan_ban_hanh` VALUES (1,'Phòng khảo thí - Đảm bảo chất lượng giáo dục','phong-khao-thi-dam-bao-chat-luong-giao-duc',NULL,'2022-05-30 13:46:31'),(2,'Trường Đại học Công nghệ thông tin và Truyền thông Việt Hàn','truong-dai-hoc-cong-nghe-thong-tin-va-truyen-thong-viet-han',NULL,'2022-05-30 14:13:24'),(3,'Trường Đại học Ngoại ngữ - ĐHĐN','truong-dai-hoc-ngoai-ngu-dhdn',NULL,'2022-05-30 14:24:22'),(4,'Công ty cổ phần Học viện trực tuyến Việt Nam','cong-ty-co-phan-hoc-vien-truc-tuyen-viet-nam',NULL,'2022-05-30 14:37:16'),(5,'Phòng Công tác sinh viên','phong-cong-tac-sinh-vien',NULL,'2022-05-30 14:55:51'),(6,'Phòng Đào tạo','phong-dao-tao',NULL,'2022-05-30 14:59:51'),(11,'Khoa Khoa học máy tính','khoa-khoa-hoc-may-tinh','2023-06-13 11:46:13','2023-06-13 11:46:13');
/*!40000 ALTER TABLE `co_quan_ban_hanh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cong_van`
--

DROP TABLE IF EXISTS `cong_van`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cong_van` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `so_hieu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_lap` date DEFAULT NULL,
  `ngay_ky` date DEFAULT NULL,
  `ngay_hieu_luc` date DEFAULT NULL,
  `ngay_chuyen` date DEFAULT NULL,
  `trich_yeu_noi_dung` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nguoi_ky` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_tep_dinh_kem` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `con_hieu_luc` tinyint(1) NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'thong-bao.jpg',
  `id_co_quan_ban_hanh` int unsigned NOT NULL,
  `id_hinh_thuc_van_ban` int unsigned NOT NULL,
  `id_linh_vuc` int unsigned NOT NULL,
  `id_loai_van_ban` int unsigned NOT NULL,
  `id_loai_hinh_cong_van` int unsigned NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cong_van_id_co_quan_ban_hanh_foreign` (`id_co_quan_ban_hanh`),
  KEY `cong_van_id_hinh_thuc_van_ban_foreign` (`id_hinh_thuc_van_ban`),
  KEY `cong_van_id_linh_vuc_foreign` (`id_linh_vuc`),
  KEY `cong_van_id_loai_van_ban_foreign` (`id_loai_van_ban`),
  KEY `cong_van_id_loai_hinh_cong_van_foreign` (`id_loai_hinh_cong_van`),
  CONSTRAINT `cong_van_id_co_quan_ban_hanh_foreign` FOREIGN KEY (`id_co_quan_ban_hanh`) REFERENCES `co_quan_ban_hanh` (`id`),
  CONSTRAINT `cong_van_id_hinh_thuc_van_ban_foreign` FOREIGN KEY (`id_hinh_thuc_van_ban`) REFERENCES `hinh_thuc_van_ban` (`id`),
  CONSTRAINT `cong_van_id_linh_vuc_foreign` FOREIGN KEY (`id_linh_vuc`) REFERENCES `linh_vuc` (`id`),
  CONSTRAINT `cong_van_id_loai_hinh_cong_van_foreign` FOREIGN KEY (`id_loai_hinh_cong_van`) REFERENCES `loai_hinh_cong_van` (`id`),
  CONSTRAINT `cong_van_id_loai_van_ban_foreign` FOREIGN KEY (`id_loai_van_ban`) REFERENCES `loai_van_ban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cong_van`
--

LOCK TABLES `cong_van` WRITE;
/*!40000 ALTER TABLE `cong_van` DISABLE KEYS */;
INSERT INTO `cong_van` VALUES (1,'/TB-KT&ĐBCL','2022-05-30','2022-02-11','2022-05-30','2022-02-11','Tổ chức thi kết thúc học phần Vật lý và Nguyên lý hệ điều hành (Đối với Sinh viên đã Hoãn thi/Duyệt thi lại ở Học Kỳ II Năm học 2020-2021 - chưa nộp đơn xin dự thi)','ThS. Lê Hà Như Thảo','hyK_1. TB vv to chuc Thi học phan VL,Tieng Anh 1 và NLHĐH cho SV hoãn thi ở Học kỳ II Năm Học 2020-2021_CT.docx.pdf',1,'thong-bao.jpg',1,2,1,1,1,'to-chuc-thi-ket-thuc-hoc-phan-vat-ly-va-nguyen-ly-he-dieu-hanh-doi-voi-sinh-vien-da-hoan-thiduyet-thi-lai-o-hoc-ky-ii-nam-hoc-2020-2021-chua-nop-don-xin-du-thi','2022-05-30 14:09:00','2022-05-30 14:38:40'),(2,'64/HD-KT&ĐBCL','2022-05-30','2021-11-26','2022-05-30','2021-11-26','Công tác thi và coi thi trực tuyến học kỳ 1, năm học 2021 - 2022','ThS. Lê Hà Như Thảo','JK1_3. HD64_To chuc thi online HK 1-21-22.pdf',0,'thong-bao.jpg',2,4,1,1,1,'cong-tac-thi-va-coi-thi-truc-tuyen-hoc-ky-1-nam-hoc-2021-2022','2022-05-30 14:16:29','2022-05-30 14:39:00'),(3,'38/ĐHNN','2022-05-30','2022-01-07','2022-05-30','2022-01-07','Phúc khảo kết quả kỳ thi khảo sát năng lực chuẩn đầu ra ngoại ngữ cho sinh viên đợt thi ngày 26/12/2021','TS. Phạm Thị Tố Như','SrW_38 ĐHNN VV PHÚC KHẢO KẾT QUẢ KỲ THI KSNL CĐR NN CHO SV ĐỢT THI NGÀY 26.12.2021.pdf',0,'thong-bao.jpg',1,2,1,1,2,'phuc-khao-ket-qua-ky-thi-khao-sat-nang-luc-chuan-dau-ra-ngoai-ngu-cho-sinh-vien-dot-thi-ngay-26122021','2022-05-30 14:28:59','2022-05-30 14:39:12'),(4,'04/TB-KT&ĐBCL','2022-05-30','2022-01-04','2022-05-30','2022-01-04','Đăng ký thi năng lực tiếng Anh đầu ra trình độ Cao đẳng dành cho sinh viên khóa 2019 – 2022 đợt bổ sung','ThS. Lê Hà Như Thảo','Zfs_1671693069_Thông báo về việc triển khai dạy và học học kỳ 2 năm học 2022-2023.pdf',0,'thong-bao.jpg',1,2,1,1,1,'dang-ky-thi-nang-luc-tieng-anh-dau-ra-trinh-do-cao-dang-danh-cho-sinh-vien-khoa-2019-2022-dot-bo-sung','2022-05-30 14:31:59','2023-06-13 20:39:42'),(5,'67/TB-KT&ĐBCL','2022-05-30','2021-12-03','2022-05-30','2021-12-03','Đăng ký thi đánh giá chuẩn đầu ra tiếng Anh cho sinh viên tốt nghiệp năm 2021 theo hình thức trực tuyến (Đợt 2)','ThS. Lê Hà Như Thảo','d46_67-TB đăng ký thi TA CDR 2021.pdf',0,'thong-bao.jpg',1,2,1,1,1,'dang-ky-thi-danh-gia-chuan-dau-ra-tieng-anh-cho-sinh-vien-tot-nghiep-nam-2021-theo-hinh-thuc-truc-tuyen-dot-2','2022-05-30 14:34:25','2022-05-30 14:39:43'),(6,'0003/2022/CV-VOA',NULL,'2022-01-04',NULL,'2022-01-11','Cử sinh viên tham gia chương trình hỗ trợ đào tạo đặc biệt \"Chương trình Quốc gia đào tạo, nâng cao và hoàn thiện kỹ năng cho sinh viên Việt Nam trong bối cảnh CMCN 4.0\"','Hoàng Ngọc Trung','QSU_1-đã chuyển đổi.pdf',1,'thong-bao.jpg',4,2,1,1,2,'cu-sinh-vien-tham-gia-chuong-trinh-ho-tro-dao-tao-dac-biet-chuong-trinh-quoc-gia-dao-tao-nang-cao-va-hoan-thien-ky-nang-cho-sinh-vien-viet-nam-trong-boi-canh-cmcn-40','2022-05-30 14:44:13','2022-05-30 14:44:13'),(7,'1379/TB-ĐHVH',NULL,'2021-11-16',NULL,'2021-11-16','Đăng ký tham gia buổi giới thiệu học bổng của Tập đoàn Thép JFE, Nhật Bản','TS. Lê Thị Minh Đức','up5_jpg2pdf.pdf',0,'thong-bao.jpg',2,2,1,1,1,'dang-ky-tham-gia-buoi-gioi-thieu-hoc-bong-cua-tap-doan-thep-jfe-nhat-ban','2022-05-30 14:52:48','2022-05-30 14:52:48'),(8,'40/TH-CTSV',NULL,'2021-05-12',NULL,'2021-05-12','Rà soát danh sách cử tri','ThS. Trần Thị Kim Oanh','NAa_z.pdf',0,'thong-bao.jpg',5,2,2,1,1,'ra-soat-danh-sach-cu-tri','2022-05-30 14:58:23','2022-05-30 14:58:23'),(9,'32/TB-ĐT',NULL,'2022-05-15',NULL,'2022-02-15','Tổ chức xét và công nhận tốt nghiệp cho sinh viên trình độ đại học và cao đẳng - Đợt 1 năm 2022','ThS. Trần Thị Trà Vinh','meO_Thông báo xét công nhận tốt nghiệp _Đợt 1 năm 2022.pdf',0,'thong-bao.jpg',6,2,1,1,1,'to-chuc-xet-va-cong-nhan-tot-nghiep-cho-sinh-vien-trinh-do-dai-hoc-va-cao-dang-dot-1-nam-2022','2022-05-30 15:02:03','2022-05-30 15:02:03'),(10,'221/KH-ĐHVH',NULL,'2022-01-24',NULL,'2022-01-24','Tổ chức cho sinh viên toàn trường học tập trung sau Tết Nguyên Đán Nhâm Dần 2022','TS. Lê Thị Minh Đức','bAw_KH.VV TỔ CHỨC CHO SV TOÀN TRƯỜNG HỌC TẬP TRUNG_0001.pdf',1,'thong-bao.jpg',2,1,1,1,1,'to-chuc-cho-sinh-vien-toan-truong-hoc-tap-trung-sau-tet-nguyen-dan-nham-dan-2022','2022-05-30 15:06:56','2022-05-30 15:06:56'),(11,'/TB-ĐT',NULL,'2022-01-14',NULL,'2022-01-14','Kế hoạch đánh giá Đồ án tốt nghiệp theo hình thức trực tuyến đối với sinh viên trình độ đại học ngành Công nghệ thông tin và ngành Công nghệ kỹ thuật máy tính (Đợt 1 - tháng 01 năm 2022)','TS. Huỳnh Ngọc Thọ','tHo_Thông báo đánh giá Đồ án tốt nghiệp.pdf',0,'thong-bao.jpg',6,2,1,1,1,'ke-hoach-danh-gia-do-an-tot-nghiep-theo-hinh-thuc-truc-tuyen-doi-voi-sinh-vien-trinh-do-dai-hoc-nganh-cong-nghe-thong-tin-va-nganh-cong-nghe-ky-thuat-may-tinh-dot-1-thang-01-nam-2022','2022-05-30 15:10:11','2022-05-30 15:10:11'),(12,'1489/TB-ĐHVH',NULL,'2021-12-15',NULL,'2021-12-15','Triển khai giảng dạy và học tập kỳ 2 năm học 2021-2022','TS. Trần Thế Sơn','KYV_Thong bao - giang dạy va hoc tap HK2 (21-22).pdf',1,'thong-bao.jpg',2,2,1,1,1,'trien-khai-giang-day-va-hoc-tap-ky-2-nam-hoc-2021-2022','2022-05-30 15:14:09','2022-05-30 15:14:09'),(13,'79/TB-ĐT',NULL,'2021-12-06',NULL,'2021-12-06','Triển khai thực hiện Khoá luận tốt nghiệp ngành Quản trị kinh doanh khoá học 2018 học kỳ 2, năm học 2021-2022','TS. Huỳnh Ngọc Thọ','XwU_TB_Trien khai thuc hien Khoa luan TN_QTKD_0001.pdf',1,'thong-bao.jpg',6,2,1,1,1,'trien-khai-thuc-hien-khoa-luan-tot-nghiep-nganh-quan-tri-kinh-doanh-khoa-hoc-2018-hoc-ky-2-nam-hoc-2021-2022','2022-05-30 15:17:28','2022-05-30 15:17:28'),(14,'352/TB-ĐHVH',NULL,'2022-03-17',NULL,'2022-03-17','Triệu tập sinh viên tham gia các phiên tư vấn và tuyển dụng của các doanh nghiệp','TS. Trần Thế Sơn','nKQ_y.pdf',0,'thong-bao.jpg',2,2,1,1,1,'trieu-tap-sinh-vien-tham-gia-cac-phien-tu-van-va-tuyen-dung-cua-cac-doanh-nghiep','2022-05-30 15:29:40','2022-05-30 15:29:40'),(15,'331/TB-ĐHVH',NULL,'2022-03-09',NULL,'2022-03-09','Cập nhật tình hình tiêm vắc-xin phòng, chống Covid-19 và tình trạng dịch tễ của sinh viên','TS. Trần Thế Sơn','iaD_x.pdf',1,'thong-bao.jpg',2,2,3,1,1,'cap-nhat-tinh-hinh-tiem-vac-xin-phong-chong-covid-19-va-tinh-trang-dich-te-cua-sinh-vien','2022-05-30 15:34:27','2022-05-30 15:34:27'),(16,'93/TB-ĐT',NULL,'2022-04-13',NULL,'2022-04-13','Rà soát kết quả tốt nghiệp của sinh viên trình độ đại học và cao đẳng - Đợt 1 năm 2022','TS. Huỳnh Ngọc Thọ','EJM_TB rà soát tốt nghiệp_Đợt 1 2022.pdf',0,'thong-bao.jpg',6,2,1,1,1,'ra-soat-ket-qua-tot-nghiep-cua-sinh-vien-trinh-do-dai-hoc-va-cao-dang-dot-1-nam-2022','2022-05-30 15:37:35','2022-05-30 15:37:35'),(17,'/TB-PĐT',NULL,'2022-05-26',NULL,'2022-05-26','Kết quả đăng ký Chuyên ngành cho sinh viên Khóa 2021','TS. Huỳnh Ngọc Thọ','7bA_Thông báo.pdf',1,'thong-bao.jpg',6,2,1,1,1,'ket-qua-dang-ky-chuyen-nganh-cho-sinh-vien-khoa-2021','2022-05-30 15:40:23','2022-05-30 15:40:23'),(18,'106/TB-ĐT',NULL,'2022-05-04',NULL,'2022-05-04','Triển khai Thực tập tốt nghiệp cho sinh viên khoá 2018 và Thực tập doanh nghiệp cho sinh viên khoá 2020 ngành Công nghệ thông tin, ngành Công nghệ kỹ thuật máy tính','TS. Huỳnh Ngọc Thọ','wt8_Thông báo thực tập.pdf',1,'thong-bao.jpg',6,2,1,1,1,'trien-khai-thuc-tap-tot-nghiep-cho-sinh-vien-khoa-2018-va-thuc-tap-doanh-nghiep-cho-sinh-vien-khoa-2020-nganh-cong-nghe-thong-tin-nganh-cong-nghe-ky-thuat-may-tinh','2022-05-30 15:46:28','2022-05-30 15:46:28'),(26,'17/TB-KT&ĐBCL','2023-05-29','2023-05-29','2023-05-29','2023-05-29','Về việc phúc khảo điểm thi kết thúc học phần K21, Học kỳ 2 năm học 2022-2023','ThS. Vũ Thu Hà','aX2_PHÚC KHẢO K21, HK2,22-23.pdf',1,'thong-bao.jpg',1,2,1,1,1,'ve-viec-phuc-khao-diem-thi-ket-thuc-hoc-phan-k21-hoc-ky-2-nam-hoc-2022-2023','2023-06-13 11:42:56','2023-06-13 11:44:42'),(27,'46/KH-KHMT','2023-03-16','2023-05-16','2023-05-16','2023-05-16','Kế hoạch triển khai thực tập doanh nghiệp học kỳ 2 năm học 2022-2023','TS. Nguyễn Đức Hiển','7Db_46-Ke hoach Thuc tap Doanh nghiep K21.pdf',1,'thong-bao.jpg',11,2,1,1,1,'ke-hoach-trien-khai-thuc-tap-doanh-nghiep-hoc-ky-2-nam-hoc-2022-2023','2023-06-13 11:48:24','2023-06-13 11:48:24'),(28,'/TB-ĐT','2023-05-08','2023-05-08','2023-05-08','2023-05-08','Về việc tuyển sinh viên thực tập','TS. Huỳnh Ngọc Thọ','YoF_1683510912_TB_tuyen_thuc_tap_v.2.docx',1,'thong-bao.jpg',2,2,1,1,1,'ve-viec-tuyen-sinh-vien-thuc-tap','2023-06-13 11:51:15','2023-06-13 11:51:15'),(29,'568/TB-HĐVH','2023-04-12','2023-04-12','2023-04-12','2023-04-12','Đăng ký chuyên ngành cho sinh viên khoá tuyển sinh 2022','TS. Huỳnh Ngọc Thọ','hsX_1681379139_568_Thông báo.pdf',1,'thong-bao.jpg',2,2,1,1,1,'dang-ky-chuyen-nganh-cho-sinh-vien-khoa-tuyen-sinh-2022','2023-06-13 11:53:46','2023-06-13 11:53:46'),(30,'82/TB-ĐHVH','2023-01-27','2023-01-27','2023-01-27','2023-01-27','Triển khai thực hiện Đồ án tốt nghiệp ngành Công nghệ thông tin trình độ đại học học kỳ 2, năm học 2022-2023','TS. Huỳnh Ngọc Thọ','oim_1676531391_82 tb trien khai thuc hien do an tn nganh cntt, hk2, 22-23_0001.pdf',1,'thong-bao.jpg',2,2,1,1,1,'trien-khai-thuc-hien-do-an-tot-nghiep-nganh-cong-nghe-thong-tin-trinh-do-dai-hoc-hoc-ky-2-nam-hoc-2022-2023','2023-06-13 11:57:21','2023-06-13 11:57:21'),(31,'1675/TB-ĐHVH','2022-12-24','2022-12-24','2022-12-24','2022-12-24','Triển khai thực hiện Khoá luận tốt nghiệp ngành Quản trị kinh doanh khoá học 2019 học kỳ 2, năm học 2022-2023','TS. Huỳnh Ngọc Thọ','G2W_1672043035_Thông báo KLTN học kỳ 2(22-23).pdf',1,'thong-bao.jpg',2,2,1,1,1,'trien-khai-thuc-hien-khoa-luan-tot-nghiep-nganh-quan-tri-kinh-doanh-khoa-hoc-2019-hoc-ky-2-nam-hoc-2022-2023','2023-06-13 12:00:43','2023-06-13 12:00:43'),(32,'277/TB-ĐT','2021-12-19','2021-12-19','2022-12-19','2022-12-19','Triển khai dạy và học học kỳ 2 năm học 2022-2023','ThS. Trần Thị Trà Vinh','Sio_1671693069_Thông báo về việc triển khai dạy và học học kỳ 2 năm học 2022-2023.pdf',1,'thong-bao.jpg',6,2,1,1,1,'trien-khai-day-va-hoc-hoc-ky-2-nam-hoc-2022-2023','2023-06-13 12:02:42','2023-06-13 14:45:45'),(33,'jafklklfjsdalkfjlksa','2023-06-14','2023-06-14','2023-02-14','2023-06-14','jklaufoildjlksdjlkfjalskjlk','TS. Huỳnh Ngọc Thọ','28f_1672043035_Thông báo KLTN học kỳ 2(22-23).pdf',1,'thong-bao.jpg',2,1,1,1,1,'jklaufoildjlksdjlkfjalskjlk','2023-06-13 20:48:35','2023-06-13 20:48:35');
/*!40000 ALTER TABLE `cong_van` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hinh_thuc_van_ban`
--

DROP TABLE IF EXISTS `hinh_thuc_van_ban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hinh_thuc_van_ban` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hinh_thuc_van_ban_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hinh_thuc_van_ban`
--

LOCK TABLES `hinh_thuc_van_ban` WRITE;
/*!40000 ALTER TABLE `hinh_thuc_van_ban` DISABLE KEYS */;
INSERT INTO `hinh_thuc_van_ban` VALUES (1,'Công văn điều hành','cong-van-dieu-hanh',NULL,'2022-05-30 13:53:31'),(2,'Thông báo','thong-bao',NULL,'2022-05-30 13:53:44'),(3,'Báo cáo','bao-cao',NULL,'2022-05-30 13:53:56'),(4,'Công văn hướng dẫn','cong-van-huong-dan',NULL,'2022-05-30 14:27:34');
/*!40000 ALTER TABLE `hinh_thuc_van_ban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linh_vuc`
--

DROP TABLE IF EXISTS `linh_vuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linh_vuc` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `linh_vuc_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linh_vuc`
--

LOCK TABLES `linh_vuc` WRITE;
/*!40000 ALTER TABLE `linh_vuc` DISABLE KEYS */;
INSERT INTO `linh_vuc` VALUES (1,'Giáo dục','giao-duc',NULL,'2022-05-30 13:43:56'),(2,'Chính trị','chinh-tri','2022-05-30 13:44:15','2022-05-30 14:56:49'),(3,'Y tế','y-te','2022-05-30 15:32:23','2022-05-30 15:32:23');
/*!40000 ALTER TABLE `linh_vuc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loai_hinh_cong_van`
--

DROP TABLE IF EXISTS `loai_hinh_cong_van`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loai_hinh_cong_van` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `loai_hinh_cong_van_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loai_hinh_cong_van`
--

LOCK TABLES `loai_hinh_cong_van` WRITE;
/*!40000 ALTER TABLE `loai_hinh_cong_van` DISABLE KEYS */;
INSERT INTO `loai_hinh_cong_van` VALUES (1,'Công văn nội bộ','loai-hinh-cong-van-1',NULL,NULL),(2,'Công văn đến','cong-van-den',NULL,'2022-05-30 13:47:28'),(3,'Công văn đi','cong-van-di',NULL,'2022-05-30 13:52:13');
/*!40000 ALTER TABLE `loai_hinh_cong_van` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loai_van_ban`
--

DROP TABLE IF EXISTS `loai_van_ban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loai_van_ban` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ten_khong_dau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `loai_van_ban_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loai_van_ban`
--

LOCK TABLES `loai_van_ban` WRITE;
/*!40000 ALTER TABLE `loai_van_ban` DISABLE KEYS */;
INSERT INTO `loai_van_ban` VALUES (1,'Văn bản chỉ đạo điều hành','van-ban-chi-dao-dieu-hanh',NULL,'2022-05-30 13:54:22');
/*!40000 ALTER TABLE `loai_van_ban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2022_04_17_174251_create_linh_vuc_table',1),(2,'2022_04_17_174840_create_loai_hinh_cong_van_table',1),(3,'2022_04_17_182158_create_co_quan_ban_hanh_table',1),(4,'2022_04_17_182235_create_hinh_thuc_van_ban_table',1),(5,'2022_04_17_182318_create_loai_van_ban_table',1),(6,'2022_04_17_185107_create_slide_table',1),(7,'2022_04_17_191614_create_role_table',1),(8,'2014_10_12_000000_create_users_table',2),(9,'2014_10_12_100000_create_password_resets_table',2),(10,'2019_08_19_000000_create_failed_jobs_table',2),(11,'2019_12_14_000001_create_personal_access_tokens_table',2),(12,'2022_04_17_182437_create_cong_van_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'SuperAdmin',NULL,NULL),(2,'Admin',NULL,'2022-05-30 00:14:21'),(3,'Nhân viên',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slides`
--

DROP TABLE IF EXISTS `slides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slides` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slides`
--

LOCK TABLES `slides` WRITE;
/*!40000 ALTER TABLE `slides` DISABLE KEYS */;
INSERT INTO `slides` VALUES (1,'VKU Logo','Ffj_default.png','2022-05-30 00:38:15','2022-05-30 00:38:15'),(2,'Campus','IY9_hinh1.jpg','2022-05-30 00:39:04','2022-05-30 00:39:04'),(3,'Robocar','Qhk_1651118044-1650718142-1650717446_img_8361.jpg','2022-05-30 00:40:42','2022-05-30 00:40:42'),(4,'Ảnh 1','Wj1_1652498629-1652498215_img_0604.jpg','2022-05-30 00:41:58','2022-05-30 00:41:58'),(8,'Ảnh 5','rn_image_picker_lib_temp_b3a735ba-eafe-4b9e-a922-7ffb34308b04.jpg','2023-06-13 13:31:08','2023-06-13 13:49:09');
/*!40000 ALTER TABLE `slides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `dob` date NOT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default-avatar.png',
  `role_id` int unsigned NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Xuân Trần',0,'2002-03-27','0987654321','rapunzelxuantran@gmail.com','$2y$10$aeanKgqMhZb5/KZAXeMt5uQx1BHbaEyOLMr7Ety9B05/LUnkjPAKG','rn_image_picker_lib_temp_2959eaf0-3a17-47d5-913e-038d064e0185.jpg',1,NULL,NULL,'2023-06-13 14:40:58'),(2,'Xuân Trần',0,'2002-03-27','0987654321','ttxxuan.20it1@vku.udn.vn','$2y$10$Q/mZjJzFBkcmMNtFyi.mteDHbWXv2SZ6UWkuCKU9u35VzBQ0UNjqG','PV3_1.jpg',2,NULL,'2022-05-28 22:26:57','2022-05-30 00:34:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-21 20:37:43
