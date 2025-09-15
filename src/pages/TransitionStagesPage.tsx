import {useState} from 'react';

const TransitionStagesPage = () => {
    const [isCQ34Expanded, setIsCQ34Expanded] = useState(false);
    const [selectedStage, setSelectedStage] = useState<any>(null);
    const stages = [
        {
            id: 1,
            title: "Giai đoạn khôi phục kinh tế (1945-1954)",
            period: "1945 - 1954",
            description: "Khôi phục kinh tế sau chiến tranh, xây dựng cơ sở vật chất cho chế độ mới",
            keyPoints: [
                "Khôi phục sản xuất nông nghiệp và công nghiệp",
                "Cải cách ruộng đất (1946-1953)",
                "Xây dựng hệ thống tài chính, ngân hàng",
                "Phát triển giáo dục, y tế cơ bản"
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
                "Cải tạo nông nghiệp theo hướng tập thể hóa (HTX)",
                "Cải tạo công thương nghiệp tư bản tư nhân",
                "Xây dựng kinh tế quốc doanh (chủ đạo)",
                "Phát triển công nghiệp nặng (thép, điện, cơ khí)"
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
                "Thống nhất hai miền Nam - Bắc (1975)",
                "Cải tạo kinh tế miền Nam theo XHCN",
                "Xây dựng cơ sở hạ tầng cơ bản",
                "Phát triển công nghiệp hóa (tập trung quan liêu bao cấp)"
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
                "Chuyển sang nền kinh tế thị trường (Đại hội VI - 1986)",
                "Đa dạng hóa sở hữu (5 thành phần kinh tế)",
                "Hội nhập kinh tế quốc tế (WTO, ASEAN, CPTPP)",
                "Phát triển bền vững và hiện đại hóa"
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
        <div
            className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
                <div
                    className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Các giai đoạn quá độ lên chủ nghĩa xã hội
                    </h1>
                    <p className="text-xl opacity-90">
                        Quá trình phát triển từ chủ nghĩa tư bản lên chủ nghĩa xã hội ở Việt Nam
                    </p>
                </div>

                {/* Timeline */}
                <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Các giai đoạn phát triển</h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div
                            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full shadow-lg"></div>

                        {stages.map((stage, index) => (
                            <div
                                key={stage.id}
                                className="relative flex items-start mb-16 last:mb-0 animate-fade-in-up"
                                style={{animationDelay: `${0.3 + index * 0.1}s`}}
                            >
                                {/* Timeline Dot */}
                                <button
                                    onClick={() => setSelectedStage(stage)}
                                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white transform hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                                >
                                    {stage.id}
                                </button>

                                {/* Content Card */}
                                <div
                                    className="ml-8 flex-1 bg-white rounded-xl shadow-lg p-6Quá độ lên Chủ nghĩa Xã hội ở Việt Nam hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-800">{stage.title}</h3>
                                        <span
                                            className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full font-medium">
                                            {stage.period}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{stage.description}</p>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {stage.keyPoints.map((point, pointIndex) => (
                                            <div key={pointIndex}
                                                 className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                                <div
                                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${stage.color} mr-3 mt-1 flex-shrink-0`}></div>
                                                <span className="text-gray-700 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stage Detail Modal */}
                {selectedStage && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div
                            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
                            {/* Modal Header */}
                            <div className={`bg-gradient-to-r ${selectedStage.color} p-6 rounded-t-2xl text-white`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">{selectedStage.title}</h2>
                                        <span className="text-xl opacity-90">{selectedStage.period}</span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedStage(null)}
                                        className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Mô tả giai đoạn</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">{selectedStage.description}</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Các hoạt động chính</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {selectedStage.keyPoints.map((point: string, index: number) => (
                                            <div key={index}
                                                 className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                                <div
                                                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${selectedStage.color} mr-4 mt-1 flex-shrink-0`}></div>
                                                <span className="text-gray-700 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Details based on stage */}
                                {selectedStage.id === 1 && (
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-blue-800 mb-3">Bối cảnh lịch sử</h4>
                                        <p className="text-blue-700">
                                            Sau khi giành được độc lập năm 1945, Việt Nam phải đối mặt với nhiều thách
                                            thức:
                                            nền kinh tế bị tàn phá bởi chiến tranh, hệ thống tài chính chưa hoàn thiện,
                                            và cần xây dựng cơ sở vật chất cho chế độ mới. Giai đoạn này diễn ra trong
                                            bối cảnh
                                            kháng chiến chống Pháp (1946-1954).
                                        </p>
                                    </div>
                                )}

                                {selectedStage.id === 2 && (
                                    <div className="bg-green-50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-green-800 mb-3">Tầm quan trọng</h4>
                                        <p className="text-green-700">
                                            Giai đoạn này đặt nền móng cho việc xây dựng chủ nghĩa xã hội ở miền Bắc,
                                            tạo ra những thay đổi căn bản trong cơ cấu kinh tế và xã hội,
                                            chuẩn bị cho việc thống nhất đất nước sau này. Đây là giai đoạn xây dựng
                                            "hậu phương lớn" cho cuộc kháng chiến chống Mỹ.
                                        </p>
                                    </div>
                                )}

                                {selectedStage.id === 3 && (
                                    <div className="bg-purple-50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-purple-800 mb-3">Thách thức</h4>
                                        <p className="text-purple-700">
                                            Việc thống nhất hai miền với hai hệ thống kinh tế khác nhau tạo ra nhiều khó
                                            khăn.
                                            Mô hình tập trung quan liêu bao cấp bộc lộ nhiều hạn chế,
                                            dẫn đến khủng hoảng kinh tế - xã hội vào giữa thập niên 80.
                                            Lạm phát cao, sản xuất trì trệ, đời sống nhân dân khó khăn.
                                        </p>
                                    </div>
                                )}

                                {selectedStage.id === 4 && (
                                    <div className="bg-orange-50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-orange-800 mb-3">Thành tựu</h4>
                                        <p className="text-orange-700">
                                            Đổi mới đã đưa Việt Nam thoát khỏi khủng hoảng, đạt được tăng trưởng kinh tế
                                            cao (GDP tăng trưởng 6-7%/năm),
                                            cải thiện đời sống nhân dân, và hội nhập sâu rộng vào nền kinh tế thế giới
                                            trong khi vẫn giữ vững định hướng xã hội chủ nghĩa. Việt Nam trở thành nước
                                            có thu nhập trung bình.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Characteristics Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in-up"
                     style={{animationDelay: '1.1s'}}>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Đặc điểm của quá trình quá độ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {characteristics.map((char, index) => (
                            <div key={index}
                                 className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 animate-fade-in-up"
                                 style={{animationDelay: `${1.2 + index * 0.1}s`}}>
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-4">{char.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-800">{char.title}</h3>
                                </div>
                                <p className="text-gray-600">{char.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CQ3.4 - Các thành phần kinh tế */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in-up"
                     style={{animationDelay: '1.6s'}}>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 flex-1 mr-4">CQ3.4: Hãy khái quát các thành phần
                            kinh tế của Việt Nam trước năm 1975; các thành phần kinh tế Việt Nam trước năm 1986 và các
                            thành phần kinh tế của Việt Nam hiện nay để làm sáng tỏ thời kỳ quá độ về phương diện kinh
                            tế tất yếu tồn tại nền kinh tế nhiều thành phần.</h2>
                        <button
                            onClick={() => setIsCQ34Expanded(!isCQ34Expanded)}
                            className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                            title={isCQ34Expanded ? "Thu gọn nội dung" : "Mở rộng nội dung"}
                        >
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 ${isCQ34Expanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    {isCQ34Expanded && (
                        <div className="space-y-8">
                            {/* 1. Trước năm 1975 */}
                            <div
                                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-3">1️⃣</span>
                                    Trước năm 1975
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Miền Bắc */}
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="text-lg font-bold text-gray-800 mb-4">a) Miền Bắc (theo con đường
                                            XHCN)</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế quốc doanh:</strong> giữ vai trò chủ đạo.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế tập thể (hợp tác xã):</strong> phổ biến trong nông nghiệp, thủ công.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế cá thể, tiểu chủ:</strong> vẫn còn tồn tại, nhưng bị hạn chế.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế tư bản tư nhân:</strong> bị cải tạo, thu hẹp dần.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Miền Nam */}
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="text-lg font-bold text-gray-800 mb-4">b) Miền Nam (theo mô hình
                                            TBCN)</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế tư bản tư nhân:</strong> giữ vai trò chi phối.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế nhà nước:</strong> hạn chế, phụ thuộc chính quyền Sài Gòn.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế cá thể, tiểu chủ:</strong> tồn tại rộng rãi.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span><strong>Kinh tế có vốn đầu tư nước ngoài:</strong> do Mỹ và đồng minh áp đặt.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Giai đoạn 1975-1986 */}
                            <div
                                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                                <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-3">2️⃣</span>
                                    Giai đoạn 1975 – 1986 (sau thống nhất đất nước)
                                </h3>

                                <div className="bg-white p-4 rounded-lg mb-4">
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế quốc doanh:</strong> được coi là nền tảng duy nhất hợp pháp.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế tập thể (hợp tác xã):</strong> phát triển mạnh, được khuyến khích.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế cá thể, tiểu chủ:</strong> tồn tại nhưng không được coi trọng.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế tư bản tư nhân:</strong> gần như bị xoá bỏ.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế tư bản nhà nước:</strong> tồn tại rất hạn chế.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
                                    <p className="text-orange-800 font-medium">
                                        <strong>🔹 Đặc điểm nổi bật:</strong> Mô hình tập trung quan liêu bao cấp, chỉ
                                        coi trọng quốc doanh và tập thể.
                                        Tuy nhiên hiệu quả thấp, sản xuất trì trệ, đời sống khó khăn → dẫn đến khủng
                                        hoảng kinh tế – xã hội vào giữa thập niên 80.
                                    </p>
                                </div>
                            </div>

                            {/* 3. Hiện nay */}
                            <div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-3">3️⃣</span>
                                    Hiện nay (từ 1986 – nay)
                                </h3>

                                <div className="bg-white p-4 rounded-lg mb-4">
                                    <p className="text-gray-700 mb-4">
                                        Sau Đại hội VI (1986), Đảng khởi xướng công cuộc Đổi mới, hình thành nền kinh tế
                                        thị trường định hướng XHCN với nhiều thành phần:
                                    </p>

                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế nhà nước:</strong> giữ vai trò chủ đạo.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế tập thể:</strong> từng bước đổi mới, còn hạn chế nhưng vẫn là nền tảng.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế tư nhân:</strong> được khẳng định là một động lực quan trọng của nền kinh tế.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế cá thể, tiểu chủ:</strong> vẫn tồn tại phổ biến.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                            <span><strong>Kinh tế có vốn đầu tư nước ngoài (FDI):</strong> trở thành bộ phận cấu thành tất yếu trong hội nhập quốc tế.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                                    <p className="text-green-800 font-medium">
                                        <strong>🔹 Đặc điểm nổi bật:</strong> Kinh tế nhiều thành phần vận hành theo cơ
                                        chế thị trường nhưng có sự quản lý của Nhà nước,
                                        kết hợp mục tiêu tăng trưởng với công bằng xã hội, bảo đảm định hướng XHCN.
                                    </p>
                                </div>
                            </div>

                            {/* 4. Kết luận */}
                            <div
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-3">4️⃣</span>
                                    Kết luận: Tính tất yếu của nền kinh tế nhiều thành phần trong thời kỳ quá độ
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="text-lg font-bold text-gray-800 mb-3">Khách quan:</h4>
                                        <p className="text-gray-700">
                                            Do trình độ lực lượng sản xuất, sự tồn tại nhiều hình thức sở hữu, và xu thế
                                            hội nhập quốc tế.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="text-lg font-bold text-gray-800 mb-3">Thực tiễn:</h4>
                                        <p className="text-gray-700">
                                            Việc thừa nhận và phát triển kinh tế nhiều thành phần đã huy động được nhiều
                                            nguồn lực,
                                            tạo động lực cho phát triển, góp phần giữ vững định hướng XHCN trong quá
                                            trình đổi mới.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Key Insights */}
                <div
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 animate-fade-in-up"
                    style={{animationDelay: '1.8s'}}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Những điểm cần lưu ý</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div>
                                <h4 className="font-semibold text-gray-800">Tính đặc thù của Việt Nam</h4>
                                <p className="text-gray-600 text-sm">
                                    Quá trình quá độ ở Việt Nam có những đặc điểm riêng do điều kiện lịch sử, văn hóa và
                                    kinh tế đặc thù.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div>
                                <h4 className="font-semibold text-gray-800">Tính liên tục và phát triển</h4>
                                <p className="text-gray-600 text-sm">
                                    Các giai đoạn không tách biệt hoàn toàn mà có sự kế thừa và phát triển liên tục.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div>
                                <h4 className="font-semibold text-gray-800">Mục tiêu nhất quán</h4>
                                <p className="text-gray-600 text-sm">
                                    Dù có nhiều thay đổi về phương pháp, mục tiêu xây dựng chủ nghĩa xã hội vẫn nhất
                                    quán.
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
