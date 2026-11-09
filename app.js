/* دوقاب v2.8 — منطق برنامه (بدون تغییر نسبت به v2.7) + قالب‌های UI بازسازی‌شده با AIhub Design System */
const D={"cats":[{"n":1,"t":"زاویهٔ دوربین و جهت عکاسی","ins":"جهت دوربین نسبت به زوج را انتخاب کن.","tip":"برای شروع از زاویهٔ هم‌سطح چشم یا سه‌رخ استفاده کن؛ زاویه‌های بسیار پایین یا بالا چهره را تغییر می‌دهند."},{"n":2,"t":"حالت سر و شانه‌ها","ins":"جهت نگاه، تماس چهره‌ها و حالت سر را مشخص کن.","tip":"در هر درخواست فقط یک حالت سر انتخاب کن؛ چند تماس هم‌زمان چهره‌ها را به‌هم می‌ریزد."},{"n":3,"t":"آغوش و لمس عاشقانه","ins":"نوع آغوش و محل قرارگیری دست‌ها را انتخاب کن.","tip":"اگر دست‌ها خراب درمی‌آید، محل دست را دقیق بنویس؛ مثلاً «دست راست روی کمر»."},{"n":4,"t":"ژست‌های ایستاده و راه رفتن","ins":"حالت بدن و نحوهٔ حرکت در حالت ایستاده را تعیین کن.","tip":"برای راه رفتن، جهت حرکت را هم بنویس: به‌سوی دوربین، دور از دوربین یا کنار هم."},{"n":5,"t":"ژست‌های نشسته و استراحت","ins":"ژست‌های آرام برای موقعیت‌های نشسته و استراحت.","tip":"ژست نشسته را با محل نشستن بنویس (مبل، نیمکت، زیرانداز)؛ وضعیت پاها از همان معلوم می‌شود."},{"n":6,"t":"لحظه‌های عاشقانه و صمیمیت","ins":"حس و تعامل میان دو نفر را در تصویر مشخص کن.","tip":"کد صمیمیت را با نور نرم یا ضدنور بنویس؛ حس تصویر محترمانه‌تر و سینمایی‌تر می‌شود."},{"n":7,"t":"کادربندی، برش و ترکیب‌بندی","ins":"اندازهٔ نما و جایگاه زوج در کادر را انتخاب کن.","tip":"کادر را همیشه پیش از نور و مکان انتخاب کن؛ کادر مشخص می‌کند چه چیزی در تصویر دیده می‌شود."},{"n":8,"t":"نورپردازی و حال‌وهوای نور","ins":"کیفیت، جهت و رنگ نور را مشخص کن.","tip":"از نقش نور فقط یک کد بنویس؛ دو منبع نور رقیب تصویر را گنگ می‌کند."},{"n":9,"t":"مکان و پس‌زمینهٔ عکس","ins":"محیطی متناسب با حال‌وهوای عکس انتخاب کن.","tip":"مکان را کوتاه و مشخص بنویس؛ توصیف‌های طولانی مکان، زوج را در تصویر کوچک می‌کند."},{"n":10,"t":"حرکت، پویایی و لحظه‌های طبیعی","ins":"حرکت و لحظه‌های خودجوش را به تصویر اضافه کن.","tip":"حرکت در کادر باز بهتر درمی‌آید؛ برای نمای نزدیک، کدهای حرکت را کم کن."},{"n":11,"t":"لباس و استایل زوج","ins":"هماهنگی پوشش و سبک لباس‌ها را مشخص کن.","tip":"لباس را با فصل و مکان هماهنگ کن؛ لباس تابستانی در صحنهٔ برفی تصویر را ناهماهنگ می‌کند."},{"n":12,"t":"وسایل صحنه و اکسسوری","ins":"وسیله‌ای متناسب با موقعیت عکس انتخاب کن.","tip":"فقط یک وسیله بگذار تا نگاه بیننده روی خود زوج بماند."},{"n":13,"t":"آب‌وهوا و عناصر طبیعی","ins":"وضعیت هوا و عناصر طبیعی صحنه را تعیین کن.","tip":"آب‌وهوا با نور هم‌زمان تصمیم می‌گیرد؛ باران را با نور ابری یا نئون هماهنگ کن، نه با نور مستقیم غروب."},{"n":14,"t":"سبک فیلم و عکاسی","ins":"بافت، رنگ و سبک نهایی عکس را انتخاب کن.","tip":"سبک رنگ و بافت را تعیین می‌کند؛ یک سبک بنویس، نه سه سبک."},{"n":15,"t":"لنز و افکت‌های دوربین","ins":"ظاهر لنز و افکت‌های بصری تصویر را مشخص کن.","tip":"لنز را آخر بنویس؛ ۸۵ میلی‌متری برای چهره و ۳۵ میلی‌متری برای نشان‌دادن محیط مناسب‌تر است."},{"n":16,"t":"مراسم، فرهنگ و حالت محتاط","ins":"فرهنگ، مراسم و پوشش را متناسب با مخاطب و موقعیت انتخاب کن.","tip":"اگر مخاطب تصویر حالت محتاط می‌خواهد، یکی از کدهای فاصلهٔ محترمانه یا پوشش موقر را در ابتدای ترکیب بگذار."}],"codes":[["backviewcouple","عکاسی از زوج از پشت سر","photographed from behind the couple",1,"frame",0],["dutchanglecouple","دوربین کمی کج؛ حس پویا و سینمایی","slightly tilted camera angle, dynamic cinematic feel",1,"frame",0],["overtheshoulder","عکاسی از روی شانهٔ یکی از افراد","over-the-shoulder shot",1,"frame",0],["overtheshoulderromance","نمای پشت؛ زن به شانهٔ مرد تکیه داده است","rear view over his shoulder, she leans on his shoulder",1,"frame",0],["frontportraitcouple","پرتره زوج از روبه‌رو","front-facing portrait of the couple",1,"frame",0],["sideprofilecouple","نمای نیم‌رخ زوج","side profile of the couple",1,"frame",0],["fullsideview","نمای بدن زوج از پهلو","full-body side view of the couple",1,"frame",0],["threequartercouple","زاویهٔ سه‌رخ از روبه‌رو","three-quarter front angle",1,"frame",0],["threequarterrear","زاویهٔ سه‌رخ از پشت","three-quarter rear angle",1,"frame",0],["lowanglecouple","عکاسی از زاویهٔ پایین","low-angle shot",1,"frame",0],["highanglecouple","عکاسی از زاویهٔ بالا","high-angle shot",1,"frame",0],["birdseyecouple","عکاسی از بالای سر، مستقیم رو به پایین","bird's-eye view shooting straight down",1,"frame",0],["wormseyeromance","زاویهٔ بسیار پایین و دراماتیک","very low dramatic worm's-eye angle",1,"frame",0],["eyelevelintimacy","دوربین هم‌سطح چشم‌ها","camera at eye level for intimacy",1,"frame",0],["distantcoupleshot","زوج کوچک در قابی وسیع","small couple in a wide frame",1,"frame",0],["closeupfrombehind","نمای نزدیک سر و شانه‌ها از پشت","close-up of heads and shoulders from behind",1,"frame",0],["profilekissshot","نمای نیم‌رخ هنگام بوسیدن","profile view during a kiss",1,"frame",1],["shoulderlevelshot","دوربین هم‌ارتفاع شانه‌های زوج","camera at the couple's shoulder height",1,"frame",0],["diagonalcomposition","ترکیب‌بندی مورب و پویا","dynamic diagonal composition",1,"frame",0],["reflectionangle","عکاسی از زوج از طریق بازتاب","photographed through a reflection",1,"frame",0],["headonshoulder","زن سرش را روی شانهٔ مرد می‌گذارد","she rests her head on his shoulder",2,"pose",0],["headonchest","زن سرش را روی سینهٔ مرد می‌گذارد","she rests her head on his chest",2,"pose",0],["foreheadtouch","پیشانی‌های زوج به هم می‌چسبد","foreheads touching",2,"pose",0],["foreheadkiss","مرد پیشانی زن را می‌بوسد","he kisses her forehead",2,"pose",1],["templekiss","بوسه‌ای ملایم بر شقیقه","a gentle kiss on the temple",2,"pose",1],["cheekkiss","مرد گونهٔ زن را می‌بوسد","he kisses her cheek",2,"pose",1],["nosetouch","بینی‌های زوج به هم برخورد می‌کند","noses touching",2,"pose",1],["facetofaceclose","چهره‌ها از فاصلهٔ نزدیک روبه‌روی هم است","faces close together, facing each other",2,"pose",0],["eyesclosedintimacy","زوج در لحظه‌ای صمیمی چشم‌ها را می‌بندند","eyes closed in an intimate moment",2,"pose",1],["lookingateachother","زوج به یکدیگر نگاه می‌کنند","looking at each other",2,"pose",0],["lookingawaytogether","هر دو به یک جهت نگاه می‌کنند","both looking in the same direction",2,"pose",0],["womanlookingathim","زن از کنار به مرد نگاه می‌کند","she looks at him from the side",2,"pose",0],["manlookingather","مرد با مهربانی به زن نگاه می‌کند","he looks at her tenderly",2,"pose",0],["headtiltromance","سرها با کمی انحنا به هم نزدیک می‌شود","heads tilted slightly toward each other",2,"pose",0],["chinonshoulder","چانهٔ زن روی شانهٔ مرد قرار می‌گیرد","her chin resting on his shoulder",2,"pose",0],["cheektocheek","گونه‌های زوج به هم می‌چسبد","cheek to cheek",2,"pose",1],["backofheadfocus","تمرکز تصویر بر پشت سر","focus on the back of the head",2,"pose",0],["hairoverhisshoulder","موهای زن روی شانهٔ مرد می‌ریزد","her hair falls over his shoulder",2,"pose",0],["gentlefacecupping","مرد صورت زن را آرام در دست می‌گیرد","he gently cups her face",2,"pose",0],["foreheadagainstbackhead","تماس پیشانی یکی با پشت سر دیگری","forehead resting against the other's back of head",2,"pose",0],["backhugcouple","مرد زن را از پشت در آغوش می‌گیرد","he hugs her from behind",3,"pose",0],["frontembrace","زوج از روبه‌رو همدیگر را در آغوش می‌گیرند","a front embrace",3,"pose",0],["tightromantichug","آغوش محکم و سرشار از احساس","a tight, emotional hug",3,"pose",0],["gentlewaisthug","دست‌ها آرام دور کمر حلقه می‌شود","arms wrapped gently around the waist",3,"pose",0],["armsaroundneck","دست‌ها دور گردن شریک عاطفی حلقه می‌شود","arms around the partner's neck",3,"pose",0],["armsaroundshoulder","یک دست دور شانه قرار می‌گیرد","one arm around the shoulder",3,"pose",0],["interlockedarms","راه رفتن با بازوهای در هم حلقه‌شده","walking with arms linked",3,"pose",0],["handholdingcloseup","نمای نزدیک دست‌های به هم گرفته","close-up of held hands",3,"pose",0],["fingersintertwined","انگشت‌های زوج در هم گره می‌خورد","fingers intertwined",3,"pose",0],["handoncheek","یک دست گونهٔ طرف مقابل را لمس می‌کند","a hand touching the other's cheek",3,"pose",0],["handonchest","دست زن روی سینهٔ مرد قرار می‌گیرد","her hand resting on his chest",3,"pose",0],["handonwaist","دست روی کمر قرار می‌گیرد","a hand resting on the waist",3,"pose",0],["gentlebacktouch","لمس ملایم پشت بدن","a gentle touch on the back",3,"pose",0],["hugfrombehindcloseup","نمای نزدیک آغوش از پشت","close-up of a hug from behind",3,"pose",0],["chinrestembrace","تکیه دادن سر یا چانه هنگام در آغوش گرفتن","resting the head or chin during an embrace",3,"pose",0],["protectiveembrace","مرد با حالتی حمایتگر زن را در آغوش می‌گیرد","he holds her in a protective embrace",3,"pose",0],["onearmembrace","در آغوش گرفتن با یک دست","a one-armed embrace",3,"pose",0],["foreheadembrace","آغوش همراه با تماس پیشانی‌ها","an embrace with foreheads touching",3,"pose",0],["comfortinghug","آغوش آرامش‌بخش","a comforting hug",3,"pose",0],["candidembrace","آغوش خودجوش و طبیعی","a spontaneous, natural embrace",3,"pose",0],["walkingcouplebackshot","نمای پشت زوج هنگام راه رفتن","the couple walking, seen from behind",4,"pose",0],["walkinghandinhand","راه رفتن دست‌در‌دست","walking hand in hand",4,"pose",0],["slowwalkromance","قدم زدن آرام و عاشقانه","a slow romantic stroll",4,"pose",0],["walkingbackhug","راه رفتن همراه با آغوش از پشت","walking while hugging from behind",4,"pose",0],["couplewalkingaway","زوج از دوربین دور می‌شوند","the couple walking away from the camera",4,"pose",0],["walkingintosunset","راه رفتن به‌سوی غروب خورشید","walking toward the sunset",4,"pose",0],["crosswalkcouple","راه رفتن زوج روی خط عابر پیاده","the couple crossing at a crosswalk",4,"pose",0],["streetwalkcandid","لحظهٔ طبیعی قدم زدن در خیابان","a candid street walk",4,"pose",0],["sidebysidewalk","راه رفتن در کنار یکدیگر","walking side by side",4,"pose",0],["womanholdinghisarm","زن بازوی مرد را می‌گیرد","she holds his arm",4,"pose",0],["manleadinghergently","مرد زن را آرام همراهی و هدایت می‌کند","he gently leads her",4,"pose",0],["slowdancestanding","رقص آرام در حالت ایستاده","a slow standing dance",4,"pose",0],["spinningheraround","مرد زن را آرام می‌چرخاند","he gently spins her around",4,"pose",0],["pullinghercloser","مرد زن را به خود نزدیک می‌کند","he pulls her closer",4,"pose",0],["standingforeheadtouch","تماس پیشانی‌ها در حالت ایستاده","standing with foreheads touching",4,"pose",0],["backtobackcouple","زوج پشت‌به‌پشت می‌ایستند","standing back to back",4,"pose",0],["leaningagainsteachother","بدن‌ها به یکدیگر تکیه می‌دهد","leaning against each other",4,"pose",0],["wallleanromance","زوج به دیوار تکیه می‌دهند","leaning against a wall together",4,"pose",0],["windowstandingcouple","زوج نزدیک پنجره می‌ایستند","standing near a window",4,"pose",0],["windyhairwalk","راه رفتن با موهایی که در باد حرکت می‌کند","walking with hair moving in the wind",4,"pose",0],["sittingclosecouple","نشستن نزدیک به هم و در کنار یکدیگر","sitting close together side by side",5,"pose",0],["shoulderleanseated","زن هنگام نشستن به شانهٔ مرد تکیه می‌دهد","seated, she leans on his shoulder",5,"pose",0],["laprestromance","زن سرش را روی پاهای مرد می‌گذارد","she rests her head on his lap",5,"pose",1],["couchcuddle","آغوش راحت و صمیمی روی مبل","a cozy cuddle on the couch",5,"pose",0],["windowseatcouple","نشستن با هم کنار پنجره","sitting together by the window",5,"pose",0],["bedsidecoupleportrait","پرتره زوج نشسته بر لبهٔ تخت","a couple portrait seated on the edge of a bed",5,"pose",0],["floorcuddle","نشستن روی زمین و در آغوش گرفتن","sitting on the floor in an embrace",5,"pose",0],["backtobackseated","نشستن پشت‌به‌پشت","sitting back to back",5,"pose",0],["kneelingromance","یکی از افراد مقابل دیگری زانو می‌زند","one partner kneels in front of the other",5,"pose",0],["crossleggedcouple","نشستن چهارزانو و نزدیک به هم","sitting cross-legged close together",5,"pose",0],["legsintertwined","نشستن با پاهای نزدیک یا در هم قرارگرفته","sitting with legs close or intertwined",5,"pose",1],["headinlap","قرار گرفتن سر روی پاهای طرف مقابل","head resting in the partner's lap",5,"pose",1],["sittinghandholding","نشستن همراه با گرفتن دست یکدیگر","sitting while holding hands",5,"pose",0],["seatedforeheadkiss","بوسه بر پیشانی در حالت نشسته","a forehead kiss while seated",5,"pose",1],["tablefortwocandid","لحظهٔ طبیعی نشستن روبه‌روی هم پشت میز","a candid moment seated across a table",5,"pose",0],["cafecoupleportrait","پرتره زوج روی صندلی‌های کافه","a couple portrait on café chairs",5,"pose",0],["balconyseatedromance","نشستن عاشقانه در بالکن","sitting romantically on a balcony",5,"pose",0],["parkbenchcouple","نشستن با هم روی نیمکت پارک","sitting together on a park bench",5,"pose",0],["picnicblanketcouple","نشستن روی زیرانداز پیک‌نیک","sitting on a picnic blanket",5,"pose",0],["cozyblanketcuddle","در آغوش گرفتن زیر یک پتوی گرم","cuddling under a warm blanket",5,"pose",0],["almostkiss","چهره‌ها بسیار نزدیک، درست پیش از بوسه","faces very close, just before a kiss",6,"pose",1],["softromantickiss","بوسهٔ ملایم و طبیعی","a soft, natural kiss",6,"pose",1],["passionatekiss","بوسهٔ پرشور و سرشار از احساس","a passionate, emotional kiss",6,"pose",1],["kissintherain","بوسیدن زیر باران","kissing in the rain",6,"pose",1],["sunsetkiss","بوسه با پس‌زمینهٔ غروب","a kiss against a sunset backdrop",6,"pose",1],["silhouettekiss","بوسه در نمای ضدنور و سایه‌وار","a kiss in backlit silhouette",6,"pose",1],["surprisecheekkiss","بوسهٔ ناگهانی بر گونه","a surprise kiss on the cheek",6,"pose",1],["laughingfaceclose","خندیدن با هم، از فاصلهٔ نزدیک","laughing together up close",6,"pose",0],["nosekissmoment","تماس شیرین بینی‌ها","a sweet nose-to-nose moment",6,"pose",1],["whisperingtoher","مرد در گوش زن زمزمه می‌کند","he whispers in her ear",6,"pose",0],["whisperingtohim","زن در گوش مرد زمزمه می‌کند","she whispers in his ear",6,"pose",0],["playfulforeheadbump","تماس بازیگوشانهٔ پیشانی‌ها","a playful forehead bump",6,"pose",0],["romanticgaze","نگاه عمیق و عاشقانه","a deep romantic gaze",6,"pose",0],["shylookaway","یکی با خجالت نگاهش را برمی‌گرداند","one partner shyly looks away",6,"pose",0],["playfulteasingcouple","تعامل شوخ و بازیگوشانهٔ زوج","a playful, teasing interaction",6,"pose",0],["laughingembrace","خندیدن در آغوش یکدیگر","laughing in each other's arms",6,"pose",0],["romanticstarefrombehind","نگاه عاشقانه از پشت شانهٔ طرف مقابل","a romantic look over the partner's shoulder",6,"pose",0],["gentlehairkiss","بوسهٔ ملایم بر بالای سر یا موها","a gentle kiss on the top of the head or hair",6,"pose",1],["noseagainstcheek","قرار گرفتن آرام بینی روی گونه","nose resting softly against the cheek",6,"pose",1],["emotionalreunionhug","آغوش احساسی پس از دوری طولانی","an emotional reunion hug after a long separation",6,"pose",0],["extremecloseupcouple","نمای بسیار نزدیک از جزئیات چهره‌ها","extreme close-up of facial details",7,"frame",0],["closeupcoupleportrait","پرتره نزدیک از چهرهٔ زوج","close-up portrait of the couple's faces",7,"frame",0],["mediumshotcouple","کادر از کمر به بالا","medium shot from the waist up",7,"frame",0],["mediumfullcouple","کادر از ران به بالا","medium-full shot from the thighs up",7,"frame",0],["fullbodycouple","نمای کامل بدن هر دو نفر","full-body shot of both people",7,"frame",0],["widecinematiccouple","زوج در قاب باز و سینمایی","couple in a wide cinematic frame",7,"frame",0],["ultrawideenvironment","قاب بسیار باز؛ زوج همراه با محیط وسیع","very wide frame showing the couple in a vast environment",7,"frame",0],["negativespacecouple","فضای خالی زیاد اطراف زوج","lots of empty negative space around the couple",7,"frame",0],["centeredcouplecomposition","زوج در مرکز کادر قرار می‌گیرند","couple centered in the frame",7,"frame",0],["offcentercinematic","زوج در یک سمت کادر قرار می‌گیرند","couple placed off-center, cinematic",7,"frame",0],["foregroundframing","عناصر پیش‌زمینه زوج را قاب می‌گیرند","foreground elements framing the couple",7,"frame",0],["doorwayframing","قاب گرفتن زوج با چارچوب در","couple framed by a doorway",7,"frame",0],["windowframecomposition","قاب گرفتن زوج با پنجره","couple framed by a window",7,"frame",0],["silhouetteframing","زوج به‌صورت سایه‌وار، عنصر اصلی قاب هستند","the couple as a silhouette, the main element of the frame",7,"frame",0],["layereddepthshot","چیدمان لایه‌ای پیش‌زمینه، زوج و پس‌زمینه","layered depth: foreground, couple, background",7,"frame",0],["shallowdepthcouple","زوج واضح و پس‌زمینه محو","sharp couple with a blurred background",7,"frame",0],["deepfocuscouple","زوج و محیط هر دو با وضوح بیشتر","deep focus, couple and surroundings both sharp",7,"frame",0],["symmetricalcouple","ترکیب‌بندی متقارن","symmetrical composition",7,"frame",0],["ruleofthirdscouple","قرارگیری زوج بر اساس قانون یک‌سوم","couple placed by the rule of thirds",7,"frame",0],["verticalstorycrop","قاب عمودی ۹:۱۶ مناسب استوری","vertical 9:16 framing for stories",7,"frame",0],["goldenhourglow","نور گرم ساعت طلایی پیش از غروب","warm golden-hour light before sunset",8,"light",0],["softmorninglight","نور نرم صبحگاهی","soft morning light",8,"light",0],["sunsetbacklight","نور غروب از پشت زوج","sunset light from behind the couple",8,"light",0],["sunrisehaze","نور طلوع در فضایی مه‌آلود","sunrise light in a hazy atmosphere",8,"light",0],["bluehourromance","حال‌وهوای آبی پس از غروب","blue-hour mood after sunset",8,"light",0],["moonlitcouple","نور ملایم ماه","soft moonlight",8,"light",0],["rimlightcouple","خط نور روی لبه‌های بدن","rim light outlining the edges of the bodies",8,"light",0],["softwindowlight","نور طبیعی و نرم پنجره","soft natural window light",8,"light",0],["dramaticlowkey","نورپردازی تیره با کنتراست بالا","dark, high-contrast low-key lighting",8,"light",0],["highkeysoftportrait","نورپردازی روشن و ملایم","bright, soft high-key lighting",8,"light",0],["cinematicbacklight","نور سینمایی از پشت","cinematic backlight",8,"light",0],["dappledtreelight","نور لکه‌لکهٔ خورشید از میان برگ‌ها","dappled sunlight through leaves",8,"light",0],["neonromancelight","نور نئون رنگی","colorful neon light",8,"light",0],["warmtungstenlight","نور گرم لامپ تنگستن","warm tungsten bulb light",8,"light",0],["coolmoodylighting","نور سرد با حال‌وهوای احساسی","cool, moody lighting",8,"light",0],["candlelightcouple","نور عاشقانهٔ شمع","romantic candlelight",8,"light",0],["streetlampglow","نور چراغ خیابان در شب","streetlamp glow at night",8,"light",0],["softovercastlight","نور یکنواخت و نرم روز ابری","even, soft overcast light",8,"light",0],["volumetriclightcouple","پرتوهای نور قابل‌مشاهده در هوا","visible light rays in the air",8,"light",0],["lightleakfilm","افکت نشت نور فیلم آنالوگ","analog film light-leak effect",8,"light",0],["romanticbeachcouple","زوج در ساحل","couple on a beach",9,"place",0],["mountainviewcouple","زوج با چشم‌انداز کوهستان","couple with a mountain view",9,"place",0],["citynightcouple","زوج در شهر، هنگام شب","couple in the city at night",9,"place",0],["rainystreetromance","زوج در خیابان خیس پس از باران","couple on a wet street after rain",9,"place",0],["forestromance","زوج در میان جنگل","couple in a forest",9,"place",0],["flowerfieldcouple","زوج در دشت گل","couple in a field of flowers",9,"place",0],["lavenderfieldromance","زوج در مزرعهٔ اسطوخودوس","couple in a lavender field",9,"place",0],["rooftopcouple","زوج روی پشت‌بام","couple on a rooftop",9,"place",0],["trainstationromance","لحظهٔ عاشقانه در ایستگاه قطار","a romantic moment at a train station",9,"place",0],["subwaycouple","زوج در فضای مترو","couple in a subway setting",9,"place",0],["bookstorecouple","زوج در کتاب‌فروشی","couple in a bookstore",9,"place",0],["libraryromance","زوج در کتابخانه","couple in a library",9,"place",0],["cozycafedate","قرار عاشقانه در کافه‌ای دنج","a date in a cozy café",9,"place",0],["luxuryhotelcouple","زوج در هتل لوکس","couple in a luxury hotel",9,"place",0],["apartmentwindowromance","زوج کنار پنجرهٔ آپارتمان","couple by an apartment window",9,"place",0],["oldtowncouple","زوج در خیابان‌های بافت قدیمی شهر","couple in the streets of an old town",9,"place",0],["japanstreetromance","زوج در خیابانی با فضای ژاپنی","couple on a Japanese-style street",9,"place",0],["cherryblossomcouple","زوج زیر شکوفه‌های گیلاس","couple under cherry blossoms",9,"place",0],["christmasstreetcouple","زوج در خیابان با تزئینات کریسمس","couple on a street with Christmas decorations",9,"place",0],["desertsunsetcouple","زوج در منظرهٔ بیابانی هنگام غروب","couple in a desert landscape at sunset",9,"place",0],["slowshuttercouple","ثبت اثر حرکت با سرعت شاتر پایین","motion captured with a slow shutter speed",10,"pose",0],["motionblurbackground","پس‌زمینه با تاری حرکت؛ زوج واضح","motion-blurred background, sharp couple",10,"pose",0],["walkingmotionblur","تاری حرکت هنگام راه رفتن","motion blur while walking",10,"pose",0],["windblownhair","موهای در حال حرکت با باد","hair blowing in the wind",10,"pose",0],["flowingdressmotion","حرکت و موج لباس همراه باد","dress flowing with the wind",10,"pose",0],["spinningdancecouple","چرخیدن زوج هنگام رقص","the couple spinning while dancing",10,"pose",0],["foreheadtouchcandid","تماس خودجوش و طبیعی پیشانی‌ها","a candid forehead touch",10,"pose",0],["candidlaughingwalk","راه رفتن همراه با خندهٔ طبیعی","walking with natural laughter",10,"pose",0],["midstepcouple","ثبت تصویر دقیقاً در میانهٔ قدم برداشتن","caught exactly mid-step",10,"pose",0],["turningbackglance","یکی از افراد به پشت سر نگاه می‌کند","one partner glances back",10,"pose",0],["lookingbacktogether","هر دو برمی‌گردند و به دوربین نگاه می‌کنند","both turn and look back at the camera",10,"pose",0],["handpullingperspective","زاویهٔ دید کسی که با دست همراهی می‌شود","point of view of being led by the hand",10,"pose",0],["runninghandinhand","دویدن دست‌در‌دست","running hand in hand",10,"pose",0],["playfulchase","دنبال کردن بازیگوشانهٔ یکدیگر","a playful chase",10,"pose",0],["jumpingcouple","پریدن هم‌زمان زوج","the couple jumping together",10,"pose",0],["piggybackromance","زن روی پشت مرد قرار می‌گیرد","a piggyback ride",10,"pose",0],["bridalcarry","مرد زن را در آغوش بلند می‌کند","he carries her in his arms",10,"pose",0],["dipkisspose","بوسه با خم شدن نمایشی یکی به عقب","a dramatic dip kiss pose",10,"pose",1],["dancefloorcandid","لحظهٔ خودجوش هنگام رقص","a candid dance-floor moment",10,"pose",0],["unposedromance","ژست طبیعی، گویی از حضور دوربین بی‌خبرند","unposed, as if unaware of the camera",10,"pose",0],["matchingblackoutfits","لباس‌های مشکی هماهنگ","matching black outfits",11,"outfit",0],["whiteoutfitromance","لباس‌های سفید و مینیمال","minimal white outfits",11,"outfit",0],["coupledenimstyle","استایل لباس جین","denim style for both",11,"outfit",0],["cozyknitcouple","پلیورهای بافتنی راحت","cozy knit sweaters",11,"outfit",0],["formalblacktie","استایل رسمی و شیک بلک‌تای","formal black-tie style",11,"outfit",0],["weddingeditorial","استایل عکس ادیتوریال عروسی","wedding editorial style",11,"outfit",0],["casualstreetwearcouple","استایل خیابانی روزمره","casual streetwear style",11,"outfit",0],["oldmoneycouple","استایل کلاسیک و اشرافی","classic old-money style",11,"outfit",0],["minimalistfashioncouple","استایل پوشش مینیمال","minimalist fashion",11,"outfit",0],["summerlinenstyle","لباس‌های کتان تابستانی","summer linen clothing",11,"outfit",0],["leatherjacketcouple","کت چرمی با استایل جسورانه","leather jackets with a bold style",11,"outfit",0],["oversizedhoodiecouple","هودی‌های گشاد و اورسایز","oversized hoodies",11,"outfit",0],["romanticdressflow","پیراهن زنانهٔ لطیف و روان","a soft, flowing dress",11,"outfit",0],["suitanddresscouple","مرد با کت‌وشلوار و زن با پیراهن مجلسی","he in a suit, she in an evening dress",11,"outfit",0],["vintageoutfitcouple","لباس‌های سبک وینتیج","vintage-style outfits",11,"outfit",0],["monochromecouple","لباس‌ها در یک طیف رنگی","outfits in a single color family",11,"outfit",0],["earthtonecouple","لباس‌ها با رنگ‌های خاکی و طبیعی","earth-tone outfits",11,"outfit",0],["raincoatcouple","پوشیدن بارانی در هوای بارانی","raincoats in rainy weather",11,"outfit",0],["wintercozycouple","لباس‌های گرم زمستانی","warm cozy winter clothing",11,"outfit",0],["traditionalwearcouple","لباس‌های سنتی هماهنگ","matching traditional clothing",11,"outfit",0],["couplewithumbrella","هر دو زیر یک چتر","both under one umbrella",12,"outfit",0],["sharedheadphones","استفادهٔ مشترک از هدفون","sharing headphones",12,"outfit",0],["holdingbouquet","زن دسته‌گل در دست دارد","she holds a bouquet",12,"outfit",0],["singleflowerromance","یک شاخه گل به‌عنوان وسیلهٔ صحنه","a single flower as a prop",12,"outfit",0],["couplewithpolaroid","ژست همراه با عکس پولاروید","posing with a Polaroid photo",12,"outfit",0],["filmcameradate","دوربین آنالوگ به‌عنوان اکسسوری برای قرار عاشقانه","a film camera as an accessory on a date",12,"outfit",0],["holdingcoffeecups","در دست گرفتن دو فنجان قهوه","holding two coffee cups",12,"outfit",0],["sharedscarf","استفادهٔ مشترک از یک شال‌گردن","sharing one scarf",12,"outfit",0],["holdinghandsinpockets","قرار گرفتن دست‌ها نزدیک هم در جیب","hands close together in a pocket",12,"outfit",0],["couplewithbicycle","ژست همراه با دوچرخه","posing with a bicycle",12,"outfit",0],["motorcyclecouple","زوج همراه با موتورسیکلت","the couple with a motorcycle",12,"outfit",0],["carwindowromance","لحظهٔ عاشقانه کنار پنجرهٔ خودرو","a romantic moment at a car window",12,"outfit",0],["sunflowerbouquet","دسته‌گل آفتابگردان","a sunflower bouquet",12,"outfit",0],["tulipbouquetcouple","دسته‌گل لاله","a tulip bouquet",12,"outfit",0],["fairylightsprop","ریسهٔ چراغ‌های کوچک","string fairy lights as a prop",12,"outfit",0],["sparklerevening","در دست گرفتن فشفشه در فضای عصرگاهی","holding sparklers in the evening",12,"outfit",0],["booksharingcouple","خواندن یک کتاب با هم","reading a book together",12,"outfit",0],["vinylrecordromance","صفحهٔ گرامافون به‌عنوان وسیلهٔ صحنه","a vinyl record as a prop",12,"outfit",0],["picnicbasketcouple","سبد پیک‌نیک","a picnic basket",12,"outfit",0],["balloonromance","بادکنک به‌عنوان عنصر تصویر","a balloon as a visual element",12,"outfit",0],["lightdrizzlecouple","باران نم‌نم و ملایم","a light, gentle drizzle",13,"weather",0],["heavyrainromance","باران شدید با حال‌وهوای دراماتیک","heavy rain with a dramatic mood",13,"weather",0],["raindropforeground","قطره‌های آب در پیش‌زمینه","water droplets in the foreground",13,"weather",0],["foggyforestcouple","جنگل مه‌آلود","a foggy forest",13,"weather",0],["mistymorningromance","مه نرم صبحگاهی","soft morning mist",13,"weather",0],["snowfallcouple","بارش برف اطراف زوج","snow falling around the couple",13,"weather",0],["snowycuddle","آغوش در فضایی برفی","an embrace in a snowy setting",13,"weather",0],["windysunsetcouple","باد هنگام غروب","wind at sunset",13,"weather",0],["autumnleafcouple","برگ‌های پاییزی","autumn leaves",13,"weather",0],["fallingleavesromance","برگ‌ها در حال ریزش","leaves falling",13,"weather",0],["flowerpetalrain","بارش گلبرگ‌ها","a shower of flower petals",13,"weather",0],["oceanbreeze","نسیم دریا","an ocean breeze",13,"weather",0],["wavesbehindcouple","موج‌های دریا در پس‌زمینه","ocean waves behind the couple",13,"weather",0],["sunflarethroughhair","تابش خورشید از میان موها","sun flare shining through the hair",13,"weather",0],["cloudyromanticmood","آسمان ابری با حس عاشقانه","cloudy sky with a romantic mood",13,"weather",0],["stargazingcouple","تماشای ستاره‌ها با هم","stargazing together",13,"weather",0],["milkywayromance","کهکشان راه شیری در پس‌زمینه","the Milky Way in the background",13,"weather",0],["fireworksbackground","آتش‌بازی در دوردست","fireworks in the distance",13,"weather",0],["goldendustparticles","ذرات غبار طلایی","floating golden dust particles",13,"weather",0],["floatingpetals","گلبرگ‌های معلق در هوا","petals floating in the air",13,"weather",0],["35mmfilmlook","ظاهر عکس ثبت‌شده روی فیلم ۳۵ میلی‌متری","the look of 35mm film",14,"style",0],["analogfilmgrain","بافت دانه‌دانهٔ فیلم آنالوگ","analog film grain",14,"style",0],["cinematictealorange","رنگ‌پردازی سینمایی آبی‌سبز و نارنجی","cinematic teal-and-orange color grading",14,"style",0],["mutedfilmpalette","پالت رنگی ملایم و کم‌اشباع فیلم","a muted, low-saturation film palette",14,"style",0],["softpastelromance","رنگ‌های پاستلی نرم","soft pastel colors",14,"style",0],["moodydesaturated","رنگ‌های کم‌اشباع با حال‌وهوای احساسی","moody desaturated colors",14,"style",0],["vintagefilmflash","فلاش با ظاهر فیلم وینتیج","flash with a vintage film look",14,"style",0],["directflashportrait","فلاش مستقیم با استایل ادیتوریال","direct flash in an editorial style",14,"style",0],["editorialromance","عکاسی عاشقانه به سبک مجله","romantic magazine-style photography",14,"style",0],["fineartcoupleportrait","پرتره زوج به سبک هنری فاین‌آرت","fine-art style couple portrait",14,"style",0],["documentaryromance","عکاسی طبیعی به سبک مستند","natural documentary-style photography",14,"style",0],["indiefilmstill","ظاهر یک فریم از فیلم مستقل","looks like a still from an indie film",14,"style",0],["anamorphiccinema","زیبایی‌شناسی سینمای آنامورفیک","anamorphic cinema aesthetic",14,"style",0],["cinematicletterbox","قاب عریض سینمایی با نوارهای بالا و پایین","wide cinematic letterbox frame",14,"style",0],["dreamysoftfocus","فوکوس نرم و رؤیایی","dreamy soft focus",14,"style",0],["halationfilmglow","هالهٔ نور در نقاط روشن، شبیه فیلم آنالوگ","halation glow in highlights, like analog film",14,"style",0],["highcontrastmonochrome","عکس سیاه‌وسفید با کنتراست بالا","high-contrast black-and-white photo",14,"style",0],["blackandwhitefilm","ظاهر کلاسیک فیلم سیاه‌وسفید","classic black-and-white film look",14,"style",0],["romanticfilmstill","تصویر شبیه فریم یک فیلم عاشقانه","looks like a frame from a romantic film",14,"style",0],["nostalgicmemorylook","ظاهر نوستالژیک و خاطره‌انگیز","a nostalgic, memory-like look",14,"style",0],["portrait85mm","پرسپکتیو لنز پرتره ۸۵ میلی‌متری","85mm portrait lens perspective",15,"lens",0],["wideangle35mm","پرسپکتیو لنز ۳۵ میلی‌متری","35mm lens perspective",15,"lens",0],["ultrawideperspective","پرسپکتیو لنز فوق‌عریض","ultra-wide lens perspective",15,"lens",0],["telephotocompression","فشردگی پرسپکتیو؛ پس‌زمینه نزدیک‌تر به نظر می‌رسد","telephoto compression, background appears closer",15,"lens",0],["fisheyeplayful","اعوجاج هنری و بازیگوشانهٔ لنز چشم‌ماهی","playful fisheye lens distortion",15,"lens",0],["macrohanddetail","نمای ماکرو از جزئیات دست‌ها","macro detail of the hands",15,"lens",0],["bokehbackground","بوکه و محوشدگی نورها در پس‌زمینه","bokeh and blurred lights in the background",15,"lens",0],["foregroundbokeh","بوکه در پیش‌زمینهٔ زوج","bokeh in the foreground of the couple",15,"lens",0],["lensflarecinematic","فلر و بازتاب نور سینمایی در لنز","cinematic lens flare and reflections",15,"lens",0],["prismlightleak","افکت نشت نور منشوری","prism light-leak effect",15,"lens",0],["softvignette","تیره شدن ملایم گوشه‌های عکس","soft vignette darkening the corners",15,"lens",0],["tiltshiftromance","افکت تیلت‌شیفت با ناحیهٔ فوکوس محدود","tilt-shift effect with a narrow focus area",15,"lens",0],["longexposurelights","رد نور با نوردهی طولانی","light trails from a long exposure",15,"lens",0],["doubleexposureromance","ترکیب دو تصویر با افکت نوردهی دوگانه","double-exposure blend of two images",15,"lens",0],["reflectiondistortion","اعوجاج هنری در بازتاب","artistic distortion in a reflection",15,"lens",0],["glassrefraction","شکست نور از میان شیشه","light refracting through glass",15,"lens",0],["shootingthroughcurtain","عکاسی از پشت پرده","shot through a curtain",15,"lens",0],["shootingthroughleaves","عکاسی از میان برگ‌ها","shot through leaves",15,"lens",0],["shootingthroughraindrops","عکاسی از پشت شیشهٔ پوشیده از قطرات باران","shot through glass covered in raindrops",15,"lens",0],["handhelddocumentary","ظاهر عکاسی مستند با دوربین روی دست","handheld documentary look",15,"lens",0],["sofrehaghdcouple","زوج کنار سفرهٔ عقد","the couple at a traditional Persian wedding spread, sofreh aghd",16,"place",0],["mirrorcandlestickframing","آینه و شمعدان سفرهٔ عقد در کادر","the ceremonial mirror and candlesticks in the frame",16,"frame",0],["hennanightcouple","زوج در مراسم حنابندان","the couple at a henna night celebration",16,"place",0],["weddingringcloseup","نمای نزدیک حلقه‌ها","close-up of the wedding rings",16,"frame",0],["veillift","برداشتن آرام تور عروس","gently lifting the bridal veil",16,"pose",0],["firstlookmoment","لحظهٔ اولین نگاه زوج به هم در لباس عروسی","the couple's first look at each other in wedding attire",16,"pose",0],["dresstrainshot","دامن بلند و دنبالهٔ لباس عروس در کادر","the long gown and train in the frame",16,"frame",0],["adjustingtiemoment","زن کراوات یا پاپیون مرد را مرتب می‌کند","she adjusts his tie or bow tie",16,"pose",0],["bouquettossmoment","لحظهٔ پرتاب دسته‌گل","the moment of tossing the bouquet",16,"pose",0],["cakecuttingcouple","زوج هنگام بریدن کیک","the couple cutting the cake",16,"pose",0],["persiangardencouple","زوج در باغ ایرانی با حوض و درخت سرو","couple in a Persian garden with a pool and cypress trees",16,"place",0],["tilearchitecturecouple","زوج مقابل کاشی‌کاری و معماری سنتی","couple in front of traditional tilework and architecture",16,"place",0],["adobealleycouple","زوج در کوچه‌های خشتی شهر کویری","couple in the adobe alleys of a desert town",16,"place",0],["traditionalbazaarcouple","زوج در بازار سنتی","couple in a traditional bazaar",16,"place",0],["yaldanightcouple","زوج در شب یلدا با انار و هندوانه","couple on Yalda night with pomegranates and watermelon",16,"place",0],["nowruzhaftsincouple","زوج کنار سفرهٔ هفت‌سین نوروز","couple beside a Nowruz Haft-sin table",16,"place",0],["modestelegancecouple","پوشش کامل و موقر با ظاهر شیک","modest, covered clothing with an elegant look",16,"outfit",0],["hijabbridalportrait","پرتره عروس با روسری یا شال","bridal portrait with a headscarf or shawl",16,"outfit",0],["respectfuldistancecouple","فاصلهٔ محترمانه بدون تماس؛ نگاه و لبخند","respectful distance without touching, expressed through gaze and smile",16,"pose",0],["familyfriendlyromance","حس رمانتیک مناسب همهٔ سنین؛ دست‌ها نزدیک اما بدون آغوش یا بوسه","romantic feeling suitable for all ages, hands close but no hugging or kissing",16,"pose",0]],"conf":[["snowfallcouple","summerlinenstyle","برف با لباس کتان تابستانی هماهنگ نیست"],["snowycuddle","summerlinenstyle","فضای برفی با لباس کتان تابستانی هماهنگ نیست"],["snowfallcouple","desertsunsetcouple","برف و منظرهٔ بیابانی هم‌زمان باورپذیر نیست"],["autumnleafcouple","cherryblossomcouple","برگ پاییزی و شکوفهٔ بهاری دو فصل متضادند"],["heavyrainromance","sparklerevening","فشفشه زیر باران شدید روشن نمی‌ماند"],["heavyrainromance","candlelightcouple","نور شمع زیر باران شدید باورپذیر نیست"],["candlelightcouple","desertsunsetcouple","نور شمع (فضای بسته) با غروب بیابان (فضای باز) نمی‌خواند"],["ultrawideperspective","extremecloseupcouple","لنز فوق‌عریض روی نمای بسیار نزدیک چهره را کج و بزرگ می‌کند"],["telephotocompression","ultrawideenvironment","فشردگی تله با قاب بسیار باز تناقض دارد"],["blackandwhitefilm","neonromancelight","سیاه‌وسفید رنگ نئون را از بین می‌برد"],["highcontrastmonochrome","neonromancelight","سیاه‌وسفید رنگ نئون را از بین می‌برد"],["blackandwhitefilm","lavenderfieldromance","سیاه‌وسفید رنگ اسطوخودوس را از بین می‌برد"],["blackandwhitefilm","cherryblossomcouple","سیاه‌وسفید رنگ شکوفه‌ها را از بین می‌برد"],["stargazingcouple","goldenhourglow","آسمان پرستاره با نور غروب هم‌زمان نمی‌شود"],["stargazingcouple","softmorninglight","ستاره‌ها در نور صبح دیده نمی‌شوند"],["milkywayromance","sunsetbacklight","راه شیری در غروب دیده نمی‌شود"],["milkywayromance","softwindowlight","راه شیری فضای باز و شب می‌خواهد؛ نور پنجره داخلی است"],["fireworksbackground","softmorninglight","آتش‌بازی شب است و با نور صبح نمی‌خواند"],["citynightcouple","softmorninglight","شب شهر با نور صبح نمی‌خواند"],["citynightcouple","goldenhourglow","شب شهر با نور غروب نمی‌خواند"],["citynightcouple","sunrisehaze","شب شهر با مه‌ی طلوع نمی‌خواند"],["yaldanightcouple","softmorninglight","شب یلدا با نور صبح نمی‌خواند"],["yaldanightcouple","summerlinenstyle","یلدا شب زمستان است؛ لباس کتان تابستانی نمی‌خواند"],["hennanightcouple","softmorninglight","شب حنابندان با نور صبح نمی‌خواند"],["subwaycouple","windysunsetcouple","مترو زیرزمینی است و غروب بادی ندارد"],["subwaycouple","stargazingcouple","مترو زیرزمینی است و آسمان پرستاره ندارد"],["sofrehaghdcouple","heavyrainromance","سفره‌ی عقد فضای داخلی است؛ باران شدید نمی‌خواند"],["desertsunsetcouple","heavyrainromance","باران شدید با منظره‌ی بیابانی کم‌باور است"],["desertsunsetcouple","foggyforestcouple","جنگل مه‌آلود با بیابان هم‌زمان نمی‌شود"],["romanticbeachcouple","snowfallcouple","برف و ساحل کنار هم کم‌باورند"],["cherryblossomcouple","snowfallcouple","شکوفه‌ی بهاری با برف هم‌زمان نمی‌شود"],["cherryblossomcouple","snowycuddle","شکوفه‌ی بهاری با فضای برفی هم‌زمان نمی‌شود"],["flowerfieldcouple","snowfallcouple","مزرعه‌ی گل با برف هم‌زمان نمی‌شود"],["lavenderfieldromance","snowfallcouple","اسطوخودوس با برف هم‌زمان نمی‌شود"],["blackandwhitefilm","goldenhourglow","سیاه‌وسفید رنگ طلایی غروب را از بین می‌برد"],["highcontrastmonochrome","goldenhourglow","سیاه‌وسفید رنگ طلایی غروب را از بین می‌برد"],["blackandwhitefilm","lightleakfilm","سیاه‌وسفید رنگ نشت نور را از بین می‌برد"],["candlelightcouple","sunflarethroughhair","نور شمع (داخلی) با فلر خورشید نمی‌خواند"],["macrohanddetail","fullbodycouple","ماکرو دست با نمای تمام‌قد تناقض دارد"]],"rec":[{"id":"cafe","title":"پرتره‌ی نرم در کافه","use":"پست اینستاگرام برای یک زوج جوان","ratio":"4:5","codes":["sittingclosecouple","mediumshotcouple","softwindowlight","cozycafedate","earthtonecouple","portrait85mm"],"note":"نور پنجره و رنگ خاکی حس گرم و طبیعی می‌دهند"},{"id":"sunset","title":"قدم‌زدن در غروب","use":"استوری یا ریلز با حس سفر","ratio":"9:16","codes":["walkinghandinhand","widecinematiccouple","sunsetbacklight","romanticbeachcouple","summerlinenstyle","35mmfilmlook"],"note":"کادر باز به حرکت و نور غروب جا می‌دهد"},{"id":"neon","title":"شب نئونی پس از باران","use":"تصویر سینمایی برای صفحه‌ی محتوا","ratio":"4:5","codes":["walkingcouplebackshot","mediumfullcouple","neonromancelight","rainystreetromance","raincoatcouple","cinematictealorange"],"note":"رنگ‌پردازی آبی‌سبز و نارنجی با نئون هم‌خوان است"},{"id":"aghd","title":"سفره‌ی عقد سنتی","use":"آلبوم خانوادگی یا کارت دعوت","ratio":"4:5","codes":["sofrehaghdcouple","sittingclosecouple","mediumshotcouple","softwindowlight","traditionalwearcouple","editorialromance"],"note":"می‌توانی آینه و شمعدان را هم در توضیح صحنه بیاوری"},{"id":"modest","title":"باغ ایرانی با حالت محتاط","use":"تصویر مناسب همه‌ی مخاطب‌ها","ratio":"4:5","codes":["respectfuldistancecouple","fullbodycouple","softmorninglight","persiangardencouple","modestelegancecouple","softpastelromance"],"note":"فاصله‌ی محترمانه را با لبخند و نگاه جبران کن"},{"id":"forest","title":"آلبوم فیلم آنالوگ","use":"مجموعه‌ی عکس با حس نوستالژی","ratio":"3:2","codes":["candidlaughingwalk","mediumfullcouple","dappledtreelight","forestromance","earthtonecouple","analogfilmgrain"],"note":"خنده‌ی طبیعی و دانه‌ی فیلم حس خاطره می‌سازند"}],"board":["sidebysidewalk","widecinematiccouple","lookingateachother","mediumshotcouple","walkinghandinhand","handholdingcloseup","couplewalkingaway","sittingclosecouple"]};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const BY={};D.codes.forEach(r=>BY[r[0]]={c:r[0],fa:r[1],en:r[2],cat:r[3],role:r[4],i:r[5]});
const SLOTS=[["pose","ژست و تعامل"],["frame","کادر و زاویه"],["light","نور"],["place","مکان"],["outfit","لباس و وسیله"],["weather","آب‌وهوا"],["style","سبک رنگ و فیلم"],["lens","لنز و افکت"]];
const RAND=["pose","frame","light","place","outfit","style"];
const DATA_VER=1;
/* مهاجرت دادهٔ ذخیره‌شده بین نسخه‌ها. هنگام تغییر ساختار یک مرحله اضافه کن: if(v<2){...;v=2} و DATA_VER را بالا ببر */
function migrate(o){if(!o||typeof o!=="object"||Array.isArray(o))return o;let v=+o.ver||0;
 o.ver=v>DATA_VER?v:DATA_VER;return o}
