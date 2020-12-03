export const initArenaFilters = {
    arena_rank: [
        {
            id: 2,
            name: "Beginner"
        },
        {
            id: 3,
            name: "Challenger"
        },
        {
            id: 4,
            name: "Fighter"
        },
        {
            id: 5,
            name: "Conqueror+"
        },
    ],
    wings: null,
}

export const initGuildFilters = {
    war_rank: [
        {
            id: "challenger",
            name: "Challenger"
        },
        {
            id: "fighter",
            name: "Fighter"
        },
        {
            id: "conqueror",
            name: "Conqueror"
        },
        {
            id: "guardian",
            name: "Guardian"
        },
    ],
    siege_rank: [
        {
            id: 1011,
            name: "Challenger",
        },
        {
            id: 2011,
            name: "Fighter I",
        },
        {
            id: 2012,
            name: "Fighter II",
        },
        {
            id: 2013,
            name: "Fighter III",
        },
        {
            id: 3011,
            name: "Conqueror I",
        },
        {
            id: 3012,
            name: "Conqueror II",
        },
        {
            id: 3013,
            name: "Conqueror III",
        },
        {
            id: 4011,
            name: "Guardian I",
        },
        {
            id: 4012,
            name: "Guardian II",
        },
        {
            id: 4013,
            name: "Guardian III",
        },
    ],
    war_won: null,
    siege_place_1: [
        {
            id: 1,
            name: "First",
        },
        {
            id: 2,
            name: "Second",
        },
        {
            id: 3,
            name: "Third",
        },
    ],
    siege_place_2: [
        {
            id: 1,
            name: "First",
        },
        {
            id: 2,
            name: "Second",
        },
        {
            id: 3,
            name: "Third",
        },
    ],
}

export const arenaBuildingsCost = {
    4: [100, 280, 460, 640, 820, 1000, 1180, 1360, 1540, 1720, ],
    5: [40, 90, 140, 190, 240, 290, 340, 390, 440, 490, ],
    6: [240, 440, 640, 840, 1040, 1240, 1440, 1640, 1840, 2040, ],
    7: [80, 130, 180, 230, 280, 330, 380, 430, 480, 530, ],
    8: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, ],
    9: [150, 375, 600, 825, 1050, 1275, 1500, 1725, 1950, 2175, ],
    10: [20, 80, 140, 200, 260, 320, 380, 440, 500, 560, ],
    11: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, ],
    15: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    16: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    17: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    18: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    19: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    31: [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, ],
    34: [80, 130, 180, 230, 280, 330, 380, 430, 480, 530, ],
    35: [30, 80, 130, 180, 230, 280, 330, 380, 430, 480, ],
}

export const guildBuildingsCost = {
    36: [280, 460, 800, 1250, 1810, 2320, 2910, 3590, 4350, 5200, ],
    37: [260, 410, 700, 1080, 1560, 1990, 2490, 3070, 3720, 4440, ],
    38: [330, 540, 930, 1450, 2100, 2680, 3360, 4140, 5020, 5990, ],
    39: [300, 460, 760, 1160, 1670, 2130, 2660, 3270, 3960, 4720, ],
}

export const siegeRewards = {
    1011: {
        crystals: [20, 15, 10],  // fixed
        points: [3, 2, 2],  // percentage
    },
    2011: {
        crystals: [30, 25, 20],  // fixed
        points: [6, 4, 4],  // percentage
    },
    2012: {
        crystals: [40, 30, 25],  // fixed
        points: [9, 6, 6],  // percentage
    },
    2013: {
        crystals: [50, 40, 30],  // fixed
        points: [12, 8, 8],  // percentage
    },
    3011: {
        crystals: [60, 45, 35],  // fixed
        points: [15, 11, 11],  // percentage
    },
    3012: {
        crystals: [80, 65, 50],  // fixed
        points: [18, 13, 13],  // percentage
    },
    3013: {
        crystals: [100, 80, 60],  // fixed
        points: [21, 15, 15],  // percentage
    },
    4011: {
        crystals: [140, 100, 80],  // fixed
        points: [27, 20, 20],  // percentage
    },
    4012: {
        crystals: [200, 160, 130],  // fixed
        points: [32, 25, 25],  // percentage
    },
    4013: {
        crystals: [250, 200, 170],  // fixed
        points: [37, 30, 30],  // percentage
    },
}

export const guildwarRewards = {
    challenger: {
        battle: 7,
        war: 20,
    },
    fighter: {
        battle: 8,
        war: 30,
    },
    conqueror: {
        battle: 9,
        war: 40,
    },
    guardian: {
        battle: 10,
        war: 50,
    },
}

export const initBuildingsData = [
    {
        id: 4,
        area: "Arena",
        name: "Guardstone",
        bonus: "DEF%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 5,
        area: "Arena",
        name: "Mana Fountain",
        bonus: "Mana Production speed %",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 6,
        area: "Arena",
        name: "Sky Tribe Totem",
        bonus: "SPEED%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 7,
        area: "Arena",
        name: "Arcane Boost Tower",
        bonus: "Arcane Tower Speed %",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 8,
        area: "Arena",
        name: "Crystal Altar",
        bonus: "HP%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 9,
        area: "Arena",
        name: "Ancient Sword",
        bonus: "ATK%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 10,
        area: "Arena",
        name: "Sanctum of energy",
        bonus: "Max Energy",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 11,
        area: "Arena",
        name: "Mysterious Plant",
        bonus: "Time/Energy",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 15,
        area: "Arena",
        name: "Fire Sanctuary",
        bonus: "ATK% (Fire)",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 16,
        area: "Arena",
        name: "Water Sanctuary",
        bonus: "ATK% (Water)",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 17,
        area: "Arena",
        name: "Wind Sanctuary",
        bonus: "ATK% (Wind)",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 18,
        area: "Arena",
        name: "Light Sanctuary",
        bonus: "ATK% (Light)",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 19,
        area: "Arena",
        name: "Dark Sanctuary",
        bonus: "ATK% (Dark)",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 31,
        area: "Arena",
        name: "Fallen Ancient Guardian",
        bonus: "CDMG%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 34,
        area: "Arena",
        name: "Crystal Rock",
        bonus: "Arcane Tower ATK %",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 35,
        area: "Arena",
        name: "Fairy Tree",
        bonus: "Mana Storage +",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 36,
        area: "Guild",
        name: "Flag of Battle",
        bonus: "ATK%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 37,
        area: "Guild",
        name: "Flag of Rage",
        bonus: "CDMG%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 38,
        area: "Guild",
        name: "Flag of Hope",
        bonus: "HP%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
    {
        id: 39,
        area: "Guild",
        name: "Flag of Will",
        bonus: "DEF%",
        level: 0,
        nextUpgrade: 0,
        daysToUpgrade: 0,
        pointsToMax: 0,
        daysToMax: 0,
    },
]