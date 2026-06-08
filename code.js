// Master-Datenbank für den PC-Konfigurator (Alle gängigen Gaming-CPUs)
const cpus = [
    // =========================================================================
    // 1. AMD SOCKEL AM5 (Aktuelle Top-Gaming-Plattform – Nur DDR5)
    // =========================================================================
    // Ryzen 9000er Serie (Neueste Generation & X3D Gaming-Könige)
    {name: "AMD Ryzen 9 9950x3d2 (Dual Edition)", socket: "AM5", ram: "DDR5", rating: "97 (A+)", cinebench24single: "141", cinebench24multi: "2529", cores: "16 (16P)", tdpnormal: "200W", tdpboost: "270W", L3cache: "192MB", price: ""},
    {name: "AMD Ryzen 9 9950X3D", socket: "AM5", ram: "DDR5", rating: "94 (A+)", cinebench24single: "138", cinebench24multi: "2456", cores: "16 (16P)", tdpnormal: "170W", tdpboost: "230W", L3cache: "128MB", price: ""},
    {name: "AMD Ryzen 9 9950X", socket: "AM5", ram: "DDR5", rating: "93 (A+)", cinebench24single: "136", cinebench24multi: "2410", cores: "16 (16P)", tdpnormal: "170W", tdpboost: "230W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 9 9900X", socket: "AM5", ram: "DDR5", rating: "89 (A)", cinebench24single: "134", cinebench24multi: "1980", cores: "12 (12P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 7 9850X3D", socket: "AM5", ram: "DDR5", rating: "94 (A+)", cinebench24single: "137", cinebench24multi: "1590", cores: "8 (8P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 9800X3D", socket: "AM5", ram: "DDR5", rating: "92 (A+)", cinebench24single: "135", cinebench24multi: "1540", cores: "8 (8P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 9700X", socket: "AM5", ram: "DDR5", rating: "83 (B)", cinebench24single: "130", cinebench24multi: "1240", cores: "8 (8P)", tdpnormal: "65W", tdpboost: "105W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 9600X", socket: "AM5", ram: "DDR5", rating: "75 (C)", cinebench24single: "126", cinebench24multi: "1020", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "105W", L3cache: "32MB", price: ""},
    
    // Ryzen 7000er Serie (Preiskracher für Gaming)
    {name: "AMD Ryzen 9 7950X3D", socket: "AM5", ram: "DDR5", rating: "88 (A)", cinebench24single: "122", cinebench24multi: "2200", cores: "16 (16P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "128MB", price: ""},
    {name: "AMD Ryzen 9 7900X3D", socket: "AM5", ram: "DDR5", rating: "82 (B)", cinebench24single: "118", cinebench24multi: "1650", cores: "12 (12P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "128MB", price: ""},
    {name: "AMD Ryzen 7 7800X3D", socket: "AM5", ram: "DDR5", rating: "82 (B)", cinebench24single: "115", cinebench24multi: "1110", cores: "8 (8P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 7700X", socket: "AM5", ram: "DDR5", rating: "76 (C)", cinebench24single: "117", cinebench24multi: "1160", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 7600X", socket: "AM5", ram: "DDR5", rating: "66 (C)", cinebench24single: "114", cinebench24multi: "890", cores: "6 (6P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 7600", socket: "AM5", ram: "DDR5", rating: "63 (D)", cinebench24single: "110", cinebench24multi: "840", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 7500F", socket: "AM5", ram: "DDR5", rating: "60 (D)", cinebench24single: "106", cinebench24multi: "810", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},

    // =========================================================================
    // 2. INTEL SOCKEL LGA1851 (Core Ultra Generation – Nur DDR5)
    // =========================================================================
    {name: "Intel Core Ultra 9 285K", socket: "1851", ram: "DDR5", rating: "96 (A+)", cinebench24single: "142", cinebench24multi: "2510", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "250W", L3cache: "36MB", price: ""},
    {name: "Intel Core Ultra 7 270K Plus", socket: "1851", ram: "DDR5", rating: "98 (A+)", cinebench24single: "145", cinebench24multi: "2482", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "250W", L3cache: "36MB", price: ""},
    {name: "Intel Core Ultra 7 265K", socket: "1851", ram: "DDR5", rating: "88 (A)", cinebench24single: "135", cinebench24multi: "2070", cores: "20 (8+12E)", tdpnormal: "125W", tdpboost: "250W", L3cache: "30MB", price: ""},
    {name: "Intel Core Ultra 7 265KF", socket: "1851", ram: "DDR5", rating: "88 (A)", cinebench24single: "135", cinebench24multi: "2070", cores: "20 (8+12E)", tdpnormal: "125W", tdpboost: "250W", L3cache: "30MB", price: ""},
    {name: "Intel Core Ultra 5 245K", socket: "1851", ram: "DDR5", rating: "79 (B)", cinebench24single: "122", cinebench24multi: "1460", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "159W", L3cache: "24MB", price: ""},
    {name: "Intel Core Ultra 5 245KF", socket: "1851", ram: "DDR5", rating: "79 (B)", cinebench24single: "122", cinebench24multi: "1460", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "159W", L3cache: "24MB", price: ""},

    // =========================================================================
    // 3. INTEL SOCKEL LGA1700 (12./13./14. Generation – Unterstützt DDR4 oder DDR5)
    // =========================================================================
    // Core i9 (Brutale Leistung)
    {name: "Intel Core i9-14900K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "91 (A)", cinebench24single: "132", cinebench24multi: "2340", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "36MB", price: ""},
    {name: "Intel Core i9-14900KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "91 (A)", cinebench24single: "132", cinebench24multi: "2340", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "36MB", price: ""},
    {name: "Intel Core i9-13900K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "89 (A)", cinebench24single: "128", cinebench24multi: "2210", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "36MB", price: ""},
    {name: "Intel Core i9-13900KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "89 (A)", cinebench24single: "128", cinebench24multi: "2210", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "36MB", price: ""},
    {name: "Intel Core i9-12900K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "78 (B)", cinebench24single: "115", cinebench24multi: "1590", cores: "16 (8+8E)", tdpnormal: "125W", tdpboost: "241W", L3cache: "30MB", price: ""},

    // Core i7 (Gehobene Gaming-Klasse)
    {name: "Intel Core i7-14700K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "86 (B)", cinebench24single: "128", cinebench24multi: "2080", cores: "20 (8+12E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "33MB", price: ""},
    {name: "Intel Core i7-14700KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "86 (B)", cinebench24single: "128", cinebench24multi: "2080", cores: "20 (8+12E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "33MB", price: ""},
    {name: "Intel Core i7-13700K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "81 (B)", cinebench24single: "124", cinebench24multi: "1890", cores: "16 (8+8E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "30MB", price: ""},
    {name: "Intel Core i7-13700KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "81 (B)", cinebench24single: "124", cinebench24multi: "1890", cores: "16 (8+8E)", tdpnormal: "125W", tdpboost: "253W", L3cache: "30MB", price: ""},
    {name: "Intel Core i7-12700K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "72 (C)", cinebench24single: "112", cinebench24multi: "1310", cores: "12 (8+4E)", tdpnormal: "125W", tdpboost: "190W", L3cache: "25MB", price: ""},

    // Core i5 (Absoluter Gaming-Mainstream)
    {name: "Intel Core i5-14600K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "78 (B)", cinebench24single: "120", cinebench24multi: "1420", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "181W", L3cache: "24MB", price: ""},
    {name: "Intel Core i5-14600KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "78 (B)", cinebench24single: "120", cinebench24multi: "1420", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "181W", L3cache: "24MB", price: ""},
    {name: "Intel Core i5-13600K", socket: "LGA1700", ram: "DDR4/DDR5", rating: "74 (C)", cinebench24single: "117", cinebench24multi: "1380", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "181W", L3cache: "24MB", price: ""},
    {name: "Intel Core i5-13600KF", socket: "LGA1700", ram: "DDR4/DDR5", rating: "74 (C)", cinebench24single: "117", cinebench24multi: "1380", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "181W", L3cache: "24MB", price: ""},
    {name: "Intel Core i5-14400F", socket: "LGA1700", ram: "DDR4/DDR5", rating: "63 (D)", cinebench24single: "107", cinebench24multi: "1010", cores: "10 (6+4E)", tdpnormal: "65W", tdpboost: "148W", L3cache: "20MB", price: ""},
    {name: "Intel Core i5-13400F", socket: "LGA1700", ram: "DDR4/DDR5", rating: "61 (D)", cinebench24single: "105", cinebench24multi: "980", cores: "10 (6+4E)", tdpnormal: "65W", tdpboost: "148W", L3cache: "20MB", price: ""},
    {name: "Intel Core i5-12400F", socket: "LGA1700", ram: "DDR4/DDR5", rating: "54 (D)", cinebench24single: "100", cinebench24multi: "760", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "117W", L3cache: "18MB", price: ""},

    // Core i3 (Das absolute Minimum für Budget-FullHD)
    {name: "Intel Core i3-14100", socket: "LGA1700", ram: "DDR4/DDR5", rating: "48 (E)", cinebench24single: "102", cinebench24multi: "530", cores: "4 (4P)", tdpnormal: "60W", tdpboost: "110W", L3cache: "12MB", price: ""},
    {name: "Intel Core i3-12100F", socket: "LGA1700", ram: "DDR4/DDR5", rating: "42 (E)", cinebench24single: "93", cinebench24multi: "490", cores: "4 (4P)", tdpnormal: "60W", tdpboost: "89W", L3cache: "12MB", price: ""},

    // =========================================================================
    // 4. AMD SOCKEL AM4 (Die legendäre Sparfuchs-Gaming-Plattform – Nur DDR4)
    // =========================================================================
    {name: "AMD Ryzen 9 5950X", socket: "AM4", ram: "DDR4", rating: "79 (B)", cinebench24single: "101", cinebench24multi: "1510", cores: "16 (16P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 9 5900X", socket: "AM4", ram: "DDR4", rating: "71 (C)", cinebench24single: "100", cinebench24multi: "1220", cores: "12 (12P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 7 5800X3D", socket: "AM4", ram: "DDR4", rating: "68 (C)", cinebench24single: "98", cinebench24multi: "910", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 5700X3D", socket: "AM4", ram: "DDR4", rating: "64 (C)", cinebench24single: "92", cinebench24multi: "860", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 5800X", socket: "AM4", ram: "DDR4", rating: "62 (D)", cinebench24single: "99", cinebench24multi: "890", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 7 5700X", socket: "AM4", ram: "DDR4", rating: "60 (D)", cinebench24single: "95", cinebench24multi: "840", cores: "8 (8P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5600X", socket: "AM4", ram: "DDR4", rating: "52 (D)", cinebench24single: "94", cinebench24multi: "620", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5600", socket: "AM4", ram: "DDR4", rating: "50 (D)", cinebench24single: "92", cinebench24multi: "600", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5500", socket: "AM4", ram: "DDR4", rating: "44 (E)", cinebench24single: "82", cinebench24multi: "530", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "16MB", price: ""}
];