const DEFS=()=>({ver:DATA_VER,fav:[],board:[],modest:false,sel:{},ratio:"4:5",ref:true,lang:"both",saved:[],mode:"create",tool:"generic",eops:[],theme:"auto",wake:true,intro:0,alb:null,albums:[]});
const S=DEFS();
/* هر مقدار ذخیره‌شده (بارگذاری، همگام‌سازی پنجره‌ها) از این فیلتر می‌گذرد؛ نوع غلط هرگز برنامه را از کار نمی‌اندازد */
function cleanState(o){
 const n=DEFS(),O=x=>!!x&&typeof x==="object"&&!Array.isArray(x);let bad=false;
 if(!O(o))return{n,bad:true};
 const ok=c=>typeof c==="string"&&!!BY[c];
 const A=k=>{if(o[k]===undefined)return[];if(Array.isArray(o[k]))return o[k];bad=true;return[]};
 n.fav=[...new Set(A("fav").filter(ok))];
 n.board=A("board").filter(b=>O(b)&&ok(b.c)).map(b=>({c:b.c,d:b.d?1:0}));
 if(o.sel!==undefined){if(O(o.sel))Object.keys(o.sel).forEach(k=>{if(ok(o.sel[k]))n.sel[k]=o.sel[k]});else bad=true}
 n.modest=o.modest===true;n.ref=o.ref!==false;n.wake=o.wake!==false;n.intro=o.intro?1:0;
 n.ratio=["4:5","9:16","1:1","3:2","16:9"].includes(o.ratio)?o.ratio:"4:5";
 n.lang=["both","fa","en"].includes(o.lang)?o.lang:"both";
 n.mode=o.mode==="edit"?"edit":"create";
 n.tool=typeof o.tool==="string"?o.tool.slice(0,30):"generic";
 n.theme=["light","dark"].includes(o.theme)?o.theme:"auto";
 n.eops=A("eops").filter(x=>typeof x==="string").slice(0,20);
 n.saved=A("saved").filter(x=>O(x)&&typeof x.n==="string"&&O(x.sel)).slice(0,50).map(x=>{const sel={};Object.keys(x.sel).forEach(k=>{if(ok(x.sel[k]))sel[k]=x.sel[k]});return{n:x.n.slice(0,60),sel,ratio:["4:5","9:16","1:1","3:2","16:9"].includes(x.ratio)?x.ratio:"4:5"}});
 n.ver=DATA_VER;n.alb=O(o.alb)?o.alb:null;
 n.albums=A("albums").slice(0,20);
 return{n,bad}}
