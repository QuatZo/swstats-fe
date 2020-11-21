export function GenerateAPIHeaders(){
    var CryptoJS = require("crypto-js");

        const timestamp = new Date().getTime();
        let key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_API_KEY);
        let msg = CryptoJS.enc.Utf8.parse(timestamp);
        let headers = {
            'SWStats-Web-API': CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(msg, key)),
            'SWStats-Web-TS': timestamp,
        }
    return headers
}

export function HandleAPIError(error){
    if(error.toString().includes('Network Error')){
        return {title: "Network Error", msg: "Service unavailable, check again in few minutes"}
    }
    else if(error.response && error.response.status){
        if(error.response.status === 403){
            return {title: "API Error (403)", msg: "Couldn't fetch data from API. Please, contact administrator"}
        }
        else if (error.response_status === 401){
            return {title: "Wrong Request (401)", msg: "Unable to fetch data for this request"}
        }
    }
    else if(error.data && error.data.status){
        return {title: "500", msg: "Internal server error. Please, contact administrator"}
    }
    return {title: 'Unknown Error', msg: 'Unknown error has occured, please contact administrator'}
}

export function rankingParseData(data){
    return [
        {
            name: "Summoner",
            fields: [
                {
                    name: "Active contributor",
                    desc: "if contributes to the database",
                    value: data.wizard.active_contributor,
                },
                {
                    name: "Mana",
                    desc: "per 100 000",
                    value: data.wizard.mana_100k,
                },
                {
                    name: "Crystals",
                    desc: "per 10",
                    value: data.wizard.crystals_10,
                },
                {
                    name: "Level",
                    desc: "per level",
                    value: data.wizard.level,
                },
                {
                    name: "Antibot Answers",
                    desc: "per answer",
                    value: data.wizard.antibot_count,
                },
                {
                    name: "Raid",
                    desc: "multiplied by highest cleared raid",
                    value: data.wizard.raid,
                },
                {
                    name: "Storage Capacity",
                    desc: "per slot in storage",
                    value: data.wizard.storage_capacity,
                },
            ],
        },
        {
            name: "Guild",
            fields: [
                {
                    name: "Guild War Ranking",
                    desc: "per rank",
                    value: data.guild.gw_rank,
                },
                {
                    name: "Siege Ranking",
                    desc: "per rank",
                    value: data.guild.siege_rank,
                },
            ],
        },
        {
            name: "Towers",
            fields: [
                {
                    name: "Buildings",
                    desc: "per maxed tower",
                    value: data.buildings.max,
                },
                {
                    name: "All buildings",
                    desc: "if all buildings maxed",
                    value: data.buildings.max_all,
                },
            ],
        },
        {
            name: "Flags",
            fields: [
                {
                    name: "Flags",
                    desc: "per maxed flag",
                    value: data.flags.max,
                },
                {
                    name: "All Flags",
                    desc: "if all flags maxed",
                    value: data.flags.max_all,
                },
            ]
        },
        {
            name: "Monsters",
            fields: [
                {
                    name: "Quantity",
                    desc: "per monster",
                    value: data.monsters.count,
                },
                {
                    name: "Nat4",
                    desc: "per monster",
                    value: data.monsters.nat4,
                },
                {
                    name: "Nat5",
                    desc: "per monster",
                    value: data.monsters.nat5,
                },
                {
                    name: "6*",
                    desc: "per monster",
                    value: data.monsters.stars_6,
                },
                {
                    name: "Transmogrified",
                    desc: "per monster",
                    value: data.monsters.transmog,
                },
                {
                    name: "With 6 runes",
                    desc: "per monster, if has equipped 6 runes",
                    value: data.monsters.with_runes,
                },
                {
                    name: "Skill ups",
                    desc: "per every skill up point",
                    value: data.monsters.skillup,
                },
                {
                    name: "Maxed skills",
                    desc: "per monster, if all skills maxed",
                    value: data.monsters.skillups_max,
                },
                {
                    name: "Speed",
                    desc: "respectively for " + data.monsters.speed.threshold.join(', '),
                    value: data.monsters.speed.total.join(', '),
                },
                {
                    name: "Attack",
                    desc: "respectively for " + data.monsters.attack.threshold.join(', '),
                    value: data.monsters.attack.total.join(', '),
                },
                {
                    name: "HP",
                    desc: "respectively for " + data.monsters.hp.threshold.join(', '),
                    value: data.monsters.hp.total.join(', '),
                },
                {
                    name: "Defense",
                    desc: "respectively for " + data.monsters.defense.threshold.join(', '),
                    value: data.monsters.defense.total.join(', '),
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + data.monsters.crit_rate.threshold.join(', '),
                    value: data.monsters.crit_rate.total.join(', '),
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + data.monsters.crit_dmg.threshold.join(', '),
                    value: data.monsters.crit_dmg.total.join(', '),
                },
                {
                    name: "Accuracy [%]",
                    desc: "respectively for " + data.monsters.acc.threshold.join(', '),
                    value: data.monsters.acc.total.join(', '),
                },
                {
                    name: "Resistance [%]",
                    desc: "respectively for " + data.monsters.res.threshold.join(', '),
                    value: data.monsters.res.total.join(', '),
                },
            ]
        },
        {
            name: "Runes",
            fields: [
                {
                    name: "Quantity",
                    desc: "per rune",
                    value: data.runes.count,
                },
                {
                    name: "5* Legend",
                    desc: "per rune",
                    value: data.runes.stars_5_legend,
                },
                {
                    name: "6* Hero+",
                    desc: "per rune",
                    value: data.runes.stars_6_hero,
                },
                {
                    name: "6* Legend",
                    desc: "per rune",
                    value: data.runes.stars_6_legend,
                },
                {
                    name: "+12",
                    desc: "per rune",
                    value: data.runes.upgrade_12,
                },
                {
                    name: "+15",
                    desc: "per rune",
                    value: data.runes.upgrade_15,
                },
                {
                    name: "Speed",
                    desc: "respectively for " + data.runes.sub_speed.threshold.join(', '),
                    value: data.runes.sub_speed.total.join(', '),
                },
                {
                    name: "Attack [%]",
                    desc: "respectively for " + data.runes.sub_atk.threshold.join(', '),
                    value: data.runes.sub_atk.total.join(', '),
                },
                {
                    name: "HP [%]",
                    desc: "respectively for " + data.runes.sub_hp.threshold.join(', '),
                    value: data.runes.sub_hp.total.join(', '),
                },
                {
                    name: "Defense [%]",
                    desc: "respectively for " + data.runes.sub_def.threshold.join(', '),
                    value: data.runes.sub_def.total.join(', '),
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + data.runes.sub_crit_rate.threshold.join(', '),
                    value: data.runes.sub_crit_rate.total.join(', '),
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + data.runes.sub_crit_dmg.threshold.join(', '),
                    value: data.runes.sub_crit_dmg.total.join(', '),
                },
            ]
        },
        {
            name: "Total",
            fields: [
                {
                    name: "Wizard",
                    desc: "category",
                    value: data.total.wizard,
                },
                {
                    name: "Guild",
                    desc: "category",
                    value: data.total.guild,
                },
                {
                    name: "Buildings",
                    desc: "category",
                    value: data.total.buildings,
                },
                {
                    name: "Flags",
                    desc: "category",
                    value: data.total.flags,
                },
                {
                    name: "Monsters",
                    desc: "category",
                    value: data.total.monsters,
                },
                {
                    name: "Runes",
                    desc: "category",
                    value: data.total.runes,
                },
            ]
        },
    ]
}

