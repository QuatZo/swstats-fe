const APIEndpoints = {
    Homepage: process.env.REACT_APP_API_URL + 'homepage/',
    Scoring: process.env.REACT_APP_API_URL + 'scoring/',
    Upload: process.env.REACT_APP_API_URL + 'upload/',

    Runes: process.env.REACT_APP_API_URL + 'runes/',
    RunesTable: process.env.REACT_APP_API_URL + 'runes/table/',

    Monsters: process.env.REACT_APP_API_URL + 'monsters/',
    MonstersTable: process.env.REACT_APP_API_URL + 'monsters/table/',

    Artifacts: process.env.REACT_APP_API_URL + 'artifacts/',
    ArtifactsTable: process.env.REACT_APP_API_URL + 'artifacts/table/',

    Siege: process.env.REACT_APP_API_URL + 'siege/',
    SiegeTable: process.env.REACT_APP_API_URL + 'siege/table/',

    Cairos: process.env.REACT_APP_API_URL + 'cairos/',
    CairosDetail: process.env.REACT_APP_API_URL + 'cairos-detail/',

    Monster: process.env.REACT_APP_API_URL + 'monster/',
    
    Status: process.env.REACT_APP_API_URL + 'status/',
}

export default APIEndpoints