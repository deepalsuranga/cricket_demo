
const express = require('express');
// const Joi = require('joi');
const Joi = require('@hapi/joi');

const app = express();

app.use(express.json());

var date = new Date();
var t_current_hour = date.getHours();
var t_current_minute = date.getMinutes();
var t_current_seconds = date.getSeconds();
var t_current_miliseconds = date.getMilliseconds();

var bt1_i_gen_id = 152;
var bt1_s_name = 'Deepal';
var bt1_i_runs = 2;
var bt1_i_balls = 5;
var bt1_i_fours = 0;
var bt1_i_sixs = 0;
var bt1_i_strike_rate = bt1_i_runs / bt1_i_balls;

var bt2_i_gen_id = 0;
var bt2_s_name = 'Malinda';
var bt2_i_runs = 4;
var bt2_i_balls = 2;
var bt2_i_fours = 0;
var bt2_i_sixs = 0;
var bt2_i_strike_rate = bt2_i_runs / bt2_i_balls;


var b_i_runs = 3;
var b_i_overs = 5;

var b_i_economy_rate = b_i_runs / b_i_overs;



const current_score =
{
    "id": 55,
    "data":
    {
        "op_batting1":

        {
            "vo_id": bt1_i_gen_id,
            "vo_name": bt1_s_name,
            "vo_runs": bt1_i_runs,
            "vo_balls": bt1_i_balls,
            "vo_fours": bt1_i_fours,
            "vo_sixs": bt1_i_sixs,
            "vo_strike_rate": bt1_i_strike_rate,
            "vo_description":

            {
                "vo_current_status": 'out',
                "vo_current_description": 'c Malinda b Deepal',

            }


        }
        ,
        "op_batting2":
        {
            "vs_id": bt2_i_gen_id,
            "vs_name": bt2_s_name,
            "vs_runs": bt2_i_runs,
            "vs_balls": bt2_i_balls,
            "vs_fours": bt2_i_fours,
            "vs_sixs": bt2_i_sixs,
            "vs_strike_rate": bt2_i_strike_rate,
            "vs_description":

            {
                "vs_current_status": "not out",
                "vs_current_description": "currently batting",

            }


        }
        ,
        "op_bowling":
        {
            "b_id": 1,
            "bowller": "supun",
            "overs": b_i_overs,
            "maiden_overs": 0,
            "runs": b_i_runs,
            "wickets": 0,
            "economy_rate": b_i_economy_rate,
            "discription": "good bowlling"
        }
        ,
        "final_score":
        {
            "f_id": 1,
            "f_batting_team": "team1",
            "f_total_score": 42,
            "f_total_wkts": 2,
            "f_total_overs": 4.5,
            "f_extras":
            {
                "f_wide_balls": 0,
                "f_no_balls": 0,
                "f_leg_byes": 0,
                "f_byes": 0,
            }


        }
        ,
        "host_time": t_current_hour + ":" + t_current_minute + ":" + t_current_seconds + ":" + t_current_miliseconds
    }
};

const current_scores = [
    {
        id: 1,
        data: current_score
    }
];

app.get('/', (req, res) => {

    res.send("<h1 style='color:red'>WELCOME CRICKET APPLICATION</h1>");

});

app.get('/api/view_scores', (req, res) => {

    //.data.op_batting1.vo_description.vo_current_description
    var c_s = current_scores[0].data.data.op_batting1.vo_id;
    // res.send(`${c_s}`);
    res.send(`hi ${c_s}`);
   // console.log(current_scores[0].data.host_time);


});

//validate function
function validateScore(current_score) {
    const schma = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(current_score, schma);
}


// server config
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));