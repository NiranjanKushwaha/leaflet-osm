// it takes urlString and returns output like mediAssist,sbig etc.
const getUrlType = (urlString) => {
    const mediAssistUrls = [
        "http://localhost:3000/",
        "https://stg-proclaim.mediassistindia.com/",
        "http://uat-proclaim.mediassistindia.com/",
        "https://proclaim.mediassist.in/",
    ];
    const sbigUrls = [
        "https://proclaim-apiuat.sbigeneral.in/",
        "http://hercules.sbigeneral.in/",
        "https://sts.sbigeneral.in/adfs/ls/idpinitiatedsignon",
    ];

    const urlsMetaDataContainer = [
        {
            category: commonPattern.proclaim.code,
            arrayData: mediAssistUrls,
        },
        {
            category: commonPattern.sbig.code,
            arrayData: sbigUrls,
        },
    ]

    if (urlString && urlsMetaDataContainer.length) {
        let matchingCategory = "";
        for (const item of urlsMetaDataContainer) {
            if (item.arrayData && item.arrayData.length) {
                if (item.arrayData.some(el => el.toLowerCase().includes(urlString.toLowerCase()))) {
                    matchingCategory = item.category;
                    break;
                }
            }
        }
        return matchingCategory ? matchingCategory : "NA";
    };
}
