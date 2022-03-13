questions = [
    {
        "question": "i am short",
        "effect": {
            "short": 10,
            "fuzzy": 0,
            "angry": 10,
            "honry": 5,
            "supergoat": -100,

        },
    },

    {
        "question": "i lik e gote milk",
        "effect": {
            "short": 5,
            "fuzzy": 10,
            "angry": -5,
            "honry": 10,
            "supergoat": 5,

        },
    },

    {
        "question": "i scream",
        "effect": {
            "short": 5,
            "fuzzy": -5,
            "angry": 10,
            "honry": 10,
            "supergoat": 100,

        },
    },

    {
        "question": "i am stinmky",
        "effect": {
            "short": -5,
            "fuzzy": 0,
            "angry": 5,
            "honry": 10,
            "supergoat": 0,

        },
    },

    {
        "question": "I touch grass",
        "effect": {
            "short": 10,
            "fuzzy": 0,
            "angry": -10,
            "honry": -10,
            "supergoat": 100,

        },
    },

    {
        "question": "goat",
        "effect": {
            "short": 0,
            "fuzzy": 5,
            "angry": 10,
            "honry": 10,
            "supergoat": 100,

        },
    },
    
    {
        "question": "Government surveilence is necessary in the modern world.",
        "effect": {
            "short": 5,
            "fuzzy": 10,
            "angry": -5,
            "honry": 10,
            "supergoat": 100,

        },
    },

    {
        "question": "goet starts with the letter G",
        "effect": {
            "short": 0,
            "fuzzy": 10,
            "angry": 0,
            "honry": -5,
            "supergoat": 100,

        },
    },
    
    {
        "question": "i have too many horns",
        "effect": {
            "short": 5,
            "fuzzy": 10,
            "angry": -5,
            "honry": -10,
            "supergoat": -100,

        },
    },
    
    {
        "question": "i have a beard",
        "effect": {
            "short": -10,
            "fuzzy": 10,
            "angry": 5,
            "honry": 0,
            "supergoat": 100,

        },
    },
      
    {
        "question": "i wish i had horizontal eyes (to see horizontally)",
        "effect": {
            "short": 0,
            "fuzzy": 5,
            "angry": 10,
            "honry": 5,
            "supergoat": 100,

        },
    },
        
    {
        "question": "i will literally eat anything",
        "effect": {
            "short": 5,
            "fuzzy": 5,
            "angry": 0,
            "honry": 10,
            "supergoat": 100,

        },
    },
          
    {
        "question": "i am spotty (a little quirky)",
        "effect": {
            "short": 10,
            "fuzzy": 5,
            "angry": 0,
            "honry": -5,
            "supergoat": 0,

        },
    },
            
    {
        "question": "i believe that my time in the universe is meaningless.",
        "effect": {
            "short": 0,
            "fuzzy": 0,
            "angry": 0,
            "honry": 0,
            "supergoat": 0,

        },
    },
              
    {
        "question": "i would like to become a goat",
        "effect": {
            "short": 10,
            "fuzzy": 10,
            "angry": 10,
            "honry": 10,
            "supergoat": 100,

        },
    },
                 
    {
        "question": "i want a goat friend (goets are friends)",
        "effect": {
            "short": 10,
            "fuzzy": 10,
            "angry": -10,
            "honry": 5,
            "supergoat": 100,

        },
    },
                    
    {
        "question": "taxes",
        "effect": {
            "short": 0,
            "fuzzy": 5,
            "angry": -10,
            "honry": 0,
            "supergoat": -100,

        },
    },
                      
]  

var shortval = 75
var fuzzyval = 75
var angryval = 75
var honryval = 75
var superval = 1569

function setValsToAvg() {
    for (var i = 0; i < questions.length; i++) {
        shortval += Math.abs(questions[i].effect.short)
        fuzzyval += Math.abs(questions[i].effect.fuzzy)
        angryval += Math.abs(questions[i].effect.angry)
        honryval += Math.abs(questions[i].effect.honry)
    }
    shortval /= 3;
    fuzzyval /= 3;
    angryval /= 3;
    honryval /= 3;
}

function getQuizResult(effect) {
    if (effect.supergoat > superval) 
        return "supergoat"

    setValsToAvg();

    if (effect.honry > honryval &&
        effect.fuzzy > fuzzyval &&
        effect.angry > angryval)
        return "kiko"

    if (effect.fuzzy > fuzzyval &&
        effect.honry > honryval &&
        effect.short > shortval)
        return "angora"

    if (effect.short > shortval &&
        effect.fuzzy > fuzzyval ||
        effect.angry < -1*angryval &&
        effect.honry < -1*honryval)
        return "pygmy"

    if (effect.angry > angryval &&
        effect.short > shortval ||
        effect.fuzzy < -1*fuzzyval &&
        effect.honry < -1*honryval)
        return "alpine"

    if (effect.fuzzy > fuzzyval &&
        effect.honry > honryval ||
        effect.angry < -1*angryval &&
        effect.short < -1*shortval)
        return "toggenburg"

    if (effect.short > shortval &&
        effect.honry > honryval ||
        effect.angry < -1*angryval &&
        effect.fuzzy < -1*fuzzyval)
        return "nubian"

    if (effect.angry > angryval)
        return "boer"

    return "normal"
}