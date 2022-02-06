$(document).ready(function(){
    $(".burger").click(function(event){
        $(".burger, .ideas").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".btnh").click(function(event){
        $(".btnh").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".btnh2").click(function(event){
        $(".btnh2").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".btnh3").click(function(event){
        $(".btnh3").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".burger1").click(function(event){
        $(".burger1, .menu").toggleClass("active");
    });
 });
 let selector = document.getElementById('game')
 let vvod = document.querySelector('.vvod')

 selector.addEventListener('change', function(){
     let a = selector.value
     if(a == 'creed' ){
         vvod.innerHTML = `<div class="test">
         <div class="test_up">
             <h1>Assasin's creed Vallhalla</h1>
         </div>
         <div class="steam">
             <button id="info">Info</button>
             <a href="">Go to Steam</a>
         </div>
         <div id="block_flex">
             <div class="block">
                 <h1>History</h1>
                 <p>Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles. Players control Eivor Varinsdottir, a Viking raider who becomes embroiled in the centuries-old conflict between the Assassin Brotherhood, who fight for peace and liberty, and the Templar Order, who desire peace through control</p>
             </div>
             <div class="block">
                 <h1>Plot</h1>
                 <p>Driven from Norway by endless wars and dwindling resources in the ninth century CE, players will lead Eivor's clan of Norsemen across the icy North Sea to the rich lands of England's broken kingdoms. Players must carve out a new future for their clan, reliving the ruthless fighting style of Viking warriors with a revamped combat system that includes the ability to dual-wield weapons against a greater variety of enemies than ever before.To secure resources players can lead raids to select locations using their longship to earn much-needed riches and resources.</p>
             </div>
             <div class="block">
                 <h1>Main persons</h1>
                 <p>Eivor</p>
                 <p>Sigurd Styrbjornson</p>
                 <p>Basim Ibn Ishaq</p>
                 <p>King Styrbjorn</p>
                 <p>Randvi</p>
                 <p>Ivarr the Boneless</p>
             </div>
         </div>
         
     </div>`
     let test = document.querySelector('.test')
     test.style.left = '0px'
     let info = document.getElementById('info')
     info.addEventListener('click', function(){
        let flex_info = document.getElementById('block_flex')
        flex_info.style.left = '0px'
     })
    } else if (a == 'fifa') {
        vvod.innerHTML = `<div class="test1">
        <div class="test_up">
            <h1>Fifa 22</h1>
        </div>
        <div class="steam">
            <button id="info">Info</button>
            <a href="">Go to Steam</a>
        </div>
        <div id="block_flex">
            <div class="block">
                <h1>History</h1>
                <p>FIFA 22 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S. Kylian Mbappe is the cover athlete for the second consecutive year.FIFA 22 is available as two editions, a Standard Edition and an Ultimate Edition. Whilst previous games in the series have included a Champions Edition, FIFA 22 does not have one. Players who pre-ordered the Ultimate Edition were granted a variety of bonuses </p>
            </div>
            <div class="block">
                <h1>Plot</h1>
                <p>FIFA 22 introduces "Hypermotion" technology,[4] which uses motion capture data collected by having 22 real-life players play a complete, high-intensity football match in motion capture suits. The data collected from player movements, tackles, aerial duels and on-ball actions is later used to power the way both individuals and teams move across the pitch in FIFA 22. This feature is only available on the PlayStation 5, Xbox Series X/S and Stadia versions of the game.As with previous FIFA entries, a single-player "career mode" is featured in FIFA 22, where a player can control a whole team or one player throughout a 25-year career as a manager</p>
            </div>
            <div class="block">
                <h1>Main persons</h1>
                <p>Son Heung-Min</p>
                <p>David Alaba</p>
                <p>Christian Pulisic</p>
                <p>Phil Foden</p>
                <p>Alphonso Davies</p>
                <p>Trent Alexander-Arnold</p>
            </div>
        </div>
        
    </div>`
    info.addEventListener('click', function(){
        let flex_info = document.getElementById('block_flex')
        flex_info.style.left = '0px'
     })
    } else if (a == 'cry') {
        vvod.innerHTML = `<div class="test2">
        <div class="test_up">
            <h1>Far Cry 6</h1>
        </div>
        <div class="steam">
            <button id="info">Info</button>
            <a href="">Go to Steam</a>
        </div>
        <div id="block_flex">
            <div class="block">
                <h1>History</h1>
                <p>In Far Cry 6, players control Dani Rojas, a guerilla fighter pulled into the war after the death of two of her close companions. After joining Libertad in the fight against Anton Castillo, Dani travels across Yara’s island chains to recruit Far Cry 6’s other guerilla factions and lead a charge on the capital.They are assisted by Far Cry 6’s Amigos and other supporting characters like Juan.Securing land from Anton Castillo’s forces, stealing government resources, and recruiting new guerillas are just some of the activities players can enjoy across Yara.</p>
            </div>
            <div class="block">
                <h1>Plot</h1>
                <p>In 2014, Antón Castillo, the son of deposed former president Gabriel Castillo, is elected president of Yara and promises stability with the creation of "Viviro", a new cancer treatment drug developed from Yara's tobacco. Seven years later, he announces a draft "lottery" to enslave workers for the tobacco fields. As the Fuerzas Nacionales de Defensa (FND), the country's armed forces, begins rounding up poor citizens in the capital city of Esperanza, Dani Rojas joins with friends Lita Torres and Alejo Ruiz in planning an escape to make a new life in the United States. Alejo is shot and killed, but Dani and Lita escape on a fishing boat. </p>
            </div>
            <div class="block">
                <h1>Main persons</h1>
                <p>Dani Rojas</p>
                <p>Antón Castillo</p>
                <p>Diego Castillo</p>
                <p>General Jose Castillo</p>
                <p>Juan Cortez</p>
                <p>Clara Garcia</p>
            </div>
        </div>
        
    </div>`
    info.addEventListener('click', function(){
        let flex_info = document.getElementById('block_flex')
        flex_info.style.left = '0px'
     })
    } else {
        vvod.innerHTML = ""
    }
 })
