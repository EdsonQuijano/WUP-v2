const CAMPUS_BUILDINGS = {
    "type": "FeatureCollection",
    "features": [
        // ENGINEERING BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "name": "Engineering Building",
                "type": "all",
                "category": "academic",
                "office": "College of Engineering and Computer Technology",
                "floor": "2 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Smart Lab", "Classrooms", "Faculty Rooms"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/engineering/exterior.jpg",
                        "title": "Building Exterior",
                        "description": "Main entrance, Ground Floor"
                    },
                    {
                        "url": "assets/images/engineering/computer-lab.jpg",
                        "title": "MAC Laboratory",
                        "description": "MAC Lab, 2nd Floor Rm. 201"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.9750025463747, 15.484898454275736],
                        [120.97521367501344, 15.48455901156295],
                        [120.975329821368, 15.484619564133467],
                        [120.97510270324364, 15.48497419664065],
                        [120.97499419996825, 15.484915211438462],
                        [120.9750025463747, 15.484898454275736]
                    ]
                ]
            }
        },

        // COMPUTER SCIENCE BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 2,
                "name": "Computer Science Building",
                "type": "all",
                "category": "academic",
                "office": "College of Computer Science",
                "floor": "5 Floors",
                "description": "",// TO DO: mag-isip ng description!!!
                "facilities": ["Computer Labs", "Lecture Rooms", "Faculty Office"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/cs-building/exterior.jpg",
                        "title": "CS Building Exterior",
                        "description": "Main entrance"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97457963044019, 15.485655789566565],
                        [120.97494613184756, 15.485029083607728],
                        [120.9750636156931, 15.485097789270384],
                        [120.97489647075065, 15.485352092785732],
                        [120.97493309476368, 15.485376716865872],
                        [120.97487943632467, 15.48545961791362],
                        [120.97484536747436, 15.485442381064871],
                        [120.97469546453118, 15.485712424862484],
                        [120.97457963044019, 15.485655789566565]
                    ]
                ]
            }
        },

        // WESLEY DIVINITY SCHOOL DORMITORY
        {
            "type": "Feature",
            "properties": {
                "id": 3,
                "name": "Wesley Divinity School Dormitory",
                "type": "all",
                "category": "facilities",
                "office": "Wesley Divinity School",
                "floor": "2 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Dormitory", "Student Housing"],
                "color": "#2d5f3f",
                "fillColor": "#5a9f6f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/dormitory/exterior.jpg",
                        "title": "Dormitory Exterior",
                        "description": "Student housing"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97432238860335, 15.486076326628222],
                        [120.9743976987607, 15.485964075640922],
                        [120.97438163259187, 15.485954398828412],
                        [120.97452221155396, 15.485721187520625],
                        [120.97463367058543, 15.485782151497261],
                        [120.97448706681342, 15.486022136503493],
                        [120.9744710006467, 15.486014395056074],
                        [120.97440372357266, 15.486116969212134],
                        [120.97432238860335, 15.486076326628222]
                    ]
                ]
            }
        },

        // ELEMENTARY BUILDING ANNEX
        {
            "type": "Feature",
            "properties": {
                "id": 4,
                "name": "Elementary Building Annex",
                "type": "all",
                "category": "academic",
                "office": "Elementary Department",
                "floor": "1 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Classrooms", "Faculty Room"],
                "color": "#2d5f3f",
                "fillColor": "#6aaf7f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/elementary-annex/exterior.jpg",
                        "title": "Elementary Annex",
                        "description": "Elementary classrooms"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97456234293719, 15.486230538309542],
                        [120.97459748767562, 15.486169574465123],
                        [120.97491881101462, 15.486338918434555],
                        [120.97487462905497, 15.486435686355364],
                        [120.97456736361357, 15.486273116223174],
                        [120.97458342978035, 15.486244085828659],
                        [120.97456234293719, 15.486230538309542]
                    ]
                ]
            }
        },

        // ELEMENTARY & PREPARATORY BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 5,
                "name": "Elementary & Preparatory Building",
                "type": "all",
                "category": "academic",
                "office": "Elementary & Preparatory Department",
                "floor": "3 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Classrooms", "Prep Rooms", "Play Area"],
                "color": "#2d5f3f",
                "fillColor": "#6aaf7f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/elementary/exterior.jpg",
                        "title": "Elementary Building",
                        "description": "Elementary and prep classrooms"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97483739543736, 15.486085334141663],
                        [120.97494383379251, 15.48586083211596],
                        [120.97498399920937, 15.485875347341121],
                        [120.97502115222125, 15.485793094388],
                        [120.97514265260742, 15.485836640072776],
                        [120.97499906124045, 15.48615403945442],
                        [120.97483739543736, 15.486085334141663]
                    ]
                ]
            }
        },

        // JOB SKILLS BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 6,
                "name": "Job Skills Building",
                "type": "all",
                "category": "academic",
                "office": "Skills Training Center",
                "floor": "2 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Training Rooms", "Workshop Areas"],
                "color": "#2d5f3f",
                "fillColor": "#5a9f6f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/job-skills/exterior.jpg",
                        "title": "Job Skills Building",
                        "description": "Skills training center"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97493680484484, 15.485851155299656],
                        [120.97488358566625, 15.485952761854179],
                        [120.97480024242549, 15.48591211923896],
                        [120.97485446573978, 15.48580954498128],
                        [120.97493680484484, 15.485851155299656]
                    ]
                ]
            }
        },

        // SHARE BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 7,
                "name": "Share Building",
                "type": "all",
                "category": "facilities",
                "office": "Share Center",
                "floor": "2 Floor",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["", ""],
                "color": "#2d5f3f",
                "fillColor": "#5a9f6f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/share-building/exterior.jpg",
                        "title": "Share Building",
                        "description": "Community resource center"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97486008980587, 15.485778362458689],
                        [120.97496633967171, 15.48559576215139],
                        [120.97507170411996, 15.485644398698142],
                        [120.97496633967171, 15.485841504583178],
                        [120.97486008980587, 15.485778362458689]
                    ]
                ]
            }
        },

        // HIGH SCHOOL BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 8,
                "name": "High School Building",
                "type": "all",
                "category": "academic",
                "office": "High School Department",
                "floor": "3 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Classrooms", "Science Labs", "Faculty Room"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/high-school/exterior.jpg",
                        "title": "High School Building",
                        "description": "Junior and senior high school"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97503122838742, 15.485779344938052],
                        [120.9751653101282, 15.485487517701827],
                        [120.9751369768311, 15.485474718602504],
                        [120.97515468514086, 15.485436321298906],
                        [120.97517859136093, 15.485444854033133],
                        [120.975296351628, 15.485200817679413],
                        [120.97540791398654, 15.485245187947413],
                        [120.97515164490181, 15.485821155266478],
                        [120.97503122838742, 15.485779344938052]
                    ]
                ]
            }
        },

        // UNIVERSITY GYMNASIUM
        {
            "type": "Feature",
            "properties": {
                "id": 9,
                "name": "University Gymnasium",
                "type": "more",
                "category": "facilities",
                "office": "Sports & Athletics",
                "floor": "1 Floor",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Basketball Court", "Stage"],
                "color": "#2d5f3f",
                "fillColor": "#7abf8f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/gymnasium/exterior.jpg",
                        "title": "University Gymnasium",
                        "description": "Main sports facility"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97582791932484, 15.484962650420158],
                        [120.97624956356839, 15.485035888415709],
                        [120.97619579928966, 15.485314879401187],
                        [120.97577277647446, 15.485237655919846],
                        [120.97582791932484, 15.484962650420158]
                    ]
                ]
            }
        },

        // ADMIN BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 10,
                "name": "Admin Building",
                "type": "all",
                "category": "admin",
                "office": "University Administration",
                "floor": "4 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Registrar", "Accounting", "Cashier", "President's Office"],
                "color": "#2d5f3f",
                "fillColor": "#3a7a50",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/admin/exterior.jpg",
                        "title": "Administration Building",
                        "description": "Main administrative offices"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97552592324098, 15.485171422738404],
                        [120.97557945731131, 15.484917437298748],
                        [120.97582104695891, 15.48495447686112],
                        [120.97578673024742, 15.485114540609885],
                        [120.97565632674417, 15.485088083800036],
                        [120.97563161871147, 15.485193911017689],
                        [120.97552592324098, 15.485171422738404]
                    ]
                ]
            }
        },

        // UNIVERSITY CHAPEL
        {
            "type": "Feature",
            "properties": {
                "id": 11,
                "name": "University Chapel",
                "type": "more",
                "category": "facilities",
                "office": "Campus Ministry",
                "floor": "1 Floor",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Chapel"],
                "color": "#2d5f3f",
                "fillColor": "#7abf8f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/chapel/exterior.jpg",
                        "title": "University Chapel",
                        "description": "Main worship area"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.9759636260415, 15.483991210744463],
                        [120.97629581180848, 15.484107621297454],
                        [120.97624365040684, 15.484259748626016],
                        [120.97590597396612, 15.484131432538703],
                        [120.9759636260415, 15.483991210744463]
                    ]
                ]
            }
        },

        // ACADEMIC BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 12,
                "name": "Academic Building",
                "type": "all",
                "category": "academic",
                "office": "College of Arts and Sciences, College of Business and Accountancy",
                "floor": "4 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Classrooms", "Lecture Halls", "Faculty Offices"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/academic/exterior.jpg",
                        "title": "Academic Building",
                        "description": "General academic classrooms"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97646476354294, 15.48449257918098],
                        [120.97634224298338, 15.484943553477947],
                        [120.97621972242553, 15.484914035190641],
                        [120.97626736930908, 15.484746764814687],
                        [120.97622823079621, 15.484733645563963],
                        [120.97625375591377, 15.484643450691195],
                        [120.9762945960997, 15.484653290133636],
                        [120.97634394465814, 15.484463060828503],
                        [120.97646476354294, 15.48449257918098]
                    ]
                ]
            }
        },

        // EZE BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 13,
                "name": "Eze Building",
                "type": "all",
                "category": "academic",
                "office": "College of Education",
                "floor": "3 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Classrooms", "Offices"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/eze/exterior.jpg",
                        "title": "Eze Building",
                        "description": "Academic building"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97634394466041, 15.484463641262337],
                        [120.97640800479178, 15.484270419519135],
                        [120.97637839379286, 15.484264078134373],
                        [120.97639731193203, 15.48419353021508],
                        [120.97642610040123, 15.48419828625569],
                        [120.97648038723156, 15.484029446760061],
                        [120.97660458891954, 15.484059568370384],
                        [120.9764646727213, 15.484492061653285],
                        [120.97634394466041, 15.484463641262337]
                    ]
                ]
            }
        },

        // JJDG AUDITORIUM & MAIN LIBRARY BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 14,
                "name": "JJDG Auditorium & Main Library Building",
                "type": "library",
                "category": "academic",
                "office": "Library Services & Auditorium",
                "floor": "4 Floors",
                "description": "", /// TO DO: mag-isip ng description!!!
                "facilities": ["Library", "Auditorium", "Reading Areas"],
                "color": "#2d5f3f",
                "fillColor": "#5a9f6f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/library/exterior.jpg",
                        "title": "Library & Auditorium",
                        "description": "Main library and event venue"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97521558745456, 15.484548586533066],
                        [120.97543022561888, 15.484185059158307],
                        [120.97557794874268, 15.484259848078324],
                        [120.97536399132889, 15.48462862365733],
                        [120.97521558745456, 15.484548586533066]
                    ]
                ]
            }
        },

        // COLLEGE OF NURSING BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 15,
                "name": "College of Nursing Building",
                "type": "all",
                "category": "academic",
                "office": "College of Nursing",
                "floor": "2 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Nursing Labs", "Classrooms", "Skills Laboratory"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/nursing/exterior.jpg",
                        "title": "Nursing Building",
                        "description": "College of Nursing facilities"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.975433553561, 15.484174746791581],
                        [120.97565535191308, 15.483783356483798],
                        [120.97576325381493, 15.483845459054223],
                        [120.97554445273704, 15.484233960758715],
                        [120.975433553561, 15.484174746791581]
                    ]
                ]
            }
        },

        // GUEST HOUSE
        {
            "type": "Feature",
            "properties": {
                "id": 16,
                "name": "Guest House",
                "type": "more",
                "category": "facilities",
                "office": "Guest Accommodations",
                "floor": "1 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["", ""],
                "color": "#2d5f3f",
                "fillColor": "#7abf8f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/guesthouse/exterior.jpg",
                        "title": "Guest House",
                        "description": "Visitor accommodations"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97566210176859, 15.483775580117282],
                        [120.97579520438927, 15.4835540344109],
                        [120.97590537588951, 15.483606128662132],
                        [120.9757660954283, 15.483828666583236],
                        [120.97566210176859, 15.483775580117282]
                    ]
                ]
            }
        },

        // CHTM BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 17,
                "name": "CHTM Building",
                "type": "all",
                "category": "academic",
                "office": "College of Hospitality & Tourism Management",
                "floor": "3 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Training Kitchen", "Classrooms", "Restaurant Lab"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/chtm/exterior.jpg",
                        "title": "CHTM Building",
                        "description": "Hospitality and tourism management"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97577326211331, 15.483523329017231],
                        [120.97582634390398, 15.483415902841045],
                        [120.97585023071082, 15.48342357614132],
                        [120.97591215946903, 15.483311034377763],
                        [120.97588561857185, 15.483297392947833],
                        [120.97593604627406, 15.483196787373814],
                        [120.97615633571104, 15.483311886967329],
                        [120.97610590800883, 15.483395440706175],
                        [120.97608467529221, 15.483382651871054],
                        [120.97600505260448, 15.483528444548398],
                        [120.9760307088049, 15.48354123337451],
                        [120.9759838198878, 15.483628197372894],
                        [120.97577326211331, 15.483523329017231]
                    ]
                ]
            }
        },

        // FOODCOURT & ALUMNI AFFAIRS BUILDING
        {
            "type": "Feature",
            "properties": {
                "id": 18,
                "name": "Foodcourt & Alumni Affairs Building",
                "type": "cafeteria",
                "category": "services",
                "office": "Food Services & Alumni Relations",
                "floor": "1 Floor",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Food Court", "Dining Area", "Alumni Office"],
                "color": "#2d5f3f",
                "fillColor": "#6aaf7f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/foodcourt/exterior.jpg",
                        "title": "Food Court",
                        "description": "Main dining facility"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97634955180206, 15.48371835507362],
                        [120.97651082650214, 15.483266752620281],
                        [120.97670861622834, 15.483331267317055],
                        [120.97654277715043, 15.483785802108827],
                        [120.97634955180206, 15.48371835507362]
                    ]
                ]
            }
        },

        // DR. JORGE BOCOBO HALL
        {
            "type": "Feature",
            "properties": {
                "id": 19,
                "name": "Dr. Jorge Bocobo Hall",
                "type": "all",
                "category": "academic",
                "office": "Academic Hall",
                "floor": "4 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Lecture Halls", "Classrooms"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/bocobo-hall/exterior.jpg",
                        "title": "Bocobo Hall",
                        "description": "Academic lecture hall"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.9759326320027, 15.483873883935274],
                        [120.97597827578466, 15.483765382218095],
                        [120.97649100761674, 15.483964790735044],
                        [120.97644688529294, 15.484076224822019],
                        [120.9759326320027, 15.483873883935274]
                    ]
                ]
            }
        },

        // DR. GUMERSINDO GARCIA HALL
        {
            "type": "Feature",
            "properties": {
                "id": 20,
                "name": "Dr. Gumersindo Garcia Hall",
                "type": "all",
                "category": "academic",
                "office": "Academic Hall",
                "floor": "4 Floors",
                "description": "", // TO DO: mag-isip ng description!!!
                "facilities": ["Lecture Halls", "Classrooms"],
                "color": "#2d5f3f",
                "fillColor": "#4a8f5f",
                "fillOpacity": 0.6,
                "images": [
                    {
                        "url": "assets/images/garcia-hall/exterior.jpg",
                        "title": "Garcia Hall",
                        "description": "Academic building"
                    }
                ]
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [120.97601022643312, 15.483725793740518],
                        [120.97605434875686, 15.483612893223494],
                        [120.97656708058884, 15.483816700605345],
                        [120.97652600118312, 15.48392226981754],
                        [120.97601022643312, 15.483725793740518]
                    ]
                ]
            }
        }
    ]
};
// COLOR SCHEMES FOR DIFFERENT BUILDING TYPES
const BUILDING_COLORS = {
    academic: {
        color: '#2d5f3f',
        fillColor: '#65b37cff',
        fillOpacity: 0.9
    },
    admin: {
        color: '#2d5f3f',
        fillColor: '#3a7a50',
        fillOpacity: 0.6
    },
    services: {
        color: '#2d5f3f',
        fillColor: '#6aaf7f',
        fillOpacity: 0.6
    },
    facilities: {
        color: '#2d5f3f',
        fillColor: '#5a9f6f',
        fillOpacity: 0.6
    }
};

function getBuildingById(id) {
    return CAMPUS_BUILDINGS.features.find(
        building => building.properties.id === id
    );
}

function getBuildingsByType(type) {
    if (type === 'all') {
        return CAMPUS_BUILDINGS.features;
    }
    return CAMPUS_BUILDINGS.features.filter(
        building => building.properties.type === type
    );
}

function searchBuildings(query) {
    const searchTerm = query.toLowerCase();
    return CAMPUS_BUILDINGS.features.filter(building => {
        const props = building.properties;
        return props.name.toLowerCase().includes(searchTerm) ||
               props.office.toLowerCase().includes(searchTerm) ||
               props.description.toLowerCase().includes(searchTerm);
    });
}

function getBuildingCenter(buildingGeometry) {
    const coords = buildingGeometry.coordinates[0];
    const lats = coords.map(c => c[1]);
    const lngs = coords.map(c => c[0]);
    
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    
    return [centerLat, centerLng];
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CAMPUS_BUILDINGS,
        BUILDING_COLORS,
        getBuildingById,
        getBuildingsByType,
        searchBuildings,
        getBuildingCenter
    };
}