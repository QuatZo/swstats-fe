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
    return {title: 'Unknown Error', msg: 'Unknown error has occured, please contact administrator'}
}

export function rankingParseInitData(data){
    return [
        {
            name: "Summoner, Guild, Towers, Flags",
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
                    value: data.monsters.speed.base.join(', '),
                },
                {
                    name: "Attack",
                    desc: "respectively for " + data.monsters.attack.threshold.join(', '),
                    value: data.monsters.attack.base.join(', '),
                },
                {
                    name: "HP",
                    desc: "respectively for " + data.monsters.hp.threshold.join(', '),
                    value: data.monsters.hp.base.join(', '),
                },
                {
                    name: "Defense",
                    desc: "respectively for " + data.monsters.defense.threshold.join(', '),
                    value: data.monsters.defense.base.join(', '),
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + data.monsters.crit_rate.threshold.join(', '),
                    value: data.monsters.crit_rate.base.join(', '),
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + data.monsters.crit_dmg.threshold.join(', '),
                    value: data.monsters.crit_dmg.base.join(', '),
                },
                {
                    name: "Accuracy [%]",
                    desc: "respectively for " + data.monsters.acc.threshold.join(', '),
                    value: data.monsters.acc.base.join(', '),
                },
                {
                    name: "Resistance [%]",
                    desc: "respectively for " + data.monsters.res.threshold.join(', '),
                    value: data.monsters.res.base.join(', '),
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
                    value: data.runes.sub_speed.base.join(', '),
                },
                {
                    name: "Attack [%]",
                    desc: "respectively for " + data.runes.sub_atk.threshold.join(', '),
                    value: data.runes.sub_atk.base.join(', '),
                },
                {
                    name: "HP [%]",
                    desc: "respectively for " + data.runes.sub_hp.threshold.join(', '),
                    value: data.runes.sub_hp.base.join(', '),
                },
                {
                    name: "Defense [%]",
                    desc: "respectively for " + data.runes.sub_def.threshold.join(', '),
                    value: data.runes.sub_def.base.join(', '),
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + data.runes.sub_crit_rate.threshold.join(', '),
                    value: data.runes.sub_crit_rate.base.join(', '),
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + data.runes.sub_crit_dmg.threshold.join(', '),
                    value: data.runes.sub_crit_dmg.base.join(', '),
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

export function rankingParseProfileData(data){
    return [
        {
            name: "Summoner, Guild, Towers, Flags",
            fields: [
                {
                    name: "Active contributor",
                    desc: "if contributes to the database",
                    value: data.wizard.active_contributor.total,
                },
                {
                    name: "Mana",
                    desc: "per 100 000",
                    value: data.wizard.mana_100k.total,
                },
                {
                    name: "Crystals",
                    desc: "per 10",
                    value: data.wizard.crystals_10.total,
                },
                {
                    name: "Level",
                    desc: "per level",
                    value: data.wizard.level.total,
                },
                {
                    name: "Antibot Answers",
                    desc: "per answer",
                    value: data.wizard.antibot_count.total,
                },
                {
                    name: "Raid",
                    desc: "multiplied by highest cleared raid",
                    value: data.wizard.raid.total,
                },
                {
                    name: "Storage Capacity",
                    desc: "per slot in storage",
                    value: data.wizard.storage_capacity.total,
                },
                {
                    name: "Guild War Ranking",
                    desc: "per rank",
                    value: data.guild.gw_rank.total,
                },
                {
                    name: "Siege Ranking",
                    desc: "per rank",
                    value: data.guild.siege_rank.total,
                },
                {
                    name: "Buildings",
                    desc: "per maxed tower",
                    value: data.buildings.max.total,
                },
                {
                    name: "All buildings",
                    desc: "if all buildings maxed",
                    value: data.buildings.max_all.total,
                },
                {
                    name: "Flags",
                    desc: "per maxed flag",
                    value: data.flags.max.total,
                },
                {
                    name: "All Flags",
                    desc: "if all flags maxed",
                    value: data.flags.max_all.total,
                },
            ]
        },
        {
            name: "Monsters",
            fields: [
                {
                    name: "Quantity",
                    desc: "per monster",
                    value: data.monsters.count.total,
                },
                {
                    name: "Nat4",
                    desc: "per monster",
                    value: data.monsters.nat4.total,
                },
                {
                    name: "Nat5",
                    desc: "per monster",
                    value: data.monsters.nat5.total,
                },
                {
                    name: "6*",
                    desc: "per monster",
                    value: data.monsters.stars_6.total,
                },
                {
                    name: "Transmogrified",
                    desc: "per monster",
                    value: data.monsters.transmog.total,
                },
                {
                    name: "With 6 runes",
                    desc: "per monster, if has equipped 6 runes",
                    value: data.monsters.with_runes.total,
                },
                {
                    name: "Skill ups",
                    desc: "per every skill up point",
                    value: data.monsters.skillup.total,
                },
                {
                    name: "Maxed skills",
                    desc: "per monster, if all skills maxed",
                    value: data.monsters.skillups_max.total,
                },
                {
                    name: "Speed",
                    desc: "respectively for " + [data.monsters.speed[0].threshold, data.monsters.speed[1].threshold, data.monsters.speed[2].threshold].join(', '),
                    value: data.monsters.speed[0].total + data.monsters.speed[1].total + data.monsters.speed[2].total,
                },
                {
                    name: "Attack",
                    desc: "respectively for " + [data.monsters.attack[0].threshold, data.monsters.attack[1].threshold, data.monsters.attack[2].threshold].join(', '),
                    value: data.monsters.attack[0].total + data.monsters.attack[1].total + data.monsters.attack[2].total,
                },
                {
                    name: "HP",
                    desc: "respectively for " + [data.monsters.hp[0].threshold, data.monsters.hp[1].threshold, data.monsters.hp[2].threshold].join(', '),
                    value: data.monsters.hp[0].total + data.monsters.hp[1].total + data.monsters.hp[2].total,
                },
                {
                    name: "Defense",
                    desc: "respectively for " + [data.monsters.defense[0].threshold, data.monsters.defense[1].threshold, data.monsters.defense[2].threshold].join(', '),
                    value: data.monsters.defense[0].total + data.monsters.defense[1].total + data.monsters.defense[2].total,
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + [data.monsters.crit_rate[0].threshold, data.monsters.crit_rate[1].threshold, data.monsters.crit_rate[2].threshold].join(', '),
                    value: data.monsters.crit_rate[0].total + data.monsters.crit_rate[1].total + data.monsters.crit_rate[2].total,
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + [data.monsters.crit_dmg[0].threshold, data.monsters.crit_dmg[1].threshold, data.monsters.crit_dmg[2].threshold].join(', '),
                    value: data.monsters.crit_dmg[0].total + data.monsters.crit_dmg[1].total + data.monsters.crit_dmg[2].total,
                },
                {
                    name: "Accuracy [%]",
                    desc: "respectively for " + [data.monsters.acc[0].threshold, data.monsters.acc[1].threshold, data.monsters.acc[2].threshold].join(', '),
                    value: data.monsters.acc[0].total + data.monsters.acc[1].total + data.monsters.acc[2].total,
                },
                {
                    name: "Resistance [%]",
                    desc: "respectively for " + [data.monsters.res[0].threshold, data.monsters.res[1].threshold, data.monsters.res[2].threshold].join(', '),
                    value: data.monsters.res[0].total + data.monsters.res[1].total + data.monsters.res[2].total,
                },
            ]
        },
        {
            name: "Runes",
            fields: [
                {
                    name: "Quantity",
                    desc: "per rune",
                    value: data.runes.count.total,
                },
                {
                    name: "5* Legend",
                    desc: "per rune",
                    value: data.runes.stars_5_legend.total,
                },
                {
                    name: "6* Hero+",
                    desc: "per rune",
                    value: data.runes.stars_6_hero.total,
                },
                {
                    name: "6* Legend",
                    desc: "per rune",
                    value: data.runes.stars_6_legend.total,
                },
                {
                    name: "+12",
                    desc: "per rune",
                    value: data.runes.upgrade_12.total,
                },
                {
                    name: "+15",
                    desc: "per rune",
                    value: data.runes.upgrade_15.total,
                },
                {
                    name: "Speed",
                    desc: "respectively for " + [data.runes.sub_speed[0].threshold, data.runes.sub_speed[1].threshold, data.runes.sub_speed[2].threshold].join(', '),
                    value: data.runes.sub_speed[0].total + data.runes.sub_speed[1].total + data.runes.sub_speed[2].total,
                },
                {
                    name: "Attack [%]",
                    desc: "respectively for " + [data.runes.sub_atk[0].threshold, data.runes.sub_atk[1].threshold, data.runes.sub_atk[2].threshold].join(', '),
                    value: data.runes.sub_atk[0].total + data.runes.sub_atk[1].total + data.runes.sub_atk[2].total,
                },
                {
                    name: "HP [%]",
                    desc: "respectively for " + [data.runes.sub_hp[0].threshold, data.runes.sub_hp[1].threshold, data.runes.sub_hp[2].threshold].join(', '),
                    value: data.runes.sub_hp[0].total + data.runes.sub_hp[1].total + data.runes.sub_hp[2].total,
                },
                {
                    name: "Defense [%]",
                    desc: "respectively for " + [data.runes.sub_def[0].threshold, data.runes.sub_def[1].threshold, data.runes.sub_def[2].threshold].join(', '),
                    value: data.runes.sub_def[0].total + data.runes.sub_def[1].total + data.runes.sub_def[2].total,
                },
                {
                    name: "Critical Rate [%]",
                    desc: "respectively for " + [data.runes.sub_crit_rate[0].threshold, data.runes.sub_crit_rate[1].threshold, data.runes.sub_crit_rate[2].threshold].join(', '),
                    value: data.runes.sub_crit_rate[0].total + data.runes.sub_crit_rate[1].total + data.runes.sub_crit_rate[2].total,
                },
                {
                    name: "Critical Damage [%]",
                    desc: "respectively for " + [data.runes.sub_crit_dmg[0].threshold, data.runes.sub_crit_dmg[1].threshold, data.runes.sub_crit_dmg[2].threshold].join(', '),
                    value: data.runes.sub_crit_dmg[0].total + data.runes.sub_crit_dmg[1].total + data.runes.sub_crit_dmg[2].total,
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