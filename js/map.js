//basic map config with custom fills, mercator projection
var map = new Datamap({
	scope: 'world',
	element: document.getElementById('container1'),
	projection: 'mercator',
	geographyConfig: {
		highlightBorderColor: '#666666',
		popupTemplate: function(geography, data) {
			if (data != null) return "<div class='hoverinfo'>" + geography.properties.name+': '+data.visitors +'</div>'
	},
	highlightBorderWidth: 1
	},

	fills: {
		defaultFill: '#CCCCCC',
		USA: '#ff00ff',
		DEU: '#639cff',
		GBR: '#4bb4ff',
		CHN: '#2ed1ff',
		BRA: '#2ed1ff',
		CAN: '#27d8ff',
		IND: '#27d8ff',
		JPN: '#24dbff',
		FRA: '#1fe0ff',
		CHE: '#1be4ff',
		ITA: '#18e7ff',
		AUS: '#16e9ff',
		ESP: '#15eaff',
		POL: '#0ff0ff',
		NLD: '#0ff0ff',
		AUT: '#0ef1ff',
		KOR: '#0df2ff',
		DNK: '#0cf3ff',
		RUS: '#0bf4ff',
		TUR: '#0bf4ff',
		MEX: '#0af5ff',
		SGP: '#08f7ff',
		TWN: '#08f7ff',
		COL: '#08f7ff',
		SWE: '#07f8ff',
		ISR: '#06f9ff',
		IRN: '#06f9ff',
		BEL: '#05faff',
		FIN: '#05faff',
		NZL: '#04fbff',
		ARG: '#04fbff',
		HKG: '#04fbff',
		ZAF: '#04fbff',
		GRC: '#03fcff',
		MYS: '#03fcff',
		HUN: '#03fcff',
		PAK: '#03fcff',
		CHL: '#02fdff',
		PRT: '#02fdff',
		CZE: '#02fdff',
		IRL: '#02fdff',
		NOR: '#02fdff',
		SVK: '#02fdff',
		UKR: '#02fdff',
		EGY: '#02fdff',
		IDN: '#01feff',
		PHL: '#01feff',
		DZA: '#01feff',
		GTM: '#01feff',
		MAR: '#01feff',
		CMR: '#01feff',
		HRV: '#01feff',
		ROU: '#01feff',
		SAU: '#01feff',
		THA: '#01feff',
		LUX: '#01feff',
		BGD: '#01feff',
		BGR: '#01feff',
		LVA: '#01feff',
		BOL: '#00ffff',
		SRB: '#00ffff',
		LTU: '#00ffff',
		QAT: '#00ffff',
		VNM: '#00ffff',
		BLR: '#00ffff',
		PER: '#00ffff',
		SVN: '#00ffff',
		ARM: '#00ffff',
		ARE: '#00ffff',
		ISL: '#00ffff',
		EST: '#00ffff',
		LKA: '#00ffff',
		MLT: '#00ffff',
		URY: '#00ffff',
		ECU: '#00ffff',
		ETH: '#00ffff',
		JOR: '#00ffff',
		KEN: '#00ffff',
		MNG: '#00ffff',
		TUN: '#00ffff',
		VEN: '#00ffff',
		CRI: '#00ffff',
		DMA: '#00ffff',
		HND: '#00ffff',
		NGA: '#00ffff',
		DOM: '#00ffff',
		GEO: '#00ffff',
		KWT: '#00ffff',
		MDA: '#00ffff',
		UZB: '#00ffff',
		KAZ: '#00ffff',
		NPL: '#00ffff',
		PRI: '#00ffff',
		SEN: '#00ffff',
		BIH: '#00ffff',
		GHA: '#00ffff',
		IRQ: '#00ffff',
		LBN: '#00ffff',
		LIE: '#00ffff',
		PAN: '#00ffff',
		PRY: '#00ffff',
		AGO: '#00ffff',
		AZE: '#00ffff',
		BLZ: '#00ffff',
		CYP: '#00ffff',
		FJI: '#00ffff',
		MDG: '#00ffff',
		MUS: '#00ffff',
		OMN: '#00ffff',
		PSE: '#00ffff',
		SOM: '#00ffff',
		TTO: '#00ffff',
		YEM: '#00ffff',
		ALB: '#00ffff',
		CIV: '#00ffff',
		HTI: '#00ffff',
		JEY: '#00ffff',
		JAM: '#00ffff',
		KGZ: '#00ffff',
		KHM: '#00ffff',
		LSO: '#00ffff',
		LBY: '#00ffff',
		MMR: '#00ffff',
		MAC: '#00ffff',
		PYF: '#00ffff',
		SDN: '#00ffff',
		SUR: '#00ffff',
		SLV: '#00ffff',
		SYR: '#00ffff',
		TZA: '#00ffff',
		UGA: '#00ffff',
		U.S. Virgin Islands: '#00ffff',
		ZMB: '#00ffff',
		ZWE: '#00ffff',
	},

	data: {
		USA: {fillKey: 'USA', visitors: 5726, country: 'United States' },
		DEU: {fillKey: 'DEU', visitors: 2220, country: 'Germany' },
		GBR: {fillKey: 'GBR', visitors: 1688, country: 'United Kingdom' },
		CHN: {fillKey: 'CHN', visitors: 1041, country: 'China' },
		BRA: {fillKey: 'BRA', visitors: 1034, country: 'Brazil' },
		CAN: {fillKey: 'CAN', visitors: 888, country: 'Canada' },
		IND: {fillKey: 'IND', visitors: 878, country: 'India' },
		JPN: {fillKey: 'JPN', visitors: 815, country: 'Japan' },
		FRA: {fillKey: 'FRA', visitors: 714, country: 'France' },
		CHE: {fillKey: 'CHE', visitors: 626, country: 'Switzerland' },
		ITA: {fillKey: 'ITA', visitors: 550, country: 'Italy' },
		AUS: {fillKey: 'AUS', visitors: 493, country: 'Australia' },
		ESP: {fillKey: 'ESP', visitors: 485, country: 'Spain' },
		POL: {fillKey: 'POL', visitors: 353, country: 'Poland' },
		NLD: {fillKey: 'NLD', visitors: 350, country: 'Netherlands' },
		AUT: {fillKey: 'AUT', visitors: 332, country: 'Austria' },
		KOR: {fillKey: 'KOR', visitors: 302, country: 'Korea, Republic Of' },
		DNK: {fillKey: 'DNK', visitors: 275, country: 'Denmark' },
		RUS: {fillKey: 'RUS', visitors: 266, country: 'Russian Federation' },
		TUR: {fillKey: 'TUR', visitors: 251, country: 'Turkey' },
		MEX: {fillKey: 'MEX', visitors: 240, country: 'Mexico' },
		SGP: {fillKey: 'SGP', visitors: 194, country: 'Singapore' },
		TWN: {fillKey: 'TWN', visitors: 183, country: 'Taiwan' },
		COL: {fillKey: 'COL', visitors: 179, country: 'Colombia' },
		SWE: {fillKey: 'SWE', visitors: 159, country: 'Sweden' },
		ISR: {fillKey: 'ISR', visitors: 145, country: 'Israel' },
		IRN: {fillKey: 'IRN', visitors: 136, country: 'Iran, Islamic Republic Of' },
		BEL: {fillKey: 'BEL', visitors: 127, country: 'Belgium' },
		FIN: {fillKey: 'FIN', visitors: 112, country: 'Finland' },
		NZL: {fillKey: 'NZL', visitors: 108, country: 'New Zealand' },
		ARG: {fillKey: 'ARG', visitors: 97, country: 'Argentina' },
		HKG: {fillKey: 'HKG', visitors: 95, country: 'Hong Kong' },
		ZAF: {fillKey: 'ZAF', visitors: 94, country: 'South Africa' },
		GRC: {fillKey: 'GRC', visitors: 81, country: 'Greece' },
		MYS: {fillKey: 'MYS', visitors: 78, country: 'Malaysia' },
		HUN: {fillKey: 'HUN', visitors: 75, country: 'Hungary' },
		PAK: {fillKey: 'PAK', visitors: 75, country: 'Pakistan' },
		CHL: {fillKey: 'CHL', visitors: 67, country: 'Chile' },
		PRT: {fillKey: 'PRT', visitors: 67, country: 'Portugal' },
		CZE: {fillKey: 'CZE', visitors: 61, country: 'Czech Republic' },
		IRL: {fillKey: 'IRL', visitors: 58, country: 'Ireland' },
		NOR: {fillKey: 'NOR', visitors: 56, country: 'Norway' },
		SVK: {fillKey: 'SVK', visitors: 55, country: 'Slovakia' },
		UKR: {fillKey: 'UKR', visitors: 49, country: 'Ukraine' },
		EGY: {fillKey: 'EGY', visitors: 46, country: 'Egypt' },
		IDN: {fillKey: 'IDN', visitors: 44, country: 'Indonesia' },
		PHL: {fillKey: 'PHL', visitors: 43, country: 'Philippines' },
		DZA: {fillKey: 'DZA', visitors: 42, country: 'Algeria' },
		GTM: {fillKey: 'GTM', visitors: 41, country: 'Guatemala' },
		MAR: {fillKey: 'MAR', visitors: 41, country: 'Morocco' },
		CMR: {fillKey: 'CMR', visitors: 39, country: 'Cameroon' },
		HRV: {fillKey: 'HRV', visitors: 39, country: 'Croatia' },
		ROU: {fillKey: 'ROU', visitors: 32, country: 'Romania' },
		SAU: {fillKey: 'SAU', visitors: 32, country: 'Saudi Arabia' },
		THA: {fillKey: 'THA', visitors: 32, country: 'Thailand' },
		LUX: {fillKey: 'LUX', visitors: 31, country: 'Luxembourg' },
		BGD: {fillKey: 'BGD', visitors: 29, country: 'Bangladesh' },
		BGR: {fillKey: 'BGR', visitors: 29, country: 'Bulgaria' },
		LVA: {fillKey: 'LVA', visitors: 27, country: 'Latvia' },
		BOL: {fillKey: 'BOL', visitors: 21, country: 'Bolivia, Plurinational State Of' },
		SRB: {fillKey: 'SRB', visitors: 21, country: 'Serbia' },
		LTU: {fillKey: 'LTU', visitors: 19, country: 'Lithuania' },
		QAT: {fillKey: 'QAT', visitors: 17, country: 'Qatar' },
		VNM: {fillKey: 'VNM', visitors: 17, country: 'Vietnam' },
		BLR: {fillKey: 'BLR', visitors: 15, country: 'Belarus' },
		PER: {fillKey: 'PER', visitors: 15, country: 'Peru' },
		SVN: {fillKey: 'SVN', visitors: 15, country: 'Slovenia' },
		ARM: {fillKey: 'ARM', visitors: 14, country: 'Armenia' },
		ARE: {fillKey: 'ARE', visitors: 13, country: 'United Arab Emirates' },
		ISL: {fillKey: 'ISL', visitors: 12, country: 'Iceland' },
		EST: {fillKey: 'EST', visitors: 8, country: 'Estonia' },
		LKA: {fillKey: 'LKA', visitors: 8, country: 'Sri Lanka' },
		MLT: {fillKey: 'MLT', visitors: 8, country: 'Malta' },
		URY: {fillKey: 'URY', visitors: 8, country: 'Uruguay' },
		ECU: {fillKey: 'ECU', visitors: 7, country: 'Ecuador' },
		ETH: {fillKey: 'ETH', visitors: 7, country: 'Ethiopia' },
		JOR: {fillKey: 'JOR', visitors: 7, country: 'Jordan' },
		KEN: {fillKey: 'KEN', visitors: 7, country: 'Kenya' },
		MNG: {fillKey: 'MNG', visitors: 7, country: 'Mongolia' },
		TUN: {fillKey: 'TUN', visitors: 7, country: 'Tunisia' },
		VEN: {fillKey: 'VEN', visitors: 7, country: 'Venezuela, Bolivarian Republic Of' },
		CRI: {fillKey: 'CRI', visitors: 6, country: 'Costa Rica' },
		DMA: {fillKey: 'DMA', visitors: 6, country: 'Dominica' },
		HND: {fillKey: 'HND', visitors: 6, country: 'Honduras' },
		NGA: {fillKey: 'NGA', visitors: 6, country: 'Nigeria' },
		DOM: {fillKey: 'DOM', visitors: 5, country: 'Dominican Republic' },
		GEO: {fillKey: 'GEO', visitors: 5, country: 'Georgia' },
		KWT: {fillKey: 'KWT', visitors: 5, country: 'Kuwait' },
		MDA: {fillKey: 'MDA', visitors: 5, country: 'Moldova, Republic Of' },
		UZB: {fillKey: 'UZB', visitors: 5, country: 'Uzbekistan' },
		KAZ: {fillKey: 'KAZ', visitors: 4, country: 'Kazakhstan' },
		NPL: {fillKey: 'NPL', visitors: 4, country: 'Nepal' },
		PRI: {fillKey: 'PRI', visitors: 4, country: 'Puerto Rico' },
		SEN: {fillKey: 'SEN', visitors: 4, country: 'Senegal' },
		BIH: {fillKey: 'BIH', visitors: 3, country: 'Bosnia And Herzegovina' },
		GHA: {fillKey: 'GHA', visitors: 3, country: 'Ghana' },
		IRQ: {fillKey: 'IRQ', visitors: 3, country: 'Iraq' },
		LBN: {fillKey: 'LBN', visitors: 3, country: 'Lebanon' },
		LIE: {fillKey: 'LIE', visitors: 3, country: 'Liechtenstein' },
		PAN: {fillKey: 'PAN', visitors: 3, country: 'Panama' },
		PRY: {fillKey: 'PRY', visitors: 3, country: 'Paraguay' },
		AGO: {fillKey: 'AGO', visitors: 2, country: 'Angola' },
		AZE: {fillKey: 'AZE', visitors: 2, country: 'Azerbaijan' },
		BLZ: {fillKey: 'BLZ', visitors: 2, country: 'Belize' },
		CYP: {fillKey: 'CYP', visitors: 2, country: 'Cyprus' },
		FJI: {fillKey: 'FJI', visitors: 2, country: 'Fiji' },
		MDG: {fillKey: 'MDG', visitors: 2, country: 'Madagascar' },
		MUS: {fillKey: 'MUS', visitors: 2, country: 'Mauritius' },
		OMN: {fillKey: 'OMN', visitors: 2, country: 'Oman' },
		PSE: {fillKey: 'PSE', visitors: 2, country: 'Palestinian Territory, Occupied' },
		SOM: {fillKey: 'SOM', visitors: 2, country: 'Somalia' },
		TTO: {fillKey: 'TTO', visitors: 2, country: 'Trinidad And Tobago' },
		YEM: {fillKey: 'YEM', visitors: 2, country: 'Yemen' },
		ALB: {fillKey: 'ALB', visitors: 1, country: 'Albania' },
		CIV: {fillKey: 'CIV', visitors: 1, country: "Cote D'Ivoire" },
		HTI: {fillKey: 'HTI', visitors: 1, country: 'Haiti' },
		JEY: {fillKey: 'JEY', visitors: 1, country: 'Jersey' },
		JAM: {fillKey: 'JAM', visitors: 1, country: 'Jamaica' },
		KGZ: {fillKey: 'KGZ', visitors: 1, country: 'Kyrgyzstan' },
		KHM: {fillKey: 'KHM', visitors: 1, country: 'Cambodia' },
		LSO: {fillKey: 'LSO', visitors: 1, country: 'Lesotho' },
		LBY: {fillKey: 'LBY', visitors: 1, country: 'Libyan Arab Jamahiriya' },
		MMR: {fillKey: 'MMR', visitors: 1, country: 'Myanmar' },
		MAC: {fillKey: 'MAC', visitors: 1, country: 'Macao' },
		PYF: {fillKey: 'PYF', visitors: 1, country: 'French Polynesia' },
		SDN: {fillKey: 'SDN', visitors: 1, country: 'Sudan' },
		SUR: {fillKey: 'SUR', visitors: 1, country: 'Suriname' },
		SLV: {fillKey: 'SLV', visitors: 1, country: 'El Salvador' },
		SYR: {fillKey: 'SYR', visitors: 1, country: 'Syrian Arab Republic' },
		TZA: {fillKey: 'TZA', visitors: 1, country: 'Tanzania, United Republic Of' },
		UGA: {fillKey: 'UGA', visitors: 1, country: 'Uganda' },
		U.S. Virgin Islands: {fillKey: 'U.S. Virgin Islands', visitors: 1, country: 'U.S. Virgin Islands' },
		ZMB: {fillKey: 'ZMB', visitors: 1, country: 'Zambia' },
		ZWE: {fillKey: 'ZWE', visitors: 1, country: 'Zimbabwe' },
	}
})

