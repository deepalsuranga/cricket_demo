const express = require('express');

const app = express();

app.use(express.json);

var date = new Date();
var t_current_hour = date.getHours();
var t_current_minute = date.getMinutes();
var t_current_seconds = date.getSeconds();
var t_current_miliseconds = date.getMilliseconds();

var b_i_runs = 0;
var b_i_overs = 0;

var b_i_economy_rate = b_i_runs / b_i_overs;

var bt1_i = runs1;
var bt1_i = balls1;
var bt1_i_strike_rate = runs1 / balls1;

var bt2_i = runs2;
var bt2_i = balls2;
var bt2_i_strike_rate = runs2 / balls2;

const current_scores = [];

const current_score = [
    {
        batting1: [
            {
                id: 1,
                batsman: 'deepal',
                runs: runs1,
                balls: balls1,
                fours: 1,
                sixs: 0,
                strike_rate: bt1_i_strike_rate,
                description: [
                    {
                        current_status: 'out',
                        current_description: 'c Malinda b Deepal',

                    }
                ]

            }
        ],
        batting2: [
            {
                id: 1,
                batsman: 'malinda',
                batsman1_runs: 1,
                balls: runs2,
                fours: balls2,
                sixs: 0,
                strike_rate: bt2_i_strike_rate,
                description: [
                    {
                        current_status: 'not out',
                        current_description: 'currently batting',

                    }
                ]

            }
        ],
        bowling: [
            {
                id: 1,
                bowller: 'supun',
                overs: b_i_overs,
                maiden_overs: 0,
                runs: b_i_runs,
                wickets: 0,
                economy_rate: b_i_economy_rate,
                discription: "good bowlling"
            }
        ],
        final_score: [
            {
                id: 1,
                batting_team: team1,
                total_score: 42,
                total_wkts: 2,
                total_overs: 4.5,
                extras: [
                    {
                        wide_balls: 0,
                        no_balls: 0,
                        leg_byes: 0,
                        byes: 0,
                    }
                ]

            }
        ],
        host_time:t_current_hour+":"+t_current_minute+":"+t_current_seconds+":"+t_current_miliseconds

    }
];

app.get('/',(req,res) =>{

    res.send("WELCOME CRICKET APPLICATION");

});