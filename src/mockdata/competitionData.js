export const competitions = [
  { id: 134, title: "Прогнозирование цен на дома", organizer: "УрФУ", rate: 4.8, participants: 243, startDate: "12-04-2024", endDate: "27-04-2024" },
  { id: 12, title: "Оценка стоимости автомобиля по его характеристикам", organizer: "James123", rate: 2.1, participants: 2492, startDate: "27-10-2024", endDate: "27-02-2025" },
  { id: 35, title: "Обладатель Кубка Гагарина 2025 года", organizer: "Team Work", rate: 4.2, participants: 1222, startDate: "12-09-2024", endDate: "12-12-2024" },
  { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", organizer: "NoooN", rate: 5.0, participants: 12, startDate: "25-12-2024", endDate: "20-01-2025" },
  { id: 24, title: "Обладатель Кубка Гагарина 2024 года", organizer: "Team Work", rate: 4.2, participants: 242, startDate: "12-04-2023", endDate: "27-04-2024" },
  { id: 133, title: "Распознование детского голоса", organizer: "ChildUniverse", rate: 4.4, participants: 242, startDate: "16-01-2025", endDate: "16-02-2025" },
];

export const competitionsDetails = [
  {
    id: 134,
    title: "Прогнозирование цен на дома",
    organizer: "УрФУ",
    rate: 4.8,
    participants: 243,
    tags: ["Тест", "УрФУ", "Прогноз"],
    startDate: "12-04-2024",
    endDate: "27-04-2024",
    description: `
Участникам предлагается разработать модель, которая сможет предсказывать цены на жилье 
на основе предоставленных характеристик. В тренировочный набор включены данные о площади, 
количестве комнат, местоположении, состоянии ремонта и другие важные параметры. 
Основная задача заключается в том, чтобы минимизировать среднеквадратическую ошибку (RMSE). 
Это соревнование помогает улучшить навыки работы с табличными данными и настройкой гиперпараметров.
    `,
    data: [
      { fileName: "house_train.csv", size: "10.5MB", description: "Обучающий набор данных с 5000 строками." },
      { fileName: "house_test.csv", size: "2.1MB", description: "Тестовые данные для проверки модели (1000 строк)." },
      { fileName: "features_info.txt", size: "4KB", description: "Описание характеристик домов и их форматов." }
    ],
    solutions: [
      { place: 1, username: "Ivan", time: "PT23H10M", score: 565 },
      { place: 2, username: "SleepKnight", time: "PT13H30M", score: 432 },
      { place: 3, username: "MontK", time: "PT53H10M", score: 432 },
      { place: 4, username: "Dinx", time: "PT35H10M", score: 413 },
      { place: 5, username: "Korkx", time: "PT27H23M", score: 323 },
      { place: 6, username: "BlackString", time: "PT29H33M", score: 297 },
      { place: 7, username: "DownTownMan", time: "PT32H59M", score: 234 },
      { place: 8, username: "BoringShow", time: "PT97H10M", score: 234 },
      { place: 9, username: "43StartBest", time: "PT123H42M", score: 115 },
      { place: 10, username: "tiredwarrior", time: "PT12H15M", score: 95 },
    ]
  },
  {
    id: 12,
    title: "Оценка стоимости автомобиля по его характеристикам",
    organizer: "James123",
    rate: 2.1,
    participants: 2492,
    tags: ["Тест", "Прогноз"],
    startDate: "27-10-2024",
    endDate: "27-02-2025",
    description: `
В этом соревновании участникам необходимо построить модель, которая оценивает стоимость автомобиля 
на основе его характеристик. Обучающие данные включают такие параметры, как год выпуска, пробег, 
мощность двигателя, тип топлива и состояние кузова. Основной метрикой является R^2 (коэффициент детерминации). 
Этот кейс особенно полезен для участников, которые хотят улучшить свои навыки работы с регрессионными моделями 
и обработкой данных с пропусками.
    `,
    data: [
      { fileName: "cars_train.csv", size: "15MB", description: "Таблица с обучающими данными (8000 строк)." },
      { fileName: "cars_test.csv", size: "3.2MB", description: "Таблица для тестирования (2000 строк)." },
      { fileName: "features_description.txt", size: "3KB", description: "Описание характеристик автомобилей." },
      { fileName: "data_preprocessing_tips.pdf", size: "1.2MB", description: "Советы по обработке данных." }
    ],
    solutions: [
      { place: 1, username: "FastDriver", time: "PT21H45M", score: 0.965 },
      { place: 2, username: "AutoGeek", time: "PT24H10M", score: 0.945 },
      { place: 3, username: "NeuralSpeed", time: "PT30H12M", score: 0.933 },
      { place: 4, username: "TurboMind", time: "PT27H50M", score: 0.910 },
      { place: 5, username: "Speedster", time: "PT19H30M", score: 0.905 },
      { place: 6, username: "CarAnalyzer", time: "PT25H40M", score: 0.891 },
      { place: 7, username: "MachineMan", time: "PT29H15M", score: 0.875 },
      { place: 8, username: "PistonPower", time: "PT33H20M", score: 0.860 },
      { place: 9, username: "FuelMaster", time: "PT38H55M", score: 0.845 },
      { place: 10, username: "AutoSolver", time: "PT40H30M", score: 0.830 },
    ]
  },
  {
    id: 35,
    title: "Обладатель Кубка Гагарина 2025 года",
    organizer: "Team Work",
    rate: 4.2,
    participants: 1222,
    tags: ["Тест", "Прогноз"],
    startDate: "12-09-2024",
    endDate: "12-12-2024",
    description: `
В этом соревновании участникам предстоит решить задачу классификации, определяя, кто станет победителем 
Кубка Гагарина в 2025 году, основываясь на статистике и результатах команд за предыдущие сезоны. 
Модели должны учитывать такие параметры, как количество побед, очки, среднее время на льду, процент побед в игре 
и другие метрики. Цель — спрогнозировать вероятность победы для каждой из команд.
    `,
    data: [
      { fileName: "teams_stats.csv", size: "10MB", description: "Статистика команд за предыдущие сезоны (2000 строк)." },
      { fileName: "players_stats.csv", size: "6MB", description: "Данные о игроках (1000 строк)." },
      { fileName: "game_results.csv", size: "8MB", description: "Результаты матчей предыдущих сезонов." },
      { fileName: "game_rules.txt", size: "1KB", description: "Правила проведения Кубка Гагарина." }
    ],
    solutions: [
      { place: 1, username: "IceMaster", time: "PT12H30M", score: 0.92 },
      { place: 2, username: "PuckWizard", time: "PT14H45M", score: 0.89 },
      { place: 3, username: "StickSavant", time: "PT15H20M", score: 0.87 },
      { place: 4, username: "BladesOfGlory", time: "PT16H10M", score: 0.84 },
      { place: 5, username: "FrozenForce", time: "PT18H35M", score: 0.80 },
      { place: 6, username: "GoalMachine", time: "PT20H15M", score: 0.75 },
      { place: 7, username: "IceBreaker", time: "PT21H50M", score: 0.72 },
      { place: 8, username: "PuckTamer", time: "PT23H00M", score: 0.70 },
      { place: 9, username: "RinkWarrior", time: "PT25H30M", score: 0.65 },
      { place: 10, username: "PowerPlay", time: "PT28H20M", score: 0.60 },
    ]
  },
  {
    id: 1,
    title: "Студенты, проходящие стажировки в IT-компаниях",
    organizer: "NoooN",
    rate: 5.0,
    participants: 12,
    tags: ["Тест", "Прогноз"],
    startDate: "25-12-2024",
    endDate: "20-01-2025",
    description: `
В данном соревновании участники должны разработать алгоритм, который помогает компании эффективно распределять 
студентов по стажировкам в IT-компаниях, учитывая их навыки, интересы, местоположение и требования компаний. 
Задача заключается в максимизации удовлетворенности студентов и работодателей, с учетом доступных вакансий и критериев.
    `,
    data: [
      { fileName: "students_data.csv", size: "4MB", description: "Данные студентов, их навыки и предпочтения (100 строк)." },
      { fileName: "companies_requirements.csv", size: "2MB", description: "Требования к стажерам от IT-компаний (50 строк)." },
      { fileName: "placement_rules.txt", size: "1KB", description: "Правила распределения студентов по компаниям." }
    ],
    solutions: [
      { place: 1, username: "OptimumMatcher", time: "PT8H30M", score: 1500 },
      { place: 2, username: "SkillAligner", time: "PT10H00M", score: 1400 },
      { place: 3, username: "InternMaster", time: "PT12H15M", score: 1300 },
      { place: 4, username: "TechGuru", time: "PT14H00M", score: 1200 },
      { place: 5, username: "CareerPlanner", time: "PT16H25M", score: 1100 },
      { place: 6, username: "MatchMaker", time: "PT18H30M", score: 1000 },
      { place: 7, username: "StudentMatcher", time: "PT20H00M", score: 900 },
      { place: 8, username: "PlacementPro", time: "PT22H10M", score: 800 },
      { place: 9, username: "FutureBuilder", time: "PT24H15M", score: 700 },
      { place: 10, username: "CareerBoost", time: "PT27H00M", score: 600 },
        { place: 11, username: "InternSuccess", time: "PT30H20M", score: 500 },
      { place: 12, username: "SkillSharer", time: "PT32H50M", score: 400 }
    ]
  },
  {
    id: 24,
    title: "Обладатель Кубка Гагарина 2024 года",
    organizer: "Team Work",
    rate: 4.2,
    participants: 242,
    tags: ["Тест", "Прогноз", "Хоккей"],
    startDate: "12-04-2023",
    endDate: "27-04-2024",
    description: `
В этом соревновании участникам предстоит разработать модель прогнозирования результатов матчей 
на основе статистических данных команд, игроков, а также истории игр. 

Модели должны учитывать все аспекты игры, такие как **физическое состояние игроков**, **тактические особенности команд**, а также **другие переменные**, влияющие 
на исход матчей.
    `,
    data: [
      { fileName: "team_stats.csv", size: "10MB", description: "Статистика команд за последние сезоны (500 строк)." },
      { fileName: "player_data.csv", size: "8MB", description: "Данные игроков, их индивидуальная статистика и физическая форма (200 строк)." },
      { fileName: "game_history.csv", size: "6MB", description: "История матчей, включая результаты, детали и тактические данные (1000 строк)." },
      { fileName: "match_conditions.txt", size: "1KB", description: "Технические характеристики поля, погодные условия и другие параметры матчей." }
    ],
    solutions: [
      { place: 1, username: "PuckPredictor", time: "PT5H30M", score: 3000 },
      { place: 2, username: "GoalkeeperAI", time: "PT7H45M", score: 2800 },
      { place: 3, username: "TeamStrategy", time: "PT8H00M", score: 2700 },
      { place: 4, username: "IceMaster", time: "PT9H15M", score: 2600 },
      { place: 5, username: "GameChanger", time: "PT11H00M", score: 2500 },
      { place: 6, username: "PuckSensei", time: "PT12H30M", score: 2400 },
      { place: 7, username: "IceStrategist", time: "PT14H20M", score: 2300 },
      { place: 8, username: "PowerPlay", time: "PT16H50M", score: 2200 },
      { place: 9, username: "GoalMachine", time: "PT18H10M", score: 2100 },
      { place: 10, username: "HockeyPro", time: "PT20H00M", score: 2000 },
      { place: 11, username: "SkatingAce", time: "PT22H30M", score: 1900 },
      { place: 12, username: "IceWizards", time: "PT24H40M", score: 1800 }
    ]
  },
  {
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
      { fileName: "voice_samples.wav", size: "25MB", description: "Записи голосов детей с различными эмоциями и произнесенными фразами (2000 записей)." },
      { fileName: "emotions_labels.csv", size: "5MB", description: "Метки эмоций для каждой записи (радость, грусть, страх, удивление и т.д.)." },
      { fileName: "age_labels.csv", size: "3MB", description: "Возрастная группа для каждого образца (0-3 года, 4-6 лет и т.д.)." },
      { fileName: "speech_transcriptions.txt", size: "8KB", description: "Транскрипты речи, произнесенной детьми (1000 строк)." }
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
      { place: 12, username: "MiniMinds", time: "PT7H00M", score: 45 }
    ]
  }
];