let RECOVERED=false;
try{const raw=localStorage.getItem("ccb1");if(raw){let o;try{o=JSON.parse(raw)}catch(e){}const r=cleanState(migrate(o));Object.assign(S,r.n);
 if(r.bad){RECOVERED=true;try{localStorage.setItem("ccb1.bad",raw)}catch(_){}}}}catch(e){}
let saveWarned=0;
const save=()=>{try{localStorage.setItem("ccb1",JSON.stringify(S));saveWarned=0}catch(e){if(!saveWarned){saveWarned=1;toast("ذخیره نشد؛ فضای مرورگر پر یا بسته است. همین حالا از اطلاعات پشتیبان بگیرید",4500)}}};
const vis=r=>!(S.modest&&r.i);
const norm=s=>String(s).toLowerCase().replace(/ي/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\s]+/g,"");
const fa=n=>String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function toast(m,ms){AIhub.toast(m,{duration:ms||2200})}
function emptyBox(ic,t,p,act){return `<div class="empty"><div class="empty__art"><svg class="ico" aria-hidden="true"><use href="#${ic}"/></svg></div><h3 class="empty__title">${esc(t)}</h3><p>${esc(p)}</p>${act||""}</div>`}
function listError(sel,fn){const el=$(sel);if(!el)return;el.innerHTML=`<div class="alert alert--danger" role="alert"><span>نمایش این بخش با مشکل روبه‌رو شد. دوباره امتحان کن؛ اگر ادامه داشت اطلاعاتت سالم است و می‌توانی از تنظیمات پشتیبان بگیری.</span><button type="button" class="btn btn--sm" data-retry><svg class="ico" aria-hidden="true"><use href="#i-refresh"/></svg>تلاش دوباره</button></div>`;const b=el.querySelector("[data-retry]");if(b)b.onclick=fn}
const safe=(fn,sel)=>{try{fn()}catch(e){listError(sel,()=>safe(fn,sel))}};
const PAGES={lib:"کتابخانه",build:"سازنده",album:"آلبوم",rec:"ترکیب‌ها",shoot:"شات‌لیست عکاس"};
function setPageTitle(v){const t=PAGES[v]||"";$("#pageTitle").textContent=t;$("#crumbCur").textContent=t;document.title=t+" | دوقاب"}
async function copy(t){try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(_){}a.remove()}toast("کپی شد")}
/* ---------- تب‌ها ---------- */
let curView="lib",curOut=null;
function go(v,instant){const run=()=>{curView=v;$$(".view").forEach(e=>e.classList.toggle("on",e.id==="v-"+v));$$("[data-route]").forEach(b=>{const on=b.dataset.route===v;on?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current")});setPageTitle(v);scrollTo(0,0);
 if(v==="build")safe(renderBuild,"#outs");if(v==="album")safe(renderAlbum,"#ashots");if(v==="rec")safe(renderRec,"#recs");if(v==="shoot")safe(renderBoard,"#board");if(v==="lib")safe(renderLib,"#list");
 updDock();v==="shoot"?wakeOn():wakeOff()};
 if(!instant&&document.startViewTransition&&!matchMedia("(prefers-reduced-motion:reduce)").matches)document.startViewTransition(run);else run()}
function updDock(){const show=curView==="build"&&!!curOut,d=$("#dock");d.hidden=!show;document.body.classList.toggle("hasdock",show);if(show)$("#dk").textContent=curTool().n+" · "+(S.mode==="edit"?"ویرایش":"ساخت")}
let wl=null;
async function wakeOn(){try{if(S.wake&&"wakeLock" in navigator&&!wl){wl=await navigator.wakeLock.request("screen");wl.addEventListener("release",()=>{wl=null})}}catch(e){wl=null}}
function wakeOff(){try{wl&&wl.release()}catch(e){}wl=null}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&curView==="shoot")wakeOn()});
/* دکمهٔ Back اندروید: از هر تب اول به کتابخانه، بعد خروج؛ پنجره‌های باز با Back بسته می‌شوند */
let navDepth=0,ignorePop=0;const dlgStack=[];
function navTo(v){
 if(v===curView)return go(v,true);
 if(v==="lib"){if(navDepth===1){navDepth=0;history.back()}else go("lib");return}
 if(navDepth===0){history.pushState({duo:1,v},"");navDepth=1}else history.replaceState({duo:1,v},"");
 go(v)}
