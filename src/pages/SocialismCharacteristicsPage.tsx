const SocialismCharacteristicsPage = () => {
    const mainCharacteristics = [
        {
            title: "Chế độ sở hữu xã hội về tư liệu sản xuất",
            description: "Tư liệu sản xuất chủ yếu thuộc sở hữu toàn dân, sở hữu tập thể",
            details: [
                "Sở hữu toàn dân về đất đai, tài nguyên thiên nhiên",
                "Sở hữu tập thể trong hợp tác xã, tổ chức kinh tế",
                "Sở hữu tư nhân được tôn trọng và bảo vệ trong phạm vi pháp luật",
                "Đa dạng hóa các hình thức sở hữu phù hợp với từng ngành, lĩnh vực"
            ],
            icon: "",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa",
            description: "Kết hợp cơ chế thị trường với định hướng xã hội chủ nghĩa",
            details: [
                "Vận dụng các quy luật thị trường để phát triển kinh tế",
                "Nhà nước điều tiết, quản lý nền kinh tế",
                "Bảo đảm công bằng xã hội và phúc lợi cho nhân dân",
                "Phát triển bền vững, bảo vệ môi trường"
            ],
            icon: "",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Nhà nước pháp quyền xã hội chủ nghĩa",
            description: "Nhà nước của nhân dân, do nhân dân, vì nhân dân",
            details: [
                "Quyền lực nhà nước thuộc về nhân dân",
                "Pháp luật là công cụ quản lý xã hội",
                "Bảo đảm quyền con người, quyền công dân",
                "Tổ chức bộ máy nhà nước hiệu quả, trong sạch"
            ],
            icon: "",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Văn hóa xã hội chủ nghĩa",
            description: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            details: [
                "Kế thừa và phát huy giá trị văn hóa truyền thống",
                "Tiếp thu tinh hoa văn hóa nhân loại",
                "Đấu tranh chống các tệ nạn xã hội",
                "Xây dựng con người mới xã hội chủ nghĩa"
            ],
            icon: "",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Xã hội công bằng, dân chủ, văn minh",
            description: "Xây dựng xã hội mà mọi người đều có cơ hội phát triển",
            details: [
                "Công bằng trong phân phối thu nhập",
                "Dân chủ trong mọi lĩnh vực đời sống",
                "Văn minh trong ứng xử, giao tiếp",
                "Đoàn kết, tương trợ giúp đỡ lẫn nhau"
            ],
            icon: "",
            color: "from-red-500 to-red-600"
        },
        {
            title: "Quan hệ quốc tế hòa bình, hữu nghị",
            description: "Đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác",
            details: [
                "Độc lập, tự chủ trong chính sách đối ngoại",
                "Hòa bình, hữu nghị với tất cả các nước",
                "Hợp tác cùng có lợi, cùng phát triển",
                "Tích cực tham gia các tổ chức quốc tế"
            ],
            icon: "",
            color: "from-cyan-500 to-cyan-600"
        }
    ];

    const principles = [
        {
            title: "Nguyên tắc tập trung dân chủ",
            description: "Kết hợp tập trung với dân chủ trong tổ chức và hoạt động",
            icon: "🎯"
        },
        {
            title: "Nguyên tắc pháp quyền",
            description: "Mọi hoạt động đều tuân theo pháp luật",
            icon: "📜"
        },
        {
            title: "Nguyên tắc công bằng xã hội",
            description: "Bảo đảm công bằng trong phân phối và cơ hội phát triển",
            icon: "⚖️"
        },
        {
            title: "Nguyên tắc đoàn kết dân tộc",
            description: "Đoàn kết toàn dân tộc, không phân biệt thành phần",
            icon: "🤝"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Đặc trưng bản chất của chủ nghĩa xã hội
                    </h1>
                    <p className="text-xl opacity-90">
                        Những đặc điểm cơ bản, cốt lõi phân biệt chủ nghĩa xã hội với các chế độ khác
                    </p>
                </div>

                {/* Main Characteristics */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Các đặc trưng chính</h2>
                    <div className="space-y-8">
                        {mainCharacteristics.map((characteristic, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className={`bg-gradient-to-r ${characteristic.color} p-6 text-white`}>
                                    <div className="flex items-center mb-3">
                                        <span className="text-4xl mr-4">{characteristic.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold">{characteristic.title}</h3>
                                            <p className="text-lg opacity-90">{characteristic.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {characteristic.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <span className="text-blue-500 mt-1 font-bold">•</span>
                                                <span className="text-gray-700">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Principles Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Các nguyên tắc cơ bản</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {principles.map((principle, index) => (
                            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border-l-4 border-blue-500">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-4">{principle.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-800">{principle.title}</h3>
                                </div>
                                <p className="text-gray-600">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">So sánh với các chế độ khác</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tiêu chí</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-red-600">Chủ nghĩa Xã hội</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-600">Chủ nghĩa Tư bản</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-600">Chế độ Phong kiến</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-3 font-medium">Sở hữu tư liệu sản xuất</td>
                                    <td className="border border-gray-300 px-4 py-3">Đa dạng, chủ yếu là sở hữu xã hội</td>
                                    <td className="border border-gray-300 px-4 py-3">Chủ yếu là sở hữu tư nhân</td>
                                    <td className="border border-gray-300 px-4 py-3">Sở hữu của giai cấp phong kiến</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3 font-medium">Quyền lực nhà nước</td>
                                    <td className="border border-gray-300 px-4 py-3">Thuộc về nhân dân</td>
                                    <td className="border border-gray-300 px-4 py-3">Thuộc về giai cấp tư sản</td>
                                    <td className="border border-gray-300 px-4 py-3">Thuộc về vua và quý tộc</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-3 font-medium">Công bằng xã hội</td>
                                    <td className="border border-gray-300 px-4 py-3">Cao, chú trọng phúc lợi xã hội</td>
                                    <td className="border border-gray-300 px-4 py-3">Thấp, chênh lệch giàu nghèo lớn</td>
                                    <td className="border border-gray-300 px-4 py-3">Rất thấp, phân tầng cứng nhắc</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3 font-medium">Phát triển kinh tế</td>
                                    <td className="border border-gray-300 px-4 py-3">Bền vững, cân bằng</td>
                                    <td className="border border-gray-300 px-4 py-3">Tăng trưởng nhanh nhưng không bền vững</td>
                                    <td className="border border-gray-300 px-4 py-3">Chậm, dựa trên nông nghiệp</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Ý nghĩa và tầm quan trọng</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl">🎯</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Định hướng phát triển</h4>
                                <p className="text-gray-600 text-sm">
                                    Các đặc trưng bản chất là kim chỉ nam cho việc xây dựng và phát triển xã hội chủ nghĩa.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-500 text-xl">🔍</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Tiêu chí đánh giá</h4>
                                <p className="text-gray-600 text-sm">
                                    Dùng để đánh giá mức độ tiến bộ và phát triển của xã hội theo hướng xã hội chủ nghĩa.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-purple-500 text-xl">⚖️</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Cân bằng lợi ích</h4>
                                <p className="text-gray-600 text-sm">
                                    Bảo đảm sự cân bằng giữa phát triển kinh tế và công bằng xã hội.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialismCharacteristicsPage;
