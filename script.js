document.addEventListener("DOMContentLoaded", () => {
  // 🎶 MUSIC PLAYER SETUP (menu.html)
  const trackSelect = document.getElementById("track-select");
  const playButton = document.querySelector("#music-player button");

  if (trackSelect && playButton) {
    playButton.addEventListener("click", () => {
      const selected = trackSelect.value;
      const nowPlaying = document.getElementById("now-playing");
      const audioPlayer = document.getElementById("audio-player");

      if (!selected) return;

      audioPlayer.src = `assets/music/${selected}`;
      audioPlayer.style.display = "block";
      audioPlayer.play();

      const songName = trackSelect.options[trackSelect.selectedIndex].text;
      nowPlaying.textContent = songName;
    });
  }

  // 💌 MESSAGE REVEAL LOGIC (dayX.html)
  const day = document.body.getAttribute("data-day");
  const container = document.getElementById("day-messages");
  if (!day || !container) return;

  const messagesByDay = {
    1: [
  "good morning, lovebug. the sky is still sleepy and soft, and so can you be. i hope you woke up feeling safe and warm, even if just a little. wiggle your toesies under the blankets. you don’t have to do anything big yet. i’m already so so so proud of you for being here, right now, breathing and existing. that’s enough, that's enough for me to be proud and happy for you my sweet sweet boy.",
  "hi sweetheart. i know it’s tempting to stay wrapped up like a little cozy burrito forever, and honestly, that's fair. but please, please, try sitting up for a second. you don’t have to get up and start running around already. just maybe blink at the wall, reach for your water. even tiny things count. you are doing so well. better than your sleepy brain might tell you.",
  "hi my darling, please brush your teeth now. i know it’s one of those things that can feel weirdly hard sometimes, but you’ll feel so much better after. minty fresh and cared for. and sleepy eyes. you deserve to feel clean, cozy, and loved because you are. i miss your pretty face so much and i wish i was with you cuddling and maybe just going back to sleep with you even though I'm encouraging you to get up hehe. <333",
  "hello again, my sweet baby boy. did you end up getting up?? even if you just rolled over to the other side or sat up that’s something to be proud of. maybe crack open a window or peek outside. listen to some  music or let the sun say hi to you. you deserve to start the day feeling a tiny bit better even though I'm not here to call you.",
  "hey honeybee, how about a glass of water now? your sweet pretty body has been resting all night and could really use a little love. maybe rinse your face with water. and if you’re moving slow, that’s okay. slow is sacred. slow is still forward. i see how hard you’re trying, and that is more than enough.",
  "good morning again, my love. if you're still in pajamas, that’s totally okay. but if you’re ready, maybe put on something that you'd normally wear. clean clothes can gently trick your brain into feeling more ready for the day. just know, you look amazing. you don’t need to change to be beautiful.",
  "pausing to tell you something important, i’m so, so proud of you. just for being awake. for making it through the morning so far. for trying, even when it feels like a lot. unclench your jaw for me. relax your shoulders. breathe into your belly. you are so loved. you’re doing amazing, even if you can’t see it yet.",
  "hi again, my sunshine. how are you feeling right now? take a few minutes to check in with yourself. physically, emotionally, everything. your feelings are real, and they’re allowed. maybe drink a bit of water while you breathe. your body, your heart, your mind… they all matter so much to me.",
  "have you moved your body even a little today? it doesn’t have to be much, just a stretch, a sway to music, or stepping outside for some fresh air. your body isn’t a machine; it’s a soft, living thing that needs kindness. show it a little today, in whatever way you can. you deserve to feel good inside it.",
  "smiling is allowed today. even if things feel off or heavy or strange. even if it’s just for a second. your smile is the softest, most beautiful thing, like sunlight through curtains. let it happen, even just a little curl at the corners. i love your smile. it lights something up in the world that nothing else can.",
  "let’s start thinking about lunch, okay? not in a pressure-y way, just so you’re not suddenly starving and grumpy. you deserve a meal that comforts you, warms your belly, and makes your body feel nourished. you’re not a machine, you need care and softness, not just productivity.",
  "lunch time, babe. it doesn’t have to be fancy. just something real, something that fills you. you are worthy of food and rest and comfort. every single day. even on the weird ones. especially on the weird ones.",
  "if it feels okay, maybe brush your teeth again after lunch. not because you have to, but because it might help you feel a little reset. a little fresher. these little care tasks aren’t chores. they’re tiny love letters to yourself. you deserve every single one.",
  "you’ve made it through a good chunk of the day already. look at you. that’s something to be proud of, even if you feel like you haven’t done “enough.” existing is enough. breathing is enough. every minute you’ve made it through is proof of your strength and tenderness.",
  "snack time? water break? maybe both? you’re allowed to take care of yourself without earning it. you’re allowed to pause, to refuel, to rest. you are not annoying or lazy. you are human. and humans need softness.",
  "this is your soft reminder that you are already enough. not because of what you’ve done or not done today, but simply because you are. i’m proud of you. i see your effort. i feel your heart. you’re doing better than you think.",
  "gently step away from the screen for a minute, if you can. stretch your back, unclench your jaw, maybe look out a window and imagine me giving you the tightest, gentlest hug. you’re allowed to pause. you don’t have to be super productive all day. make sure you're keeping your room clean for that lil fishy you want.",
  "i hope you’re being gentle with your thoughts right now. please don’t let your mind bully your beautiful heart. you are doing your best. you don’t have to be perfect. although you are perfect.",
  "it’s almost dinner time, love. even if you’re not super hungry yet, start thinking about what might feel good to eat later. planning a little helps your future self. you deserve food that warms you from the inside out—something that feels like a hug.",
  "if you’re eating now, go slow. let yourself enjoy each bite. put your fork down between mouthfuls. take a breath. this moment is yours—nobody else’s. you’re allowed to savor your food, your space, your peace.",
  "after you eat, maybe do a quick clean up. just one dish. or wipe the counter. it doesn’t have to be everything. future-you will feel a little more held and a little less overwhelmed. and i’ll be proud of you, no matter what.",
  "the sun is slowly setting, and so are you. it’s okay to start softening now. you’ve done a lot today—more than you realize. let yourself unwind, little by little. slow evenings are sacred. your rest is not a reward. it’s a right.",
  "how about changing into some pajamas now? even if it’s early. soft clothes can signal safety to your brain. brushing your teeth now might help too. you deserve to feel comfy, clean, and completely cared for.",
  "is there something gentle you wanna do before bed? reading a few pages of the book I gave you, listening to some music, doodling, cuddling up with a plushie? whatever it is, make space for it tonight. you deserve joy that asks nothing of you.",
  "pause and think about this, you are doing so well. even if today felt messy or unproductive or tired. your effort matters. your existence matters. i’m proud of you. i love you. i am always on your side.",
  "maybe a tiny snack? nothing big, just be true to yourself and do something you think i'd be proud of you for. listen to what your body is asking for. you’re allowed to feel comforted. make sure to brush your teeth when you're done with whatever you eat if you do.",
  "there’s no rush to sleep, okay? if your thoughts are busy, that’s not a bad thing. just breathe. i’m right here, holding space for you while your mind does its thing. your brain is allowed to be noisy. you are still lovable.",
  "you are not alone. even when it’s quiet and dark and late. i am with you in every soft memory, every kind word, every breath you take. i love you on your brightest days and your messiest ones too.",
  "hi again, my sunshine. how are you feeling right now? take a quiet moment to check in with yourself. physically, emotionally, everything. no judgment. your feelings are real, and they’re allowed. maybe sip some water while you breathe. your body, your heart, your mind… they all matter so much to me.",
  "turn the lights off, maybe the fairy light on. let your become calm. rest your muscles, unclench your jaw. imagine a safe, warm place. inside or outside, real or made up. you made it through another full day. that is something to be proud of. i am so proud of you. truly.",
  "goodnight, my love. sleep safe. wrap yourself in your warm blankies. you are held. you are seen. you are loved more deeply than words can ever hold. i’ll be here tomorrow, whispering kindness into the start of your day. <3",
  "if you’re still awake, that’s okay. no guilt, no rush. just rest your body. let your mind float. you’ve done enough. you are enough. close your eyes when you're ready. the night will hold you while you drift. i'm so very proud of you my pretty boy."
],
    2: [
  "good morning, my sleepy sunflower. day two. you did it. you made it through yesterday, and i need you to know how much that matters to me. not because it was perfect or productive, but because you kept going. you breathed. you stayed. and now, here you are again, beneath your blankets. you are allowed to move just as slowly. stretch your fingers. the world is still quiet, and so can you be. this morning doesn’t need anything from you but your presence. and look, you’ve already given that.",
  "hey lovebug. i hope your dreams were kind, but if they weren’t, i want you to know you’re safe now. even just a little. maybe peek one eye open. it’s okay if your body feels heavy. it’s okay if your heart feels unsure. maybe take one deep breath for me. feel your chest rise. exhale slowly. you are still here. and i am still so proud of you for waking up and meeting the morning again.",
  "hi baby. do you think you might try brushing your teeth soon? it doesn’t have to happen right this second, but just consider it. yesterday, you did that, and i noticed. it made me proud. it made you feel a little more refreshed, didn’t it? minty breath. little care tasks like this aren’t chores. they’re quiet love notes to yourself. i hope you feel good about yourself. I am so proud.",
  "good morning again, honey. did you sit up yet? or even just shift a little? even if you’re still tucked in and haven’t moved much, that’s okay. maybe this moment can be the soft invitation to try. sit up slowly. blink toward the light. let your body notice the day, without rushing. there’s no timeline you have to follow. there’s just breath and motion and care. i am so proud of you, no matter how small the steps feel.",
  "my sleepy darling. check in with your body for a moment. how’s it feeling? can you stand, even just for a breath or two? you don’t need to do anything after. just feel your feet touch the ground. stretch if you can. roll your shoulders. your body is asking for kindness, and you deserve to listen to it without needing to earn that care. your trying is more than enough. <333",
  "hi angel. i wonder if your stomach is whispering to you yet. maybe not loudly. maybe just a nudge. could you think about breakfast, even if it’s something small? toast, a sandwich maybe some crackers. your body is so precious, and feeding it isn’t about productivity. it’s about love. yesterday, you gave it nourishment. today, it deserves the same. i hope you feel proud for every bite, every sip, every tiny moment of self-kindness.",
  "hello again, babyboy. are you still in your pajamas? that’s okay. but maybe, if you're feeling up to it, put on something soft and clean. maybe your favorite hoodie. even just switching to new socks can shift your whole mood. your clothes don’t have to be stylish—they just need to feel safe and like you. and you already looked beautiful yesterday. you will again today. every inch of you glows, with or without trying.",
  "you’re doing it, sweet boy. breathing. being kind to yourself and making me so proud. i want you to know that’s huge. even if you feel heavy or scattered, your presence in this world matters more than you can possibly know. if you need to cry, you can. if you feel a little smile creeping in, let it. whatever you’re holding, you don’t have to hold it alone. i’m right here with you.",
  "just checking in, have you brushed your teeth yet? no shame if not. this is your soft nudge to give your mouth some care, your body some love. and even if you already did earlier, please try do so again. you deserve to feel cared for.",
  "hi love. look at you! on day two, and you’re still here. that alone is something to be proud of. maybe you haven’t done anything that feels productive, but your existence is still so worthy. the way you keep showing up, even when it’s hard. that’s beautiful. you’re beautiful. and i am endlessly proud of you.",
  "could you open a window for me? just a little. even if you don’t leave your bed. let the air say hello. let the light touch your face. even just cracking the blinds is enough. the world outside isn’t rushing you. it’s waiting gently. it’s soft today. just like you.",
  "hydration check, baby. a small sip of water. that’s all. your body has carried you through so much already this morning, and it needs a little thank-you. water is the kindest love letter you can give to yourself. and i’ll always encourage it, not to fix you, but to love you.",
  "hi sweet one. i know sometimes the morning hours stretch long and feel like they’re asking too much of you. but you don’t have to do anything more than what you already are—being here, breathing, holding on with both hands. you are not behind. you are not late. you are living gently, and that is powerful. the world moves fast, but you don’t have to. your pace is perfect because it’s yours. i’m so proud of your soft courage.",
  "this is your reminder that you don’t have to earn rest, care, or love. not through work. not through perfection. not through productivity. you already deserve it. you always have. maybe put your hand on your heart right now. feel it beat. that’s your proof. your presence is a miracle.",
  "how about a little music? even just one soft song. something slow, maybe something nostalgic. let the melody wrap around your body like a hug. sway a little, even if it’s just your head. let your spirit feel like it has permission to move in small ways. you don’t have to be okay to enjoy a song. you just have to be here.",
  "hi my darling. lunchtime is coming soon, and this is just your gentle whisper to start thinking about what your body might want. it doesn’t have to be anything big or fancy. something warm. something simple. you don’t have to cook an elaborate meal to deserve nourishment. even a snack, even a slice of bread, even reheated leftovers. you are worthy of every bite.",
  "close your eyes, if you’re willing. inhale through your nose. hold for four seconds. exhale slowly through your mouth. again. you’re allowed to pause. your body is not a machine. your heart is not a checklist. you’ve done so well already today.",
  "think of one small, beautiful thing. a leaf. a memory. a soft blanket. a pair of hands you love. hold it in your mind like a flower. you deserve to feel surrounded by beauty, no matter where you are right now. you bring beauty into the world just by existing.",
  "lunchtime, my sweet. let this be something kind, not stressful. you don’t have to sit at a table. you don’t have to eat a full portion. you just have to listen to your body. it speaks so softly sometimes, but it’s there. a hungry belly doesn’t make you needy. it makes you human. and you are a human i love so dearly.",
  "maybe rinse your dish now, or wipe the table. it doesn’t need to be everything. just one little act that gives your future self a softer landing. the goal isn’t cleanliness. the goal is comfort. and you deserve comfort always.",
  "is your body asking for a nap? maybe even just to lie down? your limbs have done enough. your mind has done enough. close your eyes for a few minutes. nothing has to be figured out right now. a little snack, maybe? even a single cookie. a handful of fruit. some crackers. your body appreciates every crumb of care you offer it. and i do too.",
  "you’re not lazy. please know that. you’re moving through the world with so much quiet resilience. and just because it isn’t loud doesn’t mean it isn’t real. you’re doing so well, darling. so, so well. check in with yourself, lovebug. how’s your heart? are you holding anything too tightly? are your thoughts racing or sleepy? whatever state you’re in, it’s okay. no fixing required. you’re allowed to simply feel.",
  "your body might be asking for a bit of a change. if you can, stand by a window. sit in a different spot. let your eyes rest on something new. I love you. i hope you’ve smiled today, haven’t you? even if just a little. even if it felt silly or unearned. your smile makes the whole world softer. it lights up corners of the day i didn’t know could glow. thank you for letting it exist.",
  "how’s your room looking? don’t worry if it’s a mess. just choose one small thing—pick it up, tidy it, thank yourself. you’re not cleaning to be good. you’re cleaning because you’re already good. i’m still here. whispering through the hours. proud of you for making it this far. proud of you even if you feel like you’ve barely moved. the truth is, you’ve moved mountains just by staying.",
  "snack time again? go gentle. a bit of fruit, a slice of bread, a few crackers? something that feels kind. food is not a reward. it’s a reminder you deserve to be cared for.",
  "do you remember the little fishy you want to care for? maybe today you do a little something to make your space ready for them. or maybe just think about them. how sweet and curious they’ll be. actually, batta fish are mean sometimes hehe <3 good luck sweetie",
  "let’s think about dinner. what sounds super yummy? what wouldn't make you guilty? it doesn’t have to be big. even just a sandwich or soup is enough. your body needs care, not perfection.",
  "good evening, my sweet one. look at you. you’ve made it to this quiet, golden hour. even if the day was tangled or heavy, you stayed. and i am so, so proud.",
  "did you eat? if not, maybe now is the time. and if you did—thank you for caring for your body. that kind of care ripples out into everything. you can tidy just a little, if it feels okay. one dish. one corner. one thing put away. future-you will be grateful, but present-you is the one i love.",
  "do you want to create something? doodle. hum a song. make something bad on purpose. the point is not beauty it’s expression. your soul wants to peek out and play. you deserve that. maybe a book now. or some quiet music. let your mind slow down without pressure. you don’t need to prepare for anything. you just get to exist.",
  "the sky is darkening, and so are you. it’s okay to quiet everything down. even your thoughts. even your expectations. the day is complete. you are too. take care of your skin if you can. brush your teeth. rub lotion on your hands. whisper something nice to yourself in the mirror. you deserve to feel clean and loved.",
  "snuggle up, baby. pull the blanket up to your chin. cuddle your plushie or pillow. let your breath slow down. i’m so glad you’re here.",
  "are your thoughts feeling loud? that’s okay. don’t fight them. just let them pass. you don’t have to be silent to be restful. you just have to be gentle. you’re not alone, even now. even when it’s dark and quiet. i’m here. my love wraps around you like a whisper. you are safe. remind yourself you’re a living breathing human being.",
  "you did it. another full day. perfect and beautiful. i love you for it. goodnight, my mi corazon. let your body melt into the blankets. feel yourself soften. tomorrow will come gently. for now, rest. you’ve earned it. i'm so proud of you for today honey pie <333"
],
3: [
  "good morning, my darling heart. it’s day three. look at you back again, breathing beneath the blankets, wrapped in softness. yesterday happened, and you made it through. take a breath. wiggle your toes under the covers <3 you’re here. and that is enough.",
  "hi sleepy babe. the air is still soft this morning, and so can you be. maybe just start with a little stretch—fingers, toes, a gentle roll of your shoulders <3 let yourself unfold slowly. you’re allowed to be exactly as you are this morning.",
  "hey sweet pea. if your eyes are still heavy and your body feels slow, that’s okay. try sitting up for a moment. look around your room :3. you’re still surrounded by care. you are safe. you are loved.",
  "have you had water yet? your sweet body has been resting and would love a little hydration <3 even just a few sips. it’s a tiny act of love you give yourself.",
  "good morning again, my soft one. maybe now’s a good time to brush your teeth? it doesn’t have to be perfect. just try. a splash of water. a rinse. you deserve to feel fresh and cared for.sweetheart, maybe you’re still cozy in pajamas. if you're ready, slip into something soft and clean. dressing gently is one way of saying <3",
  "how’s your heart, love? pause and check in. are you feeling heavy? unsure? your feelings are welcome here, whatever they are. you are allowed to feel.",
  "you’ve made it through the first few waking hours. i’m so proud of you. maybe now is a good time for breakfast? something warm and comforting <3 your body deserves gentle fuel.",
  "i see how hard you’re trying, in ways no one else might notice. this is your reminder: nothing today has to be perfect. let it be yours.",
  "take a little break if you can. look at something gentle, a plant, a favorite object. you’re still here, still trying. that’s enough.",
  "did you eat? your belly deserves to feel warm and full <3 even just a few bites. food isn’t a task. it’s a gift you’re always worthy of. even just a few bites. food isn’t a task. it’s a gift you’re always worthy of.",
  "lunchtime might be now. it doesn’t have to be perfect. something simple and nourishing is enough. you’re worth that kindness.",
  "i’m proud of you. whether you’ve done ten things or just breathed through the day so far. your presence matters.",
  "do you want to lie down for a moment <3 let your body feel weightless. rest doesn’t mean stopping, it means loving yourself.",
  "take a few deep breaths. unclench your jaw. drop your shoulders. you’re here. you’re doing enough.",
  "maybe listen to some music. something soft that fits your heart’s mood. let yourself feel held by sound :3.",
  "hydrate, my love. coffee, juice, even water <3 your body needs care. each sip is a whisper: i love you.",
  "you’re doing so well. just for being here. for trying again. for being brave in your softness.",
  "if it helps, jot down a few thoughts. or speak to yourself kindly <3 let something out. you don’t have to hold everything inside.",
  "start gently thinking about dinner. what would bring you comfort? maybe something warm and soft. your body is beautiful.",
  "turn on your soft lights. cuddle a plushie <3 wrap up in your favorite blanket. let yourself settle early if you want. have you brushed your teeth again? even if you’re not heading to bed yet, it might help. these little things are acts of care.",
  "snuggle up. breathe slow. think of someone or something that makes your heart calm. let that image carry you.",
  "you’re not behind on anything. rest is right on time. even stillness is progress. you are healing. i love you, just as you are. tired, perfect, beautiful. your moonlight kind of magic is enough.",
  "goodnight, my love. nothing more is needed <3 you’ve made it. rest now. i’m proud of you."
],
4: [
  "good morning, sunshine. it’s day four, and you’re here again—soft and sleepy, but present. you’ve been doing something brave each day by simply returning to yourself. breathe in slow. the day doesn’t need anything from you yet, just your gentle presence.",
  "hi sweet soul. the sky is still stretching and yawning, just like you. maybe stretch too? let your fingers reach, let your toes wiggle. even the smallest motion counts as movement. i’m proud of you already.",
  "hey darling, are you still under the covers? it’s okay if you are. just open your eyes. blink slowly. welcome yourself back into the waking world, no pressure. your body knows how to move when it's ready. :3",
  "a little water might feel good now. you deserve refreshment, even before breakfast. each sip is a little love letter to your heart. you’re doing beautifully.",
  "good morning again. maybe brushing your teeth now? imagine me gently nudging you with a smile, just a little fresh mint and water can make you feel brand new. these acts of care are tiny magic spells. <3",
  "i love how soft mornings can be with you. maybe now’s a good moment to change into something clean, something that makes you feel like your favorite version of you. even cozy clothes can signal something special: that you deserve to feel good.",
  "hi love. check in with your body. how’s your chest? your belly? your hands? take a second to unclench, to breathe deeper. you’re allowed to feel everything you’re feeling. it’s all valid, all welcome.",
  "have you eaten yet? something warm or crunchy, something that sounds a little nice? feed yourself with yummies, like you’d feed someone you adore. because i adore you. <3",
  "whatever your morning has looked like, it’s yours, and that’s something special. you’re making it through, moment by moment. not rushing. just showing up.",
  "lunchtime soon? it doesn’t have to be big, just yummy and filling. your body is not a machine, it’s a home and it deserves warmth and food.",
  "are you feeling a little tired? maybe recline. rest your eyes, even just for a few minutes. slow is a sacred rhythm. <3",
  "something sweet for your spirit—maybe a little stretch, or standing by a window. the sunlight wants to kiss your skin and so do i. let it the sunlight do it and i'll do it when we see eachother once more.",
  "take a deep breath in. hold. let it out slow. again. you’re okay. i’m here with you in the quiet moments, too.",
  "music time? even a hum or a soft song. let yourself hear something that feels like a friend. <3",
  "drink break, darling. just a reminder. your body is soft and holy and worth caring for, always.",
  "check in with your space. is there something small you can do to make it a little cozier? maybe adjust a blanket or open a curtain. small shifts, big comfort.",
  "i love you. just wanted to say that. no reason needed. :3",
  "maybe a snack now? something that feels like love. crackers, fruit, or something warm and happy. you’re allowed.",
  "start slowing down if you want. the day doesn’t need you to rush to its finish line. you’re doing just fine.",
  "dinner thoughts? something kind to your belly, soft to your mouth. you’re worth a meal that feels like a lullaby. <3",
  "your energy might be dipping now, and that’s okay. let yourself rest into the evening gently. no pressure, only softness.",
  "i hope you know how much your existence matters. even if you’ve felt small or tired today, you’ve been precious through every moment.",
  "turn down the noise or put on some music.. the outside world can wait. tonight is for quiet things music, comfort shows, soft thoughts.",
  "brushed your teeth yet? even if you’re staying up a little later, it helps to feel a little fresh. little things matter. <3",
  "you’re almost there, sweet love. another day lived. maybe put your phone down for a bit and let yourself breathe in peace.",
  "cuddle something soft. a plushie, a pillow, even yourself. your softness is sacred. your rest is earned and you deserve everything. :3",
  "if sleep feels far, that’s okay. just rest your body. let your thoughts drift. you’re doing fine.",
  "sleepytime, sweet boy. your breath is steady, your heart still beating its brave rhythm. i love you just as you are.",
  "goodnight, my darling. today is over, and you did it. drift off knowing you were soft and strong, and i’m so proud of you. <3 if i’m not home by now, i miss you and i’ll be there in a few hours, my love."
    ]
  };

  const dayMessages = messagesByDay[day];
  const useFallback = !dayMessages || !Array.isArray(dayMessages);

  const totalMessages = useFallback ? 25 : dayMessages.length;

  for (let i = 1; i <= totalMessages; i++) {
    const box = document.createElement("div");
    box.className = "message-box";
    box.innerHTML = `
      <p>Message ${i}</p>
      <button class="reveal-btn">Reveal</button>
      <div class="message-text" style="display:none;"></div>
    `;

    const btn = box.querySelector("button");
    const msg = box.querySelector(".message-text");

    btn.addEventListener("click", () => {
      const input = prompt("Type 'gerardway' to reveal:");
      if (input === "gerardway") {
        msg.innerHTML = useFallback
          ? `💌 This is message ${i} of Day ${day}. (Customize me!)`
          : dayMessages[i - 1];

        const imgPath = `assets/images/day${day}-msg${i}.jpg`;
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = `Message ${i} Image`;
        img.style = "max-width: 100%; margin-top: 10px; border-radius: 8px; box-shadow: 0 0 10px #ff3c78;";
        img.onload = () => msg.appendChild(img);
        img.onerror = () => console.log(`No image found for Day ${day} Message ${i}`);

        msg.style.display = "block";
        msg.classList.add("revealed");
        btn.remove();
      } else {
        alert("Incorrect password! 🕷️");
      }
    });

    container.appendChild(box);
  }
});
