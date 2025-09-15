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

                {/* Recent Practical Examples Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Ví dụ thực tiễn gần đây</h2>
                    <div className="space-y-8">
                        {/* Poverty Reduction */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                                <div className="flex items-center mb-3">
                                    <span className="text-4xl mr-4">📉</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">Giảm nghèo bền vững, nghèo đa chiều</h3>
                                        <p className="text-lg opacity-90">Thành tựu ấn tượng trong công cuộc xóa đói giảm nghèo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <p className="text-gray-700 font-medium">
                                                Việt Nam đã giảm tỷ lệ hộ nghèo đa chiều xuống còn khoảng <span className="font-bold text-green-600">1,93%</span> vào cuối năm 2024.
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <a href="https://tapchixaydung.vn" target="_blank" rel="noopener noreferrer"
                                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors">
                                                    tapchixaydung.vn
                                                </a>
                                                <a href="https://hcmcpv.org.vn" target="_blank" rel="noopener noreferrer"
                                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors">
                                                    hcmcpv.org.vn
                                                </a>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-gray-700">
                                                Kết quả này vượt mục tiêu đặt ra trong Nghị quyết Đại hội XIII của Đảng và chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2021-2025.
                                            </p>
                                            <div className="mt-3">
                                                <a href="https://baolaocai.vn" target="_blank" rel="noopener noreferrer"
                                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">
                                                    Báo Lào Cai điện tử
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GDP Growth */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                                <div className="flex items-center mb-3">
                                    <span className="text-4xl mr-4">📈</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">Tăng trưởng GDP, thu nhập người dân được cải thiện rõ rệt</h3>
                                        <p className="text-lg opacity-90">Những con số ấn tượng về phát triển kinh tế</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <p className="text-gray-700 font-medium">
                                            GDP bình quân đầu người đạt khoảng <span className="font-bold text-blue-600">4.700 USD</span> vào năm 2024.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://tapchixaydung.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">
                                                tapchixaydung.vn
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                        <p className="text-gray-700 font-medium">
                                            GDP năm 2024 khoảng <span className="font-bold text-purple-600">476,3 tỷ USD</span>.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://mega.vietnamplus.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors">
                                                Báo mega.vietnamplus.vn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stable Growth */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                                <div className="flex items-center mb-3">
                                    <span className="text-4xl mr-4">🔄</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">Tăng trưởng ổn định và phục hồi sau đại dịch</h3>
                                        <p className="text-lg opacity-90">Khả năng phục hồi mạnh mẽ sau COVID-19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                        <p className="text-gray-700">
                                            OECD đánh giá năm 2024 Việt Nam tăng trưởng GDP mạnh, phục hồi tốt sau đại dịch, xuất khẩu hàng hóa-dịch vụ tăng khoảng <span className="font-bold text-purple-600">15,5%</span> so với năm trước.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://baodautu.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors">
                                                baodautu.vn
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                        <p className="text-gray-700">
                                            Tỷ lệ thất nghiệp giảm xuống mức thấp lịch sử khoảng <span className="font-bold text-orange-600">2,2%</span> vào tháng 3/2025.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://baodautu.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-colors">
                                                baodautu.vn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Economic Restructuring */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                                <div className="flex items-center mb-3">
                                    <span className="text-4xl mr-4">🏭</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">Chuyển dịch cơ cấu kinh tế & nâng cao năng suất lao động</h3>
                                        <p className="text-lg opacity-90">Chuyển đổi cơ cấu kinh tế theo hướng hiện đại</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                        <p className="text-gray-700">
                                            Các ngành công nghiệp và dịch vụ ngày càng chiếm tỷ trọng lớn hơn trong cơ cấu GDP, giảm phụ thuộc vào nông nghiệp.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://mega.vietnamplus.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-colors">
                                                Báo mega.vietnamplus.vn
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                        <p className="text-gray-700">
                                            Lao động chuyển từ các ngành nông nghiệp sang công nghiệp – xây dựng và dịch vụ; năng suất lao động được cải thiện rõ.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://mega.vietnamplus.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm hover:bg-teal-200 transition-colors">
                                                Báo mega.vietnamplus.vn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* International Integration */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                                <div className="flex items-center mb-3">
                                    <span className="text-4xl mr-4">🌍</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">Hội nhập quốc tế & phát triển xuất khẩu</h3>
                                        <p className="text-lg opacity-90">Vị thế ngày càng cao trên trường quốc tế</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                        <p className="text-gray-700">
                                            Xuất nhập khẩu hàng hóa của Việt Nam đạt kim ngạch lớn, FDI vẫn thu hút mạnh.
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <a href="https://tapchixaydung.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm hover:bg-teal-200 transition-colors">
                                                tapchixaydung.vn
                                            </a>
                                            <a href="https://mega.vietnamplus.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm hover:bg-teal-200 transition-colors">
                                                Báo mega.vietnamplus.vn
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                        <p className="text-gray-700">
                                            Việt Nam được đánh giá cao là <span className="font-bold text-indigo-600">"điểm sáng"</span> trong giảm nghèo toàn cầu bất chấp ảnh hưởng của COVID-19 và suy thoái kinh tế thế giới.
                                        </p>
                                        <div className="mt-3">
                                            <a href="https://baolaocai.vn" target="_blank" rel="noopener noreferrer"
                                                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition-colors">
                                                Báo Lào Cai điện tử
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
