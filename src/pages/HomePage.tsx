import bgImage from "../assets/Photo 1.jpg";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-cover bg-center relative"
        style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat"}}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="bg-white from-primary-600 to-secondary-600 rounded-2xl p-8 text-black mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Quá độ lên Chủ nghĩa Xã hội ở Việt Nam
                    </h1>
                    <p className="text-xl opacity-90 mb-4">
                        Phân tích quá trình quá độ lên chủ nghĩa xã hội tại Việt Nam, đặc biệt trong việc xây dựng nền kinh tế xã hội chủ nghĩa
                    </p>
                    <p className="text-lg opacity-80 mb-6">
                        Website này cung cấp cái nhìn toàn diện về lý luận và thực tiễn quá độ lên CNXH ở Việt Nam, từ các giai đoạn lịch sử đến những thành tựu hiện tại và triển vọng tương lai.
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            MLN131 - Chủ đề 02
                        </span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            Lý luận và Thực tiễn
                        </span>
                    </div>
                </div>

                {/* Introduction Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Mục tiêu nghiên cứu</h3>
                        <p className="text-gray-600 mb-3">
                            Phân tích quá trình quá độ lên chủ nghĩa xã hội tại Việt Nam, có ý nghĩa quan trọng cả về lý luận và thực tiễn đối với sự phát triển kinh tế - xã hội.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Hiểu rõ các giai đoạn phát triển lịch sử</li>
                            <li>• Nắm vững đặc trưng bản chất của CNXH</li>
                            <li>• Liên hệ với thực tiễn Việt Nam</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-secondary-500 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Nội dung chính</h3>
                        <p className="text-gray-600 mb-3">
                            Trình bày các giai đoạn quá độ lên chủ nghĩa xã hội và các đặc trưng bản chất của chủ nghĩa xã hội, liên hệ với thực tiễn ở Việt Nam.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• 4 giai đoạn quá độ chính (1945-nay)</li>
                            <li>• 6 đặc trưng bản chất của CNXH</li>
                            <li>• Thành tựu và thách thức thực tiễn</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Thực tiễn Việt Nam</h3>
                        <p className="text-gray-600 mb-3">
                            Xây dựng nền kinh tế xã hội chủ nghĩa phù hợp với điều kiện và hoàn cảnh cụ thể của Việt Nam.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Mô hình kinh tế thị trường định hướng XHCN</li>
                            <li>• Thành tựu xóa đói giảm nghèo</li>
                            <li>• Hội nhập quốc tế và phát triển bền vững</li>
                        </ul>
                    </div>
                </div>

                {/* Importance Section */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border border-yellow-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Tầm quan trọng của chủ đề</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Về mặt lý luận:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Làm rõ lý luận Mác-Lênin về quá độ lên CNXH</li>
                                <li>• Phát triển lý luận phù hợp với điều kiện Việt Nam</li>
                                <li>• Góp phần vào kho tàng lý luận chủ nghĩa xã hội khoa học</li>
                                <li>• Cung cấp cơ sở khoa học cho đường lối phát triển</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Về mặt thực tiễn:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Đánh giá thành tựu và hạn chế trong quá trình phát triển</li>
                                <li>• Rút ra bài học kinh nghiệm cho giai đoạn tiếp theo</li>
                                <li>• Định hướng chính sách phát triển kinh tế - xã hội</li>
                                <li>• Nâng cao nhận thức của nhân dân về con đường phát triển</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Key Concepts */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Các khái niệm cốt lõi</h2>
                    <p className="text-gray-600 mb-6">
                        Những khái niệm cơ bản giúp hiểu rõ bản chất và đặc điểm của quá trình quá độ lên chủ nghĩa xã hội ở Việt Nam.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Quá độ lên chủ nghĩa xã hội</h4>
                                    <p className="text-gray-600 text-sm">
                                        Quá trình chuyển đổi từ xã hội cũ lên xã hội mới, từ chủ nghĩa tư bản lên chủ nghĩa xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Nền kinh tế xã hội chủ nghĩa</h4>
                                    <p className="text-gray-600 text-sm">
                                        Nền kinh tế dựa trên chế độ sở hữu xã hội về tư liệu sản xuất chủ yếu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Đặc trưng bản chất</h4>
                                    <p className="text-gray-600 text-sm">
                                        Những đặc điểm cơ bản, cốt lõi phân biệt chủ nghĩa xã hội với các chế độ khác.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Thực tiễn Việt Nam</h4>
                                    <p className="text-gray-600 text-sm">
                                        Áp dụng lý luận vào điều kiện cụ thể của Việt Nam trong quá trình đổi mới.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Research Methods Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Phương pháp nghiên cứu</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3">Phương pháp lịch sử</h3>
                            <p className="text-blue-700 text-sm">
                                Phân tích các giai đoạn phát triển từ 1945 đến nay, rút ra quy luật và bài học kinh nghiệm.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3">Phương pháp so sánh</h3>
                            <p className="text-green-700 text-sm">
                                So sánh với các mô hình phát triển khác để làm rõ đặc thù của con đường Việt Nam.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3">Phương pháp thực tiễn</h3>
                            <p className="text-purple-700 text-sm">
                                Liên hệ lý luận với thực tiễn, đánh giá thành tựu và thách thức hiện tại.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Current Evidence Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8 border border-green-200 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Dẫn chứng hiện tại (2025)</h3>
                    <p className="text-gray-600 mb-6">
                        Những số liệu thống kê mới nhất phản ánh thành tựu của Việt Nam trong quá trình xây dựng CNXH.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <h4 className="font-semibold text-green-700 mb-2">GDP Growth</h4>
                            <div className="text-2xl font-bold text-green-600">5.05%</div>
                            <p className="text-sm text-gray-600">Tăng trưởng GDP năm 2024</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <h4 className="font-semibold text-blue-700 mb-2">Poverty Rate</h4>
                            <div className="text-2xl font-bold text-blue-600">2.23%</div>
                            <p className="text-sm text-gray-600">Tỷ lệ nghèo đa chiều</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <h4 className="font-semibold text-purple-700 mb-2">HDI</h4>
                            <div className="text-2xl font-bold text-purple-600">0.726</div>
                            <p className="text-sm text-gray-600">Chỉ số phát triển con người</p>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                            <strong>Nguồn:</strong> Báo cáo của Tổng cục Thống kê, UNDP, Ngân hàng Thế giới (2024-2025)
                        </p>
                    </div>
                </div>

                {/* Website Structure */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border border-indigo-200">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Cấu trúc website</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Nội dung chính:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>Giai đoạn quá độ:</strong> Timeline 4 giai đoạn từ 1945-nay</li>
                                <li>• <strong>Đặc trưng CNXH:</strong> 6 đặc trưng bản chất cốt lõi</li>
                                <li>• <strong>Thực tiễn Việt Nam:</strong> Thành tựu và thách thức</li>
                                <li>• <strong>Quiz tương tác:</strong> 10 câu hỏi kiểm tra kiến thức</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Tính năng đặc biệt:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>AI Usage:</strong> Minh bạch về việc sử dụng AI</li>
                                <li>• <strong>Responsive Design:</strong> Tương thích mọi thiết bị</li>
                                <li>• <strong>Interactive Elements:</strong> Hover effects và animations</li>
                                <li>• <strong>Modern UI/UX:</strong> Giao diện đẹp mắt, chuyên nghiệp</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Learning Outcomes */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Liên kết với Learning Outcomes (LO)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-bold">LO1</span>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Hiểu biết lý thuyết</h4>
                                    <p className="text-gray-600 text-sm">Nắm vững lý thuyết về quá độ lên CNXH và đặc trưng bản chất</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">LO2</span>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phân tích thực tiễn</h4>
                                    <p className="text-gray-600 text-sm">Liên hệ lý thuyết với thực tiễn xây dựng CNXH ở Việt Nam</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm font-bold">LO3</span>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Tư duy phê phán</h4>
                                    <p className="text-gray-600 text-sm">Đánh giá thành tựu, thách thức và triển vọng phát triển</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">LO4</span>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Ứng dụng công nghệ</h4>
                                    <p className="text-gray-600 text-sm">Sử dụng công nghệ để trình bày và tương tác hiệu quả</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Major Relevance */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border border-purple-200">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">💻 Liên kết với chuyên ngành Công nghệ thông tin</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Ứng dụng CNTT trong xây dựng CNXH:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Chuyển đổi số trong quản lý nhà nước</li>
                                <li>• Xây dựng chính phủ điện tử</li>
                                <li>• Phát triển kinh tế số</li>
                                <li>• Công nghệ 4.0 trong sản xuất</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Vai trò của sinh viên CNTT:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Phát triển phần mềm phục vụ xã hội</li>
                                <li>• Tạo ra các sản phẩm công nghệ hữu ích</li>
                                <li>• Góp phần hiện đại hóa đất nước</li>
                                <li>• Xây dựng nền tảng số cho tương lai</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Navigation Guide */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Hướng dẫn điều hướng</h3>
                    <p className="text-gray-600 mb-4">
                        Sử dụng menu bên trái để khám phá các chủ đề chi tiết:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">📈</span>
                            <div>
                                <div className="font-medium">Giai đoạn quá độ</div>
                                <div className="text-sm text-gray-500">Tìm hiểu các giai đoạn phát triển</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">⭐</span>
                            <div>
                                <div className="font-medium">Đặc trưng CNXH</div>
                                <div className="text-sm text-gray-500">Khám phá bản chất của CNXH</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇻🇳</span>
                            <div>
                                <div className="font-medium">Thực tiễn Việt Nam</div>
                                <div className="text-sm text-gray-500">Liên hệ với thực tế Việt Nam</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🧠</span>
                            <div>
                                <div className="font-medium">Quiz tương tác</div>
                                <div className="text-sm text-gray-500">Kiểm tra kiến thức</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🤖</span>
                            <div>
                                <div className="font-medium">AI Usage</div>
                                <div className="text-sm text-gray-500">Minh bạch sử dụng AI</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🏠</span>
                            <div>
                                <div className="font-medium">Trang chủ</div>
                                <div className="text-sm text-gray-500">Quay lại tổng quan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
