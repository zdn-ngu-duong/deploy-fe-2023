import { IUser, IUserMatch } from "@/types/interface";

const data: any = [
  {
    id: "1",
    name: {
      firstName: "Thanh",
      lastName: "Danh",
    },
    email: "danh@gmail.com",
    phone: "0916030512",
    birthday: "2001-05-24",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678717668/avatars/tempInfor_gvy05b.png",
    age: 26,
    lastLocation: {
      latitude: 10.8426492,
      longitude: 106.716012,
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    distance: 10,
    info: {
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      gender: {
        id: "1",
        name: "male",
      },
      bio: "Looking for someone to share my adventures with",
      height: 180,
      reason: "I'm looking for a serious relationship",
      drinking: true,
      religion: true,
      education: {
        id: 1,
        label: "University",
      },
      interests: [
        {
          id: "1",
          name: "coffee",
        },
        {
          id: "2",
          name: "reading",
        },
      ],
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
  },

  {
    id: "2",
    name: {
      firstName: "Thành",
      lastName: "Ngữ",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    age: 28,

    lastLocation: {
      latitude: 10.8432577,
      longitude: 106.7123759,
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    distance: 5,

    info: {
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      gender: {
        id: "2",
        name: "female",
      },
      bio: "Looking for someone to join me on my yoga adventures",
      height: 170,
      reason: "I'm looking for a partner who shares my interests",
      drinking: false,
      religion: false,
      education: {
        id: 2,
        label: "College",
      },
      interests: [
        {
          id: "3",
          name: "yoga",
        },
        {
          id: "4",
          name: "painting",
        },
      ],
    },

    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
  },

  {
    id: "3",
    name: {
      firstName: "Phan",
      lastName: "Trọng",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-7_muo4ef.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 32,

    lastLocation: {
      latitude: 10.8426492,
      longitude: 106.716012,
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    distance: 8,
    info: {
      height: 160,
      reason: "I'm looking for someone to travel with",
      drinking: true,
      religion: false,
      education: {
        id: 3,
        label: "Bachelor's Degree",
      },
      gender: {
        id: "2",
        name: "female",
      },

      interests: [
        {
          id: "5",
          name: "travel",
        },
        {
          id: "6",
          name: "hiking",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "Looking for someone to explore the world with",
    },
  },

  {
    id: "4",
    name: {
      firstName: "John",
      lastName: "Smith",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-8_k5k8z7.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 29,

    lastLocation: {
      latitude: 40.4044,
      longitude: -120.1222,
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    distance: 10,
    info: {
      gender: {
        id: "2",
        name: "female",
      },
      height: 180,
      reason: "I'm looking for a friend relationship",
      drinking: true,
      religion: true,
      education: {
        id: 1,
        label: "University",
      },
      interests: [
        {
          id: "1",
          name: "play games",
        },
        {
          id: "2",
          name: "reading",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "Looking for someone to share my adventures with",
    },
  },

  {
    id: "5",
    name: {
      firstName: "Sarah",
      lastName: "Lee",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead-5_cztmu0.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 29,

    lastLocation: {
      latitude: 51.5074,
      longitude: -0.1278,
      updatedAt: "2023-03-10T10:00:00.000Z",
    },
    distance: 7,
    info: {
      gender: {
        id: "2",
        name: "female",
      },
      height: 170,
      reason: "I'm looking for someone who shares my love for food",
      drinking: false,
      religion: false,
      education: {
        id: 2,
        label: "College",
      },
      interests: [
        {
          id: "6",
          name: "cooking",
        },
        {
          id: "7",
          name: "wine tasting",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "Foodie, wine enthusiast, and aspiring chef",
    },
  },

  {
    id: "6",
    name: {
      firstName: "Adam",
      lastName: "Smith",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead-2_zf8yl5.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 32,
    lastLocation: {
      latitude: 40.7128,
      longitude: -74.006,
      updatedAt: "2023-03-11T14:00:00.000Z",
    },
    distance: 3,

    info: {
      gender: {
        id: "2",
        name: "female",
      },
      height: 185,
      reason: "I'm looking for someone who is adventurous and spontaneous",
      drinking: true,
      religion: false,
      education: {
        id: 3,
        label: "Graduate school",
      },
      interests: [
        {
          id: "8",
          name: "skydiving",
        },
        {
          id: "9",
          name: "scuba diving",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "Adventurer, thrill-seeker, and adrenaline junkie",
    },
  },

  {
    id: "7",
    name: {
      firstName: "Bé",
      lastName: "Ba",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead-1_iip1qo.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 18,
    lastLocation: {
      latitude: 40.7128,
      longitude: -74.006,
      updatedAt: "2023-03-11T14:00:00.000Z",
    },
    distance: 3,
    info: {
      gender: {
        id: "2",
        name: "female",
      },
      height: 185,
      reason: "I'm looking for someone who is adventurous and spontaneous",
      drinking: true,
      religion: true,
      education: {
        id: 1,
        label: "High school",
      },
      interests: [
        {
          id: "1",
          name: "play games",
        },
        {
          id: "2",
          name: "watch movies",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "Adventurer, thrill-seeker, and adrenaline junkie",
    },
  },

  {
    id: "8",
    name: {
      firstName: "Emily",
      lastName: "Johnson",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead-4_aamjey.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 27,

    lastLocation: {
      latitude: 40.7128,
      longitude: -74.006,
      updatedAt: "2021-09-01T12:00:00.000Z",
    },
    distance: 5,
    info: {
      gender: {
        id: "2",
        name: "female",
      },
      height: 165,
      reason: "I'm looking for a kind-hearted partner",
      drinking: false,
      religion: false,
      education: {
        id: 2,
        label: "College",
      },
      interests: [
        {
          id: "2",
          name: "running",
        },
        {
          id: "3",
          name: "hiking",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "I love exploring new places and trying new things",
    },
  },

  {
    id: "9",
    name: {
      firstName: "Andrew",
      lastName: "Jackson",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead-3_urk0xm.svg",
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    age: 33,

    lastLocation: {
      latitude: 34.0522,
      longitude: -118.2437,
      updatedAt: "2022-02-01T09:30:00.000Z",
    },
    distance: 15,
    info: {
      gender: {
        id: "1",
        name: "male",
      },
      height: 190,
      reason: "I'm looking for someone with a good sense of humor",
      drinking: true,
      religion: false,
      education: {
        id: 3,
        label: "Graduate school",
      },
      interests: [
        {
          id: "4",
          name: "playing guitar",
        },
        {
          id: "5",
          name: "traveling",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "I'm a musician and a traveler, looking for someone to share my passions with",
    },
  },

  {
    id: "10",
    name: {
      firstName: "Nhat",
      lastName: "Linh",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1678690593/avatars/bighead_jlohl1.svg",
    age: 21,
    email: "john@gmail.com",
    phone: "0916030512",
    birthday: "24-05-2001",
    status: {
      isFirstUpdate: true,
      isVerified: true,
      isActive: true,
    },
    match: [
      {
        id: "2",
        name: {
          firstName: "Jane",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "jane@gmail.com",
      },
      {
        id: "3",
        name: {
          firstName: "Zoey",
          lastName: "Doe",
        },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
        email: "zoey@gmail.com",
      },
    ],
    lastLocation: {
      latitude: 50.2323,
      longitude: -100.4321,
      updatedAt: "2021-09-01T12:00:00.000Z",
    },
    distance: 5,
    info: {
      gender: {
        id: "1",
        name: "male",
      },
      height: 190,
      reason: "I'm looking for someone with a good sense of humor",
      drinking: true,
      religion: false,
      education: {
        id: 3,
        label: "Graduate school",
      },
      interests: [
        {
          id: "4",
          name: "playing guitar",
        },
        {
          id: "5",
          name: "traveling",
        },
      ],
      albums: [
        {
          id: "1",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: true,
          isDefault: true,
        },
        {
          id: "2",
          url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          isFavorite: false,
          isDefault: false,
        },
      ],
      bio: "I'm a musician and a traveler, looking for someone to share my passions with",
    },
  },
];

const match: any = [
  {
    id: "2",
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
    email: "jane@gmail.com",
  },
  {
    id: "3",
    name: {
      firstName: "Zoey",
      lastName: "Doe",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
    email: "zoey@gmail.com",
  },
  {
    id: "4",
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
    email: "jane@gmail.com",
  },
  {
    id: "5",
    name: {
      firstName: "Zoey",
      lastName: "Doe",
    },
    avatar:
      "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
    email: "zoey@gmail.com",
  },
];

const conversation: any = [
  {
    id: "1",
    users: [
      {
        id: "user1",
        name: { firstName: "John", lastName: "Doe" },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        lastLogin: "2022-03-13T14:30:00Z",
      },
      {
        id: "user2",
        name: { first: "Jane", lastName: "Doe" },
        avatar:
          "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        lastLogin: "2022-03-13T14:31:00Z",
      },
    ],
    messages: [
      {
        senderId: {
          id: "user1",
          name: { first: "John", lastName: "Doe" },
          avatar:
            "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
          lastLogin: "2022-03-13T14:30:00Z",
        },
        messages: [
          {
            type: "text",
            value: "Hi, Jane!",
            createdAt: "2022-03-13T14:32:00Z",
            updatedAt: "2022-03-13T14:32:00Z",
          },
          {
            type: "text",
            value: "How are you?",
            createdAt: "2022-03-13T14:33:00Z",
            updatedAt: "2022-03-13T14:33:00Z",
          },
        ],
      },
    ],
    updatedAt: "2022-03-13T14:33:00Z",
  },
];

const profile: any = {
  id: "1",
  name: {
    firstName: "Nhat",
    lastName: "Linh",
  },
  email: "john@gmail.com",
  phone: "0916030512",
  birthday: "2001-05-24",
  status: {
    isFirstUpdate: true,
    isVerified: true,
    isActive: true,
  },
  avatar:
    "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
  age: 26,

  lastLocation: {
    latitude: 10.75993958835834,
    longitude: 106.67893207586309,
    updatedAt: "2020-01-01T00:00:00.000Z",
  },
  distance: 10,

  info: {
    albums: [
      {
        id: "1",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: true,
        isDefault: true,
      },
      {
        id: "2",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
      {
        id: "3",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
      {
        id: "4",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
      {
        id: "5",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
      {
        id: "6",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
      {
        id: "7",
        url: "https://res.cloudinary.com/azurestore/image/upload/v1672594101/ShoeBeeDoo/mchwi95l9cupnqphns0y.jpg",
        isFavorite: false,
        isDefault: false,
      },
    ],
    bio: "Looking for someone to share my adventures with Looking for someone to share my adventures with Looking for someone to share my adventures with",
    height: 180,
    reason: "Đang tìm một mối quan hệ mới",
    drinking: true,
    religion: true,
    education: {
      id: 1,
      label: "Đại học",
    },
    gender: {
      id: "1",
      name: "male",
    },
    interests: [
      {
        id: "1",
        name: "coffee",
      },
      {
        id: "2",
        name: "reading",
      },
    ],
  },

  match: [
    {
      id: "2",
      name: {
        firstName: "Jane",
        lastName: "Doe",
      },
      avatar:
        "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
      email: "jane@gmail.com",
    },
    {
      id: "3",
      name: {
        firstName: "Zoey",
        lastName: "Doe",
      },
      avatar:
        "https://res.cloudinary.com/azurestore/image/upload/v1678690594/avatars/bighead-10_zbyosz.svg",
      email: "zoey@gmail.com",
    },
  ],
};

// const reasonOptions: IReasonOption[] = [
//   {
//     id: 1,
//     value: "DATE",
//     label: "Muốn hẹn hò",
//   },
//   {
//     id: 2,
//     value: "CHAT",
//     label: "Muốn tâm sự",
//   },
//   {
//     id: 3,
//     value: "FRIEND",
//     label: "Muốn kết bạn bốn phương",
//   },
// ];

const genderOptions: IGenderOption[] = [
  {
    _id: 1,
    value: "MALE",
    label: "Nam",
  },
  {
    _id: 2,
    value: "FEMALE",
    label: "Nữ",
  },
  {
    _id: 3,
    value: "OTHER",
    label: "Khác",
  },
];

const educationOptions: IEducation[] = [
  {
    _id: 1,
    value: "HIGH-SCHOOL",
    label: "Trung học",
  },
  {
    _id: 2,
    value: "HIGHER",
    label: "Đại học",
  },
];

const drinkingOptions: IDrinkingOption[] = [
  {
    _id: 1,
    value: "YES",
    label: "Có",
  },
  {
    _id: 2,
    value: "NO",
    label: "Không",
  },
];

const religionOptions: IReligionOption[] = [
  {
    _id: 1,
    value: "CHRISTIAN",
    label: "Công giáo",
  },
  {
    _id: 2,
    value: "BUDDHISM",
    label: "Phật giáo",
  },
  {
    _id: 3,
    value: "OTHER",
    label: "Khác",
  },
];

export {
  conversation,
  data,
  drinkingOptions,
  educationOptions,
  genderOptions,
  match,
  profile,
  religionOptions,
};
