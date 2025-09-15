const VietnamPracticePage = () => {

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-orange-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
                <div
                    className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Thực tiễn xây dựng chủ nghĩa xã hội ở Việt Nam
                    </h1>
                    <p className="text-xl opacity-90">
                        Liên hệ lý luận với thực tiễn, từ kinh nghiệm của Việt Nam trong quá trình quá độ lên CNXH
                    </p>
                </div>

                {/* Ví dụ thực tiễn gần đây */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-400">
                        <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                            Ví dụ thực tiễn gần đây - Thành tựu xây dựng CNXH ở Việt Nam
                        </h3>
                        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                            Những thành tựu cụ thể, số liệu thực tế chứng minh hiệu quả của mô hình phát triển kinh tế - xã hội chủ nghĩa ở Việt Nam
                        </p>

                        {/* Giảm nghèo bền vững */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Giảm nghèo bền vững, nghèo đa chiều</h4>
                                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
                                        <p className="text-red-800 font-semibold text-lg mb-2">
                                            Việt Nam đã giảm tỷ lệ hộ nghèo đa chiều xuống còn khoảng <span className="text-2xl text-red-600">1,93%</span> vào cuối năm 2024
                                        </p>
                                        <p className="text-red-700 text-sm">
                                            Kết quả này vượt mục tiêu đặt ra trong Nghị quyết Đại hội XIII của Đảng và chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2021-2025.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://www.tapchicongsan.org.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Tạp chí Cộng sản
                                        </a>
                                        <a href="https://hcmcpv.org.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            HCMCPV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tăng trưởng GDP */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Tăng trưởng GDP, thu nhập người dân được cải thiện rõ rệt</h4>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                            <p className="text-green-800 font-semibold mb-2">GDP bình quân đầu người</p>
                                            <p className="text-green-700 text-lg font-bold">4.700 USD (2024)</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                            <p className="text-green-800 font-semibold mb-2">GDP tổng thể</p>
                                            <p className="text-green-700 text-lg font-bold">476,3 tỷ USD (2024)</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://www.tapchicongsan.org.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Tạp chí Cộng sản
                                        </a>
                                        <a href="https://vietnamplus.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            VietnamPlus
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phục hồi sau đại dịch */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Tăng trưởng ổn định và phục hồi sau đại dịch</h4>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                            <p className="text-blue-800 font-semibold mb-2">Xuất khẩu hàng hóa-dịch vụ</p>
                                            <p className="text-blue-700 text-lg font-bold">Tăng 15,5% (2024)</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                            <p className="text-blue-800 font-semibold mb-2">Tỷ lệ thất nghiệp</p>
                                            <p className="text-blue-700 text-lg font-bold">2,2% (3/2025)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-4">
                                        OECD đánh giá năm 2024 Việt Nam tăng trưởng GDP mạnh, phục hồi tốt sau đại dịch, 
                                        tỷ lệ thất nghiệp giảm xuống mức thấp lịch sử.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://baodautu.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Báo Đầu tư
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chuyển dịch cơ cấu kinh tế */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Chuyển dịch cơ cấu kinh tế & nâng cao năng suất lao động</h4>
                                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                                        <p className="text-purple-800 font-semibold mb-2">Cơ cấu kinh tế hiện đại</p>
                                        <p className="text-purple-700 text-sm mb-2">
                                            Các ngành công nghiệp và dịch vụ ngày càng chiếm tỷ trọng lớn hơn trong cơ cấu GDP, 
                                            giảm phụ thuộc vào nông nghiệp.
                                        </p>
                                        <p className="text-purple-700 text-sm">
                                            Lao động chuyển từ các ngành nông nghiệp sang công nghiệp – xây dựng và dịch vụ; 
                                            năng suất lao động được cải thiện rõ rệt.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://vietnamplus.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            VietnamPlus
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hội nhập quốc tế */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Hội nhập quốc tế & phát triển xuất khẩu</h4>
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                                        <p className="text-orange-800 font-semibold mb-2">Thành tích xuất khẩu</p>
                                        <p className="text-orange-700 text-sm mb-2">
                                            Xuất nhập khẩu hàng hóa của Việt Nam đạt kim ngạch lớn, FDI vẫn thu hút mạnh.
                                        </p>
                                        <p className="text-orange-700 text-sm font-semibold">
                                            Việt Nam được đánh giá cao là "điểm sáng" trong giảm nghèo toàn cầu bất chấp ảnh hưởng của COVID-19 và suy thoái kinh tế thế giới.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://www.tapchicongsan.org.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Tạp chí Cộng sản
                                        </a>
                                        <a href="https://vietnamplus.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            VietnamPlus
                                        </a>
                                        <a href="https://laocai.gov.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Báo Lào Cai
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chuyển đổi số */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Chuyển đổi số & VNeID</h4>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                                            <p className="text-indigo-800 font-semibold mb-2">Dịch vụ công trực tuyến</p>
                                            <p className="text-indigo-700 text-lg font-bold">77% mức độ 4</p>
                                            <p className="text-indigo-600 text-sm">(2024)</p>
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                                            <p className="text-indigo-800 font-semibold mb-2">Tài khoản VNeID</p>
                                            <p className="text-indigo-700 text-lg font-bold">50 triệu</p>
                                            <p className="text-indigo-600 text-sm">(cuối 2024)</p>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
                                        <p className="text-indigo-800 font-semibold mb-2">Kinh tế số</p>
                                        <p className="text-indigo-700 text-sm">
                                            Kinh tế số Việt Nam đạt 16,5% GDP (2023). Thương mại điện tử đạt 20,5 tỷ USD, 
                                            fintech và thanh toán số tăng trưởng mạnh.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href="https://chinhphu.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Báo Chính phủ
                                        </a>
                                        <a href="https://nhandan.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            Nhân Dân
                                        </a>
                                        <a href="https://vietnamplus.vn" target="_blank" rel="noopener noreferrer" 
                                           className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                                            VietnamPlus
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VietnamPracticePage;
