const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Giả lập cơ sở dữ liệu từ điển
const dictionary = {
    "a": {
    meaning: "hehe",
    pronunciation: "ahh",
    partOfSpeech: "123",
    nom: "丅",
    examples: ["四六淨六!", "六𱎸𱎸."]
  },
    "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },
  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  },
  "cảm ơn": {
    meaning: "Lời cảm ơn, thể hiện sự biết ơn",
    pronunciation: "cam-on",
    partOfSpeech: "cụm từ",
    nom: "𠲦𠳒",
    examples: ["Cảm ơn bạn rất nhiều!", "Cảm ơn sự giúp đỡ của bạn."]
  },
  "xin lỗi": {
    meaning: "Lời xin lỗi, thể hiện sự hối hận",
    pronunciation: "xin-loi",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠇪",
    examples: ["Xin lỗi, tôi đã làm bạn buồn.", "Xin lỗi vì sự bất tiện."]
  },
  "chúc mừng": {
    meaning: "Lời chúc mừng cho một sự kiện, thành tựu",
    pronunciation: "chuc-mung",
    partOfSpeech: "cụm từ",
    nom: "祝𠔐",
    examples: ["Chúc mừng bạn đã đạt được mục tiêu!", "Chúc mừng sinh nhật!"]
  },
  "hẹn gặp lại": {
    meaning: "Lời chào khi tạm chia tay, thể hiện hy vọng gặp lại",
    pronunciation: "hen-gap-lai",
    partOfSpeech: "cụm từ",
    nom: "𠄦𠉀𠋕",
    examples: ["Hẹn gặp lại sau nhé!", "Hẹn gặp lại vào tuần sau."]
  },
  "vui lòng": {
    meaning: "Thể hiện yêu cầu một cách lịch sự",
    pronunciation: "vui-long",
    partOfSpeech: "cụm từ",
    nom: "愉𡜸",
    examples: ["Vui lòng đợi một chút.", "Vui lòng không làm phiền."]
  },
  "mừng tuổi": {
    meaning: "Lời chúc mừng trong dịp sinh nhật hoặc năm mới",
    pronunciation: "mung-tuoi",
    partOfSpeech: "cụm từ",
    nom: "𡪾𠂉",
    examples: ["Mừng tuổi mới! Chúc bạn sức khỏe và hạnh phúc!", "Mừng tuổi năm mới."]
  }
};


// API GET
app.get('/api/dictionary', (req, res) => {
  const word = req.query.word;
  const result = dictionary[word];
  if (result) {
    res.json({ word, meaning: result });
  } else {
    res.status(404).json({ message: "Không tìm thấy từ." });
  }
});

// Cho Vercel biết cần export `app`
module.exports = app;
