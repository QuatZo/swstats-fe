import React, {useState, useEffect} from "react";
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import LoadingAbsolute from '../../components/LoadingAbsolute';
import Dropzone from '../../components/Dropzone';
import {initArenaFilters, initBuildingsData, arenaBuildingsCost, guildwarRewards, siegeRewards, guildBuildingsCost, initGuildFilters} from '../../components/personal/TowerCalculatorConstants';
import ArenaFilters from '../../components/personal/ArenaFilters';
import GuildFilters from '../../components/personal/GuildFilters';
import CalculationMethod from "../../components/personal/CalculationMethod";
import BuildingTable from "../../components/tables/BuildingTable";

export default function TowersCalculator(){
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(localStorage.getItem('profile-data') ? JSON.parse(localStorage.getItem('profile-data')) : null);
    const [filters, setFilters] = useState({
        arena: {
            arena_rank: 2,
            wings: 30,
        },
        guild: {
            war_rank: "challenger",
            siege_rank: 1011,
            war_won: 12,
            siege_place_1: 1,
            siege_place_2: 1,
        },
    })
    const [buildingsData, setBuildingsData] = useState(initBuildingsData);

    function calculateArenaDays(){    
        setLoading(true);
        let pointsPerDay = filters.arena.arena_rank * filters.arena.wings - 17 // wings per day * arena points per win - (devilmon cost - league reward)[daily], assume farming (all wins)
        if(pointsPerDay < 0){
            setLoading(false);
            return;
        }

        let buildings = [...initBuildingsData]
        buildings = buildings.map(b => {
            if(b.area !== "Arena") return b;

            b.nextUpgrade = b.level !== 10 ? arenaBuildingsCost[b.id][b.level] : 0;
            b.pointsToMax = b.level !== 10 ? arenaBuildingsCost[b.id].slice(b.level).reduce((a, b) => a + b, 0) : 0;
            b.daysToUpgrade = Math.ceil(b.nextUpgrade / pointsPerDay);
            b.daysToMax = Math.ceil(b.pointsToMax / pointsPerDay); 

            return b
        })
        setBuildingsData(buildings)
        setLoading(false);
    }

    function calculateGuildDays(){    
        setLoading(true);
        let gwReward = guildwarRewards[filters.guild.war_rank]
        // 20 000 * 0.1 => 10% contribution; / 100 => Points are percentages (i.e. 6% => 6)
        let siegeReward_1 = siegeRewards[filters.guild.siege_rank].points[filters.guild.siege_place_1 - 1] * 20000 * 0.1 / 100
        let siegeReward_2 = siegeRewards[filters.guild.siege_rank].points[filters.guild.siege_place_2 - 1] * 20000 * 0.1 / 100
        let siegeReward = Math.floor((siegeReward_1 + siegeReward_2) / 7)
        // 150 / 7 => rainbowmon daily
        let pointsPerDay = ((gwReward.battle + 3) * 2 + (gwReward.battle + 2) * 2 + (gwReward.battle + 1) * 2) * (filters.guild.war_won / 7) + siegeReward - Math.floor(150 / 7)
        if(pointsPerDay < 0){
            setLoading(false);
            return;
        }

        let buildings = [...initBuildingsData]
        buildings = buildings.map(b => {
            if(b.area !== "Guild") return b;

            b.nextUpgrade = b.level !== 10 ? guildBuildingsCost[b.id][b.level] : 0;
            b.pointsToMax = b.level !== 10 ? guildBuildingsCost[b.id].slice(b.level).reduce((a, b) => a + b, 0) : 0;
            b.daysToUpgrade = Math.ceil(b.nextUpgrade / pointsPerDay);
            b.daysToMax = Math.ceil(b.pointsToMax / pointsPerDay); 

            return b
        })
        setBuildingsData(buildings)
        setLoading(false);
    }

    function handleChange(files) {
        if(files.length){
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                localStorage.setItem('profile-data', text)
                let pr = JSON.parse(text)
                setProfile(pr)
            };
            reader.readAsText(files[0])
        }
    }

    const handleArenaSelectChange = (e) => {
        let f = {...filters}
        f.arena[e.target.name] = e.target.value;
        setFilters(f);
    }

    const handleArenaSliderChange = (field, e, val) => {
        let f = {...filters}
        f.arena[field] = val;
        setFilters(f);
    }

    const handleGuildSelectChange = (e) => {
        let f = {...filters}
        f.guild[e.target.name] = e.target.value;
        setFilters(f);
    }

    const handleGuildSliderChange = (field, e, val) => {
        let f = {...filters}
        f.guild[field] = val;
        setFilters(f);
    }

    useEffect(() => {
        calculateArenaDays();
        calculateGuildDays();
    }, [filters])

    useEffect(() => {
        let buildings = [...initBuildingsData]
        if(profile){
            profile.deco_list.map(d => {
                buildings.forEach((b, id_) => {
                    if(b.id === d.master_id){
                        buildings[id_].level = d.level
                    }
                })
            })
        }
        setBuildingsData(buildings)
        calculateArenaDays();
        calculateGuildDays();
    }, [profile])

    return (
        <div>
            {loading && <LoadingAbsolute />}
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} >
                    <Dropzone handleChange={handleChange} text={"Upload JSON file (OPTIONAL)"} />
                </Grid>
                <Grid item md={6} xs={12} className={classes.firstRow}>
                    <Card className={classes.paper}>
                        <Typography variant="h6" className={classes.title} gutterBottom>
                            {profile ? <Moment interval={0} format="YYYY-MM-DD hh:mm:ss">{new Date(profile.tvalue * 1000)}</Moment> : "Manual"}
                        </Typography>
                        <Typography variant="h4" className={classes.animatedNumber}>
                            {profile ? profile.wizard_info.wizard_name : "Manual"}
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                    <ArenaFilters
                        data={initArenaFilters.arena_rank}
                        filters={filters.arena}
                        handleSelectChange={handleArenaSelectChange}
                        handleSliderChange={handleArenaSliderChange}
                    />
                </Grid>
                <Grid item md={8} xs={12}>
                    <GuildFilters
                        data={initGuildFilters}
                        filters={filters.guild}
                        handleSelectChange={handleGuildSelectChange}
                        handleSliderChange={handleGuildSliderChange}
                    />
                </Grid>
            </Grid>
            <BuildingTable 
                data={buildingsData}
            />
            <CalculationMethod />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: 143,
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            marginLeft: "unset"
        }
    },
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        display: "flex",
        justifyContent: "center",
    },
  }));