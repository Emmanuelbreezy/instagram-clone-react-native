import { ImageSourcePropType } from "react-native"

export type DataType = {
        id: number,
        name : string
        username : string
        profile : string,
        story : {
            time : number,
            image : ImageSourcePropType
        },
        post : {
            time : string
            date :string
            image : ImageSourcePropType
            caption : string,
            like : number,
        }
}




export const userData:DataType[] = [
    {
        id: 1,
        name : 'Elon Musk',
        username : 'muskelon',
        profile : require('@/assets/elondp.png'),
        story : {
            time : 10,
            image : require('@/assets/elonstory.png'),
        },
        post : {
            time : '09:00:00',
            date : '01/05/2023',
            image : require('@/assets/elonpost.png'),
            caption : 'Hi Everyone, Elon musk is here',
            like : 30,
        }
    },
    {
        id: 2,
        name : 'Harsh Beniwal',
        username : 'harsh',
        profile : require('@/assets/harshdp.png'),
        story : {
            time : 8,
            image : require('@/assets/harshs.png'),
        },
        post : {
            time : '04:00 PM',
            date : '08/04/2023',
            image : require('@/assets/harshp.png'),
            caption : 'hi....',
            like : 25,
        }
    },
    {
        id: 3,
        name : 'Modi',
        username : 'nmodi',
        profile : require('@/assets/modidp.png'),
        story : {
            time : 15,
            image : require('@/assets/modip.png'),
        },
        post : {
            time : '07:00 AM',
            date : '12/05/2023',
            image : require('@/assets/modis.png'),
            caption : '2000 ke note band',
            like : 99,
        }
    },
    {
        id: 4,
        name : 'Sonam',
        username : 'sonamb12',
        profile : require('@/assets/sonamdp.png'),
        story : {
            time : 13,
            image : require('@/assets/sonams.png'),
        },
        post : {
            time : '07:00 AM',
            date : '12/05/2023',
            image : require('@/assets/sonmp.png'),
            caption : 'carry on jatta',
            like : 88,
        }
    },
    {
        id: 5,
        name : 'Harsh Beniwal',
        username : 'harsh',
        profile : require('@/assets/harshdp.png'),
        story : {
            time : 6,
            image : require('@/assets/harshs.png'),
        },
        post : {
            time : '04:00 PM',
            date : '08/04/2023',
            image : require('@/assets/harshp.png'),
            caption : 'hi....',
            like : 25,
        }
    },
    {
        id: 6,
        name : 'Elon Musk',
        username : 'muskelon',
        profile : require('@/assets/elondp.png'),
        story : {
            time : 2,
            image : require('@/assets/elonstory.png'),
        },
        post : {
            time : '09:00:00',
            date : '01/05/2023',
            image : require('@/assets/elonpost.png'),
            caption : 'Hi Everyone, Elon musk is here',
            like : 10,
        }
    },

]