let domiBenefitLimits = [
    {
        "id": 3294,
        "polid": 61323912,
        "chargetypeid": 203,
        "domiBenefitGrouping": 2,
        "domiBenefitName": "Dental Class 1",
        "domiBenefitLimit": 10000,
        "planname": "FLEX-1"
    },
    {
        "id": 3295,
        "polid": 61323912,
        "chargetypeid": 204,
        "domiBenefitGrouping": 2,
        "domiBenefitName": "Dental class 2",
        "domiBenefitLimit": 5000,
        "planname": "FLEX-1"
    },
    {
        "id": 3296,
        "polid": 61323912,
        "chargetypeid": 205,
        "domiBenefitGrouping": 3,
        "domiBenefitName": "Dental class 3",
        "domiBenefitLimit": 2000,
        "planname": "FLEX-1"
    },
    {
        "id": 3297,
        "polid": 61323912,
        "chargetypeid": 200,
        "domiBenefitGrouping": 1,
        "domiBenefitName": "Wellness",
        "planname": "FLEX-1"
    }]

let domiBenefGroupData = [];


domiBenefitLimits.forEach(el => {
    el.isEditMode = false;
    let foundIndex = null;
    const isGroupingFound = domiBenefGroupData.some((item, index) => {
        if (item.domiBenefitGrouping === el.domiBenefitGrouping) {
            foundIndex = index;
            return true;
        }
    });
    if (isGroupingFound && foundIndex >= 0) {
        domiBenefGroupData[foundIndex].data.push(el);
    }
    else {
        domiBenefGroupData.push({
            domiBenefitGrouping: el.domiBenefitGrouping,
            data: [el]
        })
    }
})


console.log(domiBenefGroupData)