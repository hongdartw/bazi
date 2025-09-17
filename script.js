const ganzhiOrder = {
    '甲子': 1, '乙丑': 2, '丙寅': 3, '丁卯': 4, '戊辰': 5, '己巳': 6, '庚午': 7, '辛未': 8, '壬申': 9, '癸酉': 10,
    '甲戌': 11, '乙亥': 12, '丙子': 13, '丁丑': 14, '戊寅': 15, '己卯': 16, '庚辰': 17, '辛巳': 18, '壬午': 19, '癸未': 20,
    '甲申': 21, '乙酉': 22, '丙戌': 23, '丁亥': 24, '戊子': 25, '己丑': 26, '庚寅': 27, '辛卯': 28, '壬辰': 29, '癸巳': 30,
    '甲午': 31, '乙未': 32, '丙申': 33, '丁酉': 34, '戊戌': 35, '己亥': 36, '庚子': 37, '辛丑': 38, '壬寅': 39, '癸卯': 40,
    '甲辰': 41, '乙巳': 42, '丙午': 43, '丁未': 44, '戊申': 45, '己酉': 46, '庚戌': 47, '辛亥': 48, '壬子': 49, '癸丑': 50,
    '甲寅': 51, '乙卯': 52, '丙辰': 53, '丁巳': 54, '戊午': 55, '己未': 56, '庚申': 57, '辛酉': 58, '壬戌': 59, '癸亥': 60
};

