const VietnamPracticePage = () => {
    const achievements = [
        {
            title: "Tăng trưởng kinh tế ấn tượng",
            description: "GDP tăng trưởng bình quân 6-7%/năm trong nhiều năm liên tiếp",
            details: [
                "Từ một nước nghèo trở thành nước có thu nhập trung bình",
                "Xuất khẩu tăng mạnh, tham gia chuỗi giá trị toàn cầu",
                "Công nghiệp hóa, hiện đại hóa đạt nhiều thành tựu",
                "Nông nghiệp phát triển bền vững, an ninh lương thực được đảm bảo"
            ],
            icon: "",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Xóa đói giảm nghèo thành công",
            description: "Tỷ lệ nghèo giảm từ 60% (1993) xuống dưới 3% (2020)",
            details: [
                "Chương trình xóa đói giảm nghèo toàn diện và hiệu quả",
                "Phát triển cơ sở hạ tầng nông thôn",
                "Đầu tư giáo dục, y tế cho vùng khó khăn",
                "Tạo việc làm và cơ hội phát triển cho người nghèo"
            ],
            icon: "",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Phát triển giáo dục và y tế",
            description: "Hệ thống giáo dục và y tế được cải thiện đáng kể",
            details: [
                "Xóa mù chữ, phổ cập giáo dục tiểu học",
                "Tỷ lệ biết chữ đạt trên 95%",
                "Hệ thống y tế được mở rộng và nâng cao chất lượng",
                "Tuổi thọ trung bình tăng từ 60 lên 75 tuổi"
            ],
            icon: "",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Hội nhập quốc tế",
            description: "Việt Nam tích cực hội nhập và đóng góp vào cộng đồng quốc tế",
            details: [
                "Tham gia WTO, ASEAN, APEC và nhiều tổ chức quốc tế",
                "Ký kết nhiều hiệp định thương mại tự do",
                "Đóng góp tích cực vào hòa bình và an ninh khu vực",
                "Quan hệ hữu nghị với tất cả các nước"
            ],
            icon: "",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const challenges = [
        {
            title: "Chênh lệch giàu nghèo",
            description: "Khoảng cách thu nhập giữa các vùng miền và nhóm dân cư",
            solutions: [
                "Đầu tư phát triển vùng sâu, vùng xa",
                "Tạo cơ hội việc làm bình đẳng",
                "Cải thiện hệ thống thuế và phân phối thu nhập"
            ],
            icon: ""
        },
        {
            title: "Ô nhiễm môi trường",
            description: "Áp lực từ quá trình công nghiệp hóa và đô thị hóa",
            solutions: [
                "Phát triển kinh tế xanh, bền vững",
                "Áp dụng công nghệ sạch",
                "Nâng cao ý thức bảo vệ môi trường"
            ],
            icon: ""
        },
        {
            title: "Chất lượng nguồn nhân lực",
            description: "Cần nâng cao chất lượng giáo dục và đào tạo",
            solutions: [
                "Đổi mới giáo dục theo hướng thực tiễn",
                "Đào tạo nghề và kỹ năng mềm",
                "Thu hút nhân tài và chuyên gia"
            ],
            icon: ""
        },
        {
            title: "Cải cách thể chế",
            description: "Cần tiếp tục cải cách bộ máy nhà nước",
            solutions: [
                "Nâng cao hiệu quả quản lý nhà nước",
                "Cải thiện môi trường kinh doanh",
                "Đấu tranh chống tham nhũng"
            ],
            icon: ""
        }
    ];

    const lessons = [
        {
            title: "Tính linh hoạt và sáng tạo",
            description: "Việt Nam đã biết vận dụng lý luận một cách linh hoạt, sáng tạo phù hợp với điều kiện cụ thể",
            icon: ""
        },
        {
            title: "Lấy dân làm gốc",
            description: "Mọi chính sách đều hướng tới lợi ích của nhân dân, lấy dân làm gốc",
            icon: ""
        },
        {
            title: "Kết hợp lý luận và thực tiễn",
            description: "Biết kết hợp giữa lý luận Mác-Lênin với thực tiễn Việt Nam",
            icon: "🔗"
        },
        {
            title: "Đổi mới liên tục",
            description: "Không ngừng đổi mới, cải tiến để phù hợp với thời đại",
            icon: ""
        }
    ];

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

                {/* Ý nghĩa quan trọng của việc xây dựng nền kinh tế XHCN */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border-l-4 border-indigo-400">
                        <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
                            Ý nghĩa quan trọng của việc xây dựng nền kinh tế xã hội chủ nghĩa
                        </h3>
                        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                            Việc xây dựng nền kinh tế xã hội chủ nghĩa, có ý nghĩa quan trọng cả về lý luận và thực tiễn đối với sự phát triển kinh tế - xã hội của Việt Nam
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Về lý luận */}
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl text-white font-bold">L</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-800">Về lý luận</h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <h5 className="font-bold text-blue-800 mb-2">1. Khẳng định con đường đúng đắn</h5>
                                        <p className="text-blue-700 text-sm">
                                            Xây dựng nền kinh tế XHCN ở Việt Nam bỏ qua chế độ TBCN chứng minh sự vận dụng sáng tạo chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh vào điều kiện thực tiễn của một nước xuất phát điểm thấp, từ thuộc địa nửa phong kiến đi lên.
                                        </p>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                        <h5 className="font-bold text-green-800 mb-2">2. Lý luận về kinh tế thị trường định hướng XHCN</h5>
                                        <p className="text-green-700 text-sm">
                                            Đây là đóng góp mới, phát triển lý luận Mác – Lênin trong điều kiện toàn cầu hóa và cách mạng KHCN hiện đại. Việt Nam đã chứng minh một mô hình kinh tế mới, kết hợp giữa cơ chế thị trường và định hướng XHCN.
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <h5 className="font-bold text-purple-800 mb-2">3. Bổ sung học thuyết quá độ</h5>
                                        <p className="text-purple-700 text-sm">
                                            Thực tiễn phát triển kinh tế hơn 30 năm đổi mới đã cung cấp cơ sở thực chứng cho học thuyết về "quá độ gián tiếp", khẳng định tính tất yếu và khả thi của con đường rút ngắn lên CNXH.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Về thực tiễn */}
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl text-white font-bold">T</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-orange-800">Về thực tiễn</h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h5 className="font-bold text-orange-800 mb-2">1. Phát triển lực lượng sản xuất</h5>
                                        <p className="text-orange-700 text-sm">
                                            Đổi mới kinh tế đã đưa Việt Nam từ tình trạng khủng hoảng, thiếu ăn thành nước có mức tăng trưởng kinh tế cao, đời sống nhân dân cải thiện rõ rệt.
                                        </p>
                                    </div>

                                    <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                                        <h5 className="font-bold text-cyan-800 mb-2">2. Xây dựng nền kinh tế nhiều thành phần</h5>
                                        <p className="text-cyan-700 text-sm">
                                            Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tập thể ngày càng được củng cố, đồng thời phát huy vai trò của kinh tế tư nhân, hội nhập kinh tế quốc tế.
                                        </p>
                                    </div>

                                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                                        <h5 className="font-bold text-pink-800 mb-2">3. Gắn tăng trưởng với tiến bộ, công bằng xã hội</h5>
                                        <p className="text-pink-700 text-sm">
                                            Chính sách an sinh, xóa đói giảm nghèo, giáo dục, y tế, phát triển con người toàn diện được chú trọng → bảo đảm mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
                                        </p>
                                    </div>

                                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                        <h5 className="font-bold text-emerald-800 mb-2">4. Nâng cao vị thế quốc tế</h5>
                                        <p className="text-emerald-700 text-sm">
                                            Việt Nam trở thành quốc gia có uy tín, là thành viên tích cực trong nhiều tổ chức quốc tế, chứng minh sức sống của mô hình phát triển kinh tế XHCN trong bối cảnh hội nhập.
                                        </p>
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
