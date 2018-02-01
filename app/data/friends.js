exports.friends = [
    {
        name: "Rachel Green",
        photo: "https://media.allure.com/photos/58628662198bee390be21473/master/pass/jennifer-aniston-curls.jpg",
        scores: ["1", "3", "5", "1", "3", "5", "1", "3", "5", "1"]
    },
    {
        name: "Monica Geller",
        photo: "http://cdn-img.instyle.com/sites/default/files/styles/276x276/public/images/2014/TRANSFORMATIONS/2010b-courteney-cox-567_0.jpg?itok=tSaMxT4O",
        scores: ["2", "4", "2", "4", "4", "2", "4", "2", "4", "2"]
    },
    {
        name: "Chandler Bing",
        photo: "https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000336849091-e1499342266114.jpg?strip=all&w=761",
        scores: ["3", "5", "1", "5", "2", "3", "1", "1", "5", "1"]
    },
    {
        name: "Phoebe Buffay",
        photo: "https://media.glamour.com/photos/58b887323b484d4ec0439416/master/pass/LISA%20KUDROW.jpg?mbid=social_retweet",
        scores: ["4", "4", "1", "4", "4", "3", "1", "4", "1", "3"]
    },
    {
        name: "Ross Geller",
        photo: "https://www.etcnepal.com/wp-content/uploads/2016/05/David-Schwimmer.jpg",
        scores: ["5", "5", "2", "3", "2", "5", "2", "3", "3", "2"]
    },
    {
        name: "Joey Tribbiani",
        photo: "https://i1.wp.com/short-biography.com/wp-content/uploads/matt-leblanc/Matt-LeBlanc.jpg?fit=1500%2C1500&ssl=1",
        scores: ["2", "2", "2", "2", "1", "1", "5", "4", "1", "1"]
    }
]

$("#submit").on("click", function() {
    var survey = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(), $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()]
    }

    $.post("/api/friends", survey, function(data) {
        console.log(data);
    })
})