const tianxingData = {
    '甲子': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能健談，會幽默，能變通，會演戲，多主見，會眷戀，有志氣，會進取，喜優越，會講究，喜領導，會誇口，喜新奇，會取巧，喜外出，能大方',
        jingyu: '雖滄桑，有突破，遭意外，有得失，多自在，有風光',
        zaohua: '要改進與創新，也要警覺與盡責，更要勸人向善與給人岀路。便可趨吉！不要自以為是與勉強，也不要妄想與逾越，更不要自欺欺人與痴迷。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、戊子、庚子等六組干支，皆對甲子不利！'
    },
    '乙丑': {
        tianxing: '講歸宿，重保障，講身份，重形象，能適應，易寬心，能包容，易聽信，能隨和，會仿效，喜夥伴，會依賴，重目前，會討好，有耐性，多被動，能樂天，易大意，重享樂，易懈怠',
        jingyu: '人投合，事便利，有現成，少辛苦，有歸宿，添安逸',
        zaohua: '要厚道與樂天，也要親近賢者與感恩，更要予人方便與成人之美。便可趨吉！不要姑息與護短，也不要大意與偷懶，更不要苟且與虧欠。便可避凶！',
        xiangke: '乙亥、乙未、乙卯等三組干支，皆對乙丑不利！'
    },
    '丙寅': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能健談，會幽默，能變通，會取巧，有志氣，會奮發，能樂觀，會大方，喜威風，會交際，喜領導，會誇口，喜新奇，易改換，能忘懷，易疏忽',
        jingyu: '有機緣，添聲勢，多人事，可進退，雖風光，卻耗費',
        zaohua: '要改進與創新，也要精神充沛與公道，更要助人生長與給人出路。便可趨吉！不要妄想與逾越，也不要逞強與誇口，更不要虛榮與自欺欺人。便可避凶！',
        xiangke: '丙申、丙辰、戊寅、庚寅、壬寅、甲寅等六組干支，皆對丙寅不利！'
    },
    '丁卯': {
        tianxing: '講歸宿，重保障，講身份，重目前，多音感，善品嘗，多直覺，能強記，重情誼，會討好，重傳統，會戀舊，講規矩，易拘束，能謙卑，會節儉，有耐性，會依賴，多被動，易怯懦',
        jingyu: '寄人下，遭束縛，遇風險，受委屈，勢漸衰，少出路',
        zaohua: '要請求與感恩，也要尊重彼此與親近賢者，更要予人退路與給人方便。便可趨吉！不要捨不得與護短，也不要自卑與悲傷，更不要恐懼與虧欠。便可避凶！',
        xiangke: '丁卯、丁亥、丁未等三組干支，皆對丁卯不利！'
    },
    '戊辰': {
        tianxing: '能審查，會分析，有戒心，易猜疑，喜分明，會計算，能解說，易沈默，喜獨特，重細節，喜比較，易嫌棄，多嚴肅，會自負，能獨自，易孤僻，能冷靜，不耐煩，多愁緒，易灰心',
        jingyu: '人失和，事挫折，遭冷落，多孤立，少機緣，多失意',
        zaohua: '要清心與明理，也要研習與獨特，更要廉潔與助人醒悟。便可趨吉！不要冷漠與輕視別人，也不要多疑與灰心，更不要厭惡與怨恨。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、庚辰、壬辰、甲辰、丙辰等九組干支，皆對戊辰不利！'
    },
    '己巳': {
        tianxing: '能適應，會仿效，能包容，易聽信，有志氣，會奮發，有耐性，能緩急，重尊嚴，能屈伸，重恩情，會交際，喜威風，會誇口，講公道，易直言，能忘卻，會施捨，能開朗，易大意',
        jingyu: '得厚待，添和諧，步坦途，忙亦閒，雖耗費，可安定',
        zaohua: '要適中與公道，也要精神充沛與開朗，更要助人生長與成人之美。便可趨吉！不要姑息與大意，也不要逞強與誇口，更不要虛榮與苟且。便可避凶！',
        xiangke: '己未、丁巳等二組干支，皆對己巳不利！'
    },
    '庚午': {
        tianxing: '講原則，會包容，重慣例，會仿效，能自制，會節儉，能謙卑，多含蓄，有耐性，多被動，講規矩，易拘束，重傳統，會戀舊，多擔憂，易感傷，重退路，易怯懦，多猶豫，易消極',
        jingyu: '遭阻礙，少機緣，居下風，少收成，遇僵局，受委屈',
        zaohua: '要反省與從簡，也要自立與尊重彼此，更要引人靜心與給人退路。便可趨吉！不要愁悶與捨不得，也不要自卑與悲觀，更不要恐懼與悲傷。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、壬午、甲午、戊午等七組干支，皆對庚午不利！'
    },
    '辛未': {
        tianxing: '能審查，會分析，能解說，易直言，喜分明，會計算，有抱負，會爭取，有戒心，易猜疑，喜支配，會自負，喜獨特，重細節，喜比較，易嫌棄，會逞強，不耐煩，多愁緒，易灰心',
        jingyu: '遭紛擾，添麻煩，怨相聚，添爭端，遇陷阱，添失意',
        zaohua: '要清心與廉明，也要合群與好學，更要助人醒悟與令人起勁。便可趨吉！不要逞強與輕視別人，也不要多疑與賭氣，更不要灰心與怨恨。便可避凶！',
        xiangke: '辛未、癸未、乙未、丁未、己未等五組干支，皆對辛未不利！'
    },
    '壬申': {
        tianxing: '能聯想，會設計，講原則，會變通，重慣例，會客觀，能自制，會節儉，能婉轉，多含蓄，有耐性，多被動，能鎮定，易遲緩，能忘懷，易疏忽，能淡泊，易悲觀，喜外出，易鬆懈',
        jingyu: '勢淺薄，境飄搖，遇波折，遭忽視，尋落空，多無奈',
        zaohua: '要自制與從簡，也要自立與替人著想，更要引人靜心與給人自由。便可趨吉！不要多言與找藉口，也不要失神與明知故犯，更不要悲觀與虛度。便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、甲申、戊申、庚申等七組干支，皆對壬申不利！'
    },
    '癸酉': {
        tianxing: '多音感，善品嘗，多直覺，能強記，有志氣，會進取，能勤快，易急忙，能乾脆，易激動，重尊嚴，講信用，重形象，講身份，重情義，會眷戀，喜支配，能捍衛，喜優越，會講究',
        jingyu: '雖難為，有進展，雖辛勞，有收成，受器重，得優勢',
        zaohua: '要合群與好學，也要警覺與盡責，更要勸人向善與令人起勁。便可趨吉！不要自以為是與逞強，也不要賭氣與勉強，更不要侵犯與痴迷。便可避凶！',
        xiangke: '癸未、丁酉等二組干支，皆對癸酉不利！'
    },
    '甲戌': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能健談，會幽默，能變通，會演戲，能包容，會取巧，能大方，會誇口，有耐性，會敷衍，喜外出，能適應，喜新奇，易改換，能樂天，易大意',
        jingyu: '雖滄桑，卻自在，雖意外，可進退，雖得失，卻慶幸',
        zaohua: '要改進與創新，也要厚道與樂天，更要予人出路與成人之美。便可趨吉！不要姑息與大意，也不要妄想與逾越，更不要苟且與自欺欺人。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、戊戌、庚戌等六組干支，皆對甲戌不利！'
    },
    '乙亥': {
        tianxing: '能聯想，會設計，能客觀，重目前，多思緒，易分心，能變通，會取巧，多藉口，會婉轉，喜夥伴，會依賴，重保障，會討好，能忘懷，易改換，能隨緣，易怯懦，重享樂，易鬆懈',
        jingyu: '逢機緣，少掌握，遇難關，有退路，得現成，少辛苦',
        zaohua: '要請求與感恩，也要替人著想與親近賢者，更要予人方便與給人自由。便可趨吉！不要護短與找藉口，也不要偷懶與胡思亂想，更不要失神與虧欠。便可避凶！',
        xiangke: '乙未、乙卯、丁亥等三組干支，皆對乙亥不利！'
    },
    '丙子': {
        tianxing: '有志氣，會進取，能勤快，易急忙，多音感，易激動，重尊嚴，講信用，重情義，會眷戀，能大方，會交際，喜做主，會多事，喜優越，會講究，喜威風，會誇口，能捍衛，易直言',
        jingyu: '多人事，添辛勞，有榮幸，添風光，雖耗費，有資源',
        zaohua: '要盡責與公道，也要精神充沛與開朗，更要勸人向善與助人生長。便可趨吉！不要逞強與衝動，也不要誇口與勉強，更不要自以為是與痴迷。便可避凶！',
        xiangke: '丙寅、丙申、丙午、丙辰、戊子、庚子等六組干支，皆對丙子不利！'
    },
    '丁丑': {
        tianxing: '能包容，易心軟，能適應，會仿效，能自制，會節儉，有耐性，多被動，能謙卑，會隨和，多含蓄，易沈默，講規矩，易拘束，重傳統，會戀舊，能樂天，易聽信，能知足，易同意',
        jingyu: '遇風險，有轉機，路雖窄，行卻安，田雖小，糧也夠',
        zaohua: '要反省與厚道，也要適中與樂天，更要予人退路與成人之美。便可趨吉！不要姑息與大意，也不要自卑與悲傷，更不要苟且與恐懼。便可避凶！',
        xiangke: '丁卯、丁亥、丁未、丁巳等四組干支，皆對丁丑不利！'
    },
    '戊寅': {
        tianxing: '能想像，會編造，能謀略，會遠慮，有戒心，會觀察，能分析，會計算，能解說，會幽默，能冷靜，會變通，喜獨特，會取巧，喜領導，會誇口，多思緒，易分心，能忘懷，易改換',
        jingyu: '人失和，事挫折，遭冷落，多孤立，少機緣，多枉費',
        zaohua: '要改進與廉明，也要創新與獨特，更要助人醒悟與給人出路。便可趨吉！不要冷漠與輕視別人，也不要妄想與逾越，更不要自欺欺人與厭惡。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、庚寅、壬寅、甲寅等八組干支，皆對戊寅不利！'
    },
    '己卯': {
        tianxing: '講歸宿，重保障，講身份，重目前，能適應，會仿效，有耐性，多被動，喜夥伴，會依賴，能謙卑，會討好，能隨和，易聽信，能包容，易偏袒，多含蓄，易怯懦，重享樂，易懈怠',
        jingyu: '得厚待，添和諧，步坦途，少風險，多依靠，少辛苦',
        zaohua: '要請求與感恩，也要親近賢者與厚道，更要予人方便與成人之美。便可趨吉！不要護短與姑息，也不要偷懶與草率，更不要苟且與虧欠。便可避凶！',
        xiangke: '己未、丁卯等二組干支，皆對己卯不利！'
    },
    '庚辰': {
        tianxing: '能審查，會分析，有戒心，易猜疑，喜分明，會計算，講原則，多固執，能冷静，易沈默，能鎮定，易遲緩，能節儉，易孤僻，喜比較，易嫌棄，多嚴肅，會自負，多愁緒，易灰心',
        jingyu: '遭阻礙，多乏味，遇僵局，多孤立，少機緣，多失意',
        zaohua: '要自立與研習，也要從簡與廉明，更要引人靜心與助人醒悟。便可趨吉！不要愁悶與輕視別人，也不要多疑與孤僻，更不要灰心與怨恨。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、戊辰、壬辰、甲辰、丙辰等八組干支，皆對庚辰不利！'
    },
    '辛巳': {
        tianxing: '有志氣，會奮發，重尊嚴，講信用，能勤快，易急忙，多音感，易激動，重情義，會交際，喜支配，能大方，喜威風，會多事，喜炫耀，會誇口，能捍衛，易直言，能開朗，易大意',
        jingyu: '多人事，添爭端，雖辛勞，添風光，雖耗費，有資源',
        zaohua: '要合群與公道，也要精神充沛與好學，更要助人生長與令人起勁。便可趨吉！不要逞強與衝動，也不要賭氣與誇口，更不要虛榮與侵犯。便可避凶！',
        xiangke: '辛未、丁巳等二組干支，皆對辛巳不利！'
    },
    '壬午': {
        tianxing: '能聯想，會設計，能客觀，會變通，重傳統，會戀舊，多含蓄，會婉轉，能包容，易心軟，能謙卑，易感傷，有耐性，多猶豫，會仿效，多被動，重退路，易怯懦，多擔憂，易消極',
        jingyu: '勢淺薄，境飄搖，遇波折，多失落，遭忽視，多委屈',
        zaohua: '要尊重彼此與替人著想，也要反省與增廣見識，更要予人退路與給人自由便可趨吉！不要找藉口與多言，也不要自卑與憂傷，更不要失神與恐懼。便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、庚午、甲午、戊午等七組干支，皆對壬午不利！'
    },
    '癸未': {
        tianxing: '能審查，會分析，能解說，重細節，喜分明，會計算，有抱負，會進取，有戒心，易猜疑，重尊嚴，多嚴肅，喜做主，會自負，喜優越，會講究，喜比較，易嫌棄，多愁緒，不耐煩',
        jingyu: '逢機緣，變陷阱，事纏身，多麻煩，遭為難，多失意',
        zaohua: '要清心與廉明，也要警覺與專精，更要助人醒悟與勸人向善。便可趨吉！不要多疑與輕視別人，也不要自以為是與勉強更不要怨恨與痴迷。便可避凶！',
        xiangke: '癸未、辛未、乙未、丁未、己未等五組干支，皆對癸未不利！'
    },
    '甲申': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能幽默，會演戲，講原則，會變通，重慣例，會取巧，能自制，會誇口，能節儉，會施捨，能鎮定，會冷靜，有耐性，會敷衍，能忘懷，易疏忽',
        jingyu: '歷滄桑，嘗無奈，逢機緣，少掌握，遭意外，多失落',
        zaohua: '要自立與自制，也要改進與創新，更要引人靜心與給人出路。便可趨吉！不要妄想與逾越，也不要自欺欺人與明知故犯更不要失神與虛度。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、壬申、戊申、庚申等七組干支，皆對甲申不利！'
    },
    '乙酉': {
        tianxing: '講歸宿，重保障，講身份，重形象，多直覺，重目前，多音感，善品嘗，能強記，會仿效，喜夥伴，會交際，重情誼，易牽掛，喜支配，會依賴，喜炫耀，會爭取，重享樂，會討好',
        jingyu: '人相依，事方便，有歸宿，少風險，有現成，忙亦閒',
        zaohua: '要合群與好學，也要親近賢者與感恩，更要予人方便與令人起勁。便可趨吉！不要護短與偷懶，也不要逞強與賭氣，更不要侵犯與虧欠。便可避凶！',
        xiangke: '乙未、丁酉等二組干支，皆對乙酉不利！'
    },
    '丙戌': {
        tianxing: '能包容，易聽信，能適應，會仿效，有志氣，會奮發，有耐性，能緩急，重尊嚴，能屈伸，重情誼，會交際，喜威風，會多事，能大方，會誇口，能乾脆，易直言，能樂天，易大意',
        jingyu: '事雖半，功卻倍，多榮幸，可造勢，雖耗費，仍有餘',
        zaohua: '要公道與厚道，也要精神充沛與樂天，更要助人生長與成人之美。便可趨吉！不要逞強與誇口，也不要姑息與大意，更不要虛榮與苟且。便可避凶！',
        xiangke: '丙寅、丙申、丙午、丙辰、戊戌、庚戌等六組干支，皆對丙戌不利！'
    },
    '丁亥': {
        tianxing: '能聯想，會設計，能客觀，會慎重，能變通，會取巧，多藉口，會婉轉，多思緒，易分心，有耐性，會節儉，能包容，易心軟，能謙卑，易拘束，能隨緣，易改換，多被動，易怯懦',
        jingyu: '遭束縛，居下風，遇風險，多失落，勢漸衰，多難為',
        zaohua: '要反省與溝通，也要尊重彼此與替人著想，更要予人退路與給人自由。便可趨吉！不要找藉口與偷懶，也不要胡思亂想與失神，更不要自卑與恐懼。便可避凶！',
        xiangke: '丁卯、丁亥、丁未等三組干支，皆對丁亥不利！'
    },
    '戊子': {
        tianxing: '能觀察，會分析，能解說，易沈默，喜分明，會計算，有戒心，會慎重，有志氣，會進取，多執著，會眷戀，喜優越，會講究，喜做主，多嚴肅，喜獨特，多主見，能獨自，易孤僻',
        jingyu: '人失和，遭冷落，事挫折，多費力，少機緣，多孤立',
        zaohua: '要專精與獨特，也要盡責與廉明，更要助人醒悟與勸人向善。便可趨吉！不要冷漠與孤僻，也不要自以為是與勉強-更不要厭惡與痴迷。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、庚子等六組干支，皆對戊子不利！'
    },
    '己丑': {
        tianxing: '能包容，易心軟，有耐性，易同意，能適應，會仿效，能隨和，易聽信，多含蓄，易沈默，能鎮定，易拖延，多被動，易草率，能樂天，易寬心，能知足，易大意，會依賴，易懈怠',
        jingyu: '得厚待，添和諧，步坦途，少辛苦，多慶幸，添安逸',
        zaohua: '要適中與厚道，也要一視同仁與親近賢者，更要樂天與成人之美。便可趨吉！不要護短與姑息，也不要大意與草率，更不要苟且與虛度。便可避凶！',
        xiangke: '己未、丁丑等二組干支，皆對己丑不利！'
    },
    '庚寅': {
        tianxing: '能想像，會編造，能謀略，會遠慮，多思緒，易分心，講原則，會變通，重慣例，會取巧，能幽默，易沈默，能自制，有耐性，能施捨，會節儉，能鎮定，會冷靜，能忘懷，易疏忽',
        jingyu: '遭阻礙，遇僵局，多孤立，少機緣，多枉費，少收成',
        zaohua: '要自立與改進，也要從簡與創新，更要引人靜心與給人出路。便可趨吉！不要沈悶與失神，也不要妄想與逾越，更不要自欺欺人與明知故犯。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、戊寅、壬寅、甲寅等七組干支，皆對庚寅不利！'
    },
    '辛卯': {
        tianxing: '講歸宿，重保障，講身份，重形象，多直覺，能強記，多音感，善品嘗，喜夥伴，會交際，重情誼，會依賴，喜炫耀，會爭取，喜支配，能屈伸，重目前，能緩急，重享樂，會討好',
        jingyu: '逢失利，有退路，遇收成，遭打折，有榮辱，忙亦閒',
        zaohua: '要請求與感恩，也要合群與親近賢者，更要予人方便與令人起勁。便可趨吉！不要偷懶與護短，也不要逞強與賭氣，更不要侵犯與虧欠。便可避凶！',
        xiangke: '辛未、丁卯等二組干支，皆對辛卯不利！'
    },
    '壬辰': {
        tianxing: '能審查，會分析，能聯想，會設計，喜分明，會計算，能客觀，會變通，能解說，會婉轉，有戒心，易猜疑，喜獨特，重細節，喜比較，易嫌棄，會自負，不耐煩，多愁緒，易灰心',
        jingyu: '勢淺薄，境飄搖，事波折，情漸淡，遭忽視，多失意',
        zaohua: '要清心與廉明，也要增廣見識與替人著想，更要助人醒悟與給人自由。便可趨吉！不要找藉口與失神，也不要多疑與輕視別人，更不要灰心與怨恨。便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、戊辰、庚辰、甲辰、丙辰等八組干支，皆對壬辰不利！'
    },
    '癸巳': {
        tianxing: '有志氣，會進取，能勤快，易急忙，重尊嚴，講信用，重情義，會交際，多音感，易激動，講公道，易直言，喜做主，會誇口，喜威風，能捍衛，喜優越，會講究，能開朗，會施捨',
        jingyu: '雖辛勞，解難關，受器重，得優勢，雖耗費，有資源',
        zaohua: '要盡責與公道，也要精神充沛與開朗，更要助人生長與勸人向善。便可趨吉！不要逞強與誇口，也不要自以為是與勉強更不要虛榮與痴迷。便可避凶！',
        xiangke: '癸未、丁巳等二組干支，皆對癸巳不利！'
    },
    '甲午': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能幽默，會演戲，能包容，會戀舊，重傳統，會變通，講規矩，會取巧，多擔憂，易感傷，有耐性，易猶豫，能施捨，會節儉，喜外出，重退路',
        jingyu: '歷滄桑，多失落，遭意外，多委屈，有出路，難解憂',
        zaohua: '要反省與改進，也要創新與尊重彼此，更要予人退路與給人出路。便可趨吉！不要自卑與憂傷，也不要妄想與逾越，更不要自欺欺人與恐懼。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、庚午、壬午、戊午等七組干支，皆對甲午不利！'
    },
    '乙未': {
        tianxing: '講歸宿，重保障，講身份，重形象，能審查，會分析，能解說，重細節，喜分明，會計算，有戒心，易猜疑，喜獨特，會自負，喜比較，易嫌棄，多愁緒，不耐煩，重目前，易灰心',
        jingyu: '逢現成，變負擔，遇便利，變麻煩，怨相聚，多失意',
        zaohua: '要清心與廉明，也要親近賢者與感恩，更要助人醒悟與給人方便。便可趨吉！不要多疑與輕視別人，也不要護短與虧欠更不要灰心與怨恨。便可避凶！',
        xiangke: '乙未、辛未、癸未、丁未、己未等五組干支，皆對乙未不利！'
    },
    '丙申': {
        tianxing: '講原則，重慣例，講信用，重尊嚴，有骨氣，會奮發，能捍衛，多固執，能自制，會交際，有耐性，能緩急，喜威風，會誇口，講公道，易直言，能施捨，會節儉，能忘卻，易疏忽',
        jingyu: '多人事，少受益，有場面，卻耗費，事雖倍，功卻半',
        zaohua: '要自立與公道，也要自制與精神充沛，更要助人生長與引人靜心。便可趨吉！不要逞強與誇口，也不要頑固與明知故犯更不要虛榮與悲觀。便可避凶！',
        xiangke: '丙寅、丙午、丙辰、壬申、甲申、戊申、庚申等七組干支，皆對丙申不利！'
    },
    '丁酉': {
        tianxing: '能包容，易聽信，能強記，易牽掛，重傳統，講規矩，重情義，會戀舊，重身份，會爭取，能勤快，易急忙，有耐性，能屈伸，喜支配，會慎重，多音感，善品嘗，多直覺，易感動',
        jingyu: '遭束縛，減收成，遇風險，添辛勞，雖委屈，有生機',
        zaohua: '要反省與好學，也要合群與尊重彼此，更要予人退路與令人起勁。便可趨吉！不要拘泥與捨不得，也不要逞強與賭氣，更不要侵犯與憂傷。便可避凶！',
        xiangke: '丁卯、丁亥、丁未、丁巳等四組干支，皆對丁酉不利！'
    },
    '戊戌': {
        tianxing: '能觀察，會分析，能解說，易沈默，喜分明，會計算，能包容，會仿效，能適應，會節儉，有耐性，多被動，能獨自，會冷靜，能鎮定，易拖延，能樂天，易寬心，能知足，易懈怠',
        jingyu: '逢冷門，尚可行，遇薄利，仍足夠，遭落幕，卻清閒',
        zaohua: '要廉明與適中，也要一視同仁與樂天，更要助人醒悟與成人之美。便可趨吉！不要厭惡與冷漠，也不要姑息與偷懶，更不要苟且與虛度。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、庚戌等六組干支，皆對戊戌不利！'
    },
    '己亥': {
        tianxing: '能聯想，會設計，能客觀，會仿效，能變通，會取巧，多藉口，會婉轉，多思緒，易分心，能包容，易心軟，有耐性，多被動，能隨緣，易草率，能忘懷，易改換，能淡泊，易鬆懈',
        jingyu: '逢低潮，有轉機，得厚待，添和諧，步坦途，少辛苦',
        zaohua: '要厚道與隨緣，也要替人著想與溝通，更要予人自由與成人之美。便可趨吉！不要找藉口與草率，也不要胡思亂想與失神，更不要苟且與虛度。便可避凶！',
        xiangke: '己未、丁亥等二組干支，皆對己亥不利！'
    },
    '庚子': {
        tianxing: '有骨氣，會進取，講信用，重尊嚴，講原則，易拘束，重慣例，會眷戀，有毅力，多固執，喜做主，多主觀，喜優越，會講究，能自制，會節儉，能獨自，易沈默，有耐性，能緩急',
        jingyu: '遭阻礙，少機緣，遇僵局，多費力，雖孤立，尚平穩',
        zaohua: '要盡責與專精，也要自制與從簡，更要引人靜心與勸人向善。便可趨吉！不要沈悶與捨不得，也不要自以為是與勉強，更不要頑固與明知故犯。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、戊子等五組干支，皆對庚子不利！'
    },
    '辛丑': {
        tianxing: '能包容，易聽信，能適應，易寬心，能強記，會仿效，講身份，會爭取，有耐性，能緩急，喜支配，能屈伸，喜炫耀，重形象，喜夥伴，會交際，喜新奇，會多事，能樂天，易大意',
        jingyu: '有機緣，助聲勢，有榮幸，添風光，事雖半，功卻倍',
        zaohua: '要合群與厚道，也要親近賢者與好學，更要令人起勁與成人之美。便可趨吉！不要姑息與大意，也不要逞強與賭氣，更不要苟且與侵犯。便可避凶！',
        xiangke: '辛未、丁丑等二組干支，皆對辛丑不利！ '
    },
    '壬寅': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能客觀，會變通，能健談，會幽默，多藉口，會取巧，多思緒，易分心，喜外出，能大方，喜領導，會誇口，喜新奇，易改換，能忘懷，會敷衍',
        jingyu: '勢淺薄，境飄搖，遭忽視，過波折，雖自在，卻枉費',
        zaohua: '要改進與創新，也要替人著想與溝通，更要予人出路與給人自由。便可趨吉！不要找藉口與多言，也不要妄想與逾越，更不要失神與自欺欺人。便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、戊寅、庚寅、甲寅等七組干支，皆對壬寅不利！'
    },
    '癸卯': {
        tianxing: '講歸宿，重保障，講身份，重形象，多音感，善品嘗，多直覺，易主觀，能強記，會進取，喜優越，會講究，喜夥伴，會依賴，重情誼，會眷戀，重目前，能緩急，會討好，能屈伸',
        jingyu: '遇難關，有退路，受器重，得優勢，有榮辱，忙亦閒',
        zaohua: '要請求與感恩，也要親近賢者與盡責，更要勸人向善與給人方便。便可趨吉！不要自以為是與勉強，也不要護短與偷懶更不要虧欠與痴迷。便可避凶！',
        xiangke: '癸未、丁卯等二組干支，皆對癸卯不利！'
    },
    '甲辰': {
        tianxing: '能審查，會分析，能想像，會編造，能謀略，會遠慮，有戒心，易猜疑，喜分明，會計算，能解說，重細節，能幽默，會演戲，喜領導，會自負，喜比較，易嫌棄，不耐煩，易灰心',
        jingyu: '歷滄桑，多失落，遭意外，多失意，去是愁，留亦苦',
        zaohua: '要清心與廉明，也要改進與創新，更要助人醒悟與給人出路。便可趨吉！不要妄想與逾越，也不要多疑與輕視別人，更不要自欺欺人與怨恨。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、戊辰、庚辰、壬辰、丙辰等八組干支，皆對甲辰不利！'
    },
    '乙巳': {
        tianxing: '講歸宿，重保障，講身份，重形象，喜夥伴，會交際，重情誼，會施捨，重尊嚴，會奮發，喜威風，會誇口，多音感，能緩急，會討好，能屈伸，重目前，易直言，能開朗，易大意',
        jingyu: '人相依，事方便，有現成，可助威，有累贅，多耗費',
        zaohua: '要合群與公道，也要精神充沛與開朗，更要助人生長與給人方便。便可趨吉！不要逞強與誇口，也不要賭氣與護短，更不要虛榮與虧欠。便可避凶！',
        xiangke: '乙未、丁巳等二組干支，皆對乙巳不利！'
    },
    '丙午': {
        tianxing: '重傳統，會仿效，重尊嚴，講信用，能勤快，易急忙，有耐性，能屈伸，多音感，會交際，喜威風，會包容，重情義，會戀舊，能施捨，會節儉，多直覺，易感傷，重退路，易擔憂',
        jingyu: '多人事，添辛勞，雖開拓，卻耗費，顧大局，卻委屈',
        zaohua: '要反省與公道，也要精神充沛與尊重彼此，更要助人生長與給人退路。便可趨吉！不要逞強與誇口，也不要自卑與悲傷更不要虛榮與恐懼。便可避凶！',
        xiangke: '丙辰、庚午、壬午、甲午、戊午等五組干支，皆對丙午不利！'
    },
    '丁未': {
        tianxing: '能審查，會分析，能解說，易沈默，喜分明，會計算，有戒心，易猜疑，會慎重，易猶豫，喜比較，重細節，能節儉，重退路，有耐性，易嫌棄，多嚴肅，易拘束，多愁緒，易灰心',
        jingyu: '遭束縛，居下風，遇風險，受委屈，勢漸衰，多失意',
        zaohua: '要清心與反省，也要尊重彼此與廉明，更要助人醒悟與給人退路。便可趨吉！不要多疑與輕視別人，也不要愁悶與灰心更不要恐懼與怨恨。便可避凶！',
        xiangke: '丁卯、丁亥、丁未、丁巳、辛未、癸未、乙未、己未等八組干支，皆對丁未不利！\u3000'
    },
    '戊申': {
        tianxing: '能觀察，會分析，能解說，易沈默，講原則，有戒心，重慣例，多固執，能自制，會節儉，能冷靜，易悲觀，能鎮定，易遲緩，能獨自，易孤僻，有骨氣，多嚴肅，有耐性，易懈怠',
        jingyu: '人失和，事挫折，遭冷落，多孤立，少機緣，多無奈',
        zaohua: '要自立與自制，也要從簡與廉明，更要引人靜心與助人醒悟。便可趨吉！不要悲觀與孤僻，也不要頑固與明知故犯，更不要厭惡與虛度。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、壬申、甲申、庚申等八組干支，皆對戊申不利！'
    },
    '己酉': {
        tianxing: '能適應，會仿效，能包容，易聽信，能強記，易牽掛，講身份，會爭取，有耐性，能緩急，喜夥伴，會交際，喜炫耀，會誇口，喜支配，能屈伸，喜新奇，重形象，能樂觀，易大意',
        jingyu: '得厚待，添和諧，步坦途，益收成，忙亦閒，可安定',
        zaohua: '要合群與厚道，也要親近賢者與好學，更要令人起勁與成人之美。便可趨吉！不要姑息與草率，也不要逞強與賭氣，更不要苟且與侵犯。便可避凶！',
        xiangke: '己未、丁酉等二組干支，皆對己酉不利！'
    },
    '庚戌': {
        tianxing: '講原則，能包容，重慣例，會仿效，能適應，易寬心，能自制，會節儉，多含蓄，易沈默，有耐性，易草率，能鎮定，易遲緩，能獨自，多被動，能樂天，易大意，能知足，易懈怠',
        jingyu: '遭阻礙，可緩行，雖平淡，可安定，少機緣，卻清閒',
        zaohua: '要樂天與從簡，也要一視同仁與厚道，更要引人靜心與成人之美。便可趨吉！不要姑息與草率，也不要大意與明知故犯更不要苟且與虛度。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、戊戌等五組干支，皆對庚戌不利！'
    },
    '辛亥': {
        tianxing: '能聯想，會設計，能客觀，會變通，能緩急，會取巧，能健談，會交際，多藉口，會婉轉，多思緒，易分心，喜炫耀，會誇口，喜支配，能屈伸，重形象，會爭取，能隨緣，易改換',
        jingyu: '人聚散，事起伏，逢失利，有轉機，遇收成，遭打折',
        zaohua: '要合群與好學，也要替人著想與親近賢者，更要令人起勁與給人自由。便可趨吉！不要找藉口與胡思亂想，也不要逞強與賭氣，更不要失神與侵犯。便可避凶！',
        xiangke: '辛未、丁亥等二組干支，皆對辛亥不利！'
    },
    '壬子': {
        tianxing: '能聯想，會設計，能客觀，多主見，能變通，多執著，能健談，會婉轉，有志氣，會進取，喜優越，會講究，重尊嚴，能屈伸，喜做主，能緩急，喜外出，會交際，重情誼，會眷戀',
        jingyu: '雖奔波，卻自在，遇波折，有轉機，雖差強，可過關',
        zaohua: '要溝通與盡責，也要增廣見識與替人著想，更要勸人向善與給人自由。便可趨吉！不要找藉口與多言，也不要自以為是與勉強，更不要失神與痴迷，便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、戊子、庚子等六組干支，皆對壬子不利！'
    },
    '癸丑': {
        tianxing: '能包容，會仿效，能適應，易寬心，多直覺，易聽信，重情誼，會眷戀，重形象，講信用，重尊嚴，會進取，喜優越，會講究，有耐性，能緩急，喜做主，能屈伸，會樂天，易大意',
        jingyu: '人投合，事漸佳，遇難關，卻慶幸，受器重，得優勢',
        zaohua: '要樂天與厚道，也要專精與盡責，更要勸人向善與成人之美。便可趨吉！不要自以為是與勉強，也不要姑息與大意，更不要苟且與痴迷。便可避凶！',
        xiangke: '癸未、丁丑等二組干支，皆對癸丑不利！'
    },
    '甲寅': {
        tianxing: '能想像，會編造，能謀略，會遠慮，能健談，會幽默，能變通，會演戲，能樂觀，會取巧，多思緒，易分心，喜外出，能大方，喜領導，會誇口，喜新奇，易改換，能忘懷，會敷衍',
        jingyu: '歴滄桑，有進退，遭意外，多枉費，雖自在，志未酬',
        zaohua: '要幽默與樂觀，也要改進與創新，更要替人著想與給人出路。便可趨吉！不要妄想與誇口，也不要忘本與逾越，更不要自欺欺人與失神。便可避凶！',
        xiangke: '甲申、甲午、甲辰、甲寅、戊寅、庚寅、壬寅等七組干支，皆對甲寅不利！'
    },
    '乙卯': {
        tianxing: '講歸宿，重保障，講身份，重形象，多音感，善品嘗，多直覺，易偏袒，多被動，會依賴，重目前，會仿效，喜夥伴，會交際，能謙卑，會討好，捨不得，易怯懦，重享樂，易懈怠',
        jingyu: '人相依，事方便，遇難關，有退路，得現成，少辛苦',
        zaohua: '要請求與感恩，要合群與親近賢者，更要讚美與給人方便。便可趨吉！不要偏私與護短，也不要捨不得與偷懶，更不要虛榮與虧欠。便可避凶！',
        xiangke: '乙未、丁卯等二組干支，皆對乙卯不利！'
    },
    '丙辰': {
        tianxing: '能審查，會分析，能解說，重細節，喜分明，會計算，有戒心，易猜疑，有抱負，會奮發，喜威風，會誇口，喜獨特，會自負，喜比較，易嫌棄，能大方，易直言，多愁緒，不耐煩',
        jingyu: '逢資源，卻耗費，遇風光，卻麻煩，多人事，少如意',
        zaohua: '要清心與廉明，也要精神充沛與合群，更要助人生長與助人醒悟。便可趨吉！不要逞強與誇口，也不要多疑與輕視別人更不要虛榮與怨恨。便可避凶！',
        xiangke: '丙寅、丙申、丙午、丙辰、戊辰、庚辰、壬辰、甲辰等八組干支，皆對丙辰不利！'
    },
    '丁巳': {
        tianxing: '講規矩，重尊嚴，有志氣，會奮發，講信用，能勤快，有耐性，易急忙，講公道，能屈伸，重情義，會交際，重傳統，會戀舊，能施捨，會節儉，多音感，易感動，多直覺，易大意',
        jingyu: '遭束縛，減收成，遇風險，添負擔，多耗費，少清閒',
        zaohua: '要反省與公道，也要精神充沛與尊重彼此，更要助人生長與給人退路。便可趨吉！不要逞強與誇口，也不要虛榮與大意更不要恐懼與悲傷。便可避凶！',
        xiangke: '丁卯、丁亥、丁未、丁巳等四組干支，皆對丁巳不利!'
    },
    '戊午': {
        tianxing: '能觀察，會分析，能解說，易沈默，喜分明，會計算，有戒心，易擔憂，會慎重，易猶豫，重傳統，會戀舊，能包容，會節儉，多嚴肅，易感傷，有耐性，易怯懦，多被動，易消極',
        jingyu: '遭冷落，嘗別離，事挫折，多孤立，居下風，多委屈',
        zaohua: '要清心與反省，也要尊重彼此與廉明，更要助人醒悟與給人退路。便可趨吉！不要愁悶與悲傷，也不要自卑與悲觀，更不要厭惡與恐懼。便可避凶！',
        xiangke: '戊辰、戊寅、戊子、戊申、戊午、庚午、壬午、甲午等八組干支，皆對戊午不利！'
    },
    '己未': {
        tianxing: '能審查，會分析，能解說，易沈默，喜分明，會計算，有戒心，易猜疑，喜獨特，會自負，喜比較，重細節，能包容，易嫌棄，能冷靜，多被動，能鎮定，易懈怠，多愁緒，易灰心',
        jingyu: '人湊合，添憂愁，事混雜，添麻煩，路茫茫，添失意',
        zaohua: '要清心與研習，也要一視同仁與廉明，更要助人醒悟與成人之美。便可趨吉！不要多疑與輕視別人，也不要灰心與苟且更不要虛度與怨恨。便可避凶！',
        xiangke: '己未、辛未、癸未、乙未、丁未等五組干支，皆對己未不利！'
    },
    '庚申': {
        tianxing: '講原則，多刻板，重慣例，多固執，能自制，多拘束，能樸素，會節儉，有耐性，易沈悶，能獨自，易孤僻，能鎮定，易遲緩，能淡泊，易疏忽，有骨氣，易悲觀，多被動，易懈怠',
        jingyu: '遭阻礙，遇僵局，多孤立，少機緣，多乏味，添無奈',
        zaohua: '要自制與從簡，也要自立與實在，更要恆心與引人靜心。便可趨吉！不要沈悶與孤僻，也不要頑固與明知故犯，更不要悲觀與虛度。便可避凶！',
        xiangke: '庚午、庚辰、庚寅、庚申、壬申、甲申、戊申等七組干支，皆對庚申不利！'
    },
    '辛酉': {
        tianxing: '有志氣，會爭取，能勤快，易急忙，重情義，會交際，能強記，易牽掛，多音感，善品嘗，多直覺，易聽信，喜新奇，重形象，喜支配，會多事，喜炫耀，會誇口，能捍衛，易激動',
        jingyu: '勢活躍，添風光，多人事，添爭端，雖收成，有損耗',
        zaohua: '要警覺與好學，也要親近賢者與合群，更要讚美與令人起勁。便可趨吉！不要急躁與衝動，也不要逞強與誇口，更不要賭氣與侵犯。便可避凶！',
        xiangke: '辛未、丁酉等二組干支，皆對辛酉不利！'
    },
    '壬戌': {
        tianxing: '能聯想，會設計，能客觀，會仿效，能變通，會取巧，能健談，會婉轉，能包容，易心軟，能適應，易寬心，喜外出，能隨和，有耐性，會敷衍，能樂天，易大意，多被動，易鬆懈',
        jingyu: '勢未足，行可通，遇波折，有轉機，多自在，少辛苦',
        zaohua: '要樂天與厚道，也要增廣見識與溝通，更要成人之美與給人自由。便可趨吉！不要姑息與大意，也不要找藉口與多言，更不要偷懶與苟且。便可避凶！',
        xiangke: '壬申、壬午、壬辰、壬寅、戊戌、庚戌等六組干支，皆對壬戌不利！'
    },
    '癸亥': {
        tianxing: '能聯想，會設計，能客觀，會進取，能變通，易改換，喜優越，會取巧，多藉口，會婉轉，多思緒，易分心，重尊嚴，能屈伸，重形象，能緩急，會講究，能隨緣，會眷戀，能忘懷',
        jingyu: '受器重，得優勢，遇難關，有轉機，可進退，忙亦閒',
        zaohua: '要溝通與隨緣，也要專精與替人著想，更要勸人向善與給人自由。便可趨吉！不要自以為是與勉強，也不要找藉口與偷懶，更不要胡思亂想與失神。便可避凶！',
        xiangke: '癸未、丁亥等二組干支，皆對癸亥不利！'
    }
};