export function GetColumns(tableType){
    switch(tableType){
        case "monster": return [
            { label: 'Monster', name: 'name', options: { filter: true, sort: true, }, }, // Custom component here
            { label: 'HP Value', name: 'rank.hp.val', options: { filter: true, sort: true, }, },
            { label: 'HP Top', name: 'rank.hp.top', options: { filter: true, sort: true, }, },
            { label: 'HP Average', name: 'rank.hp.avg', options: { filter: true, sort: true, }, },
            { label: 'ATK Value', name: 'rank.attack.val', options: { filter: true, sort: true, }, },
            { label: 'ATK Top', name: 'rank.attack.top', options: { filter: true, sort: true, }, },
            { label: 'ATK Average', name: 'rank.attack.avg', options: { filter: true, sort: true, }, },
            { label: 'DEF Value', name: 'rank.defense.val', options: { filter: true, sort: true, }, },
            { label: 'DEF Top', name: 'rank.defense.top', options: { filter: true, sort: true, }, },
            { label: 'DEF Average', name: 'rank.defense.avg', options: { filter: true, sort: true, }, },
            { label: 'SPD Value', name: 'rank.speed.val', options: { filter: true, sort: true, }, },
            { label: 'SPD Top', name: 'rank.speed.top', options: { filter: true, sort: true, }, },
            { label: 'SPD Average', name: 'rank.speed.avg', options: { filter: true, sort: true, }, },
            { label: 'CRATE Value', name: 'rank.crit_rate.val', options: { filter: true, sort: true, }, },
            { label: 'CRATE Top', name: 'rank.crit_rate.top', options: { filter: true, sort: true, }, },
            { label: 'CRATE Average', name: 'rank.crit_rate.avg', options: { filter: true, sort: true, }, },
            { label: 'CDMG Value', name: 'rank.crit_dmg.val', options: { filter: true, sort: true, }, },
            { label: 'CDMG Top', name: 'rank.crit_dmg.top', options: { filter: true, sort: true, }, },
            { label: 'CDMG Average', name: 'rank.crit_dmg.avg', options: { filter: true, sort: true, }, },
            { label: 'ACC Value', name: 'rank.acc.val', options: { filter: true, sort: true, }, },
            { label: 'ACC Top', name: 'rank.acc.top', options: { filter: true, sort: true, }, },
            { label: 'ACC Average', name: 'rank.acc.avg', options: { filter: true, sort: true, }, },
            { label: 'RES Value', name: 'rank.res.val', options: { filter: true, sort: true, }, },
            { label: 'RES Top', name: 'rank.res.top', options: { filter: true, sort: true, }, },
            { label: 'RES Average', name: 'rank.res.avg', options: { filter: true, sort: true, }, },
            { label: 'E.HP Value', name: 'rank.eff_hp.val', options: { filter: true, sort: true, }, },
            { label: 'E.HP Top', name: 'rank.eff_hp.top', options: { filter: true, sort: true, }, },
            { label: 'E.HP Average', name: 'rank.eff_hp.avg', options: { filter: true, sort: true, }, },
            { label: 'EFF Value', name: 'rank.avg_eff_total.val', options: { filter: true, sort: true, }, },
            { label: 'EFF Top', name: 'rank.avg_eff_total.top', options: { filter: true, sort: true, }, },
            { label: 'EFF Average', name: 'rank.avg_eff_total.avg', options: { filter: true, sort: true, }, },
        ]
        case "rune": return [
            { label: 'Rune', name: 'name', options: { filter: true, sort: true, }, },
            { label: 'Mainstat', name: 'mainstat', options: { filter: true, sort: true, }, },
            { label: 'HP Value', name: 'rank.sub_hp.val', options: { filter: true, sort: true, }, },
            { label: 'HP Top', name: 'rank.sub_hp.top', options: { filter: true, sort: true, }, },
            { label: 'HP Average', name: 'rank.sub_hp.avg', options: { filter: true, sort: true, }, },
            { label: 'HP FLAT Value', name: 'rank.sub_hp_flat.val', options: { filter: true, sort: true, }, },
            { label: 'HP FLAT Top', name: 'rank.sub_hp_flat.top', options: { filter: true, sort: true, }, },
            { label: 'HP FLAT Average', name: 'rank.sub_hp_flat.avg', options: { filter: true, sort: true, }, },
            { label: 'ATK Value', name: 'rank.sub_atk.val', options: { filter: true, sort: true, }, },
            { label: 'ATK Top', name: 'rank.sub_atk.top', options: { filter: true, sort: true, }, },
            { label: 'ATK Average', name: 'rank.sub_atk.avg', options: { filter: true, sort: true, }, },
            { label: 'ATK FLAT Value', name: 'rank.sub_atk_flat.val', options: { filter: true, sort: true, }, },
            { label: 'ATK FLAT Top', name: 'rank.sub_atk_flat.top', options: { filter: true, sort: true, }, },
            { label: 'ATK FLAT Average', name: 'rank.sub_atk_flat.avg', options: { filter: true, sort: true, }, },
            { label: 'DEF Value', name: 'rank.sub_def.val', options: { filter: true, sort: true, }, },
            { label: 'DEF Top', name: 'rank.sub_def.top', options: { filter: true, sort: true, }, },
            { label: 'DEF Average', name: 'rank.sub_def.avg', options: { filter: true, sort: true, }, },
            { label: 'DEF FLAT Value', name: 'rank.sub_def_flat.val', options: { filter: true, sort: true, }, },
            { label: 'DEF FLAT Top', name: 'rank.sub_def_flat.top', options: { filter: true, sort: true, }, },
            { label: 'DEF FLAT Average', name: 'rank.sub_def_flat.avg', options: { filter: true, sort: true, }, },
            { label: 'SPD Value', name: 'rank.sub_spd.val', options: { filter: true, sort: true, }, },
            { label: 'SPD Top', name: 'rank.sub_spd.top', options: { filter: true, sort: true, }, },
            { label: 'SPD Average', name: 'rank.sub_spd.avg', options: { filter: true, sort: true, }, },
            { label: 'CRATE Value', name: 'rank.sub_crit_rate.val', options: { filter: true, sort: true, }, },
            { label: 'CRATE Top', name: 'rank.sub_crit_rate.top', options: { filter: true, sort: true, }, },
            { label: 'CRATE Average', name: 'rank.sub_crit_rate.avg', options: { filter: true, sort: true, }, },
            { label: 'CDMG Value', name: 'rank.sub_crit_dmg.val', options: { filter: true, sort: true, }, },
            { label: 'CDMG Top', name: 'rank.sub_crit_dmg.top', options: { filter: true, sort: true, }, },
            { label: 'CDMG Average', name: 'rank.sub_crit_dmg.avg', options: { filter: true, sort: true, }, },
            { label: 'ACC Value', name: 'rank.sub_acc.val', options: { filter: true, sort: true, }, },
            { label: 'ACC Top', name: 'rank.sub_acc.top', options: { filter: true, sort: true, }, },
            { label: 'ACC Average', name: 'rank.sub_acc.avg', options: { filter: true, sort: true, }, },
            { label: 'RES Value', name: 'rank.sub_res.val', options: { filter: true, sort: true, }, },
            { label: 'RES Top', name: 'rank.sub_res.top', options: { filter: true, sort: true, }, },
            { label: 'RES Average', name: 'rank.sub_res.avg', options: { filter: true, sort: true, }, },
            { label: 'EFF Value', name: 'rank.efficiency.val', options: { filter: true, sort: true, }, },
            { label: 'EFF Top', name: 'rank.efficiency.top', options: { filter: true, sort: true, }, },
            { label: 'EFF Average', name: 'rank.efficiency.avg', options: { filter: true, sort: true, }, },
        ]
        default: return []
    }
}