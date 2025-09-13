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
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-orange-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Thực tiễn xây dựng chủ nghĩa xã hội ở Việt Nam
                    </h1>
                    <p className="text-xl opacity-90">
                        Liên hệ lý luận với thực tiễn, từ kinh nghiệm của Việt Nam trong quá trình quá độ lên CNXH
                    </p>
                </div>

                {/* Achievements Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Thành tựu đạt được</h2>
                    <div className="space-y-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                                    <div className="flex items-center mb-3">
                                        <span className="text-4xl mr-4">{achievement.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold">{achievement.title}</h3>
                                            <p className="text-lg opacity-90">{achievement.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {achievement.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <span className="text-green-500 mt-1 font-bold">✓</span>
                                                <span className="text-gray-700">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenges Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Thách thức và giải pháp</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-4">{challenge.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{challenge.title}</h3>
                                        <p className="text-sm text-gray-600">{challenge.description}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-700 mb-2">Giải pháp:</h4>
                                    <ul className="space-y-1">
                                        {challenge.solutions.map((solution, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                                <span className="text-blue-500 mt-1">•</span>
                                                <span>{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lessons Learned */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Bài học kinh nghiệm</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {lessons.map((lesson, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-500">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-4">{lesson.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
                                </div>
                                <p className="text-gray-600">{lesson.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vietnam's Path */}
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-8 border border-yellow-200 mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Con đường riêng của Việt Nam</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-red-500 text-xl">🇻🇳</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Đặc thù Việt Nam</h4>
                                <p className="text-gray-600 text-sm">
                                    Việt Nam không sao chép mô hình của nước khác mà tìm ra con đường riêng phù hợp với điều kiện của mình.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-500 text-xl">🎯</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Mục tiêu nhất quán</h4>
                                <p className="text-gray-600 text-sm">
                                    Dù có nhiều thay đổi về phương pháp, mục tiêu xây dựng xã hội dân chủ, công bằng, văn minh vẫn nhất quán.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl">📈</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Phát triển bền vững</h4>
                                <p className="text-gray-600 text-sm">
                                    Chú trọng phát triển bền vững, cân bằng giữa tăng trưởng kinh tế và công bằng xã hội.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Future Outlook */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Triển vọng tương lai</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Mục tiêu đến 2030:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Trở thành nước công nghiệp theo hướng hiện đại</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Thu nhập trung bình cao</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Phát triển con người toàn diện</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Định hướng đến 2045:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-500">🎯</span>
                                    <span>Trở thành nước phát triển, thu nhập cao</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-500">🎯</span>
                                    <span>Hoàn thiện thể chế xã hội chủ nghĩa</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-500">🎯</span>
                                    <span>Đạt được mục tiêu dân giàu, nước mạnh</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VietnamPracticePage;
