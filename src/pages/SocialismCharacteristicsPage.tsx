const SocialismCharacteristicsPage = () => {
    const mainCharacteristics = [
        {
            title: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
            description: "Mục tiêu tổng quát, phản ánh bản chất và lý tưởng xã hội chủ nghĩa.",
            details: [
                "Kết hợp hài hòa giữa tăng trưởng kinh tế và công bằng xã hội",
                "Phát triển toàn diện trên các lĩnh vực: kinh tế, chính trị, văn hóa, xã hội",
                "Bảo đảm công bằng, tiến bộ xã hội và phúc lợi nhân dân",
                "Xây dựng đất nước văn minh, hiện đại, hội nhập"
            ],
            icon: "🌏",
            color: "from-red-500 to-yellow-500"
        },
        {
            title: "Do nhân dân làm chủ",
            description: "Nhân dân giữ vai trò chủ thể của quyền lực xã hội.",
            details: [
                "Mọi quyền lực thuộc về nhân dân",
                "Nhân dân tham gia quản lý nhà nước và xã hội",
                "Phát huy dân chủ trực tiếp và dân chủ đại diện",
                "Tăng cường đoàn kết và đồng thuận xã hội"
            ],
            icon: "👥",
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Nền kinh tế phát triển cao",
            description: "Dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ, phù hợp.",
            details: [
                "Phát triển kinh tế thị trường định hướng XHCN",
                "Ứng dụng khoa học, công nghệ hiện đại",
                "Kết hợp phát triển nhanh và bền vững",
                "Xây dựng quan hệ sản xuất tiến bộ, công bằng"
            ],
            icon: "🏭",
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            description: "Văn hóa vừa hiện đại, vừa kế thừa truyền thống dân tộc.",
            details: [
                "Tiếp thu tinh hoa văn hóa nhân loại",
                "Bảo tồn và phát huy giá trị văn hóa dân tộc",
                "Đấu tranh chống lại các tệ nạn, hủ tục",
                "Xây dựng con người mới XHCN"
            ],
            icon: "🎨",
            color: "from-orange-500 to-pink-500"
        },
        {
            title: "Con người có cuộc sống ấm no, tự do, hạnh phúc",
            description: "Mỗi người đều có điều kiện phát triển toàn diện.",
            details: [
                "Bảo đảm quyền con người, quyền công dân",
                "Nâng cao chất lượng cuộc sống, phúc lợi xã hội",
                "Cơ hội phát triển công bằng cho mọi người",
                "Hướng tới tự do, hạnh phúc bền vững"
            ],
            icon: "😊",
            color: "from-purple-500 to-fuchsia-500"
        },
        {
            title: "Các dân tộc bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển",
            description: "Củng cố đại đoàn kết toàn dân tộc.",
            details: [
                "Bảo đảm quyền bình đẳng giữa các dân tộc",
                "Tôn trọng bản sắc và văn hóa riêng",
                "Đoàn kết, tương trợ trong phát triển",
                "Không kỳ thị, phân biệt đối xử"
            ],
            icon: "🤝",
            color: "from-cyan-500 to-sky-500"
        },
        {
            title: "Nhà nước pháp quyền XHCN",
            description: "Của nhân dân, do nhân dân, vì nhân dân, do Đảng lãnh đạo.",
            details: [
                "Quyền lực thống nhất, có phân công, phối hợp và kiểm soát",
                "Pháp luật là tối thượng trong quản lý xã hội",
                "Nhà nước trong sạch, vững mạnh, hiệu lực, hiệu quả",
                "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam"
            ],
            icon: "⚖️",
            color: "from-gray-600 to-gray-800"
        },
        {
            title: "Quan hệ hữu nghị và hợp tác với các nước",
            description: "Đối ngoại hòa bình, hợp tác, phát triển.",
            details: [
                "Độc lập, tự chủ trong chính sách đối ngoại",
                "Đa dạng hóa, đa phương hóa quan hệ quốc tế",
                "Hợp tác bình đẳng, cùng có lợi",
                "Chủ động hội nhập quốc tế"
            ],
            icon: "🌐",
            color: "from-emerald-500 to-lime-500"
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
                        Đặc trưng bản chất của chủ nghĩa xã hội Việt Nam
                    </h1>
                    <p className="text-xl opacity-90">
                        Tám đặc trưng cơ bản định hình mô hình chủ nghĩa xã hội ở Việt Nam
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
            </div>
        </div>
    );
};

export default SocialismCharacteristicsPage;
