'use strict';


// Common data service
export class DataService {
    static default = new DataService();
    private _products = ['Widget', 'Gadget', 'Doohickey'];
    private _colors = ['Black', 'White', 'Red', 'Green', 'Blue'];
    private _musicians = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(',');
    private _someCountries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    private _allCountries = [
        'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua', 'Argentina', 'Armenia',
        'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
        'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
        'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands',
        'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote D'Ivoire",
        'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador',
        'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland',
        'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar',
        'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras',
        'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan',
        'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
        'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives',
        'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco',
        'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands', 'Nevis',
        'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island',
        'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico',
        'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius',
        'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'Saipan', 'Samoa', 'San Marino', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia',
        'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka',
        'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo',
        'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda', 'Ukraine',
        'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State',
        'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (USA)', 'Wake Island', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
    ];

    // data used to generate random items
    getData(count: number, allCountries: boolean = false): any[] {
        var countries = allCountries ? this._allCountries : this._someCountries,
            data = [];
            for (var i = 0; i < count; i++) {
                data.push({
                    id: i,
                    country: countries[Math.round(Math.random() * (countries.length - 1))],
                    date: new Date(2014, i % 12, i % 28),
                    downloads: Math.round(Math.random() * 10000),
                    sales: +(Math.random() * 10000).toFixed(2),
                    active: i % 4 == 0
                });
            }
            return data;
    }

    getSomeCountries(): string[] {
        return this._someCountries;
    }

    getAllCountries(): string[] {
        return this._allCountries;
    }

    getProducts(): string[] {
        return this._products;
    }

    getColors(): string[] {
        return this._colors;
    }

    getMusicians(): string[] {
        return this._musicians;
    }

    getTreeData(): [{}] {
        return [
            {
                name: '\u266B Adriane Simione', items: [
                    {
                        name: '\u266A Intelligible Sky', items: [
                            { name: 'Theories', length: '2:02' },
                            { name: 'Giant Eyes', length: '3:29' },
                            { name: 'Jovian Moons', length: '1:02' },
                            { name: 'Open Minds', length: '2:41' },
                            { name: 'Spacetronic Eyes', length: '3:41' }]
                    }
                ]
            },
            {
                name: '\u266B Amy Winehouse', items: [
                    {
                        name: '\u266A Back to Black', items: [
                            { name: 'Addicted', length: '1:34' },
                            { name: 'He Can Only Hold Her', length: '2:22' },
                            { name: 'Some Unholy War', length: '2:21' },
                            { name: 'Wake Up Alone', length: '3:43' },
                            { name: 'Tears Dry On Their Own', length: '1:25' }]
                    },
                    {
                        name: '\u266A Live in Paradiso', items: [
                            { name: "You Know That I'm No Good", length: '2:32' },
                            { name: 'Wake Up Alone', length: '1:04' },
                            { name: 'Valerie', length: '1:22' },
                            { name: 'Tears Dry On Their Own', length: '3:15' },
                            { name: 'Rehab', length: '3:40' }]
                    }]
            },
            {
                name: '\u266B Black Sabbath', items: [
                    {
                        name: '\u266A Heaven and Hell', items: [
                            { name: 'Neon Knights', length: '3:03' },
                            { name: 'Children of the Sea', length: '2:54' },
                            { name: 'Lady Evil', length: '1:43' },
                            { name: 'Heaven and Hell', length: '2:23' },
                            { name: 'Wishing Well', length: '3:22' },
                            { name: 'Die Young', length: '2:21' }]
                    },
                    {
                        name: '\u266A Never Say Die!', items: [
                            { name: 'Swinging The Chain', length: '4:32' },
                            { name: 'Breakout', length: '3:54' },
                            { name: 'Over To You', length: '2:43' },
                            { name: 'Air Dance', length: '1:34' },
                            { name: 'Johnny Blade', length: '1:02' },
                            { name: 'Never Say Die', length: '2:11' }]
                    },
                    {
                        name: '\u266A Paranoid', items: [
                            { name: 'Rat Salad', length: '3:44' },
                            { name: 'Hand Of Doom', length: '4:21' },
                            { name: 'Electric Funeral', length: '2:12' },
                            { name: 'Iron Man', length: '3:22' },
                            { name: 'War Pigs', length: '3:13' }]
                    }]
            },
            {
                name: '\u266B Brand X', items: [
                    {
                        name: '\u266A Unorthodox Behaviour', items: [
                            { name: 'Touch Wood', length: '2:54' },
                            { name: 'Running of Three', length: '1:34' },
                            { name: 'Unorthodox Behaviour', length: '2:23' },
                            { name: 'Smacks of Euphoric Hysteria', length: '3:12' },
                            { name: 'Euthanasia Waltz', length: '2:22' },
                            { name: 'Nuclear Burn', length: '4:01' }]
                    }]
            }
        ];
    }

}

