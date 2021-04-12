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
    4: [25, 60, 95, 130, 165, 200, 235, 270, 305, 340, 375, 410, 445, 480, 515, 550, 585, 620, 655, 690],
    5: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    6: [60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820],
    7: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220],
    8: [80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840],
    9: [45, 90, 135, 180, 225, 270, 315, 360, 405, 450, 495, 540, 585, 630, 675, 720, 765, 810, 855, 900],
    10: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
    11: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    15: [45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 495, 520],
    16: [45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 495, 520],
    17: [45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 495, 520],
    18: [45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 495, 520],
    19: [45, 70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 495, 520],
    31: [35, 60, 85, 110, 135, 160, 185, 210, 235, 260, 285, 310, 335, 360, 385, 410, 435, 460, 485, 510],
    34: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220],
    35: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
}

export const guildBuildingsCost = {
    36: [100, 130, 170, 220, 280, 350, 430, 520, 620, 730, 850, 980, 1120, 1270, 1430, 1600, 1780, 1970, 2170, 2380],
    37: [60, 80, 110, 150, 200, 260, 330, 410, 500, 600, 710, 830, 960, 1100, 1250, 1410, 1580, 1760, 1950, 2150],
    38: [140, 180, 230, 290, 360, 440, 530, 630, 740, 860, 990, 1130, 1280, 1440, 1610, 1790, 1980, 2180, 2390, 2610],
    39: [110, 130, 160, 200, 250, 310, 380, 460, 550, 650, 760, 880, 1010, 1150, 1300, 1460, 1630, 1810, 2000, 2200],
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