function hookDialog(d){const sm=d.showModal.bind(d);
 d.showModal=()=>{if(d.open)return;sm();dlgStack.push(d);history.pushState({duo:1,dlg:1},"")};
 d.addEventListener("close",()=>{const i=dlgStack.lastIndexOf(d);if(i<0)return;dlgStack.splice(i,1);const by=d._byPop;d._byPop=false;if(!by){ignorePop++;history.back()}})}
$$("dialog").forEach(hookDialog);
addEventListener("popstate",e=>{
 if(ignorePop>0){ignorePop--;return}
 if(dlgStack.length){const d=dlgStack[dlgStack.length-1];d._byPop=true;d.close();return}
 const st=e.state,v=st&&st.duo&&st.v?st.v:"lib";
 navDepth=v==="lib"?0:1;if(v!==curView)go(v)});
$$("[data-route]").forEach(b=>b.onclick=e=>{e.preventDefault();navTo(b.dataset.route)});
/* ---------- کتابخانه ---------- */
let q="",cat=0,lim=40;
function renderChips(){const items=[[0,"همه"],[-1,"♡ علاقه‌مندی‌ها"],...D.cats.map(c=>[c.n,fa(c.n)+". "+c.t])];
 $("#chips").innerHTML=items.map(([n,t])=>`<button type="button" class="chip" aria-pressed="${cat===n}" data-n="${n}">${esc(t)}</button>`).join("");
 $$("#chips .chip").forEach(b=>b.onclick=()=>{cat=+b.dataset.n;lim=40;renderChips();renderLib()})}
function card(r,ctx){const f=S.fav.includes(r.c);
 return `<article class="card cc"><div class="cc__top"><button type="button" class="codebtn" data-a="cc" data-c="${r.c}" aria-label="کپی کد ${r.c}"><code>${r.c}</code></button><button type="button" class="btn btn--ghost btn--icon fav" data-a="fav" data-c="${r.c}" aria-pressed="${f}" aria-label="${f?"حذف از علاقه‌مندی‌ها":"افزودن به علاقه‌مندی‌ها"}"><svg class="ico" aria-hidden="true"><use href="#i-heart"/></svg></button></div>
 <p class="cc__fa">${esc(r.fa)}</p><p class="cc__en" dir="ltr">${esc(r.en)}</p>
 <div class="cc__acts"><button type="button" class="btn btn--sm" data-a="copy" data-c="${r.c}"><svg class="ico" aria-hidden="true"><use href="#i-copy"/></svg>کپی جمله</button><button type="button" class="btn btn--sm" data-a="use" data-c="${r.c}">به سازنده</button><button type="button" class="btn btn--sm" data-a="bd" data-c="${r.c}">به شات‌لیست</button></div></article>`}
function renderLib(){const nq=norm(q);
 let L=D.codes.map(r=>BY[r[0]]).filter(r=>vis(r)&&(cat===0||(cat===-1?S.fav.includes(r.c):r.cat===cat))&&(!nq||norm(r.c+r.fa+r.en).includes(nq)));
 const info=D.cats.find(c=>c.n===cat),tb=$("#tipbar");tb.hidden=!info;tb.firstElementChild.textContent=info?info.ins+" — "+info.tip:"";
 $("#libCount").textContent=fa(L.length)+" کد";
 $("#list").innerHTML=L.length?L.slice(0,lim).map(card).join(""):(cat===-1?emptyBox("i-heart","هنوز کدی را ستاره‌دار نکرده‌ای","روی قلب هر کد بزن تا اینجا جمع شود.",`<button type="button" class="btn btn--sm" data-go-cat="0">دیدن همهٔ کدها</button>`):emptyBox("i-search","کدی پیدا نشد","عبارت دیگری را امتحان کن یا فیلتر دسته را بردار."));
 const mo=$("#more");mo.style.display=L.length>lim?"inline-flex":"none";mo.textContent="نمایش بیشتر ("+fa(L.length-lim)+" کد دیگر)"}
$("#q").oninput=e=>{q=e.target.value;lim=40;renderLib()};
$("#more").onclick=()=>{lim+=40;renderLib()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(!b)return;const r=BY[b.dataset.c],a=b.dataset.a;if(!r)return;
 if(a==="copy")copy(r.fa+"\n"+r.en);
 if(a==="cc")copy(r.c);
 if(a==="fav"){const i=S.fav.indexOf(r.c);i<0?S.fav.push(r.c):S.fav.splice(i,1);save();renderLib()}
 if(a==="use"){S.sel[r.role]=r.c;save();toast("به سازنده اضافه شد");}
 if(a==="bd"){if(!S.board.some(x=>x.c===r.c)){S.board.push({c:r.c,d:0});save();toast("به شات‌لیست اضافه شد")}else toast("قبلاً اضافه شده")}});
/* ---------- سازنده ---------- */
function chosen(){return SLOTS.map(([k])=>S.sel[k]).filter(Boolean)}
function conflicts(sel){return D.conf.filter(([a,b])=>sel.includes(a)&&sel.includes(b))}
const TOOLS=[
 {id:"generic",n:"عمومی (فارسی + انگلیسی)",m:["create","edit"],tip:"برای هر ابزاری کار می‌کند. اگر نتیجه ضعیف بود، پروفایل همان ابزار را انتخاب کن."},
 {id:"gpt",n:"ChatGPT / GPT Image",m:["create","edit"],tip:"عکس مرجع را همراه پیام پیوست کن. اگر چهره تغییر کرد، همان پیام را با «فقط X را عوض کن» تکرار کن."},
 {id:"gemini",n:"Gemini / Nano Banana",m:["create","edit"],tip:"ساختار پیشنهادی: اقدام + هدف + جزئیات + قیدها. هر بار یک تغییر اصلی بخواه و روی نتیجهٔ قبلی ادامه بده."},
 {id:"flux",n:"Flux (Kontext)",m:["create","edit"],tip:"دستور کوتاه و مشخص بهتر جواب می‌دهد. تغییرها را یکی‌یکی و پشت‌سرهم بده."},
 {id:"grok",n:"Grok (Aurora / Imagine)",m:["create","edit"],tip:"در Grok عکس مرجع را پیوست کن و پرامپت را بچسبان. اگر چهره‌ها عوض شد، همان پرامپت را با «چهره‌ها دقیقاً مثل عکس مرجع» تکرار کن."},
 {id:"seedream",n:"Seedream / Dreamina (ByteDance)",m:["create","edit"],tip:"مناسب پرامپت طبیعی و دقیق، با تصویر مرجع. برای حفظ هویت، عکس مرجع را در بخش Reference بارگذاری کن."},
 {id:"ideogram",n:"Ideogram",m:["create"],tip:"برای هویت دو نفر از Character Reference استفاده کن. پرامپت را کوتاه نگه دار و هر بار یک ویژگی را عوض کن."},
 {id:"leonardo",n:"Leonardo AI",m:["create","edit"],tip:"عکس مرجع را در Image Guidance (Character Reference) بگذار. اگر نتیجه کارتونی شد، مدل واقع‌گرا را انتخاب کن."},
 {id:"firefly",n:"Adobe Firefly",m:["create","edit"],tip:"برای حفظ چهره‌ها از Reference Image و برای ویرایش از Generative Fill استفاده کن. پرامپت طبیعی و بدون پارامتر بنویس."},
 {id:"qwen",n:"Qwen-Image / Wan / Hunyuan",m:["create","edit"],tip:"مدل‌های متن‌باز؛ پرامپت انگلیسی دقیق‌تر جواب می‌دهد. «زبان خروجی» را روی انگلیسی بگذار."},
 {id:"sd",n:"Stable Diffusion / SDXL / ComfyUI",m:["create"],tip:"پرامپت مثبت و منفی جداست. برای حفظ هویت از IP-Adapter یا InstantID استفاده کن."},
 {id:"mj",n:"Midjourney (V7)",m:["create"],tip:"لینک عکس مرجع را به‌جای <REF_URL> بگذار. فقط یک تصویر مرجع و فقط نسخهٔ V7؛ وزن --ow پیش‌فرض ۱۰۰ است و بهتر است زیر ۴۰۰ بماند."},
 {id:"video",n:"تصویر ← ویدیو (Kling / Veo / Runway)",m:["create"],tip:"عکس نهایی را به‌عنوان فریم اول بده. حرکت کوچک و آرام، چهره‌ها را پایدارتر نگه می‌دارد."}];
const TOOLMAP=Object.fromEntries(TOOLS.map(t=>[t.id,t]));
const EOPS=[
 {id:"retouch",t:"رتوش پوست",fa:"رتوش طبیعی پوست و صورت بدون حالت پلاستیکی؛ منافذ و بافت پوست حفظ شود",en:"natural skin retouching, even out blemishes and tone while keeping pores and texture, no plastic look"},
 {id:"bg",t:"تعویض پس‌زمینه",fa:"پس‌زمینه با صحنهٔ هدف عوض شود؛ پرسپکتیو، لبه‌ها و جهت نور هماهنگ باشد",en:"replace the background with the target scene, matching perspective, edge detail and light direction"},
 {id:"outfit",t:"تغییر لباس",fa:"لباس طبق توضیح عوض شود؛ ژست و تناسب بدن و چین‌های پارچه واقعی بماند",en:"change the clothing as described, keep body pose and proportions, realistic fabric folds"},
 {id:"relight",t:"تغییر نور",fa:"نور و رنگ نور با صحنهٔ هدف هماهنگ شود؛ سایه و هایلایت روی هر دو نفر یکسان باشد",en:"relight the photo to match the target lighting, with consistent shadows and highlights on both people"},
 {id:"remove",t:"حذف افراد/اشیای اضافه",fa:"افراد و اشیای مزاحم پس‌زمینه حذف و جایشان طبیعی پر شود",en:"remove distracting people and objects from the background and fill the area naturally"},
 {id:"extend",t:"گسترش کادر",fa:"کادر به نسبت جدید گسترش یابد و صحنه بدون درز ادامه پیدا کند",en:"extend the canvas to the new aspect ratio, continuing the scene seamlessly"},
 {id:"grade",t:"گرید رنگ و حس فیلم",fa:"گرید رنگ و حس فیلم مطابق توضیح اعمال شود؛ رنگ پوست طبیعی بماند",en:"apply the described color grade and film look consistently, keeping skin tones natural"},
 {id:"hands",t:"اصلاح دست‌ها",fa:"آناتومی دست‌ها و تعداد انگشت‌ها اصلاح شود",en:"fix the anatomy of hands and fingers, correct number of fingers"},
 {id:"sharp",t:"وضوح و جزئیات",fa:"وضوح و جزئیات افزایش یابد بدون تغییر چهره‌ها",en:"upscale and sharpen details without altering the faces"}];
