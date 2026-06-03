
const cpus = [

    // Intel Sockel 1851 (Die neuesten Intel-CPUs )
    {name: "Intel Core Ultra 9 285K", socket: "1851", ram: "DDR5", rating: "96 (A+)", cinebench24single: "142", cinebench24multi: "2510", cores: "24 (8+16E)", tdpnormal: "125W", tdpboost: "250W", L3cache: "36MB", price: ""},
    {name: "Intel Core Ultra 7 270K Plus", socket: "1851", ram: "DDR5", rating: "98 (A+)", cinebench24single: "145", cinebench24multi: "2482", cores:"24 (8+16E)", tdpnormal: "125 W", tdpboost: "250 W", L3cache: "36MB", price: ""},
    {name: "Intel Core Ultra 5 245K", socket: "1851", ram: "DDR5", rating: "79 (B)", cinebench24single: "122", cinebench24multi: "1460", cores: "14 (6+8E)", tdpnormal: "125W", tdpboost: "159W", L3cache: "24MB", price: ""},

    // AMD Sockel AM5 (Aktuelle AMD-Generation - nur DDR5)
    {name: "AMD Ryzen 9 9950x3d2(Dual Edition)", socket: "AM5", ram: "DDR5", rating: "97 (A+)", cinebench24single: "141", cinebench24multi: "2529", cores: "16 (16P)", tdpnormal: "200W", tdpboost: "270", L3cache: "192MB", price: ""},
    {name: "AMD Ryzen 9 9950X3D", socket: "AM5", ram: "DDR5", rating: "94 (A+)", cinebench24single: "138", cinebench24multi: "2456", cores: "16(16P)", tdpnormal:"170W", tdpboost: "230W", L3cache: "128MB", price: ""},
    {name: "AMD Ryzen 9 9900X", socket: "AM5", ram: "DDR5", rating: "89 (A)", cinebench24single: "134", cinebench24multi: "1980", cores: "12 (12P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 7 9800X3D", socket: "AM5", ram: "DDR5", rating: "92 (A+)", cinebench24single: "135", cinebench24multi: "1540", cores: "8 (8P)", tdpnormal: "120W", tdpboost: "162W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 9700X", socket: "AM5", ram: "DDR5", rating: "83 (B)", cinebench24single: "130", cinebench24multi: "1240", cores: "8 (8P)", tdpnormal: "65W", tdpboost: "105W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 9600X", socket: "AM5", ram: "DDR5", rating: "75 (C)", cinebench24single: "126", cinebench24multi: "1020", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "105W", L3cache: "32MB", price: ""},

    // AMD Sockel AM4 (Aeltere AMD-Generation, aber noch voll im Verkauf - nur DDR4)
    {name: "AMD Ryzen 9 5950X", socket: "AM4", ram: "DDR4", rating: "79 (B)", cinebench24single: "101", cinebench24multi: "1510", cores: "16 (16P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 9 5900X", socket: "AM4", ram: "DDR4", rating: "71 (C)", cinebench24single: "100", cinebench24multi: "1220", cores: "12 (12P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "64MB", price: ""},
    {name: "AMD Ryzen 7 5800X3D", socket: "AM4", ram: "DDR4", rating: "68 (C)", cinebench24single: "98", cinebench24multi: "910", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 5700X3D", socket: "AM4", ram: "DDR4", rating: "64 (C)", cinebench24single: "92", cinebench24multi: "860", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "96MB", price: ""},
    {name: "AMD Ryzen 7 5800X", socket: "AM4", ram: "DDR4", rating: "62 (D)", cinebench24single: "99", cinebench24multi: "890", cores: "8 (8P)", tdpnormal: "105W", tdpboost: "142W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 7 5700X", socket: "AM4", ram: "DDR4", rating: "60 (D)", cinebench24single: "95", cinebench24multi: "840", cores: "8 (8P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5600X", socket: "AM4", ram: "DDR4", rating: "52 (D)", cinebench24single: "94", cinebench24multi: "620", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5600", socket: "AM4", ram: "DDR4", rating: "50 (D)", cinebench24single: "92", cinebench24multi: "600", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "32MB", price: ""},
    {name: "AMD Ryzen 5 5500", socket: "AM4", ram: "DDR4", rating: "44 (E)", cinebench24single: "82", cinebench24multi: "530", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "16MB", price: ""},
    {name: "AMD Ryzen 5 4500", socket: "AM4", ram: "DDR4", rating: "38 (F)", cinebench24single: "72", cinebench24multi: "450", cores: "6 (6P)", tdpnormal: "65W", tdpboost: "88W", L3cache: "8MB", price: ""}
];
