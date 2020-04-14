

const misc = require('../sMisc');


class WeatherSingleton {
	constructor() {
		this.currentWeather = 0;
		this.weathers = 
		[	"ExtraSunny", 	// 0
			"Clear",  		// 1
			"Clouds", 		// 2
			"Smog", 		// 3
			"Foggy", 		// 4
			"Overcast",		// 5
			"Rain", 		// 6
			"Thunder", 		// 7
			"Clearing", 	// 8
			"Neutral", 		// 9
			"Blizzard", 	// 10
			"Snowlight", 	// 11
			"Halloween",	// 12
			"xmax",			// 13
		];
	}

	changeWeatherTo(number) {
		this.currentWeather = number;
		mp.world.setWeatherTransition(this.weathers[this.currentWeather]);
		misc.log.trace(`Current weather: ${this.weathers[this.currentWeather]}`);
	}

	changeToSunWeather() {
		const rnd = misc.getRandomInt();
		let next;
		if (rnd <= 30) {
			next = 0;
		}
		else if (rnd > 30 && rnd <= 55) {
			next = 1;
		}
		else if (rnd > 55 && rnd <= 65) {
			next = 2;
		}
		else if (rnd > 65 && rnd <= 75) {
			next = 3;
		}
		else if (rnd > 75 && rnd <= 85) {
			next = 4;
		}
		else if (rnd > 85) {
			next = 5;
		}
		return this.changeWeatherTo(next);
	}

	changeWeather() {
		const chance = misc.getRandomInt();
		if (chance <= 25) return;  // Continue current weather
			if (this.currentWeather === 5) {
			return this.changeWeatherTo(6);
		}
		if (this.currentWeather === 6) {
			const localChance = misc.getRandomInt();
			if (localChance <= 33) {
			return this.changeWeatherTo(7);
			}
			else {
				return this.changeWeatherTo(8)
			}
		}
		if (this.currentWeather === 7) {
			return this.changeWeatherTo(6);
		}
		else {
			this.changeToSunWeather();
		}
	}
}
const weatherSingleton = new WeatherSingleton();
weatherSingleton.changeWeather();
module.exports = weatherSingleton;

  

mp.events.addCommand(
{
	'w' : (player, fullText, id) => {
		if (player.adminlvl < 1) {
			return;
		}
		weatherSingleton.changeWeatherTo(+id);
		player.outputChatBox(`Current weather: ${ weatherSingleton.weathers[id]}`);
	},
	
});

let changeweather = (player, weather) => {
	let weatherA = "CLEAR";
	if(weather == "Extrasunny"){
		weatherA = "EXTRASUNNY";
	} else if(weather == "Clear"){
		weatherA = "CLEAR";
	} else if(weather == "Clouds"){
		weatherA = "CLOUDS";
	}else if(weather == "Smog"){
		weatherA = "SMOG";
	}else if(weather == "Foggy"){
		weatherA = "FOGGY";
	}else if(weather == "Overcast"){
		weatherA = "OVERCAST";
	}else if(weather == "Rain"){
		weatherA = "RAIN";
	}else if(weather == "Thunder"){
		weatherA = "THUNDER";
	}else if(weather == "Clearing"){
		weatherA = "CLEARING";
	}else if(weather == "Neutral"){
		weatherA = "NEUTRAL";
	}else if(weather == "Snow"){
		weatherA = "SNOW";
	}else if(weather == "Blizzard"){
		weatherA ="BLIZZARD";
	}else if(weather == "Snowlight"){
		weatherA = "SNOWLIGHT";
	}else if(weather== "XMas"){
		weatherA = "XMAS";
	}else if(weather== "Halloween"){
		weatherA = "HALLOWEEN";
	}

	mp.world.weather = weatherA;
	mp.world.setweather = weatherA;
};

let changetime = (playerm, time) => {
	// 6, 12, 21, 0
	let settime = 0;
	if (time == "day"){
		settime = 12;
	} else if (time == "Night"){
		settime = 0;
	} else if (time == "Sunrise"){
		settime = 6;
	} else if (time == "Sunset"){
		settime=21
	} else{
		settime=12
	}
	mp.world.time.hour = parseInt(settime)

};

mp.events.add("serverSysChangeWeather", changeweather);
mp.events.add("serverSysChangeTime", changetime);