const NOFACE_FA="چهره، هویت، حالت صورت، رنگ پوست، مدل مو و تناسب بدن هر دو نفر دقیقاً حفظ شود";
const NOFACE_EN="Keep both faces, identity, expressions, skin tone, hairstyle and body proportions exactly unchanged";
const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
function curTool(){const t=TOOLMAP[S.tool];return t&&t.m.includes(S.mode)?t:TOOLS[0]}
function chosen(){return SLOTS.map(([k])=>S.sel[k]).filter(Boolean)}
function conflicts(sel){return D.conf.filter(([a,b])=>sel.includes(a)&&sel.includes(b))}
function renderBuild(){const ch=chosen(),ed=S.mode==="edit";
 $$("[data-mode]").forEach(b=>{const on=b.dataset.mode===S.mode;b.classList.toggle("on",on);b.setAttribute("aria-selected",on)});
 $("#eopsWrap").hidden=!ed;$("#refw").hidden=ed;
 $("#slotsT").textContent=ed?"صحنهٔ هدف (اختیاری)":"ترکیب من";
 $("#eops").innerHTML=EOPS.map(o=>`<button type="button" class="chip" data-eo="${o.id}" aria-pressed="${S.eops.includes(o.id)}">${esc(o.t)}</button>`).join("");
 $$("#eops [data-eo]").forEach(b=>b.onclick=()=>{const i=S.eops.indexOf(b.dataset.eo);i<0?S.eops.push(b.dataset.eo):S.eops.splice(i,1);save();renderBuild()});
 const tl=TOOLS.filter(t=>t.m.includes(S.mode));if(!tl.some(t=>t.id===S.tool))S.tool="generic";
 $("#tool").innerHTML=tl.map(t=>`<option value="${t.id}">${esc(t.n)}</option>`).join("");$("#tool").value=S.tool;
 $("#slots").innerHTML=SLOTS.map(([k,n])=>{const r=BY[S.sel[k]];
  return `<div class="slot"><span class="slot__nm">${n}</span><button type="button" class="pick" data-slot="${k}">${r?`<code>${r.c}</code><span>${esc(r.fa)}</span>`:`<span class="pick__empty">انتخاب کن</span>`}</button>${r?`<button type="button" class="btn btn--ghost btn--icon x" data-clr="${k}" aria-label="حذف ${n}"><svg class="ico" aria-hidden="true"><use href="#i-x"/></svg></button>`:""}</div>`}).join("");
 $$("#slots .pick").forEach(b=>b.onclick=()=>openSheet(b.dataset.slot));
 $$("#slots .x").forEach(b=>b.onclick=()=>{delete S.sel[b.dataset.clr];save();renderBuild()});
 const c=$("#cnt");c.textContent=fa(ch.length)+" از ۶ کد";c.className="badge num "+(ch.length>6?"badge--danger":"badge--brand");
 const cf=conflicts(ch);let w="";
 if(ch.length>6)w+=`<div class="alert alert--warning" role="status"><span>بیش از شش کد انتخاب کرده‌ای؛ یکی دو کد کم‌اثر را حذف کن.</span></div>`;
 cf.forEach(([a,b,why])=>w+=`<div class="alert alert--danger" role="alert"><span><code>${a}</code> و <code>${b}</code>: ${esc(why)}</span></div>`);
 if(!cf.length&&ch.length<=6&&(ed?ch.length>0:ch.length>=3))w+=`<div class="alert alert--success" role="status"><span>ترکیب سازگار است.</span></div>`;
 $("#warns").innerHTML=w;
 $("#ratio").value=S.ratio;$("#lang").value=S.lang;$("#ref").checked=S.ref;renderOut()}
function build(ov){const ch=(ov?ov.codes:chosen()).map(c=>BY[c]),R=ov?ov.ratio:S.ratio,fr=fa(R),TL=ov?(TOOLMAP[S.tool]||TOOLS[0]):curTool(),t=TL.id,ed=!ov&&S.mode==="edit";
 const ops=ed?EOPS.filter(o=>S.eops.includes(o.id)):[];
 if(ed?!ops.length:!ch.length)return null;
 const scFa=ch.map(r=>r.fa).join("؛ "),scEn=ch.map(r=>r.en).join(", "),codes=ch.map(r=>r.c);
 let f="",e="";
 if(ed){
  const keep=NOFACE_EN+"; keep the original pose and composition unless the edit requires otherwise";
  f="عکس پیوست را ویرایش کن (از نو نساز). تغییرها: "+ops.map(o=>o.fa).join("؛ ")+"."+(ch.length?" مشخصات صحنهٔ هدف: "+scFa+".":"")+" "+NOFACE_FA+"؛ ژست و ترکیب‌بندی اصلی هم عوض نشود مگر خود تغییر لازم کند. نسبت تصویر "+fr+". بدون متن و نشان‌واره.";
  if(t==="gemini")e="Using the attached photo, "+ops.map(o=>o.en).join(" and ")+"."+(ch.length?" Target scene: "+scEn+".":"")+" Constraints: "+keep+". Aspect ratio "+R+". No text or watermark.";
  else if(t==="flux")e=ops.map(o=>cap(o.en)).join(". ")+"."+(ch.length?" Scene details: "+scEn+".":"")+" "+keep+".";
  else e="Edit the attached photo; do not regenerate it. Changes: "+ops.map(o=>o.en).join("; ")+"."+(ch.length?" Target scene: "+scEn+".":"")+" "+keep+". Aspect ratio "+R+". No text or watermark.";
 }else{
  const refFa=S.ref?"از روی عکس مرجع، تصویری از همین دو نفر بساز. "+NOFACE_FA+".":"تصویری از یک زوج بساز.";
  const refEn=S.ref?"Use the attached reference photo of the two people. "+NOFACE_EN+".":"Create an image of a couple.";
  f=refFa+" ویژگی‌ها: "+scFa+". نسبت تصویر "+fr+". تصویر واقع‌گرایانه با بافت طبیعی پوست؛ بدون اعوجاج چهره، بدون انگشت یا عضو اضافه، بدون متن و نشان‌واره.";
  if(t==="gpt")e=(S.ref?"Use the attached photo as the identity reference for both people. "+NOFACE_EN+". ":"")+"Create a photorealistic photograph of a couple. Scene: "+scEn+". Aspect ratio "+R+". Natural skin texture, correct hands and anatomy, no text or watermark.";
  else if(t==="gemini")e=(S.ref?"Using the attached reference photo as the identity source, create":"Create")+" a photorealistic photograph of "+(S.ref?"the same couple":"a couple")+". Scene details: "+scEn+". Constraints: "+(S.ref?NOFACE_EN.charAt(0).toLowerCase()+NOFACE_EN.slice(1)+"; ":"")+"natural skin texture, no extra fingers or limbs, no text or watermark. Aspect ratio "+R+".";
  else if(t==="flux")e="A photorealistic photograph of "+(S.ref?"the same two people as in the reference image, identical faces and hairstyles":"a couple")+", "+scEn+". Natural skin texture, correct hands, no text.";
  else if(t==="sd"){f=null;e="photorealistic photograph of a couple, "+scEn+", natural skin texture, detailed, sharp focus, 8k\nNegative prompt: extra fingers, extra limbs, deformed hands, distorted faces, blurry, text, watermark, plastic skin\nAspect ratio: "+R}
  else if(t==="mj"){f=null;e="couple, "+scEn+", photorealistic, natural skin texture --ar "+R+" --style raw --v 7"+(S.ref?" --oref <REF_URL> --ow 100":"")}
  else if(t==="video"){
   f="عکس پیوست را متحرک کن. فقط حرکت کوچک و طبیعی: "+scFa+". حرکت آرام دوربین به جلو، تکان نرم مو و پارچه با نسیم، پلک‌زدن و نفس‌کشیدن طبیعی. چهرهٔ هر دو نفر کاملاً ثابت و بدون تغییر بماند، بدون برش. ۵ ثانیه، نسبت "+fr+".";
   e="Animate the attached photo of the couple. Subtle natural motion only: "+scEn+". Slow gentle camera push-in, hair and fabric moving softly in the breeze, natural blinking and breathing. Keep both faces stable and identical, no morphing, no cuts. 5 seconds, aspect ratio "+R+".";}
  else e=refEn+" Scene: "+scEn+". Aspect ratio "+R+". Photorealistic with natural skin texture; no distorted faces, no extra fingers or limbs, no text or watermark.";
 }
 if(ov&&ov.anchor&&t!=="video"){if(t==="mj")e+=" --sref <SHOT1_URL>";else{if(f)f+=" تصویر شمارهٔ ۱ همین آلبوم را هم به‌عنوان مرجع هویت، لباس و رنگ‌بندی پیوست کن.";e+=" Also attach shot 1 of this album as the anchor: same couple, same outfit, same color grade."}}
 return {fa:f,en:e,codes,tip:TL.tip}}
function primary(o){const l=o.fa?S.lang:"en";return l==="fa"?o.fa:l==="en"?o.en:o.fa+"\n\n"+o.en}
function renderOut(){const o=build(),h=$("#outs");curOut=o;
 if(!o){h.innerHTML=`<div class="card">${emptyBox("i-sparkle",S.mode==="edit"?"یک نوع تغییر انتخاب کن":"چند نقش انتخاب کن",S.mode==="edit"?"از بالا حداقل یک نوع تغییر را انتخاب کن.":"از بالا چند نقش را انتخاب کن تا جمله کامل ساخته شود.")}</div>`;updDock();return}
 const l=o.fa?S.lang:"en";let s="";
 const CP=`<svg class="ico" aria-hidden="true"><use href="#i-copy"/></svg>کپی`;
 if(l!=="en")s+=`<div class="out"><div class="out__head"><span class="badge badge--brand badge--plain">فارسی</span><button type="button" class="btn btn--sm" data-cp="fa">${CP}</button></div><p>${esc(o.fa)}</p></div>`;
 if(l!=="fa")s+=`<div class="out"><div class="out__head"><span class="badge badge--brand badge--plain">English</span><button type="button" class="btn btn--sm" data-cp="en">${CP}</button></div><p class="ltr">${esc(o.en)}</p></div>`;
 s+=`<div class="alert" style="margin-block-start:var(--sp-3)"><span>${esc(o.tip)}</span></div>`;
 if(o.codes.length)s+=`<div class="tags" style="margin-block-start:var(--sp-3)">${o.codes.map(c=>`<code>${c}</code>`).join("")}</div>`;
 if(navigator.share)s+=`<div class="bar-actions"><button type="button" class="btn btn--sm" id="shr"><svg class="ico" aria-hidden="true"><use href="#i-share"/></svg>اشتراک‌گذاری</button></div>`;
 h.innerHTML=`<div class="card"><h2 class="card__title">پرامپت آماده</h2>${s}</div>`;
 $$("[data-cp]").forEach(b=>b.onclick=()=>copy(o[b.dataset.cp]));
 const sh=$("#shr");if(sh)sh.onclick=()=>navigator.share({text:primary(o)}).catch(()=>{});
 updDock()}
$$("[data-mode]").forEach(b=>b.onclick=()=>{S.mode=b.dataset.mode;save();renderBuild()});
$("#tool").onchange=e=>{S.tool=e.target.value;save();renderBuild()};
$("#dkcp").onclick=()=>{if(curOut)copy(primary(curOut))};
$("#lnk").onclick=()=>{const ch=chosen();if(!ch.length)return toast("اول چند کد انتخاب کن");copy(location.href.split("#")[0]+"#c="+ch.join(","))};
$("#ratio").onchange=e=>{S.ratio=e.target.value;save();renderOut()};
$("#lang").onchange=e=>{S.lang=e.target.value;save();renderOut()};
$("#ref").onchange=e=>{S.ref=e.target.checked;save();renderOut()};
$("#clr").onclick=()=>{S.sel={};save();renderBuild()};
$("#rnd").onclick=()=>{let best=null;for(let t=0;t<40;t++){const sel={};RAND.forEach(k=>{const p=D.codes.map(r=>BY[r[0]]).filter(r=>r.role===k&&vis(r));if(p.length)sel[k]=p[Math.floor(Math.random()*p.length)].c});
  if(!conflicts(Object.values(sel)).length){best=sel;break}}
 if(best){S.sel=best;save();renderBuild()}else toast("دوباره امتحان کن")};
$("#ssave").onclick=()=>{const ch=chosen();if(!ch.length)return toast("اول چند کد انتخاب کن");
 const n=($("#sname").value||"").trim()||"ترکیب "+fa(S.saved.length+1);S.saved.unshift({n,sel:{...S.sel},ratio:S.ratio});S.saved=S.saved.slice(0,50);save();$("#sname").value="";toast("ذخیره شد")};
/* ---------- انتخاب (sheet) ---------- */
let shSlot="",shTarget="build";function openSheet(k,tg){shSlot=k;shTarget=tg||"build";$("#sh-t").textContent=SLOTS.find(s=>s[0]===k)[1];$("#sh-q").value="";$("#sheet").showModal();fillSheet()}
function fillSheet(){const nq=norm($("#sh-q").value);const L=D.codes.map(r=>BY[r[0]]).filter(r=>r.role===shSlot&&vis(r)&&(!nq||norm(r.c+r.fa+r.en).includes(nq)));
 $("#sh-l").innerHTML=L.map(r=>`<article class="card cc"><div class="cc__top"><code>${r.c}</code><button type="button" class="btn btn--sm" data-pick="${r.c}">انتخاب</button></div><p class="cc__fa">${esc(r.fa)}</p><p class="cc__en" dir="ltr">${esc(r.en)}</p></article>`).join("")||emptyBox("i-search","موردی نیست","عبارت دیگری را امتحان کن.");
 $$("#sh-l [data-pick]").forEach(b=>b.onclick=()=>{if(shTarget==="album"){S.alb.world[shSlot]=b.dataset.pick;save();closeSheet();renderAlbum()}else{S.sel[shSlot]=b.dataset.pick;save();closeSheet();renderBuild()}})}
function closeSheet(){$("#sheet").close()}
$("#sh-q").oninput=fillSheet;$("#sh-x").onclick=closeSheet;
$$("dialog.dlg").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
$$("[data-close]").forEach(b=>b.onclick=()=>b.closest("dialog").close());
/* ---------- ترکیب‌ها ---------- */
function loadSel(sel,ratio){S.sel={};Object.keys(sel).forEach(k=>{if(BY[sel[k]])S.sel[k]=sel[k]});if(ratio)S.ratio=ratio;save();navTo("build")}
function renderRec(){
 $("#recs").innerHTML=D.rec.map((r,i)=>`<article class="card rc"><h3>${esc(r.title)}</h3><p class="muted">${esc(r.use)} · نسبت ${fa(r.ratio)}</p><div class="tg">${r.codes.map(c=>`<code>${c}</code>`).join("")}</div><p class="muted">${esc(r.note)}</p><div class="cc__acts"><button type="button" class="btn btn--sm" data-r="${i}">باز کردن در سازنده</button></div></article>`).join("");
 $$("#recs [data-r]").forEach(b=>b.onclick=()=>{const r=D.rec[+b.dataset.r],sel={};r.codes.forEach(c=>{if(BY[c])sel[BY[c].role]=c});loadSel(sel,r.ratio)});
 $("#mine").innerHTML=S.saved.length?S.saved.map((s,i)=>`<article class="card rc"><h3>${esc(s.n)}</h3><div class="tg">${Object.values(s.sel).filter(c=>BY[c]).map(c=>`<code>${c}</code>`).join("")}</div><div class="cc__acts"><button type="button" class="btn btn--sm" data-o="${i}">باز کردن</button><button type="button" class="btn btn--sm btn--ghost" data-d="${i}" aria-label="حذف ${esc(s.n)}"><svg class="ico" aria-hidden="true"><use href="#i-trash"/></svg>حذف</button></div></article>`).join(""):emptyBox("i-layers","هنوز ترکیبی ذخیره نکرده‌ای","در سازنده یک ترکیب بساز و «ذخیره ترکیب» را بزن.",`<button type="button" class="btn btn--sm" data-go="build">رفتن به سازنده</button>`);
 $$("#mine [data-o]").forEach(b=>b.onclick=()=>{const s=S.saved[+b.dataset.o];loadSel(s.sel,s.ratio)});
 $$("#mine [data-d]").forEach(b=>b.onclick=()=>{S.saved.splice(+b.dataset.d,1);save();renderRec()})}
/* ---------- حالت عکاس ---------- */
function renderBoard(){const L=S.board;$("#bcnt").textContent=fa(L.filter(x=>x.d&&vis(BY[x.c])).length)+" از "+fa(L.filter(x=>vis(BY[x.c])).length)+" انجام شد";
 $("#board").innerHTML=L.length?L.map((x,i)=>{const r=BY[x.c];if(!vis(r))return "";return `<div class="list__row bi${x.d?" dn":""}"><label class="check"><input type="checkbox" ${x.d?"checked":""} data-t="${i}" aria-label="انجام شد: ${r.c}"></label><div class="t"><code>${r.c}</code><div>${esc(r.fa)}</div></div><button type="button" class="btn btn--ghost btn--icon rm noprint" data-rm="${i}" aria-label="حذف ${r.c}"><svg class="ico" aria-hidden="true"><use href="#i-x"/></svg></button></div>`}).join(""):emptyBox("i-camera","شات‌لیست خالی است","از کتابخانه کد اضافه کن یا شات‌لیست پیشنهادی را بزن.");
 $$("#board [data-t]").forEach(b=>b.onchange=()=>{S.board[+b.dataset.t].d=b.checked?1:0;save();renderBoard()});
 $$("#board [data-rm]").forEach(b=>b.onclick=()=>{S.board.splice(+b.dataset.rm,1);save();renderBoard()})}
