/* Deeptalk signals, consolidated from nine source documents in
   ~/notes/deeptalk/signals-md. One object = one signal; duplicates across
   authors are merged, src keeps the verbatim fragments in their original
   language. */

const SIGNALS = [
  {
    signal: "Lost attempt to speak",
    description: "— Then let's just ship the current version.\n— I just wanted…\n— Right, and after the release we'll look at the metrics.\n\nOne person starts speaking at the same time as another, stops, and never returns to their thought. In the audio: a short inhale, a barely audible “I…”, then nothing — or the mic turning on and off with no actual speech (a mic switched on after being long muted is a careful hand-raise). While Zhenya is talking, Dasha starts “A…”, “Sec…”, “I wa—” several times and goes quiet each time, because she isn't given the floor.",
    importance: "Keeps a potentially important thought from being lost and lets the host return the floor to the person whose attempt went unnoticed. Shows who isn't being given room; in the report — a pattern of who keeps getting talked over. Suggested wording: “Ira tried to add something but lost the floor. Come back to her.” Best shown privately to the host or to the person who kept talking.",
    audioWhy: "A short “I just wanted…” may not make it into the transcript at all. Even if recognized, the text doesn't show that the person tried to enter, ran into a louder line and stopped. Detection needs exact speech-start moments, voice overlap, and who kept talking vs. who yielded; partial attempts are often dropped as noise or a cough.",
    categories: ["Overlap & interruptions", "Turn-taking & airtime"],
    authors: ["Eugene Vlasov", "Daria Kochenova", "Nikita Nova", "Pauline Perevalova", "Eugene Arutyunov", "Ilya Sinelnikov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 1 — Потерянная попытка высказаться\n\n## Пример\n\n— Тогда, наверное, просто выпускаем текущую версию.\n— Я хотел только…\n— Да, и после релиза уже посмотрим на метрики.\n\nОдин человек начинает говорить одновременно с другим, останавливается и больше к своей мысли не возвращается.\n\n## Почему транскрипта недостаточно\n\nКороткое «я хотел только…» может вообще не попасть в транскрипт. Даже если оно будет распознано, из текста может быть непонятно, что человек пытался войти в разговор, столкнулся с более громкой репликой и остановился.\n\nДля определения сигнала важны точные моменты начала речи, наложение голосов и то, кто продолжил говорить, а кто уступил слово.\n\n## Как это полезно\n\nСигнал помогает не потерять потенциально важную мысль и даёт ведущему возможность вернуть слово человеку, чья попытка высказаться осталась незамеченной.\n\n## Вариант сигнала\n\nИра пыталась что-то добавить, но потеряла слово. Вернись к ней.\n\nСигнал лучше показывать приватно ведущему встречи или человеку, который продолжил говорить." },
      { author: "Daria Kochenova", text: "2. Suppressed attempt to speak\n\nNick has been talking for three minutes straight. Sasha wants to jump in but doesn't want to cut him off, and Nick isn't leaving any pauses. In the audio: a short inhale, a barely audible \"I…,\" then nothing. The cue might be a sigh — or the mic turning on and off with no actual speech.\n\nPartial attempts to speak often don't show up in the transcript. Even with timestamps, it's unclear whether someone was trying to talk or if it was just noise or a cough.\n\nShows who isn't being given room. During the call: \"Sounds like someone tried to speak — ask if anyone else has thoughts.\" In the report: a pattern of who keeps getting talked over." },
      { author: "Nikita Nova", text: "### Собеседник пытается сказать  (+ илья)\n\nПока Женя говорит, Даша несколько раз начинает «А...», «Сек...», «Я хо...», но каждый раз замолкает, потому что ей не дают сказать слова\n\nТакие короткие попытки начать говорить не попадают в транскрипт или отбрасываются как шум. Аудио позволяет услышать, что человек несколько раз пытался взять слово.\n\nПомогает дать пометку, что участнику долго не дают высказаться" },
      { author: "Pauline Perevalova", text: "1\nВася пытался вставить слово во время выступления Лёши, дайте ему слово\n\n2\nВася попытался перебить Лёшу или просто сказал, что потом дополнит\n\n3\nЛЛМ не распознает, была ли фраза закончена и нужно ли поставить напоминалку\n\n4\nВасю выслушают" },
      { author: "Eugene Arutyunov", text: "| 💡 Не дал вставить слово | нег | говорил сквозь попытки других начать реплику | ❓ | наш кастом |" },
      { author: "Ilya Sinelnikov", text: "включил микрофон, потому что хотел сказать, но не дали, поэтому выключил обратно (включение микрофоне, если он был долго выключен = аккуратное поднятие руки)" }
    ]
  },
  {
    signal: "Question with no room to answer",
    description: "— Any doubts about this decision? Great, then we launch on Monday.\n\nFormally a question was asked, but the speaker continued almost immediately, leaving participants no time to answer.",
    importance: "Distinguishes a real poll of opinions from a question no one physically has time to answer. Especially useful for leaders and meeting hosts who want to involve participants but unintentionally close the space for answers with their own pace. Suggested wording (private, prescriptive, to the asker): “You asked a question but continued almost immediately. Leave a few seconds for answers.”",
    audioWhy: "In text it can look like a proper check for opinions. To see that participants weren't actually given a chance to answer, you need the pause length, the speech tempo, and the moment the floor passes to others.",
    categories: ["Pauses & silence", "Turn-taking & airtime"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 2 — Вопрос без пространства для ответа (илья +)\n\n## Пример\n\n— У кого-нибудь есть сомнения по этому решению? Отлично, тогда запускаем в понедельник.\n\nФормально вопрос был задан, но человек почти сразу продолжил говорить, не оставив участникам времени на ответ.\n\n## Почему транскрипта недостаточно\n\nПо тексту это может выглядеть как корректная проверка мнений. Чтобы понять, что участникам фактически не дали ответить, нужны длительность паузы, темп речи и момент перехода слова к другим участникам.\n\n## Как это полезно\n\nСигнал помогает отличать настоящий сбор мнений от вопроса, после которого никто физически не успевает ответить.\n\nОн особенно полезен руководителям и ведущим встреч, которые хотят вовлекать участников, но из-за собственного темпа непреднамеренно закрывают пространство для ответа.\n\n## Вариант сигнала\n\nТы задал вопрос, но почти сразу продолжил говорить. Оставь участникам несколько секунд на ответ.\n\nЭто приватный прескриптивный сигнал человеку, задавшему вопрос." }
    ]
  },
  {
    signal: "Objection lost",
    description: "— So we're all agreed, launching Monday.\n— I'm against it, because…\n— Great, moving on.\n\nThe objection was spoken quietly and at the same time as a louder line, after which the conversation went on as if consensus had been reached.",
    importance: "Keeps the absence of further argument from being taken for agreement; lets the team return to the disagreement before it causes a problem after the meeting. Suggested wording: “An objection was voiced against the claim of consensus, but the discussion moved on. Come back to it.” Can be shown to the host, or to the whole group if that doesn't put extra pressure on the objector.",
    audioWhy: "A quiet or overlapped objection may not make it into the transcript, be recognized only partially, or be attributed to the wrong speaker. Detection needs voice separation, relative loudness, exact line timings, and the fact that the conversation continued without reacting to it.",
    categories: ["Overlap & interruptions", "Agreement & commitment"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 3 — Возражение не учли\n\n## Пример\n\n— Тогда все согласны, запускаем в понедельник.\n— Я против, потому что…\n— Отлично, двигаемся дальше.\n\nВозражение прозвучало тихо и одновременно с более громкой репликой, после чего разговор продолжился так, будто общее согласие было достигнуто.\n\n## Почему транскрипта недостаточно\n\nТихое или перекрытое возражение может не попасть в транскрипт, распознаться только частично или быть ошибочно приписано другому участнику.\n\nДля обнаружения нужны разделение голосов, относительная громкость, точные тайминги реплик и понимание того, что после возражения разговор продолжился без реакции на него.\n\n## Как это полезно\n\nСигнал помогает не принять отсутствие дальнейшего спора за общее согласие. Он позволяет вернуться к несогласию до того, как оно приведёт к проблеме уже после встречи.\n\n## Вариант сигнала\n\nНа утверждение об общем согласии прозвучало возражение, но обсуждение продолжилось. Вернитесь к нему.\n\nСигнал можно показать ведущему встречи или всей группе, если публичное отображение не создаёт дополнительного давления на возражавшего участника." }
    ]
  },
  {
    signal: "Collective aha",
    description: "After a long discussion someone says:\n— So the problem isn't the solution itself, but that we won't have time to test it?\n\nSeveral participants react almost simultaneously:\n— Ahh. — Yes, exactly. — Precisely! — Now I get it.\n\nAfter that, participants develop the same formulation and ask more specific questions.",
    importance: "Preserves the formulation that visibly clarified the problem for several people at once — a moment worth showing in Key Moments and saving in the report as a great explanation or an important turn of the conversation. A positive descriptive signal that can be shown publicly.",
    audioWhy: "The words “yes”, “right” and “got it” alone don't prove the group actually reached shared understanding. What matters is the synchrony of the reactions, their intonation and speed, and the change in group behavior after one specific line. Short vocal reactions like “ahh” may not make it into the transcript at all.",
    categories: ["Group dynamics", "Micro-sounds & backchannel"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 4 — Синхронное понимание (илья +)\n\n## Пример\n\nПосле долгого обсуждения один человек говорит:\n\n— То есть проблема не в самом решении, а в том, что мы не успеем его проверить?\n\nНесколько участников почти одновременно реагируют:\n\n— А-а-а.\n— Да, точно.\n— Именно!\n— Теперь понятно.\n\nПосле этого участники начинают развивать одну и ту же формулировку и задавать более конкретные вопросы.\n\n## Почему транскрипта недостаточно\n\nСлова «да», «точно» и «понятно» сами по себе не доказывают, что группа действительно пришла к общему пониманию.\n\nВажны синхронность реакций, их интонация, скорость появления и изменение поведения группы после конкретной реплики. Короткие звуковые реакции вроде «а-а-а» также могут вообще не попасть в транскрипт.\n\n## Как это полезно\n\nСигнал помогает сохранить формулировку, которая заметно прояснила проблему сразу для нескольких участников.\n\nТакой момент можно показать в Key Moments и сохранить в отчёте как удачное объяснение или важный поворот разговора.\n\n## Вариант сигнала\n\nКажется, эта формулировка помогла группе увидеть проблему одинаково.\n\nПосле этой формулировки несколько участников одновременно отреагировали как на прояснение проблемы. Это позитивный дескриптивный сигнал, который можно показывать публично." }
    ]
  },
  {
    signal: "Simultaneous answers",
    description: "— What risks do you see in this decision?\n\nThree participants start talking at once. One continues, two stop, and their answers are never returned to.",
    importance: "Shows the host that a question triggered several people at once: instead of keeping only the loudest answer, everyone can be given the floor in turn. Simultaneous reaction isn't necessarily a problem — it can also mean high engagement or an important question. Suggested wording (private, to the host): “Several people started answering at once. Let them speak in turn.”",
    audioWhy: "The transcriber may keep only the loudest participant's speech. The short beginnings of the other answers can disappear, merge into the main line, or appear sequential when in reality they were simultaneous. Detection needs exact speech-start moments and voice separation.",
    categories: ["Overlap & interruptions", "Group dynamics"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 5 — Несколько человек начали отвечать одновременно\n\n## Пример\n\n— Какие риски вы видите в этом решении?\n\nСразу три участника начинают говорить. Один продолжает, двое останавливаются, и к их ответам больше не возвращаются.\n\n## Почему транскрипта недостаточно\n\nТранскриптор может сохранить только речь самого громкого участника. Короткие начала остальных ответов могут исчезнуть, быть объединены с основной репликой или отображаться как последовательные, хотя в реальности они прозвучали одновременно.\n\nДля обнаружения сигнала нужны точные моменты начала речи и разделение голосов.\n\n## Как это полезно\n\nСигнал показывает ведущему, что вопрос вызвал реакцию сразу у нескольких участников. Вместо того чтобы сохранить только самый громкий ответ, можно дать каждому возможность высказаться по очереди.\n\nОдновременная реакция не обязательно является проблемой: она также может указывать на высокую вовлечённость или важность вопроса.\n\n## Вариант сигнала\n\nНа вопрос одновременно начали отвечать несколько человек. Дай им высказаться по очереди.\n\nЭто приватный прескриптивный сигнал ведущему встречи." }
    ]
  },
  {
    signal: "Lost question",
    description: "— Wait, why did we decide to launch this without testing?\n— Let me show the next screen.\n— Yes, let's take a look.\n\nThe question was spoken at the same time as another line, and the conversation moved on without an answer.",
    importance: "Keeps an already-formulated question — one that may point at a risk, a doubt, or a gap in shared understanding — from being lost. Unlike a lost attempt to speak, here the system knows the exact line the conversation can be returned to. Can be shown to the host or to the participant whose line overlapped the question.",
    audioWhy: "An overlapped question may not make it into the transcript, be recognized only partially, or look like an ordinary sequential line. Even if the text survived, without audio it's unclear that it sounded simultaneously with another line and probably wasn't heard.",
    categories: ["Overlap & interruptions"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 6 — Потерянный вопрос\n\n## Пример\n\n— А почему мы решили запускать это без проверки?\n— Я сейчас покажу следующий экран.\n— Да, давайте посмотрим.\n\nВопрос был произнесён одновременно с другой репликой, после чего разговор продолжился без ответа.\n\n## Почему транскрипта недостаточно\n\nПерекрытый вопрос может не попасть в транскрипт, распознаться только частично или отображаться как обычная последовательная реплика.\n\nДаже если текст вопроса сохранился, без аудио может быть непонятно, что он прозвучал одновременно с другой репликой и, вероятно, не был услышан участниками.\n\n## Как это полезно\n\nСигнал помогает не потерять уже сформулированный вопрос, который может указывать на риск, сомнение или недостаток общего понимания.\n\nВ отличие от потерянной попытки высказаться, здесь системе известно, к какой конкретной реплике можно вернуть разговор.\n\n## Вариант сигнала\n\nВо время наложения прозвучал вопрос, который остался без ответа. Вернитесь к нему.\n\nСигнал можно показать ведущему встречи или участнику, чья реплика перекрыла вопрос." }
    ]
  },
  {
    signal: "Uncertain yes",
    description: "— Can you finish this by Friday?\n(long pause, an inhale)\n— Yes. (quiet, drawn out, almost a question; nothing added after)\n\nOther shapes of the same signal:\n— You'll do it by Wednesday? — Well… okay.\n— Who's going to handle client comms? — I'll take it. (with a sigh)\n— Will the tests pass by Thursday? — Yes, they'll pass. The main scenarios we've already… anyway, yes, they'll pass by Thursday.",
    importance: "Keeps a formal confirmation from being taken for a reliable commitment: instead of fixing the deadline right away, you can clarify risks or offer help. Ownership showed up on paper, but the task was taken reluctantly — a risk of missed deadlines and quiet burnout. For a team, honesty and the ability to say no matter: confident words in an uncertain tone mean problems may surface later. Important not to claim “the person won't deliver” — the system observes the delivery, not intentions.",
    audioWhy: "The transcript keeps a confident, unambiguous “Yes.” Text can't show the unusually long pause before the answer, the sigh, the quiet voice, slowed speech, or the questioning intonation relative to how this person normally speaks — sighs and breathing don't make it into the transcript at all.",
    categories: ["Agreement & commitment", "Pauses & silence", "Micro-sounds & backchannel"],
    authors: ["Eugene Vlasov", "Daria Kochenova", "Nikita Nova", "Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 7 — Неуверенный ответ на обязательство\n\n## Пример\n\n— Сможешь закончить это к пятнице?\nДолгая пауза, вдох.\n— Да.\n\nСлово «да» произносится тихо, с растянутой или вопросительной интонацией. После ответа человек ничего не добавляет.\n\n## Почему транскрипта недостаточно\n\nВ транскрипте останется уверенное и однозначное:\n\n— Да.\n\nИз текста невозможно понять, что ответу предшествовала необычно долгая пауза, а сама реплика прозвучала неуверенно. Для сигнала важны длительность ответа, интонация, громкость и изменение голоса относительно обычной речи этого участника.\n\n## Как это полезно\n\nСигнал помогает не принять формальное подтверждение за надёжное обязательство. Вместо немедленной фиксации срока можно уточнить риски или необходимую помощь.\n\n## Вариант сигнала\n\nПеред ответом была долгая пауза, а подтверждение прозвучало тише обычного. Уточни риски перед фиксацией срока.\n\nВажно не говорить:\n\nЧеловек не собирается выполнять обещание.\n\nСистема наблюдает особенности ответа, но не знает намерений человека." },
      { author: "Daria Kochenova", text: "9. Sigh before \"agreement\" (способ определения disagreement)\n\n— Who's going to handle client comms?\n— I'll take it. (with a sigh)\n\nSighs and breathing don't make it into the transcript — but in audio you hear fatigue, irritation, or resignation, not enthusiasm.\n\nOwnership showed up on paper, but the person took the task reluctantly. Risk of missed deadlines and quiet burnout. During the call: \"Make sure that's real buy-in, not just giving in.\"" },
      { author: "Nikita Nova", text: "### Реальность согласия\n— Ты сделаешь это к среде?\n— Ну... окей.\n\nТранскрипт показывает только факт согласия, но не передает сомнения, паузы и интонацию, которые могут показывать нежелание или неуверенность.\n\nПомогает отличать настоящее согласие от формального. Позволяет заметить ситуации, где человек вроде бы подтвердил задачу, но на самом деле у него остались вопросы или сомнения. И вместо того, чтобы обсуждать планы дальше лучше переспросить" },
      { author: "Irina Zakharova", text: "### Uncertainty in an answer\n\n— Right, about the release. Will the tests pass by Thursday?\n\n— Yes, they'll pass. The main scenarios we've already… anyway, yes, they'll pass by Thursday.\n\n**Why an LLM with a transcript can't do this:** the transcript won't show the delay before the answer, which is likely to appear if the person isn't confident. Nor will it convey intonation, slowed speech, or the other markers of uncertainty.\n\n**Why it matters**: for a team to function, honesty matters — as does the ability to admit mistakes without fear of punishment. Confident words delivered in an uncertain tone mean the person isn't ready to say no or point to potential problems — which means those problems may surface later." }
    ]
  },
  {
    signal: "Participation dropped",
    description: "At the start of the meeting Kolya actively asks questions and reacts to other people's lines. Then several of his attempts to speak are lost in overlaps; after that he stops starting lines for a long time and gives almost no short vocal reactions.\n\nAnother shape: one person spoke every 2–3 minutes for 40 minutes — and hasn't said a word in the last 15.",
    importance: "Lets the host bring the participant back into the conversation before the meeting ends. A real in-call signal: “Masha went quiet 15 minutes ago” — possible reasons: took offense, lost interest, technical problems; the host can reach out in time. Better not to assert causality — the system doesn't know for sure why the person went silent.",
    audioWhy: "Text only shows that the person spoke little in the second half. The transcript may not keep short entry attempts and supporting reactions like “uh-huh” or “yes”. The signal needs linking several events over the meeting — the participant was active, several attempts got lost, then participation dropped — i.e. temporal analysis of one speaker's participation pattern.",
    categories: ["Turn-taking & airtime", "Group dynamics", "Personal baseline"],
    authors: ["Eugene Vlasov", "Pauline Perevalova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 8 — Участие заметно снизилось\n\n## Пример\n\nВ начале встречи Коля активно задаёт вопросы и реагирует на чужие реплики. Затем несколько его попыток высказаться теряются в наложениях.\n\nПосле этого Коля надолго перестаёт начинать реплики и почти не подаёт коротких голосовых реакций.\n\n## Почему транскрипта недостаточно\n\nПо тексту будет видно только то, что во второй части встречи Коля мало говорил. Но транскрипт может не сохранить короткие попытки войти в разговор и поддерживающие реакции вроде «угу» или «да».\n\nДля сигнала нужно связать несколько событий на протяжении встречи:\n\n1. участник был активен;\n2. несколько его попыток войти потерялись;\n3. после этого его участие заметно сократилось.\n\n## Как это полезно\n\nСигнал помогает ведущему вернуть участника в разговор до окончания встречи.\n\n## Вариант сигнала\n\nВ первой части встречи Коля активно участвовал, но после нескольких потерянных попыток стал заметно реже включаться. Спроси его мнение напрямую.\n\nПричинно-следственную связь лучше не утверждать: система не знает наверняка, почему человек замолчал." },
      { author: "Pauline Perevalova", text: "1\nАктивный участник внезапно замолчал\n\n2\nОдин человек высказывался каждые 2–3 минуты на протяжении 40 минут. Последние 15 минут — ни слова.\n\n3\nЛЛМ не справиться, так как это требует временного анализа паттерна участия конкретного спикера.\n\n4\nРеальный сигнал в момент звонка: «Маша замолчала 15 минут назад». Возможные причины: обиделась, потеряла интерес, технические проблемы. Ведущий может вовремя к ней обратиться." }
    ]
  },
  {
    signal: "Tension defused",
    description: "Two participants argue for several minutes, speaking faster and cutting into each other's lines more and more often. Then one says:\n— I think I get it. You're not against the solution itself — you're worried we won't have time to test it.\n— Yes, exactly.\n\nAfter that both speak more quietly, pauses get longer, and the overlaps stop.",
    importance: "A positive Key Moment: preserves the formulation or action that brought the discussion back onto a constructive track. Suggested wording: “After this rephrasing, participants started speaking more calmly and stopped cutting into each other's lines.”",
    audioWhy: "From the text you can see that one participant rephrased the other's position — but only the audio shows that after that formulation the character of the conversation actually changed.",
    categories: ["Emotion & mood", "Group dynamics", "Pace & rhythm"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 9 — Напряжение удалось снять (+илья)\n\n## Пример\n\nДва участника несколько минут спорят, говорят быстрее и всё чаще входят в реплики друг друга.\n\nЗатем один говорит:\n\n— Кажется, я понял. Ты не против самого решения — тебя беспокоит, что мы не успеем его проверить.\n\n— Да, именно.\n\nПосле этого оба начинают говорить тише, паузы становятся длиннее, а наложения прекращаются.\n\n## Почему транскрипта недостаточно\n\nИз текста можно понять, что один участник переформулировал позицию другого. Но только аудио показывает, что после этой формулировки действительно изменился характер разговора.\n\n## Как это полезно\n\nЭто позитивный Key Moment. Он помогает сохранить формулировку или действие, которое вернуло обсуждение в конструктивное русло.\n\n## Вариант сигнала\n\nПосле этой переформулировки участники стали говорить спокойнее и перестали входить в реплики друг друга." }
    ]
  },
  {
    signal: "Backchannel faded",
    description: "At the start of an explanation, participants react regularly:\n— Uh-huh. — Yes. — Got it.\n\nA few minutes in, these reactions disappear. The speaker keeps talking at the same tempo and makes no pauses for questions.",
    importance: "Vanishing reactions don't prove people lost attention or stopped understanding — but it's a good moment to stop and check on the listeners. Useful for presentations, demos, and long explanations. Suggested wording: “Listeners' vocal reactions have become much rarer. Pause and check that everything is clear.”",
    audioWhy: "Short reactions often don't make it into the transcript. Detecting the signal means comparing the frequency and character of vocal feedback across different parts of the explanation.",
    categories: ["Micro-sounds & backchannel"],
    authors: ["Eugene Vlasov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Vlasov", text: "# 10 — Голосовая обратная связь исчезла\n\n## Пример\n\nВ начале объяснения участники регулярно реагируют:\n\n— Угу.\n— Да.\n— Понятно.\n\nЧерез несколько минут эти реакции исчезают. Выступающий продолжает говорить в прежнем темпе и не делает пауз для вопросов.\n\n## Почему транскрипта недостаточно\n\nКороткие реакции часто не попадают в транскрипт. Чтобы обнаружить сигнал, нужно сравнить частоту и характер голосовой обратной связи в разных частях объяснения.\n\n## Как это полезно\n\nИсчезновение реакций не доказывает, что люди потеряли внимание или перестали понимать. Но это хороший момент остановиться и проверить состояние слушателей.\n\n## Вариант сигнала\n\nГолосовые реакции слушателей стали заметно реже. Сделай паузу и проверь, всё ли понятно.\n\nЭтот сигнал полезен для презентаций, демо и длинных объяснений." }
    ]
  },
  {
    signal: "Tone varies by person",
    description: "In a meeting, D. answers most participants calmly and at length. When K. addresses him, his answers become faster and shorter, the voice quieter or sharper, tense pauses appear. This repeats across several exchanges, though the content stays neutral.\n\nAnother shape: with Nick — warm tone, laughter in the voice: “Nick, you're a star as always.” To Sasha's comment — shorter, flatter: “Great, let's move on.” (no warmth in the delivery)",
    importance: "A private signal that helps a person notice patterns of their own communication that are hard to hear in the moment: “In your replies to K. your delivery got noticeably sharper several times. Check whether it's affecting your dialogue.” Also shows where rapport just shifted: “Sounds like you're warmer with some people than others — did something happen?”",
    audioWhy: "The transcript shows who talked to whom and what exactly was said, but doesn't preserve the change of one person's tempo, loudness, timbre and intonation across different interlocutors. The words can be equally polite — the difference is warmth and distance, which text doesn't capture.",
    categories: ["Tone & intonation", "Emotion & mood"],
    authors: ["Daler Aliyorov", "Daria Kochenova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 1.\nПодача зависит от собеседника\n\nСитуация\nНа встрече Д. спокойно и развернуто отвечает большинству участников. Когда к нему обращается К., его ответы становятся быстрее и короче, голос звучит тише или резче, появляются напряженные паузы. Это повторяется в нескольких обменах, хотя содержание разговора остается нейтральным.\n\nПочему LLM с транскриптом не сможет так сделать\nТранскрипт покажет, кто с кем разговаривал и что именно было сказано, но не сохранит изменение темпа, громкости, тембра и интонации одного человека при взаимодействии с разными собеседниками.\n\nКак это полезно\nПриватный сигнал помогает человеку заметить особенности собственного общения, которые сложно услышать во время разговора: «В ответах К. твоя подача несколько раз становилась заметно более резкой. Проверь, влияет ли это на ваш диалог»." },
      { author: "Daria Kochenova", text: "5. Warming up or cooling off toward someone specific\n\nWith Nick — warm tone, laughter in the voice: \"Nick, you're a star as always.\" To Sasha's comment — shorter, flatter: \"Great, let's move on.\" (no warmth in the delivery)\n\nThe words can be equally polite. The difference is in the audio: warmer or colder, closer or more distant. Text doesn't capture that.\n\nSignal: \"where rapport just shifted.\" During the call: \"Sounds like you're warmer with some people than others — did something happen?\"" }
    ]
  },
  {
    signal: "Tension spread to the group",
    description: "After a discussion of a missed deadline, one participant starts speaking louder and faster. Over the next minutes the others speed up too, start talking simultaneously more often, and leave fewer pauses between lines. The wording remains professional and outwardly neutral.",
    importance: "Allows stepping in before open escalation: “Over the last two minutes the overall tempo and intensity of the conversation have grown noticeably. Take a short break or bring the discussion back to a concrete question.”",
    audioWhy: "The transcript won't convey the successive change of vocal intensity across different participants — in text it can look like an ordinary lively discussion. Audio shows precisely the spread of an acoustic pattern from one speaker to the group.",
    categories: ["Group dynamics", "Emotion & mood", "Pace & rhythm"],
    authors: ["Daler Aliyorov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 2\nНапряжение передалось группе\n\nСитуация\nПосле обсуждения сорванного срока один участник начинает говорить громче и быстрее. В течение следующих минут остальные также ускоряются, чаще начинают говорить одновременно и оставляют меньше пауз между репликами. Формулировки при этом остаются профессиональными и внешне нейтральными.\n\nПочему LLM с транскриптом не сможет так сделать\nТранскрипт не передаст последовательное изменение голосовой интенсивности у разных участников. По тексту это может выглядеть как обычное активное обсуждение. Аудио позволяет увидеть именно распространение акустического паттерна от одного говорящего к группе.\n\nКак это полезно\nСигнал позволяет вмешаться до явной эскалации: «За последние две минуты общий темп и интенсивность разговора заметно выросли. Сделайте короткую паузу или верните обсуждение к конкретному вопросу»." }
    ]
  },
  {
    signal: "Fatigue heard",
    description: "By the end of a long meeting, a participant's voice becomes weaker and less stable, breathing quickens, phrase endings fade, and the tempo starts to waver. Meanwhile the person keeps speaking coherently and never says they're tired.",
    importance: "Helps to offer a break in time, hand over the floor, or postpone an important decision: “Your vocal strain has grown noticeably. If important decisions are still ahead, it's worth taking a pause.”",
    audioWhy: "The text can stay as clear as at the start of the meeting. Meeting length alone doesn't prove that a particular person is tired. The signal needs the dynamics of their voice, breathing and articulation relative to their own delivery at the start of the conversation.",
    categories: ["Personal baseline", "Micro-sounds & backchannel", "Emotion & mood"],
    authors: ["Daler Aliyorov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 3\nУсталость\n\nСитуация\nК концу длинной встречи голос участника становится слабее и менее стабильным, дыхание учащается, окончания фраз затихают, а темп начинает колебаться. При этом человек продолжает говорить связно и не сообщает, что устал.\n\nПочему LLM с транскриптом не сможет так сделать\nТекст может оставаться таким же ясным, как в начале встречи. Продолжительность созвона сама по себе тоже не доказывает усталость конкретного человека. Для сигнала нужна динамика его голоса, дыхания и артикуляции относительно собственной подачи в начале разговора.\n\nКак это полезно\nСигнал помогает вовремя предложить перерыв, передать слово или перенести важное решение: «Твоя голосовая нагрузка заметно выросла. Если впереди ещё важные решения, стоит сделать паузу»." }
    ]
  },
  {
    signal: "Self-censorship in the moment",
    description: "A person starts to speak more directly, cuts themselves off abruptly, and continues noticeably quieter or more carefully.",
    importance: "A private signal can give the person back the chance to voice an important thought without revealing it to the other participants: “You started a more direct formulation and abruptly softened it. If the original thought matters, try coming back to it.”",
    audioWhy: "Speech recognition often removes unfinished sounds, inhales and false starts. Even a verbatim transcript doesn't always distinguish searching for a word from a moment when the person deliberately stopped and softened the original wording. What matters is the transition between the two ways of delivery.",
    categories: ["Tone & intonation", "Micro-sounds & backchannel"],
    authors: ["Daler Aliyorov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 4\nСамоцензура в моменте (Илья +)\n\nСитуация\nЧеловек начинает говорить более прямо, но резко обрывает себя, и продолжает заметно тише или осторожнее.\n\nПочему LLM с транскриптом не сможет так сделать\nРаспознавание речи часто удаляет незавершенные звуки, вдохи и ложные старты. Даже дословный транскрипт не всегда позволяет отличить поиск слова от момента, когда человек намеренно остановил и смягчил первоначальную формулировку. Для этого важен переход между двумя способами подачи.\n\nКак это полезно\nПриватный сигнал может вернуть человеку возможность высказать важную мысль, не раскрывая ее другим участникам: «Ты начал более прямую формулировку и резко ее смягчил. Если первоначальная мысль важна, попробуй к ней вернуться»." }
    ]
  },
  {
    signal: "Accusatory question",
    description: "— Why did you decide to release this on Friday?\n\nThe phrase can be said kindly. But the participant delivers it sharply, stresses the word “why”, and uses an intonation that leaves no room for a calm explanation.",
    importance: "A private signal helps adjust the delivery before the other person starts defending themselves: “The question sounded harsher than it's worded. Try repeating it from a position of curiosity and without stressing personal responsibility.”",
    audioWhy: "The words and punctuation are identical for a curious, neutral, or accusing delivery. An LLM can guess the intent from context, but can't reliably determine how the question actually sounded to the listener.",
    categories: ["Tone & intonation", "Emphasis"],
    authors: ["Daler Aliyorov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 5\nВопрос прозвучал как обвинение\n\nСитуация\n— Почему ты решил выпускать это в пятницу?\n\nЭту фразу можно произнести доброжелательно. Но участник задает ее резко, выделяет слово «почему» и использует интонацию, не оставляющую пространства для спокойного объяснения.\n\nПочему LLM с транскриптом не сможет так сделать\nСлова и пунктуация будут одинаковыми при любопытной, нейтральной и обвиняющей подаче. LLM может предположить намерение из контекста, но не сможет надежно определить, как вопрос фактически прозвучал для собеседника.\n\nКак это полезно\nПриватный сигнал помогает скорректировать подачу до того, как собеседник начнет защищаться: «Вопрос прозвучал жестче, чем сформулирован. Попробуй повторить его с позиции любопытства и без акцента на личной ответственности»." }
    ]
  },
  {
    signal: "Name mispronounced",
    description: "The participant's name is dalEr, but a colleague repeatedly addresses him as Daliyar (Dilyar, dAler, etc.). The transcription system writes the correct name every time, relying on the participant list and the meeting context.",
    importance: "A private hint lets the speaker correct themselves right away, without putting the person in a position where they have to correct a colleague: “It seems the name dalEr was just pronounced dAler. Worth checking the correct pronunciation before addressing them next.”",
    audioWhy: "Transcription normalizes different pronunciations of one name into the same spelling. Detecting the mistake requires comparing the actual phonetics of the spoken name against the correct pronunciation provided by the participant themselves.",
    categories: ["Pronunciation"],
    authors: ["Daler Aliyorov"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daler Aliyorov", text: "## 6\nНеправильно произнесли имя (Илья +)\n\nСитуация\nУчастника зовут далЕр, но коллега несколько раз обращается к нему как к Далияр (Диляр, дАлер и т.д.). Система транскрипции при этом во всех случаях записывает правильное имя, ориентируясь на список участников и контекст встречи.\n\nПочему LLM с транскриптом не сможет так сделать\nТранскрипция нормализует разные произношения одного имени в одинаковое написание. Для определения ошибки нужно сравнить фактическую фонетику произнесенного имени с корректным произношением, предоставленным самим участником.\n\nКак это полезно\nПриватная подсказка позволяет исправиться сразу и не ставить человека в положение, где ему приходится поправлять собеседника: «Кажется, имя далЕр сейчас произнесли как дАлер. Лучше уточнить правильное произношение перед следующим обращением»." }
    ]
  },
  {
    signal: "Collective silence",
    description: "— Let me handle the entire release, then. (3–4 seconds — no one responds)\n\nAnother shape: a directive statement that concerns everyone, like “We're postponing the launch by another three months” — followed either by silence, or by no pause at all as the speaker rolls on.",
    importance: "Silence as a response: nobody wants to support the idea or challenge it. During the call: “Everyone went quiet — worth asking how people actually feel about this.” In the report: moments where a decision went through without a clear reaction from the team. When a decision is proclaimed, people often don't feel they were asked — a private prescriptive nudge helps: explicitly ask whether everyone agrees/understood.",
    audioWhy: "Silence often doesn't make it into the transcript at all — the next line follows immediately after. Even with timestamps, it's hard to tell whether people are agreeing, shocked, pushing back, or just waiting for someone else to speak.",
    categories: ["Pauses & silence", "Group dynamics", "Agreement & commitment"],
    authors: ["Daria Kochenova", "Pauline Perevalova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "1. Collective silence after the suggestion\n\n— \"Let me handle the entire release, then.\" (3–4 seconds — no one responds)\n\nSilence often doesn't make it into the transcript at all. Even with timestamps, it's hard to tell whether people are agreeing, shocked, pushing back, or just waiting for someone else to speak.\n\nSilence as a response: nobody wants to support the idea or challenge it. During the call: \"Everyone went quiet — worth asking how people actually feel about this.\" In the report: moments where a decision went through without a clear reaction from the team." },
      { author: "Pauline Perevalova", text: "1\nТишина как несогласие или непонимание (= повисла тишина)\n\n2\nДирективное высказывание, типа «Мы откладываем запуск ещё на три месяца», которое касается всех. После которого либо тишина, либо паузы в принципе нет и спикер идёт дальше.\n\n3\nВ транскрипте пауза исчезает, следующая реплика идёт сразу после.\n\n4\nКогда решение провозглашается, часто люди не чувствуют, что их спросили. Мы не знаем, кивали ли люди, но не помешает дать прескриптивный сигнал приватно: явно спроси, все ли согласны/поняли?" }
    ]
  },
  {
    signal: "Defensive reaction",
    description: "— Are you sure this estimate is realistic?\n— I already said — we have all the data, analytics sent over the report on…\n(speech 30–40% faster, pitch higher than usual)",
    importance: "An early warning sign: the conversation is shifting from discussion to defense. During the call: “Sounds like that hit a nerve — might be worth slowing down.” In the report: moments where people argued about facts but were really protecting status or ego.",
    audioWhy: "On paper, it reads like a reasonable answer. Pace and pitch don't come through in text — an LLM won't catch the escalation or tell defense apart from a calm back-and-forth.",
    categories: ["Emotion & mood", "Pace & rhythm", "Tone & intonation"],
    authors: ["Daria Kochenova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "3. Defensive reaction — faster speech and a higher pitch\n\n— Are you sure this estimate is realistic?\n— I already said — we have all the data, analytics sent over the report on…\n(speech 30–40% faster, pitch higher than usual)\n\nOn paper, it reads like a reasonable answer. Pace and pitch don't come through in text — an LLM won't catch the escalation or tell defense apart from a calm back-and-forth.\n\nEarly warning sign: the conversation is shifting from discussion to defense. During the call: \"Sounds like that hit a nerve — might be worth slowing down.\" In the report: moments where people argued about facts but were really protecting status or ego." }
    ]
  },
  {
    signal: "Group pile-on",
    description: "Three people start talking at once for 3+ seconds. Transcript: a mess of fragments — unclear who said what.\n\nA variant: two people talk over each other for 3+ seconds; one stops to let the other continue. Signal to whoever kept going: “They yielded to you — don't forget to give them space too.”",
    importance: "The team lost its structure — panic, a fight, or everyone trying to help at once. During the call: “Everyone's talking over each other — someone needs to facilitate.” In the report: a marker of emotional peaks in the meeting. In the yielding variant — both people feel seen, and the conversation doesn't pivot to a new topic before the person who yielded gets heard.",
    audioWhy: "When voices overlap, the transcript gets gaps, merged lines, and wrong speaker tags. An LLM can't reconstruct who was talking or how long the chaos lasted. The audio tells a much clearer story.",
    categories: ["Overlap & interruptions", "Group dynamics", "Emotion & mood"],
    authors: ["Daria Kochenova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "4. Group pile-on\n\nThree people start talking at once for 3+ seconds. Transcript: a mess of fragments — unclear who said what.\n\nWhen voices overlap, the transcript gets gaps, merged lines, and wrong speaker tags. An LLM can't reconstruct who was talking or how long the chaos lasted. The audio tells a much clearer story.\n\nThe team lost its structure — panic, a fight, or everyone trying to help at once. During the call: \"Everyone's talking over each other — someone needs to facilitate.\" In the report: a marker of emotional peaks in the meeting.\n\n*Both speak at the same time + one falls silent to let the other speak\nTwo people talk over each other for 3+ seconds; one stops to let the other continue.\n\nSignal to whoever kept going: \"They yielded to you — don't forget to give them space too.\" Useful because both people feel seen, and the conversation doesn't pivot to a new topic before the person who yielded gets heard." }
    ]
  },
  {
    signal: "Tone mismatch",
    description: "— Alex, you saved us again — walk us through it! (upbeat, playful)\n— Yeah, we had a solid quarter. Let's keep going. (flat, no energy in return)",
    importance: "Catches moments where one person reaches for connection — humor, warmth, enthusiasm — and the other doesn't meet them. During the call: “Tone didn't quite land — check if everything's okay between you two.” In the report: points where the exchange was fine on paper but didn't connect emotionally.",
    audioWhy: "In text — praise and a reply. You can't hear that the first person was warm and playful while the second didn't match that register. An LLM won't pick up the tonal break between the two lines.",
    categories: ["Tone & intonation", "Emotion & mood"],
    authors: ["Daria Kochenova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "6. Tone mismatch\n\n— Alex, you saved us again — walk us through it! (upbeat, playful)\n— Yeah, we had a solid quarter. Let's keep going. (flat, no energy in return)\n\nIn text — praise and a reply. You can't hear that the first person was warm and playful while the second didn't match that register. An LLM won't pick up the tonal break between the two lines.\n\nCatches moments where one person reaches for connection — humor, warmth, enthusiasm — and the other doesn't meet them. During the call: \"Tone didn't quite land — check if everything's okay between you two.\" In the report: points where the exchange was fine on paper but didn't connect emotionally." }
    ]
  },
  {
    signal: "Swallowed irritation",
    description: "— You're the same as always, leaving everything to the last minute… kidding, kidding! (silence, sigh)\n— …Nick, alright. Let's get back to the release. When are we handing it off to the client?\n\nSomeone cracks an awkward joke or it gets personal — instead of pushback, there's a quick “yeah,” silence, a sigh, and an attempt to get back on agenda. Sometimes with a name attached to whoever caused the awkward moment.",
    importance: "Catches moments where the conversation went slightly off the rails and someone swallowed it instead of saying so. During the call: “Sounds like there was some tension — worth checking if everyone's okay.” In the report: hidden friction the team formally “worked around.”",
    audioWhy: "In the transcript — a polite return to business, sometimes with a name. You can't hear the silence, sigh, or strained tone between the joke and “let's get back to it.” An LLM reads facilitation, not “that bothered me, so I'm redirecting.”",
    categories: ["Emotion & mood", "Micro-sounds & backchannel"],
    authors: ["Daria Kochenova"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "7. Conflict avoidance — swallowing irritation instead of naming it (илья +)\n\nSomeone cracks an awkward joke or it gets personal — instead of pushback, there's a quick \"yeah,\" silence, a sigh, and an attempt to get back on agenda. Sometimes with a name attached to whoever caused the awkward moment.\n\n— You're the same as always, leaving everything to the last minute… kidding, kidding! (silence, sigh)\n— …Nick, alright. Let's get back to the release. When are we handing it off to the client?\n\nIn the transcript — a polite return to business, sometimes with a name. You can't hear the silence, sigh, or strained tone between the joke and \"let's get back to it.\" An LLM reads facilitation, not \"that bothered me, so I'm redirecting.\"\n\nCatches moments where the conversation went slightly off the rails and someone swallowed it instead of saying so. During the call: \"Sounds like there was some tension — worth checking if everyone's okay.\" In the report: hidden friction the team formally \"worked around.\"" }
    ]
  },
  {
    signal: "Escalating irritation",
    description: "First line: “Well, I guess that works.” Second: “Yeah, like I already said…” Third: “We've been over this” — each one shorter, sharper, louder, or edged with fatigue or annoyance.",
    importance: "Catch it before things blow up. During the call: “Irritation seems to be building — worth pausing and rephrasing.” In the report: where discussion tipped into friction.",
    audioWhy: "The transcript gives you separate lines, not the tension curve or the buildup in someone's voice.",
    categories: ["Emotion & mood", "Tone & intonation"],
    authors: ["Daria Kochenova"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "8. Escalating irritation (илья +)\n\nFirst line: \"Well, I guess that works.\" Second: \"Yeah, like I already said…\" Third: \"We've been over this\" — each one shorter, sharper, louder, or edged with fatigue or annoyance.\n\nThe transcript gives you separate lines, not the tension curve or the buildup in someone's voice.\n\nCatch it before things blow up. During the call: \"Irritation seems to be building — worth pausing and rephrasing.\" In the report: where discussion tipped into friction." }
    ]
  },
  {
    signal: "Quiet one called on",
    description: "The team is deep in a topic; Nick hasn't joined in. Near the end, Sasha turns to him: “Nick — what do you think?”",
    importance: "Shows where attention is missing. Signal to Nick: “You haven't been in the conversation much — your colleagues want to hear from you on this.”",
    audioWhy: "In the transcript, it looks like normal dialogue. In the audio, the tone might carry irritation, disappointment, or genuine interest.",
    categories: ["Turn-taking & airtime", "Tone & intonation", "Group dynamics"],
    authors: ["Daria Kochenova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "10. Calling on someone who barely participated\n\nThe team is deep in a topic; Nick hasn't joined in. Near the end, Sasha turns to him: \"Nick — what do you think?\"\n\nIn the transcript, it looks like normal dialogue. In the audio, the tone might carry irritation, disappointment, or genuine interest.\n\nShows where attention is missing. Signal to Nick: \"You haven't been in the conversation much — your colleagues want to hear from you on this.\"" }
    ]
  },
  {
    signal: "Loaded pause",
    description: "— Nick, do you agree with this plan? (4–6 seconds of silence)\n— Well… yeah, I guess so.\n\nAnother shape: Nikita presents project updates, the listeners are silent; she reads the silence as misunderstanding and keeps explaining — while it may be a deliberate thinking pause.",
    importance: "Useful live and in the report for retros on decisions that got made. Telling a conscious thinking pause apart from discomfort shows the conversation's dynamics more precisely and surfaces moments of misunderstanding in the team.",
    audioWhy: "Pause length sometimes shows up in timestamps, but not what kind of pause it was — thinking, discomfort, or tense silence. In audio you might hear “um,” a sigh, rustling — signs of hesitation; in text the monologue just looks like one monolithic block, with no cue for why the speaker kept going.",
    categories: ["Pauses & silence"],
    authors: ["Daria Kochenova", "Nikita Nova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Daria Kochenova", text: "11. Long silence after a direct question\n\n— Nick, do you agree with this plan? (4–6 seconds of silence)\n— Well… yeah, I guess so.\n\nPause length sometimes shows up in timestamps, but not what kind of pause it was — thinking, discomfort, or tense silence. In audio you might hear \"um,\" a sigh, rustling — signs of hesitation.\n\nUseful live and in the report for retros on decisions that got made." },
      { author: "Nikita Nova", text: "### Обдумывание\nНикита рассказывает про нововведения в проекте, в ответ её собеседники молчат, она воспринимает это как сигнал непонимания и пытается объяснить ещё.\n\nВ транскрипте это будет выглядеть как монолитный кусок текста. В то время как в аудио будет сигнал почему Никита продолжила говорить\n\nПоказывает динамику разговора и отличить осознанную паузу на обдумывание. Это позволяет точнее анализировать моменты, Показывает моменты непонимания в команде." }
    ]
  },
  {
    signal: "Speech sped up",
    description: "Words come noticeably faster than this person's usual tempo. The reference value can be set before the meeting, or taken from the person's own norm across past calls (with a data-sufficiency flag).",
    importance: "Acceleration is a marker that the participant fears missing the moment or going unheard. The focus of attention shifts away from the real goals and the quality of the delivery drops. Can be descriptive or prescriptive — either way shown only to the speaker.",
    audioWhy: "The transcript doesn't record speaking speed.",
    categories: ["Pace & rhythm", "Personal baseline"],
    authors: ["Eugene Arutyunov", "Pauline Perevalova"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Pauline Perevalova", text: "1\nУскорение как страх не успеть вставить мысль. (+ илья)\n\n2\nСлова произносятся заметно быстрее обычного темпа этого человека.\n(Референсное значение можно задать самому до встречи.)\n\n3\nЛЛМ Транскрипт не фиксирует скорость произношения.\n\n4\nУскорение — маркер того, что участник боится упустить момент или оказаться неуслышанным. Фокус внимания смещается с реальных целей и качество выступления теряется. Можно дать дескриптивный сигнал, а можно и прескриптивный, но он в любом случае будет дан только выступающему." },
      { author: "Eugene Arutyunov", text: "| Говоришь слишком быстро | нег | быстрее своей нормы (нужен флаг достаточности данных) | ❓ | наш кастом |" }
    ]
  },
  {
    signal: "Overlong turn",
    description: "A continuous turn runs longer than a threshold.",
    importance: "",
    audioWhy: "",
    categories: ["Turn-taking & airtime"],
    authors: ["Eugene Arutyunov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Arutyunov", text: "| Слишком длинная реплика | нег | непрерывная реплика дольше порога ❓ | ❓ | наш кастом |" }
    ]
  },
  {
    signal: "Too much airtime",
    description: "The share of airtime over the meeting is above a threshold.",
    importance: "",
    audioWhy: "",
    categories: ["Turn-taking & airtime"],
    authors: ["Eugene Arutyunov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Arutyunov", text: "| Занимаешь слишком много эфира | нег | доля эфирного времени за встречу выше порога ❓ | ❓ | наш кастом |" }
    ]
  },
  {
    signal: "Filler words",
    description: "— I think we should first, uhh… look at the quarterly numbers… and the-en… decide on the budget…\n\nFiller frequency (“well”, “like”, “anyway”) above the person's norm; fillers used to hold the floor and buy time to think while a thought isn't finished yet.",
    importance: "Lets you track who holds the floor for long stretches or is simply stalling, and more accurately identify when someone was interrupted before finishing a thought.",
    audioWhy: "Fillers are usually stripped out of text, because in writing they carry no added information. In conversation, though, they often mean floor-holding.",
    categories: ["Turn-taking & airtime", "Micro-sounds & backchannel"],
    authors: ["Irina Zakharova", "Eugene Arutyunov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Holding the floor (filling time with fillers)\n\n— I think we should first, uhh… look at the quarterly numbers… and the-en… decide on the budget…\n\n**Why an LLM with a transcript can't do this:** fillers are usually stripped out of text, because in writing they carry no added information. In conversation, though, fillers are often used to hold the floor, to buy time to think while a thought isn't finished yet.\n\n**Why it matters**: this lets you track who holds the floor for long stretches or is simply stalling, and more accurately identify when someone was interrupted before finishing a thought." },
      { author: "Eugene Arutyunov", text: "| 💡 Слова-паразиты | нег | частота филлеров («ну», «как бы», «короче») выше нормы | ❓ | наш кастом |" }
    ]
  },
  {
    signal: "Monotone delivery",
    description: "Speaking for a long time without changes of intonation or pauses.",
    importance: "",
    audioWhy: "Marked in the source as acoustics, not transcript.",
    categories: ["Tone & intonation", "Pace & rhythm"],
    authors: ["Eugene Arutyunov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Eugene Arutyunov", text: "| 💡 Монотонность | нег | долго говоришь без смены интонации и пауз (акустика, не транскрипт) | ❓ | наш кастом |" }
    ]
  },
  {
    signal: "Sarcasm",
    description: "— I looked over your report, fixed a couple of spots, sent it to the client myself.\n— Well, thanks. Very helpful.",
    importance: "Irony and sarcasm usually point to suppressed aggression and an inability to voice dissatisfaction openly — which damages psychological safety in a team.",
    audioWhy: "From the text alone it isn't obvious that the second line is ironic. Depending on how it's delivered, it could be genuine gratitude or a sarcastic remark.",
    categories: ["Tone & intonation", "Emotion & mood"],
    authors: ["Irina Zakharova", "Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Detecting irony and sarcasm\n\n— I looked over your report, fixed a couple of spots, sent it to the client myself.\n\n— Well, thanks. Very helpful.\n\n**Why an LLM with a transcript can't do this:** From the text alone it isn't obvious that the second line is ironic. Depending on how it's delivered, it could be genuine gratitude or a sarcastic remark.\n\n**Why it matters**: irony and sarcasm usually point to suppressed aggression and an inability to voice dissatisfaction openly — which damages psychological safety in a team." },
      { author: "Graham Gullans", text: "5. Sarcasm" }
    ]
  },
  {
    signal: "Smile in the voice",
    description: "— So, did you look at my copy?\n— I did. I'll write to you after lunch and share my comments.",
    importance: "Distributed teams rarely get to work together in person. Encouraging people's efforts — including through a smile in the voice while discussing tasks — raises team motivation.",
    audioWhy: "A smile in the voice emotionally colors neutral text, adding new meaning. The words above can read as a threat if said flatly, or as praise that lifts someone's mood if said with a smile. Emotional coloring is invisible in a transcript.",
    categories: ["Tone & intonation", "Emotion & mood"],
    authors: ["Irina Zakharova"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Smile in the voice (илья +)\n\n— So, did you look at my copy?\n\n— I did. I'll write to you after lunch and share my comments.\n\n**Why an LLM with a transcript can't do this:** A smile in the voice emotionally colors neutral text, adding new meaning. The words above can read as a threat if said flatly, or as praise that lifts someone's mood if said with a smile. Emotional coloring is invisible in a transcript.\n\n**Why it matters**: distributed teams rarely get to work together in person. Encouraging people's efforts — including through a smile in the voice while discussing tasks — raises team motivation." }
    ]
  },
  {
    signal: "Supportive overlap",
    description: "— Look, if we move notifications into a separate service…\n— …then the queue can go there too!\n— Yes! And then we don't touch the main monolith at all.\n— Don't touch it, exactly.",
    importance: "Studies show that overlapping speech isn't always an interruption — sometimes it's support, and can be integral to building rapport between participants. The density of such “interruptions” is one of the clearest indicators that a team is in flow and actively engaged in the meeting.",
    audioWhy: "By the logic of the transcript, the second speaker started talking before the first had finished — an overlap. But in the context of the conversation, in the intonation and in the meaning, this isn't an interruption but support for the thought, agreement with it.",
    categories: ["Overlap & interruptions", "Group dynamics"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Not an interruption, but support\n\n— Look, if we move notifications into a separate service…\n\n— …then the queue can go there too!\n\n— Yes! And then we don't touch the main monolith at all.\n\n— Don't touch it, exactly.\n\n**Why an LLM with a transcript can't do this:** by the logic of the transcript, the second speaker started talking before the first had finished — an overlap. But in the context of the conversation, in the intonation and in the meaning, this isn't an interruption but support for the thought, agreement with it.\n\n**Why it matters**: Some studies show that overlapping speech isn't always an interruption — sometimes it's support, and can be integral to building relationships of rapport between participants. The density of such \"interruptions\" is one of the clearest indicators that a team is in flow and actively engaged in the meeting." }
    ]
  },
  {
    signal: "Unvoiced disagreement",
    description: "— …and I'm pulling this neon palette in here, a brutal grotesque, everything hard, punk. Katya, as our creative copywriter, what do you say?\n— …Mm. Well, it's bold, yeah. Kind of… vivid. I mean, why not, for them it'll be unexpected. If you see it that way — there's probably something to it.\n— Exactly! That's what I'm saying — we need to be daring.\n\nAnother shape: — Okay. Let's do it this way. If you think it's the right decision, fine. (a questioning tone without a question, sarcastic, a mental eye-roll)",
    importance: "Points to an inability to express disagreement with an idea — the team's dynamic isn't working; most likely someone is doing the work under duress. It's hard to get a good result when the other person disagrees with what was said but doesn't want (fears, is embarrassed) to say so openly. Hint from the source: clarify, ask questions.",
    audioWhy: "The reply consists of a set of compliments that are in fact polite agreement with someone senior or higher in the hierarchy. The disagreement lives in the tone — questioning without a question, sarcastic — not in the words.",
    categories: ["Agreement & commitment", "Tone & intonation", "Emotion & mood"],
    authors: ["Irina Zakharova", "Ilya Sinelnikov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Unvoiced disagreement\n\n— …and I'm pulling this neon palette in here, a brutal grotesque, everything hard, punk. Katya, as our creative copywriter, what do you say?\n\n— …Mm. Well, it's bold, yeah. Kind of… vivid. I mean, why not, for them it'll be unexpected. If you see it _that way_ — there's probably something to it.\n\n— Exactly! That's what I'm saying — we need to be daring.\n\n**Why an LLM with a transcript can't do this:** the reply consists of a set of compliments that are in fact polite agreement with someone senior or higher in the hierarchy.\n\n**Why it matters**: this signal points to an inability to express disagreement with an idea, which means the team's dynamic isn't working — most likely someone is doing the work under duress, because they don't agree with the decisions made but can't do anything about it." },
      { author: "Ilya Sinelnikov", text: "| Внутреннее несогласие | — Окей. Давайте так. Если вам кажется, что это правильное решение, пусть. | Не может полностью. Порой поведение выражается в тоне, вопросительном но без вопроса. Саркатическом. Мысленным закапыванием глаз. | Трудно получить хороший результат, если собеседник не согласен с высказыванием, но не хочет (боится, стесняется) открыто это высказать | Уточнить, задать вопросы |" }
    ]
  },
  {
    signal: "Silent participant",
    description: "Someone said nothing for the entire meeting. These are different silences: the person may have been backchanneling all meeting, fully engaged; they may have wanted to speak but never found a place to get a word in (toggling their mic on and off); they may not have been participating at all; or they're simply an audience member at a presentation.",
    importance: "These are all different silences requiring different responses, and it's useful to know about the quiet ones right during the meeting.",
    audioWhy: "Whoever said nothing for the entire meeting simply won't be in the transcript.",
    categories: ["Turn-taking & airtime", "Micro-sounds & backchannel"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Someone never spoke up\n\n**Why an LLM with a transcript can't do this:** whoever said nothing for the entire meeting simply won't be in the transcript.\n\n**Why it matters**: silence in a meeting can mean different things:\n\n- the person may have been backchanneling all meeting and the notes didn't capture it, but they were fully in agreement and engaged\n- they may have wanted to say something but never found a place to get a word in (toggling their mic on and off constantly)\n- they may simply not have been participating and were doing something else in parallel\n- they may be an audience member — one person is presenting, and no one else's participation is needed\n\nThese are all different silences requiring different responses, and it's useful to know about the quiet ones right during the meeting." }
    ]
  },
  {
    signal: "Deviation from own norm",
    description: "Monday, standup: “— Pasha, how's the sprint going overall? — Going fine! Finished the API, taking validation today, should be ready by Wednesday.”\nThursday, standup: “— Pasha, how's the sprint? — Going fine. Finished validation, taking reports today. Should be ready by Friday.”\n\nNearly identical words — but on Monday the phrase might have been delivered energetically; by Thursday, monotonously and listlessly. This signal only works over time, because it tracks a person's deviation from their own norm.",
    importance: "A deviation from the norm can signal that something is going on: the person is tired, approaching burnout, or just preoccupied with something of their own. The cues can't work out of context — a person may always have a monotone voice, and the deviation from their norm would be an unexpectedly bright delivery.",
    audioWhy: "In the transcript the answers sound ordinary, nearly identical, fairly upbeat. Pauses can appear where logically there shouldn't be any, consonants get slurred to save energy, the end of a sentence may be spoken on an exhale — these are all cues you can only hear, not read.",
    categories: ["Personal baseline", "Emotion & mood"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Tracking unusual behavior (over time)\n\n_This signal will only work over time, because it tracks a person's deviation from their own norm_\n\n**Monday, standup:**\n\n— Pasha, how's the sprint going overall?\n\n— Going fine! Finished the API, taking validation today, should be ready by Wednesday.\n\n**Thursday, standup:**\n\n— Pasha, how's the sprint?\n\n— Going fine. Finished validation, taking reports today. Should be ready by Friday.\n\n**Why an LLM with a transcript can't do this:** in the transcript the answers sound ordinary, nearly identical, fairly upbeat. On Monday the phrase might have been delivered energetically; by Thursday, monotonously and listlessly. Pauses can appear where logically there shouldn't be any, consonants get slurred to save energy, the end of a sentence may be spoken on an exhale — these are all cues you can only hear, not read.\n\n**Why it matters**: these cues can't work out of context — a person may always have a monotone voice, and the deviation from their norm would be an unexpectedly bright delivery. That said, a deviation from the norm can signal that something is going on: the person is tired, approaching burnout, or just preoccupied with something of their own." }
    ]
  },
  {
    signal: "Group dynamic shift",
    description: "Some phrase or task can change the dynamic of what's happening in a meeting. For example, a well-placed idea in a brainstorm can bring the room to life; conversely, a question about formalities like “has this been cleared with legal?” can kill the creative process entirely.",
    importance: "This concerns the key moments of a conversation and helps you understand what energizes or drains a team.",
    audioWhy: "The transcript will have the words, but you won't hear the shift in dynamic — the appearance or shrinking of pauses before answers, the amount of silence, the brightness or monotony of speech. It's precisely these that account for a qualitative change in the dynamic of the conversation.",
    categories: ["Group dynamics", "Pauses & silence", "Pace & rhythm"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Shifts in the group dynamic of a conversation\n\n**Situation:** some phrase or task can change the dynamic of what's happening in a meeting. For example, a well-placed idea in a brainstorm can bring the room to life; conversely, a question about formalities like \"has this been cleared with legal?\" can kill the creative process entirely.\n\n**Why an LLM with a transcript can't do this:** the transcript will have the words, but you won't hear the shift in dynamic — the appearance or shrinking of pauses before answers, the amount of silence, the brightness or monotony of speech. It's precisely these that account for a qualitative change in the dynamic of the conversation.\n\n**Why it matters:** this concerns the key moments of a conversation and helps you understand what energizes or drains a team." }
    ]
  },
  {
    signal: "Psychological safety level",
    description: "Measuring psychological safety in a meeting: is it safe to disagree with colleagues, is everyone's opinion asked for, did everyone speak, how do people react to each person's contribution (acceptance or ridicule), how are mistakes treated, and is there room to grow.",
    importance: "Psychological safety in a group supports creativity, teamwork, and learning — and, more broadly, the wellbeing of each person and of the group as a whole.",
    audioWhy: "Each item individually is hard to extract from a transcript alone — it would depend heavily on the specific words used, and much of it is conveyed only through emotion (the type of ridicule, irony, glossing over).",
    categories: ["Group dynamics", "Emotion & mood"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Analysis of overall psychological safety\n\nMeasuring psychological safety in a meeting: is it safe to disagree with colleagues, is everyone's opinion asked for, did everyone speak, how do people react to each person's contribution (acceptance or ridicule), how are mistakes treated, and is there room to grow.\n\n**Why not a transcript:** each item individually is hard to extract from a transcript alone — it would depend heavily on the specific words used, and much of it is conveyed only through emotion (the type of ridicule, irony, glossing over).\n\n**Why it matters:** psychological safety in a group supports creativity, teamwork, and learning — and, more broadly, the wellbeing of each person and of the group as a whole." }
    ]
  },
  {
    signal: "Energy shift by the end",
    description: "Some leaders judge a meeting's success by the change in group dynamic: it started off flat, and by the end everyone was energized. Or it started on a high note and at the end everyone went home drained. (Described by some of the project's research speakers.)",
    importance: "When people leave a meeting more relaxed than they were at the start, that's an indicator of a manager's work well done — and vice versa.",
    audioWhy: "Energy and emotion can't be read from text that hasn't been edited to convey them.",
    categories: ["Group dynamics", "Emotion & mood"],
    authors: ["Irina Zakharova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Irina Zakharova", text: "### Shift in energy toward the end of a meeting\n\n**Situation**: this was described by some of our speakers in the research. Some leaders judge a meeting's success by the change in group dynamic: it started off flat, and by the end everyone was energized. Or it started on a high note and at the end everyone went home drained.\n\n**Why not a transcript:** energy and emotion can't be read from text that hasn't been edited to convey them.\n\n**Why it matters:** when people leave a meeting more relaxed than they were at the start, that's an indicator of a manager's work well done and vice versa." }
    ]
  },
  {
    signal: "Emphasized thought",
    description: "Dasha was quickly listing the reasons why the team should act differently, but started speaking slowly when she delivered the conclusion.",
    importance: "Helps automatically highlight whole thoughts the speaker themselves wanted to stress. Simplifies finding the key moments of a meeting and lowers the risk of missing genuinely important topics.",
    audioWhy: "The transcript keeps only the words. It doesn't convey that the person deliberately set a specific thought apart with their voice: changed the volume, tempo, or intonation.",
    categories: ["Emphasis", "Pace & rhythm"],
    authors: ["Nikita Nova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Важность мысли  (+ я)\nДаша быстро перечисляла причины, почему команде надо поступить по другому, но стала медленно разговаривать когда делала вывод.\n\nВ транскрипте сохраняются только слова. Он не передает, что человек специально выделил конкретную мысль голосом: изменил громкость, темп или интонацию.\n\nПомогает автоматически выделять целые мысли, на которых говорящий сам хотел сделать акцент. Это упрощает поиск ключевых моментов встречи. Снижает риск пропустить действительно важные темы." }
    ]
  },
  {
    signal: "Emphasis placement",
    description: "— Not much work this week: closing project A, a call on project B, agreeing on the paperwork for C, and *starting* the prototype for D. — on the recording it's obvious project D is the most important one.\n\n“We didn't agree on that” — three different accents, three different conflicts.\n\nThe knockout demo — hold the transcript completely constant and change only which word is stressed: “I never said she stole my money.”\n• I never said it → someone else did\n• I never said it → flat denial\n• I never said it → but I implied it\n• I never said she stole it → someone else did\n• I never said she stole it → she borrowed it, maybe\n• I never said she stole my money → it was someone else's\n• I never said she stole my money → she took something else",
    importance: "Helps understand the speaker's intent, lowers the chance of answering the wrong part of a question, and highlights which word was key — a fuller transcript with a clear picture of the subject of the discussion or conflict. It can become a note: “this matters, Zhenya wants to stress it.”",
    audioWhy: "In the transcription it looks like a plain list — the LLM won't register which word carried the accent.",
    categories: ["Emphasis"],
    authors: ["Graham Gullans", "Nikita Nova", "Pauline Perevalova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Graham Gullans", text: "7.\nEmphasis / stress placement — the \"same seven words, seven meanings\" signal** (new) — this is your knockout demo. Hold the transcript _completely_ constant and change only which word is stressed:\n_\"I never said she stole my money.\"_\n\n- **I** never said it → someone else did\n- I **never** said it → flat denial\n- I never **said** it → but I implied it\n- I never said **she** stole it → someone else did\n- I never said she **stole** it → she borrowed it, maybe\n- I never said she stole **my** money → it was someone else's\n- I never said she stole my **money** → she took something else" },
      { author: "Nikita Nova", text: "### Акцентное слово\n— На этой неделе немного работы: закрываем проект А, созвон по проекту Б, по документам надо договориться про В и *начать* делать прототип для Д.\n\nВ транскрипции это будет выглядеть как перечисление проектов, но на записи будет очевидно что проект Д самый важный. Это может стать пометкой «это важно, Женя хочет акцентировать на этом внимание»\n\nПомогает лучше понимать намерение говорящего. Снижает вероятность ответить не на ту часть вопроса. Подсвечивает, какое слово было ключевым." },
      { author: "Pauline Perevalova", text: "1\nСмысловые ударения, на каком слове акцент\n\n2\n«Мы не договаривались». И три варианта акцента\n\n3\nЛЛМ не зафиксирует акцент\n\n4\nДаёт более полный транскрипт с четким пониманием предмета беседы/конфликта." }
    ]
  },
  {
    signal: "Emotion spike",
    description: "A discussion that on the words looks like a normal conversation, but the intonation shows one of the speakers is starting to seethe or that the words upset them — while on work calls people don't talk about emotions, they try to solve issues.",
    importance: "Helps track the emotional reaction to a dialogue in the moment. In the negotiation framing of the source: emotions are off the scale — time to ease the line, addressing the specific emotion (“I see, I understand, I'd be nervous too”).",
    audioWhy: "Emotions aren't always clear from text, because they aren't spoken out loud.",
    categories: ["Emotion & mood"],
    authors: ["Nikita Nova", "Ilya Sinelnikov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Сильные эмоции\nИдёт обсуждение, которое на словах выглядит нормальным разговором, но интонации показываю, что один из говорящих начал беситься или что его расстраивают слова. При том что на рабочих дозвонах люди не говорят про эмоции, а стараются решать вопросы\n\nВ тексте не всегда понятны эмоции, потому что они не проговариваются.\n\nПомогает в моменте отследить эмоциональную реакцию на диалог." },
      { author: "Ilya Sinelnikov", text: "| Зашкаливающие эмоции (пора травить леску) | | | | Тут же травить леску — отработать конкретную эмоцию «Вижу, понимаю, я бы тоже нервничал» |" }
    ]
  },
  {
    signal: "Confidence heard",
    description: "Speech rate as an indicator of confidence in the information: Nikita spoke quickly about the project's timeline and stages, but when the money came up she spoke more slowly and added more interjections — she isn't sure about the project's cost.",
    importance: "Shows which topics are clear and which should be discussed again or proposed for later.",
    audioWhy: "In the transcript it will look like straight text: pauses and interjections are removed.",
    categories: ["Pace & rhythm", "Emotion & mood"],
    authors: ["Nikita Nova", "Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Уверенность в информации\nСкорость речи может быть индикатором уверенности в информации. Например, про сроки и этапы проекта Никита говорила быстро, но когда речь зашла про деньги она говорила медленнее и добавила больше междометий — она не уверена в стоимости проекта.\n\nВ транскрипт это будет выглядеть как прямой текст: паузы и междометия убираются.\n\nМожно понять какие темы понятны, а какие надо обсудить ещё раз или предложить обсудить потом." },
      { author: "Graham Gullans", text: "1. Signal of confidence" }
    ]
  },
  {
    signal: "Request or order",
    description: "— Can you do this today?",
    importance: "Lowers the risk of misinterpreting an assignment and ruining the task.",
    audioWhy: "In text this can look like either an order or a request; without the intonation, the degree of importance is unclear.",
    categories: ["Tone & intonation"],
    authors: ["Nikita Nova"],
    ilyaLikes: true, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Просьба вс. Приказ  (+ илья)\n— Ты сможешь это сделать сегодня?\n\nВ тексте это может выглядеть и как приказ и как просьба, без интонации не понятна степень важности.\n\nСнижает риск неправильно интерпретировать поручение и не заруинить задачу." }
    ]
  },
  {
    signal: "Enthusiastic yes",
    description: "In the transcription the words become:\n— Yes, that's a good idea.\n\nWhile in the conversation it may have been:\n— YESSS! that's a GOOD idea",
    importance: "Helps tell formal agreement apart from genuine support for an idea. Lets you rank the topics touched on during the call by the interest they sparked in the team.",
    audioWhy: "The transcript doesn't show the strength of the reaction — the intonation, volume, and emotional response of the other person.",
    categories: ["Agreement & commitment", "Emotion & mood", "Tone & intonation"],
    authors: ["Nikita Nova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Реальность одобрения\nВ транскрипции слова станут\n— Да, это хорошая идея.\n\nХотя в разговоре это могло быть:\n— ДАААААА! это ХОРОШАЯ идея\n\nТранскрипт не показывает силу реакции, интонацию, громкость и эмоциональный отклик собеседника.\n\nПомогает отличать формальное согласие от настоящей поддержки идеи. Можно ранжировать затронутые на созвоне темы, которые вызвали у команды интерес." }
    ]
  },
  {
    signal: "State read from voice",
    description: "Dasha speaks quietly and slowly — she's tired. Nikita speaks loudly and fast — she's anxious.",
    importance: "Helps understand participants' state so emotions don't get in the way of making decisions and talking. Short answers may mean unwillingness to discuss the question in one case, or tiredness but readiness to talk in another — and the useful next step for the dialogue differs.",
    audioWhy: "From the text it isn't clear why the participants chose a particular communication style in the meeting.",
    categories: ["Emotion & mood", "Pace & rhythm"],
    authors: ["Nikita Nova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Определение состояния\nДаша говорит тихо и медленно — она устала. Никита говорит громко и быстро — она тревожится.\n\nПо тексту не понятно почему собеседники выбирают определённый стиль общения на встрече.\n\nПомогает понять состояние участников, чтобы эмоции не мешали принимать решения и разговаривать. Например, то что человек отвечает коротко в одном случае может говорить о нежелании обсуждать вопрос, в другом случае об усталости, но готовности обсуждать. В этих ситуациях дальнейшее полезное действие для развития диалога будет разным." }
    ]
  },
  {
    signal: "Confusion",
    description: "— When can we finish this task?\n— By the end of the week.\n\nIn the audio: a long pause before the answer and an intonation that make clear “end of the week” is not a firm answer.",
    importance: "Helps find the questions that caused uncertainty — the team lacks information, confidence, or alignment.",
    audioWhy: "In text this is an ordinary exchange with a precise answer, but the intonation of the answer and the long pause before it would tell a person the answer isn't certain.",
    categories: ["Emotion & mood", "Pauses & silence"],
    authors: ["Nikita Nova", "Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Nikita Nova", text: "### Смятение\n— Когда мы сможем закончить эту задачу? — К концу недели\n\nВ тексте это обычный разговор, на который дали точный ответ, но интонация ответа и долгая пауза перед ним даст понять человеку, что конец недели это неточный ответ\n\nПомогает находить вопросы, которые вызвали неопределенность. Команде не хватает информации, уверенности или согласованности" },
      { author: "Graham Gullans", text: "2. Signal of Confusion" }
    ]
  },
  {
    signal: "Audience impatience",
    description: "Someone drags out their talk, dives into needless detail, or runs over time — while the backchannel speeds up (“uh-huh, yeah-yeah,” as if hurrying them along) or, on the contrary, goes conspicuously silent.",
    importance: "Raises meeting efficiency.",
    audioWhy: "An LLM won't catch the accelerated backchannel (“uh-huh, yeah-yeah”) that nudges the speaker along; the opposite marker is a long silence in the backchannel. Combined with semantic analysis of the tempo and density of the narration, such a signal becomes possible.",
    categories: ["Micro-sounds & backchannel"],
    authors: ["Pauline Perevalova"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Pauline Perevalova", text: "1\n«Пора заканчивать»\n\n2\nЧеловек затягивает своё выступление, вдаётся в лишние детали или не укладывается по времени\n\n3\nЛЛМ не сможет уловить ускоренный бэкченнел (угу, ага-ага), который как бы поторапливает. А ещё маркером будет наоборот длительная тишина в бэкченнеле. Вкупе со смысловым анализом темпа и плотности повествования можно выдать такой сигнал\n\n4\nПовышает эффективность" }
    ]
  },
  {
    signal: "Passive-aggressive behavior",
    description: "— Yeah, who could have thought tests would catch a problem like that, right? Tests were invented as a formality anyway.",
    importance: "Usually a sign of inner disagreement, irritation, a sense of unfairness. A good negotiator won't leave it unattended — they'll ease the line, uncover the cause of the behavior, ask an extra question. Hint from the source: recognize it; clarify, ask questions.",
    audioWhy: "Can't be done fully from text — most often the behavior is expressed in the tone, not only in the specific words.",
    categories: ["Tone & intonation", "Emotion & mood"],
    authors: ["Ilya Sinelnikov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Ilya Sinelnikov", text: "| Passive aggressive behavior | — Да, кто бы мог подумать, что тесты выявят такую проблему, да? Тесты же для галочки придумали. | Не может полностью. Чаще всего поведение выражается в тоне, а не только в конкретных словах. | Обычно это признак внутреннего несогласия, раздражания, ощущения несправедливости. Хороший переговорщик не оставит без внимания, а потравит леску, вскроет причину поведения, задаст доп вопрос. | Распознать. Уточнить, задать вопросы |" }
    ]
  },
  {
    signal: "Interruption",
    description: "",
    importance: "Hint from the source: don't interrupt.",
    audioWhy: "",
    categories: ["Overlap & interruptions"],
    authors: ["Ilya Sinelnikov"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Ilya Sinelnikov", text: "| Перебивание | | | | Не перебивай |" }
    ]
  },
  {
    signal: "Reluctance",
    description: "",
    importance: "",
    audioWhy: "",
    categories: ["Emotion & mood", "Agreement & commitment"],
    authors: ["Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Graham Gullans", text: "3. Signal or reluctgance" }
    ]
  },
  {
    signal: "Evasiveness",
    description: "",
    importance: "",
    audioWhy: "",
    categories: ["Tone & intonation"],
    authors: ["Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Graham Gullans", text: "4. signal of being evasive" }
    ]
  },
  {
    signal: "Genuine vs courtesy laughter",
    description: "",
    importance: "",
    audioWhy: "",
    categories: ["Emotion & mood", "Micro-sounds & backchannel"],
    authors: ["Graham Gullans"],
    ilyaLikes: false, eugeneLikes: false, grahamLikes: false,
    src: [
      { author: "Graham Gullans", text: "6. Laugher - Genuine or courtesy laugher" }
    ]
  }
];
