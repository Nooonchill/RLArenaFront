export const lastCompetition = {
  id: 133,
  title: "Распознование детского голоса",
  organizer: "ChildUniverse",
  rate: 4.4,
  participants: 242,
  tags: ["Тест", "Прогноз"],
  startDate: "16-01-2025",
  endDate: "16-02-2025",
  description: `
В этом соревновании участники должны разработать систему для распознавания детских голосов, с использованием 
алгоритмов машинного обучения. Модели должны быть способны классифицировать различные типы голосов, например, 
различать эмоции, возраст или пол ребенка. Дополнительно требуется распознавание речи с высокой точностью.
  `,
  data: [
    { name: "voice_samples.wav", size: "25MB", description: "Записи голосов детей с различными эмоциями и произнесенными фразами (2000 записей)." },
    { name: "emotions_labels.csv", size: "5MB", description: "Метки эмоций для каждой записи (радость, грусть, страх, удивление и т.д.)." },
    { name: "age_labels.csv", size: "3MB", description: "Возрастная группа для каждого образца (0-3 года, 4-6 лет и т.д.)." },
    { name: "speech_transcriptions.txt", size: "8KB", description: "Транскрипты речи, произнесенной детьми (1000 строк)." }
  ],
  solutions: [
    { place: 1, username: "VoiceMaster", time: "PT1H00M", score: 97 },
    { place: 2, username: "SoundWhisperer", time: "PT1H20M", score: 92 },
    { place: 3, username: "ChildVoiceBot", time: "PT1H50M", score: 88 },
    { place: 4, username: "EarDetective", time: "PT2H00M", score: 85 },
    { place: 5, username: "MiniGenius", time: "PT2H30M", score: 80 },
    { place: 6, username: "TinyTalker", time: "PT3H00M", score: 75 },
    { place: 7, username: "BabyLinguist", time: "PT3H45M", score: 70 },
    { place: 8, username: "VoiceExplorer", time: "PT4H30M", score: 65 },
    { place: 9, username: "SpeechHero", time: "PT5H00M", score: 60 },
    { place: 10, username: "TinyListener", time: "PT5H30M", score: 55 },
    { place: 11, username: "ChildTalker", time: "PT6H00M", score: 50 },
    { place: 12, username: "MiniMinds", time: "PT7H00M", score: 45 },
  ]
};

export const lastNews = {
  title: "Разработка",
  date: "02-01-2024",
  text: "Это первая новость о разработке фронтенда сайта RLArena. Данный сайт является площадкой для проведения RL/ML соревнований... Данный сайт является площадкой для проведения RL/ML соревнований..."
}

