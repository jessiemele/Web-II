var grill = {
    init: function () {
        var self = this;
        this.grillButton = document.getElementById("yesGrill");
        this.grillButton.addEventListener("click", grill.cook);
        this.grillButton = document.getElementById("noGrill");
        this.grillButton.addEventListener("click", grill.noCook);
    },
    make: "weber",
    model: "genesis",
    color: "black",
    sideBurner: true,
    cooking: false,
    gas: false,
    cook: function () {
        self.cooking = true;
        grill.hungry();
    },
    noCook: function () {
        self.cooking = false;
        grill.hungry();
    },
    hungry: function () {
        if (self.cooking) {
            var pickFood = document.getElementById("container");
            pickFood.innerHTML =
                "<h1>PICK ONE AND LET'S GET GRILLING</h1>";

            var changeClass = document.getElementById("container");
            changeClass.className = "choices center";

            var food = ["ASPARAGUS", "CHICKEN", "SALMON", "STEAK"];
            for (var i = 0; i < food.length; i++) {
                var btn = document.createElement("input");
                var name = food[i];
                btn.src = "img/" + name + ".jpg";
                btn.type = "image";
                btn.id = name;
                btn.className = "foodRaw";
                document.getElementById("container").appendChild(btn);
                btn.addEventListener("click", grill.rawPick);
            }
        } else {
            var noEat = document.getElementById("container");
            noEat.innerHTML = "<h1>OK WE'LL EAT LATER THEN</h1><h2>(incase you change your mind)</h2>";
            var a = document.createElement("a");
            var linkText = document.createTextNode("back to grill");
            a.appendChild(linkText);
            a.href = "index.html";
            a.id = "backToGrill";
            a.className = "buttons center";
            document.getElementById("container").appendChild(a);
            var changeClass = document.getElementById("container");
            changeClass.className = "eatLater";
        }
    },
    rawPick: function (event) {
        var btn = event.target;
        name = btn.id;
        document.getElementById("container").innerHTML =
            "<h1>YUMM " + name +
            " IS A GREAT CHOICE!</h1><h2>let's turn on the grill...<br><span>OH NO</span>......we seem to be out of gas......</h2><h3>should we get more??</h3>";

        var changeClass = document.getElementById("container");
        changeClass.className = "greatChoice center";

        var btn = document.createElement("input");
        btn.type = "button";
        btn.id = "yes";
        btn.value = "yes";
        btn.className = "more buttons";
        document.getElementById("container").appendChild(btn);
        btn.addEventListener("click", grill.yesGas);

        var btn = document.createElement("input");
        btn.type = "button";
        btn.id = "no";
        btn.value = "no";
        btn.className = "more buttons";
        btn.onclick = "grill.cooking = false";
        document.getElementById("container").appendChild(btn);
        btn.addEventListener("click", grill.noGas);
    },
    yesGas: function () {
        document.getElementById("container").innerHTML =
            "<h1>GOT GAS AND THE " + name + " IS COOKING!</h1>";
        var changeClass = document.getElementById("container");
        changeClass.className = "gotGas center";

        var vid = document.createElement("video");
        vid.src = "video/grillBurning.mp4";
        vid.id = "video";
        vid.autoplay = true;
        document.getElementById("container").appendChild(vid);

        var counter = 0;

        function onTime() {
            counter++;
            if (counter == 1) {
                clearInterval(myInterval);
            }
            document.getElementById("container").innerHTML =
                "<h1>IT'S LOOKING GOOD!</h1><h2>should we take it off<br>......or let it keep cooking for a bit?</h2>";

            var changeClass = document.getElementById("container");
            changeClass.className = "lookingGood center";

            var btn = document.createElement("input");
            btn.type = "button";
            btn.id = "now";
            btn.value = "now";
            btn.className = "lookingGood buttons";
            document.getElementById("container").appendChild(btn);
            btn.addEventListener("click", grill.foodNow);

            var btn = document.createElement("input");
            btn.type = "button";
            btn.id = "keepCooking";
            btn.value = "keep cooking";
            btn.className = "lookingGood buttons";
            document.getElementById("container").appendChild(btn);
            btn.addEventListener("click", grill.foodLater);
        }
        var myInterval = setInterval(onTime, 5000);
    },
    noGas: function () {
        var hungryMessage = document.getElementById("container");
        hungryMessage.innerHTML = "<h1>FINE THEN, GO AHEAD AND<br><span>STARVE!!!<span></h1><h2>(if you happen to reconsider)</h2>";
        var a = document.createElement("a");
        var linkText = document.createTextNode("back to grill");
        a.appendChild(linkText);
        a.href = "index.html";
        a.id = "noStarve";
        a.className = "buttons center";
        document.getElementById("container").appendChild(a);
        var changeClass = document.getElementById("container");
        changeClass.className = "starve";
    },
    foodNow: function () {
        document.getElementById("container").innerHTML = "<h1>THE " + name + " LOOKS GREAT!!<br><span>LET'S EAT</span></h1>";

        var changeClass = document.getElementById("container");
        changeClass.className = "letsEat center";

        var img = document.createElement("img");
        img.src = "img/" + name + "Grilled.jpg";
        img.id = name + "Grilled";
        img.className = "food";
        document.getElementById("container").appendChild(img);
    },
    foodLater: function () {
        document.getElementById("container").innerHTML =
            "<h1>HOPE THIS ISN'T TOO LONG??!!</h1>";
        var changeClass = document.getElementById("container");
        changeClass.className = "gotGas center";

        var vid = document.createElement("video");
        vid.src = "video/grillBurning.mp4";
        vid.id = "video";
        vid.autoplay = true;
        document.getElementById("container").appendChild(vid);

        var counter = 0;

        function onTime() {
            counter++;
            if (counter == 1) {
                clearInterval(myInterval);
            }
            document.getElementById("container").innerHTML =
                "<h1>UGH! THE " + name +
                " IS BURNT!</h1><h2>(let's just call for takeout)</h2>";

            var changeClass = document.getElementById("container");
            changeClass.className = "burnt center";

            var img = document.createElement("img");
            img.src = "img/" + name + "burnt.jpg";
            img.id = name + "Burnt";
            img.className = "food";
            document.getElementById("container").appendChild(img);
        }
        var myInterval = setInterval(onTime, 5000);
    }
};
window.onload = grill.init;