import { useState } from 'react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questions: Question[] = [
        {
            id: 1,
            question: "Giai đoạn nào trong quá trình quá độ lên CNXH ở Việt Nam diễn ra từ 1945-1954?",
            options: [
                "Giai đoạn khôi phục kinh tế",
                "Giai đoạn cải tạo xã hội chủ nghĩa",
                "Giai đoạn thống nhất và xây dựng",
                "Giai đoạn đổi mới"
            ],
            correctAnswer: 0,
            explanation: "Giai đoạn 1945-1954 là giai đoạn khôi phục kinh tế sau chiến tranh, xây dựng cơ sở vật chất cho chế độ mới."
        },
        {
            id: 2,
            question: "Đặc trưng bản chất nào của CNXH được thể hiện qua 'Chế độ sở hữu xã hội về tư liệu sản xuất'?",
            options: [
                "Nền kinh tế thị trường định hướng XHCN",
                "Nhà nước pháp quyền xã hội chủ nghĩa",
                "Chế độ sở hữu đa dạng với sở hữu xã hội chủ đạo",
                "Văn hóa xã hội chủ nghĩa"
            ],
            correctAnswer: 2,
            explanation: "Chế độ sở hữu xã hội về tư liệu sản xuất là đặc trưng cơ bản, thể hiện qua sở hữu đa dạng với sở hữu xã hội chủ đạo."
        },
        {
            id: 3,
            question: "Thành tựu nào của Việt Nam trong quá trình xây dựng CNXH được đánh giá là ấn tượng nhất?",
            options: [
                "Tăng trưởng kinh tế cao",
                "Xóa đói giảm nghèo thành công",
                "Phát triển giáo dục và y tế",
                "Tất cả các ý trên"
            ],
            correctAnswer: 3,
            explanation: "Tất cả các thành tựu trên đều là những thành công ấn tượng của Việt Nam trong quá trình xây dựng CNXH."
        },
        {
            id: 4,
            question: "Nguyên tắc nào được coi là cơ bản trong quá trình quá độ lên CNXH?",
            options: [
                "Nguyên tắc tập trung dân chủ",
                "Nguyên tắc pháp quyền",
                "Nguyên tắc công bằng xã hội",
                "Tất cả các nguyên tắc trên"
            ],
            correctAnswer: 3,
            explanation: "Tất cả các nguyên tắc trên đều là những nguyên tắc cơ bản trong quá trình quá độ lên CNXH."
        },
        {
            id: 5,
            question: "Mục tiêu của Việt Nam đến năm 2030 trong quá trình xây dựng CNXH là gì?",
            options: [
                "Trở thành nước công nghiệp theo hướng hiện đại",
                "Đạt thu nhập trung bình cao",
                "Phát triển con người toàn diện",
                "Tất cả các mục tiêu trên"
            ],
            correctAnswer: 3,
            explanation: "Đến năm 2030, Việt Nam phấn đấu đạt tất cả các mục tiêu trên trong quá trình xây dựng CNXH."
        },
        {
            id: 6,
            question: "Giai đoạn đổi mới ở Việt Nam bắt đầu từ năm nào?",
            options: [
                "1980",
                "1986",
                "1990",
                "1995"
            ],
            correctAnswer: 1,
            explanation: "Giai đoạn đổi mới ở Việt Nam bắt đầu từ năm 1986 với Đại hội VI của Đảng Cộng sản Việt Nam."
        },
        {
            id: 7,
            question: "Đặc trưng nào của CNXH thể hiện qua 'Nhà nước pháp quyền xã hội chủ nghĩa'?",
            options: [
                "Quyền lực nhà nước thuộc về nhân dân",
                "Pháp luật là công cụ quản lý xã hội",
                "Bảo đảm quyền con người, quyền công dân",
                "Tất cả các ý trên"
            ],
            correctAnswer: 3,
            explanation: "Nhà nước pháp quyền xã hội chủ nghĩa bao gồm tất cả các đặc trưng trên, thể hiện tính dân chủ và pháp quyền."
        },
        {
            id: 8,
            question: "Thành tựu nào của Việt Nam trong xóa đói giảm nghèo được thế giới đánh giá cao?",
            options: [
                "Tỷ lệ nghèo giảm từ 60% xuống dưới 3%",
                "Chương trình xóa đói giảm nghèo toàn diện",
                "Phát triển cơ sở hạ tầng nông thôn",
                "Tất cả các ý trên"
            ],
            correctAnswer: 3,
            explanation: "Việt Nam đã đạt được tất cả các thành tựu trên trong công cuộc xóa đói giảm nghèo, được thế giới công nhận."
        },
        {
            id: 9,
            question: "Nguyên tắc 'Tập trung dân chủ' trong CNXH có nghĩa là gì?",
            options: [
                "Kết hợp tập trung với dân chủ trong tổ chức và hoạt động",
                "Chỉ có tập trung mà không có dân chủ",
                "Chỉ có dân chủ mà không có tập trung",
                "Tập trung quyền lực vào một người"
            ],
            correctAnswer: 0,
            explanation: "Nguyên tắc tập trung dân chủ là sự kết hợp hài hòa giữa tập trung và dân chủ trong tổ chức và hoạt động."
        },
        {
            id: 10,
            question: "Mục tiêu của Việt Nam đến năm 2045 là gì?",
            options: [
                "Trở thành nước phát triển, thu nhập cao",
                "Hoàn thiện thể chế xã hội chủ nghĩa",
                "Đạt được mục tiêu dân giàu, nước mạnh",
                "Tất cả các mục tiêu trên"
            ],
            correctAnswer: 3,
            explanation: "Đến năm 2045, Việt Nam phấn đấu đạt tất cả các mục tiêu trên, trở thành nước phát triển theo định hướng xã hội chủ nghĩa."
        }
    ];

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResult(false);
        setQuizCompleted(false);
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return "Xuất sắc! Bạn có hiểu biết sâu sắc về quá độ CNXH ở Việt Nam! 🎉";
        if (percentage >= 60) return "Tốt! Bạn đã nắm được những kiến thức cơ bản! 👍";
        if (percentage >= 40) return "Khá! Hãy ôn tập thêm để hiểu sâu hơn! 📚";
        return "Cần cố gắng thêm! Hãy xem lại nội dung website! 💪";
    };

    if (quizCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-25 animate-pulse"></div>
                </div>
                <div className="relative z-10 p-8 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
                        <h1 className="text-4xl font-bold mb-4">Kết quả Quiz</h1>
                        <div className="text-6xl mb-4">{score}/{questions.length}</div>
                        <p className="text-xl mb-6">{getScoreMessage()}</p>
                        <button
                            onClick={resetQuiz}
                            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Làm lại Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
            </div>
            <div className="relative z-10 p-8 max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-down">
                    <h1 className="text-4xl font-bold mb-4">
                        Quiz tương tác: Quá độ lên CNXH ở Việt Nam
                    </h1>
                    <p className="text-xl opacity-90">
                        Kiểm tra kiến thức của bạn về chủ đề này
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm">Câu {currentQuestion + 1}/{questions.length}</span>
                        <div className="w-32 bg-white/20 rounded-full h-2">
                            <div
                                className="bg-white h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Question */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-6 transform hover:scale-102 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={showResult}
                                className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${selectedAnswer === index
                                    ? showResult
                                        ? index === questions[currentQuestion].correctAnswer
                                            ? 'bg-green-100 border-2 border-green-500 text-green-800'
                                            : 'bg-red-100 border-2 border-red-500 text-red-800'
                                        : 'bg-blue-100 border-2 border-blue-500 text-blue-800'
                                    : showResult && index === questions[currentQuestion].correctAnswer
                                        ? 'bg-green-100 border-2 border-green-500 text-green-800'
                                        : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                <span className="font-medium mr-3">
                                    {String.fromCharCode(65 + index)}.
                                </span>
                                {option}
                            </button>
                        ))}
                    </div>

                    {selectedAnswer !== null && !showResult && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleShowResult}
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                            >
                                Xem kết quả
                            </button>
                        </div>
                    )}

                    {showResult && (
                        <div className="mt-6 p-4 rounded-lg bg-gray-50">
                            <h3 className="font-semibold text-gray-800 mb-2">
                                {selectedAnswer === questions[currentQuestion].correctAnswer
                                    ? "✅ Chính xác!"
                                    : "❌ Sai rồi!"}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {questions[currentQuestion].explanation}
                            </p>
                            <button
                                onClick={handleNextQuestion}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả cuối"}
                            </button>
                        </div>
                    )}
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Mẹo học tập:</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>• Đọc kỹ nội dung các trang trước khi làm quiz</li>
                        <li>• Chú ý đến các giai đoạn và đặc trưng quan trọng</li>
                        <li>• Liên hệ với thực tiễn Việt Nam để hiểu sâu hơn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