$("#bsug").onclick=()=>{D.board.forEach(c=>{if(BY[c]&&vis(BY[c])&&!S.board.some(x=>x.c===c))S.board.push({c,d:0})});save();renderBoard()};
$("#bclr").onclick=()=>{if(!S.board.length||confirm("شات‌لیست پاک شود؟")){S.board=[];save();renderBoard()}};
const boardText=()=>S.board.filter(x=>vis(BY[x.c])).map(x=>(x.d?"☑ ":"☐ ")+x.c+" — "+BY[x.c].fa).join("\n")||"";
$("#bcopy").onclick=()=>copy(boardText());
if(navigator.share){$("#bshare").hidden=false;$("#bshare").onclick=()=>{const t=boardText();if(!t)return toast("شات‌لیست خالی است");navigator.share({title:"شات‌لیست دوقاب",text:t}).catch(()=>{})}}
$("#bprint").onclick=()=>{try{print()}catch(e){toast("چاپ در این دستگاه پشتیبانی نمی‌شود؛ از «کپی لیست» استفاده کن")}};
/* ---------- حالت محتاط، نصب، آفلاین ---------- */
function applyModest(){$("#mbadge").hidden=!S.modest}
$("#modest").onchange=e=>{S.modest=e.target.checked;if(S.modest){Object.keys(S.sel).forEach(k=>{if(BY[S.sel[k]].i)delete S.sel[k]})}save();applyModest();go(curView,true)};
function applyTheme(){const r=document.documentElement;S.theme==="light"||S.theme==="dark"?r.dataset.theme=S.theme:r.removeAttribute("data-theme");syncThemeUI()}
$("#theme").onchange=e=>{S.theme=e.target.value;save();applyTheme()};
$("#wake").onchange=e=>{S.wake=e.target.checked;save();curView==="shoot"&&(S.wake?wakeOn():wakeOff())};
async function persistInfo(){const el=$("#persist");try{if(navigator.storage&&navigator.storage.persisted){const p=await navigator.storage.persisted();el.textContent=p?"فعال است":"فعال نیست؛ در کمبود فضا مرورگر ممکن است داده‌ها را پاک کند"}else el.textContent="این مرورگر پشتیبانی نمی‌کند"}catch(e){el.textContent="نامشخص"}}
$("#pers").onclick=async()=>{try{const ok=navigator.storage&&navigator.storage.persist&&await navigator.storage.persist();toast(ok?"ذخیره‌سازی پایدار شد":"مرورگر اجازه نداد")}catch(e){toast("پشتیبانی نمی‌شود")}persistInfo()};
function openSettings(){updPrev();updLicUI();$("#modest").checked=!!S.modest;$("#theme").value=S.theme;$("#wake").checked=!!S.wake;syncBrandUI();persistInfo();if(!$("#settings").open)$("#settings").showModal()}
$$("[data-open-settings]").forEach(b=>b.onclick=openSettings);
function dlBackup(){const d=new Date(),n="duoframe-backup-"+d.toISOString().slice(0,10)+".json",blob=new Blob([JSON.stringify({app:"ccb",v:3,ver:DATA_VER,at:d.toISOString(),state:S},null,1)],{type:"application/json"}),u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=n;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);toast("فایل پشتیبان ساخته شد")}
$("#exp").onclick=dlBackup;
$("#imp").onclick=()=>$("#impf").click();
function applyAll(){applyTheme();applyModest();$("#modest").checked=S.modest;$("#theme").value=S.theme;$("#wake").checked=S.wake;go(curView,true)}
function updPrev(){let has=false;try{has=!!localStorage.getItem("ccb1.prev")}catch(e){}$("#undoimp").hidden=!has}
$("#impf").onchange=async e=>{const f=e.target.files[0];e.target.value="";if(!f)return;
 try{
  if(f.size>5e6)throw 0;
  const j=JSON.parse(await f.text());if(!j||j.app!=="ccb"||!j.state||typeof j.state!=="object"||Array.isArray(j.state))throw 0;
  const o=migrate(j.state),n=cleanState(o).n;
  n.alb=cleanAlb(n.alb)||newAlb();n.albums=n.albums.map(cleanAlb).filter(Boolean).slice(0,20);
  const c=a=>Array.isArray(a)?a.length:0,lost=Math.max(0,c(o.fav)-n.fav.length)+Math.max(0,c(o.board)-n.board.length)+Math.max(0,c(o.saved)-n.saved.length)+Math.max(0,c(o.albums)-n.albums.length);
  const newer=(+j.state.ver||0)>DATA_VER;
  if(!confirm("اطلاعات فعلی با فایل پشتیبان جایگزین شود؟\n"+fa(n.fav.length)+" علاقه‌مندی · "+fa(n.board.length)+" شات · "+fa(n.saved.length)+" ترکیب · "+fa(n.albums.length)+" آلبوم"+(lost?"\n"+fa(lost)+" مورد ناسازگار حذف می‌شود.":"")+(newer?"\nاین پشتیبان از نسخهٔ جدیدتری ساخته شده است.":"")+"\nوضعیت فعلی نگه داشته می‌شود و با «برگرداندن به قبل از بازیابی» برمی‌گردد."))return;
  try{localStorage.setItem("ccb1.prev",JSON.stringify(S))}catch(_){}
  Object.assign(S,n);save();applyAll();updPrev();toast(lost?"بازیابی شد؛ "+fa(lost)+" مورد ناسازگار حذف شد":"بازیابی شد",3200)}
 catch(err){toast("فایل پشتیبان معتبر نیست")}};
$("#undoimp").onclick=()=>{let raw=null;try{raw=localStorage.getItem("ccb1.prev")}catch(e){}if(!raw)return updPrev();
 if(!confirm("اطلاعات به وضعیت قبل از آخرین بازیابی برگردد؟"))return;
 try{const n=cleanState(migrate(JSON.parse(raw))).n;n.alb=cleanAlb(n.alb)||newAlb();n.albums=n.albums.map(cleanAlb).filter(Boolean).slice(0,20);Object.assign(S,n);save();try{localStorage.removeItem("ccb1.prev")}catch(_){}applyAll();updPrev();toast("برگشت داده شد")}catch(e){toast("بازگردانی ممکن نشد")}};
$("#wipe").onclick=()=>{if(confirm("همهٔ علاقه‌مندی‌ها، شات‌لیست و ترکیب‌های ذخیره‌شده پاک شود؟")){try{localStorage.removeItem("ccb1")}catch(e){}location.reload()}};
$("#introx").onclick=()=>{S.intro=1;save();$("#intro").hidden=true};
const RATIOS=["4:5","9:16","1:1","3:2","16:9"];
let dp;addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;$("#inst").style.display="inline-block"});
$("#inst").onclick=async()=>{if(!dp)return;dp.prompt();await dp.userChoice;dp=null;$("#inst").style.display="none"};
if(/iphone|ipad/i.test(navigator.userAgent)&&!navigator.standalone)$("#iosHint").style.display="block";
addEventListener("appinstalled",()=>{$("#inst").style.display="none"});
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)){
 const had=!!navigator.serviceWorker.controller;
 navigator.serviceWorker.register("sw.js").then(reg=>{
  const show=w=>{if(w&&navigator.serviceWorker.controller){$("#upd").hidden=false;$("#updgo").onclick=()=>w.postMessage("SKIP_WAITING")}};
  if(reg.waiting)show(reg.waiting);
  reg.addEventListener("updatefound",()=>{const w=reg.installing;w&&w.addEventListener("statechange",()=>{if(w.state==="installed")show(reg.waiting||w)})});
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")reg.update().catch(()=>{})})
 }).catch(()=>{});
 let rl=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!had||rl)return;rl=true;location.reload()})}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
/* ---------- برنامه‌ریز آلبوم ---------- */
const AK={
 establish:{t:"نمای معرف",why:"محیط را معرفی می‌کند؛ زوج کوچک در صحنهٔ بزرگ.",
  frame:["widecinematiccouple","ultrawideenvironment","distantcoupleshot","fullbodycouple","negativespacecouple","layereddepthshot","deepfocuscouple"],
  pose:["walkinghandinhand","sidebysidewalk","slowwalkromance","couplewalkingaway","standingforeheadtouch","leaningagainsteachother","windowstandingcouple"],
  lens:["wideangle35mm","ultrawideperspective","handhelddocumentary"]},
 medium:{t:"نمای متوسط",why:"ارتباط دو نفر و لباس‌ها را نشان می‌دهد.",
  frame:["mediumshotcouple","mediumfullcouple","threequartercouple","eyelevelintimacy","ruleofthirdscouple","centeredcouplecomposition","shoulderlevelshot"],
  pose:["frontembrace","armsaroundshoulder","interlockedarms","womanholdinghisarm","manleadinghergently","shoulderleanseated","lookingateachother","tablefortwocandid","sittingclosecouple","wallleanromance"],
  lens:["portrait85mm","wideangle35mm"]},
 close:{t:"نمای نزدیک احساسی",why:"حس و نگاه؛ قلب آلبوم.",
  frame:["closeupcoupleportrait","extremecloseupcouple","shallowdepthcouple","sideprofilecouple","frontportraitcouple"],
  pose:["foreheadtouch","headonshoulder","headonchest","facetofaceclose","lookingateachother","gentlefacecupping","romanticgaze","laughingfaceclose","whisperingtoher","headtiltromance","standingforeheadtouch"],
  lens:["portrait85mm","bokehbackground","telephotocompression","softvignette"]},
 detail:{t:"جزئیات",why:"دست‌ها، حلقه، گل؛ تنفس بین عکس‌های اصلی.",
  frame:["weddingringcloseup","foregroundframing","shallowdepthcouple"],
  pose:["handholdingcloseup","fingersintertwined","handoncheek","handonchest","handonwaist","gentlebacktouch"],
  lens:["macrohanddetail","bokehbackground","foregroundbokeh"]},
 motion:{t:"لحظه در حرکت",why:"انرژی و طبیعی‌بودن؛ آلبوم را زنده می‌کند.",
  frame:["diagonalcomposition","offcentercinematic","lowanglecouple","dutchanglecouple","ruleofthirdscouple","backviewcouple"],
  pose:["candidlaughingwalk","midstepcouple","turningbackglance","lookingbacktogether","handpullingperspective","runninghandinhand","playfulchase","spinningdancecouple","windblownhair","flowingdressmotion","unposedromance","dancefloorcandid","piggybackromance","jumpingcouple"],
  lens:["handhelddocumentary","wideangle35mm","lensflarecinematic"]},
 creative:{t:"زاویهٔ خلاقانه",why:"یک قاب متفاوت برای جلب نگاه در اسکرول.",
  frame:["birdseyecouple","highanglecouple","lowanglecouple","dutchanglecouple","reflectionangle","doorwayframing","windowframecomposition","silhouetteframing","symmetricalcouple"],
  pose:["backtobackcouple","walkingbackhug","hugfrombehindcloseup","backhugcouple","couplewalkingaway","leaningagainsteachother"],
  lens:["foregroundbokeh","reflectiondistortion","glassrefraction","doubleexposureromance","lensflarecinematic"]},
 seated:{t:"لحظهٔ آرام نشسته",why:"ریتم را کند می‌کند؛ صمیمیت بدون حرکت.",
  frame:["mediumshotcouple","windowframecomposition","eyelevelintimacy","threequartercouple"],
  pose:["windowseatcouple","parkbenchcouple","picnicblanketcouple","cafecoupleportrait","tablefortwocandid","sittinghandholding","shoulderleanseated","crossleggedcouple","balconyseatedromance","cozyblanketcuddle","sittingclosecouple"],
  lens:["portrait85mm","bokehbackground"]},
 candid:{t:"خنده و صمیمیت طبیعی",why:"عکس‌های غیرپوز که مخاطب را جذب می‌کند.",
  frame:["mediumshotcouple","eyelevelintimacy","shoulderlevelshot","threequartercouple"],
  pose:["laughingfaceclose","laughingembrace","playfulteasingcouple","playfulforeheadbump","whisperingtohim","shylookaway","candidembrace","comfortinghug"],
  lens:["handhelddocumentary","portrait85mm"]},
 back:{t:"نمای از پشت",why:"حس داستان و رمز و راز؛ چهره لازم نیست.",
  frame:["backviewcouple","closeupfrombehind","threequarterrear","overtheshoulder","overtheshoulderromance"],
  pose:["walkingcouplebackshot","hugfrombehindcloseup","backhugcouple","couplewalkingaway","romanticstarefrombehind","backofheadfocus","hairoverhisshoulder"],
  lens:["telephotocompression","portrait85mm"]},
 portrait:{t:"پرتره کلاسیک",why:"عکس اصلی برای چاپ یا تصویر پروفایل.",
  frame:["frontportraitcouple","threequartercouple","symmetricalcouple","centeredcouplecomposition","closeupcoupleportrait"],
  pose:["lookingateachother","womanlookingathim","manlookingather","headtiltromance","chinonshoulder","frontembrace","onearmembrace","protectiveembrace","standingforeheadtouch"],
  lens:["portrait85mm","softvignette"]},
 ceremony:{t:"لحظهٔ مراسم",why:"لحظه‌ای از مراسم با حالت موقر و مناسب خانواده.",
  frame:["mirrorcandlestickframing","dresstrainshot","weddingringcloseup","mediumshotcouple","threequartercouple"],
  pose:["firstlookmoment","adjustingtiemoment","veillift","bouquettossmoment","cakecuttingcouple","respectfuldistancecouple","familyfriendlyromance"],
  lens:["portrait85mm","bokehbackground"]},
 ending:{t:"قاب پایانی",why:"آلبوم را آرام می‌بندد؛ دور شدن یا سکوت.",
  frame:["silhouetteframing","widecinematiccouple","negativespacecouple","distantcoupleshot"],
  pose:["couplewalkingaway","walkingintosunset","standingforeheadtouch","slowdancestanding","leaningagainsteachother","gentlewaisthug"],
  lens:["lensflarecinematic","telephotocompression","softvignette"]}};
const ATPL=[
 {id:"classic",t:"کلاسیک",ratio:"4:5",seq:["establish","medium","close","detail","motion","back","portrait","seated","candid","creative","medium"]},
 {id:"ceremony",t:"مراسم و فرهنگ",ratio:"4:5",seq:["establish","ceremony","medium","detail","close","ceremony","back","portrait","candid","seated","ceremony"]},
 {id:"reels",t:"ریلز / استوری",ratio:"9:16",seq:["motion","establish","creative","candid","back","close","motion","seated","detail","medium","motion"]}];
const AWORLD=[["place","مکان"],["light","نور"],["outfit","لباس"],["style","سبک"],["weather","آب‌وهوا (اختیاری)"]];
const AROLES=AWORLD.map(x=>x[0]),AREQ=["place","light","outfit","style"];
const newAlb=()=>({n:"",tpl:"classic",size:6,ratio:"4:5",world:{},shots:[]});
function cleanAlb(a){if(!a||typeof a!=="object")return null;const okc=c=>typeof c==="string"&&BY[c];
 const tpl=ATPL.some(t=>t.id===a.tpl)?a.tpl:"classic",size=[6,9,12].includes(+a.size)?+a.size:6,world={};
 AROLES.forEach(r=>{if(a.world&&okc(a.world[r])&&BY[a.world[r]].role===r)world[r]=a.world[r]});
 const shots=(Array.isArray(a.shots)?a.shots:[]).slice(0,12).filter(x=>x&&AK[x.k]).map(x=>({k:x.k,pose:okc(x.pose)?x.pose:null,frame:okc(x.frame)?x.frame:null,lens:okc(x.lens)?x.lens:null,lock:x.lock?1:0}));
 return {n:typeof a.n==="string"?a.n.slice(0,60):"",tpl,size,ratio:RATIOS.includes(a.ratio)?a.ratio:"4:5",world,shots}}
const rpick=a=>a[Math.floor(Math.random()*a.length)];
const okv=c=>BY[c]&&vis(BY[c]);
function pickPref(a,used){if(!a.length)return null;const f=a.filter(x=>!used.has(x));return rpick(f.length?f:a)}
function genShot(kind,world,others){
 const K=AK[kind],wc=Object.values(world).filter(Boolean),us=k=>new Set(others.map(x=>x[k]));
 const uP=us("pose"),uF=us("frame"),uL=us("lens"),P=K.pose.filter(okv),F=K.frame.filter(okv),L=K.lens.filter(okv);
 for(let t=0;t<80;t++){
  const pose=pickPref(P,uP),frame=pickPref(F,uF),lens=t<50?pickPref(L,uL):null;
  if(!conflicts([...wc,pose,frame,lens].filter(Boolean)).length)return {k:kind,pose,frame,lens,lock:0}}
 return {k:kind,pose:pickPref(P,uP),frame:pickPref(F,uF),lens:null,lock:0}}
function randWorld(base,withWeather){
 const pool=r=>D.codes.map(x=>BY[x[0]]).filter(x=>x.role===r&&vis(x));
 for(let t=0;t<80;t++){const w=Object.assign({},base);
  AREQ.forEach(r=>{if(!w[r])w[r]=rpick(pool(r)).c});
  if(withWeather&&!w.weather&&Math.random()<.35)w.weather=rpick(pool("weather")).c;
  if(!conflicts(Object.values(w)).length)return w}
 return Object.assign({},base)}
const aTpl=()=>ATPL.find(t=>t.id===S.alb.tpl)||ATPL[0];
function genAlbum(){const A=S.alb,seq=aTpl().seq.slice(0,A.size-1).concat("ending"),old=A.shots||[],keep=old.length===seq.length,shots=[];
 seq.forEach((k,i)=>{const o=keep&&old[i]&&old[i].lock&&old[i].k===k?old[i]:null;
  shots.push(o||genShot(k,A.world,shots.concat(keep?old.filter((x,j)=>j>i&&x&&x.lock):[])))});
 A.shots=shots}
