const TransitionStagesPage = () => {
    const stages = [
        {
            id: 1,
            title: "Giai đoạn khôi phục kinh tế (1945-1954)",
            period: "1945 - 1954",
            description: "Khôi phục kinh tế sau chiến tranh, xây dựng cơ sở vật chất cho chế độ mới",
            keyPoints: [
                "Khôi phục sản xuất nông nghiệp và công nghiệp",
                "Cải cách ruộng đất",
                "Xây dựng hệ thống tài chính, ngân hàng",
                "Phát triển giáo dục, y tế"
            ],
            color: "from-blue-500 to-blue-600",
            icon: ""
        },
        {
            id: 2,
            title: "Giai đoạn cải tạo xã hội chủ nghĩa (1954-1975)",
            period: "1954 - 1975",
            description: "Cải tạo nền kinh tế theo hướng xã hội chủ nghĩa ở miền Bắc",
            keyPoints: [
                "Cải tạo nông nghiệp theo hướng tập thể hóa",
                "Cải tạo công thương nghiệp tư bản tư nhân",
                "Xây dựng kinh tế quốc doanh",
                "Phát triển công nghiệp nặng"
            ],
            color: "from-green-500 to-green-600",
            icon: ""
        },
        {
            id: 3,
            title: "Giai đoạn thống nhất và xây dựng (1975-1986)",
            period: "1975 - 1986",
            description: "Thống nhất đất nước và xây dựng nền kinh tế xã hội chủ nghĩa trên toàn quốc",
            keyPoints: [
                "Thống nhất hai miền Nam - Bắc",
                "Cải tạo kinh tế miền Nam",
                "Xây dựng cơ sở hạ tầng",
                "Phát triển công nghiệp hóa"
            ],
            color: "from-purple-500 to-purple-600",
            icon: ""
        },
        {
            id: 4,
            title: "Giai đoạn đổi mới (1986-nay)",
            period: "1986 - Nay",
            description: "Đổi mới toàn diện, xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa",
            keyPoints: [
                "Chuyển sang nền kinh tế thị trường",
                "Đa dạng hóa sở hữu",
                "Hội nhập kinh tế quốc tế",
                "Phát triển bền vững"
            ],
            color: "from-orange-500 to-orange-600",
            icon: ""
        }
    ];

    const characteristics = [
        {
            title: "Tính chất quá độ",
            description: "Quá trình chuyển đổi từ chế độ cũ sang chế độ mới diễn ra từng bước, không thể nóng vội",
            icon: ""
        },
        {
            title: "Tính chất phức tạp",
            description: "Tồn tại nhiều thành phần kinh tế, nhiều giai cấp, nhiều mâu thuẫn cần giải quyết",
            icon: ""
        },
        {
            title: "Tính chất lâu dài",
            description: "Quá trình quá độ diễn ra trong thời gian dài, cần kiên trì và bền bỉ",
            icon: ""
        },
        {
            title: "Tính chất sáng tạo",
            description: "Cần sáng tạo ra những hình thức, phương pháp phù hợp với điều kiện cụ thể",
            icon: ""
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Các giai đoạn quá độ lên chủ nghĩa xã hội
                    </h1>
                    <p className="text-xl opacity-90">
                        Quá trình phát triển từ chủ nghĩa tư bản lên chủ nghĩa xã hội ở Việt Nam
                    </p>
                </div>

                {/* Timeline */}
                <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Timeline các giai đoạn</h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>

                        {stages.map((stage, index) => (
                            <div key={stage.id} className="relative flex items-start mb-8 animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-current rounded-full z-10 animate-bounce-in"
                                    style={{
                                        color: stage.color.includes('blue') ? '#3b82f6' :
                                            stage.color.includes('green') ? '#10b981' :
                                                stage.color.includes('purple') ? '#8b5cf6' : '#f97316',
                                        animationDelay: `${0.4 + index * 0.2}s`
                                    }}>
                                </div>

                                {/* Content */}
                                <div className="ml-16 bg-white rounded-xl shadow-lg p-6 border-l-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-left"
                                    style={{
                                        borderLeftColor: stage.color.includes('blue') ? '#3b82f6' :
                                            stage.color.includes('green') ? '#10b981' :
                                                stage.color.includes('purple') ? '#8b5cf6' : '#f97316',
                                        animationDelay: `${0.5 + index * 0.2}s`
                                    }}>
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">{stage.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">{stage.title}</h3>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {stage.period}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{stage.description}</p>
                                    <div className="grid md:grid-cols-2 gap-2">
                                        {stage.keyPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <span className="text-blue-500 mt-1">•</span>
                                                <span className="text-sm text-gray-600">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Characteristics Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Đặc điểm của quá trình quá độ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {characteristics.map((char, index) => (
                            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-4">{char.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-800">{char.title}</h3>
                                </div>
                                <p className="text-gray-600">{char.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Những điểm cần lưu ý</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Tính đặc thù của Việt Nam</h4>
                                <p className="text-gray-600 text-sm">
                                    Quá trình quá độ ở Việt Nam có những đặc điểm riêng do điều kiện lịch sử, văn hóa và kinh tế đặc thù.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-500 text-xl">📈</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Tính liên tục và phát triển</h4>
                                <p className="text-gray-600 text-sm">
                                    Các giai đoạn không tách biệt hoàn toàn mà có sự kế thừa và phát triển liên tục.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl">🎯</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Mục tiêu nhất quán</h4>
                                <p className="text-gray-600 text-sm">
                                    Dù có nhiều thay đổi về phương pháp, mục tiêu xây dựng chủ nghĩa xã hội vẫn nhất quán.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransitionStagesPage;
