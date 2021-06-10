window.donateController = ['$scope', '$stateParams', '$translate', '$state', '$http',
  ($scope, $stateParams, $translate, $state, $http) ->

    #Payment Intervals
    $scope.paymentIntervals = [
      {id: 1, name: 'DONATE_INTERVAL_ONCE'},
      {id: 2, name: 'DONATE_INTERVAL_MONTHLY'},
      {id: 3, name: 'DONATE_INTERVAL_QUARTERLY'},
      {id: 4, name: 'DONATE_INTERVAL_HALFYEAR'},
      {id: 5, name: 'DONATE_INTERVAL_YEARLY'}
    ]

    # Payment Reason
    $scope.paymentReasons = [
      {id: 1, name: 'PROJECTS_WORLD_WIDE'},
      {id: 2, name: 'PROJECTS_FLORA'},
      {id: 3, name: 'PROJECTS_WATER'},
      {id: 4, name: 'PROJECTS_FAUNA'},
      {id: 5, name: 'PROJECTS_DISASTER_PREVENTION'}
      {id: 6, name: 'PROJECTS_CLIMATE_CHANGE'}
      {id: 7, name: 'PROJECTS_NUTRITION'}
      {id: 8, name: 'PROJECTS_COUNSELING'}
      {id: 9, name: 'PROJECTS_EDUCATION'}
      {id: 10, name: 'PROJECTS_RESEARCH'}
      {id: 11, name: 'PROJECTS_REFUGEE_AID'}
      {id: 12, name: 'PROJECTS_HEALTH'}
    ]

    # Donate as
    $scope.donateAsItems = [
      {id: 1, name: 'DONATE_DONATE_AS_PRIVATE'},
      {id: 2, name: 'DONATE_DONATE_AS_COMPANY'},
      {id: 3, name: 'DONATE_DONATE_AS_CONGREGATION'},
      {id: 4, name: 'DONATE_DONATE_AS_SCHOOL'}
    ]

    # Title
    $scope.titles = [
      {id: 1, name: 'DONATE_DONATOR_TITLE_MR'},
      {id: 2, name: 'DONATE_DONATOR_TITLE_MRS'},
      {id: 3, name: 'DONATE_DONATOR_TITLE_MR_AND_MRS'}
    ]

    countries =
      'de': [
        {value: 'AF', name: 'Afghanistan'},
        {value: 'EG', name: 'Ägypten'},
        {value: 'AX', name: 'Aland'},
        {value: 'AL', name: 'Albanien'},
        {value: 'DZ', name: 'Algerien'},
        {value: 'AS', name: 'Amerikanisch-Samoa'},
        {value: 'VI', name: 'Amerikanische Jungferninseln'},
        {value: 'AD', name: 'Andorra'},
        {value: 'AO', name: 'Angola'},
        {value: 'AI', name: 'Anguilla'},
        {value: 'AQ', name: 'Antarktis'},
        {value: 'AG', name: 'Antigua und Barbuda'},
        {value: 'GQ', name: 'Äquatorialguinea'},
        {value: 'AR', name: 'Argentinien'},
        {value: 'AM', name: 'Armenien'},
        {value: 'AW', name: 'Aruba'},
        {value: 'AC', name: 'Ascension'},
        {value: 'AZ', name: 'Aserbaidschan'},
        {value: 'ET', name: 'Äthiopien'},
        {value: 'AU', name: 'Australien'},
        {value: 'BS', name: 'Bahamas'},
        {value: 'BH', name: 'Bahrain'},
        {value: 'BD', name: 'Bangladesch'},
        {value: 'BB', name: 'Barbados'},
        {value: 'BE', name: 'Belgien'},
        {value: 'BZ', name: 'Belize'},
        {value: 'BJ', name: 'Benin'},
        {value: 'BM', name: 'Bermuda'},
        {value: 'BT', name: 'Bhutan'},
        {value: 'BO', name: 'Bolivien'},
        {value: 'BA', name: 'Bosnien und Herzegowina'},
        {value: 'BW', name: 'Botswana'},
        {value: 'BV', name: 'Bouvetinsel'},
        {value: 'BR', name: 'Brasilien'},
        {value: 'BN', name: 'Brunei'},
        {value: 'BG', name: 'Bulgarien'},
        {value: 'BF', name: 'Burkina Faso'},
        {value: 'BI', name: 'Burundi'},
        {value: 'CL', name: 'Chile'},
        {value: 'CN', name: 'China'},
        {value: 'CK', name: 'Cookinseln'},
        {value: 'CR', name: 'Costa Rica'},
        {value: 'CI', name: 'Cote d\'Ivoire'},
        {value: 'DK', name: 'Dänemark'},
        {value: 'DE', name: 'Deutschland'},
        {value: 'DG', name: 'Diego Garcia'},
        {value: 'DM', name: 'Dominica'},
        {value: 'DO', name: 'Dominikanische Republik'},
        {value: 'DJ', name: 'Dschibuti'},
        {value: 'EC', name: 'Ecuador'},
        {value: 'SV', name: 'El Salvador'},
        {value: 'ER', name: 'Eritrea'},
        {value: 'EE', name: 'Estland'},
        {value: 'EU', name: 'Europäische Union'},
        {value: 'FK', name: 'Falklandinseln'},
        {value: 'FO', name: 'Färöer'},
        {value: 'FJ', name: 'Fidschi'},
        {value: 'FI', name: 'Finnland'},
        {value: 'FR', name: 'Frankreich'},
        {value: 'GF', name: 'Französisch-Guayana'},
        {value: 'PF', name: 'Französisch-Polynesien'},
        {value: 'GA', name: 'Gabun'},
        {value: 'GM', name: 'Gambia'},
        {value: 'GE', name: 'Georgien'},
        {value: 'GH', name: 'Ghana'},
        {value: 'GI', name: 'Gibraltar'},
        {value: 'GD', name: 'Grenada'},
        {value: 'GR', name: 'Griechenland'},
        {value: 'GL', name: 'Grönland'},
        {value: 'GB', name: 'Großbritannien'},
        {value: 'CP', name: 'Guadeloupe'},
        {value: 'GU', name: 'Guam'},
        {value: 'GT', name: 'Guatemala'},
        {value: 'GG', name: 'Guernsey'},
        {value: 'GN', name: 'Guinea'},
        {value: 'GW', name: 'Guinea-Bissau'},
        {value: 'GY', name: 'Guyana'},
        {value: 'HT', name: 'Haiti'},
        {value: 'HM', name: 'Heard und McDonaldinseln'},
        {value: 'HN', name: 'Honduras'},
        {value: 'HK', name: 'Hongkong'},
        {value: 'IN', name: 'Indien'},
        {value: 'ID', name: 'Indonesien'},
        {value: 'IQ', name: 'Irak'},
        {value: 'IR', name: 'Iran'},
        {value: 'IE', name: 'Irland'},
        {value: 'IS', name: 'Island'},
        {value: 'IL', name: 'Israel'},
        {value: 'IT', name: 'Italien'},
        {value: 'JM', name: 'Jamaika'},
        {value: 'JP', name: 'Japan'},
        {value: 'YE', name: 'Jemen'},
        {value: 'JE', name: 'Jersey'},
        {value: 'JO', name: 'Jordanien'},
        {value: 'KY', name: 'Kaimaninseln'},
        {value: 'KH', name: 'Kambodscha'},
        {value: 'CM', name: 'Kamerun'},
        {value: 'CA', name: 'Kanada'},
        {value: 'IC', name: 'Kanarische Inseln'},
        {value: 'CV', name: 'Kap Verde'},
        {value: 'KZ', name: 'Kasachstan'},
        {value: 'QA', name: 'Katar'},
        {value: 'KE', name: 'Kenia'},
        {value: 'KG', name: 'Kirgisistan'},
        {value: 'KI', name: 'Kiribati'},
        {value: 'CC', name: 'Kokosinseln'},
        {value: 'CO', name: 'Kolumbien'},
        {value: 'KM', name: 'Komoren'},
        {value: 'CG', name: 'Kongo'},
        {value: 'HR', name: 'Kroatien'},
        {value: 'CU', name: 'Kuba'},
        {value: 'KW', name: 'Kuwait'},
        {value: 'LA', name: 'Laos'},
        {value: 'LS', name: 'Lesotho'},
        {value: 'LV', name: 'Lettland'},
        {value: 'LB', name: 'Libanon'},
        {value: 'LR', name: 'Liberia'},
        {value: 'LY', name: 'Libyen'},
        {value: 'LI', name: 'Liechtenstein'},
        {value: 'LT', name: 'Litauen'},
        {value: 'LU', name: 'Luxemburg'},
        {value: 'MO', name: 'Macao'},
        {value: 'MG', name: 'Madagaskar'},
        {value: 'MW', name: 'Malawi'},
        {value: 'MY', name: 'Malaysia'},
        {value: 'MV', name: 'Malediven'},
        {value: 'ML', name: 'Mali'},
        {value: 'MT', name: 'Malta'},
        {value: 'MA', name: 'Marokko'},
        {value: 'MH', name: 'Marshallinseln'},
        {value: 'MQ', name: 'Martinique'},
        {value: 'MR', name: 'Mauretanien'},
        {value: 'MU', name: 'Mauritius'},
        {value: 'YT', name: 'Mayotte'},
        {value: 'MK', name: 'Mazedonien'},
        {value: 'MX', name: 'Mexiko'},
        {value: 'FM', name: 'Mikronesien'},
        {value: 'MD', name: 'Moldawien'},
        {value: 'MC', name: 'Monaco'},
        {value: 'MN', name: 'Mongolei'},
        {value: 'MS', name: 'Montserrat'},
        {value: 'MZ', name: 'Mosambik'},
        {value: 'MM', name: 'Myanmar'},
        {value: 'NA', name: 'Namibia'},
        {value: 'NR', name: 'Nauru'},
        {value: 'NP', name: 'Nepal'},
        {value: 'NC', name: 'Neukaledonien'},
        {value: 'NZ', name: 'Neuseeland'},
        {value: 'NT', name: 'Neutrale Zone'},
        {value: 'NI', name: 'Nicaragua'},
        {value: 'NL', name: 'Niederlande'},
        {value: 'AN', name: 'Niederländische Antillen'},
        {value: 'NE', name: 'Niger'},
        {value: 'NG', name: 'Nigeria'},
        {value: 'NU', name: 'Niue'},
        {value: 'KP', name: 'Nordkorea'},
        {value: 'MP', name: 'Nördliche Marianen'},
        {value: 'NF', name: 'Norfolkinsel'},
        {value: 'NO', name: 'Norwegen'},
        {value: 'OM', name: 'Oman'},
        {value: 'AT', name: 'Österreich'},
        {value: 'PK', name: 'Pakistan'},
        {value: 'PS', name: 'Palästina'},
        {value: 'PW', name: 'Palau'},
        {value: 'PA', name: 'Panama'},
        {value: 'PG', name: 'Papua-Neuguinea'},
        {value: 'PY', name: 'Paraguay'},
        {value: 'PE', name: 'Peru'},
        {value: 'PH', name: 'Philippinen'},
        {value: 'PN', name: 'Pitcairninseln'},
        {value: 'PL', name: 'Polen'},
        {value: 'PT', name: 'Portugal'},
        {value: 'PR', name: 'Puerto Rico'},
        {value: 'RE', name: 'Réunion'},
        {value: 'RW', name: 'Ruanda'},
        {value: 'RO', name: 'Rumänien'},
        {value: 'RU', name: 'Russische Föderation'},
        {value: 'SB', name: 'Salomonen'},
        {value: 'ZM', name: 'Sambia'},
        {value: 'WS', name: 'Samoa'},
        {value: 'SM', name: 'San Marino'},
        {value: 'ST', name: 'São Tomé und Príncipe'},
        {value: 'SA', name: 'Saudi-Arabien'},
        {value: 'SE', name: 'Schweden'},
        {value: 'CH', name: 'Schweiz'},
        {value: 'SN', name: 'Senegal'},
        {value: 'CS', name: 'Serbien und Montenegro'},
        {value: 'SC', name: 'Seychellen'},
        {value: 'SL', name: 'Sierra Leone'},
        {value: 'ZW', name: 'Simbabwe'},
        {value: 'SG', name: 'Singapur'},
        {value: 'SK', name: 'Slowakei'},
        {value: 'SI', name: 'Slowenien'},
        {value: 'SO', name: 'Somalia'},
        {value: 'ES', name: 'Spanien'},
        {value: 'LK', name: 'Sri Lanka'},
        {value: 'SH', name: 'St. Helena'},
        {value: 'KN', name: 'St. Kitts und Nevis'},
        {value: 'LC', name: 'St. Lucia'},
        {value: 'PM', name: 'St. Pierre und Miquelon'},
        {value: 'VC', name: 'St. Vincent/Grenadinen (GB)'},
        {value: 'ZA', name: 'Südafrika, Republik'},
        {value: 'SD', name: 'Sudan'},
        {value: 'KR', name: 'Südkorea'},
        {value: 'SR', name: 'Suriname'},
        {value: 'SJ', name: 'Svalbard und Jan Mayen'},
        {value: 'SZ', name: 'Swasiland'},
        {value: 'SY', name: 'Syrien'},
        {value: 'TJ', name: 'Tadschikistan'},
        {value: 'TW', name: 'Taiwan'},
        {value: 'TZ', name: 'Tansania'},
        {value: 'TH', name: 'Thailand'},
        {value: 'TL', name: 'Timor-Leste'},
        {value: 'TG', name: 'Togo'},
        {value: 'TK', name: 'Tokelau'},
        {value: 'TO', name: 'Tonga'},
        {value: 'TT', name: 'Trinidad und Tobago'},
        {value: 'TA', name: 'Tristan da Cunha'},
        {value: 'TD', name: 'Tschad'},
        {value: 'CZ', name: 'Tschechische Republik'},
        {value: 'TN', name: 'Tunesien'},
        {value: 'TR', name: 'Türkei'},
        {value: 'TM', name: 'Turkmenistan'},
        {value: 'TC', name: 'Turks- und Caicosinseln'},
        {value: 'TV', name: 'Tuvalu'},
        {value: 'UG', name: 'Uganda'},
        {value: 'UA', name: 'Ukraine'},
        {value: 'HU', name: 'Ungarn'},
        {value: 'UY', name: 'Uruguay'},
        {value: 'UZ', name: 'Usbekistan'},
        {value: 'VU', name: 'Vanuatu'},
        {value: 'VA', name: 'Vatikanstadt'},
        {value: 'VE', name: 'Venezuela'},
        {value: 'AE', name: 'Vereinigte Arabische Emirate'},
        {value: 'US', name: 'Vereinigte Staaten von Amerika'},
        {value: 'VN', name: 'Vietnam'},
        {value: 'WF', name: 'Wallis und Futuna'},
        {value: 'CX', name: 'Weihnachtsinsel'},
        {value: 'BY', name: 'Weißrussland'},
        {value: 'EH', name: 'Westsahara'},
        {value: 'CF', name: 'Zentralafrikanische Republik'},
        {value: 'CY', name: 'Zypern'}
      ]
      'en': [
        {value: 'AF', name: 'Afghanistan'},
        {value: 'EG', name: 'Egypt'},
        {value: 'AX', name: 'Åland Islands'},
        {value: 'AL', name: 'Albania'},
        {value: 'DZ', name: 'Algeria'},
        {value: 'AS', name: 'American Samoa'},
        {value: 'VI', name: 'Virgin Islands, U.s.'},
        {value: 'AD', name: 'Andorra'},
        {value: 'AO', name: 'Angola'},
        {value: 'AI', name: 'Anguilla'},
        {value: 'AQ', name: 'Antarctica'},
        {value: 'AG', name: 'Antigua And Barbuda'},
        {value: 'GQ', name: 'Equatorial Guinea'},
        {value: 'AR', name: 'Argentina'},
        {value: 'AM', name: 'Armenia'},
        {value: 'AW', name: 'Aruba'},
        {value: 'AC', name: 'Ascension'},
        {value: 'AZ', name: 'Azerbaijan'},
        {value: 'ET', name: 'Ethiopia'},
        {value: 'AU', name: 'Australia'},
        {value: 'BS', name: 'Bahamas'},
        {value: 'BH', name: 'Bahrain'},
        {value: 'BD', name: 'Bangladesh'},
        {value: 'BB', name: 'Barbados'},
        {value: 'BE', name: 'Belgium'},
        {value: 'BZ', name: 'Belize'},
        {value: 'BJ', name: 'Benin'},
        {value: 'BM', name: 'Bermuda'},
        {value: 'BT', name: 'Bhutan'},
        {value: 'BO', name: 'Bolivia'},
        {value: 'BA', name: 'Bosnia And Herzegovina'},
        {value: 'BW', name: 'Botswana'},
        {value: 'BV', name: 'Bouvet Island'},
        {value: 'BR', name: 'Brazil'},
        {value: 'BN', name: 'Brunei Darussalam'},
        {value: 'BG', name: 'Bulgaria'},
        {value: 'BF', name: 'Burkina Faso'},
        {value: 'BI', name: 'Burundi'},
        {value: 'CL', name: 'Chile'},
        {value: 'CN', name: 'China'},
        {value: 'CK', name: 'Cook Islands'},
        {value: 'CR', name: 'Costa Rica'},
        {value: 'CI', name: 'CÔte D\'ivoire'},
        {value: 'DK', name: 'Denmark'},
        {value: 'DE', name: 'Germany'},
        {value: 'DG', name: 'Diego Garcia'},
        {value: 'DM', name: 'Dominica'},
        {value: 'DO', name: 'Dominican Republic'},
        {value: 'DJ', name: 'Djibouti'},
        {value: 'EC', name: 'Ecuador'},
        {value: 'SV', name: 'El Salvador'},
        {value: 'ER', name: 'Eritrea'},
        {value: 'EE', name: 'Estonia'},
        {value: 'EU', name: 'Europäische Union'},
        {value: 'FK', name: 'Falkland Islands (malvinas)'},
        {value: 'FO', name: 'Faroe Islands'},
        {value: 'FJ', name: 'Fiji'},
        {value: 'FI', name: 'Finland'},
        {value: 'FR', name: 'France'},
        {value: 'GF', name: 'French Guiana'},
        {value: 'PF', name: 'French Polynesia'},
        {value: 'GA', name: 'Gabon'},
        {value: 'GM', name: 'Gambia'},
        {value: 'GE', name: 'Georgia'},
        {value: 'GH', name: 'Ghana'},
        {value: 'GI', name: 'Gibraltar'},
        {value: 'GD', name: 'Grenada'},
        {value: 'GR', name: 'Greece'},
        {value: 'GL', name: 'Greenland'},
        {value: 'GB', name: 'Create Britain'},
        {value: 'CP', name: 'Guadeloupe'},
        {value: 'GU', name: 'Guam'},
        {value: 'GT', name: 'Guatemala'},
        {value: 'GG', name: 'Guernsey'},
        {value: 'GN', name: 'Guinea'},
        {value: 'GW', name: 'Guinea-bissau'},
        {value: 'GY', name: 'Guyana'},
        {value: 'HT', name: 'Haiti'},
        {value: 'HM', name: 'Heard Island And Mcdonald Islands'},
        {value: 'HN', name: 'Honduras'},
        {value: 'HK', name: 'Hong Kong'},
        {value: 'IN', name: 'India'},
        {value: 'ID', name: 'Indonesia'},
        {value: 'IQ', name: 'Iraq'},
        {value: 'IR', name: 'Iran, Islamic Republic Of'},
        {value: 'IE', name: 'Ireland'},
        {value: 'IS', name: 'Iceland'},
        {value: 'IL', name: 'Israel'},
        {value: 'IT', name: 'Italy'},
        {value: 'JM', name: 'Jamaica'},
        {value: 'JP', name: 'Japan'},
        {value: 'YE', name: 'Yemen'},
        {value: 'JE', name: 'Jersey'},
        {value: 'JO', name: 'Jordan'},
        {value: 'KY', name: 'Cayman Islands'},
        {value: 'KH', name: 'Cambodia'},
        {value: 'CM', name: 'Cameroon'},
        {value: 'CA', name: 'Canada'},
        {value: 'IC', name: 'Kanarische Inseln'},
        {value: 'CV', name: 'Cape Verde'},
        {value: 'KZ', name: 'Kazakhstan'},
        {value: 'QA', name: 'Qatar'},
        {value: 'KE', name: 'Kenya'},
        {value: 'KG', name: 'Kyrgyzstan'},
        {value: 'KI', name: 'Kiribati'},
        {value: 'CC', name: 'Cocos (keeling) Islands'},
        {value: 'CO', name: 'Colombia'},
        {value: 'KM', name: 'Comoros'},
        {value: 'CG', name: 'Congo'},
        {value: 'HR', name: 'Croatia'},
        {value: 'CU', name: 'Cuba'},
        {value: 'KW', name: 'Kuwait'},
        {value: 'LA', name: 'Lao People\'s Democratic Republic'},
        {value: 'LS', name: 'Lesotho'},
        {value: 'LV', name: 'Latvia'},
        {value: 'LB', name: 'Lebanon'},
        {value: 'LR', name: 'Liberia'},
        {value: 'LY', name: 'Libyan Arab Jamahiriya'},
        {value: 'LI', name: 'Liechtenstein'},
        {value: 'LT', name: 'Lithuania'},
        {value: 'LU', name: 'Luxembourg'},
        {value: 'MO', name: 'Macao'},
        {value: 'MG', name: 'Madagascar'},
        {value: 'MW', name: 'Malawi'},
        {value: 'MY', name: 'Malaysia'},
        {value: 'MV', name: 'Maldives'},
        {value: 'ML', name: 'Mali'},
        {value: 'MT', name: 'Malta'},
        {value: 'MA', name: 'Morocco'},
        {value: 'MH', name: 'Marshall Islands'},
        {value: 'MQ', name: 'Martinique'},
        {value: 'MR', name: 'Mauritania'},
        {value: 'MU', name: 'Mauritius'},
        {value: 'YT', name: 'Mayotte'},
        {value: 'MK', name: 'Macedonia, The Former Yugoslav Republic Of'},
        {value: 'MX', name: 'Mexico'},
        {value: 'FM', name: 'Micronesia'},
        {value: 'MD', name: 'Moldova'},
        {value: 'MC', name: 'Monaco'},
        {value: 'MN', name: 'Mongolia'},
        {value: 'MS', name: 'Montserrat'},
        {value: 'MZ', name: 'Mozambique'},
        {value: 'MM', name: 'Myanmar'},
        {value: 'NA', name: 'Namibia'},
        {value: 'NR', name: 'Nauru'},
        {value: 'NP', name: 'Nepal'},
        {value: 'NC', name: 'New Caledonia'},
        {value: 'NZ', name: 'New Zealand'},
        {value: 'NT', name: 'Neutrale Zone'},
        {value: 'NI', name: 'Nicaragua'},
        {value: 'NL', name: 'Netherlands'},
        {value: 'AN', name: 'Netherlands Antilles'},
        {value: 'NE', name: 'Niger'},
        {value: 'NG', name: 'Nigeria'},
        {value: 'NU', name: 'Niue'},
        {value: 'KP', name: 'North Korea'},
        {value: 'MP', name: 'Northern Mariana Islands'},
        {value: 'NF', name: 'Norfolk Island'},
        {value: 'NO', name: 'Norway'},
        {value: 'OM', name: 'Oman'},
        {value: 'AT', name: 'Austria'},
        {value: 'PK', name: 'Pakistan'},
        {value: 'PS', name: 'Palestinian Territory'},
        {value: 'PW', name: 'Palau'},
        {value: 'PA', name: 'Panama'},
        {value: 'PG', name: 'Papua New Guinea'},
        {value: 'PY', name: 'Paraguay'},
        {value: 'PE', name: 'Peru'},
        {value: 'PH', name: 'Philippines'},
        {value: 'PN', name: 'Pitcairn'},
        {value: 'PL', name: 'Poland'},
        {value: 'PT', name: 'Portugal'},
        {value: 'PR', name: 'Puerto Rico'},
        {value: 'RE', name: 'RÉunion'},
        {value: 'RW', name: 'Rwanda'},
        {value: 'RO', name: 'Romania'},
        {value: 'RU', name: 'Russian Federation'},
        {value: 'SB', name: 'Solomon Islands'},
        {value: 'ZM', name: 'Zambia'},
        {value: 'WS', name: 'Samoa'},
        {value: 'SM', name: 'San Marino'},
        {value: 'ST', name: 'Sao Tome And Principe'},
        {value: 'SA', name: 'Saudi Arabia'},
        {value: 'SE', name: 'Sweden'},
        {value: 'CH', name: 'Switzerland'},
        {value: 'SN', name: 'Senegal'},
        {value: 'CS', name: 'Serbien und Montenegro'},
        {value: 'SC', name: 'Seychelles'},
        {value: 'SL', name: 'Sierra Leone'},
        {value: 'ZW', name: 'Zimbabwe'},
        {value: 'SG', name: 'Singapore'},
        {value: 'SK', name: 'Slovakia'},
        {value: 'SI', name: 'Slovenia'},
        {value: 'SO', name: 'Somalia'},
        {value: 'ES', name: 'Spain'},
        {value: 'LK', name: 'Sri Lanka'},
        {value: 'SH', name: 'Saint Helena'},
        {value: 'KN', name: 'Saint Kitts And Nevis'},
        {value: 'LC', name: 'Saint Lucia'},
        {value: 'PM', name: 'Saint Pierre And Miquelon'},
        {value: 'VC', name: 'Saint Vincent/Grenadines'},
        {value: 'ZA', name: 'South Africa'},
        {value: 'SD', name: 'Sudan'},
        {value: 'KR', name: 'South Korea'},
        {value: 'SR', name: 'Suriname'},
        {value: 'SJ', name: 'Svalbard And Jan Mayen'},
        {value: 'SZ', name: 'Swaziland'},
        {value: 'SY', name: 'Syrian Arab Republic'},
        {value: 'TJ', name: 'Tajikistan'},
        {value: 'TW', name: 'Taiwan, Province Of China'},
        {value: 'TZ', name: 'Tanzania'},
        {value: 'TH', name: 'Thailand'},
        {value: 'TL', name: 'Timor-leste'},
        {value: 'TG', name: 'Togo'},
        {value: 'TK', name: 'Tokelau'},
        {value: 'TO', name: 'Tonga'},
        {value: 'TT', name: 'Trinidad And Tobago'},
        {value: 'TA', name: 'Tristan da Cunha'},
        {value: 'TD', name: 'Chad'},
        {value: 'CZ', name: 'Czech Republic'},
        {value: 'TN', name: 'Tunisia'},
        {value: 'TR', name: 'Turkey'},
        {value: 'TM', name: 'Turkmenistan'},
        {value: 'TC', name: 'Turks And Caicos Islands'},
        {value: 'TV', name: 'Tuvalu'},
        {value: 'UG', name: 'Uganda'},
        {value: 'UA', name: 'Ukraine'},
        {value: 'HU', name: 'Hungary'},
        {value: 'UY', name: 'Uruguay'},
        {value: 'UZ', name: 'Uzbekistan'},
        {value: 'VU', name: 'Vanuatu'},
        {value: 'VA', name: 'Holy See (vatican City State)'},
        {value: 'VE', name: 'Venezuela'},
        {value: 'AE', name: 'United Arab Emirates'},
        {value: 'US', name: 'United States'},
        {value: 'VN', name: 'Viet Nam'},
        {value: 'WF', name: 'Wallis And Futuna'},
        {value: 'CX', name: 'Christmas Island'},
        {value: 'BY', name: 'Belarus'},
        {value: 'EH', name: 'Western Sahara'},
        {value: 'CF', name: 'Central African Republic'},
        {value: 'CY', name: 'Cyprus'}
      ]


    $scope.currentPage = $state.current.name;

    $scope.donate = {}
    $scope.record = {}
    $scope.donate.donator = {};
    $scope.donate.donator.address = {};

    $scope.donate.paymentInterval = $scope.paymentIntervals[0]
    $scope.donate.paymentReason = $scope.paymentReasons[0]
    $scope.donate.donateAs = $scope.donateAsItems[0]
    $scope.donate.donator.title = $scope.titles[0]

    if ($scope.donate.paymentValue != undefined && $scope.donate.paymentValue < 0)
      $scope.donate.paymentValue = Math.abs($scope.donate.paymentValue)

    $scope.translateComboBoxes = -> (
      _.map($scope.paymentIntervals, (paymentInterval, id) ->
        $translate(paymentInterval.name).then((text) ->
          paymentInterval.name = text
          return
        )
      )

      _.map($scope.paymentReasons, (paymentReason, id) ->
        $translate(paymentReason.name).then((text) ->
          paymentReason.name = text
          return
        )
      )

      _.map($scope.donateAsItems, (item, id) ->
        $translate(item.name).then((text) ->
          item.name = text
          return
        )
      )
      _.map($scope.titles, (item, id) ->
        $translate(item.name).then((text) ->
          item.name = text
          return
        )
      )

      currentLanguage = $translate.proposedLanguage() || $translate.use()
      $scope.countries = countries[currentLanguage]

      $scope.donate.language = currentLanguage

      $scope.donate.donator.address.country = _.first(_.filter(countries.de, (c) ->
        c.value == 'DE'
      ))

      return
    )

    $scope.validateStep = ($event) -> (
      if !$('.payment-form').isValid({'de', 'en'}, $.formUtils.defaultConfig(), true)
        $event.preventDefault()
        return false
      return true
    )

    $scope.validateStep1 = ($event) -> (
      if (! $scope.validateStep($event))
        $event.preventDefault()
        return

      $event.preventDefault()

      $('body').addClass('loading')

      $http(
        method: 'POST'
        url: '/api/services/checkcard.php'
        data: $.param($scope.donate)
        headers: 'Content-Type': 'application/x-www-form-urlencoded')
      .success (data) ->
        $('body').removeClass('loading')
        if !data.success
          # if not successful, bind errors to error variables
          $('.payment-alert #show-msg').text(data.message)
          $('.payment-alert').fadeIn()
        else
          $state.go('root.donate.step2', $stateParams, {reload: false});
        return
        
      return true
    )

    $scope.processForm = () -> (
      $('body').addClass('loading')

      $http(
        method: 'POST'
        url: '/api/services/process.php'
        data: $.param($scope.donate)
        headers: 'Content-Type': 'application/x-www-form-urlencoded')
      .success (data) ->
        $('body').removeClass('loading')
        if !data.success
          # if not successful, bind errors to error variables
          $('.payment-alert #show-msg').text(data.message)
          $('.payment-alert').fadeIn()
        else
          # if successful, bind success message to message
          $('#confirm-dialog').modal('show');
        return
    )


    $scope.translateComboBoxes()

    return
]
