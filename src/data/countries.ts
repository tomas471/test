// by nicograef : https://github.com/nicograef/country-quiz/commits?author=nicograef

export interface Country {
  flag: string;
  country: string;
  capital: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const countries: Country[] = [
    {
        flag: 'https://flagcdn.com/bf.svg',
        country: 'Burkina Faso',
        capital: 'Ouagadougou',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/hk.svg',
        country: 'Hong Kong',
        capital: 'City of Victoria',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ae.svg',
        country: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ag.svg',
        country: 'Antigua and Barbuda',
        capital: "Saint John's",
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/km.svg',
        country: 'Comoros',
        capital: 'Moroni',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pn.svg',
        country: 'Pitcairn Islands',
        capital: 'Adamstown',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/bg.svg',
        country: 'Bulgaria',
        capital: 'Sofia',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/dj.svg',
        country: 'Djibouti',
        capital: 'Djibouti',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/la.svg',
        country: 'Laos',
        capital: 'Vientiane',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/lb.svg',
        country: 'Lebanon',
        capital: 'Beirut',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/pa.svg',
        country: 'Panama',
        capital: 'Panama City',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ec.svg',
        country: 'Ecuador',
        capital: 'Quito',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bb.svg',
        country: 'Barbados',
        capital: 'Bridgetown',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/im.svg',
        country: 'Isle of Man',
        capital: 'Douglas',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/bt.svg',
        country: 'Bhutan',
        capital: 'Thimphu',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bi.svg',
        country: 'Burundi',
        capital: 'Gitega',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/cn.svg',
        country: 'China',
        capital: 'Beijing',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/nf.svg',
        country: 'Norfolk Island',
        capital: 'Kingston',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ly.svg',
        country: 'Libya',
        capital: 'Tripoli',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ba.svg',
        country: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tv.svg',
        country: 'Tuvalu',
        capital: 'Funafuti',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ao.svg',
        country: 'Angola',
        capital: 'Luanda',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mg.svg',
        country: 'Madagascar',
        capital: 'Antananarivo',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mr.svg',
        country: 'Mauritania',
        capital: 'Nouakchott',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ai.svg',
        country: 'Anguilla',
        capital: 'The Valley',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/je.svg',
        country: 'Jersey',
        capital: 'Saint Helier',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/cv.svg',
        country: 'Cape Verde',
        capital: 'Praia',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/vi.svg',
        country: 'United States Virgin Islands',
        capital: 'Charlotte Amalie',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/mp.svg',
        country: 'Northern Mariana Islands',
        capital: 'Saipan',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/nu.svg',
        country: 'Niue',
        capital: 'Alofi',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/um.svg',
        country: 'United States Minor Outlying Islands',
        capital: 'Washington DC',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mx.svg',
        country: 'Mexico',
        capital: 'Mexico City',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/lk.svg',
        country: 'Sri Lanka',
        capital: 'Sri Jayawardenepura Kotte',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ve.svg',
        country: 'Venezuela',
        capital: 'Caracas',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/fk.svg',
        country: 'Falkland Islands',
        capital: 'Stanley',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/mw.svg',
        country: 'Malawi',
        capital: 'Lilongwe',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/sm.svg',
        country: 'San Marino',
        capital: 'City of San Marino',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tc.svg',
        country: 'Turks and Caicos Islands',
        capital: 'Cockburn Town',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pm.svg',
        country: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/sr.svg',
        country: 'Suriname',
        capital: 'Paramaribo',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gn.svg',
        country: 'Guinea',
        capital: 'Conakry',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/zw.svg',
        country: 'Zimbabwe',
        capital: 'Harare',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/rw.svg',
        country: 'Rwanda',
        capital: 'Kigali',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/kg.svg',
        country: 'Kyrgyzstan',
        capital: 'Bishkek',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ru.svg',
        country: 'Russia',
        capital: 'Moscow',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/uz.svg',
        country: 'Uzbekistan',
        capital: 'Tashkent',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/be.svg',
        country: 'Belgium',
        capital: 'Brussels',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ax.svg',
        country: 'Åland Islands',
        capital: 'Mariehamn',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/eh.svg',
        country: 'Western Sahara',
        capital: 'El Aaiún',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/yt.svg',
        country: 'Mayotte',
        capital: 'Mamoudzou',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ma.svg',
        country: 'Morocco',
        capital: 'Rabat',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/mq.svg',
        country: 'Martinique',
        capital: 'Fort-de-France',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/fr.svg',
        country: 'France',
        capital: 'Paris',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/tz.svg',
        country: 'Tanzania',
        capital: 'Dodoma',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ky.svg',
        country: 'Cayman Islands',
        capital: 'George Town',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ir.svg',
        country: 'Iran',
        capital: 'Tehran',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/il.svg',
        country: 'Israel',
        capital: 'Jerusalem',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/cm.svg',
        country: 'Cameroon',
        capital: 'Yaoundé',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/sg.svg',
        country: 'Singapore',
        capital: 'Singapore',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/hr.svg',
        country: 'Croatia',
        capital: 'Zagreb',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mm.svg',
        country: 'Myanmar',
        capital: 'Naypyidaw',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gd.svg',
        country: 'Grenada',
        capital: "St. George's",
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ca.svg',
        country: 'Canada',
        capital: 'Ottawa',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ar.svg',
        country: 'Argentina',
        capital: 'Buenos Aires',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/re.svg',
        country: 'Réunion',
        capital: 'Saint-Denis',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/my.svg',
        country: 'Malaysia',
        capital: 'Kuala Lumpur',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sz.svg',
        country: 'Eswatini',
        capital: 'Mbabane',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/fo.svg',
        country: 'Faroe Islands',
        capital: 'Tórshavn',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/sl.svg',
        country: 'Sierra Leone',
        capital: 'Freetown',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ug.svg',
        country: 'Uganda',
        capital: 'Kampala',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/as.svg',
        country: 'American Samoa',
        capital: 'Pago Pago',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ci.svg',
        country: 'Ivory Coast',
        capital: 'Yamoussoukro',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gq.svg',
        country: 'Equatorial Guinea',
        capital: 'Malabo',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pk.svg',
        country: 'Pakistan',
        capital: 'Islamabad',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/mc.svg',
        country: 'Monaco',
        capital: 'Monaco',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ck.svg',
        country: 'Cook Islands',
        capital: 'Avarua',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/bo.svg',
        country: 'Bolivia',
        capital: 'Sucre',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cy.svg',
        country: 'Cyprus',
        capital: 'Nicosia',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/fj.svg',
        country: 'Fiji',
        capital: 'Suva',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/br.svg',
        country: 'Brazil',
        capital: 'Brasília',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ua.svg',
        country: 'Ukraine',
        capital: 'Kyiv',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/pw.svg',
        country: 'Palau',
        capital: 'Ngerulmud',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/bh.svg',
        country: 'Bahrain',
        capital: 'Manama',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gm.svg',
        country: 'Gambia',
        capital: 'Banjul',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pl.svg',
        country: 'Poland',
        capital: 'Warsaw',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/cu.svg',
        country: 'Cuba',
        capital: 'Havana',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/jo.svg',
        country: 'Jordan',
        capital: 'Amman',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/si.svg',
        country: 'Slovenia',
        capital: 'Ljubljana',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tf.svg',
        country: 'French Southern and Antarctic Lands',
        capital: 'Port-aux-Français',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/tm.svg',
        country: 'Turkmenistan',
        capital: 'Ashgabat',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/lu.svg',
        country: 'Luxembourg',
        capital: 'Luxembourg',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/gh.svg',
        country: 'Ghana',
        capital: 'Accra',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/md.svg',
        country: 'Moldova',
        capital: 'Chișinău',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/er.svg',
        country: 'Eritrea',
        capital: 'Asmara',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/es.svg',
        country: 'Spain',
        capital: 'Madrid',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/et.svg',
        country: 'Ethiopia',
        capital: 'Addis Ababa',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mz.svg',
        country: 'Mozambique',
        capital: 'Maputo',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/sx.svg',
        country: 'Sint Maarten',
        capital: 'Philipsburg',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/sy.svg',
        country: 'Syria',
        capital: 'Damascus',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bd.svg',
        country: 'Bangladesh',
        capital: 'Dhaka',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/vn.svg',
        country: 'Vietnam',
        capital: 'Hanoi',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/nl.svg',
        country: 'Netherlands',
        capital: 'Amsterdam',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ad.svg',
        country: 'Andorra',
        capital: 'Andorra la Vella',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tw.svg',
        country: 'Taiwan',
        capital: 'Taipei',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cx.svg',
        country: 'Christmas Island',
        capital: 'Flying Fish Cove',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ws.svg',
        country: 'Samoa',
        capital: 'Apia',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gw.svg',
        country: 'Guinea-Bissau',
        capital: 'Bissau',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pr.svg',
        country: 'Puerto Rico',
        capital: 'San Juan',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/pg.svg',
        country: 'Papua New Guinea',
        capital: 'Port Moresby',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gg.svg',
        country: 'Guernsey',
        capital: 'St. Peter Port',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/uy.svg',
        country: 'Uruguay',
        capital: 'Montevideo',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/au.svg',
        country: 'Australia',
        capital: 'Canberra',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/kp.svg',
        country: 'North Korea',
        capital: 'Pyongyang',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bv.svg',
        country: 'Bouvet Island',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ee.svg',
        country: 'Estonia',
        capital: 'Tallinn',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ht.svg',
        country: 'Haiti',
        capital: 'Port-au-Prince',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/dz.svg',
        country: 'Algeria',
        capital: 'Algiers',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tg.svg',
        country: 'Togo',
        capital: 'Lomé',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gf.svg',
        country: 'French Guiana',
        capital: 'Cayenne',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/dm.svg',
        country: 'Dominica',
        capital: 'Roseau',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/st.svg',
        country: 'São Tomé and Príncipe',
        capital: 'São Tomé',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/eg.svg',
        country: 'Egypt',
        capital: 'Cairo',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/gt.svg',
        country: 'Guatemala',
        capital: 'Guatemala City',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/no.svg',
        country: 'Norway',
        capital: 'Oslo',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/gr.svg',
        country: 'Greece',
        capital: 'Athens',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/by.svg',
        country: 'Belarus',
        capital: 'Minsk',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/dk.svg',
        country: 'Denmark',
        capital: 'Copenhagen',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/hm.svg',
        country: 'Heard Island and McDonald Islands',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/id.svg',
        country: 'Indonesia',
        capital: 'Jakarta',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/cl.svg',
        country: 'Chile',
        capital: 'Santiago',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ps.svg',
        country: 'Palestine',
        capital: 'Ramallah',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gb.svg',
        country: 'United Kingdom',
        capital: 'London',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/kn.svg',
        country: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/bl.svg',
        country: 'Saint Barthélemy',
        capital: 'Gustavia',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ni.svg',
        country: 'Nicaragua',
        capital: 'Managua',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tn.svg',
        country: 'Tunisia',
        capital: 'Tunis',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gu.svg',
        country: 'Guam',
        capital: 'Hagåtña',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/mo.svg',
        country: 'Macau',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pf.svg',
        country: 'French Polynesia',
        capital: 'Papeetē',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/fi.svg',
        country: 'Finland',
        capital: 'Helsinki',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sc.svg',
        country: 'Seychelles',
        capital: 'Victoria',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/gs.svg',
        country: 'South Georgia',
        capital: 'King Edward Point',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/jm.svg',
        country: 'Jamaica',
        capital: 'Kingston',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sk.svg',
        country: 'Slovakia',
        capital: 'Bratislava',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/gy.svg',
        country: 'Guyana',
        capital: 'Georgetown',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/kh.svg',
        country: 'Cambodia',
        capital: 'Phnom Penh',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/th.svg',
        country: 'Thailand',
        capital: 'Bangkok',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/fm.svg',
        country: 'Micronesia',
        capital: 'Palikir',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/mv.svg',
        country: 'Maldives',
        capital: 'Malé',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mu.svg',
        country: 'Mauritius',
        capital: 'Port Louis',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/nc.svg',
        country: 'New Caledonia',
        capital: 'Nouméa',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ph.svg',
        country: 'Philippines',
        capital: 'Manila',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sd.svg',
        country: 'Sudan',
        capital: 'Khartoum',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/us.svg',
        country: 'United States',
        capital: 'Washington, D.C.',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/jp.svg',
        country: 'Japan',
        capital: 'Tokyo',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ge.svg',
        country: 'Georgia',
        capital: 'Tbilisi',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tj.svg',
        country: 'Tajikistan',
        capital: 'Dushanbe',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/aq.svg',
        country: 'Antarctica',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/cg.svg',
        country: 'Republic of the Congo',
        capital: 'Brazzaville',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/rs.svg',
        country: 'Serbia',
        capital: 'Belgrade',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/am.svg',
        country: 'Armenia',
        capital: 'Yerevan',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bw.svg',
        country: 'Botswana',
        capital: 'Gaborone',
        difficulty: 'medium'
    },
    {
        flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
        country: 'Afghanistan',
        capital: 'Kabul',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/qa.svg',
        country: 'Qatar',
        capital: 'Doha',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/tt.svg',
        country: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ye.svg',
        country: 'Yemen',
        capital: "Sana'a",
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bn.svg',
        country: 'Brunei',
        capital: 'Bandar Seri Begawan',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/is.svg',
        country: 'Iceland',
        capital: 'Reykjavik',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/bq.svg',
        country: 'Caribbean Netherlands',
        capital: 'Kralendijk',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/mh.svg',
        country: 'Marshall Islands',
        capital: 'Majuro',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/iq.svg',
        country: 'Iraq',
        capital: 'Baghdad',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cw.svg',
        country: 'Curaçao',
        capital: 'Willemstad',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/xk.svg',
        country: 'Kosovo',
        capital: 'Pristina',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/al.svg',
        country: 'Albania',
        capital: 'Tirana',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/vc.svg',
        country: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/hn.svg',
        country: 'Honduras',
        capital: 'Tegucigalpa',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tk.svg',
        country: 'Tokelau',
        capital: 'Fakaofo',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/na.svg',
        country: 'Namibia',
        capital: 'Windhoek',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/wf.svg',
        country: 'Wallis and Futuna',
        capital: 'Mata-Utu',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/lt.svg',
        country: 'Lithuania',
        capital: 'Vilnius',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ne.svg',
        country: 'Niger',
        capital: 'Niamey',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/bj.svg',
        country: 'Benin',
        capital: 'Porto-Novo',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/in.svg',
        country: 'India',
        capital: 'New Delhi',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ml.svg',
        country: 'Mali',
        capital: 'Bamako',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ng.svg',
        country: 'Nigeria',
        capital: 'Abuja',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/aw.svg',
        country: 'Aruba',
        capital: 'Oranjestad',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/sa.svg',
        country: 'Saudi Arabia',
        capital: 'Riyadh',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/bm.svg',
        country: 'Bermuda',
        capital: 'Hamilton',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ms.svg',
        country: 'Montserrat',
        capital: 'Plymouth',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/kz.svg',
        country: 'Kazakhstan',
        capital: 'Nur-Sultan',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ls.svg',
        country: 'Lesotho',
        capital: 'Maseru',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ki.svg',
        country: 'Kiribati',
        capital: 'South Tarawa',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/do.svg',
        country: 'Dominican Republic',
        capital: 'Santo Domingo',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ie.svg',
        country: 'Ireland',
        capital: 'Dublin',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/az.svg',
        country: 'Azerbaijan',
        capital: 'Baku',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/kr.svg',
        country: 'South Korea',
        capital: 'Seoul',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/to.svg',
        country: 'Tonga',
        capital: "Nuku'alofa",
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/kw.svg',
        country: 'Kuwait',
        capital: 'Kuwait City',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/om.svg',
        country: 'Oman',
        capital: 'Muscat',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/td.svg',
        country: 'Chad',
        capital: "N'Djamena",
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mn.svg',
        country: 'Mongolia',
        capital: 'Ulan Bator',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mk.svg',
        country: 'North Macedonia',
        capital: 'Skopje',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cd.svg',
        country: 'DR Congo',
        capital: 'Kinshasa',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/de.svg',
        country: 'Germany',
        capital: 'Berlin',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/hu.svg',
        country: 'Hungary',
        capital: 'Budapest',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ke.svg',
        country: 'Kenya',
        capital: 'Nairobi',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/zm.svg',
        country: 'Zambia',
        capital: 'Lusaka',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/za.svg',
        country: 'South Africa',
        capital: 'Pretoria',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/lv.svg',
        country: 'Latvia',
        capital: 'Riga',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/tl.svg',
        country: 'Timor-Leste',
        capital: 'Dili',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/pe.svg',
        country: 'Peru',
        capital: 'Lima',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/ch.svg',
        country: 'Switzerland',
        capital: 'Bern',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/bs.svg',
        country: 'Bahamas',
        capital: 'Nassau',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ga.svg',
        country: 'Gabon',
        capital: 'Libreville',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/lr.svg',
        country: 'Liberia',
        capital: 'Monrovia',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/ss.svg',
        country: 'South Sudan',
        capital: 'Juba',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/gi.svg',
        country: 'Gibraltar',
        capital: 'Gibraltar',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/lc.svg',
        country: 'Saint Lucia',
        capital: 'Castries',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/pt.svg',
        country: 'Portugal',
        capital: 'Lisbon',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/gl.svg',
        country: 'Greenland',
        capital: 'Nuuk',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/gp.svg',
        country: 'Guadeloupe',
        capital: 'Basse-Terre',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mf.svg',
        country: 'Saint Martin',
        capital: 'Marigot',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cr.svg',
        country: 'Costa Rica',
        capital: 'San José',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/cz.svg',
        country: 'Czechia',
        capital: 'Prague',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/me.svg',
        country: 'Montenegro',
        capital: 'Podgorica',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cc.svg',
        country: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/se.svg',
        country: 'Sweden',
        capital: 'Stockholm',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/io.svg',
        country: 'British Indian Ocean Territory',
        capital: 'Diego Garcia',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/so.svg',
        country: 'Somalia',
        capital: 'Mogadishu',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/mt.svg',
        country: 'Malta',
        capital: 'Valletta',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sh.svg',
        country: 'Saint Helena, Ascension and Tristan da Cunha',
        capital: 'Jamestown',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/co.svg',
        country: 'Colombia',
        capital: 'Bogotá',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/tr.svg',
        country: 'Turkey',
        capital: 'Ankara',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/bz.svg',
        country: 'Belize',
        capital: 'Belmopan',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/sb.svg',
        country: 'Solomon Islands',
        capital: 'Honiara',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/vg.svg',
        country: 'British Virgin Islands',
        capital: 'Road Town',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/va.svg',
        country: 'Vatican City',
        capital: 'Vatican City',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sn.svg',
        country: 'Senegal',
        capital: 'Dakar',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/cf.svg',
        country: 'Central African Republic',
        capital: 'Bangui',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/li.svg',
        country: 'Liechtenstein',
        capital: 'Vaduz',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/nr.svg',
        country: 'Nauru',
        capital: 'Yaren',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/ro.svg',
        country: 'Romania',
        capital: 'Bucharest',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/at.svg',
        country: 'Austria',
        capital: 'Vienna',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/np.svg',
        country: 'Nepal',
        capital: 'Kathmandu',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/py.svg',
        country: 'Paraguay',
        capital: 'Asunción',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/nz.svg',
        country: 'New Zealand',
        capital: 'Wellington',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/it.svg',
        country: 'Italy',
        capital: 'Rome',
        difficulty: 'easy'
    },
    {
        flag: 'https://flagcdn.com/sv.svg',
        country: 'El Salvador',
        capital: 'San Salvador',
        difficulty: 'medium'
    },
    {
        flag: 'https://flagcdn.com/sj.svg',
        country: 'Svalbard and Jan Mayen',
        capital: 'Longyearbyen',
        difficulty: 'hard'
    },
    {
        flag: 'https://flagcdn.com/vu.svg',
        country: 'Vanuatu',
        capital: 'Port Vila',
        difficulty: 'medium'
    }
]    