document.addEventListener('DOMContentLoaded', loadRecentInputs);

document.getElementById('calculate-btn').addEventListener('click', calculateBazi);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateBazi();
    }
});

document.getElementsByName('calendar').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('leap-month-group').style.display = this.value === 'lunar' ? 'flex' : 'none';
        updatePlaceholders(this.value);
        updateBirthdayDisplay();
    });
});

['year', 'month', 'day'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateBirthdayDisplay);
});

function updateBirthdayDisplay() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const isLunarInput = document.getElementById('lunar').checked;
    const isLeap = document.getElementById('leap-month').checked;
    const displayDiv = document.getElementById('birthday-display');

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        displayDiv.innerHTML = '請輸入完整的出生年月日';
        return;
    }

    try {
        if (isLunarInput) {
            const lunarMonth = isLeap ? -month : month;
            const solar = Lunar.fromYmd(year, lunarMonth, day).getSolar();
            displayDiv.innerHTML = `西曆: ${solar.getYear()}年${solar.getMonth()}月${solar.getDay()}日 | 農曆: ${year}年${isLeap ? '閏' : ''}${month}月${day}日`;
        } else {
            const lunar = Lunar.fromDate(new Date(year, month - 1, day));
            displayDiv.innerHTML = `西曆: ${year}年${month}月${day}日 | 農曆: ${lunar.getYearInGanZhi()}${lunar.getYearShengXiao()}年 ${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
        }
    } catch (e) {
        displayDiv.innerHTML = '日期格式不正確';
    }
}

function loadRecentInputs() {
    const recentInputs = JSON.parse(localStorage.getItem('baziRecentInputs')) || [];
    renderRecentInputs(recentInputs);
}

function saveRecentInput(input) {
    let recentInputs = JSON.parse(localStorage.getItem('baziRecentInputs')) || [];
    // Avoid duplicates
    recentInputs = recentInputs.filter(item => !(item.year === input.year && item.month === input.month && item.day === input.day && item.hour === input.hour && item.isLunar === input.isLunar && item.isLeap === input.isLeap));
    recentInputs.unshift(input);
    if (recentInputs.length > 5) {
        recentInputs.pop();
    }
    localStorage.setItem('baziRecentInputs', JSON.stringify(recentInputs));
    renderRecentInputs(recentInputs);
}

function renderRecentInputs(recentInputs) {
    const list = document.getElementById('recent-inputs-list');
    list.innerHTML = '';
    recentInputs.forEach((input, index) => {
        const li = document.createElement('li');
        const dateString = input.isLunar ? `農曆 ${input.year}-${input.month}-${input.day}${input.isLeap ? ' (閏)' : ''}` : `西曆 ${input.year}-${input.month}-${input.day}`;
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.contentEditable = true;
        nameDiv.setAttribute('data-index', index);
        nameDiv.textContent = input.name || '點此編輯名稱';

        nameDiv.addEventListener('focus', (e) => {
            if (e.target.textContent === '點此編輯名稱') {
                setTimeout(() => { // Use timeout to ensure focus is set before selection
                    const range = document.createRange();
                    range.selectNodeContents(e.target);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                }, 1);
            }
        });

        nameDiv.addEventListener('blur', (e) => {
            const index = e.target.getAttribute('data-index');
            let recentInputs = JSON.parse(localStorage.getItem('baziRecentInputs')) || [];
            if (recentInputs[index]) {
                recentInputs[index].name = e.target.textContent;
                localStorage.setItem('baziRecentInputs', JSON.stringify(recentInputs));
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;'; // A simple "x" for the delete icon
        deleteBtn.setAttribute('data-index', index);

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the li click event from firing
            const indexToDelete = parseInt(e.target.getAttribute('data-index'));
            let recentInputs = JSON.parse(localStorage.getItem('baziRecentInputs')) || [];
            recentInputs.splice(indexToDelete, 1);
            localStorage.setItem('baziRecentInputs', JSON.stringify(recentInputs));
            renderRecentInputs(recentInputs);
        });

        li.innerHTML = `<div class="date">${dateString}</div>`;
        li.appendChild(nameDiv);
        li.appendChild(deleteBtn); // Append the button

        li.addEventListener('click', (e) => {
            if (e.target.className !== 'name' && e.target.className !== 'delete-btn') {
                document.getElementById('year').value = input.year;
                document.getElementById('month').value = input.month;
                document.getElementById('day').value = input.day;
                document.getElementById('hour').value = input.hour;
                document.getElementById(input.isLunar ? 'lunar' : 'gregorian').checked = true;
                document.getElementById('leap-month').checked = input.isLeap;
                document.getElementById('leap-month-group').style.display = input.isLunar ? 'flex' : 'none';
                updateBirthdayDisplay();
                calculateBazi();
            }
        });
        list.appendChild(li);
    });
}

function openPillarTab(evt, pillarName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pillarName).style.display = "block";
  evt.currentTarget.className += " active";
}

function getYearGanzhi(year) {
    const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const offset = year - 4;
    const index = (offset % 60 + 60) % 60;

    const heavenlyStem = heavenlyStems[index % 10];
    const earthlyBranch = earthlyBranches[index % 12];

    return heavenlyStem + earthlyBranch;
}

const threeHarmonies = {
    '申': '申子辰', '子': '申子辰', '辰': '申子辰',
    '巳': '巳酉丑', '酉': '巳酉丑', '丑': '巳酉丑',
    '寅': '寅午戌', '午': '寅午戌', '戌': '寅午戌',
    '亥': '亥卯未', '卯': '亥卯未', '未': '亥卯未'
};

const fiveCombinations = {
    '甲': '甲己', '己': '甲己',
    '乙': '乙庚', '庚': '乙庚',
    '丙': '丙辛', '辛': '丙辛',
    '丁': '丁壬', '壬': '丁壬',
    '戊': '戊癸', '癸': '戊癸'
};

const sanHeData = {
    '申子辰': {
        '子': { start: { m: 12, d: 1, t: '23:00' }, end: { m: 1, d: 1, t: '09:29' } },
        '丑': { start: { m: 1, d: 1, t: '09:30' }, end: { m: 1, d: 31, t: '19:59' } },
        '寅': { start: { m: 1, d: 31, t: '20:00' }, end: { m: 3, d: 2, t: '06:29' } },
        '卯': { start: { m: 3, d: 2, t: '06:30' }, end: { m: 4, d: 1, t: '16:59' } },
        '辰': { start: { m: 4, d: 1, t: '17:00' }, end: { m: 5, d: 2, t: '03:29' } },
        '巳': { start: { m: 5, d: 2, t: '03:30' }, end: { m: 6, d: 1, t: '13:59' } },
        '午': { start: { m: 6, d: 1, t: '14:00' }, end: { m: 7, d: 2, t: '00:29' } },
        '未': { start: { m: 7, d: 2, t: '00:30' }, end: { m: 8, d: 1, t: '10:59' } },
        '申': { start: { m: 8, d: 1, t: '11:00' }, end: { m: 8, d: 31, t: '21:29' } },
        '酉': { start: { m: 8, d: 31, t: '21:30' }, end: { m: 10, d: 1, t: '07:59' } },
        '戌': { start: { m: 10, d: 1, t: '08:00' }, end: { m: 10, d: 31, t: '18:29' } },
        '亥': { start: { m: 10, d: 31, t: '18:30' }, end: { m: 12, d: 1, t: '04:59' } }
    },
    '巳酉丑': {
        '子': { start: { m: 12, d: 1, t: '05:00' }, end: { m: 12, d: 31, t: '15:29' } },
        '丑': { start: { m: 12, d: 31, t: '15:30' }, end: { m: 1, d: 31, t: '01:59' } },
        '寅': { start: { m: 1, d: 31, t: '02:00' }, end: { m: 3, d: 2, t: '12:29' } },
        '卯': { start: { m: 3, d: 2, t: '12:30' }, end: { m: 4, d: 1, t: '22:59' } },
        '辰': { start: { m: 4, d: 1, t: '23:00' }, end: { m: 5, d: 2, t: '09:29' } },
        '巳': { start: { m: 5, d: 2, t: '09:30' }, end: { m: 6, d: 1, t: '19:59' } },
        '午': { start: { m: 6, d: 1, t: '20:00' }, end: { m: 7, d: 2, t: '06:29' } },
        '未': { start: { m: 7, d: 2, t: '06:30' }, end: { m: 8, d: 1, t: '16:59' } },
        '申': { start: { m: 8, d: 1, t: '17:00' }, end: { m: 9, d: 1, t: '03:29' } },
        '酉': { start: { m: 9, d: 1, t: '03:30' }, end: { m: 10, d: 1, t: '13:59' } },
        '戌': { start: { m: 10, d: 1, t: '14:00' }, end: { m: 11, d: 1, t: '00:29' } },
        '亥': { start: { m: 11, d: 1, t: '00:30' }, end: { m: 12, d: 1, t: '10:59' } }
    },
    '寅午戌': {
        '子': { start: { m: 12, d: 1, t: '11:00' }, end: { m: 12, d: 31, t: '21:29' } },
        '丑': { start: { m: 12, d: 31, t: '21:30' }, end: { m: 1, d: 31, t: '07:59' } },
        '寅': { start: { m: 1, d: 31, t: '08:00' }, end: { m: 3, d: 2, t: '18:29' } },
        '卯': { start: { m: 3, d: 2, t: '18:30' }, end: { m: 4, d: 2, t: '04:59' } },
        '辰': { start: { m: 4, d: 2, t: '05:00' }, end: { m: 5, d: 2, t: '15:29' } },
        '巳': { start: { m: 5, d: 2, t: '15:30' }, end: { m: 6, d: 2, t: '01:59' } },
        '午': { start: { m: 6, d: 2, t: '02:00' }, end: { m: 7, d: 2, t: '12:29' } },
        '未': { start: { m: 7, d: 2, t: '12:30' }, end: { m: 8, d: 1, t: '22:59' } },
        '申': { start: { m: 8, d: 1, t: '23:00' }, end: { m: 9, d: 1, t: '09:29' } },
        '酉': { start: { m: 9, d: 1, t: '09:30' }, end: { m: 10, d: 1, t: '19:59' } },
        '戌': { start: { m: 10, d: 1, t: '20:00' }, end: { m: 11, d: 1, t: '06:29' } },
        '亥': { start: { m: 11, d: 1, t: '06:30' }, end: { m: 12, d: 1, t: '16:59' } }
    },
    '亥卯未': {
        '子': { start: { m: 12, d: 1, t: '17:00' }, end: { m: 1, d: 1, t: '03:29' } },
        '丑': { start: { m: 1, d: 1, t: '03:30' }, end: { m: 1, d: 31, t: '13:59' } },
        '寅': { start: { m: 1, d: 31, t: '14:00' }, end: { m: 3, d: 3, t: '00:29' } },
        '卯': { start: { m: 3, d: 3, t: '00:30' }, end: { m: 4, d: 2, t: '10:59' } },
        '辰': { start: { m: 4, d: 2, t: '11:00' }, end: { m: 5, d: 2, t: '21:29' } },
        '巳': { start: { m: 5, d: 2, t: '21:30' }, end: { m: 6, d: 2, t: '07:59' } },
        '午': { start: { m: 6, d: 2, t: '08:00' }, end: { m: 7, d: 2, t: '18:29' } },
        '未': { start: { m: 7, d: 2, t: '18:30' }, end: { m: 8, d: 2, t: '04:59' } },
        '申': { start: { m: 8, d: 2, t: '05:00' }, end: { m: 9, d: 1, t: '15:29' } },
        '酉': { start: { m: 9, d: 1, t: '15:30' }, end: { m: 10, d: 2, t: '01:59' } },
        '戌': { start: { m: 10, d: 2, t: '02:00' }, end: { m: 11, d: 1, t: '12:29' } },
        '亥': { start: { m: 11, d: 1, t: '12:30' }, end: { m: 12, d: 1, t: '22:59' } }
    }
};

const wuHeData = {
    '甲己': { '子': '甲子', '丑': '乙丑', '寅': '丙寅', '卯': '丁卯', '辰': '戊辰', '巳': '己巳', '午': '庚午', '未': '辛未', '申': '壬申', '酉': '癸酉', '戌': '甲戌', '亥': '乙亥' },
    '乙庚': { '子': '丙子', '丑': '丁丑', '寅': '戊寅', '卯': '己卯', '辰': '庚辰', '巳': '辛巳', '午': '壬午', '未': '癸未', '申': '甲申', '酉': '乙酉', '戌': '丙戌', '亥': '丁亥' },
    '丙辛': { '子': '戊子', '丑': '己丑', '寅': '庚寅', '卯': '辛卯', '辰': '壬辰', '巳': '癸巳', '午': '甲午', '未': '乙未', '申': '丙申', '酉': '丁酉', '戌': '戊戌', '亥': '己亥' },
    '丁壬': { '子': '庚子', '丑': '辛丑', '寅': '壬寅', '卯': '癸卯', '辰': '甲辰', '巳': '乙巳', '午': '丙午', '未': '丁未', '申': '戊申', '酉': '己酉', '戌': '庚戌', '亥': '辛亥' },
    '戊癸': { '子': '壬子', '丑': '癸丑', '寅': '甲寅', '卯': '乙卯', '辰': '丙辰', '巳': '丁巳', '午': '戊午', '未': '己未', '申': '庚申', '酉': '辛酉', '戌': '壬戌', '亥': '癸亥' }
};

const fortuneData = {
    '甲子': '縱橫天外萬象新',
    '甲寅': '夢遊彩虹空歡笑',
    '甲辰': '流落愁城收覆水',
    '甲午': '苦笑滄桑添負擔',
    '甲申': '錦繡行囊盤纏輕',
    '甲戌': '出竅飛昇大羅天',
    '乙丑': '水漲船高順風航',
    '乙卯': '依山傍水賞風景',
    '乙巳': '爐邊取暖削柴燒',
    '乙未': '人多糧少寄託愁',
    '乙酉': '山泉止渴掘井蓄',
    '乙亥': '尋歡作樂荒廢田',
    '丙子': '勢如破竹貫日月',
    '丙寅': '四面撒種八方開',
    '丙辰': '樹大招風斷枝憾',
    '丙午': '旗大杆小硬撐風',
    '丙申': '開枝散葉樸實根',
    '丙戌': '海闊天空萬里疆',
    '丁丑': '洞中有天如來住',
    '丁卯': '寄人籬下寸步行',
    '丁巳': '甕中掙扎拓領域',
    '丁未': '避坑落井愈下風',
    '丁酉': '馬奔叢林追前茅',
    '丁亥': '池中湊合大海遠',
    '戊子': '欲往瑤池路辛酸',
    '戊寅': '睡在寒窯夢瓊樓',
    '戊辰': '逆水行舟到荒山',
    '戊午': '內憂外患嘆無奈',
    '戊申': '殘燭孤影待天明',
    '戊戌': '香火稀薄廟清閒',
    '己丑': '天造地設寬宏寺',
    '己卯': '冬暖夏涼臥太和',
    '己巳': '張燈結彩平安夜',
    '己未': '雲開月明照心清',
    '己酉': '招兵買馬太平日',
    '己亥': '濁水自清任其流',
    '庚子': '鳯住雞籠不隨俗',
    '庚寅': '籠中展翅舞彩雲',
    '庚辰': '悶在井中難耐枯',
    '庚午': '退守荒島難脫困',
    '庚申': '閉門關窗獨黯淡',
    '庚戌': '深山粗茶恬淡香',
    '辛丑': '左右逢源抱乾坤',
    '辛卯': '騎虎生風夏日涼',
    '辛巳': '日忙收成夜宴客',
    '辛未': '損兵折將換危城',
    '辛酉': '慾海浮沉風波連',
    '辛亥': '濃淡起伏走馬燈',
    '壬子': '南北飛雁渡寒冬',
    '壬寅': '過眼雲煙浮萍飄',
    '壬辰': '餐風宿露遠平淡',
    '壬午': '驚弓之鳥無安處',
    '壬申': '走馬看花等閒過',
    '壬戌': '五湖同悅輕舟遊',
    '癸丑': '飛龍在天納精華',
    '癸卯': '乘龍直上峰頂宿',
    '癸巳': '風雲際會降甘霖',
    '癸未': '更上青雲不勝寒',
    '癸酉': '駿馬追風日千里',
    '癸亥': '身穿錦衣逐黃袍'
};

function calculateBazi() {
    const rawYear = parseInt(document.getElementById('year').value);
    const rawMonth = parseInt(document.getElementById('month').value);
    const rawDay = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);

    if (isNaN(rawYear) || isNaN(rawMonth) || isNaN(rawDay) || isNaN(hour)) {
        alert('輸入有效的年、月、日、時');
        return;
    }

    const isLunar = document.getElementById('lunar').checked;
    const isLeap = document.getElementById('leap-month').checked;

    let year = rawYear;
    let month = rawMonth;
    let day = rawDay;

    if (isLunar) {
        if (isLeap) {
            const leapMonth = LunarYear.fromYear(year).getLeapMonth();
            if (leapMonth === 0) {
                alert(year + '年沒有閏月。');
                return;
            }
            if (leapMonth !== month) {
                alert(year + '年的閏月是' + leapMonth + '月，不是' + month + '月。');
                return;
            }
        }

        try {
            const lunarMonth = isLeap ? -month : month;
            const solar = Lunar.fromYmd(year, lunarMonth, day).getSolar();
            year = solar.getYear();
            month = solar.getMonth();
            day = solar.getDay();
        } catch (e) {
            alert('農曆日期轉換失敗，檢查輸入的日期是否有效。');
            console.error('Lunar to Solar conversion failed:', e);
            return;
        }
    }

    const yearPillarResult = calculateYearPillar(year, month, day, hour);
    const yearPillar = yearPillarResult.pillar;
    const monthPillar = calculateMonthPillar(year, month, day, hour, yearPillar);
    const dayPillar = calculateDayPillar(year, month, day);
    const hourPillar = calculateHourPillar(hour, dayPillar);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>年柱: <span class="pillar-text">${yearPillar}</span> (${fortuneData[yearPillar] || ''})</p>
        <p>月柱: <span class="pillar-text">${monthPillar}</span> (${fortuneData[monthPillar] || ''})</p>
        <p>日柱: <span class="pillar-text">${dayPillar}</span> (${fortuneData[dayPillar] || ''})</p>
        <p>時柱: <span class="pillar-text">${hourPillar}</span> (${fortuneData[hourPillar] || ''})</p>
    `;

    const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
    calculateGanzhiCounts(pillars);
    updateTianxingWuxing(pillars);
    calculateDaYun(pillars, year);

    document.getElementById('ganzhi-count').style.display = 'grid';

    // Open the first tab by default
    if(document.getElementsByClassName('tablinks')[0]){
        document.getElementsByClassName('tablinks')[0].click();
    }

    const recentInputs = JSON.parse(localStorage.getItem('baziRecentInputs')) || [];
    let existingName = '';
    const existingEntry = recentInputs.find(item => 
        item.year === rawYear && 
        item.month === rawMonth && 
        item.day === rawDay && 
        item.hour === hour && 
        item.isLunar === isLunar && 
        item.isLeap === isLeap
    );

    if (existingEntry) {
        existingName = existingEntry.name;
    }

    // Save the input
    saveRecentInput({
        year: rawYear,
        month: rawMonth,
        day: rawDay,
        hour: hour,
        isLunar: isLunar,
        isLeap: isLeap,
        name: existingName || ''
    });
}

function updateTianxingWuxing(pillars) {
    const pillarIds = ['year-pillar', 'month-pillar', 'day-pillar', 'hour-pillar'];
    for (let i = 0; i < pillars.length; i++) {
        const pillar = pillars[i];
        const pillarId = pillarIds[i];
        const container = document.getElementById(pillarId);
        const data = tianxingData[pillar];
        if (data) {
            container.innerHTML = `
                <h3>${pillar}</h3>
                <div class="info-item">
                    <span class="info-label">天性:</span>
                    <span class="info-text">${data.tianxing}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">境遇:</span>
                    <span class="info-text">${data.jingyu}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">造化:</span>
                    <span class="info-text">${data.zaohua}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">相尅:</span>
                    <span class="info-text">${data.xiangke}</span>
                </div>
            `;
        } else {
            container.innerHTML = `<h3>${pillar}</h3><p>無資料</p>`;
        }
    }
}

function calculateYearPillar(year, month, day, hour) {
    let tempYearGanzhi = getYearGanzhi(year);
    if (!tempYearGanzhi) return { pillar: '無效年份', correctionNeeded: false };

    const tempEarthlyBranch = tempYearGanzhi.substring(1, 2);
    const sanHeGroup = threeHarmonies[tempEarthlyBranch];
    const sanHeGroupData = sanHeData[sanHeGroup];

    // The last month in the cycle is '亥' for 申子辰, 巳酉丑, 寅午戌 and '亥' for 亥卯未 as well
    const lastMonthData = sanHeGroupData['亥'];

    const [endHour, endMinute] = lastMonthData.end.t.split(':').map(Number);
    const endDate = new Date(year, lastMonthData.end.m - 1, lastMonthData.end.d, endHour, endMinute);

    const inputDate = new Date(year, month - 1, day, hour);

    if (inputDate > endDate) {
        return { pillar: getYearGanzhi(year + 1), correctionNeeded: true };
    } else {
        return { pillar: tempYearGanzhi, correctionNeeded: false };
    }
}

function calculateMonthPillar(year, month, day, hour, yearPillar) {
    const heavenlyStem = yearPillar.substring(0, 1);
    const earthlyBranch = yearPillar.substring(1, 2);

    const sanHeGroup = threeHarmonies[earthlyBranch];
    const sanHeGroupData = sanHeData[sanHeGroup];
    const inputDate = new Date(year, month - 1, day, hour);

    let monthEarthlyBranch = '';

    for (const branch in sanHeGroupData) {
        const data = sanHeGroupData[branch];
        const [startHour, startMinute] = data.start.t.split(':').map(Number);
        const [endHour, endMinute] = data.end.t.split(':').map(Number);

        let startYear, endYear;

        if (data.start.m > data.end.m) { // Range crosses the new year
            if (month >= data.start.m) {
                startYear = year;
                endYear = year + 1;
            } else {
                startYear = year - 1;
                endYear = year;
            }
        } else { // Range is within the same year
            startYear = year;
            endYear = year;
        }

        const startDate = new Date(startYear, data.start.m - 1, data.start.d, startHour, startMinute);
        const endDate = new Date(endYear, data.end.m - 1, data.end.d, endHour, endMinute);

        if (inputDate >= startDate && inputDate <= endDate) {
            monthEarthlyBranch = branch;
            break;
        }
    }

    if (monthEarthlyBranch === '') {
        const yearPillarResult = calculateYearPillar(year, month, day, hour);
        if (yearPillarResult.correctionNeeded) {
            const correctedYearPillar = yearPillarResult.pillar;
            const correctedEarthlyBranch = correctedYearPillar.substring(1, 2);
            const correctedSanHeGroup = threeHarmonies[correctedEarthlyBranch];
            const correctedSanHeGroupData = sanHeData[correctedSanHeGroup];
            for (const branch in correctedSanHeGroupData) {
                const data = correctedSanHeGroupData[branch];
                const [startHour, startMinute] = data.start.t.split(':').map(Number);
                const [endHour, endMinute] = data.end.t.split(':').map(Number);

                let startYear, endYear;

                if (data.start.m > data.end.m) { // Range crosses the new year
                    if (month >= data.start.m) {
                        startYear = year;
                        endYear = year + 1;
                    } else {
                        startYear = year - 1;
                        endYear = year;
                    }
                } else { // Range is within the same year
                    startYear = year;
                    endYear = year;
                }

                const startDate = new Date(startYear, data.start.m - 1, data.start.d, startHour, startMinute);
                const endDate = new Date(endYear, data.end.m - 1, data.end.d, endHour, endMinute);

                if (inputDate >= startDate && inputDate <= endDate) {
                    monthEarthlyBranch = branch;
                    break;
                }
            }
        }
    }


    const wuHeGroup = fiveCombinations[heavenlyStem];
    return wuHeData[wuHeGroup][monthEarthlyBranch];
}

function calculateDayPillar(year, month, day) {
    const refDate = new Date(Date.UTC(2024, 0, 1)); // 2024-01-01 is 甲子 (Jia Zi), index 0 in 60-year cycle
    const inputDate = new Date(Date.UTC(year, month - 1, day));

    const diffTime = inputDate.getTime() - refDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const dayGanzhiIndex = (diffDays % 60 + 60) % 60; // Ensure positive index

    const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const ganzhiCycle = [];
    for (let i = 0; i < 60; i++) {
        ganzhiCycle.push(heavenlyStems[i % 10] + earthlyBranches[i % 12]);
    }

    return ganzhiCycle[dayGanzhiIndex];
}


function calculateHourPillar(hour, dayPillar) {
    const dayHeavenlyStem = dayPillar.substring(0, 1);

    const hourEarthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    // 23:00 is the start of the new day, so it is the first hour (子)
    const hourEarthlyBranch = hour >= 23 ? '子' : hourEarthlyBranches[Math.floor((hour + 1) / 2)];

    const wuHeGroup = fiveCombinations[dayHeavenlyStem];
    return wuHeData[wuHeGroup][hourEarthlyBranch];
}

function calculateGanzhiCounts(pillars) {
    const container = document.getElementById('ganzhi-count');
    const counts = {
        'jiayin': 0,
        'yimao': 0,
        'bingsi': 0,
        'dingwu': 0,
        'wuchenwei': 0,
        'jixuchou': 0,
        'gengshen': 0,
        'xinyou': 0,
        'renhai': 0,
        'guizi': 0
    };

    const groupMapping = {
        '甲': 'jiayin', '寅': 'jiayin',
        '乙': 'yimao', '卯': 'yimao',
        '丙': 'bingsi', '巳': 'bingsi',
        '丁': 'dingwu', '午': 'dingwu',
        '戊': 'wuchenwei', '辰': 'wuchenwei', '未': 'wuchenwei',
        '己': 'jixuchou', '戌': 'jixuchou', '丑': 'jixuchou',
        '庚': 'gengshen', '申': 'gengshen',
        '辛': 'xinyou', '酉': 'xinyou',
        '壬': 'renhai', '亥': 'renhai',
        '癸': 'guizi', '子': 'guizi'
    };

    const allChars = pillars.join('').split('');

    for (const char of allChars) {
        const group = groupMapping[char];
        if (group) {
            counts[group]++;
        }
    }

    container.innerHTML = `
        <div class="ganzhi-grid">
            <div>-甲寅(膽)--脫離: ${counts.jiayin}</div>
            <div>-乙卯(肝)--附著: ${counts.yimao}</div>
            <div>-丙巳(小腸)--擴張: ${counts.bingsi}</div>
            <div>-丁午(心)--萎縮: ${counts.dingwu}</div>
            <div>-戊辰未(胃)--分裂: ${counts.wuchenwei}</div>
            <div>-己戌丑(脾)--混合: ${counts.jixuchou}</div>
            <div>-庚申(大腸)--凝固: ${counts.gengshen}</div>
            <div>-辛酉(肺)--吸引: ${counts.xinyou}</div>
            <div>-壬亥(膀/焦)--漂浮: ${counts.renhai}</div>
            <div>-癸子(腎/包)--滲透: ${counts.guizi}</div>
        </div>
    `;
}

function calculateDaYun(pillars, birthYear) {
    const tableBody = document.querySelector('#da-yun-table tbody');
    if (!tableBody) {
        console.error('Da Yun table body not found!');
        return;
    }

    // Clear previous results
    tableBody.innerHTML = '';

    const orders = pillars.map(p => ganzhiOrder[p]);

    if (orders.some(o => o === undefined)) {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 4;
        cell.textContent = '大運信息不完整，無法計算。';
        return;
    }

    const minOrder = Math.min(...orders);

    const startYears = orders.map(order => birthYear + (order - minOrder));

    const daYunResults = pillars.map((pillar, index) => ({
        pillar: pillar,
        startYear: startYears[index]
    }));

    daYunResults.sort((a, b) => a.startYear - b.startYear);

    daYunResults.forEach(result => {
        const age1 = result.startYear - birthYear;
        const age2 = age1 + 60;

        const row = tableBody.insertRow();

        const cell1 = row.insertCell();
        cell1.textContent = result.pillar;

        const cell2 = row.insertCell();
        cell2.textContent = `${result.startYear}年`;

        const cell3 = row.insertCell();
        cell3.textContent = `${age1}歲`;

        const cell4 = row.insertCell();
        cell4.textContent = `${age2}歲`;
    });
}