let tags = [
    {
        "tagName": "Value",
        "isClicked": true,
        "localIds": [
            20,
            21,
            23,
            24,
            26,
            28,
            29,
            32
        ]
    },
    {
        "tagName": "Procedure Exclusion",
        "isClicked": true,
        "localIds": [
            20,
            21,
            24,
            30,
            33,
            35,
            36
        ]
    },
    {
        "tagName": "Proportionate Limit",
        "isClicked": true,
        "localIds": [
            21,
            24,
            28,
            29,
            30,
            31,
            36,
            37
        ]
    },
    {
        "tagName": "Room Type",
        "isClicked": true,
        "localIds": [
            22,
            30,
            31,
            33,
            34,
            35,
            36,
            37
        ]
    },
    {
        "tagName": "Ailments Inclusion",
        "isClicked": false,
        "localIds": []
    },
    {
        "tagName": "Ailments Exclusion",
        "isClicked": false,
        "localIds": []
    },
    {
        "tagName": "Sum Insured",
        "isClicked": true,
        "localIds": [
            23,
            24,
            28,
            32,
            33,
            36,
            37
        ]
    },
    {
        "tagName": "ABC Clause",
        "isClicked": false,
        "localIds": []
    }
]

let result = [];
let allIdsContainer = [];
tags.forEach((tagObject) => {
    if (tagObject?.isClicked) {
        allIdsContainer = [...allIdsContainer, tagObject.localIds];
    }
})

console.log(allIdsContainer);