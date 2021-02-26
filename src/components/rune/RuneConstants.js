export function RuneQualityColors(quality){
    const colors = {
        Legend: 'rgb(255, 173, 73, 0.75)',
        Hero: 'rgb(192, 0, 192, 0.75)',
        Rare: 'rgb(0, 128, 255, 0.5)',
        Magic: 'rgb(0, 192, 32, 0.75)',
        White: 'rgb(255, 255, 255, 0.75)',
        Unknown: 'rgb(255, 255, 255, 0.75)',
    }
    return colors[quality.replace('-', '').replace('rune', '').replace('quality', '').replace('original').replace('Ancient ', '')]
}

export function RuneBackgroundImages(quality){
    const images = {
        Legend: 'https://swstats.info/static/website/images/runes/bg_legend.png',
        Hero: 'https://swstats.info/static/website/images/runes/bg_hero.png',
        Rare: 'https://swstats.info/static/website/images/runes/bg_rare.png',
        Magic: 'https://swstats.info/static/website/images/runes/bg_magic.png',
        Common: 'https://swstats.info/static/website/images/runes/bg_normal.png',
    }
    return images[quality.replace('-', '').replace('rune', '').replace('quality', '').replace('original').replace('Ancient ', '')]
}

export function RuneSlotImages(slot){
    const image_template = "https://swstats.info/static/website/images/runes/rune<rune_slot>.png"

    return image_template.replace('<rune_slot>', slot)
}

export const RuneSubstatMap = {
    'HP': {
        name: 'HP',
        percentage: true,
    },
    'HP%': {
        name: 'HP',
        percentage: true,
    },
    'HP F': {
        name: 'HP',
        percentage: false,
    },
    'HP+': {
        name: 'HP',
        percentage: false,
    },
    'ATK': {
        name: 'ATK',
        percentage: true,
    },
    'ATK%': {
        name: 'ATK',
        percentage: true,
    },
    'ATK F': {
        name: 'ATK',
        percentage: false,
    },
    'ATK+': {
        name: 'ATK',
        percentage: false,
    },
    'DEF': {
        name: 'DEF',
        percentage: true,
    },
    'DEF%': {
        name: 'DEF',
        percentage: true,
    },
    'DEF F': {
        name: 'DEF',
        percentage: false,
    },
    'DEF+': {
        name: 'DEF',
        percentage: false,
    },
    'SPD': {
        name: 'Speed',
        percentage: false,
    },
    'CRATE': {
        name: 'CRI Rate',
        percentage: true,
    },
    'CRATE%': {
        name: 'CRI Rate',
        percentage: true,
    },
    'CDMG': {
        name: 'CRI Dmg',
        percentage: true,
    },
    'CDMG%': {
        name: 'CRI Dmg',
        percentage: true,
    },
    'ACC': {
        name: 'Accuracy',
        percentage: true,
    },
    'ACC%': {
        name: 'Accuracy',
        percentage: true,
    },
    'RES': {
        name: 'Resistance',
        percentage: true,
    },
    'RES%': {
        name: 'Resistance',
        percentage: true,
    },
}