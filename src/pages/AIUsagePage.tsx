const AIUsagePage = () => {
    const aiTools = [
        {
            tool: "Claude Sonnet 4 (Anthropic)",
            purpose: "Hỗ trợ thiết kế và phát triển website",
            usage: "Tạo code React, TypeScript, Tailwind CSS cho các component và page",
            prompt: "Tạo website về chủ đề quá độ lên chủ nghĩa xã hội ở Việt Nam với React và Tailwind CSS",
            result: "Cấu trúc website hoàn chỉnh với Sidebar, 4 trang chính, styling đẹp mắt",
            editing: "Sinh viên chỉnh sửa nội dung, bổ sung thông tin, cải thiện UI/UX"
        },
        {
            tool: "Tailwind CSS Documentation",
            purpose: "Tham khảo styling và layout",
            usage: "Sử dụng utility classes để tạo giao diện responsive và đẹp mắt",
            prompt: "Tạo gradient backgrounds, card layouts, responsive grids",
            result: "Giao diện hiện đại với màu sắc hài hòa và responsive design",
            editing: "Sinh viên tùy chỉnh màu sắc, spacing, và hiệu ứng animation"
        }
    ];

    const verificationSources = [
        {
            source: "Giáo trình Chủ nghĩa xã hội khoa học",
            content: "Lý thuyết về quá độ lên CNXH, các giai đoạn phát triển",
            usage: "Làm cơ sở lý luận cho nội dung các trang"
        },
        {
            source: "Văn kiện Đại hội Đảng XIII",
            content: "Định hướng phát triển đất nước đến 2030, 2045",
            usage: "Bổ sung thông tin về mục tiêu và triển vọng tương lai"
        },
        {
            source: "Báo cáo của Bộ Kế hoạch và Đầu tư",
            content: "Thành tựu kinh tế - xã hội của Việt Nam",
            usage: "Số liệu thống kê về tăng trưởng, xóa đói giảm nghèo"
        },
        {
            source: "Nghị quyết Trung ương về đổi mới",
            content: "Quá trình đổi mới và xây dựng nền kinh tế thị trường định hướng XHCN",
            usage: "Phân tích giai đoạn đổi mới 1986-nay"
        }
    ];

    const academicIntegrity = {
        commitment: "Chúng tôi cam kết rằng AI chỉ đóng vai trò hỗ trợ kỹ thuật trong việc tạo code và thiết kế giao diện. Toàn bộ nội dung học thuật, phân tích lý luận và liên kết thực tiễn đều do sinh viên nghiên cứu, biên soạn và chịu trách nhiệm.",
        aiOutput: [
            "Code HTML, CSS, TypeScript cho giao diện",
            "Cấu trúc component React",
            "Styling với Tailwind CSS",
            "Layout và responsive design"
        ],
        studentWork: [
            "Nội dung lý luận về quá độ CNXH",
            "Phân tích các giai đoạn phát triển của Việt Nam",
            "Đặc trưng bản chất của CNXH",
            "Liên hệ thực tiễn với tình hình Việt Nam",
            "Thiết kế quiz tương tác và nội dung câu hỏi",
            "Bổ sung dẫn chứng từ nguồn chính thống"
        ],
        verification: "Tất cả thông tin được kiểm chứng qua giáo trình LLCT, văn kiện Đảng và báo cáo chính thức của các cơ quan nhà nước."
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Minh bạch về sử dụng AI
                    </h1>
                    <p className="text-xl opacity-90">
                        Báo cáo chi tiết về việc ứng dụng AI có trách nhiệm trong dự án
                    </p>
                </div>

                {/* AI Tools Usage */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Công cụ AI được sử dụng</h2>
                    <div className="space-y-6">
                        {aiTools.map((tool, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{tool.tool}</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-medium text-gray-700">Mục đích:</h4>
                                                <p className="text-gray-600">{tool.purpose}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-700">Cách sử dụng:</h4>
                                                <p className="text-gray-600">{tool.usage}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-medium text-gray-700">Prompt chính:</h4>
                                                <p className="text-gray-600 bg-gray-50 p-2 rounded">{tool.prompt}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-700">Kết quả AI:</h4>
                                                <p className="text-gray-600">{tool.result}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-700">Phần sinh viên chỉnh sửa:</h4>
                                                <p className="text-gray-600">{tool.editing}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Verification Sources */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Nguồn kiểm chứng thông tin</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {verificationSources.map((source, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{source.source}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <h4 className="font-medium text-gray-700">Nội dung:</h4>
                                        <p className="text-gray-600 text-sm">{source.content}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Cách sử dụng:</h4>
                                        <p className="text-gray-600 text-sm">{source.usage}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Academic Integrity */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Cam kết liêm chính học thuật</h2>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-3">📝 Cam kết của nhóm</h3>
                        <p className="text-green-700">{academicIntegrity.commitment}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3">🤖 Output từ AI</h3>
                            <ul className="space-y-2">
                                {academicIntegrity.aiOutput.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span className="text-blue-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3">👨‍🎓 Công việc của sinh viên</h3>
                            <ul className="space-y-2">
                                {academicIntegrity.studentWork.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-purple-500 mt-1">•</span>
                                        <span className="text-purple-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">✅ Kiểm chứng nguồn</h3>
                        <p className="text-yellow-700">{academicIntegrity.verification}</p>
                    </div>
                </div>

                {/* Creative Application */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Ứng dụng sáng tạo AI</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sáng tạo trong thiết kế:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Gradient backgrounds đẹp mắt</li>
                                <li>• Icon với text labels sinh động</li>
                                <li>• Quiz tương tác với scoring system</li>
                                <li>• Responsive design cho mọi thiết bị</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sáng tạo trong nội dung:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Timeline tương tác cho các giai đoạn</li>
                                <li>• Bảng so sánh với các chế độ khác</li>
                                <li>• Card layout với thông tin chi tiết</li>
                                <li>• Trang minh bạch AI usage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIUsagePage;