const shotCodes=(sh,w)=>[sh.pose,sh.frame,w.place,w.light,w.outfit,w.weather,w.style,sh.lens].filter(Boolean);
const shotPrompt=i=>{const A=S.alb;return build({codes:shotCodes(A.shots[i],A.world),ratio:A.ratio,anchor:i>0})};
function albumText(){const A=S.alb;return "آلبوم "+(A.n||"بدون‌نام")+" · "+fa(A.shots.length)+" عکس · نسبت "+fa(A.ratio)+"\nقاعده: عکس ۱ را اول بساز و برای بقیه‌ی عکس‌ها به‌عنوان مرجع پیوست کن.\n\n"+A.shots.map((x,i)=>{const o=shotPrompt(i);return "["+fa(i+1)+"] "+AK[x.k].t+"\n"+primary(o)}).join("\n\n")}
function renderAlbum(){const A=S.alb;
 Object.keys(A.world).forEach(k=>{if(!okv(A.world[k]))delete A.world[k]});
 A.shots.forEach((x,i)=>{if([x.pose,x.frame,x.lens].some(c=>c&&!okv(c)))A.shots[i]=Object.assign(genShot(x.k,A.world,A.shots.filter((_,j)=>j!==i)),{lock:x.lock})});
 $("#atpl").innerHTML=ATPL.map(t=>`<button type="button" class="chip" data-tpl="${t.id}" aria-pressed="${A.tpl===t.id}">${esc(t.t)}</button>`).join("");
 $$("#atpl [data-tpl]").forEach(b=>b.onclick=()=>{const t=ATPL.find(x=>x.id===b.dataset.tpl);A.tpl=t.id;A.ratio=t.ratio;A.shots=[];save();renderAlbum()});
 $("#asize").value=String(A.size);$("#aratio").value=A.ratio;
 $("#aworld").innerHTML=AWORLD.map(([k,n])=>{const r=BY[A.world[k]];
  return `<div class="slot"><span class="slot__nm">${n}</span><button type="button" class="pick" data-aslot="${k}">${r?`<code>${r.c}</code><span>${esc(r.fa)}</span>`:`<span class="pick__empty">انتخاب کن</span>`}</button>${r?`<button type="button" class="btn btn--ghost btn--icon x" data-aclr="${k}" aria-label="حذف ${n}"><svg class="ico" aria-hidden="true"><use href="#i-x"/></svg></button>`:""}</div>`}).join("");
 $$("#aworld .pick").forEach(b=>b.onclick=()=>openSheet(b.dataset.aslot,"album"));
 $$("#aworld .x").forEach(b=>b.onclick=()=>{delete A.world[b.dataset.aclr];save();renderAlbum()});
 const cf=conflicts(Object.values(A.world));$("#awarn").innerHTML=cf.map(([a,b,why])=>`<div class="alert alert--danger" role="alert"><span><code>${a}</code> و <code>${b}</code>: ${esc(why)}</span></div>`).join("");
 $("#agen").textContent=A.shots.length?"بازسازی آلبوم (قفل‌ها حفظ می‌شود)":"ساخت آلبوم";
 $("#ashots").innerHTML=A.shots.length?A.shots.map((x,i)=>{const K=AK[x.k],cs=[x.pose,x.frame,x.lens].filter(Boolean);
  return `<article class="card rc"><div class="rc__top"><h3>${fa(i+1)} · ${esc(K.t)}</h3>${x.lock?`<span class="badge badge--accent"><svg class="ico" style="width:14px;height:14px" aria-hidden="true"><use href="#i-lock"/></svg>قفل</span>`:""}</div>
 <p class="muted">${esc(K.why)}${i===0?" این عکس لنگر آلبوم است.":""}</p>
 <div class="tg">${cs.map(c=>`<code>${c}</code>`).join("")}</div>
 <p class="muted">${[x.pose,x.frame].filter(Boolean).map(c=>esc(BY[c].fa)).join("؛ ")}</p>
 <div class="cc__acts"><button type="button" class="btn btn--sm" data-ac="cp" data-i="${i}"><svg class="ico" aria-hidden="true"><use href="#i-copy"/></svg>کپی پرامپت</button><button type="button" class="btn btn--sm" data-ac="rr" data-i="${i}"${x.lock?" disabled":""}>عوض‌کن</button><button type="button" class="btn btn--sm" data-ac="lk" data-i="${i}" aria-pressed="${!!x.lock}">${x.lock?"باز کردن قفل":"قفل"}</button></div></article>`}).join(""):emptyBox("i-album","هنوز آلبومی نساخته‌ای","دنیای آلبوم را انتخاب کن و «ساخت آلبوم» را بزن.");
 $("#aactions").hidden=!A.shots.length;$("#aname").value=A.n||"";
 $("#amine").innerHTML=S.albums.length?S.albums.map((a,i)=>`<article class="card rc"><h3>${esc(a.n||"آلبوم بدون‌نام")}</h3><p class="muted">${esc((ATPL.find(t=>t.id===a.tpl)||ATPL[0]).t)} · ${fa(a.shots.length)} عکس · نسبت ${fa(a.ratio)}</p><div class="cc__acts"><button type="button" class="btn btn--sm" data-ao="${i}">باز کردن</button><button type="button" class="btn btn--sm btn--ghost" data-ad="${i}" aria-label="حذف ${esc(a.n||"آلبوم بدون‌نام")}"><svg class="ico" aria-hidden="true"><use href="#i-trash"/></svg>حذف</button></div></article>`).join(""):emptyBox("i-album","هنوز آلبومی ذخیره نکرده‌ای","یک آلبوم بساز و «ذخیرهٔ آلبوم» را بزن.");
 $$("#amine [data-ao]").forEach(b=>b.onclick=()=>{S.alb=cleanAlb(S.albums[+b.dataset.ao])||newAlb();save();renderAlbum();scrollTo(0,0)});
 $$("#amine [data-ad]").forEach(b=>b.onclick=()=>{S.albums.splice(+b.dataset.ad,1);save();renderAlbum()})}
$("#ashots").addEventListener("click",e=>{const b=e.target.closest("[data-ac]");if(!b)return;const A=S.alb,i=+b.dataset.i,a=b.dataset.ac;
 if(a==="cp"){const o=shotPrompt(i);if(o)copy(primary(o))}
 if(a==="lk"){A.shots[i].lock=A.shots[i].lock?0:1;save();renderAlbum()}
 if(a==="rr"&&!A.shots[i].lock){const n=genShot(A.shots[i].k,A.world,A.shots.filter((_,j)=>j!==i));A.shots[i]=n;save();renderAlbum()}});
$("#asize").onchange=e=>{S.alb.size=+e.target.value;S.alb.shots=[];save();renderAlbum()};
$("#aratio").onchange=e=>{S.alb.ratio=e.target.value;save();renderAlbum()};
$("#afrom").onclick=()=>{let n=0;AROLES.forEach(r=>{if(S.sel[r]){S.alb.world[r]=S.sel[r];n++}});save();renderAlbum();toast(n?"دنیای آلبوم از سازنده پر شد":"سازنده خالی است")};
$("#arnd").onclick=()=>{S.alb.world=randWorld({},true);save();renderAlbum()};
$("#agen").onclick=()=>{const A=S.alb;
 if(conflicts(Object.values(A.world)).length)return toast("اول تعارض دنیای آلبوم را برطرف کن");
 const miss=AREQ.some(r=>!A.world[r]);if(miss){A.world=randWorld(A.world,false);toast("موارد خالی تصادفی پر شد")}
 genAlbum();save();renderAlbum()};
$("#aname").oninput=e=>{S.alb.n=e.target.value.slice(0,60);save()};
$("#acopyall").onclick=()=>copy(albumText());
$("#asave").onclick=()=>{const A=S.alb;if(!A.shots.length)return;A.n=($("#aname").value||"").trim()||"آلبوم "+fa(S.albums.length+1);
 S.albums.unshift(cleanAlb(JSON.parse(JSON.stringify(A))));S.albums=S.albums.slice(0,20);save();renderAlbum();toast("آلبوم ذخیره شد")};
$("#abd").onclick=()=>{let n=0;S.alb.shots.forEach(x=>{if(x.pose&&!S.board.some(b=>b.c===x.pose)){S.board.push({c:x.pose,d:0});n++}});save();toast(n?fa(n)+" ژست به شات‌لیست اضافه شد":"همه قبلاً در شات‌لیست بودند")};
/* ---------- کد فعال‌سازی و فعال‌سازی (Worker مشترک AIhub، توکن امضاشدهٔ ECDSA P-256) ----------
   مثل پولینو: فعال‌سازی یک‌بار آنلاین؛ بعد آفلاین. تأیید دوره‌ای هر ۷ روز (در صورت اتصال).
   قطعی اینترنت هرگز برنامه را قفل نمی‌کند. در حالت منقضی/باطل، دانلود پشتیبان همیشه آزاد است. */
/* آدرس‌ها به ترتیب امتحان می‌شوند؛ دامنهٔ اختصاصی خودت را اول بگذار (workers.dev گاهی فیلتر است).
   مثال: ['https://license.example.com','https://aihub-license.get-aihubtools.workers.dev'] */
const LIC_APIS=['https://aihub-license.get-aihubtools.workers.dev'],LIC_PRODUCT='duoframe',LIC_PUBLIC_JWK={"kty":"EC","crv":"P-256","x":"oaMsNWVXFBV3s7IW55TXXWc8b2fUkG6x-CQOunje2fM","y":"CpMhKno5HTtkUg7r9kykintWA_g-9E8xavFNyGJycDg"},LIC_ENFORCE=true;
const LIC_KEY='license',LIC_LS='duoframe.lic',LIC_REVAL_DAYS=7,LIC_SUPPORT='⁦@aihub_tools⁩',LIC_BUY='https://t.me/aihub_tools';
const LIC_CH=[["روبیکا", "https://rubika.ir/aihub_tools", "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M9 9h4a2 2 0 010 4H9m3 0l3 3\"/></svg>"], ["تلگرام", "https://t.me/aihub_tools", "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 4L3 11l6 2 2 6 3-4 5 4z\"/></svg>"], ["اینستاگرام", "https://instagram.com/aihub_tools", "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"3.6\"/><circle cx=\"16.8\" cy=\"7.2\" r=\".6\"/></svg>"]];
const LIC={row:null,blocked:false,state:'off',msg:'',busy:false};
const LIC_ALPHA='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const licNewDevice=()=>{const r=new Uint8Array(12);crypto.getRandomValues(r);let s='';for(let i=0;i<12;i++){s+=LIC_ALPHA[r[i]%32];if(i%4===3&&i<11)s+='-'}return s};
const licB64=s=>{s=String(s).replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u};
const licIDB=()=>new Promise((res,rej)=>{try{const q=indexedDB.open('duoframe',1);q.onupgradeneeded=()=>q.result.createObjectStore('kv');q.onsuccess=()=>{q.result.onversionchange=()=>q.result.close();res(q.result)};q.onerror=()=>rej(q.error)}catch(e){rej(e)}});
async function idbGet(k){try{const db=await licIDB();return await new Promise(r=>{const q=db.transaction('kv').objectStore('kv').get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(undefined)})}catch(e){return undefined}}
async function idbPut(k,v){try{const db=await licIDB();await new Promise(r=>{const t=db.transaction('kv','readwrite');t.objectStore('kv').put(v,k);t.oncomplete=()=>r();t.onerror=()=>r();t.onabort=()=>r()})}catch(e){}}
async function licSave(){await idbPut(LIC_KEY,LIC.row);try{localStorage.setItem(LIC_LS,JSON.stringify(LIC.row))}catch(e){}}
async function licLoad(){
 let row=await idbGet(LIC_KEY);
 if(!row){try{row=JSON.parse(localStorage.getItem(LIC_LS)||'null')}catch(e){}}
 if(!row||!row.dev)row=Object.assign({},row||{},{dev:licNewDevice()});
 LIC.row=row;await licSave()}
/* بررسی امضا با کلید عمومی؛ payload یا null */
async function licVerify(token){
 try{
  const parts=String(token||'').trim().split('.');if(parts.length!==2||!parts[0]||!parts[1])return null;
  const jwk={kty:'EC',crv:'P-256',x:LIC_PUBLIC_JWK.x,y:LIC_PUBLIC_JWK.y};
  const key=await crypto.subtle.importKey('jwk',jwk,{name:'ECDSA',namedCurve:'P-256'},false,['verify']);
  const ok=await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},key,licB64(parts[1]),new TextEncoder().encode(parts[0]));
  if(!ok)return null;
  return JSON.parse(new TextDecoder().decode(licB64(parts[0])));
 }catch(e){return null}}
/* زمان امن: اگر ساعت دستگاه عقب برده شود، آخرین زمان دیده‌شده ملاک است */
const licNow=()=>Math.max(Date.now(),(LIC.row&&LIC.row.lastSeen)||0);
async function licCheck(token){
 const p=await licVerify(token);
 if(!p)return{ok:false,reason:'sig'};
 if(p.p!==LIC_PRODUCT)return{ok:false,reason:'product'};
 if(p.d!==LIC.row.dev)return{ok:false,reason:'device'};
 if(licNow()>p.exp)return{ok:false,reason:'expired',payload:p};
 return{ok:true,payload:p}}
const LIC_MSG={
 notfound:'این کد معتبر نیست. نوشتار آن را دوباره بررسی کنید.',
 revoked:'این کد غیرفعال شده است. با پشتیبانی تماس بگیرید ('+LIC_SUPPORT+').',
 expired:'اشتراک این کد تمام شده است. برای تمدید با پشتیبانی تماس بگیرید ('+LIC_SUPPORT+'). بعد از تمدید، دکمهٔ «فعال‌سازی» را دوباره بزنید.',
 devices:'ظرفیت ۳ دستگاه این کد پر شده است. از پشتیبانی ('+LIC_SUPPORT+') بخواهید یک دستگاه را آزاد کند.',
 product:'این کد برای دوقاب نیست.',
 device:'این دستگاه برای این کد فعال نیست؛ دوباره فعال‌سازی کنید.',
 sig:'کد فعال‌سازی معتبر نیست یا برای این دستگاه صادر نشده است.',
 net:'اتصال به سرور برقرار نشد. VPN را روشن کنید و دوباره تلاش کنید، یا از «فعال‌سازی دستی» پایین صفحه استفاده کنید.'};
let licApiIdx=0;
async function licCall(action,extra){
 const body=JSON.stringify(Object.assign({action},extra));
 for(let k=0;k<LIC_APIS.length;k++){
  const i=(licApiIdx+k)%LIC_APIS.length,ctl=new AbortController(),t=setTimeout(()=>ctl.abort(),12000);
  try{
   const r=await fetch(LIC_APIS[i],{method:'POST',headers:{'Content-Type':'application/json'},body,signal:ctl.signal});
   if(r.status>=500)continue;
   const j=await r.json();licApiIdx=i;return j;
  }catch(e){}finally{clearTimeout(t)}}
 return{net:true}}
async function licInit(){
 await licLoad();
 if(!LIC_ENFORCE){LIC.state='off';return}
 if(!LIC.row.token){LIC.blocked=true;LIC.state='none';return}
 const c=await licCheck(LIC.row.token);
 if(c.ok){
  LIC.state='active';
  if(licNow()-(LIC.row.lastSeen||0)>36e5){LIC.row.lastSeen=licNow();await licSave()}
  setTimeout(()=>licBackground(false),2500);return}
 if(c.reason==='expired'&&Date.now()>(LIC.row.lastSeen||0)){LIC.row.lastSeen=Date.now();await licSave()} /* انقضا با ساعت درست دیده شد؛ عقب‌بردن ساعت دیگر کمکی نمی‌کند */
 LIC.blocked=true;LIC.state=c.reason==='expired'?'expired':'none';LIC.msg=c.reason==='expired'?LIC_MSG.expired:''}
/* تأیید دوره‌ای آنلاین؛ خطای شبکه هیچ‌وقت چیزی را قفل نمی‌کند */
async function licBackground(force){
 const r0=LIC.row;if(!LIC_ENFORCE||!r0||!r0.token||!r0.license)return 'skip';
 if(!force&&Date.now()-(r0.checkedAt||0)<LIC_REVAL_DAYS*864e5)return 'fresh';
 const r=await licCall('validate',{license:r0.license,device:r0.dev,product:LIC_PRODUCT});
 if(r.net)return 'offline';
 if(r.valid){
  const c=await licVerify(r.token);
  if(c&&c.d===r0.dev&&c.p===LIC_PRODUCT){r0.token=r.token;r0.exp=r.exp;r0.checkedAt=Date.now();r0.lastSeen=Math.max(r0.lastSeen||0,Date.now());await licSave();return 'ok'}
  return 'sig'}
 const reason=r.reason||'notfound';
 if(reason!=='expired'){r0.token=null;r0.exp=null}
 await licSave();
 LIC.blocked=true;LIC.state=reason;LIC.msg=LIC_MSG[reason]||LIC_MSG.notfound;showLicense();
 return reason}
async function licStore(license,token,payload){
 Object.assign(LIC.row,{license,token,exp:payload.exp,checkedAt:Date.now(),lastSeen:Math.max(LIC.row.lastSeen||0,Date.now())});
 await licSave();LIC.blocked=false;LIC.state='active';LIC.msg=''}
const licSetMsg=(text,kind)=>{const m=$('#licMsg');if(m){m.textContent=text||'';m.className=text?('alert '+(kind==='ok'?'alert--success':'alert--danger')):'lmsg-empty'}};
const licBusy=on=>{LIC.busy=on;$$('#lock [data-lic=activate],#lock [data-lic=manual]').forEach(b=>{b.disabled=on})};
async function licActivate(){
 if(LIC.busy)return;
 const code=(($('#licKey')||{}).value||'').trim().toUpperCase().replace(/\s+/g,'');
 if(!/^[A-Z0-9-]{8,40}$/.test(code)){licSetMsg('کد فعال‌سازی را وارد کنید (مثلاً DUO-XXXX-XXXX-XXXX).');return}
 licBusy(true);licSetMsg('در حال اتصال به سرور…','ok');
 const r=await licCall('activate',{license:code,device:LIC.row.dev,product:LIC_PRODUCT});
 licBusy(false);
 if(r.net){licSetMsg(LIC_MSG.net);return}
 if(r.valid){
  const c=await licVerify(r.token);
  if(!c||c.d!==LIC.row.dev||c.p!==LIC_PRODUCT){licSetMsg(LIC_MSG.sig);return}
  await licStore(code,r.token,c);licAfter();return}
 licSetMsg(LIC_MSG[r.reason]||r.message||LIC_MSG.notfound)}
