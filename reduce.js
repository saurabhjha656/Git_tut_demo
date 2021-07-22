const user_data = 
[
    {name: "Saurabh", branch: "ECE", age:"21", insurance_due:"No", vehicle:"No", organisation:"SurveySensum"},
    {name: "Shashank", branch: "CSE", age:"25", insurance_due:"No", vehicle:"No", organisation:"SurveySensum"},
    {name: "Samriddhi", branch: "CSE", age:"22", insurance_due:"No", vehicle:"Yes", organisation:"NeuroSensum"},
    {name: "Anuj", branch: "ME", age:"22", insurance_due:"No", vehicle:"Yes", organisation:"SurveySensum"},
    {name: "Akshay", branch: "ME", age:"24", insurance_due:"No", vehicle:"No", organisation:"NeuroSensum"},
    {name: "Vikas", branch: "ECE", age:"21", insurance_due:"Yes", vehicle:"No", organisation:"Samsung"},
    {name: "Eshwar", branch: "ECE", age:"23", insurance_due:"No", vehicle:"Yes", organisation:"Samsung"},
    {name: "Surya", branch: "CSE", age:"21", insurance_due:"No", vehicle:"Yes", organisation:"Tekion"},
    {name: "Divyansh", branch: "IT", age:"26", insurance_due:"Yes", vehicle:"No", organisation:"DataViz"},
    {name: "Devansh", branch: "IT", age:"26", insurance_due:"No", vehicle:"No", organisation:"KalariTech"},
    {name: "Kuteya", branch: "CSE", age:"25", insurance_due:"Yes", vehicle:"Yes", organisation:"Karmacircles"},
    {name: "Sunil", branch: "IT", age:"25", insurance_due:"No", vehicle:"No", organisation:"KalariTech"},
    {name: "Saurabh", branch: "ECE", age:"31", insurance_due:"No", vehicle:"Yes", organisation:"KalariTech"},
    {name: "shashank", branch: "ME", age:"29", insurance_due:"Yes", vehicle:"Yes", organisation:"KarmaCircles"},
    {name: "Kuteya", branch: "EEE", age:"24", insurance_due:"No", vehicle:"No", organisation:"NeuroSensum"},
    {name: "Eshwar", branch: "EE", age:"25", insurance_due:"Yes", vehicle:"Yes", organisation:"AmantyaTech"},
    {name: "Akshay", branch: "EEE", age:"31", insurance_due:"No", vehicle:"Yes", organisation:"DataPolizie"},
    {name: "Devansh", branch: "EE", age:"27", insurance_due:"Yes", vehicle:"No", organisation:"DataPolizie"},
    {name: "Divyansh", branch: "ECE", age:"29", insurance_due:"No", vehicle:"Yes", organisation:"Kairo"},
    {name: "Saurabh", branch: "CSE", age:"27", insurance_due:"Yes", vehicle:"Yes", organisation:"TaiwanTech"},
]

const reducer = user_data.filter(x => x.age <23).map(x => x.name);

console.log(reducer);