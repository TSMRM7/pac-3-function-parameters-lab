function introduction(Aki){
    return `Hi, my name is ${Aki}.`;
}


function introductionWithLanguage(Aki, React){
    return `Hi, my name is ${Aki} and I am learning to program in ${React}.`;
}

function introductionWithLanguageOptional(Gracie, JavaScript){
    return `Hi, my name is ${Gracie} and I am learning to program in ${JavaScript}.`;
}

function introductionWithLanguageOptional(Gracie, Python){
    return `Hi, my name is ${Gracie} and I am learning to program in ${Python || "JavaScript"}.`;
}