async function licManual(){
 if(LIC.busy)return;
 const token=(($('#licTok')||{}).value||'').replace(/\s+/g,'');
 if(!token){licSetMsg('کد دستی را بچسبانید.');return}
 const c=await licCheck(token);
 if(!c.ok){licSetMsg(c.reason==='expired'?LIC_MSG.expired:c.reason==='device'?'این کد برای دستگاه دیگری صادر شده است. کد دستگاه خودتان را برای پشتیبانی بفرستید.':LIC_MSG[c.reason]||LIC_MSG.sig);return}
 await licStore(c.payload.l,token,c.payload);licAfter()}
function licAfter(){
 document.body.classList.remove('locked');$('#lock').innerHTML='';
 updLicUI();go(curView,true);toast('دوقاب فعال شد')}
/* ---------- صفحهٔ فعال‌سازی ---------- */
function showLicense(){
 $$('dialog[open]').forEach(d=>d.close());
 document.body.classList.add('locked');
 const r=LIC.row||{},expired=LIC.state==='expired'||LIC.state==='revoked',hasData=(S.fav&&S.fav.length)||(S.board&&S.board.length)||(S.saved&&S.saved.length)||(S.albums&&S.albums.length);
 $('#lock').innerHTML='<div class="lockbox"><div class="lockbox__head"><img src="icon-192.png" width="64" height="64" alt=""><h1>'+(expired?'اشتراک شما تمام شده':'فعال‌سازی دوقاب')+'</h1>'
  +'<p class="muted">'+(expired?'برای ادامه، اشتراک را تمدید و دوباره فعال کنید.':'کد فعال‌سازی‌ای که از پشتیبانی گرفته‌اید را وارد کنید.')+'</p></div>'
  +'<div class="card card--hero stack" style="--stack:var(--sp-3)">'
  +'<div class="alert alert--warning"><span>برای فعال‌سازی (فقط یک بار) به <b>اینترنت</b> نیاز دارید؛ اگر اتصال برقرار نشد، VPN را روشن کنید. بعد از فعال‌سازی، برنامه بدون اینترنت کار می‌کند.</span></div>'
  +'<div class="field"><label class="field__label" for="licKey">کد فعال‌سازی</label><input class="input input--ltr" id="licKey" dir="ltr" autocomplete="off" spellcheck="false" placeholder="DUO-XXXX-XXXX-XXXX" value="'+esc(r.license||'')+'"></div>'
  +'<div id="licMsg" role="alert" class="'+(LIC.msg?'alert alert--danger':'lmsg-empty')+'">'+esc(LIC.msg||'')+'</div>'
  +'<button class="btn btn--primary btn--block" type="button" data-lic="activate">فعال‌سازی</button>'
  +'<button class="btn btn--block" type="button" data-lic="buy" aria-expanded="false">خرید کد فعال‌سازی</button>'
  +'<div class="lchoose" id="licChoose" hidden><p>از هر پلتفرمی که راحت‌تری برای ما پیام بده؛ آیدی هر سه <span dir="ltr">@aihub_tools</span> است.</p><div class="soc">'+LIC_CH.map(c=>'<a href="'+c[1]+'" target="_blank" rel="noopener">'+c[2].replace('<svg ','<svg class="ico" ')+c[0]+'</a>').join('')+'</div></div>'
  +'<div class="licdev"><span>کد دستگاه شما</span><b dir="ltr">'+esc(r.dev||'')+'</b><button class="btn btn--sm" type="button" data-lic="copydev">کپی</button></div>'
  +'<div class="acc"><details><summary>فعال‌سازی دستی (وقتی اتصال به سرور برقرار نمی‌شود)</summary><div class="acc__body"><p>کد دستگاه بالا را برای پشتیبانی ('+LIC_SUPPORT+') بفرستید. یک «کد دستی» مخصوص همین دستگاه می‌گیرید؛ آن را اینجا بچسبانید.</p><div class="field"><label class="field__label" for="licTok">کد دستی</label><textarea class="textarea ltr-area" id="licTok" dir="ltr" rows="3" spellcheck="false" placeholder="کد دستی (مخصوص این دستگاه)"></textarea></div><button class="btn btn--block" style="margin-block-start:var(--sp-3)" type="button" data-lic="manual">فعال‌سازی با کد دستی</button></div></details></div>'
  +(hasData?'<button class="btn btn--ghost btn--block" type="button" data-lic="backup"><svg class="ico" aria-hidden="true"><use href="#i-download"/></svg>دانلود پشتیبان از اطلاعات من</button>':'')
  +'<p class="muted" style="text-align:center;margin:0">پشتیبانی: '+LIC_SUPPORT+'</p></div></div>';
 const k=$('#licKey');
 if(k){k.addEventListener('input',()=>{k.value=k.value.toUpperCase().replace(/\s+/g,'')});k.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();licActivate()}})}}
/* ---------- کارت کد فعال‌سازی در تنظیمات و هشدار تمدید ---------- */
const licDaysLeft=()=>LIC.row&&LIC.row.exp?Math.floor((LIC.row.exp-licNow())/864e5):null;
function licDate(ms){try{return AIhub.jalali.format(AIhub.jalali.fromDate(new Date(ms)),'long')}catch(e){return new Date(ms).toLocaleDateString('fa-IR')}}
function updLicUI(){
 const card=$('#licCard'),ban=$('#licBanner'),ur=$('#userRole');
 if(!LIC_ENFORCE||!LIC.row||!LIC.row.token||LIC.blocked){if(card)card.innerHTML='';if(ban)ban.hidden=true;if(ur)ur.textContent='نسخهٔ ۲٫۸';return}
 const left=licDaysLeft(),last=LIC.row.checkedAt?Math.floor((Date.now()-LIC.row.checkedAt)/864e5):null;
 if(ur)ur.textContent=LIC.row.exp?'فعال تا '+licDate(LIC.row.exp):'فعال';
 if(card)card.innerHTML='<p class="licst">وضعیت: <span class="badge badge--success">فعال</span>'+(LIC.row.exp?' · تا '+esc(licDate(LIC.row.exp))+(left!==null?' ('+fa(Math.max(0,left))+' روز مانده)':''):'')+'<br>کد: <span class="ltr">…'+esc(String(LIC.row.license||'').slice(-9))+'</span> · دستگاه: <span class="ltr">'+esc(LIC.row.dev)+'</span>'+(last!==null?'<br>آخرین تأیید آنلاین: '+(last===0?'امروز':fa(last)+' روز پیش'):'')+'</p><div class="acts"><button class="btn btn--sm" type="button" data-lic="offline">بررسی آفلاین</button><button class="btn btn--sm" type="button" data-lic="check">بررسی آنلاین / تمدید</button></div><div id="licRes" class="licres" aria-live="polite"></div><p class="muted">برای تمدید با '+LIC_SUPPORT+' تماس بگیرید؛ بعد از تمدید این دکمه را بزنید.</p>';
 if(ban){if(left!==null&&left<=30){ban.hidden=false;ban.textContent='اشتراک شما '+(left<=0?'امروز':fa(left)+' روز دیگر')+' تمام می‌شود. برای تمدید با '+LIC_SUPPORT.replace(/[⁦⁩]/g,'')+' تماس بگیرید.'}else ban.hidden=true}}
async function licCheckOffline(){
 const box=$('#licRes');if(!box)return;
 const row=LIC.row||{};let h='';
 const line=(ok,t)=>'<div class="lic-line '+(ok===true?'ok':ok===false?'bad':'wr')+'"><b>'+(ok===true?'✓':ok===false?'✕':'!')+'</b><span>'+esc(t)+'</span></div>';
 if(!row.token){box.innerHTML=line(false,'کدی روی این دستگاه ذخیره نیست.');return}
 const p=await licVerify(row.token);
 h+=line(!!p,p?'امضای دیجیتال کد معتبر است':'امضای دیجیتال معتبر نیست');
 if(p){
  h+=line(p.p===LIC_PRODUCT,p.p===LIC_PRODUCT?'کد مخصوص دوقاب است':'کد برای محصول دیگری است');
  h+=line(p.d===row.dev,p.d===row.dev?'کد روی همین دستگاه ثبت شده':'کد برای دستگاه دیگری صادر شده');
  const left=Math.floor((p.exp-licNow())/864e5);
  h+=line(left>=0,left>=0?'مدت اعتبار: '+fa(left)+' روز مانده':'اشتراک تمام شده است');
  if(Date.now()<(row.lastSeen||0)-864e5)h+=line(null,'ساعت دستگاه عقب‌تر از آخرین استفاده است؛ ساعت را درست کنید.');
 }
 const days=row.checkedAt?Math.floor((Date.now()-row.checkedAt)/864e5):null;
 h+=line(days===null||days<=LIC_REVAL_DAYS*2?true:null,days===null?'هنوز تأیید آنلاین انجام نشده':'آخرین تأیید آنلاین: '+(days===0?'امروز':fa(days)+' روز پیش'));
 h+='<div class="muted">این بررسی بدون اینترنت است و فقط اعتبار ذخیره‌شده را می‌سنجد؛ لغو یا تمدید را فقط «بررسی آنلاین» می‌بیند.</div>';
 box.innerHTML=h}
async function licCheckNow(){
 toast('در حال بررسی…');
 const r=await licBackground(true);
 if(r==='ok'){toast('کد فعال‌سازی تأیید شد');updLicUI()}
 else if(r==='offline')toast('اتصال برقرار نشد؛ VPN را روشن کنید');
 else if(r==='sig')toast('پاسخ سرور معتبر نبود')}
document.addEventListener('click',async e=>{
 const b=e.target.closest('[data-lic]');if(!b)return;
 const a=b.dataset.lic;
 if(a==='activate')licActivate();
 else if(a==='manual')licManual();
 else if(a==='backup')dlBackup();
 else if(a==='buy'){const c=$('#licChoose');c.hidden=!c.hidden;b.setAttribute('aria-expanded',String(!c.hidden))}
 else if(a==='check')licCheckNow();
 else if(a==='offline')licCheckOffline();
 else if(a==='copydev'){try{await navigator.clipboard.writeText(LIC.row.dev);b.textContent='کپی شد ✓'}catch(_){b.textContent='دستی کپی کنید'}}});
async function licBoot(){
 try{await licInit()}catch(e){LIC.blocked=true;LIC.state='none'}
 if(LIC.blocked)showLicense();
 else{document.body.classList.remove('locked');$('#lock').innerHTML='';updLicUI()}
 window.__ready=true}
/* همگام‌سازی چند پنجره/تب: تغییر در یکی در دیگری هم دیده می‌شود */
addEventListener("storage",e=>{
 if(e.storageArea!==localStorage||!window.__ready)return;
 if(e.key===null||(e.key==="ccb1"&&e.newValue===null)){location.reload();return}
 if(e.key!=="ccb1")return;
 let o;try{o=JSON.parse(e.newValue)}catch(_){return}
 Object.assign(S,cleanState(migrate(o)).n);
 S.alb=cleanAlb(S.alb)||newAlb();S.albums=S.albums.map(cleanAlb).filter(Boolean).slice(0,20);
 applyTheme();applyModest();$("#modest").checked=S.modest;$("#theme").value=S.theme;$("#wake").checked=S.wake;go(curView,true)});
/* ---------- برند، تم و جستجوی سراسری (AIhub Design System) ---------- */
const BRANDS=[["rose","رز"],["indigo","نیلی"],["firouzeh","فیروزه‌ای"]];
const curBrand=()=>document.documentElement.getAttribute("data-brand")||"rose";
function syncBrandUI(){$$("[data-brand-pick]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.brandPick===curBrand())))}
function setBrand(n){if(!BRANDS.some(b=>b[0]===n))n="rose";document.documentElement.setAttribute("data-brand",n);try{localStorage.setItem("aihub-brand",n)}catch(e){}syncBrandUI()}
$$("[data-brand-pick]").forEach(b=>b.onclick=()=>setBrand(b.dataset.brandPick));
const isDark=()=>S.theme==="dark"||(S.theme!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);
function syncThemeUI(){const dk=isDark(),ic=$("#themeIco"),bt=$("#themeBtn");if(ic)ic.setAttribute("href",dk?"#i-sun":"#i-moon");if(bt)bt.setAttribute("aria-label",dk?"تغییر به ظاهر روشن":"تغییر به ظاهر تیره")}
$("#themeBtn").onclick=()=>{S.theme=isDark()?"light":"dark";save();applyTheme();$("#theme").value=S.theme};
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",syncThemeUI)}catch(e){}
document.addEventListener("click",e=>{
 const g=e.target.closest("[data-go]");if(g){e.preventDefault();navTo(g.dataset.go);return}
 const gc=e.target.closest("[data-go-cat]");if(gc){cat=+gc.dataset.goCat;lim=40;renderChips();renderLib();return}
 const x=e.target.closest("[data-do]");if(x&&x.dataset.do==="backup")dlBackup()});
function openCode(c){q=c;$("#q").value=c;cat=0;lim=40;renderChips();navTo("lib")}
function cmdkSync(){const C=AIhub.cmdk;C.clear();
 C.fromNav(".sidebar .nav__item[data-route]","صفحه‌ها");
 const cmds=[
  {title:"تنظیمات",icon:"i-gear",hint:"باز کردن",keywords:["settings","لایسنس","فعال‌سازی"],run:openSettings},
  {title:"تغییر ظاهر روشن / تیره",icon:isDark()?"i-sun":"i-moon",hint:"ظاهر",keywords:["دارک","تم","dark","theme","شب"],run:()=>$("#themeBtn").click()},
  {title:S.modest?"خاموش‌کردن حالت محتاط":"روشن‌کردن حالت محتاط",icon:"i-shield",hint:"حالت محتاط",keywords:["modest","محتاط"],run:()=>{const m=$("#modest");m.checked=!m.checked;m.dispatchEvent(new Event("change"))}},
  {title:"دریافت فایل پشتیبان",icon:"i-download",hint:"پشتیبان‌گیری",keywords:["backup","خروجی"],run:dlBackup},
  {title:"سازنده: غافلگیرم کن",icon:"i-shuffle",hint:"ترکیب تصادفی",keywords:["random","تصادفی"],run:()=>{navTo("build");setTimeout(()=>$("#rnd").click(),0)}}
 ].concat(BRANDS.map(b=>({title:"رنگ برند: "+b[1],icon:"i-palette",hint:"برند",keywords:["brand","رنگ","تم"],run:()=>setBrand(b[0])})));
 if(curOut)cmds.push({title:"کپی پرامپت فعلی",icon:"i-copy",hint:"سازنده",keywords:["prompt","کپی"],run:()=>copy(primary(curOut))});
 cmds.forEach(c=>c.group="دستورها");C.register(cmds);
 C.register(S.saved.map(s=>({title:s.n,group:"ترکیب‌های من",icon:"i-layers",hint:"باز کردن در سازنده",run:()=>loadSel(s.sel,s.ratio)})));
 C.register(S.albums.map(a=>({title:a.n||"آلبوم بدون‌نام",group:"آلبوم‌های من",icon:"i-album",hint:"باز کردن",run:()=>{S.alb=cleanAlb(JSON.parse(JSON.stringify(a)))||newAlb();save();navTo("album")}})));
 const ct={};D.cats.forEach(c=>ct[c.n]=c.t);
 C.register(D.codes.map(r=>BY[r[0]]).filter(vis).map(r=>({title:r.fa,group:"کدها",icon:"i-sparkle",hint:r.c,keywords:[r.c,r.en,ct[r.cat]||""],run:()=>openCode(r.c)})))}
const syncK=()=>{try{cmdkSync()}catch(e){}};
document.addEventListener("keydown",e=>{if(((e.ctrlKey||e.metaKey)&&e.code==="KeyK")||e.code==="Slash")syncK()},true);
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("[data-cmdk-open]"))syncK()},true);
/* ---------- شروع ---------- */
S.mode=S.mode==="edit"?"edit":"create";if(!TOOLMAP[S.tool])S.tool="generic";if(!Array.isArray(S.eops))S.eops=[];S.eops=S.eops.filter(x=>EOPS.some(p=>p.id===x));
if(!["auto","light","dark"].includes(S.theme))S.theme="auto";
S.alb=cleanAlb(S.alb)||newAlb();S.albums=(Array.isArray(S.albums)?S.albums:[]).map(cleanAlb).filter(Boolean).slice(0,20);
if(!RATIOS.includes(S.ratio))S.ratio="4:5";
applyTheme();applyModest();$("#modest").checked=!!S.modest;
$("#intro").hidden=!!S.intro;
function fromHash(){const m=/[#&]c=([\w,]+)/.exec(location.hash);if(!m)return false;const sel={};m[1].split(",").forEach(c=>{if(BY[c]&&vis(BY[c]))sel[BY[c].role]=c});if(!Object.keys(sel).length)return false;S.sel=sel;S.mode="create";save();return true}
const QP=new URLSearchParams(location.search);
const shared=QP.get("text")||QP.get("title")||QP.get("q");if(shared){q=shared.slice(0,80);$("#q").value=q}
let startTab=QP.get("tab");if(fromHash())startTab="build";
renderChips();
if(["lib","build","album","rec","shoot"].includes(startTab))go(startTab,true);else renderLib();
try{history.replaceState({duo:1},"");if(curView!=="lib"){history.pushState({duo:1,v:curView},"");navDepth=1}}catch(e){}
syncBrandUI();syncThemeUI();syncK();
licBoot();
if(RECOVERED)setTimeout(()=>toast("بخشی از اطلاعات ذخیره‌شده خراب بود و ترمیم شد (نسخهٔ خراب نگه داشته شد)",5000),1500);
